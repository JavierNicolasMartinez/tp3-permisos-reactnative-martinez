// Lógica de permisos: acá se juntan las funciones de cada módulo de Expo
// para que el resto de la app use siempre la misma forma.
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export type Recurso = 'camara' | 'ubicacion' | 'notificaciones';

export type Estado = 'cargando' | 'concedido' | 'preguntable' | 'bloqueado';

// Respuesta "genérica": todos los módulos devuelven status, granted y canAskAgain.
// Algunos agregan datos extra (accuracy en ubicación, ios.status en notificaciones).
export type Respuesta = {
  status: string;
  granted: boolean;
  canAskAgain: boolean;
  android?: { accuracy?: string; importance?: number };
  ios?: { accuracy?: string; status?: number };
};

export const RECURSOS: Recurso[] = ['camara', 'ubicacion', 'notificaciones'];

// Textos que se muestran en la pantalla previa (/permisos/[recurso]).
// Siguen el mismo molde que los textos de propósito de app.json.
export const INFO_RECURSO: Record<Recurso, { nombre: string; beneficio: string }> = {
  camara: {
    nombre: 'Cámara',
    beneficio: 'Usamos tu cámara para leer el QR de la puerta del aula y sacar la foto del desperfecto.',
  },
  ubicacion: {
    nombre: 'Ubicación',
    beneficio: 'Usamos tu ubicación para marcar en qué parte del Instituto está el problema.',
  },
  notificaciones: {
    nombre: 'Notificaciones',
    beneficio: 'Usamos las notificaciones para avisarte cuando se resuelva tu reporte.',
  },
};

export function esRecurso(valor: unknown): valor is Recurso {
  return typeof valor === 'string' && (RECURSOS as string[]).includes(valor);
}

// Android: el diálogo de notificaciones no aparece si no existe al menos un canal.
export async function crearCanalReportes() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('reportes', {
      name: 'Reportes',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
}

// Consultar: NUNCA muestra un diálogo, solo lee lo que ya decidió la persona.
export async function consultarPermiso(recurso: Recurso): Promise<Respuesta> {
  if (recurso === 'camara') return Camera.getCameraPermissionsAsync();
  if (recurso === 'ubicacion') return Location.getForegroundPermissionsAsync();
  return Notifications.getPermissionsAsync();
}

// Solicitar: puede mostrar el diálogo del sistema (si canAskAgain es true).
export async function solicitarPermiso(recurso: Recurso): Promise<Respuesta> {
  if (recurso === 'camara') return Camera.requestCameraPermissionsAsync();
  // Solo primer plano: la app no necesita la ubicación en segundo plano.
  if (recurso === 'ubicacion') return Location.requestForegroundPermissionsAsync();

  await crearCanalReportes(); // primero el canal, después el pedido
  return Notifications.requestPermissionsAsync({
    ios: { allowAlert: true, allowBadge: true, allowSound: true },
  });
}

// Pasa la respuesta de Expo a uno de nuestros 4 estados.
// Los dos campos que deciden todo: granted (¿lo uso?) y canAskAgain (¿lo pido o mando a Ajustes?).
export function calcularEstado(respuesta: Respuesta | null): Estado {
  if (!respuesta) return 'cargando';
  if (respuesta.granted || esParcial(respuesta)) return 'concedido';
  if (respuesta.canAskAgain) return 'preguntable';
  return 'bloqueado';
}

// Acceso parcial: ubicación aproximada (Android "coarse" / iOS "reduced")
// o notificaciones provisionales de iOS.
export function esParcial(respuesta: Respuesta | null): boolean {
  if (!respuesta) return false;
  const aproximada =
    respuesta.android?.accuracy === 'coarse' || respuesta.ios?.accuracy === 'reduced';
  const provisional =
    respuesta.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
  return aproximada || provisional;
}

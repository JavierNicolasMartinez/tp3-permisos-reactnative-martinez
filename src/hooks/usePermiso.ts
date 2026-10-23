// Hook unificado de permisos.
// Devuelve el estado ('cargando' | 'concedido' | 'preguntable' | 'bloqueado'),
// si el acceso es parcial y las funciones pedir() y abrirAjustes().
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Linking } from 'react-native';

import {
  calcularEstado,
  consultarPermiso,
  esParcial,
  solicitarPermiso,
  type Recurso,
  type Respuesta,
} from '@/lib/permisos';

export function usePermiso(recurso: Recurso) {
  // null = todavía no sabemos nada (estado "cargando")
  const [respuesta, setRespuesta] = useState<Respuesta | null>(null);
  const appStateAnterior = useRef(AppState.currentState);

  // Vuelve a preguntarle al sistema cómo está el permiso (sin mostrar diálogo).
  const revisar = useCallback(async () => {
    try {
      const actual = await consultarPermiso(recurso);
      setRespuesta(actual);
    } catch (error) {
      console.warn('No se pudo consultar el permiso', recurso, error);
    }
  }, [recurso]);

  // 1) Al entrar a la pantalla (y cada vez que vuelve a tener el foco).
  useFocusEffect(
    useCallback(() => {
      revisar();
    }, [revisar]),
  );

  // 2) Al volver de Ajustes: la app pasa de "background" a "active".
  // Los hooks de Expo no se enteran solos del cambio, por eso hay que volver a consultar.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (nuevo) => {
      const estabaAfuera = /inactive|background/.test(appStateAnterior.current);
      if (estabaAfuera && nuevo === 'active') revisar();
      appStateAnterior.current = nuevo;
    });
    return () => sub.remove();
  }, [revisar]);

  // Muestra el diálogo del sistema. Solo se llama cuando la persona toca "Continuar".
  const pedir = useCallback(async () => {
    const nueva = await solicitarPermiso(recurso);
    setRespuesta(nueva);
    return nueva;
  }, [recurso]);

  // Abre la pantalla de la app dentro de Ajustes (Android e iOS).
  const abrirAjustes = useCallback(() => {
    Linking.openSettings();
  }, []);

  return {
    estado: calcularEstado(respuesta),
    parcial: esParcial(respuesta),
    respuesta,
    pedir,
    abrirAjustes,
    revisar,
  };
}

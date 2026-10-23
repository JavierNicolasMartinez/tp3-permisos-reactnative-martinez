// Notificaciones locales (no usamos push, por eso funcionan también en Expo Go).
import * as Notifications from 'expo-notifications';

import { crearCanalReportes } from '@/lib/permisos';

// Cómo se muestra una notificación si llega con la app abierta.
export function configurarNotificaciones() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

// Programa el aviso "tu reporte se resolvió" para dentro de 10 segundos.
export async function programarAvisoResuelto(titulo: string) {
  await crearCanalReportes();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Reporte resuelto',
      body: `Se resolvió tu reporte: "${titulo}".`,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 10,
      channelId: 'reportes',
    },
  });
}

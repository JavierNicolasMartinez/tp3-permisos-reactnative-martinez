import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { configurarNotificaciones } from '@/lib/notificaciones';
import { ReportesProvider } from '@/lib/reportes';

// Se configura una sola vez, al cargar la app. NO pide ningún permiso.
configurarNotificaciones();

export default function RootLayout() {
  return (
    <ReportesProvider>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="reporte/nuevo" options={{ title: 'Nuevo reporte' }} />
        <Stack.Screen name="reporte/escanear" options={{ title: 'Escanear QR del aula' }} />
        <Stack.Screen name="reporte/foto" options={{ title: 'Foto del desperfecto' }} />
        <Stack.Screen name="reporte/ubicacion" options={{ title: 'Ubicación del problema' }} />
        <Stack.Screen name="reporte/[id]" options={{ title: 'Detalle del reporte' }} />
        <Stack.Screen name="ajustes-app" options={{ title: 'Ajustes de la app' }} />
        <Stack.Screen
          name="permisos/[recurso]"
          options={{
            presentation: 'modal',
            title: 'Antes de continuar',
            // Sin "Cerrar" ni flecha: un solo botón, "Continuar" (pauta 5.1.1(iv))
            headerBackVisible: false,
            headerLeft: () => null,
          }}
        />
      </Stack>
    </ReportesProvider>
  );
}

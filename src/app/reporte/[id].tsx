// "/reporte/[id]" — Detalle del reporte.
// Valida el id y muestra un mensaje si no existe.
import { Image } from 'expo-image';
import * as Notifications from 'expo-notifications';
import { useLocalSearchParams } from 'expo-router';
import { Alert, ScrollView, Text, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { comunes } from '@/components/estilos';
import { programarAvisoResuelto } from '@/lib/notificaciones';
import { useReportes } from '@/lib/reportes';

export default function DetalleReporte() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { reportes, cambiarEstado, agregarAviso, avisarAlResolver } = useReportes();
  const reporte = reportes.find((r) => r.id === id);

  if (!reporte) {
    return (
      <View style={comunes.pantalla}>
        <Text style={comunes.titulo}>Reporte no encontrado</Text>
        <Text style={comunes.texto}>No existe ningún reporte con el id "{id}".</Text>
      </View>
    );
  }

  // Botón de prueba: marca el reporte como resuelto y avisa.
  async function simularResolucion() {
    if (!reporte) return;
    cambiarEstado(reporte.id, 'resuelto');
    // La bandeja de avisos siempre recibe el aviso (alternativa a las notificaciones).
    agregarAviso(`Se resolvió tu reporte: "${reporte.titulo}".`);

    const permiso = await Notifications.getPermissionsAsync();
    if (avisarAlResolver && permiso.granted) {
      await programarAvisoResuelto(reporte.titulo);
      Alert.alert('Listo', 'En 10 segundos te llega la notificación.');
    } else {
      Alert.alert('Listo', 'Te dejamos el aviso en la pestaña "Avisos".');
    }
  }

  let donde = 'Sin ubicación';
  if (reporte.sector) donde = `Sector: ${reporte.sector}`;
  if (reporte.ubicacion) {
    donde = reporte.ubicacion.aproximada
      ? 'Ubicación aproximada'
      : `${reporte.ubicacion.latitud.toFixed(5)}, ${reporte.ubicacion.longitud.toFixed(5)}`;
  }

  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      <Text style={comunes.titulo}>{reporte.titulo}</Text>
      <Text style={comunes.texto}>{reporte.descripcion || 'Sin descripción'}</Text>
      <Text style={comunes.etiqueta}>Aula</Text>
      <Text style={comunes.texto}>{reporte.aula}</Text>
      <Text style={comunes.etiqueta}>Categoría</Text>
      <Text style={comunes.texto}>{reporte.categoria}</Text>
      <Text style={comunes.etiqueta}>Dónde</Text>
      <Text style={comunes.texto}>{donde}</Text>
      <Text style={comunes.etiqueta}>Estado</Text>
      <Text style={comunes.texto}>{reporte.estado}</Text>
      <Text style={comunes.gris}>{reporte.fecha}</Text>

      {reporte.fotoUri && (
        <Image
          source={{ uri: reporte.fotoUri }}
          style={{ width: '100%', height: 220, borderRadius: 8, marginTop: 12 }}
        />
      )}

      {reporte.estado !== 'resuelto' && (
        <View style={{ marginTop: 16 }}>
          <Boton titulo="Simular resolución" onPress={simularResolucion} />
        </View>
      )}
    </ScrollView>
  );
}

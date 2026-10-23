// "/avisos" — Bandeja de avisos dentro de la app.
// Es la alternativa a las notificaciones: los avisos llegan acá aunque se haya denegado el permiso.
import { FlatList, Text, View } from 'react-native';

import { comunes } from '@/components/estilos';
import { useReportes } from '@/lib/reportes';

export default function Avisos() {
  const { avisos } = useReportes();

  return (
    <View style={[comunes.pantalla, { flex: 1 }]}>
      <FlatList
        data={avisos}
        keyExtractor={(a) => a.id}
        ListEmptyComponent={
          <Text style={comunes.gris}>
            No tenés avisos. Cuando se resuelva un reporte vas a verlo acá.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={comunes.tarjeta}>
            <Text style={comunes.texto}>{item.texto}</Text>
            <Text style={comunes.gris}>{item.fecha}</Text>
          </View>
        )}
      />
    </View>
  );
}

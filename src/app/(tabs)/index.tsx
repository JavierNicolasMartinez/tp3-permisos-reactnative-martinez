// "/" — Inicio: lista de reportes propios. No usa ningún permiso.
import { Link, router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { comunes } from '@/components/estilos';
import { useReportes, type EstadoReporte } from '@/lib/reportes';

const COLORES: Record<EstadoReporte, string> = {
  pendiente: '#b45309',
  'en curso': '#1d4ed8',
  resuelto: '#15803d',
};

export default function Inicio() {
  const { reportes } = useReportes();

  return (
    <View style={[comunes.pantalla, { flex: 1 }]}>
      <Boton titulo="Nuevo reporte" onPress={() => router.push('/reporte/nuevo')} />

      <FlatList
        data={reportes}
        keyExtractor={(r) => r.id}
        ListEmptyComponent={<Text style={comunes.gris}>Todavía no cargaste reportes.</Text>}
        renderItem={({ item }) => (
          <Link href={`/reporte/${item.id}`} asChild>
            <Pressable style={comunes.tarjeta}>
              <Text style={estilos.titulo}>{item.titulo || 'Sin título'}</Text>
              <Text style={comunes.gris}>
                {item.aula || 'Sin aula'} · {item.categoria}
              </Text>
              <Text style={[estilos.estado, { color: COLORES[item.estado] }]}>{item.estado}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: { fontSize: 16, fontWeight: '600' },
  estado: { marginTop: 4, fontWeight: '700', textTransform: 'uppercase', fontSize: 12 },
});

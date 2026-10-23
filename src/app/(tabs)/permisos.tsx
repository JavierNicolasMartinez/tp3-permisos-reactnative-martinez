// "/permisos" — Panel con el estado de cada permiso.
// Se actualiza solo al volver de Ajustes porque cada fila usa usePermiso (que escucha AppState).
import { router } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { comunes } from '@/components/estilos';
import { usePermiso } from '@/hooks/usePermiso';
import { INFO_RECURSO, RECURSOS, type Estado, type Recurso } from '@/lib/permisos';

const COLOR_ESTADO: Record<Estado, string> = {
  cargando: '#666',
  concedido: '#15803d',
  preguntable: '#b45309',
  bloqueado: '#b91c1c',
};

function FilaPermiso({ recurso }: { recurso: Recurso }) {
  const { estado, parcial, respuesta, abrirAjustes } = usePermiso(recurso);

  // El "matiz": datos extra que da cada plataforma.
  const matices: string[] = [];
  if (respuesta?.android?.accuracy) matices.push(`android.accuracy: ${respuesta.android.accuracy}`);
  if (respuesta?.ios?.accuracy) matices.push(`ios.accuracy: ${respuesta.ios.accuracy}`);
  if (parcial) matices.push('Acceso parcial');

  return (
    <View style={comunes.tarjeta}>
      <Text style={estilos.nombre}>{INFO_RECURSO[recurso].nombre}</Text>
      <Text style={[estilos.estado, { color: COLOR_ESTADO[estado] }]}>{estado}</Text>
      <Text style={comunes.gris}>status: {respuesta?.status ?? '—'} · canAskAgain: {String(respuesta?.canAskAgain ?? '—')}</Text>
      {matices.map((m) => (
        <Text key={m} style={comunes.gris}>{m}</Text>
      ))}

      {estado === 'preguntable' && (
        <Boton titulo="Pedir" secundario onPress={() => router.push(`/permisos/${recurso}`)} />
      )}
      {estado === 'bloqueado' && <Boton titulo="Abrir Ajustes" secundario onPress={abrirAjustes} />}
    </View>
  );
}

export default function Permisos() {
  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      <Text style={comunes.gris}>Plataforma: {Platform.OS} {String(Platform.Version)}</Text>

      {RECURSOS.map((recurso) => (
        <FilaPermiso key={recurso} recurso={recurso} />
      ))}

      <View style={comunes.tarjeta}>
        <Text style={estilos.nombre}>Fotos (galería)</Text>
        <Text style={[estilos.estado, { color: '#15803d' }]}>no hace falta</Text>
        <Text style={comunes.gris}>
          Para elegir una foto usamos el selector del sistema: la persona elige y la app recibe solo esa imagen.
        </Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  nombre: { fontSize: 16, fontWeight: '700' },
  estado: { fontWeight: '700', textTransform: 'uppercase', marginVertical: 4 },
});

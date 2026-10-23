import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Se muestra mientras el hook todavía está consultando el permiso.
export function Cargando({ texto = 'Revisando permisos…' }: { texto?: string }) {
  return (
    <View style={estilos.contenedor}>
      <ActivityIndicator size="large" />
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  texto: { marginTop: 12, color: '#444' },
});

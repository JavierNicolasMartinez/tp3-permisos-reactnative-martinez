import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  titulo: string;
  texto: string;
  tipo?: 'info' | 'alerta';
  children?: ReactNode;
};

// Caja con una explicación y, debajo, los botones que se le pasen.
export function Explicacion({ titulo, texto, tipo = 'info', children }: Props) {
  return (
    <View style={[estilos.caja, tipo === 'alerta' && estilos.alerta]}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.texto}>{texto}</Text>
      {children}
    </View>
  );
}

const estilos = StyleSheet.create({
  caja: {
    backgroundColor: '#eff6ff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
  },
  alerta: { backgroundColor: '#fef3c7' },
  titulo: { fontSize: 17, fontWeight: '700', marginBottom: 6 },
  texto: { fontSize: 15, color: '#333', marginBottom: 8 },
});

import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  titulo: string;
  onPress: () => void;
  secundario?: boolean;
  deshabilitado?: boolean;
};

export function Boton({ titulo, onPress, secundario, deshabilitado }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={deshabilitado}
      style={[estilos.boton, secundario && estilos.secundario, deshabilitado && estilos.deshabilitado]}>
      <Text style={[estilos.texto, secundario && estilos.textoSecundario]}>{titulo}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  secundario: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#1d4ed8' },
  deshabilitado: { opacity: 0.5 },
  texto: { color: '#fff', fontWeight: '600', fontSize: 16 },
  textoSecundario: { color: '#1d4ed8' },
});

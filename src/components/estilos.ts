import { StyleSheet } from 'react-native';

// Estilos que se repiten en varias pantallas.
export const comunes = StyleSheet.create({
  pantalla: { flexGrow: 1, padding: 16, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  etiqueta: { fontSize: 14, fontWeight: '600', marginTop: 12, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  texto: { fontSize: 15, color: '#333' },
  gris: { fontSize: 13, color: '#666' },
  fila: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    borderWidth: 1,
    borderColor: '#1d4ed8',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  chipActivo: { backgroundColor: '#1d4ed8' },
  chipTexto: { color: '#1d4ed8' },
  chipTextoActivo: { color: '#fff' },
  tarjeta: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
});

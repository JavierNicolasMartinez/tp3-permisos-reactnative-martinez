import { Pressable, Text, View } from 'react-native';

import { comunes } from '@/components/estilos';

type Props = {
  opciones: string[];
  seleccionada?: string;
  onElegir: (opcion: string) => void;
};

// Lista de "chips" para elegir una sola opción (categoría, sector…).
export function Opciones({ opciones, seleccionada, onElegir }: Props) {
  return (
    <View style={comunes.fila}>
      {opciones.map((opcion) => {
        const activa = opcion === seleccionada;
        return (
          <Pressable
            key={opcion}
            onPress={() => onElegir(opcion)}
            style={[comunes.chip, activa && comunes.chipActivo]}>
            <Text style={activa ? comunes.chipTextoActivo : comunes.chipTexto}>{opcion}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

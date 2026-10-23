// "/reporte/nuevo" — Formulario del reporte.
// Al abrir NO pide ningún permiso: cada permiso se pide recién al tocar su función.
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { comunes } from '@/components/estilos';
import { Opciones } from '@/components/Opciones';
import { CATEGORIAS, useReportes, type Categoria } from '@/lib/reportes';

export default function NuevoReporte() {
  const { borrador, actualizarBorrador, guardarReporte } = useReportes();

  function guardar() {
    if (!borrador.titulo.trim() || !borrador.aula.trim()) {
      Alert.alert('Faltan datos', 'Completá al menos el título y el aula.');
      return;
    }
    const id = guardarReporte();
    router.replace(`/reporte/${id}`);
  }

  // Texto que resume dónde está el problema
  let dondeTexto = 'Sin ubicación';
  if (borrador.ubicacion) {
    dondeTexto = borrador.ubicacion.aproximada
      ? 'Ubicación aproximada'
      : `${borrador.ubicacion.latitud.toFixed(5)}, ${borrador.ubicacion.longitud.toFixed(5)}`;
  }
  if (borrador.sector) dondeTexto = `Sector: ${borrador.sector}`;

  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      <Text style={comunes.etiqueta}>Título</Text>
      <TextInput
        style={comunes.input}
        placeholder="Ej.: Canilla que pierde"
        value={borrador.titulo}
        onChangeText={(titulo) => actualizarBorrador({ titulo })}
      />

      <Text style={comunes.etiqueta}>Descripción</Text>
      <TextInput
        style={[comunes.input, { minHeight: 80 }]}
        multiline
        placeholder="Contanos qué pasa"
        value={borrador.descripcion}
        onChangeText={(descripcion) => actualizarBorrador({ descripcion })}
      />

      <Text style={comunes.etiqueta}>Aula</Text>
      <TextInput
        style={comunes.input}
        placeholder="Ej.: Aula 12"
        value={borrador.aula}
        onChangeText={(aula) => actualizarBorrador({ aula })}
      />
      <Boton titulo="Escanear QR del aula" secundario onPress={() => router.push('/reporte/escanear')} />

      <Text style={comunes.etiqueta}>Categoría</Text>
      <Opciones
        opciones={CATEGORIAS}
        seleccionada={borrador.categoria}
        onElegir={(categoria) => actualizarBorrador({ categoria: categoria as Categoria })}
      />

      <Text style={comunes.etiqueta}>Foto</Text>
      {borrador.fotoUri ? (
        <Image source={{ uri: borrador.fotoUri }} style={{ width: '100%', height: 180, borderRadius: 8 }} />
      ) : (
        <Text style={comunes.gris}>Sin foto</Text>
      )}
      <Boton titulo="Adjuntar foto" secundario onPress={() => router.push('/reporte/foto')} />

      <Text style={comunes.etiqueta}>Dónde está</Text>
      <Text style={comunes.gris}>{dondeTexto}</Text>
      <Boton titulo="Marcar ubicación" secundario onPress={() => router.push('/reporte/ubicacion')} />

      <View style={{ marginTop: 16 }}>
        <Boton titulo="Guardar reporte" onPress={guardar} />
      </View>
    </ScrollView>
  );
}

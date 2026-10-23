// "/reporte/foto" — Adjuntar la foto del desperfecto.
// - "Elegir de la galería": selector del sistema, SIN pedir permiso de galería.
// - "Sacar foto": necesita la cámara, así que pasa por la pantalla previa.
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { ScrollView, Text } from 'react-native';

import { Boton } from '@/components/Boton';
import { Cargando } from '@/components/Cargando';
import { comunes } from '@/components/estilos';
import { Explicacion } from '@/components/Explicacion';
import { usePermiso } from '@/hooks/usePermiso';
import { useReportes } from '@/lib/reportes';

export default function Foto() {
  const { estado, abrirAjustes } = usePermiso('camara');
  const { borrador, actualizarBorrador } = useReportes();

  // Selector del sistema: la persona elige y la app recibe solo esa imagen.
  async function elegirDeGaleria() {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.6,
    });
    if (!resultado.canceled) actualizarBorrador({ fotoUri: resultado.assets[0].uri });
  }

  async function sacarFoto() {
    // Si todavía no hay permiso, mostramos primero la pantalla previa (no el diálogo directo).
    if (estado === 'preguntable') {
      router.push('/permisos/camara');
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({ quality: 0.6 });
    if (!resultado.canceled) actualizarBorrador({ fotoUri: resultado.assets[0].uri });
  }

  if (estado === 'cargando') return <Cargando />;

  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      {borrador.fotoUri ? (
        <Image source={{ uri: borrador.fotoUri }} style={{ width: '100%', height: 260, borderRadius: 8 }} />
      ) : (
        <Text style={comunes.gris}>Todavía no adjuntaste una foto.</Text>
      )}

      <Boton titulo="Elegir de la galería" onPress={elegirDeGaleria} />

      {estado === 'bloqueado' ? (
        <Explicacion
          tipo="alerta"
          titulo="La cámara está bloqueada"
          texto="Podés elegir una foto de la galería, o habilitar la cámara en Ajustes para sacarla en el momento.">
          <Boton titulo="Abrir Ajustes" secundario onPress={abrirAjustes} />
        </Explicacion>
      ) : (
        <Boton titulo="Sacar foto" secundario onPress={sacarFoto} />
      )}

      {borrador.fotoUri && <Boton titulo="Listo" onPress={() => router.back()} />}
    </ScrollView>
  );
}

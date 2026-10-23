// "/reporte/ubicacion" — Marca dónde está el problema.
// Solo pide ubicación en primer plano.
// - Aproximada: no mostramos coordenadas, solo "Ubicación aproximada".
// - Denegada: se elige el sector a mano.
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';

import { Boton } from '@/components/Boton';
import { Cargando } from '@/components/Cargando';
import { comunes } from '@/components/estilos';
import { Explicacion } from '@/components/Explicacion';
import { Opciones } from '@/components/Opciones';
import { usePermiso } from '@/hooks/usePermiso';
import { SECTORES, useReportes } from '@/lib/reportes';

export default function Ubicacion() {
  const { estado, parcial, abrirAjustes } = usePermiso('ubicacion');
  const { borrador, actualizarBorrador } = useReportes();
  const [buscando, setBuscando] = useState(false);

  async function usarMiUbicacion() {
    if (estado === 'preguntable') {
      router.push('/permisos/ubicacion'); // pantalla previa
      return;
    }
    try {
      setBuscando(true);
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      actualizarBorrador({
        ubicacion: { latitud: coords.latitude, longitud: coords.longitude, aproximada: parcial },
        sector: undefined,
      });
    } catch {
      Alert.alert('No pudimos obtener la ubicación', 'Elegí el sector a mano.');
    } finally {
      setBuscando(false);
    }
  }

  function elegirSector(sector: string) {
    actualizarBorrador({ sector, ubicacion: undefined });
  }

  if (estado === 'cargando') return <Cargando />;

  // Qué mostramos de la ubicación guardada
  let textoUbicacion = '';
  if (borrador.ubicacion) {
    textoUbicacion = borrador.ubicacion.aproximada
      ? 'Ubicación aproximada'
      : `Lat: ${borrador.ubicacion.latitud.toFixed(5)}  Long: ${borrador.ubicacion.longitud.toFixed(5)}`;
  }

  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      {estado === 'bloqueado' ? (
        <Explicacion
          tipo="alerta"
          titulo="La ubicación está bloqueada"
          texto="No pasa nada: elegí el sector a mano. Si preferís usar el GPS, habilitalo en Ajustes.">
          <Boton titulo="Abrir Ajustes" secundario onPress={abrirAjustes} />
        </Explicacion>
      ) : (
        <Boton
          titulo={buscando ? 'Buscando…' : 'Usar mi ubicación'}
          deshabilitado={buscando}
          onPress={usarMiUbicacion}
        />
      )}

      {estado === 'concedido' && parcial && (
        <Text style={comunes.gris}>
          Nos diste la ubicación aproximada: alcanza para saber la zona, no el punto exacto.
        </Text>
      )}

      {textoUbicacion !== '' && <Text style={[comunes.texto, { marginTop: 8 }]}>{textoUbicacion}</Text>}

      <Text style={comunes.etiqueta}>O elegí el sector a mano</Text>
      <Opciones opciones={SECTORES} seleccionada={borrador.sector} onElegir={elegirSector} />

      {(borrador.ubicacion || borrador.sector) && (
        <Boton titulo="Listo" onPress={() => router.back()} />
      )}
    </ScrollView>
  );
}

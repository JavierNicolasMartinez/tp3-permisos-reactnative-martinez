// "/reporte/escanear" — Lee el QR de la puerta del aula y completa el campo "aula".
// Maneja los 4 estados del hook: cargando → concedido → preguntable → bloqueado.
// Si no hay cámara, el código del aula se puede escribir a mano.
import { CameraView, type BarcodeScanningResult } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { Cargando } from '@/components/Cargando';
import { comunes } from '@/components/estilos';
import { Explicacion } from '@/components/Explicacion';
import { usePermiso } from '@/hooks/usePermiso';
import { useReportes } from '@/lib/reportes';

export default function Escanear() {
  const { estado, abrirAjustes } = usePermiso('camara');
  const { actualizarBorrador } = useReportes();
  const [codigoManual, setCodigoManual] = useState('');
  const yaLeido = useRef(false); // evita leer el mismo QR varias veces

  function usarCodigo(codigo: string) {
    actualizarBorrador({ aula: codigo.trim() });
    router.back();
  }

  function alLeerQR(resultado: BarcodeScanningResult) {
    if (yaLeido.current) return;
    yaLeido.current = true;
    usarCodigo(resultado.data);
  }

  // 1. Cargando: el hook todavía está consultando.
  if (estado === 'cargando') return <Cargando />;

  // 2. Concedido: mostramos la cámara.
  if (estado === 'concedido') {
    return (
      <View style={{ flex: 1 }}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
          onBarcodeScanned={alLeerQR}
        />
        <Text style={estilos.ayuda}>Apuntá al QR pegado en la puerta del aula</Text>
      </View>
    );
  }

  // 3 y 4. Sin cámara: explicación + alternativa manual.
  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      {estado === 'preguntable' ? (
        <Explicacion
          titulo="Escanear con la cámara"
          texto="Usamos la cámara para leer el QR de la puerta del aula y completar el campo solo.">
          <Boton titulo="Usar la cámara" onPress={() => router.push('/permisos/camara')} />
        </Explicacion>
      ) : (
        <Explicacion
          tipo="alerta"
          titulo="La cámara está bloqueada"
          texto="Ya no podemos mostrar el pedido del sistema. Si querés escanear, habilitá la cámara en Ajustes.">
          <Boton titulo="Abrir Ajustes" onPress={abrirAjustes} />
        </Explicacion>
      )}

      <Text style={comunes.etiqueta}>O escribí el código del aula</Text>
      <TextInput
        style={comunes.input}
        placeholder="Ej.: Aula 12"
        value={codigoManual}
        onChangeText={setCodigoManual}
      />
      <Boton
        titulo="Usar este código"
        secundario
        deshabilitado={!codigoManual.trim()}
        onPress={() => usarCodigo(codigoManual)}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  ayuda: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },
});

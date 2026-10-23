// "/permisos/[recurso]" — Pantalla previa al diálogo del sistema (se abre como modal).
// Tiene: el beneficio en una frase, UN solo botón ("Continuar") y la aclaración de Ajustes.
// No tiene "Ahora no" ni "Cerrar" (pauta 5.1.1(iv) de Apple).
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { Cargando } from '@/components/Cargando';
import { comunes } from '@/components/estilos';
import { usePermiso } from '@/hooks/usePermiso';
import { esRecurso, INFO_RECURSO, type Recurso } from '@/lib/permisos';

export default function PantallaPrevia() {
  const { recurso } = useLocalSearchParams<{ recurso: string }>();

  if (!esRecurso(recurso)) {
    return (
      <View style={comunes.pantalla}>
        <Text style={comunes.texto}>El recurso "{recurso}" no existe.</Text>
      </View>
    );
  }
  return <Contenido recurso={recurso} />;
}

function Contenido({ recurso }: { recurso: Recurso }) {
  const { estado, pedir, abrirAjustes } = usePermiso(recurso);
  const info = INFO_RECURSO[recurso];

  async function continuar() {
    await pedir(); // acá recién aparece el diálogo del sistema
    router.back(); // volvemos a la función; esa pantalla vuelve a consultar el permiso
  }

  if (estado === 'cargando') return <Cargando />;

  return (
    <View style={[comunes.pantalla, estilos.centro]}>
      <Text style={estilos.titulo}>{info.nombre}</Text>

      {estado === 'bloqueado' ? (
        <>
          <Text style={estilos.texto}>
            El permiso de {info.nombre.toLowerCase()} está desactivado para esta app y el sistema ya no
            muestra el diálogo. Para habilitarlo:
          </Text>
          <Text style={estilos.pasos}>
            Android: Ajustes → Apps → Mantenimiento IPF → Permisos → {info.nombre} → Permitir.
            {'\n'}iOS: Ajustes → Mantenimiento IPF → {info.nombre} → activar.
          </Text>
          <Boton titulo="Abrir Ajustes" onPress={abrirAjustes} />
        </>
      ) : estado === 'concedido' ? (
        <>
          <Text style={estilos.texto}>Este permiso ya está concedido.</Text>
          <Boton titulo="Continuar" onPress={() => router.back()} />
        </>
      ) : (
        <>
          <Text style={estilos.texto}>{info.beneficio}</Text>
          <Boton titulo="Continuar" onPress={continuar} />
        </>
      )}

      <Text style={[comunes.gris, { textAlign: 'center' }]}>Podés cambiarlo cuando quieras en Ajustes.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  centro: { justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  texto: { fontSize: 17, marginBottom: 16, textAlign: 'center' },
  pasos: { fontSize: 14, marginBottom: 16, color: '#333' },
});

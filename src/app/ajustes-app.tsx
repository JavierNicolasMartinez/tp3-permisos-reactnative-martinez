// "/ajustes-app" — Interruptor "Avisarme cuando se resuelva mi reporte".
// Es el ÚNICO lugar donde se piden las notificaciones (pedido en contexto).
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { Boton } from '@/components/Boton';
import { comunes } from '@/components/estilos';
import { Explicacion } from '@/components/Explicacion';
import { usePermiso } from '@/hooks/usePermiso';
import { useReportes } from '@/lib/reportes';

export default function AjustesApp() {
  const { estado, abrirAjustes } = usePermiso('notificaciones');
  const { avisarAlResolver, setAvisarAlResolver } = useReportes();

  function cambiarInterruptor(activar: boolean) {
    setAvisarAlResolver(activar);
    // Recién al activar el interruptor mostramos la pantalla previa
    // (que crea el canal "reportes" en Android y después pide el permiso).
    if (activar && estado === 'preguntable') {
      router.push('/permisos/notificaciones');
    }
  }

  return (
    <ScrollView contentContainerStyle={comunes.pantalla}>
      <View style={estilos.fila}>
        <Text style={[comunes.texto, { flex: 1 }]}>Avisarme cuando se resuelva mi reporte</Text>
        <Switch value={avisarAlResolver} onValueChange={cambiarInterruptor} />
      </View>

      {avisarAlResolver && estado === 'concedido' && (
        <Text style={comunes.gris}>Te vamos a mandar una notificación.</Text>
      )}

      {avisarAlResolver && estado === 'preguntable' && (
        <Text style={comunes.gris}>
          Sin permiso de notificaciones, los avisos te llegan igual a la pestaña "Avisos".
        </Text>
      )}

      {avisarAlResolver && estado === 'bloqueado' && (
        <Explicacion
          tipo="alerta"
          titulo="Las notificaciones están bloqueadas"
          texto='Los avisos te van a llegar igual a la pestaña "Avisos". Si querés recibirlos como notificación, habilitalas en Ajustes.'>
          <Boton titulo="Abrir Ajustes" secundario onPress={abrirAjustes} />
        </Explicacion>
      )}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fila: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
});

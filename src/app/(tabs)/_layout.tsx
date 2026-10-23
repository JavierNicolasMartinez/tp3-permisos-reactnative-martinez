import { Link } from 'expo-router';
import { Tabs } from 'expo-router/js-tabs';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1d4ed8',
        tabBarIconStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 14 },
        // Acceso a /ajustes-app desde el encabezado de cada pestaña
        headerRight: () => (
          <Link href="/ajustes-app" style={{ marginRight: 16 }}>
            <Text style={{ color: '#1d4ed8' }}>Ajustes</Text>
          </Link>
        ),
      }}>
      <Tabs.Screen name="index" options={{ title: 'Reportes' }} />
      <Tabs.Screen name="avisos" options={{ title: 'Avisos' }} />
      <Tabs.Screen name="permisos" options={{ title: 'Permisos' }} />
    </Tabs>
  );
}

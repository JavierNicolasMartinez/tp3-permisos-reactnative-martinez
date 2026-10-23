<div style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">

<h1 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 16pt;">Trabajo Práctico N° 3 — Respuestas (Partes A a F)</h1>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Alumno: Martinez Javier Nicolás · Taller de Lenguajes de Programación III - React Native · Instituto Politécnico Formosa</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Las respuestas se basan en la presentación de clase "Permisos móviles", la guía oficial de Expo (docs.expo.dev/guides/permissions) para el SDK 57 y la documentación de Android y Apple.</p>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte A · ¿Qué es un permiso y por qué existe?</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">A1. Conceptos</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Un permiso es la autorización que la persona usuaria le da a una app para usar un recurso sensible del dispositivo, como la cámara, el micrófono, la ubicación, las fotos, los contactos o las notificaciones. Cada parte cumple un papel distinto:</p>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">La app</strong> declara qué recursos podría usar y, en el momento justo, pide acceso.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">El sistema operativo</strong> muestra el diálogo oficial, guarda la decisión y la hace cumplir.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">La persona usuaria</strong> acepta, rechaza o da un acceso parcial, y puede cambiar de idea desde Ajustes.</li>
</ul>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> La caja de arena (sandbox) es el espacio aislado en el que vive cada app: solo puede ver sus propios archivos. Para salir de esa caja y tocar algo sensible necesita una "llave", y esa llave es el permiso, que solo puede darla la persona usuaria. Sin ningún permiso, una app puede mostrar pantallas, guardar sus propios datos y conectarse a internet (en Android, INTERNET es un permiso normal que se concede solo).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Las cuatro razones son:</p>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">Privacidad:</strong> la ubicación, las fotos o la voz no salen del dispositivo sin acuerdo. Ejemplo: una app de linterna no puede saber dónde estoy.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">Seguridad:</strong> si una app maliciosa se instala, el daño queda limitado a lo que se le permitió. Ejemplo: un juego sin permiso de contactos no puede robar mi agenda.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">Transparencia:</strong> el sistema muestra qué app usa qué. Ejemplo: el punto verde que aparece cuando una app usa la cámara.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">Control:</strong> la decisión no es para siempre. Ejemplo: puedo quitarle la ubicación a una app de delivery desde Ajustes cuando quiera.</li>
</ul>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> La visita es la app, el portero es el sistema operativo y el dueño del departamento es la persona usuaria. Que "el portero se acuerda de la respuesta" significa que el sistema guarda la decisión: si el dueño dijo que sí, la visita pasa sin volver a preguntar; si dijo que no (y en Android lo repitió dos veces), el portero ya no vuelve a llamar y solo se puede cambiar desde Ajustes.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">A2. Declarar y solicitar</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"></th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Declarar (al compilar)</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Solicitar (al ejecutar)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Qué se hace?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se avisa al sistema qué recursos podría usar la app. Queda escrito dentro del paquete instalado.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Cuando la persona usa la función, el código pide acceso y el sistema muestra el diálogo.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Dónde / cómo en Android?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Una línea <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">&lt;uses-permission&gt;</code> en el AndroidManifest.xml.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Solo para los permisos de tiempo de ejecución (peligrosos), con el diálogo del sistema.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Dónde / cómo en iOS?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Un texto de propósito (clave <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">NS…UsageDescription</code>) en el Info.plist.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Para cada recurso protegido, con el diálogo que muestra ese texto.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Dónde / cómo en Expo?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">En app.json: el plugin de cada módulo, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">android.permissions</code>, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">android.blockedPermissions</code> e <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ios.infoPlist</code>. Los archivos nativos se generan con prebuild o EAS Build.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">request…PermissionsAsync()</code> o el hook del módulo (por ejemplo <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useCameraPermissions()</code>).</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Qué pasa si se omite?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android deniega el pedido sin mostrar diálogo. En iOS el acceso falla o la app se cierra, y App Store Connect rechaza la build.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">La app nunca obtiene el permiso (salvo los normales de Android, que se conceden al instalar).</td>
</tr>
</tbody>
</table>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">A3. Verdadero o falso</h3>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a) F.</strong> El diálogo lo dibuja el sistema operativo. La app solo elige cuándo pedirlo y qué hacer con la respuesta.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b) V.</strong> El AndroidManifest.xml y el Info.plist se regeneran en cada prebuild a partir de app.json (o app.config.ts).</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c) F.</strong> Los cambios en el Info.plist son nativos y no viajan por actualizaciones OTA: hace falta una build nueva y publicarla en la tienda.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d) F.</strong> Si el permiso no está en el manifiesto, Android lo deniega en el acto, sin mostrar ningún diálogo.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">e) F.</strong> expo-permissions ya no existe. En SDK 57 cada módulo trae sus propias funciones y hooks de permisos.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">f) V.</strong> Las notificaciones se piden directamente, sin clave en el Info.plist.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">g) V.</strong> Con fotos limitadas, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">status</code> es <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">'granted'</code> y el detalle está en <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">accessPrivileges: 'limited'</code>.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">h) V.</strong> Es la forma confiable de volver a "sin decidir" en las dos plataformas.</li>
</ul>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">A4. Los estados de un permiso</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Diagrama descrito:</p>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">Android:</strong> Sin decidir → (acepta) Concedido · (acceso parcial) Parcial · (rechaza) Denegado con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain: true</code> → (pide de nuevo y acepta) Concedido · (rechaza otra vez) Bloqueado. Desde Bloqueado solo se sale por Ajustes.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">iOS:</strong> Sin decidir → (acepta) Concedido · (acceso parcial) Parcial · (rechaza una sola vez) Bloqueado. Desde Bloqueado solo se sale por Ajustes.</li>
</ul>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">La diferencia central es que Android da dos oportunidades (desde Android 11, el segundo rechazo bloquea) e iOS una sola.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong></p>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Estado</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">status</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">canAskAgain</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Puede aparecer el diálogo?</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sin decidir</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">undetermined</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">true</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sí</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Concedido</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">granted</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">true</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No (ya está concedido)</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Denegado (se puede volver a pedir)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">denied</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">true</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sí (caso típico de Android tras el primer rechazo)</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Bloqueado</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">denied</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No, solo desde Ajustes</td>
</tr>
</tbody>
</table>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte B · Android: tipos de permisos y manifiesto</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">B1. Clasificá los permisos</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Permiso</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Tipo</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Cómo se obtiene?</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">INTERNET</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De instalación (normal)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se concede solo al instalar.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">CAMERA</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De tiempo de ejecución</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Diálogo del sistema mientras se usa la app.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">VIBRATE</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De instalación (normal)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se concede solo al instalar.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">SYSTEM_ALERT_WINDOW</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Especial</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">La persona lo activa en una pantalla de Ajustes.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">POST_NOTIFICATIONS</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De tiempo de ejecución (Android 13+)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Diálogo del sistema.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">ACCESS_NETWORK_STATE</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De instalación (normal)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se concede solo al instalar.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">READ_CONTACTS</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De tiempo de ejecución</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Diálogo del sistema.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">SCHEDULE_EXACT_ALARM</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Especial</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se activa en Ajustes (alarmas y recordatorios).</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">RECORD_AUDIO</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">De tiempo de ejecución</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Diálogo del sistema.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">MANAGE_EXTERNAL_STORAGE</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Especial</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se activa en Ajustes ("acceso a todos los archivos").</td>
</tr>
</tbody>
</table>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">B2. Grupos y nombres</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Un grupo de permisos junta permisos parecidos bajo un mismo nombre que entiende la persona (por ejemplo "Ubicación"). Si la app pide ACCESS_FINE_LOCATION y ACCESS_COARSE_LOCATION juntos, la persona ve un solo diálogo de ubicación (en Android 12+ con la opción de precisa o aproximada).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> El prefijo es <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">android.permission.</code>. El permiso de cámara completo es <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">android.permission.CAMERA</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Los permisos de firma (signature) solo se conceden a apps firmadas con el mismo certificado que el sistema o que la app que define el permiso. No se usan en apps comunes porque una app publicada en la tienda no tiene la firma del fabricante ni del sistema.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">B3. Leé el manifiesto</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Se conceden solos al instalar: INTERNET. Hay que pedir además en tiempo de ejecución: CAMERA, ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION, POST_NOTIFICATIONS y READ_EXTERNAL_STORAGE (este último solo hasta Android 12L). RECORD_AUDIO no queda en el manifiesto final porque está marcado para quitarse.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">android:maxSdkVersion="32"</code> significa que el permiso solo se declara hasta Android 12L (API 32); en versiones más nuevas no existe para la app. Desde Android 13 lo reemplazan READ_MEDIA_IMAGES, READ_MEDIA_VIDEO y READ_MEDIA_AUDIO (y en Android 14, READ_MEDIA_VISUAL_USER_SELECTED para el acceso parcial).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">tools:node="remove"</code> le indica a la fusión de manifiestos que borre ese permiso aunque lo agregue una librería. Lo genera este fragmento de app.json:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-json">{
  &quot;expo&quot;: {
    &quot;android&quot;: {
      &quot;blockedPermissions&quot;: [&quot;android.permission.RECORD_AUDIO&quot;]
    }
  }
}
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> En <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">expo.android.permissions</code>, por ejemplo: <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">"permissions": ["android.permission.SCHEDULE_EXACT_ALARM"]</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">e)</strong> No conviene editarlo a mano porque en Expo se regenera en cada <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">npx expo prebuild</code> (o en EAS Build) y los cambios se pierden; la fuente de verdad es app.json. <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">blockedPermissions</code> no funciona en Expo Go, solo tiene efecto en una build propia (development build o de producción).</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">B4. Así pregunta Android</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> No. En Android el diálogo lo arma el sistema y no admite texto propio. Por eso la explicación se tiene que dar antes, en una pantalla propia de la app (la pantalla previa).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> "Mientras la app está en uso" concede el acceso de forma permanente, pero solo con la app en primer plano. "Solo esta vez" vale mientras se usa la app y el sistema lo revoca poco después de salir. "Solo esta vez" existe para ubicación, cámara y micrófono (Android 11+).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> En Android 11+, si la persona toca "No permitir" dos veces, Android deja de mostrar el diálogo y <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain</code> pasa a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Funciona bien: "farmacias de tu zona" o el clima de la ciudad. No funciona bien: guiar a alguien caminando hasta la puerta de un local, porque 3 km² es demasiado impreciso.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">e)</strong> Android termina el proceso de la app. Cuando la persona vuelve, la app arranca de cero.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">B5. Android, versión por versión</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Cambio</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Versión (API)</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Qué implica para el código</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Nacen los permisos en tiempo de ejecución</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 6.0 (API 23)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">El código tiene que contemplar que un permiso puede no estar y pedirlo con un diálogo.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">La ubicación en segundo plano pasa a ser un permiso aparte</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 10 (API 29)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se usa <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestBackgroundPermissionsAsync()</code>, siempre después del pedido de primer plano.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Dos rechazos equivalen a "no volver a preguntar"</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 11 (API 30)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain</code> pasa a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code> tras el segundo rechazo: la app tiene que ofrecer Ajustes.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación precisa o aproximada</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 12 (API 31)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Leer <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso.android.accuracy</code> (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">'fine'</code> o <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">'coarse'</code>) y funcionar con las dos.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Las notificaciones pasan a ser un permiso (POST_NOTIFICATIONS)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 13 (API 33)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Crear el canal y pedir el permiso en un momento con sentido.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Acceso parcial a fotos y videos ("Seleccionar fotos")</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 14 (API 34)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">accessPrivileges</code> puede valer <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">'limited'</code> también en Android.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Permiso de red local (ACCESS_LOCAL_NETWORK)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android 17 (API 37); en Android 16 (API 36) era opcional para probarlo</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Aplica a apps con target API 37; llegará con próximas versiones del SDK.</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">El <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">targetSdkVersion</code> es la versión de Android para la que la app declara estar preparada; muchos cambios de comportamiento se aplican según ese valor. Expo SDK 57 apunta a API 36, y Google Play exige API 36 para apps nuevas y actualizaciones desde el 31 de agosto de 2026.</p>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte C · iOS: textos de propósito y acceso parcial</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">C1. Claves del Info.plist</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Recurso</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Clave en Info.plist</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Cámara</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSCameraUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Micrófono</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSMicrophoneUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación en uso</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSLocationWhenInUseUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación siempre</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSLocationAlwaysAndWhenInUseUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Fotos (leer)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSPhotoLibraryUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Fotos (solo guardar)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSPhotoLibraryAddUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Contactos</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSContactsUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Face ID</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSFaceIDUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Rastreo entre apps (ATT)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">NSUserTrackingUsageDescription</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Notificaciones</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No lleva clave: se piden directamente.</td>
</tr>
</tbody>
</table>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">C2. Sin texto, no hay permiso</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Si falta el texto de propósito y la app intenta usar la cámara, la app se cierra (crash) con el mensaje "This app has crashed because it attempted to access privacy-sensitive data without a usage description". Al subir la build, App Store Connect la rechaza con el error <strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">ITMS-90683: Missing purpose string in Info.plist</strong>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> iOS muestra el diálogo una sola vez. Si la persona dice que no, a la app solo le queda explicar para qué lo necesita, ofrecer una alternativa y un botón que abra Ajustes con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Linking.openSettings()</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> El título lo arma el sistema con el nombre de la app (no se puede cambiar); el texto de propósito lo escribe quien desarrolla. En Expo se configura en el plugin de cada módulo (por ejemplo <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">cameraPermission</code> en expo-camera) o en <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ios.infoPlist</code> dentro de app.json.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Pasa porque Apple revisa el binario: si una librería incluye código que usa una API protegida, exige la clave aunque la app nunca la llame. Se resuelve agregando el texto de propósito correspondiente o, si el plugin lo permite, desactivando esa parte con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code> (por ejemplo <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">"microphonePermission": false</code>) o quitando la librería que no se usa.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">C3. Probador de textos de propósito</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Texto propuesto</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Aprobado?</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Versión mejorada</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Necesitamos tu ubicación."</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No: no dice para qué.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Usamos tu ubicación para mostrarte las farmacias de turno más cercanas."</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Para mejorar tu experiencia."</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No: es vago.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Usamos tu ubicación para ordenar los locales por cercanía."</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Usamos tu ubicación para mostrarte las farmacias de turno más cercanas."</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sí: dice el dato y el beneficio concreto.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">—</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"La app no funciona sin ubicación."</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No: presiona y no explica el uso.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Usamos tu ubicación para calcular el costo de envío a tu domicilio."</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Ubicación requerida por el sistema."</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No: es engañoso, lo pide la app y no el sistema.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Usamos tu ubicación para marcar en el mapa dónde estás al reportar un problema."</td>
</tr>
</tbody>
</table>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">C4. Acceso parcial y gradual</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Caso</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">En Expo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Fotos limitadas ("Seleccionar fotos")</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 14</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">accessPrivileges: 'limited'</code> (expo-media-library / expo-image-picker).</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación aproximada (interruptor "Precisa")</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 14</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso.ios.accuracy === 'reduced'</code>.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Permitir una vez" (ubicación)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 13</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Responde <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">granted</code> hasta que termina la sesión; después vuelve a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">undetermined</code>.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación escalonada: de "al usar la app" a "Siempre"</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 13</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Primero <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestForegroundPermissionsAsync()</code> y después <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestBackgroundPermissionsAsync()</code>.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Notificaciones provisionales</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 12</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestPermissionsAsync({ ios: { allowProvisional: true } })</code> y se detecta con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ios.status === IosAuthorizationStatus.PROVISIONAL</code>.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Rastreo entre apps (App Tracking Transparency)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS 14.5</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-tracking-transparency: <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useTrackingPermissions()</code> o <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestTrackingPermissionsAsync()</code>.</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Expo SDK 57 requiere iOS 16.4 o superior. En la práctica, todos los casos de la tabla ya aplican a cualquier persona que use la app, así que el código siempre tiene que contemplarlos.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">C5. Android vs iOS, lado a lado</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"></th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Android</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">iOS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Dónde se declara?</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">&lt;uses-permission&gt;</code> en el AndroidManifest.xml</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Texto de propósito en el Info.plist</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Texto en el diálogo</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Lo arma el sistema</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Lo escribe quien desarrolla</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Oportunidades para preguntar</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Dos rechazos y se bloquea (Android 11+)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Una sola</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">"Solo esta vez" / "Permitir una vez"</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación, cámara y micrófono</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Solo ubicación</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Notificaciones</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Permiso de tiempo de ejecución desde Android 13</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Siempre se piden (o provisionales)</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ubicación en segundo plano</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se concede desde Ajustes (Android 11+)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Segundo pedido para pasar a "Siempre"</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Si falta la declaración</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Se deniega sin mostrar diálogo</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Falla o se cierra la app; la tienda rechaza la build</td>
</tr>
</tbody>
</table>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte D · Expo: una API, dos plataformas</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D1. Módulos y funciones</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Necesidad</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Módulo</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Hook / función de permiso</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Escanear un QR con la cámara</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-camera</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useCameraPermissions()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Grabar video con sonido</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-camera</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useCameraPermissions()</code> + <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useMicrophonePermissions()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Mostrar farmacias cercanas</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-location</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useForegroundPermissions()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Seguir un envío con la app en segundo plano</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-location (+ expo-task-manager)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useForegroundPermissions()</code> y después <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useBackgroundPermissions()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Mostrar un recordatorio</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-notifications</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">getPermissionsAsync()</code> / <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestPermissionsAsync()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Grabar una nota de voz</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-audio</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestRecordingPermissionsAsync()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Galería propia dentro de la app</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-media-library</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">usePermissions()</code></td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Publicidad personalizada entre apps (iOS)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-tracking-transparency</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useTrackingPermissions()</code></td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Si un tutorial usa <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">import * as Permissions from 'expo-permissions'</code>, el tutorial está desactualizado: ese paquete ya no existe y cada módulo maneja sus propios permisos.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D2. Consultar, pedir y el hook</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">get…PermissionsAsync()</code> solo consulta el estado actual, nunca muestra un diálogo. <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">request…PermissionsAsync()</code> pide el permiso y es la única que puede mostrar el diálogo del sistema.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> El primero (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso</code>) es la respuesta actual (PermissionResponse); el segundo (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">pedirPermiso</code>) llama a request y puede mostrar el diálogo; el tercero (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">consultarPermiso</code>) vuelve a consultar con get, sin diálogo. En el primer render <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso</code> vale <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">null</code> porque el hook todavía está consultando; mientras tanto la pantalla tiene que mostrar un indicador de carga.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Si <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain</code> es <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code>, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">request…()</code> vuelve al instante con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">denied</code> sin mostrar nada. Si se lo llama en un bucle (por ejemplo, en cada render), la pantalla se queda "pidiendo permiso" para siempre, se generan renders infinitos y la persona nunca ve una salida. Hay que detectarlo y ofrecer Ajustes.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D3. Leé la respuesta</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Respuesta</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Qué hace la app</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">null</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">El hook todavía está consultando: mostrar un indicador de carga.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'granted', granted: true }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Usar la función.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'undetermined', canAskAgain: true }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Explicar el beneficio y ofrecer un botón "Continuar" que pida el permiso.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'denied', canAskAgain: true }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Mostrar una alternativa y la opción de volver a intentar.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'denied', canAskAgain: false }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Explicar cómo habilitarlo y ofrecer "Abrir Ajustes" con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Linking.openSettings()</code>.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'granted', accessPrivileges: 'limited' }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Trabajar con la selección que dio la persona y ofrecer ampliarla, sin insistir.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">{ status: 'granted', android: { accuracy: 'coarse' } }</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Usar la ubicación aproximada: mostrar resultados por zona, no distancias ni coordenadas exactas.</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Los dos campos que deciden casi todo son <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">granted</code> (¿lo uso?) y <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain</code> (¿lo pido o mando a Ajustes?).</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D4. Simulación del ciclo completo (Android 14)</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">#</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Acción</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">status</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">canAskAgain</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Diálogo?</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">1</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">getForegroundPermissionsAsync()</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">undetermined</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">true</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">2</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestForegroundPermissionsAsync()</code> → "No permitir"</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">denied</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">true</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sí</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">3</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestForegroundPermissionsAsync()</code> → "No permitir"</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">denied</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">false</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sí</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">4</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">requestForegroundPermissionsAsync()</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">denied</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">false</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">5</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Linking.openSettings()</code> → habilita "Mientras la app está en uso" → vuelve y consulta</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">granted</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">true</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No (se cambió en Ajustes)</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">6</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Igual que el 5, pero sin volver a consultar</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">La app sigue mostrando denied / "bloqueado" (dato desactualizado)</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">false</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">No</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">En iOS el resultado cambia en el <strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">paso 2</strong>: con un solo "No permitir" queda <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">denied</code> con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain: false</code>, porque iOS da una sola oportunidad. En el paso 3 ya no aparece el diálogo y la respuesta es igual a la del paso 4. Si en iOS la persona elige "Permitir una vez" y después cierra y reabre la app, el estado vuelve a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">undetermined</code> y el diálogo puede aparecer de nuevo.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D5. Configurar app.json</h3>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-json">{
  &quot;expo&quot;: {
    &quot;plugins&quot;: [
      [&quot;expo-camera&quot;, {
        &quot;cameraPermission&quot;: &quot;Usamos tu cámara para leer el código QR de los contenedores.&quot;,
        &quot;microphonePermission&quot;: false,
        &quot;recordAudioAndroid&quot;: false
      }],
      [&quot;expo-location&quot;, {
        &quot;locationWhenInUsePermission&quot;: &quot;Usamos tu ubicación para mostrarte los puntos de reciclaje más cercanos.&quot;
      }]
    ],
    &quot;android&quot;: {
      &quot;blockedPermissions&quot;: [
        &quot;android.permission.RECORD_AUDIO&quot;,
        &quot;android.permission.SYSTEM_ALERT_WINDOW&quot;
      ]
    }
  }
}
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">expo-camera agrega RECORD_AUDIO en Android por defecto (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">recordAudioAndroid: true</code>) porque el módulo también sirve para grabar video con sonido, y la librería no puede saber si la app lo va a usar. Si no se graba sonido, conviene apagarlo.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">D6. Expo Go no es tu app</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Porque Expo Go es una app ya compilada, con su propio Info.plist y su propio manifiesto. Los textos y la lista de permisos de mi app.json no se aplican: los diálogos que aparecen son los de Expo Go.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> En Expo Go se puede probar la lógica: estados, botones, ir a Ajustes, alternativas y notificaciones locales. Necesitan una development build: los textos de propósito propios, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">blockedPermissions</code> y el manifiesto real, las notificaciones push en Android (desde SDK 53) y la ubicación en segundo plano (en iOS) o los servicios en primer plano (en Android).</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Comandos:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-bash"># Ver los archivos nativos generados (android/ e ios/)
npx expo prebuild --clean

# Compilar e instalar una development build en Android
npx expo install expo-dev-client
npx expo run:android
# o en la nube:
eas build --profile development --platform android
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Para volver a "sin decidir" sin reinstalar:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-bash"># Android (adb)
adb shell pm revoke com.javiermartinez.mantenimientoipf android.permission.ACCESS_FINE_LOCATION
adb shell pm clear-permission-flags com.javiermartinez.mantenimientoipf android.permission.ACCESS_FINE_LOCATION user-set user-fixed

# Simulador de iOS
xcrun simctl privacy booted reset location com.javiermartinez.mantenimientoipf
</code></pre>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte E · Recetas: leer y corregir código</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">E1. Encontrá los errores (cámara)</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Problemas encontrados:</p>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">En el primer render <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso</code> vale <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">null</code>, así que <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">permiso.status</code> rompe la app. Falta el estado "cargando".</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">No se revisa <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain</code>: si el permiso está bloqueado, el botón llama a pedir y no pasa nada (no hay camino a Ajustes).</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">El botón dice "Permitir", pero el permiso lo da el sistema: debe decir "Continuar".</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Faltan importar <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Linking</code> (para Ajustes) y los componentes propios (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Explicacion</code>, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Cargando</code>). Además se compara un texto (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">status === 'granted'</code>) en lugar de usar <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">granted</code>.</li>
</ul>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Versión corregida con los cuatro estados:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-tsx">import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Linking } from 'react-native';
import { Cargando } from '@/components/Cargando';
import { Explicacion } from '@/components/Explicacion';

export default function Escanear() {
  const [permiso, pedirPermiso] = useCameraPermissions();

  // 1. Cargando
  if (!permiso) return &lt;Cargando /&gt;;

  // 2. Concedido
  if (permiso.granted) {
    return &lt;CameraView style={{ flex: 1 }} facing=&quot;back&quot; /&gt;;
  }

  // 3. Preguntable
  if (permiso.canAskAgain) {
    return (
      &lt;Explicacion texto=&quot;Usamos la cámara para leer el QR del aula.&quot;&gt;
        &lt;Button title=&quot;Continuar&quot; onPress={() =&gt; pedirPermiso()} /&gt;
      &lt;/Explicacion&gt;
    );
  }

  // 4. Bloqueado
  return (
    &lt;Explicacion texto=&quot;La cámara está desactivada para esta app. Podés habilitarla en Ajustes.&quot;&gt;
      &lt;Button title=&quot;Abrir Ajustes&quot; onPress={() =&gt; Linking.openSettings()} /&gt;
    &lt;/Explicacion&gt;
  );
}
</code></pre>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">E2. El orden importa (ubicación)</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Se pide el segundo plano antes que el primer plano. En iOS el sistema primero pregunta "al usar la app" y la persona puede quedarse ahí, así que el flujo no hace lo esperado. En Android 11+ el segundo plano no se obtiene si antes no se concedió el primer plano (además, ese pedido abre Ajustes sin contexto), por eso la función devuelve <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">false</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> Versión correcta:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-ts">import * as Location from 'expo-location';

export async function activarSeguimiento() {
  // Primero el primer plano
  const enUso = await Location.requestForegroundPermissionsAsync();
  if (!enUso.granted) return false;

  // Después, el segundo plano
  const siempre = await Location.requestBackgroundPermissionsAsync();
  return siempre.granted;
}
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">obtenerUbicacion()</code>:</p>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-ts">import * as Location from 'expo-location';

export async function obtenerUbicacion() {
  try {
    const permiso = await Location.requestForegroundPermissionsAsync();
    if (!permiso.granted) return null; // la app sigue: elige a mano

    const aproximada =
      permiso.android?.accuracy === 'coarse' ||
      permiso.ios?.accuracy === 'reduced';

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    return { latitud: coords.latitude, longitud: coords.longitude, aproximada };
  } catch {
    return null; // GPS apagado u otro error: no rompemos la app
  }
}
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> No. Para "farmacias cercanas" alcanza con primer plano. Si se pide segundo plano, Google Play exige una declaración de permisos especial, con un aviso visible dentro de la app y un video que muestre la función.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">E3. Notificaciones mudas</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> La causa más probable es que no existe ningún canal de notificaciones: en Android 13+ Expo indica que el diálogo no aparece hasta que haya al menos un canal. Antes de pedir hay que crear el canal con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Notifications.setNotificationChannelAsync('reportes', {...})</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> En Android 12 o anterior las notificaciones vienen habilitadas por defecto: el pedido responde <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">granted</code> sin mostrar diálogo.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Las notificaciones provisionales (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">allowProvisional: true</code>): llegan en silencio al Centro de notificaciones sin diálogo previo. Se detectan con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ajustes.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Conviene pedirlo después de una acción con sentido. Buen momento: cuando la persona activa "Avisarme cuando se resuelva mi reporte". Mal momento: apenas se abre la app por primera vez, sin contexto.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">E4. Fotos sin pedir permiso</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Necesidad</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Herramienta</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Permiso</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Elegir una foto de perfil</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ImagePicker.launchImageLibraryAsync</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ninguno</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Sacar una foto en el momento</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ImagePicker.launchCameraAsync</code> o expo-camera</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Cámara</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Editor que muestra toda la galería</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">expo-media-library</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Fotos (completo o limitado)</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Adjuntar la foto de un comprobante</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ImagePicker.launchImageLibraryAsync</code></td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ninguno</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Google Play restringe READ_MEDIA_IMAGES y READ_MEDIA_VIDEO porque dan acceso a toda la galería, y la mayoría de las apps solo necesita una foto puntual. Solo las permite a apps cuya función principal lo necesita (galerías, editores); desde el 28 de mayo de 2025 el resto debe usar el selector del sistema. "El mejor permiso" es el que no hace falta pedir: con el selector la persona elige y la app recibe solo esa imagen.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">E5. Volver de Ajustes</h3>

<pre style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;" class="language-ts">const estabaAfuera = /inactive|background/.test(anterior.current);
if (estabaAfuera &amp;&amp; nuevo === 'active') revisar();
anterior.current = nuevo;
// ...
return () =&gt; sub.remove();
</code></pre>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Porque los hooks de Expo consultan el permiso al montarse y cuando se llama a pedir o consultar; el sistema no les avisa cuando la persona cambia algo en Ajustes. Por eso hay que volver a consultar cuando la app vuelve a estar activa.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> La tercera función que devuelve <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">useCameraPermissions()</code>, es decir <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">consultarPermiso</code> (el get), porque consulta sin mostrar diálogo.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Porque el permiso puede cambiar fuera de la app: desde Ajustes, por "Solo esta vez", por el reinicio automático de permisos de Android o porque Android termina el proceso al revocarlo. Un valor guardado "para siempre" queda desactualizado; lo correcto es consultarlo.</p>

<h2 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 14pt;">Parte F · Buenas prácticas y tiendas</h2>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">F1. Pedir en contexto</h3>

<table style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border-collapse: collapse;">
<thead>
<tr>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">App y permiso</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">¿Cuándo pedirlo?</th>
<th style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Alternativa si lo deniegan</th>
</tr>
</thead>
<tbody>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Delivery · ubicación</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Al tocar "Usar mi ubicación" para la dirección de entrega.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Escribir la dirección, el barrio o el código postal a mano.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Billetera virtual · cámara</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Al tocar "Pagar con QR".</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Ingresar el código o el alias a mano.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Red social · contactos</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Al tocar "Buscar amigos".</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Compartir un enlace de invitación con el menú del sistema.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Mensajería · micrófono</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Al mantener presionado el botón de nota de voz.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Escribir el mensaje en lugar de dictarlo.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Turnos médicos · notificaciones</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Después de reservar un turno: "¿Querés que te recordemos el turno?".</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Bandeja de avisos dentro de la app o recordatorio por correo.</td>
</tr>
<tr>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Editor de fotos · galería completa</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Al abrir la galería del editor por primera vez.</td>
<td style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; border: 1px solid #000000; padding: 4px;">Selector del sistema o trabajar con la selección limitada.</td>
</tr>
</tbody>
</table>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">Pedir cuatro permisos apenas se abre la app "entrena el No permitir automático" porque la persona todavía no sabe para qué sirve cada uno ni hizo nada que lo justifique: recibe una cascada de diálogos sin contexto y se acostumbra a rechazarlos sin leer.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">F2. La pantalla previa</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> El beneficio en una frase; un solo botón "Continuar"; y la aclaración de que la decisión se puede cambiar en Ajustes.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> Porque el permiso lo da el sistema, no el botón de la app. "Continuar" lleva al diálogo del sistema, donde la persona decide de verdad; "Permitir" sería engañoso.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> La pauta 5.1.1(iv) pide respetar la configuración de permisos y no manipular, engañar ni forzar a dar acceso. La guía de interfaz de Apple pide un único botón que abra el diálogo y ninguna forma de salir antes, así que botones como "Ahora no" o "Cerrar" en esa pantalla son motivo de rechazo.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Si el permiso ya está bloqueado, la pantalla explica cómo habilitarlo desde Ajustes y el botón pasa a ser "Abrir Ajustes".</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">F3. Mínimo privilegio</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Aproximada: para "puntos de reciclaje de tu barrio" alcanza con saber la zona.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> "Siempre": para registrar una carrera con el celular en el bolsillo la app tiene que seguir funcionando en segundo plano. Igual se pide primero "en uso" y después "siempre", con explicación.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Selector del sistema: para subir una sola foto del DNI no hace falta acceso a la galería.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> expo-camera sin micrófono (<code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">microphonePermission: false</code>, <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">recordAudioAndroid: false</code>): escanear un QR no necesita sonido.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">F4. Tiendas</h3>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Google Play: declaración de permisos sensibles (por ejemplo ubicación en segundo plano, con aviso visible y video) y la sección de Seguridad de los datos; también target API 36 desde el 31/08/2026 y READ_MEDIA_* solo si es la función principal. App Store: textos de propósito claros y completos (pauta 5.1.1) y no forzar ni manipular para conseguir el permiso (5.1.1(iv)); además, las etiquetas de privacidad en App Store Connect.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> Es un archivo que declara qué datos recolecta la app (y sus librerías) y qué APIs sensibles usa y por qué motivo. En Expo se configura en app.json con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ios.privacyManifests</code>.</p>

<p style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Android 17 suma el permiso de red local (ACCESS_LOCAL_NETWORK) y un selector de contactos del sistema. Google Play va a exigir ese selector a muchas apps que hoy piden READ_CONTACTS, obligatorio desde el 27/01/2027 para apps con target API 37.</p>

<h3 style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt; font-weight: bold;">F5. Errores comunes</h3>

<ul style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">a)</strong> Causa: falta la clave <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">NS…UsageDescription</code> en el Info.plist. Solución: configurar el texto en el plugin del módulo o en <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">ios.infoPlist</code> de app.json y volver a compilar.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">b)</strong> Causa: Expo Go trae sus propios permisos, pero en la build solo existe lo declarado en app.json; si el permiso no está declarado (o está en <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">blockedPermissions</code>), se deniega sin diálogo. Solución: agregar el plugin o el permiso en app.json y generar una build nueva.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">c)</strong> Causa: la app no vuelve a consultar el permiso al volver de Ajustes. Solución: escuchar <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">AppState</code> y llamar a get cuando la app pasa a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">active</code> (como hace el hook <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">usePermiso</code>).</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">d)</strong> Causa: se llama a <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">request…()</code> en cada render; con <code style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;">canAskAgain: false</code> vuelve al instante sin diálogo y el ciclo no termina. Solución: pedir solo cuando la persona toca un botón y, si está bloqueado, ofrecer Ajustes.</li>
<li style="font-family: 'Times New Roman', Times, serif; color: #000000; font-size: 12pt;"><strong style="font-family: 'Times New Roman', Times, serif; color: #000000;">e)</strong> Causa: se trata un permiso no esencial como obligatorio. Solución: dejar usar la app igual y ofrecer una alternativa (bandeja de avisos dentro de la app, recordatorio por correo).</li>
</ul>

</div>

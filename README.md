# lab-modulo-bundling
## Estructura del repositorio y los ejercicios.
He decidido estructurar este laboratorio en 4 ramas.
- master
- opcional/react+env-vars
- bonus/webpack-seed-sass+transpilador+TS
- bonus/vite-seed-project

### Contenidos
En la rama **master**, se encuentran los puntos relacionados al apartado del laboratorio *básico*:
- Bundling con webpack.
- Mostrar imágenes y cargar imágenes en varios formatos.
- Cargar el loader y configurar TS.
- **Instalar SASS** y añadir algunos estilos usándolo.
- Variables de entorno (*dev y prod*).
- **Bundle analyzer** instalado y configurado en la rama **Master** para poder usarse en webpack.config.js.
-- Se ha añadido una variable **ANALYZE** para ambos entornos que se recupera dentro de *webpack.config.js* y detecta en que entorno queremos el análisis de librerías.

En la rama **opcional/react+env-vars**, se encuentran los puntos opcionales del laboratorio:
- Instalar y configurar React.
- Crear un ejemplo de 'Hola Mundo' con React.
- Configurar las variables de entorno para *PROD* y *DEV*.
- Tener una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.​

Por último:
- bonus/webpack-seed-sass+transpilador+TS: Es el proyecto semilla con SASS, el intérpreta de ES5+ y TS.
- bonus/vite-seed-project: Contiene la semilla preparada para arrancar un proyecto con **Vite**.

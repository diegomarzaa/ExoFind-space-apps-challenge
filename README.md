# 🚀 ExoFind - SpaceApps Challenge

## ⚠️ ¿Qué es esto?

Este proyecto es un prototipo creado en solo 2 días durante el Hackathon NASA Space Apps Challenge. Fue desarrollado por estudiantes de Inteligencia Robótica en Castellón (UJI Robotics Team) como respuesta al reto educativo de la NASA centrado en exoplanetas. Su objetivo es inspirar a los niños a interesarse por el espacio y los exoplanetas mediante una experiencia interactiva y entretenida.

>Aunque implementamos muchas funcionalidades durante el hackathon, este proyecto está más cerca de una idea interactiva que de un producto final. Tras el evento ha sido mejorado ligeramente para que se pueda probar mejor, pero sigue siendo un concepto en desarrollo.

## 🌐 Prototipo

[www.exofind.netlify.app](https://exofind.netlify.app/)

## 🎯 Nuestra misión

Muchos niños hoy en día sueñan con ser streamers o influencers. Con este proyecto queremos cambiar eso. Queremos que vuelvan a soñar con las estrellas.

ExoFind busca despertar la curiosidad por la exploración espacial en los más jóvenes, aprovechando las herramientas que ya usan a diario, ya sean tablets o smartphones. En vez de alejarles de las pantallas, las utilizamos como puerta de entrada a la astronomía.

## 📦 Tecnologías utilizadas

- **React**: Interfaz de usuario
- **Three.js** (React Three Fiber): Visualización 3D
- **Framer Motion**: Animaciones
- **Tailwind CSS**: Estilado rápido y flexible
- **Netlify**: Hosting gratuito

## 🧭 ¿Qué incluye el juego?

### Pantalla Principal

Es el punto de entrada al universo de *EXOFIND*. El diseño está inspirado en una estética espacial inmersiva, con un fondo de nebulosa que refuerza el tema de exploración intergaláctica. En el centro destaca el logo del juego: un cohete estilizado rodeado por anillos rojos, simbolizando movimiento, trayectoria y aventura.

El botón **JUGAR** es el acceso directo al núcleo de la experiencia. Justo debajo se encuentran tres accesos rápidos:

- **Perfil:** donde el jugador puede gestionar su información y progreso.
- **Ajustes:** para personalizar la experiencia (audio, controles, idioma, etc.).
- **Ayuda:** con información básica sobre la jugabilidad, controles y objetivos.

![alt text](documentation/img/home.png)

### Selección de Misiones

Una astronauta ha activado el hiperespacio accidentalmente y ha quedado atrapada a años luz de la Tierra. Tu misión es ayudarla a volver, explorando exoplanetas y recogiendo recursos para reparar su nave.

Cada planeta representa una misión con objetivos diferentes. Todos están basados en datos reales de la NASA:

-  **KEPLER 452-B** (Terrestre): Buscar alimentos y agua.
-  **WASP-121b** (Gigante gaseoso): Recolectar combustible.
-  **HD 3167 b** (Super-Terrestre): Extraer materiales.
-  **HAT-P-11 b** (Neptuniano): Investigar tecnología avanzada.

Cada planeta tiene su propia mecánica de minijuego, basada en un método real de detección de exoplanetas, y una ficha educativa con datos visuales.

![alt text](documentation/img/levels.png)

### Exploración

Esta es la idea central del juego: controlar un cohete a través de diferentes escenarios, esquivando obstáculos y recolectando recursos mientras se avanza. El objetivo es mantener el equilibrio entre exploración y supervivencia, ya que cada recurso recolectado ayuda a extender el viaje, pero cada choque o error puede ser fatal.

![alt text](documentation/img/maingame.gif)

### Minijuegos

Cada planeta tiene su propio minijuego educativo, diseñado para representar de forma interactiva un método real de detección de exoplanetas. Estos juegos no solo entretienen, sino que enseñan a los jugadores cómo los astrónomos descubren planetas más allá de nuestro sistema solar.

Algunas de las ideas iniciales son las siguientes:

- **🌑 Tránsito (KEPLER 452-B)**  
  Simula el método de tránsito: el jugador debe detectar el paso de un planeta frente a su estrella haciendo clic justo en el momento en que disminuye la luz. Si aciertas, ganas puntos. Si fallas o tardas demasiado, pierdes vidas. La dificultad aumenta con cada acierto.

- **🧩 Imágenes Directas (HD 3167 b)**  
  Un puzzle visual basado en observaciones reales de exoplanetas por imágenes directas. Las piezas están desordenadas y tienes que resolverlo con el menor número de movimientos posible.

- **🌀 Velocidad Radial (WASP-121b)**  
  Representa el método de velocidad radial mediante una escena 3D animada donde estrellas y planetas orbitan. El jugador observa cómo la gravedad altera la luz y debe identificar patrones. Actualmente es más visual que interactivo, pero está pensado como base para futuros retos.

### Perfil del Usuario

Tu progreso queda registrado. Desde esta sección puedes:

- Ver tu **nivel**, experiencia y misiones completadas
- Consultar **logros** obtenidos
- Revisar exoplanetas descubiertos
- Explorar **habilidades** desarrolladas (ciencia, estrategia, exploración)
- Realizar **desafíos diarios** para seguir aprendiendo

Además, puedes revisar cada planeta descubierto, leer descripciones únicas y aprender curiosidades.

![alt text](documentation/img/profile.gif)

### Pestaña de Ajustes

La pestaña de ajustes permite personalizar la experiencia del usuario. Desde aquí puedes:

- Cambiar el idioma de la interfaz.
- Ajustar el volumen general y habilitar/deshabilitar notificaciones.
- Configurar la resolución de video y el modo daltonismo.
- Personalizar el color destacado y activar el contraste alto.
- Seleccionar categorías para búsquedas y gestionar opciones de privacidad como el historial de misiones y el inicio de sesión automático.

>No todos estos ajustes son funcionales actualmente; son simplemente una idea conceptual para ilustrar el potencial del proyecto.

![alt text](documentation/img/settings.gif)

## 🤖 IA Adaptativa

Una de las ideas principales del proyecto fue que ExoFind no enseñara lo mismo a todos, sino que aprendiera contigo. 

Un modelo de machine learning se adaptaría al nivel de conocimiento del usuario, incrementando o reduciendo la dificultad de las preguntas y minijuegos en función del jugador.

## 🛠️ Instalación Local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/diegomarzaa/ExoFind-space-apps-challenge.git
cd ExoFind-space-apps-challenge
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Ejecutar en modo desarrollo:**

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 📂 Estructura del Proyecto

```
├── public/              # HTML, manifest, meta
├── src/
│   ├── components/      # Pantallas, minijuegos y navegación
│   ├── img/             # Imágenes
│   ├── App.js           # Enrutado principal
│   └── index.js         # Entrada React
├── package.json         # Dependencias y scripts
└── tailwind.config.js   # Estilos
```

## 🤝 Colaboración

¿Ideas nuevas? ¿Errores encontrados? ¡Estás invitado a contribuir!

- Abre un issue con tu sugerencia o bug
- Haz un fork y manda un PR

# 🚀 ExoFind

## ⚠️ ¿Qué es esto?

Este proyecto es un prototipo creado en solo 2 días durante el Hackathon NASA Space Apps Challenge. Fue desarrollado por estudiantes de Inteligencia Robótica en Castellón (UJI Robotics Team) como respuesta al reto educativo de la NASA centrado en exoplanetas. Su objetivo es inspirar a los niños a interesarse por el espacio y los exoplanetas mediante una experiencia interactiva y entretenida.

>Aunque implementamos muchas funcionalidades durante el hackathon, este proyecto está más cerca de una idea interactiva que de un producto final. Tras el evento lo hemos mejorado ligeramente para que se pueda probar mejor, pero sigue siendo un concepto en desarrollo.

## 🌐 Prototipo

[https://diegomarzaa.github.io/Space-Apps-Challenge/](https://diegomarzaa.github.io/Space-Apps-Challenge/)

## 🎯 Nuestra misión

Muchos niños hoy en día sueñan con ser streamers o influencers. Con este proyecto queremos cambiar eso. Queremos que vuelvan a soñar con las estrellas.

ExoFind busca despertar la curiosidad por la exploración espacial en los más jóvenes, aprovechando las herramientas que ya usan a diario, ya sean tablets o smartphones. En vez de alejarles de las pantallas, las utilizamos como puerta de entrada a la astronomía.

## 📦 Tecnologías utilizadas

- **React**: Interfaz de usuario

- **Three.js** (React Three Fiber): Visualización 3D

- **Framer Motion**: Animaciones

- **Tailwind CSS**: Estilado rápido y flexible

- **GitHub Pages**: Hosting gratuito

## 🧭 ¿Qué incluye el juego?

### Pantalla Principal

Una astronauta ha activado el hiperespacio accidentalmente y ha quedado atrapada a años luz de la Tierra. Tu misión es ayudarla a volver, explorando exoplanetas y recogiendo recursos para reparar su nave.

### Selección de Misiones

Cada planeta representa una misión con objetivos diferentes. Todos están basados en datos reales de la NASA:

-  **KEPLER 452-B** (Terrestre): Buscar alimentos y agua.
-  **WASP-121b** (Gigante gaseoso): Recolectar combustible.
-  **HD 3167 b** (Super-Terrestre): Extraer materiales.
-  **HAT-P-11 b** (Neptuniano): Investigar tecnología avanzada.

Cada planeta tiene su propia mecánica de minijuego, basada en un método real de detección de exoplanetas, y una ficha educativa con datos visuales.

### Perfil del Usuario

Tu progreso queda registrado. Desde esta sección puedes:

- Ver tu **nivel**, experiencia y misiones completadas

- Consultar **logros** obtenidos

- Revisar exoplanetas descubiertos

- Explorar **habilidades** desarrolladas (ciencia, estrategia, exploración)

- Realizar **desafíos diarios** para seguir aprendiendo

Además, puedes revisar cada planeta descubierto, leer descripciones únicas y aprender curiosidades.

## 🤖 IA Adaptativa

Una de las ideas principales del proyecto fue que ExoFind no enseñara lo mismo a todos, sino que aprendiera contigo. 

Un modelo de machine learning se adaptaría al nivel de conocimiento del usuario, incrementando o reduciendo la dificultad de las preguntas y minijuegos en función del jugador.

## 🛠️ Instalación Local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/diegomarzaa/Space-Apps-Challenge.git
cd Space-Apps-Challenge/exoplanet-game
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
exoplanet-game/
├── public/              # HTML, manifest, meta
├── src/
│   ├── components/      # Pantallas, minijuegos y navegación
│   ├── img/             # Imágenes
│   ├── plots/           # Scripts Python de visualización
│   ├── App.js           # Enrutado principal
│   └── index.js         # Entrada React
├── package.json         # Dependencias y scripts
└── tailwind.config.js   # Estilos
```

## 🤝 Colaboración

¿Ideas nuevas? ¿Errores encontrados? ¡Estás invitado a contribuir!

- Abre un issue con tu sugerencia o bug
- Haz un fork y manda un PR

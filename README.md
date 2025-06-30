# 🍵 Tienda de Té – Clon Web Responsivo

Este proyecto es un **clon estructural de la web [Tienda de Café](https://tiendadecafe.com.ar/)**, realizado como parte del **Trabajo Práctico Grupal 1 (TPO 1)**. La temática fue adaptada a una **tienda de té** (puede reemplazarse por yerba mate u otra similar), manteniendo la elegancia y el diseño general del sitio original, pero con nuevos colores, contenido e imágenes representativas.

---

## 📁 Estructura del Proyecto

El proyecto fue desarrollado con **React**, usando **HTML, CSS puro, JavaScript y TypeScript**, junto con **Bootstrap** para algunos estilos. Se organizó de la siguiente manera:

### 🔹 `/src`  
Contiene todo el código fuente del proyecto.

#### `/components`  
Componentes reutilizables globales:

- `Footer.tsx`: Pie de página común a todas las vistas.  
- `Navigation.tsx`: Barra de navegación superior (navbar), presente en todas las páginas.

#### `/Pages`  
Contiene cada una de las páginas del sitio, organizadas como componentes:

- `Home.tsx`: Página principal (`index.html`)  
- `Tienda.tsx`: Nuestra tienda de té (`tienda.html`)  
- `MenuTienda.tsx`: Nuestro menú de productos (`menu-tienda.html`)  
- `TrabajaConNosotros.tsx`: Formulario para trabajar con nosotros  
- `Contacto.tsx`: Página de contacto con formulario

#### Archivos raíz de `/src`

- `App.tsx`: Componente principal que gestiona las rutas y renderiza el layout.  
- `main.tsx`: Punto de entrada de la app.  
- `index.css`: Hoja de estilos globales, incluyendo fuentes, colores, media queries, etc.

---

## 🛠️ Tecnologías utilizadas

- **React + Vite**
- **TypeScript**
- **HTML5 / CSS3**
- **Bootstrap**
- **JavaScript puro**
- **Flexbox** para layout
- **Media Queries** para responsividad

---

## 📱 Responsividad

El sitio está optimizado para múltiples resoluciones:

```css
@media (max-width: 1080px) { } /* Tablet horizontal */
@media (max-width: 768px) { }  /* Tablet vertical */
@media (max-width: 480px) { }  /* Móvil 1 */
@media (max-width: 375px) { }  /* Móvil 2 */

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Sitio web de una sola página (SPA) para Karyū Dōjō, escuela de artes marciales especializada en Bujinkan Budō Taijutsu. Stack: React + TypeScript + Vite + Tailwind CSS.

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Verificar código con ESLint
npm run lint

# Verificación de tipos TypeScript
npm run typecheck
```

## Arquitectura del Proyecto

### Estructura de Componentes

La aplicación está estructurada como una SPA con componentes React que se montan en `src/App.tsx` en el siguiente orden:

1. **ProgressBar** - Barra de progreso de scroll
2. **Navbar** - Navegación principal
3. **Hero** - Sección principal/landing
4. **About** - Información del dojo
5. **Learn** - Qué se aprende
6. **Philosophy** - Filosofía del dojo
7. **Instructor** - Información del instructor
8. **Schedule** - Horarios de clases
9. **Gallery** - Galería de imágenes
10. **Location** - Ubicación física
11. **Contact** - Formulario de contacto
12. **Footer** - Pie de página
13. **FloatingElements** - Elementos flotantes decorativos

Todos los componentes están ubicados en `src/components/` y siguen un patrón de componentes funcionales con TypeScript.

### Stack Tecnológico

- **Framework**: React 18 con TypeScript
- **Build Tool**: Vite 5
- **Estilos**: Tailwind CSS (preferir clases de utilidad sobre CSS custom)
- **Iconos**: lucide-react
- **Backend**: Supabase (@supabase/supabase-js)
- **Linting**: ESLint con configuración para React

### Convenciones de Código

- Usar clases de utilidad de Tailwind CSS en lugar de CSS personalizado
- Componentes pequeños y reutilizables en `src/components/`
- TypeScript estricto: verificar tipos con `npm run typecheck` antes de commit
- Ejecutar linting con `npm run lint` antes de hacer commit

### Configuración TypeScript

El proyecto usa múltiples archivos tsconfig:
- `tsconfig.json` - Configuración base
- `tsconfig.app.json` - Configuración para código de la aplicación
- `tsconfig.node.json` - Configuración para archivos de Vite/Node

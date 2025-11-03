# Descripción General del Proyecto

Este es un sitio web de una sola página para Karyū Dōjō, una escuela de artes marciales especializada en Bujinkan Budō Taijutsu. El sitio está construido con React, TypeScript y Vite, y estilizado con Tailwind CSS. Presenta un diseño moderno y responsivo con varias secciones que detallan la filosofía del dojo, el instructor, los horarios y la información de contacto.

## Compilación y Ejecución

Para poner el proyecto en marcha, sigue estos pasos:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

3.  **Compilar para producción:**
    ```bash
    npm run build
    ```

4.  **Linting del código:**
    ```bash
    npm run lint
    ```

5.  **Verificación de tipos del código:**
    ```bash
    npm run typecheck
    ```

## Convenciones de Desarrollo

*   **Estilos:** El proyecto utiliza Tailwind CSS para los estilos. Se prefieren las clases de utilidad sobre el CSS personalizado.
*   **Componentes:** La aplicación se divide en componentes pequeños y reutilizables ubicados en el directorio `src/components`.
*   **Linting:** El proyecto utiliza ESLint para garantizar la calidad del código. Por favor, ejecuta `npm run lint` antes de confirmar los cambios.
*   **Tipado:** El proyecto utiliza TypeScript para el tipado estático. Por favor, ejecuta `npm run typecheck` para verificar si hay errores de tipo.
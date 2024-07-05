# API de Contenido Trending

Esta API permite obtener información sobre películas, series de televisión y personas desde la base de datos de The Movie Database (TMDb). 

## Endpoints y Parámetros

### 1.1. Listar Películas
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/movies`
- **Descripción**: Lista películas con opciones de paginación y filtrado por región, idioma, género y términos de búsqueda.
- **Parámetros**:
  - **Query Parameters**:
    - `page` (int) - Número de página para la paginación. Por defecto, `1`.
    - `region` (string) - Código de región para filtrar películas por ubicación geográfica.
    - `language` (string) - Código de idioma (ISO 639-1). Por defecto, `en-US`.
    - `query` (string) - Término de búsqueda para filtrar películas por título o descripción.
    - `genre` (string) - Identificador de género para filtrar películas por género.

### 1.2. Obtener Detalles de una Película
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/movies/:id`
- **Descripción**: Obtiene los detalles completos de una película específica.
- **Parámetros**:
  - **Path Parameter**:
    - `:id` (string) - El identificador de la película en la base de datos de TMDb.

### 1.3. Listar TV Shows
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/tv`
- **Descripción**: Lista series de televisión (TV shows) con opciones de paginación y filtrado por región, idioma, género y términos de búsqueda.
- **Parámetros**:
  - **Query Parameters**:
    - `page` (int) - Número de página para la paginación. Por defecto, `1`.
    - `region` (string) - Código de región para filtrar TV shows por ubicación geográfica.
    - `language` (string) - Código de idioma (ISO 639-1). Por defecto, `en-US`.
    - `query` (string) - Término de búsqueda para filtrar TV shows por título o descripción.
    - `genre` (string) - Identificador de género para filtrar TV shows por género.

### 1.4. Obtener Detalles de un TV Show
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/tv/:id`
- **Descripción**: Obtiene los detalles completos de un TV show específico.
- **Parámetros**:
  - **Path Parameter**:
    - `:id` (string) - El identificador del TV show en la base de datos de TMDb.

### 1.5. Buscar Personas (People)
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/people`
- **Descripción**: Busca personas (actores, directores, etc.) en la base de datos de TMDb.
- **Parámetros**:
  - **Query Parameters**:
    - `language` (string) - Código de idioma (ISO 639-1). Por defecto, `en-US`.
    - `include_adult` (boolean) - Incluir contenido para adultos en los resultados. Por defecto, `false`.
    - `page` (int) - Número de página para la paginación. Por defecto, `1`.
    - `query` (string) - Término de búsqueda para filtrar personas por nombre.

### 1.6. Obtener Detalles de una Persona
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/people/:id`
- **Descripción**: Obtiene los detalles completos de una persona específica.
- **Parámetros**:
  - **Path Parameter**:
    - `:id` (string) - El identificador de la persona en la base de datos de TMDb.

### 1.7. Obtener Contenido Trending
- **Método HTTP**: GET
- **Ruta del Endpoint**: `/api/trending/:type`
- **Descripción**: Obtiene contenido trending para películas, TV shows o personas.
- **Parámetros**:
  - **Path Parameter**:
    - `:type` (string) - Tipo de contenido trending que se desea obtener. Valores posibles: `movie`, `tv`, `person`.
  - **Query Parameters**:
    - `time_window` (string, required) - Período de tiempo para el contenido trending. Valores posibles: `day`, `week`. Por defecto, `day`.

## Especificaciones de Seguridad

### 2.1. Manejo de Claves de API
- **Almacenamiento Seguro de Claves**:
  - Las claves API deben almacenarse de forma segura en el servidor utilizando variables de entorno.
  - Las claves nunca deben ser expuestas al cliente ni ser parte de las respuestas de la API.

### 2.2. Manejo de Errores
- **Respuestas de Error**:
  - Proporcionar respuestas detalladas y consistentes para los errores, evitando exponer información sensible.
  - Utilizar códigos de estado HTTP apropiados para indicar la naturaleza del error.

- **Registro de Errores**:
  - Registrar todos los errores y excepciones para facilitar la auditoría y el monitoreo de la API.

## Documentación y Pruebas

### 3.1. Documentación
- **Documentación API**:
  - Proporcionar una documentación detallada y clara de los endpoints, parámetros y respuestas en la ruta principal de la API: `/api/`.

## Cómo usar la API

### Requisitos Previos
- Node.js
- npm

### Instalación
1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
4. Crea un archivo `.env` en el directorio raíz del proyecto y añade tu token de TMDb:
    ```env
    TMDB_API_TOKEN=your_tmdb_api_token_here
    ```
5. Inicia el servidor:
    ```sh
    npm start
    ```

### Uso de la API
Para interactuar con la API, puedes usar herramientas como `curl`, `Postman`, o simplemente un navegador web. Aquí hay algunos ejemplos:

- Listar películas:
    ```sh
    curl -X GET "http://localhost:3000/api/movies?page=1&language=en-US&query=Inception"
    ```

- Obtener detalles de una película:
    ```sh
    curl -X GET "http://localhost:3000/api/movies/550"
    ```

- Listar TV shows:
    ```sh
    curl -X GET "http://localhost:3000/api/tv?page=1&language=en-US&query=Friends"
    ```

- Obtener detalles de un TV show:
    ```sh
    curl -X GET "http://localhost:3000/api/tv/1399"
    ```

- Buscar personas:
    ```sh
    curl -X GET "http://localhost:3000/api/people?page=1&language=en-US&query=Brad%20Pitt"
    ```

- Obtener detalles de una persona:
    ```sh
    curl -X GET "http://localhost:3000/api/people/287"
    ```

- Obtener contenido trending:
    ```sh
    curl -X GET "http://localhost:3000/api/trending/movie?time_window=day"
    ```

### Contribución
Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

### Licencia
Este proyecto está licenciado bajo la MIT License. Para más detalles, consulta el archivo LICENSE en el repositorio.


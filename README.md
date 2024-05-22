### Prueba Técnica para Desarrollador NodeJS Junior (Generado por CHAT GPT-4o)

#### Objetivo
Evaluar las habilidades de programación y comprensión de Node.js en un entorno realista. La prueba consistirá en desarrollar una aplicación simple de Node.js que implemente una API RESTful para gestionar una lista de tareas (To-Do List).

#### Requisitos
- Node.js (versión 14 o superior)
- Express.js
- MongoDB (se puede usar MongoDB Atlas o una instancia local)
- Mongoose

#### Descripción del Proyecto
Crear una API RESTful que permita a los usuarios gestionar una lista de tareas. La aplicación debe soportar las siguientes operaciones:

1. **Crear una nueva tarea**
2. **Obtener todas las tareas**
3. **Obtener una tarea por ID**
4. **Actualizar una tarea por ID**
5. **Eliminar una tarea por ID**

Cada tarea debe tener los siguientes campos:
- **id**: Identificador único de la tarea (generado automáticamente por MongoDB)
- **title**: Título de la tarea (string, requerido)
- **description**: Descripción de la tarea (string, opcional)
- **status**: Estado de la tarea (string, puede ser "pendiente", "en progreso", "completada", requerido)
- **created_at**: Fecha de creación de la tarea (Date, generado automáticamente)

#### Instrucciones

1. **Configuración del Proyecto**
    - Inicializa un nuevo proyecto de Node.js.
    - Instala las dependencias necesarias: `express`, `mongoose` y cualquier otra que consideres necesaria.

2. **Configurar la Conexión a MongoDB**
    - Configura la conexión a una base de datos MongoDB utilizando Mongoose.

3. **Definir el Modelo de Tarea**
    - Crea un modelo de Mongoose para la tarea con los campos especificados.

4. **Implementar las Rutas de la API**
    - Implementa las rutas para cada una de las operaciones CRUD mencionadas anteriormente.

5. **Manejo de Errores**
    - Asegúrate de manejar errores adecuadamente y de responder con códigos de estado HTTP apropiados.

6. **Documentación**
    - Proporciona una breve documentación sobre cómo configurar y ejecutar el proyecto.
    - Incluye ejemplos de cómo realizar solicitudes a cada uno de los endpoints de la API utilizando `curl` o una herramienta similar.

#### Criterios de Evaluación
- **Funcionalidad**: La API debe cumplir con todos los requisitos especificados.
- **Código Limpio**: El código debe ser limpio, bien estructurado y seguir las mejores prácticas de desarrollo.
- **Manejo de Errores**: Los errores deben ser manejados adecuadamente y las respuestas deben ser claras.
- **Documentación**: La documentación debe ser clara y suficiente para que alguien más pueda configurar y utilizar la API sin problemas.

#### Entrega
Envía el código fuente de tu proyecto en un repositorio de Git (GitHub, GitLab, etc.) con las instrucciones para clonar el repositorio y ejecutar el proyecto. Asegúrate de incluir un archivo README con la documentación requerida.

¡Buena suerte y feliz codificación!

#### Ejemplo de Solicitudes a la API

- **Crear una nueva tarea**
  ```sh
  curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title": "Nueva Tarea", "description": "Descripción de la tarea", "status": "pendiente"}'
  ```

- **Obtener todas las tareas**
  ```sh
  curl http://localhost:3000/api/tasks/all
  ```

- **Obtener una tarea por ID**
  ```sh
  curl http://localhost:3000/api/tasks/ID_DE_LA_TAREA
  ```

- **Actualizar una tarea por ID**
  ```sh
  curl -X PATCH http://localhost:3000/api/tasks/ID_DE_LA_TAREA -H "Content-Type: application/json" -d '{"title": "Tarea Actualizada", "description": "Descripción de la tarea", "status": "en progreso"}'
  ```

- **Eliminar una tarea por ID**
  ```sh
  curl -X DELETE http://localhost:3000/api/tasks/ID_DE_LA_TAREA
  ```

#### Recursos Adicionales
- [Documentación de Express.js](https://expressjs.com/)
- [Documentación de Mongoose](https://mongoosejs.com/)
- [Documentación de MongoDB](https://docs.mongodb.com/)

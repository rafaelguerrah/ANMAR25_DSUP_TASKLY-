# 📝 Taskly API - Task Management System

A complete REST API for task and note management built with Node.js, Express, Prisma, and TypeScript.

---

## 📋 Overview

Taskly is a RESTful API that allows you to:

- ✅ Create, list, update, and delete tasks
- 🗒 Add notes to tasks
- 🔍 Filter tasks by status (TODO, IN_PROGRESS, DONE)
- 📌 Manage priorities (LOW, MEDIUM, HIGH)

  ---
  ## 🛠 Tecnologias
  
- **Node.js** (v18+)
- **Express** (Web framework)
- **Prisma** (ORM para SQLite)
- **TypeScript** (Static typing)
- **Zod** (Data validation)
- **Postman**  (API testing)

  ---

##🚀 Getting Started

##✅ Prerequisites

- Node.js 18+
- npm or yarn
- SQLite (embedded, no separate installation required)

---

 ## 📦 Installation
**Clone the repository:**
```bash
gh repo clone rafaelguerrah/ANMAR25_DSUP_TASKLY-
cd taskly-api
```

**Install dependencies:**
```bash
npm install
```

**Configure the database:**
```bash
npx prisma migrate dev --name init
```

**Generate the Prisma client:**
```bash
npx prisma generate
```

**View the database:**
```bash
npx prisma studio
```

**Start the development server:**
```bash
npm run dev
```

---

## 🌐  API Endpoints

## 📌 Tasks (`/tasks`)

### Endpoints

| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| POST   | `/tasks`                  | Create a new task      |
| GET    | `/tasks`                  | List all tasks         |
| GET    | `/tasks/:id`              | Get a specific task    |
| GET    | `/tasks/status/:status`   | Filter tasks by status |
| PUT    | `/tasks/:id`              | Update a task          |
| DELETE | `/tasks/:id`              | Remove a task          |

## 🗒 Notes (`/notes`)

### Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| POST   | `/tasks/:taskId/notes`    | Add a note to a task     |
| GET    | `/tasks/:taskId/notes`    | List all notes for a task|
| GET    | `/tasks/notes/:id`        | Get a specific note      |
| PUT    | `/tasks/notes/:id`        | Update a note            |
| DELETE | `/tasks/notes/:id`        | Delete a note            |

---

## Example Endpoints
## Create Task

**POST** `http://localhost:3000/tasks`

**Request:**
```json
{
  "title": "Criar layout do frontend",
  "description": "Montar a UI do dashboard",
  "status": "TODO",
  "priority": "MEDIUM"
}
```

**Response:**
- 201 Created:
```json
{
    "id": "69b29b0c-e505-4582-a23f-dadd021cedfe",
    "title": "Criar layout do frontend",
    "description": "Montar a UI do dashboard",
    "status": "TODO",
    "priority": "MEDIUM",
    "createdAt": "2025-04-20T02:18:58.082Z",
    "updatedAt": "2025-04-20T02:18:58.082Z"
}
```

## Criando nota a uma tarefa:

**POST** `http://localhost:3000/tasks/69b29b0c-e505-4582-a23f-dadd021cedfe/notes`

**Request:**
```json
{
  "content": "Review authentication middleware"
}
```

**Response:**
- 201 Created:
```json
{
    "id": "8ae744e0-0505-4ffd-ae0e-05c95b40c84d",
    "content": "Review authentication middleware",
    "taskId": "69b29b0c-e505-4582-a23f-dadd021cedfe",
    "createdAt": "2025-04-20T02:27:24.316Z",
    "updatedAt": "2025-04-20T02:27:24.316Z"
}

```

---

📁 Folder Structure
````
EXPLORADOR/
├── prisma/
│   └── schema.prisma          
├── src/
│   ├── controllers/
│   │   ├── note.controller.ts 
│   │   └── task.controller.ts 
│   ├── database/
│   │   └── prisma.ts         
│   ├── middlewares/
│   │   └── error.middleware.ts 
│   ├── models/
│   │   └── task.ts            
│   ├── repositories/
│   │   ├── note.repository.ts  
│   │   └── task.repository.ts 
│   ├── routes/
│   │   ├── index.ts          
│   │   ├── note.routes.ts     
│   │   └── task.routes.ts     
│   ├── services/
│   │   ├── note.service.ts    
│   │   └── task.service.ts   
│   ├── schemas/
│   │   ├── note.schemas.ts    
│   │   └── task.schemas.ts     
│   ├── app.ts              
│   └── server.ts             
├── .env                      
├── package.json               
└── tsconfig.json              
````
---

### 🔴Possible Errors and Solutions

1. Prisma Migration Errors Problem:
   
Failed to execute migrations or generate Prisma client Solution:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

2.Database Connection Issues Problem: Errors connecting to SQLite Solution:

- Ensure the dev.db file exists in the root directory
- Check the database file permissions

3. TypeScript Type Errors Problem: TypeScript compilation errors Solution:
```bash
npm run build
```
Or for development:
```bash
npm run dev
```

4. Missing Dependencies Problem: Modules not found Solution:
```bash
npm install
```

 ## 🟢🔴  HTTP Status Codes

- 200 OK: The request was successful and the response contains the data or confirmation of the operation (e.g.: GET, PUT, DELETE).
- 201 Created: The request was successful and a new resource was created (e.g.: creation of a task or note).
- 400 Bad Request: The request contains errors, such as invalid or missing parameters.
- 404 Not Found: The requested resource was not found (e.g.: nonexistent task or note).
- 500 Internal Server Error: A server error occurred while processing the request.

---

>> Developed by **Rafael Guerra Santos** <<

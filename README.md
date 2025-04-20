# 📝 Taskly API - Gerenciamento de Tarefas

API completa para gerenciamento de tarefas e notas, construída com Node.js, Express, Prisma e TypeScript.

---

## 📋 Visão Geral

O Taskly é uma API RESTful que permite:

- ✅ Criar, listar, atualizar e excluir tarefas
- 🗒 Adicionar notas às tarefas
- 🔍 Filtrar tarefas por status (TODO, IN_PROGRESS, DONE)
- 📌 Gerenciar prioridades (LOW, MEDIUM, HIGH)

  ---
  ## 🛠 Tecnologias
- Node.js (v18+)

- Express (Framework web)
- Prisma (ORM para SQLite)
- TypeScript (Tipagem estática)
- Zod (Validação de dados)
- Postman (Testes de API)

  ---

 ## 🚀 Começando
##✅ Pré-requisitos

- Node.js 18+
- npm ou yarn
- SQLite (embutido, não precisa instalar separadamente)

---

 ## 📦 Instalação
**Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/taskly-api.git
cd taskly-api
```

**Instale as dependências:**
```bash
npm install
```

**Configure o banco de dados:**
```bash
npx prisma migrate dev --name init
```

**Inicie o servidor em desenvolvimento:**
```bash
npm run dev
```

---

## 🌐 Endpoints da API

### 📌 Tarefas (`/tasks`)

| Método | Endpoint                | Descrição                          |
|--------|-------------------------|------------------------------------|
| POST   | `/tasks`                | Cria uma nova tarefa               |
| GET    | `/tasks`                | Lista todas as tarefas             |
| GET    | `/tasks/:id`            | Obtém uma tarefa específica        |
| GET    | `/tasks/status/:status` | Filtra tarefas por status          |
| PUT    | `/tasks/:id`            | Atualiza uma tarefa                |
| DELETE | `/tasks/:id`            | Remove uma tarefa                  |

### 🗒 Notas (/notes)

| Método | Endpoint                | Descrição                          |
|--------|-------------------------|------------------------------------|
| POST   | `/:taskId/notes`        | Adiciona uma nota à tarefa         |
| GET    | `/:taskId/notes`        | Lista todas as notas da tarefas    |
| GET    | `/notes/:id`            | Obtém uma nota específica          |
| PUT    | `/notes/:id`            | Atualiza uma nota                  |
| DELETE | `/notes/:id`            | Deleta uma nota                    |

---

## Exemplo de endepoints
## Create tarefa

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

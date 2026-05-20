# SyncBoard Backend API

A backend service built entirely using **native Node.js modules** (`http`, `fs/promises`, `path`, `crypto`). It implements a complete RESTful CRUD API and handles resource requests without using Express or any third-party framework wrapper.

---

## ⚙️ Features

- **Zero External Dependencies**: Powered strictly by Node.js built-ins.
- **REST Endpoints**: CRUD access to a Task database.
- **Query Parameter Parsing**: Supports filtering by status, search queries, and categories directly in the URL.
- **Automatic Flat-File Database**: Initializes `data/tasks.json` automatically on startup if it does not exist.
- **Full CORS Support**: Correctly configures preflight options and headers for seamless connection from Vite local hosts.

---

## 🚦 REST API Specifications

All endpoints are relative to: `http://localhost:5000`

### 1. Retrieve Tasks
* **Endpoint**: `GET /api/tasks`
* **Query Parameters**:
  - `status` (string, optional) — Filter tasks (e.g. `todo`, `in-progress`, `completed`).
  - `category` (string, optional) — Filter by category (e.g. `work`, `personal`, `shopping`, `other`).
  - `q` (string, optional) — Filter tasks whose title or description contains the search term (case-insensitive).
* **Response**: `200 OK` with an array of tasks.

### 2. Retrieve Specific Task
* **Endpoint**: `GET /api/tasks/:id`
* **Response**:
  - `200 OK` with the task object.
  - `404 Not Found` if the task does not exist.

### 3. Create Task
* **Endpoint**: `POST /api/tasks`
* **Request Body** (JSON):
  ```json
  {
    "title": "Task Title (Required)",
    "description": "Optional description text",
    "status": "todo | in-progress | completed",
    "priority": "low | medium | high",
    "category": "work | personal | shopping | other",
    "dueDate": "YYYY-MM-DD"
  }
  ```
* **Validation**: Returns `400 Bad Request` if `title` is missing or contains only whitespace.
* **Auto-generated Fields**:
  - `id`: Unique string prefixed with `task-` (utilizes `crypto.randomUUID()`).
  - `createdAt`: ISO 8601 string.
  - Default values for missing properties: `status: 'todo'`, `priority: 'medium'`, `category: 'work'`, `dueDate: (today's date)`.
* **Response**: `201 Created` with the newly created task.

### 4. Update Task
* **Endpoint**: `PUT /api/tasks/:id`
* **Request Body** (JSON): Include any fields you wish to modify.
* **Validation**: Returns `400 Bad Request` if `title` is explicitly updated to an empty string.
* **Response**: `200 OK` with the updated task object, or `404 Not Found`.

### 5. Delete Task
* **Endpoint**: `DELETE /api/tasks/:id`
* **Response**: `200 OK` with a success message and the deleted task details, or `404 Not Found`.

---

## 💾 Database Schema

The backend uses a local JSON file stored under `data/tasks.json` as a persistent database. Each task has the following structure:

```json
{
  "id": "task-b7a4f910-c3d6-4447-b283-847253a5c78a",
  "title": "Build native Node server",
  "description": "Complete the backend API without external npm packages.",
  "status": "completed",
  "priority": "high",
  "category": "work",
  "dueDate": "2026-05-20",
  "createdAt": "2026-05-20T14:30:00.000Z"
}
```

---

## 🚀 Running the Backend Service

If you are running the backend in isolation without the root orchestrator scripts:

### Installation
No dependencies need to be installed since the backend uses only built-in modules.

### Start the server
```bash
npm start
```
Alternatively:
```bash
node server.js
```

The console will indicate that the service is online:
```text
🚀 Native HTTP Backend Server running on http://localhost:5000
```

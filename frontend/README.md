# SyncBoard Frontend

SyncBoard Frontend is a modern, responsive single-page Kanban dashboard built with **React** and **Vite**. It features a glassmorphic aesthetic, custom-styled controls, and full integration with the native Node.js backend.

---

## ✨ Features

- **Kanban Board Layout**: Tasks are grouped dynamically into "To Do", "In Progress", and "Completed" columns.
- **Task Progression**: Easily shift tasks between status lanes with interactive action buttons.
- **Categorization & Priority Tags**: Supports custom labels for priority levels (`Low`, `Medium`, `High`) and categories (`Work`, `Personal`, `Shopping`, `Other`) with color indicators.
- **Dynamic Stats Board**: A top panel showing live counts of total tasks and breakdown by lane status.
- **Filter Bar**: Instantly filter tasks by category or priority level.
- **Modal Forms**: Clean modal overlay system for creating and editing tasks with real-time UI feedback.
- **Toast Notifications**: Built-in, non-blocking toast banner alert system for success and error messages.
- **Premium Glassmorphism Style**: Modern appearance using custom CSS properties, smooth hover transitions, and dark background styling.

---

## 📂 Core Component Structure

The frontend code is structured as follows under the `src/` directory:

- **`main.jsx`**: The entry point that mounts the React tree to the DOM.
- **`App.jsx`**: The state engine and layout container. It manages:
  - Task fetching and state modification (`fetch`, `POST`, `PUT`, `DELETE`).
  - Active filters, modal toggle state, and active item editing.
  - Toast stack events.
- **`components/`**:
  - **`TaskBoard.jsx`**: Renders the column structures and distributes cards to their appropriate status lane.
  - **`TaskCard.jsx`**: Renders details for an individual task. Features tags, color-coded borders, due dates, action triggers, and lane shift buttons.
  - **`TaskForm.jsx`**: A modal dialog containing form inputs for task creation or updates.
  - **`Toast.jsx`**: Manages and auto-dismisses popup action alerts.
- **Styling**:
  - **`index.css`**: Defines CSS custom properties (color palettes, shadows, borders) and global element overrides.
  - **`App.css`**: Holds specific utility classes, glassmorphic card layouts, responsive media queries, and animations.

---

## 🔌 API Integration

The frontend connects directly to the backend API via standard `fetch` requests.

- **Base URL Configuration**: Configured in `src/App.jsx` as:
  ```javascript
  const API_BASE = 'http://localhost:5000/api';
  ```
- **State Handlers**:
  - `fetchTasks()`: Querying tasks from `GET /api/tasks` with optional category and priority filters.
  - `handleFormSubmit()`: Invokes `POST /api/tasks` to create new tasks or `PUT /api/tasks/:id` to update them.
  - `handleStatusChange()`: Sends a targeted `PUT` request to update the task status when shifting lanes.
  - `handleDeleteTask()`: Calls `DELETE /api/tasks/:id` to remove the record.

---

## 🚀 Development Setup

If you are running the frontend project individually:

### 1. Installation
Install Vite and React dependencies:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
By default, the application will boot on `http://localhost:5173`. Make sure the backend server is running on port `5000` to allow database transactions.

### 3. Production Build
To build and optimize files for production deployment:
```bash
npm run build
```
To run the production build locally:
```bash
npm run preview
```

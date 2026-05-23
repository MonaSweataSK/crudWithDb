const crypto = require('crypto');

function buildTaskFromBody(body) {
  const now = new Date().toISOString();
  return {
    id: 'task-' + crypto.randomUUID(),
    title: body.title.trim(),
    description: (body.description || '').trim(),
    status: body.status || 'todo',
    priority: body.priority || 'medium',
    category: body.category || 'work',
    dueDate: body.dueDate || now.split('T')[0],
    createdAt: now
  };
}

module.exports = { buildTaskFromBody };

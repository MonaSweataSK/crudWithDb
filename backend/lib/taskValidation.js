const { VALID_STATUSES, VALID_PRIORITIES } = require('./constants');

function isValidDateString(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function validateTaskBody(body) {
  if (!body || typeof body !== 'object') {
    return 'Request body must be a valid JSON object';
  }

  if (!body.title || body.title.trim() === '') {
    return 'Task title is required';
  }

  if (body.status !== undefined && !validStatuses.includes(body.status)) {
    return `Invalid status value. Expected one of: ${validStatuses.join(', ')}`;
  }

  if (body.priority !== undefined && !validPriorities.includes(body.priority)) {
    return `Invalid priority value. Expected one of: ${validPriorities.join(', ')}`;
  }

  if (body.dueDate !== undefined && !isValidDateString(body.dueDate)) {
    return 'Invalid dueDate format. Expected YYYY-MM-DD';
  }

  return null;
}

module.exports = { validateTaskBody };

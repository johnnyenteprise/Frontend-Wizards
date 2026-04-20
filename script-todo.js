// ============ STATE MANAGEMENT ============
const state = {
    title: 'Build Frontend Wizards Component',
    description: 'Create a fully accessible and responsive todo card component with all required testing attributes, keyboard navigation, WCAG AA compliance, and advanced interactive features including edit mode, status controls, and dynamic time management.',
    priority: 'high',
    status: 'in-progress',
    dueDate: new Date('2026-04-20T18:00:00Z'),
    isCompleted: false,
    isExpanded: false,
    isEditMode: false,
    timeInterval: null
};

// ============ DOM ELEMENTS ============
const card = document.querySelector('[data-testid="test-todo-card"]');
const viewMode = document.querySelector('.view-mode');
const editMode = document.querySelector('.edit-mode');
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');
const expandToggle = document.querySelector('[data-testid="test-todo-expand-toggle"]');
const collapsibleSection = document.querySelector('[data-testid="test-todo-collapsible-section"]');
const editButton = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteButton = document.querySelector('[data-testid="test-todo-delete-button"]');
const editForm = document.querySelector('[data-testid="test-todo-edit-form"]');
const saveButton = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelButton = document.querySelector('[data-testid="test-todo-cancel-button"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const overdueIndicator = document.querySelector('[data-testid="test-todo-overdue-indicator"]');
const dateTimeSection = document.querySelector('.date-time-section');

// ============ EVENT LISTENERS ============
checkbox.addEventListener('change', handleCheckboxToggle);
statusControl.addEventListener('change', handleStatusChange);
expandToggle.addEventListener('click', handleExpandToggle);
editButton.addEventListener('click', enterEditMode);
deleteButton.addEventListener('click', handleDelete);
cancelButton.addEventListener('click', exitEditMode);
editForm.addEventListener('submit', handleSaveEdit);

// ============ CHECKBOX HANDLING ============
function handleCheckboxToggle(e) {
    state.isCompleted = e.target.checked;
    
    if (state.isCompleted) {
        state.status = 'done';
        statusControl.value = 'done';
    } else {
        state.status = 'pending';
        statusControl.value = 'pending';
    }
    
    updateUI();
}

// ============ STATUS CONTROL HANDLING ============
function handleStatusChange(e) {
    state.status = e.target.value;
    
    if (state.status === 'done') {
        state.isCompleted = true;
        checkbox.checked = true;
    } else {
        state.isCompleted = false;
        checkbox.checked = false;
    }
    
    updateUI();
}

// ============ EXPAND/COLLAPSE HANDLING ============
function handleExpandToggle() {
    state.isExpanded = !state.isExpanded;
    collapsibleSection.classList.toggle('collapsed', !state.isExpanded);
    expandToggle.setAttribute('aria-expanded', state.isExpanded);
    expandToggle.textContent = state.isExpanded ? 'Show less' : 'Show more';
}

// ============ EDIT MODE HANDLING ============
function enterEditMode() {
    state.isEditMode = true;
    
    // Populate form with current values
    document.querySelector('[data-testid="test-todo-edit-title-input"]').value = state.title;
    document.querySelector('[data-testid="test-todo-edit-description-input"]').value = state.description;
    document.querySelector('[data-testid="test-todo-edit-priority-select"]').value = state.priority;
    
    // Format date for datetime-local input
    const dueDateInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');
    dueDateInput.value = state.dueDate.toISOString().slice(0, 16);
    
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');
    
    // Focus on title input
    document.querySelector('[data-testid="test-todo-edit-title-input"]').focus();
}

function exitEditMode() {
    state.isEditMode = false;
    viewMode.classList.remove('hidden');
    editMode.classList.add('hidden');
    editButton.focus();
}

function handleSaveEdit(e) {
    e.preventDefault();
    
    state.title = document.querySelector('[data-testid="test-todo-edit-title-input"]').value.trim();
    state.description = document.querySelector('[data-testid="test-todo-edit-description-input"]').value.trim();
    state.priority = document.querySelector('[data-testid="test-todo-edit-priority-select"]').value;
    
    const dueDateInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]').value;
    if (dueDateInput) {
        state.dueDate = new Date(dueDateInput + ':00Z');
    }
    
    exitEditMode();
    updateUI();
}

// ============ DELETE HANDLING ============
function handleDelete() {
    console.log('Delete clicked');
    if (confirm('Are you sure you want to delete this task?')) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
        if (state.timeInterval) clearInterval(state.timeInterval);
    }
}

// ============ TIME MANAGEMENT ============
function updateTimeRemaining() {
    if (state.isCompleted) {
        timeRemainingEl.innerHTML = '<span aria-hidden="true">✓</span> Completed';
        timeRemainingEl.classList.remove('overdue');
        overdueIndicator.classList.add('hidden');
        dateTimeSection.classList.remove('overdue');
        return;
    }

    const now = Date.now();
    const dueTime = state.dueDate.getTime();
    const timeLeft = dueTime - now;

    if (timeLeft < 0) {
        // Overdue
        const absTimeLeft = Math.abs(timeLeft);
        const daysOverdue = Math.floor(absTimeLeft / (1000 * 60 * 60 * 24));
        const hoursOverdue = Math.floor((absTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesOverdue = Math.floor((absTimeLeft % (1000 * 60 * 60)) / (1000 * 60));

        timeRemainingEl.innerHTML = `<span aria-hidden="true">⏱️</span> Overdue by ${daysOverdue}d ${hoursOverdue}h ${minutesOverdue}m`;
        timeRemainingEl.classList.add('overdue');
        overdueIndicator.classList.remove('hidden');
        dateTimeSection.classList.add('overdue');

        if (!card.classList.contains('overdue')) {
            card.classList.add('overdue');
        }
    } else {
        // Not overdue
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        timeRemainingEl.innerHTML = `<span aria-hidden="true">⏱️</span> Due in ${days}d ${hours}h ${minutes}m`;
        timeRemainingEl.classList.remove('overdue');
        overdueIndicator.classList.add('hidden');
        dateTimeSection.classList.remove('overdue');
        card.classList.remove('overdue');
    }
}

// ============ UI UPDATE ============
function updateUI() {
    // Update title
    document.querySelector('[data-testid="test-todo-title"]').textContent = state.title;
    
    // Update description
    document.querySelector('[data-testid="test-todo-description"]').textContent = state.description;
    
    // Update priority indicator
    const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');
    priorityIndicator.className = state.priority;
    
    // Update priority badge
    const priorityBadge = document.querySelector('[data-testid="test-todo-priority"]');
    priorityBadge.className = state.priority;
    const priorityEmoji = state.priority === 'low' ? '🟢' : state.priority === 'medium' ? '🟡' : '🔴';
    priorityBadge.innerHTML = `<span aria-hidden="true">${priorityEmoji}</span> ${state.priority.charAt(0).toUpperCase() + state.priority.slice(1)}`;
    
    // Update status
    statusControl.value = state.status;
    
    // Update card classes
    if (state.isCompleted) {
        card.classList.add('completed');
    } else {
        card.classList.remove('completed');
    }
    
    if (state.priority === 'high') {
        card.classList.add('high-priority');
    } else {
        card.classList.remove('high-priority');
    }
    
    // Update time remaining
    updateTimeRemaining();
}

// ============ INITIALIZATION ============
function init() {
    updateUI();
    state.timeInterval = setInterval(updateTimeRemaining, 30000);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);

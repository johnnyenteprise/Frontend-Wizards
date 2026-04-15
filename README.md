# Frontend Wizards - Todo Item Card Component

A clean, modern, and fully accessible Todo/Task Card component built with semantic HTML, WCAG AA compliance, and comprehensive test IDs for automated testing.

## Features

✅ **Testable** - All required `data-testid` attributes for automated test suites
✅ **Accessible** - WCAG AA compliant with full keyboard navigation
✅ **Responsive** - Works seamlessly from 320px to 1200px
✅ **Semantic HTML** - Proper use of `<article>`, `<time>`, `<button>`, `<input>`, etc.
✅ **Live Updates** - Time-remaining updates every 60 seconds
✅ **Interactive** - Toggle completion, edit/delete actions

## Test IDs

All required test IDs are implemented:

- `test-todo-card` - Root card container
- `test-todo-title` - Task title
- `test-todo-description` - Task description
- `test-todo-priority` - Priority badge (Low/Medium/High)
- `test-todo-due-date` - Due date with `<time>` element
- `test-todo-time-remaining` - Live time-remaining counter
- `test-todo-status` - Status indicator (Pending/In Progress/Done)
- `test-todo-complete-toggle` - Real `<input type="checkbox">`
- `test-todo-tags` - Tags list
- `test-todo-tag-work` - Tag: work
- `test-todo-tag-urgent` - Tag: urgent
- `test-todo-edit-button` - Edit button
- `test-todo-delete-button` - Delete button

## Accessibility Features

- ✓ Semantic HTML elements
- ✓ Proper `aria-label` and `aria-labelledby` attributes
- ✓ Real checkbox with associated label
- ✓ Visible focus states on tab navigation
- ✓ WCAG AA color contrast compliant
- ✓ Live region updates with `aria-live="polite"`
- ✓ Keyboard fully navigable (Tab, Enter, Space)

## Usage

Simply open `Index.html` in a browser. The component includes:

1. **Hardcoded Data** - Example todo with:
   - Title: "Build Frontend Wizards Component"
   - Priority: High
   - Status: In Progress
   - Tags: work, urgent, frontend

2. **Interactive Features**:
   - Toggle checkbox to mark complete
   - Edit button (console.log + alert)
   - Delete button with confirmation

3. **Live Time Remaining**:
   - Calculates from due date (Feb 20, 2026)
   - Updates every 60 seconds
   - Shows friendly text ("Due in 5 days", "Due tomorrow", "Overdue by 2 hours")

## Responsiveness

- **Mobile (< 480px)**: Full-width, stacked layout
- **Tablet/Desktop (480px+)**: Max-width 500px, comfortable spacing
- **Ultra-mobile (320px)**: Optimized for small screens

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Files

- `Index.html` - Complete component with HTML, CSS, and JavaScript

---

Built with accessibility and testability as first-class concerns.

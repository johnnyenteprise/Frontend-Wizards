# Frontend Wizards - Todo Item Card Component

**Stage 1a: Advanced Interactive & Stateful**

A fully interactive, stateful todo card component with edit mode, status controls, expand/collapse behavior, overdue detection, and comprehensive accessibility features. Built with semantic HTML and extensive test IDs for automated testing.

## What's New in Stage 1a

### Major Enhancements:
- ✨ **Full Edit Mode** - Switch between view and edit with form validation
- ✨ **Status Controls** - Dropdown to change task status (Pending → In Progress → Done)
- ✨ **Priority Indicator** - Colored dot indicator that changes with priority level
- ✨ **Expand/Collapse** - Long descriptions collapse with "Show more" toggle
- ✨ **Overdue Detection** - Visual alerts when tasks are past their due date
- ✨ **Synchronized State** - Checkbox, status dropdown, and status display stay in sync
- ✨ **Enhanced Time Logic** - More granular time display, stops updating when completed

### Stage 0 → Stage 1a Changes:
| Feature | Stage 0 | Stage 1a |
|---------|---------|----------|
| Edit functionality | Dummy alert | Full form with save/cancel |
| Status display | Static text | Interactive dropdown + sync |
| Priority | Badge only | Badge + indicator dot |
| Description | Always visible | Collapsible with toggle |
| Overdue handling | No indicator | Visual badge & color change |
| Time updates | Every 60 seconds | Every 30 seconds + stops when Done |
| State management | Minimal | Full state object with UI sync |

## Features

✅ **Fully Testable** - 19+ `data-testid` attributes
✅ **Interactive** - Edit form, status changes, expand/collapse
✅ **Accessible** - WCAG AA, `aria-expanded`, `aria-controls`, full keyboard nav
✅ **Responsive** - 320px to 1200px seamlessly
✅ **Stateful** - Synced checkbox, dropdown, and UI state
✅ **Live Updates** - Time remaining updates every 30 seconds
✅ **Semantic HTML** - Proper form, fieldsets, labels, time elements

## All Test IDs (Stage 1a)

### View Mode (Stage 0 + Stage 1a):
- `test-todo-card` - Root card container
- `test-todo-title` - Task title (h2)
- `test-todo-description` - Task description (p)
- `test-todo-priority` - Priority badge
- `test-todo-due-date` - Due date (time element)
- `test-todo-time-remaining` - Live time counter (aria-live)
- `test-todo-complete-toggle` - Checkbox (input[type="checkbox"])
- `test-todo-tags` - Tags list (ul)
- `test-todo-tag-work` - Work tag
- `test-todo-tag-urgent` - Urgent tag
- `test-todo-edit-button` - Edit button
- `test-todo-delete-button` - Delete button

### New in Stage 1a:
- `test-todo-status` - Status display (no longer required but kept for compatibility)
- `test-todo-priority-indicator` - Colored dot indicator
- `test-todo-overdue-indicator` - Overdue badge
- `test-todo-status-control` - Status dropdown (select)
- `test-todo-collapsible-section` - Collapsible container (div)
- `test-todo-expand-toggle` - Show more/less button

### Edit Form (Stage 1a):
- `test-todo-edit-form` - Form element
- `test-todo-edit-title-input` - Title input (text)
- `test-todo-edit-description-input` - Description input (textarea)
- `test-todo-edit-priority-select` - Priority select (dropdown)
- `test-todo-edit-due-date-input` - Due date input (datetime-local)
- `test-todo-save-button` - Save button
- `test-todo-cancel-button` - Cancel button

## Accessibility Features

- ✓ Semantic HTML: `<article>`, `<form>`, `<label>`, `<time>`, `<button>`
- ✓ `aria-label` on all interactive elements
- ✓ `aria-labelledby` linking title to card region
- ✓ `aria-expanded` and `aria-controls` on expand toggle
- ✓ `aria-live="polite"` on time-remaining updates
- ✓ Real checkbox with associated label (not button role)
- ✓ Select dropdown for status (not segmented buttons)
- ✓ Form with proper labels for all inputs
- ✓ Visible focus states (2px outline)
- ✓ WCAG AA color contrast
- ✓ Full keyboard navigation:
  - Tab → Checkbox → Status Control → Expand Toggle → Edit → Delete
  - In edit mode: Tab → Title → Description → Priority → Due Date → Save → Cancel

## Behavioral Requirements (Implemented)

### Edit Mode
- ✓ Click Edit button → toggles to form view
- ✓ Form pre-fills with current values
- ✓ Save button updates card with new values
- ✓ Cancel button exits without changes
- ✓ Focus returns to Edit button when exiting

### Status Logic
- ✓ Checking checkbox → status becomes "Done"
- ✓ Changing status to "Done" → checkbox becomes checked
- ✓ Unchecking when "Done" → status changes to "Pending"
- ✓ All three sync: checkbox, dropdown, and display

### Visual States
- ✓ **Done** → strike-through title + muted colors + green border
- ✓ **High Priority** → orange-tinted border indicator
- ✓ **Overdue** → red border + red time text + overdue badge
- ✓ **Priority Indicator** → colored dot (Low=Green, Medium=Yellow, High=Red)

### Time Management
- ✓ Updates every 30 seconds (vs 60 in Stage 0)
- ✓ Shows granular time: "Due in 2 days", "Due in 3 hours", "Due in 45 minutes"
- ✓ Detects overdue: "Overdue by 1 hour", "Overdue by 30 minutes"
- ✓ Stops updating when status = "Done" (shows "Completed")
- ✓ Overdue indicator badge appears/disappears

### Expand/Collapse
- ✓ Long descriptions (>100px height) show "Show more" button
- ✓ Collapsed state limits to 80px with gradient fade
- ✓ Button updates to "Show less" when expanded
- ✓ aria-expanded toggles correctly

## Usage

Simply open `Index.html` in a browser or visit the live URL:

1. **Interact with the card**:
   - Click Edit to open the form
   - Save or Cancel to update/discard
   - Toggle checkbox to mark complete
   - Change status via dropdown
   - Click "Show more" to expand description
   - Delete to remove the card

2. **Observe state synchronization**:
   - Checkbox ↔ Status dropdown ↔ Status display all stay in sync
   - Time updates every 30 seconds
   - Overdue visual changes appear automatically

3. **Test accessibility**:
   - Tab through all interactive elements
   - Use arrow keys in status dropdown
   - Screen reader announces all labels and live regions

## Responsiveness

- **Ultra-mobile (320px)**: Optimized for smallest screens
- **Mobile (320–480px)**: Full-width, stacked form inputs
- **Tablet (480–768px)**: Comfortable spacing, form flows nicely
- **Desktop (768px+)**: Max-width 500px, optimal reading width

No horizontal overflow at any size. Form fields stack vertically on mobile, long titles wrap properly, tags wrap naturally.

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations / Design Decisions

1. **Date Format** - Uses HTML5 `datetime-local` input (no timezone selection)
2. **Delete** - Shows confirmation but doesn't persist to backend
3. **Edit Form** - No validation beyond required fields
4. **Time Updates** - Pauses during edit mode to prevent interference
5. **Focus Trapping** - Not implemented (optional accessibility enhancement)
6. **Undo** - No undo history for edits
7. **Tags** - Tags are display-only (can't edit in Stage 1a)

## Files

- `Index.html` - Complete component with HTML, CSS, and JavaScript (900+ lines)
- `README_v1a.md` - This documentation

## Future Enhancements (Stage 1b+)

- [ ] Edit tags within form
- [ ] Repeating/recurring tasks
- [ ] Task dependencies/subtasks
- [ ] Custom color themes
- [ ] Dark mode
- [ ] Task history/audit log
- [ ] Timezone support for due dates
- [ ] Focus trap in edit form
- [ ] Drag-and-drop reordering

---

Built with accessibility-first and testability-first principles. Every interactive element has a test ID, every visual indicator has an accessible label, and every feature works with keyboard alone.

**Live & Source:**
- Live: https://frontend-wizards.netlify.app/
- Repo: https://github.com/johnnyenterprise/Frontend-Wizards

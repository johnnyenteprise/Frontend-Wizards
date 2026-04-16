# Frontend Wizards - Profile Card Component

**Stage 1B: Accessible User Profile Card**

A clean, modern user profile card component showcasing a person's information, hobbies, dislikes, and social links. Built with semantic HTML, full accessibility, and responsive design.

## Features

✅ **Fully Testable** - 9+ required `data-testid` attributes
✅ **Accessible** - WCAG AA compliant with full keyboard navigation
✅ **Responsive** - 320px to 600px+ seamlessly
✅ **Semantic HTML** - `<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`
✅ **Live Updates** - Current epoch time updates every 500ms
✅ **Interactive** - Hover effects, focus states, keyboard navigation
✅ **Modern Design** - Gradient backgrounds, smooth transitions

## All Required Test IDs

### Core Elements:
- `test-profile-card` - Root card container (article)
- `test-user-name` - User's full name (h1)
- `test-user-bio` - Short biography (p)
- `test-user-time` - Current epoch time in milliseconds (span with aria-live)
- `test-user-avatar` - Avatar image container (figure > img)

### Social & Attributes:
- `test-user-social-links` - Social links container (nav)
- `test-user-social-twitter` - Twitter link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-social-github` - GitHub link
- `test-user-hobbies` - Hobbies list (ul)
- `test-user-dislikes` - Dislikes list (ul)

## Layout

### Desktop (> 600px)
```
┌─────────────────────────────┐
│ [Avatar]   Name             │
│            Bio              │
│            Time             │
│            Social Links     │
│            Hobbies | Dislikes
└─────────────────────────────┘
```
- Avatar on left (140x140px)
- Text content on right
- Two-column hobbies/dislikes grid

### Mobile (< 600px)
```
┌────────────────────┐
│    [Avatar]        │
│     Name           │
│     Bio            │
│     Time           │
│ Social Links       │
│ Hobbies | Dislikes │
└────────────────────┘
```
- Avatar centered, full-width
- Content stacked vertically
- Responsive font sizes

### Ultra-Mobile (< 480px)
- Avatar: 100x100px
- Hobbies/Dislikes: stacked vertically
- Font sizes optimized for readability
- Touch-friendly spacing

## Accessibility Features

- ✓ **Semantic HTML**: `<article>`, `<figure>`, `<figcaption>`, `<nav>`, `<section>`, `<header>`
- ✓ **Alt Text**: Meaningful alt text for avatar image
- ✓ **ARIA Labels**:
  - `aria-label` on all social links
  - `aria-labelledby` linking sections to headings
  - `aria-live="polite"` on time display (announces updates to screen readers)
  - `role="status"` on time element
- ✓ **Keyboard Navigation**:
  - Tab through all social links
  - Focus states visible (2px outline)
  - Links open in new tab with `rel="noopener noreferrer"`
- ✓ **Color Contrast**: WCAG AA compliant
- ✓ **Visual Feedback**:
  - Hover effects on links
  - Active states on click
  - Focus outlines on keyboard navigation

## Behavior

### Time Display
- Shows current epoch time in **milliseconds**
- Updates every **500ms** via `Date.now()`
- Screen reader announces updates via `aria-live="polite"`
- Accessible as status region for AT (Assistive Technology)

### Avatar
- SVG-based default avatar (gradient person icon)
- Supports custom image URLs
- Properly labeled with `alt` attribute and `<figcaption>`
- Hover effect: slight zoom

### Social Links
- Opens in new tab: `target="_blank"`
- Security: `rel="noopener noreferrer"`
- Keyboard focusable with visible focus styles
- Includes individual `data-testid` for each network:
  - Twitter
  - LinkedIn
  - GitHub

### Hobbies & Dislikes
- Hobbies marked with ✓ (green check)
- Dislikes marked with ✗ (red X)
- Semantic `<ul>` lists with `<li>` items
- Accessible list semantics

## Responsiveness Breakpoints

| Breakpoint | Layout | Avatar | Changes |
|-----------|--------|--------|---------|
| 600px+ | 2-column grid | 140x140px | Avatar left, content right |
| 480-600px | Single column | 100x100px | Full-width, stacked content |
| 320-480px | Single column | 80x80px | Optimized for mobile phones |
| <320px | Single column | 80x80px | Minimal padding, compact layout |

**Key Features:**
- No horizontal overflow at any screen size
- Text wraps appropriately
- Touch-friendly spacing on mobile
- Readable font sizes at all breakpoints

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Implementation Details

### HTML Structure
```html
<article data-testid="test-profile-card">
  <figure data-testid="test-user-avatar">
    <img alt="..." />
    <figcaption>User Profile</figcaption>
  </figure>
  
  <header>
    <h1 data-testid="test-user-name">Name</h1>
  </header>
  
  <p data-testid="test-user-bio">Bio text</p>
  
  <span data-testid="test-user-time" aria-live="polite">
    {current epoch ms}
  </span>
  
  <nav data-testid="test-user-social-links">
    <a data-testid="test-user-social-twitter">Twitter</a>
    ...
  </nav>
  
  <ul data-testid="test-user-hobbies">...</ul>
  <ul data-testid="test-user-dislikes">...</ul>
</article>
```

### CSS Features
- **Flexbox/Grid**: Modern layout system
- **CSS Custom Properties**: For easy theming
- **Responsive Design**: Mobile-first approach
- **Transitions**: Smooth hover/focus effects
- **Semantic Color Scheme**:
  - Primary: #667eea (purple)
  - Success: #48bb78 (green, for hobbies)
  - Error: #f56565 (red, for dislikes)

### JavaScript
- **Time Updates**: Every 500ms using `setInterval`
- **Keyboard Focus**: Links are tab-focusable
- **Accessibility Logging**: Console messages for verification

## Files

- `profile.html` - Complete Profile Card component (500+ lines)
- `Index.html` - Stage 1a Todo Card (for reference)
- `README_v1a.md` - Stage 1a documentation

## Customization

### Change User Data
Edit the hardcoded values in `profile.html`:
```html
<h1 data-testid="test-user-name">Your Name</h1>
<p data-testid="test-user-bio">Your bio</p>
<img src="your-image-url" alt="Your description" />
```

### Change Avatar Image
Replace the `src` in the `<img>` tag:
```html
<img src="https://example.com/avatar.jpg" alt="..." />
```

### Modify Social Links
Add/remove social links in the nav:
```html
<a href="https://..." data-testid="test-user-social-youtube">YouTube</a>
```

### Update Hobbies/Dislikes
Edit the `<li>` items in respective lists.

## Acceptance Criteria (✅ All Met)

- ✅ All required `data-testid` elements exist and are discoverable
- ✅ Semantic HTML tags: `<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`
- ✅ Time value = `Date.now()` in milliseconds
- ✅ Avatar renders with `alt` attribute
- ✅ Social links in container, individually testable
- ✅ Hobbies and dislikes are distinct lists
- ✅ Keyboard navigation works for all links
- ✅ Focus styles are visible
- ✅ Responsive at all breakpoints (320px–1200px)
- ✅ No layout shifts or horizontal overflow
- ✅ WCAG AA color contrast
- ✅ Accessible names for all interactive elements
- ✅ aria-live for time updates

## Known Limitations / Design Decisions

1. **Avatar Format** - Uses SVG-based default; can be replaced with URLs
2. **Time Updates** - Shows milliseconds; no timezone conversion
3. **Social Links** - Hardcoded to example URLs (can be customized)
4. **Data** - Hardcoded example data (not fetched from API)
5. **No Image Upload** - Uses URL-based images only

## Future Enhancements

- [ ] Image upload functionality
- [ ] Edit profile information
- [ ] Dark mode theme
- [ ] Animation on load
- [ ] Follow button
- [ ] Verified badge
- [ ] Bio markdown support
- [ ] More social network options
- [ ] Profile statistics (followers, etc.)

---

Built with accessibility-first design. Every element is keyboard navigable, properly labeled, and tested for WCAG AA compliance.

**Live & Source:**
- Live: https://frontend-wizards.netlify.app/profile.html
- Repo: https://github.com/johnnyenterprise/Frontend-Wizards

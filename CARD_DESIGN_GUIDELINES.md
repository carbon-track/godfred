# SGFF Card Design Guidelines

This document defines the shared card design rules for the SGFF website.
Use this as the default reference when building or updating UI sections.

## 1. Goals

- Keep all content blocks visually consistent across pages.
- Prevent manual per-page typography drift.
- Use reusable UI components instead of custom one-off `div` styling.

## 2. Source of Truth

- Core card component: `src/components/ui/Card.js`
- Shared layout elements: `src/components/ui/elements.js`

If a visual requirement conflicts with this document, update `Card.js` first, then adopt the new API in pages.

## 3. Required Components

- `Card`: primary content card for almost all text blocks.
- `CardGrid`: standard grid wrapper for card layouts.
- `MetricCard`: metrics/stat cards (numbers + labels).
- `ActionCard`: CTA blocks.

Do not create custom card shells in page files.

## 4. Card Size System

`Card` supports a `size` prop:

- `size="sm"`: dense multi-column cards (3+ columns, short copy).
- `size="md"`: default section cards and single-column informational cards.
- `size="lg"`: emphasis cards with long narrative copy (use rarely).

### Size Mapping (internal behavior)

- `sm`: compact padding, smaller title/body text.
- `md`: standard spacing and body text scale.
- `lg`: larger text and spacing for hero-like content cards.

## 5. Typography Rules

- Prefer `size` over manual font-size classes.
- Avoid setting explicit `text-sm/text-base/text-lg/...` in page-level card props unless there is a strong reason.
- If you need styling overrides, use them for color/weight first:
  - Good: `descriptionClassName="text-gray-700"`
  - Avoid by default: `descriptionClassName="text-lg leading-9 ..."`

## 6. Variant Rules

`Card` supports `variant` values (`default`, `tinted`, `muted`, `contrast`), but usage should stay narrow:

- Default choice: `variant="default"`
- Use non-default variants only when the section has a clear semantic role (e.g. contrast CTA).
- Do not mix many variants in one section unless required by meaning.

## 7. Layout Rules

- Use `CardGrid` for all card collections.
- Recommended grid patterns:
  - 3-column content: `columns="three"` + cards `size="sm"`
  - 1-column narrative list: `columns="one"` + cards `size="md"`
  - Stats: use `MetricCard` directly
- Keep vertical rhythm consistent with `Section`.

## 8. Content Rules

- Use `title` for short headings.
- Use `description` for main body copy.
- Use `badge` for small contextual labels only.
- Use `footer` for outcomes/metadata, not core message copy.

## 9. Allowed Customization

Allowed when necessary:

- `className` for width/margin placement (`max-w-*`, `mt-*`).
- `descriptionClassName` for color/weight tweaks.
- `align="center"` for centered layouts (e.g. contact cards).

Avoid:

- Building custom border/background/padding card shells in pages.
- Introducing page-specific typography scales that bypass `size`.

## 10. Code Examples

### Standard 3-column section

```jsx
<CardGrid columns="three">
  {items.map((item) => (
    <Card
      key={item.title}
      size="sm"
      title={item.title}
      description={item.description}
    />
  ))}
</CardGrid>
```

### Single-column info list

```jsx
<CardGrid columns="one" className="mx-auto max-w-4xl">
  {items.map((text) => (
    <Card
      key={text}
      size="md"
      badge="Current"
      description={text}
      descriptionClassName="text-gray-700"
      className="h-auto"
    />
  ))}
</CardGrid>
```

### Emphasis CTA

```jsx
<ActionCard
  variant="default"
  title="Partner With SGFF"
  description="Interested in co-designing a program?"
  actionHref="/contact"
  actionLabel="Start a Conversation"
/>
```

## 11. PR Checklist

Before merging UI work:

- Page uses `Card` / `CardGrid` / `MetricCard` / `ActionCard` instead of custom card shells.
- `Card` typography is controlled by `size`.
- No unnecessary per-page font-size overrides.
- Spacing and section rhythm remain consistent.
- `npm run lint` passes (warnings reviewed).


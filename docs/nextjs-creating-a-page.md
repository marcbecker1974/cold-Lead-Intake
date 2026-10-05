Source: https://nextjs.org/docs/app/getting-started/layouts-and-pages

# Next.js Reference: Creating a Page

Based on the "Creating a page" section of the official Next.js App Router
documentation (version 16.x, as installed in this project).

## Concept

- A **page** is UI that is rendered on a specific route.
- A `page` file inside the `app` directory defines that route.
- The `page` file default-exports a React component.

```tsx
// app/page.tsx renders the index route (/)
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```

## In this project

- `app/page.tsx` is the Home dashboard (`/`).
- `app/leads/page.tsx` is the lead list (`/leads`).
- `app/leads/[id]/page.tsx` is the lead detail page (`/leads/[id]`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Frontend Theming Rules

When creating or updating UI components in this frontend app:

- Use the tokenized Tailwind classes from `app/globals.css` instead of hardcoded colors.
- Prefer semantic tokens for intent-first styling: `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-foreground`, `text-muted`, `border-edge`, `border-edge-strong`, `bg-surface`, `bg-surface-raised`, `bg-surface-overlay`.
- For cyberpunk emphasis, use neon token classes such as `text-neon-cyan`, `text-neon-magenta`, `bg-neon-purple`, `border-neon-lime`, and glow shadows like `shadow-glow-cyan`.
- Use utility classes defined in `app/globals.css` for effects: `text-glow-cyan`, `text-glow-magenta`, `text-glow-lime`, `bg-grid`, `bg-neon`, `bg-synth`, `bg-surface-gradient`.
- Keep the dark theme consistent. Do not introduce light backgrounds like white or near-white panels unless explicitly requested.
- Do not add one-off hex/rgb/hsl values in components when an existing token covers the use case.
- Prefer motion tokens (`animate-flicker`, `animate-pulse-glow`) for accent effects and keep motion purposeful.

If a new UI need is not covered by existing tokens, add a token in `app/globals.css` first, then consume it from component classes.

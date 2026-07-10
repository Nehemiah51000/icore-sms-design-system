# ICORE SMS Design System

Shared visual language and component library for the ICORE Bulk SMS Credit
Loading System — used by both the **Admin Dashboard** and the **Client
Portal**. Built with React, TypeScript, Tailwind CSS v4, Lucide (icons), and
Sonner (toasts).

This is not an installed package. It's a **source registry** — components
live here as plain, readable `.tsx` files, and consuming projects pull
whichever ones they need via a small fetch script (see below). You own the
code the moment you fetch it; edit it freely in your own project without
affecting this repo or the other app.

---

## Live reference

Run this project locally (`pnpm dev`) to browse every color, type scale, and
component with live, interactive examples — this is the actual source of
truth for what's available and how it looks in both light and dark mode.

```bash
git clone https://github.com/Nehemiah51000/icore-sms-design-system.git
cd icore-sms-design-system
pnpm install
pnpm dev
```

---

## Using a component in another project (Admin Dashboard / Client Portal)

You do **not** need to clone this repo to use its components in another
project. Each consuming project keeps its own small fetcher script that pulls
component source directly from this repo's `main` branch on GitHub.

### 1. Add the fetcher script to your project

Create `scripts/add-component.js` in your project (admin-dashboard or
client-portal) with the following content:

```js
#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

// Update this once per project — points at the design system's repo + branch
const REGISTRY_BASE =
  'https://raw.githubusercontent.com/Nehemiah51000/icore-sms-design-system/main';

async function fetchText(path) {
  const res = await fetch(`${REGISTRY_BASE}/${path}`);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.text();
}

async function copyRemoteFile(relativePath) {
  const targetPath = join(process.cwd(), 'src', relativePath);

  if (existsSync(targetPath)) {
    console.log(`  → Skipped (already exists): ${relativePath}`);
    return;
  }

  const content = await fetchText(`src/${relativePath}`);
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, content);
  console.log(`  ✓ Fetched: ${relativePath}`);
}

async function run() {
  const componentName = process.argv[2];

  if (!componentName) {
    const registry = JSON.parse(await fetchText('registry.json'));
    console.log('\nUsage: node scripts/add-component.js <ComponentName>\n');
    console.log('Available components:');
    Object.keys(registry).forEach((name) => console.log(`  - ${name}`));
    console.log('');
    return;
  }

  const registry = JSON.parse(await fetchText('registry.json'));
  const entry = registry[componentName];

  if (!entry) {
    console.error(`\nUnknown component "${componentName}".\n`);
    return;
  }

  console.log(`\nFetching "${componentName}" from design-system...\n`);
  for (const file of [...entry.files, ...entry.deps]) {
    await copyRemoteFile(file);
  }
  console.log(`\nDone. Check for new imports you may need to pnpm add.\n`);
}

run();
```

Commit this file once, on its own, as the first step of setting up any new
project against this design system.

### 2. See what's available

```bash
node scripts/add-component.js
```

Running with no arguments prints the full list of components currently
registered in `registry.json`.

### 3. Fetch a component

```bash
node scripts/add-component.js Button
node scripts/add-component.js AppShell
node scripts/add-component.js tokens
```

Each command reaches out to this repo's `registry.json`, looks up that
component's file plus any files it depends on (e.g. `lib/cn.ts`), and writes
them into your local `src/` folder at the matching path. Files that already
exist locally are skipped, not overwritten — safe to re-run.

### 4. Install any new runtime dependencies

The fetcher only copies files — it doesn't touch `package.json`. After
fetching a component, check its imports for anything not already installed
in your project:

```bash
pnpm add lucide-react clsx tailwind-merge class-variance-authority sonner
```

(Not every component needs all of these — check the specific file's imports
after fetching.)

### 5. Wire up Tailwind's theme tokens

Every component assumes the semantic and raw color tokens defined in this
project's `src/index.css` (`@theme` block + the `:root` / `.dark` semantic
mappings) already exist in your project. Copy that block into your own
`index.css` once when setting up a new project — see this repo's
`src/index.css` directly for the current version.

---

## Design tokens at a glance

| Family                        | Purpose                                                                 |
| ----------------------------- | ----------------------------------------------------------------------- |
| **Navy**                      | Primary brand color — buttons, sidebar, links                           |
| **Red**                       | Secondary brand color, destructive actions                              |
| **Muted**                     | Neutral grays — backgrounds, borders, secondary text                    |
| **Ink**                       | Near-black/white — body text, high-contrast elements                    |
| **Success / Warning / Error** | Status only — transaction states, alerts. Never used for brand/theming. |

All structural styling (backgrounds, borders, default text) routes through
**semantic tokens** (`bg-bg-surface`, `text-text-main`, `border-border-main`,
etc.) which automatically adapt between light and dark mode. Raw palette
classes (`bg-navy-500`, `text-red-600`) are reserved for deliberate brand
moments and status indicators — never used for structural theming, since they
don't adapt to dark mode on their own.

---

## Design principles this library follows

- **Solid, not glassmorphic** — opaque fills and clear borders, no
  backdrop-blur. Matches ICORE's bold, confident brand identity and performs
  better on lower-end devices.
- **Mobile-first** — every component is built and tested at narrow viewports
  first, then scaled up. Tables scroll horizontally rather than breaking
  layout on small screens.
- **System fonts only** — no web font downloads. Faster first paint on
  Kenyan mobile networks, and every platform renders its own native,
  already-cached font.
- **Composable over configurable** — components like `Card` and `Table`
  expose composable sub-parts (`CardHeader`, `TableCell`, etc.) rather than
  growing large prop APIs to handle every possible layout.

---

## Adding a new component to the registry

When a new component is built and committed here, add a matching entry to
`registry.json` at the repo root in the same commit:

```json
"ComponentName": {
  "files": ["ui/ComponentName/ComponentName.tsx"],
  "deps": ["lib/cn.ts"]
}
```

`deps` should list every other file the component imports from within this
project (e.g. `lib/cn.ts`, or another component it composes internally).
Forgetting a dependency here means consuming projects will fetch a component
that fails to build until the missing file is added manually.

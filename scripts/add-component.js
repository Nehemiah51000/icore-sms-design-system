#!/usr/bin/env node
import { existsSync, mkdirSync, copyFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = join(__dirname, '..', 'src');

// Every component's file, plus whatever else it needs to actually run.
// Add a new entry here every time a new component is built.
const registry = {
  Button: {
    files: ['ui/Button/Button.tsx'],
    deps: ['lib/cn.ts'],
  },
  Input: {
    files: ['ui/Input/Input.tsx'],
    deps: ['lib/cn.ts'],
  },
  Select: {
    files: ['ui/Select/Select.tsx'],
    deps: ['lib/cn.ts'],
  },
  StatusBadge: {
    files: ['ui/StatusBadge/StatusBadge.tsx'],
    deps: ['lib/cn.ts'],
  },
  Card: {
    files: ['ui/Card/Card.tsx'],
    deps: [],
  },
  Table: {
    files: ['ui/Table/Table.tsx'],
    deps: ['lib/cn.ts'],
  },
  Pagination: {
    files: ['ui/Pagination/Pagination.tsx'],
    deps: ['lib/cn.ts'],
  },
  Modal: {
    files: ['ui/Modal/Modal.tsx'],
    deps: ['lib/cn.ts'],
  },
  Toast: {
    files: ['ui/Toast/Toaster.tsx'],
    deps: [],
  },
  ThemeToggle: {
    files: ['ui/ThemeToggle/ThemeToggle.tsx'],
    deps: [],
  },
  Sidebar: {
    files: ['layout/Sidebar/Sidebar.tsx'],
    deps: ['lib/cn.ts'],
  },
  TopBar: {
    files: ['layout/TopBar/TopBar.tsx'],
    deps: [],
  },
  AppShell: {
    files: ['layout/AppShell/AppShell.tsx'],
    deps: [
      'layout/Sidebar/Sidebar.tsx',
      'layout/TopBar/TopBar.tsx',
      'lib/cn.ts',
    ],
  },
  tokens: {
    files: ['tokens/colors.ts', 'tokens/typography.ts'],
    deps: [],
  },
};

function copyFile(relativePath, targetRoot) {
  const from = join(SRC_ROOT, relativePath);
  const to = join(targetRoot, 'src', relativePath);

  if (!existsSync(from)) {
    console.error(`  ✗ Missing source file: ${relativePath}`);
    return false;
  }

  mkdirSync(dirname(to), { recursive: true });

  if (existsSync(to)) {
    console.log(`  → Skipped (already exists): ${relativePath}`);
    return true;
  }

  copyFileSync(from, to);
  console.log(`  ✓ Copied: ${relativePath}`);
  return true;
}

function run() {
  const [, , componentName, targetPath] = process.argv;

  if (!componentName || !targetPath) {
    console.log(
      '\nUsage: node scripts/add-component.js <ComponentName> <path-to-target-project>\n',
    );
    console.log('Available components:');
    Object.keys(registry).forEach((name) => console.log(`  - ${name}`));
    console.log('');
    process.exit(1);
  }

  const entry = registry[componentName];
  if (!entry) {
    console.error(
      `\nUnknown component "${componentName}". Run without arguments to see the list.\n`,
    );
    process.exit(1);
  }

  const targetRoot = join(process.cwd(), targetPath);
  if (!existsSync(targetRoot)) {
    console.error(`\nTarget path does not exist: ${targetRoot}\n`);
    process.exit(1);
  }

  console.log(`\nAdding "${componentName}" to ${targetPath}\n`);

  [...entry.files, ...entry.deps].forEach((file) => copyFile(file, targetRoot));

  console.log(
    `\nDone. Check for any new imports (e.g. lucide-react, clsx, tailwind-merge) you may need to install.\n`,
  );
}

run();

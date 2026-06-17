# Automated Test Suite

## Prerequisites

- Node.js (v18 or later)
- npm

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browser binaries (Chromium only):

```bash
npx playwright install chromium
```

## Running Tests

Run all BDD scenarios (generates spec files):

```bash
npm run test:bdd
```

Run Playwright tests directly without regenerating specs:

```bash
npm test
```

Regenerate BDD spec files only:

```bash
npm run bddgen
```

## Test Results

| Output | Location |
| :--- | :--- |
| Playwright HTML Report | `playwright-report/index.html` |
| Test Result Artifacts | `test-results/` |

Open the interactive HTML report after a test run:

```bash
npx playwright show-report
```
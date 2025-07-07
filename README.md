# Channable Pricing Page Playwright Tests

This repository contains automated end-to-end tests for the Channable Pricing page, written in TypeScript using [Playwright](https://playwright.dev/). The tests are structured using the Page Object Model (POM) pattern for maintainability and clarity.

## Project Structure

```
├── pom/                  # Page Object Model classes
│   ├── CookiesBanner.ts
│   └── PricingPage.ts
├── tests/                # Test specs and fixtures
│   ├── fixtures.ts
│   └── pricing.spec.ts
├── playwright.config.ts  # Playwright configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Install dependencies

```sh
npm install
```

### Run all tests

```sh
npx playwright test
```

### Run a specific test file

```sh
npx playwright test tests/pricing.spec.ts
```

### View the HTML test report

After running tests, open the report with:

```sh
npx playwright show-report
```

## Test Design

- **Page Object Model (POM):** All page interactions are encapsulated in the `pom/` directory for reusability and clarity.
- **Fixtures:** Custom Playwright fixtures are used to provide page objects to tests, ensuring clean setup and teardown.
- **Data-driven Testing:** The test structure is ready for data-driven scenarios (see comments in `pricing.spec.ts`).
- **Robust Selectors:** Tests use accessible roles and text selectors for reliability. But this is definitely something which can be improved.

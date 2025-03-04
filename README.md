# SQLI Automation Framework

## Overview

This project is a high-level design for a test automation framework built with [Playwright](https://www.playwright.dev/) and TypeScript, created to provide a robust, modular, and scalable testing solution.

The framework has been developed as part of a technical assessment for SQLI to test some UI and API components, and demonstrate my envision of the framework's structure focusing on simplify automated testing processes with reusable components, straightforward configuration, and easy maintenance.

## Table of Contents

- [Why this solution?](#why-this-solution)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Best Practices](#best-practices)

## Why this solution?

In order to implement this solution, I have chosen Playwright framework and also making use of the Page Object design pattern. Here are the key reasons to take those decisions:

### Playwright framework

- **Cross-browser & cross-platform:** Supports Chromium, WebKit, and Firefox on Windows, macOS, and Linux.
- **Multi-language support:** Works with JavaScript, TypeScript, Python, Java, and .NET.
- **Fast & reliable:** Headless mode, auto-waiting, and parallel execution reduce flakiness.
- **Better "auto-wait" mechanism:** Playwright automatically waits for elements to appear in the DOM, for animations to complete, and for AJAX requests to finish, making tests less prone to timing. This auto-waiting helps reduce the need for explicit waits and retries, making tests generally more stable.
- **Powerful APIs:** Network interception, visual testing, and built-in debugging tools.
- **Efficient session handling:** Multiple isolated browser contexts in a single instance.
- **Advanced selectors:** Supports CSS, XPath, role-based locators, and auto-retries.

### Page Object design pattern

- **More readable tests:** There is a clean separation between the test code and page-specific code, making the end-to-end scenarios easier to understand.
- **Reusability:** Tests are parametrized so you can use different test data in the future and won’t need to write a new method from scratch. Also you can reuse this methods for new end-to-end workflows, avoiding code duplication.
- **Ease of maintenance:** The tests use the methods of any page object class whenever they need to interact with the UI of that page. The benefit is that if the UI changes for the page, the tests themselves don’t need to change, only the code within the page object needs to change. Therefore, all changes to support that new UI are located just in one place.

## Prerequisites

To use this project, ensure you have the following installed:

- **Node.js** (v18.x or above)
- **npm** (v10.x or above)  
- **Playwright** (v1.50.x or above)

## Installation

To set up this framework locally, clone the repository and install dependencies:

```bash
git clone https://github.com/peter-rr/sqli-technical-test.git
cd sqli-technical-test
npm install
```

## Project structure

```bash
|-- sqli-technical-test/
    |-- tests/                      # Test files organized by feature
    |-- page-objects/               # Contains class files for every page object
        |-- googleHomepage.ts
        |-- googleResultspage.ts
        |-- wikipediaResultpage.ts
    |-- utils/
        |-- api.ts                  # Helper functions for some API operations
        |-- PetManager.ts           # Class to define some methods for Pet Store's API
        |-- user.ts                 # Test data for reusable cases (JSON format)
|-- playwright.config.js            # Playwright configuration file
|-- package.json                    # Project dependencies and scripts
|-- README.md                       # Project documentation
```

## Usage

The package exposes two different test files located in `tests/` folder:

- `testsForWebAutomation.spec.ts`: contains the web automation tests to verify the scenario described in Exercise 1. See code: [tests/testsForWebAutomation.spec.ts](tests/testsForWebAutomation.spec.ts)

- `testsForAPIAutomation.spec.ts`: contains the API automation tests to verify the scenario described in Exercise 2. See code: [tests/testsForAPIAutomation.spec.ts](tests/testsForAPIAutomation.spec.ts)

If you want to go deeper into the interactions with web elements and the methods belonging to any page object, you'll find all the code related under `page-objects/` folder, where all the different page objects are located. Regarding API testing, you can find helper functions, classes and test data under `utils/` folder.

## Running tests

### Running All Tests

To execute all tests in the project:

```bash
npx playwright test
```

To run the tests in a specific browser (e.g., Chrome):

```bash
npx playwright test —project=chrome
```

By default, we will launch the browser selected in headless mode during `playwright test`. To run Chrome headed, you can pass the `--headed` argument to `playwright test`.

### Running Tests in Interactive Mode

Launch Playwright in interactive mode for local testing and debugging:

```bash
npx playwright test —ui
```

## Best practices

### Readability and Modularization

Keep test logic clean by separating data.

### Reusability

Make user creation reusable for other tests.

### Ease of maintainance

Use dynamic parameters instead of hardcoded values.

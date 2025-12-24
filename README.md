# 🐺 The Wolf Among Us - Playwright Test Suite

A Playwright TypeScript testing project based on **The Wolf Among Us** game and the **Fables** comic series. This project demonstrates a test suite where **some tests pass and some tests fail intentionally**, representing different aspects of the Fables universe.

## 📖 About

In the world of Fables, fairy tale characters live secretly among us in New York City's Fabletown. This test suite explores:

- **Characters** from the Fables universe
- **Investigations** from The Wolf Among Us murder mystery
- **Magic and Glamour** systems that help Fables blend in

## 🎮 Test Results Overview

- ✅ **Characters Suite** - All tests pass (5/5)
- ⚖️ **Investigation Suite** - Mixed results (4 pass, 2 fail)
- ❌ **Magic Suite** - Mostly failing (2 pass, 5 fail)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Show test report
npm run test:report
```

## 📂 Project Structure

```
wolf-among-us-playwright-tests/
├── tests/
│   ├── characters.spec.ts      # Character tests (all passing ✅)
│   ├── investigation.spec.ts   # Investigation tests (mixed results ⚖️)
│   └── magic.spec.ts           # Magic system tests (mostly failing ❌)
├── playwright.config.ts        # Playwright configuration
├── package.json
└── README.md
```

## 🧪 Test Suites

### 1. Characters (`characters.spec.ts`)

Tests the main characters from Fabletown. All assertions pass.

- Bigby Wolf (Sheriff & Big Bad Wolf)
- Snow White (Deputy Mayor)
- Beauty and Beast
- Bufkin (Flying Monkey Librarian)
- Colin (One of the Three Little Pigs)

### 2. Investigation (`investigation.spec.ts`)

Tests related to the murder mystery investigation. Some tests intentionally fail to demonstrate incorrect assumptions.

- Crime scene evidence
- Suspect interrogations
- Location verification
- False leads and red herrings

### 3. Magic and Glamour (`magic.spec.ts`)

Tests exploring the magical aspects of Fables. Many tests fail to demonstrate common misconceptions about the magic system.

- Glamour creation and economics
- Magical protections
- The cursed ribbons
- Residence rules for Fables

## 🎯 Test Annotations

- Tests that should pass use standard `test()` syntax
- Tests that should fail use `test.fail()` annotation
- All failures are intentional and documented with comments

## 🛠️ Technologies Used

- **Playwright** - End-to-end testing framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## 📝 Notes

This is a demonstration project showing how to:

- Structure Playwright tests with TypeScript
- Use `test.fail()` for expected failures
- Organize tests by feature/theme
- Document test intentions clearly

## 🎭 About The Wolf Among Us

_The Wolf Among Us_ is a graphic adventure game by Telltale Games, based on Bill Willingham's _Fables_ comic book series. Set in 1980s New York, it follows Bigby Wolf (formerly the Big Bad Wolf) as he investigates a series of murders in the hidden community of Fabletown.

## 📄 License

ISC

---

**"Some may pass, some may fail"** - Just like the challenges faced by the Fables living among us.

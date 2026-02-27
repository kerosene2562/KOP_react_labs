# Mathematical Examples Trainer (React + Vite)

This project is a web application for practicing mathematical examples.
It was developed using React and Vite as part of the university course
"Компонентно орієнтоване програмування (КОП)".

The application generates math tasks, allows configuration of settings,
tracks user progress, and demonstrates component-oriented architecture.

------------------------------------------------------------------------

## Author

Romanets Oleksandr\
Zhytomyr Polytechnic State University\
Faculty of Information and Computer Technologies

------------------------------------------------------------------------

## Project Description

The application is designed to help users practice solving mathematical
examples. It allows users to configure game parameters, solve generated
exercises, and receive feedback about results.

The project demonstrates:

-   Component-based architecture
-   Reusable UI components
-   Separation of logic and presentation
-   Configurable forms
-   State management with React
-   Documentation generation
-   License compliance
-   GDPR-aligned cookie consent implementation

------------------------------------------------------------------------

## Main Functionality

-   Generation of mathematical examples
-   Configurable difficulty or parameters
-   User input validation
-   Result tracking
-   Game reset functionality
-   Settings form component
-   Reusable button component
-   Display of results and statistics

------------------------------------------------------------------------

## Technologies Used

-   React
-   Vite
-   JavaScript (ES6+)
-   Node.js
-   CSS
-   Storybook (for component documentation)
-   JSDoc (for technical documentation)

------------------------------------------------------------------------

## Installation and Setup

### 1. Clone repository

git clone `<repository-link>`{=html} cd `<project-folder>`{=html}

### 2. Install dependencies

npm install

### 3. Run in development mode

npm run dev

Application runs at: http://localhost:5173

### 4. Build project

npm run build

Production build is generated in the dist/ folder.

------------------------------------------------------------------------

## Project Structure (Main Directories)

src/ components/ buttons/ - Reusable button component game/ - Game logic
and settings components App.jsx main.jsx

public/ - Static assets

vite.config.js - Vite configuration

------------------------------------------------------------------------

## Storybook

Storybook is used to document and demonstrate UI components.

Run Storybook:

npm run storybook

Documented components:

1.  Button (Basic Component)
    -   Default
    -   Disabled
    -   Variant example
2.  SettingsForm (Complex Component)
    -   Default configuration
    -   Custom configuration
    -   Validation state

Props of each component are configurable via Storybook controls.

------------------------------------------------------------------------

## Technical Documentation

Technical documentation is generated using JSDoc.

To generate documentation:

npm run docs

After generation, open:

docs/index.html

Documentation includes:

-   Component descriptions
-   Function explanations
-   Props documentation
-   Core logic overview

If documentation is not hosted publicly, a demonstration video showing
local documentation usage should be provided.

------------------------------------------------------------------------

## GDPR and Cookie Consent

The project includes a cookie consent popup compliant with GDPR
principles.

Features:

-   Cookie category selection (Necessary / Analytics / Marketing)
-   Accept All / Reject Non-Essential / Customize options
-   User preferences stored in localStorage
-   Link to Privacy Policy

------------------------------------------------------------------------

## Privacy Policy / User Agreement

The repository contains a separate file:

PRIVACY_POLICY.md or EULA.md

The document explains:

-   Data processing (if any)
-   Usage of localStorage
-   User rights
-   Usage limitations
-   Educational purpose disclaimer

------------------------------------------------------------------------

## License

This project is distributed under the MIT License.

See the LICENSE file for full license text.

A third-party dependency license report is available in:

licenses-report.txt

The report was generated using a license-checking tool to ensure
open-source license compliance.

------------------------------------------------------------------------

## Educational Purpose

This project was created for academic purposes. It demonstrates
practical implementation of:

-   Component-oriented programming
-   Reusable UI architecture
-   Documentation generation
-   Open-source license management
-   GDPR considerations in frontend applications

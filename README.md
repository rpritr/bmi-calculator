# BMI Calculator

A clean, minimal Body Mass Index calculator built with HTML, CSS, and vanilla JavaScript.

## Overview

This single-page application allows users to input their height and weight in metric units and instantly calculate their Body Mass Index (BMI). The result is displayed alongside a category badge and a reference card grid that highlights the user's current BMI range.

## Features

- Metric units only (cm / kg)
- Instant BMI calculation on button click or Enter key
- Category result badge (Underweight, Normal weight, Overweight, Obese)
- Reference cards with BMI ranges — active category highlights automatically
- Input validation with inline error messaging
- Responsive two-column layout
- Google Fonts — DM Sans (UI) and DM Mono (numbers)

## Tech Stack

| Layer      | Detail                          |
|------------|---------------------------------|
| Markup     | HTML5                           |
| Styling    | CSS3 (custom properties, grid)  |
| Logic      | Vanilla JavaScript (ES6+)       |
| Fonts      | Google Fonts — DM Sans, DM Mono |

## File Structure

```
bmi-calculator/
└── index.html   # All markup, styles, and logic in a single file
```

## How It Works

1. User enters height in **cm** and weight in **kg**
2. On clicking **Calculate BMI** (or pressing Enter), the app computes:

```
BMI = weight (kg) / height (m)²
```

3. The result is categorised as follows:

| Category      | BMI Range     |
|---------------|---------------|
| Underweight   | Below 18.5    |
| Normal weight | 18.5 – 24.9   |
| Overweight    | 25.0 – 29.9   |
| Obese         | 30.0 and above|

## Getting Started

No build tools or dependencies required. Just open the file in a browser:

```bash
# Clone or download the project, then:
open index.html
```

Or drag and drop `index.html` into any modern browser.

## Browser Support

Works in all modern browsers — Chrome, Firefox, Safari, and Edge.

---

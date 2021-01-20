<h1 align="center">Aleksi CSS Framework</h3>

<p align="center">
  Aleksi CSS framework is a minimal grid-based CSS framework. 
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Layout](#layout)
  - [Containers](#containers)
  - [Grid System](#grid-system)
  - [Margin and Padding utils](#margin-and-padding-utils)
- [Content](#content)
  - [Reboot](#reboot)
- [Components](#components)
  - [Buttons](#buttons)
  - [Nav](#nav)
  - [Navbars](#navbars)
- [Utilities](#utilities)
  - [Borders](#borders)
  - [Colors](#colors)
  - [Text](#text)
  - [Sizing](#sizing)
  - [Margin and Padding](#margin-and-padding)
  - [Display](#display)

## About The Project

This project includes a CSS framework and a web page realized with it for Odin Project's <a href="https://www.theodinproject.com/lessons/design-your-own-grid-based-framework">HTML and CSS course "Design your own grid-based framework"</a>.

## Layout

Responsive containers, a 12-column grid system, and spacing utilities are available for laying out a web page.

### Containers

Containers are used to contain and center content. Use them in conjunction with the grid system. Containers are designed to be responsive with mobile-first approach. Note that containers have no padding.

- `.container`s set max-width at each breakpoint.
- `.container-fluid` is 100% wide at all breakpoints.
- `.container-{breakpoint}` is 100% wide until breakpoint, and fixed width after that.

|                    | Extra small (<576px) | Small (≥576px) | Medium (≥768px) | Large (≥992px) | Extra large (≥1200px) |
| ------------------ | -------------------- | -------------- | --------------- | -------------- | --------------------- |
| `.container`       | 100%                 | 540px          | 720px           | 960px          | 1140px                |
| `.container-sm`    | 100%                 | 540px          | 720px           | 960px          | 1140px                |
| `.container-md`    | 100%                 | 100%           | 720px           | 960px          | 1140px                |
| `.container-lg`    | 100%                 | 100%           | 100%            | 960px          | 1140px                |
| `.container-xl`    | 100%                 | 100%           | 100%            | 100%           | 1140px                |
| `.container-fluid` | 100%                 | 100%           | 100%            | 100%           | 100%                  |

### Grid System

A mobile-first, responsive 12-column grid system realized with CSS Grid Layout.

The grid system uses containers, grids and cells to create layout.

```
  <div class="container">
    <div class="grid">
      <div class="cell-4">
        1. column, 1. row
      </div>
      <div class="cell-4">
        2. column, 1. row
      </div>
      <div class="cell-4">
        3. column, 1. row
      </div>
      <div class="cell-4">
        1. column, 2. row
      </div>
      <div class="cell-4">
        2. column, 2. row
      </div>
      <div class="cell-4">
        3. column, 2. row
      </div>
    </div>
  </div>
```

The code above creates an equal-width, responsive three-column grid with cells on one row.

- Wrap the grid in `.container` class.
- A grid can have as many items as are needed.
- Use cell classes to create columns on one row. For example, to create three columns, use three `.cell-4` classes indicating that one cell takes 4 columns out of the 12 available.
- Cells have a 30 pixel gutter between them.
- To create responsive cells, combine `.cell-{breakpoint}-{columns}` classes, e.g. `.cell-3.cell-md-4`.
- To align cells, use `.align-items-start`, `.align-items-center`, and `.align-items-end` classes.
- Create empty columns with `.cell-start-{column-number}`, e.g. to start at column three, use `.cell-start-3`.

### Margin and Padding utils

## Content

### Reboot

Using normalize.css as reboot.

## Components

### Buttons

### Nav

### Navbars

## Utilities

### Borders

### Colors

### Text

### Sizing

### Margin and Padding

### Display

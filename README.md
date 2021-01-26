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
  - [Shadows](#shadows)
  - [Text](#text)
  - [Margin and Padding](#margin-and-padding)
  - [Display](#display)
  - [Flex](#flex)

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
- To create responsive cells, combine `.cell-{breakpoint}-{column}` classes, e.g. `.cell-3.cell-md-4`.
- To align cells, use `.align-items-start`, `.align-items-center`, and `.align-items-end` classes.
- Create empty columns with `.cell-start-{column-number}`, e.g. to start at column three, use `.cell-start-3`.
- For responsive columns, use `.cell-{breakpoint}-{column}` classes, e.g. `.cell-md-4`.

### Margin and Padding utils

Use margin and padding utilities for spacing. `.m-{size}` and `.p-{size}` classes are for all viewport sizes, `.m-{breakpoint}-{size}` and `.p-{breakpoint}-{size}` are responsive. Example: `.mr-md-2` sets `margin-right: .5rem;` for the medium and up breakpoint.

| Size letter | margin / padding value |
| ----------- | ---------------------- |
| 0           | 0                      |
| 1           | .25rem                 |
| 2           | .5rem                  |
| 3           | 1rem                   |
| 4           | 1.5rem                 |
| 5           | 3rem                   |
| auto        | auto                   |

## Content

### Reboot

Normalize.css normalizes the styles of most elements across browsers.

- Every element and `::before` and `::after` pseudo-elements have been set to `box-sizing: border-box` to easy sizing.

- `body` has `line-height` of 1.5 and `font-size` of 1rem. Global `Font-family` is set to native font stack for optimum text rendering on every device.

- Headings, paragraphs, and lists have had their top margins removed.

- Links have `text-decoration` removed, and `color` set to primary theme color.

## Components

### Buttons

Style buttons using custom button styles. Styles include:

- Primary `.btn .btn-primary`
- Secondary `.btn .btn-secondary`
- Dark `.btn .btn-dark`
- Light `.btn .btn-light`

### Nav

Build base nav elements with the `.nav` class.

```
<ul class="nav">
  <li>
    <a class="nav-link" href="#">
      Home
    </a>
  </li>
</ul>

```

### Navbars

The navigation header classes provide a responsive and collapsible navbar.

- wrap everything in `.navbar`
- `.navbar-expand-{breakpoint}` classes add responsive collapsing
- `.navbar-nav` for navigation menu
- `.navbar-toggler` for collapse toggling
- `.collapse.navbar-collapse` for hiding navbar contents by parent breakpoint

```
<nav class="navbar navbar-expand-sm bg-light">
  <a href="#">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
```

An example of a navbar with components, using a small breakpoint.

## Utilities

### Borders

To style components with borders, or to remove existing borders, use border classes. Additional styling builds on top of stardard border class.

Standard border using a shade of gray:

- `.border`

Contextual border colors:

- `.border-primary`
- `.border-light`
- `.border-dark`

Example use case: `<p class="border border-primary">...</p>`.

Make rounded borders:

- `.rounded`, for example `<p class="border rounded">...</p>`

Remove roundness:

- `.rounded-0`

Make a circle element (width and height equal):

- `.circle`

### Colors

Style text and components with colors to indicate semantic meaning or visual hierarchy.

Contextual text colors: `.text-{contextual}` classes indicate contextual meaning.

- `.text-primary`
- `.text-light`
- `.text-dark`

Gray text: `.text-{gray-level}` classes to use different levels of grays.

- `.text-white`
- `.text-100`
- `.text-200`
- `.text-300`
- `.text-400`
- `.text-500`
- `.text-600`
- `.text-700`
- `.text-800`
- `.text-900`
- `.text-black`

Use background colors to set components' colors.

Contextual background colors: `.bg-{contextual}` classes indicate contextual meaning.

- `.bg-primary`
- `.bg-light`
- `.bg-dark`

Gray backgrounds: `.bg-{gray-level}` classes to use different levels of grays.

- `.bg-white`
- `.bg-100`
- `.bg-200`
- `.bg-300`
- `.bg-400`
- `.bg-500`
- `.bg-600`
- `.bg-700`
- `.bg-800`
- `.bg-900`
- `.bg-black`

### Shadows

Add drop shadows to components with `.shadow`. Classes `.shadow-sm` and `.shadow-lg` add a small and large shadow, respectively.

### Text

Use text utilities to style text quickly.

Alignment classes to align text left, center, or right:

- `.text-left`
- `.text-center`
- `.text-right`

Text transforms to make uppercase or capitalized text:

- `.text-uppercase`
- `.text-capitalize`

Change font weight of text to normal or bold:

- `.font-weight-normal`
- `.font-weight-bold`

Italicize text:

- `.font-style-italic`

### Margin and Padding

Margin and padding utilities include responsive options to space content.

The classes use notation as follows: `{property}{side}-{size}` and the responsive versions: `{property}{side}-{breakpoint}-{size}`, where

- property is `m` for `margin` and `p` for `padding`
- side is one of
  - `blank` - set size for all sides
  - `b` - bottom
  - `t` - top
  - `l` - left
  - `r` - right
  - `x` - right and left
  - `y` - top and bottom
- breakpoint is one of
  - `sm` - small
  - `md` - medium
  - `lg` - large
  - `xl` - extra large
- size is one of
  - `0` - 0
  - `1` - .25rem
  - `2` - .5rem
  - `3` - 1rem
  - `4` - 1.5rem
  - `5` - 3rem
  - `auto` - auto

### Display

Toggle display value of elements with the responsive display classes.

Classes that use breakpoints apply effects to all screen sizes up from the breakpoint.

- `d-{value}` for all screen sizes
- `d-{breakpoint}-{value}` for breakpoint and up
  where `value` is one of
- `none`
- `block`
- `flex`
  and `breakpoint` one of
- `sm`
- `md`
- `lg`
- `xl`

### Flex

Make a container into a flex container with `d-flex` or the responsive `d-{breakpoint}-flex` classes.

Flex direction is controlled by `flex-row`, `flex-column`, and responsive `flex-{breakpoint}-row` and `flex-{breakpoint}-column` classes.

Aligning items on the main axis is controlled by `justify-content-{value}` and `justify-content-{breakpoint}-{value}` classes,
where `value` is one of

- `start`
- `center`
- `end`
- `between`

Aligning items on the cross axis is controlled by `align-items-{value}` and `align-items-{breakpoint}-{value}` classes, where `value` is one of

- `start`
- `center`
- `end`
- `stretch`

Choose to wrap or not wrap for the flex container with `flex-wrap`, `flex-nowrap`, `flex-{breakpoint}-wrap`, and `flex-{breakpoint}-nowrap`.

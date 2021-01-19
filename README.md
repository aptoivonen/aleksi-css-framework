<style>
  table code {
    white-space: nowrap;
  }
</style>

<h3 align="center">Aleksi CSS Framework</h3>

<p align="center">
  A minimal grid-based CSS framework and a web page realized with it for Odin Project's <a href="https://www.theodinproject.com/lessons/design-your-own-grid-based-framework">HTML and CSS course "Design your own grid-based framework"</a>.
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

## Layout

### Containers

Containers are used to contain and center content. Use them in conjunction with the grid system. Containers are fully responsive.

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

import { css } from '@emotion/css'

export default css`
/*!
 * Pico.css v1.5.2 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 *
 * Slim version example
 * You can export only the modules you need
 */
/**
 * Theme: default
 */
.pico-styles {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
}
@media (min-width: 576px) {
  .pico-styles {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  .pico-styles {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  .pico-styles {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  .pico-styles {
    --font-size: 20px;
  }
}

.pico-styles a {
  --text-decoration: none;
}
.pico-styles a.secondary, .pico-styles a.contrast {
  --text-decoration: underline;
}

.pico-styles small {
  --font-size: 0.875em;
}

.pico-styles h1, .pico-styles h2, .pico-styles h3, .pico-styles h4, .pico-styles h5, .pico-styles h6 {
  --font-weight: 700;
}

.pico-styles h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

.pico-styles h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

.pico-styles h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

.pico-styles h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

.pico-styles h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

.pico-styles [type=checkbox], .pico-styles [type=radio] {
  --border-width: 2px;
}

.pico-styles [type=checkbox][role=switch] {
  --border-width: 3px;
}

.pico-styles thead th, .pico-styles thead td, .pico-styles tfoot th, .pico-styles tfoot td {
  --border-width: 3px;
}

.pico-styles :not(thead):not(tfoot) > * > td {
  --font-size: 0.875em;
}

.pico-styles pre, .pico-styles code, .pico-styles kbd, .pico-styles samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.pico-styles kbd {
  --font-weight: bolder;
}

.pico-styles [data-theme=light], .pico-styles:not([data-theme=dark]) {
  color-scheme: light;
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0 0.125rem 1rem rgba(27, 40, 50, 0.04),
    0 0.125rem 2rem rgba(27, 40, 50, 0.08),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.024);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.8);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(198, 40, 40, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(56, 142, 60, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
}

@media only screen and (prefers-color-scheme: dark) {
  .pico-styles:not([data-theme=light]) {
    color-scheme: dark;
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(--form-element-background-color);
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: #11191f;
    --card-box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.06),
      0 0.125rem 2rem rgba(0, 0, 0, 0.12),
      0 0 0 0.0625rem rgba(0, 0, 0, 0.036);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.9);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(183, 28, 28, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(46, 125, 50, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  }
}
.pico-styles [data-theme=dark] {
  color-scheme: dark;
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: #11191f;
  --card-box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.06),
    0 0.125rem 2rem rgba(0, 0, 0, 0.12),
    0 0 0 0.0625rem rgba(0, 0, 0, 0.036);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.9);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(115, 130, 140, 0.999)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(183, 28, 28, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(162, 175, 185, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(46, 125, 50, 0.999)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
}

/**
 * Document
 * Content-box & Responsive typography
 */
.pico-styles *, .pico-styles *::before, .pico-styles *::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

.pico-styles ::before, .pico-styles ::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

.pico-styles :where(.pico-styles) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
.pico-styles main {
  display: block;
}

.pico-styles {
  width: 100%;
  margin: 0;
}
.pico-styles > header, .pico-styles > main, .pico-styles > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) 0;
}

/**
* Container
*/
.pico-styles .container, .pico-styles .container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .pico-styles .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .pico-styles .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .pico-styles .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .pico-styles .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
.pico-styles section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.pico-styles .grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .pico-styles .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.pico-styles .grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
.pico-styles figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
.pico-styles figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
.pico-styles b, .pico-styles strong {
  font-weight: bolder;
}

.pico-styles sub, .pico-styles sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

.pico-styles sub {
  bottom: -0.25em;
}

.pico-styles sup {
  top: -0.5em;
}

.pico-styles address, .pico-styles blockquote, .pico-styles dl, .pico-styles figure, .pico-styles form, .pico-styles ol, .pico-styles p, .pico-styles pre, .pico-styles table, .pico-styles ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

.pico-styles a, .pico-styles [role=link] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
}
.pico-styles a:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles [role=link]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
.pico-styles a:focus, .pico-styles [role=link]:focus {
  --background-color: var(--primary-focus);
}
.pico-styles a.secondary, .pico-styles [role=link].secondary {
  --color: var(--secondary);
}
.pico-styles a.secondary:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles [role=link].secondary:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--secondary-hover);
}
.pico-styles a.secondary:focus, .pico-styles [role=link].secondary:focus {
  --background-color: var(--secondary-focus);
}
.pico-styles a.contrast, .pico-styles [role=link].contrast {
  --color: var(--contrast);
}
.pico-styles a.contrast:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles [role=link].contrast:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--contrast-hover);
}
.pico-styles a.contrast:focus, .pico-styles [role=link].contrast:focus {
  --background-color: var(--contrast-focus);
}

.pico-styles h1, .pico-styles h2, .pico-styles h3, .pico-styles h4, .pico-styles h5, .pico-styles h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

.pico-styles h1 {
  --color: var(--h1-color);
}

.pico-styles h2 {
  --color: var(--h2-color);
}

.pico-styles h3 {
  --color: var(--h3-color);
}

.pico-styles h4 {
  --color: var(--h4-color);
}

.pico-styles h5 {
  --color: var(--h5-color);
}

.pico-styles h6 {
  --color: var(--h6-color);
}

.pico-styles :where(address, .pico-styles blockquote, .pico-styles dl, .pico-styles figure, .pico-styles form, .pico-styles ol, .pico-styles p, .pico-styles pre, .pico-styles table, .pico-styles ul) ~ :is(h1, .pico-styles h2, .pico-styles h3, .pico-styles h4, .pico-styles h5, .pico-styles h6) {
  margin-top: var(--typography-spacing-vertical);
}

.pico-styles hgroup, .pico-styles .headings {
  margin-bottom: var(--typography-spacing-vertical);
}
.pico-styles hgroup > *, .pico-styles .headings > * {
  margin-bottom: 0;
}
.pico-styles hgroup > *:last-child, .pico-styles .headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

.pico-styles p {
  margin-bottom: var(--typography-spacing-vertical);
}

.pico-styles small {
  font-size: var(--font-size);
}

.pico-styles :where(dl, .pico-styles ol, .pico-styles ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
.pico-styles :where(dl, .pico-styles ol, .pico-styles ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

.pico-styles :where(dl, .pico-styles ol, .pico-styles ul) :is(dl, .pico-styles ol, .pico-styles ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

.pico-styles ul li {
  list-style: square;
}

.pico-styles mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

.pico-styles blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
.pico-styles blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

.pico-styles abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

.pico-styles ins {
  color: var(--ins-color);
  text-decoration: none;
}

.pico-styles del {
  color: var(--del-color);
}

.pico-styles ::-moz-selection {
  background-color: var(--primary-focus);
}

.pico-styles ::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
.pico-styles :where(audio, .pico-styles canvas, .pico-styles iframe, .pico-styles img, .pico-styles svg, .pico-styles video) {
  vertical-align: middle;
}

.pico-styles audio, .pico-styles video {
  display: inline-block;
}

.pico-styles audio:not([controls]) {
  display: none;
  height: 0;
}

.pico-styles :where(iframe) {
  border-style: none;
}

.pico-styles img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

.pico-styles :where(svg:not([fill])) {
  fill: currentColor;
}

.pico-styles svg:not(.pico-styles) {
  overflow: hidden;
}

/**
 * Button
 */
.pico-styles button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

.pico-styles button, .pico-styles [type=button], .pico-styles [type=reset], .pico-styles [type=submit] {
  -webkit-appearance: button;
}

.pico-styles button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

.pico-styles [role=button] {
  display: inline-block;
  text-decoration: none;
}

.pico-styles button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles input[type=reset], .pico-styles [role=button] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
}
.pico-styles button:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=submit]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=button]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=reset]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles [role=button]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
.pico-styles button:focus, .pico-styles input[type=submit]:focus, .pico-styles input[type=button]:focus, .pico-styles input[type=reset]:focus, .pico-styles [role=button]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).secondary, .pico-styles input[type=reset] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).secondary:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=reset]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).secondary:focus, .pico-styles input[type=reset]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).contrast:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline, .pico-styles input[type=reset].outline {
  --background-color: transparent;
  --color: var(--primary);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=reset].outline:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline.secondary, .pico-styles input[type=reset].outline {
  --color: var(--secondary);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline.secondary:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles input[type=reset].outline:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--secondary-hover);
}

.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline.contrast {
  --color: var(--contrast);
}
.pico-styles :is(button, .pico-styles input[type=submit], .pico-styles input[type=button], .pico-styles [role=button]).outline.contrast:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--contrast-hover);
}

.pico-styles :where(button, .pico-styles [type=submit], .pico-styles [type=button], .pico-styles [type=reset], .pico-styles [role=button])[disabled], .pico-styles :where(fieldset[disabled]) :is(button, .pico-styles [type=submit], .pico-styles [type=button], .pico-styles [type=reset], .pico-styles [role=button]), .pico-styles a[role=button]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
.pico-styles input, .pico-styles optgroup, .pico-styles select, .pico-styles textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

.pico-styles input {
  overflow: visible;
}

.pico-styles select {
  text-transform: none;
}

.pico-styles legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

.pico-styles textarea {
  overflow: auto;
}

.pico-styles [type=checkbox], .pico-styles [type=radio] {
  padding: 0;
}

.pico-styles ::-webkit-inner-spin-button, .pico-styles ::-webkit-outer-spin-button {
  height: auto;
}

.pico-styles [type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

.pico-styles [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

.pico-styles ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

.pico-styles ::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

.pico-styles :-moz-focusring {
  outline: none;
}

.pico-styles :-moz-ui-invalid {
  box-shadow: none;
}

.pico-styles ::-ms-expand {
  display: none;
}

.pico-styles [type=file], .pico-styles [type=range] {
  padding: 0;
  border-width: 0;
}

.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]) {
  height: calc(1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 + var(--border-width) * 2);
}

.pico-styles fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

.pico-styles label, .pico-styles fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

.pico-styles input:not([type=checkbox]):not([type=radio]), .pico-styles select, .pico-styles textarea {
  width: 100%;
}

.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), .pico-styles select, .pico-styles textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  vertical-align: middle;
}

.pico-styles input, .pico-styles select, .pico-styles textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
}

.pico-styles input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([readonly]):is(:active, .pico-styles :focus), .pico-styles :where(select, .pico-styles textarea):is(:active, .pico-styles :focus) {
  --background-color: var(--form-element-active-background-color);
}

.pico-styles input:not([type=submit]):not([type=button]):not([type=reset]):not([role=switch]):not([readonly]):is(:active, .pico-styles :focus), .pico-styles :where(select, .pico-styles textarea):is(:active, .pico-styles :focus) {
  --border-color: var(--form-element-active-border-color);
}

.pico-styles input:not([type=submit]):not([type=button]):not([type=reset]):not([type=range]):not([type=file]):not([readonly]):focus, .pico-styles select:focus, .pico-styles textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

.pico-styles input:not([type=submit]):not([type=button]):not([type=reset])[disabled], .pico-styles select[disabled], .pico-styles textarea[disabled], .pico-styles :where(fieldset[disabled]) :is(input:not([type=submit]):not([type=button]):not([type=reset]), .pico-styles select, .pico-styles textarea) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

.pico-styles :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid] {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid=false] {
  background-image: var(--icon-valid);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid=true] {
  background-image: var(--icon-invalid);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=false] {
  --border-color: var(--form-element-valid-border-color);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=false]:is(:active, .pico-styles :focus) {
  --border-color: var(--form-element-valid-active-border-color);
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=true] {
  --border-color: var(--form-element-invalid-border-color);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=true]:is(:active, .pico-styles :focus) {
  --border-color: var(--form-element-invalid-active-border-color);
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-invalid-focus-color);
}

.pico-styles [dir=rtl] :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid], .pico-styles [dir=rtl] :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid=true], .pico-styles [dir=rtl] :where(input, .pico-styles select, .pico-styles textarea):not([type=checkbox]):not([type=radio])[aria-invalid=false] {
  background-position: center left 0.75rem;
}

.pico-styles input::placeholder, .pico-styles input::-webkit-input-placeholder, .pico-styles textarea::placeholder, .pico-styles textarea::-webkit-input-placeholder, .pico-styles select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

.pico-styles input:not([type=checkbox]):not([type=radio]), .pico-styles select, .pico-styles textarea {
  margin-bottom: var(--spacing);
}

.pico-styles select::-ms-expand {
  border: 0;
  background-color: transparent;
}
.pico-styles select:not([multiple]):not([size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

.pico-styles [dir=rtl] select:not([multiple]):not([size]) {
  background-position: center left 0.75rem;
}

.pico-styles :where(input, .pico-styles select, .pico-styles textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

.pico-styles label > :where(input, .pico-styles select, .pico-styles textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Table
 */
.pico-styles :where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

.pico-styles th, .pico-styles td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

.pico-styles tfoot th, .pico-styles tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

.pico-styles table[role=grid] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Accessibility & User interaction
 */
.pico-styles [aria-controls] {
  cursor: pointer;
}

.pico-styles [aria-disabled=true], .pico-styles [disabled] {
  cursor: not-allowed;
}

.pico-styles [aria-hidden=false][hidden] {
  display: initial;
}

.pico-styles [aria-hidden=false][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

.pico-styles a, .pico-styles area, .pico-styles button, .pico-styles input, .pico-styles label, .pico-styles select, .pico-styles summary, .pico-styles textarea, .pico-styles [tabindex] {
  -ms-touch-action: manipulation;
}

.pico-styles [dir=rtl] {
  direction: rtl;
}
`
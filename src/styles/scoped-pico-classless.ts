import { css } from '@emotion/css'

export default css`
@charset "UTF-8";
/*!
 * Pico.css v1.5.2 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
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

@media (min-width: 576px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer, .pico-styles section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer, .pico-styles section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer, .pico-styles section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer, .pico-styles section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  .pico-styles article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  .pico-styles article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  .pico-styles article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  .pico-styles article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

.pico-styles dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  .pico-styles dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  .pico-styles dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

.pico-styles a {
  --text-decoration: none;
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
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .pico-styles > header, .pico-styles > main, .pico-styles > footer {
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
  transition: background-color var(--transition), color var(--transition), box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition), -webkit-text-decoration var(--transition);
}
.pico-styles a:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus), .pico-styles [role=link]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
.pico-styles a:focus, .pico-styles [role=link]:focus {
  --background-color: var(--primary-focus);
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

.pico-styles hgroup {
  margin-bottom: var(--typography-spacing-vertical);
}
.pico-styles hgroup > * {
  margin-bottom: 0;
}
.pico-styles hgroup > *:last-child {
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
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
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

.pico-styles input[type=reset] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
.pico-styles input[type=reset]:is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
.pico-styles input[type=reset]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
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
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
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
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem) !important;
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem) !important;
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
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=true] {
  --border-color: var(--form-element-invalid-border-color);
}
.pico-styles :where(input, .pico-styles select, .pico-styles textarea)[aria-invalid=true]:is(:active, .pico-styles :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-invalid-focus-color) !important;
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
 * Form elements
 * Checkboxes & Radios
 */
.pico-styles [type=checkbox], .pico-styles [type=radio] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
.pico-styles [type=checkbox]::-ms-check, .pico-styles [type=radio]::-ms-check {
  display: none;
}
.pico-styles [type=checkbox]:checked, .pico-styles [type=checkbox]:checked:active, .pico-styles [type=checkbox]:checked:focus, .pico-styles [type=radio]:checked, .pico-styles [type=radio]:checked:active, .pico-styles [type=radio]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
.pico-styles [type=checkbox] ~ label, .pico-styles [type=radio] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

.pico-styles [type=checkbox]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

.pico-styles [type=radio] {
  border-radius: 50%;
}
.pico-styles [type=radio]:checked, .pico-styles [type=radio]:checked:active, .pico-styles [type=radio]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

.pico-styles [type=checkbox][role=switch] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
.pico-styles [type=checkbox][role=switch]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
.pico-styles [type=checkbox][role=switch]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
.pico-styles [type=checkbox][role=switch]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
.pico-styles [type=checkbox][role=switch]:checked {
  background-image: none;
}
.pico-styles [type=checkbox][role=switch]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

.pico-styles [type=checkbox][aria-invalid=false], .pico-styles [type=checkbox]:checked[aria-invalid=false], .pico-styles [type=radio][aria-invalid=false], .pico-styles [type=radio]:checked[aria-invalid=false], .pico-styles [type=checkbox][role=switch][aria-invalid=false], .pico-styles [type=checkbox][role=switch]:checked[aria-invalid=false] {
  --border-color: var(--form-element-valid-border-color);
}
.pico-styles [type=checkbox][aria-invalid=true], .pico-styles [type=checkbox]:checked[aria-invalid=true], .pico-styles [type=radio][aria-invalid=true], .pico-styles [type=radio]:checked[aria-invalid=true], .pico-styles [type=checkbox][role=switch][aria-invalid=true], .pico-styles [type=checkbox][role=switch]:checked[aria-invalid=true] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
.pico-styles [type=color]::-webkit-color-swatch-wrapper {
  padding: 0;
}
.pico-styles [type=color]::-moz-focus-inner {
  padding: 0;
}
.pico-styles [type=color]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
.pico-styles [type=color]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=date], .pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=datetime-local], .pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=month], .pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=time], .pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=week] {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=time] {
  background-image: var(--icon-time);
}

.pico-styles [type=date]::-webkit-calendar-picker-indicator, .pico-styles [type=datetime-local]::-webkit-calendar-picker-indicator, .pico-styles [type=month]::-webkit-calendar-picker-indicator, .pico-styles [type=time]::-webkit-calendar-picker-indicator, .pico-styles [type=week]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

.pico-styles [dir=rtl] :is([type=date], .pico-styles [type=datetime-local], .pico-styles [type=month], .pico-styles [type=time], .pico-styles [type=week]) {
  text-align: right;
}

.pico-styles [type=file] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
.pico-styles [type=file]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
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
  -webkit-transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=file]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
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
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=file]::-webkit-file-upload-button:is(:hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
.pico-styles [type=file]::file-selector-button:is(:hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
.pico-styles [type=file]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
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
  -webkit-transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=file]::-webkit-file-upload-button:is(:hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
.pico-styles [type=file]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) calc(var(--form-element-spacing-horizontal) * 0.5);
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
  -ms-transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=file]::-ms-browse:is(:hover, .pico-styles :active, .pico-styles :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

.pico-styles [type=range] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
.pico-styles [type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=range]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=range]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
.pico-styles [type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition), transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
.pico-styles [type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition), transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
.pico-styles [type=range]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition), transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
.pico-styles [type=range]:hover, .pico-styles [type=range]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
.pico-styles [type=range]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
.pico-styles [type=range]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
.pico-styles [type=range]:active::-moz-range-thumb {
  transform: scale(1.25);
}
.pico-styles [type=range]:active::-ms-thumb {
  transform: scale(1.25);
}

.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search][aria-invalid] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem) !important;
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search][aria-invalid=false] {
  background-image: var(--icon-search), var(--icon-valid);
}
.pico-styles input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search][aria-invalid=true] {
  background-image: var(--icon-search), var(--icon-invalid);
}

.pico-styles [type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

.pico-styles [dir=rtl] :where(input):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search] {
  background-position: center right 1.125rem;
}
.pico-styles [dir=rtl] :where(input):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file])[type=search][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
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
 * Code
 */
.pico-styles pre, .pico-styles code, .pico-styles kbd, .pico-styles samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

.pico-styles pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

.pico-styles pre, .pico-styles code, .pico-styles kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

.pico-styles code, .pico-styles kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

.pico-styles pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
.pico-styles pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

.pico-styles code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
.pico-styles code i {
  color: var(--code-property-color);
  font-style: normal;
}
.pico-styles code u {
  color: var(--code-value-color);
  text-decoration: none;
}
.pico-styles code em {
  color: var(--code-comment-color);
  font-style: normal;
}

.pico-styles kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
.pico-styles hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

.pico-styles [hidden], .pico-styles template {
  display: none !important;
}

.pico-styles canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
.pico-styles details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
.pico-styles details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
.pico-styles details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
.pico-styles details summary::-webkit-details-marker {
  display: none;
}
.pico-styles details summary::marker {
  display: none;
}
.pico-styles details summary::-moz-list-bullet {
  list-style-type: none;
}
.pico-styles details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
.pico-styles details summary:focus {
  outline: none;
}
.pico-styles details summary:focus:not([role=button]) {
  color: var(--accordion-active-summary-color);
}
.pico-styles details summary[role=button] {
  width: 100%;
  text-align: left;
}
.pico-styles details summary[role=button]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
.pico-styles details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
.pico-styles details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
.pico-styles details[open] > summary::after {
  transform: rotate(0);
}

.pico-styles [dir=rtl] details summary {
  text-align: right;
}
.pico-styles [dir=rtl] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
.pico-styles article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
.pico-styles article > header, .pico-styles article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
.pico-styles article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
}
.pico-styles article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
}

/**
 * Modal (<dialog>)
 */
.pico-styles {
  --scrollbar-width: 0px;
}

.pico-styles dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
.pico-styles dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  .pico-styles dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  .pico-styles dialog article {
    max-width: 700px;
  }
}
.pico-styles dialog article > header, .pico-styles dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5) var(--block-spacing-horizontal);
}
.pico-styles dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
.pico-styles dialog article > footer {
  text-align: right;
}
.pico-styles dialog article > footer [role=button] {
  margin-bottom: 0;
}
.pico-styles dialog article > footer [role=button]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
.pico-styles dialog article p:last-of-type {
  margin: 0;
}
.pico-styles dialog:not([open]), .pico-styles dialog[open=false] {
  display: none;
}

/**
 * Nav
 */
.pico-styles :where(nav li)::before {
  float: left;
  content: "???";
}

.pico-styles nav, .pico-styles nav ul {
  display: flex;
}

.pico-styles nav {
  justify-content: space-between;
}
.pico-styles nav ol, .pico-styles nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
.pico-styles nav ol:first-of-type, .pico-styles nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
.pico-styles nav ol:last-of-type, .pico-styles nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
.pico-styles nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical) var(--nav-element-spacing-horizontal);
}
.pico-styles nav li > * {
  --spacing: 0;
}
.pico-styles nav :where(a, .pico-styles [role=link]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1) calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
.pico-styles nav :where(a, .pico-styles [role=link]):is([aria-current], .pico-styles :hover, .pico-styles :active, .pico-styles :focus) {
  text-decoration: none;
}
.pico-styles nav [role=button] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

.pico-styles aside nav, .pico-styles aside ol, .pico-styles aside ul, .pico-styles aside li {
  display: block;
}
.pico-styles aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5) var(--nav-element-spacing-horizontal);
}
.pico-styles aside li a {
  display: block;
}
.pico-styles aside li [role=button] {
  margin: inherit;
}

/**
 * Progress
 */
.pico-styles progress {
  display: inline-block;
  vertical-align: baseline;
}

.pico-styles progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
.pico-styles progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
.pico-styles progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
.pico-styles progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  .pico-styles progress:indeterminate {
    background: var(--progress-background-color) linear-gradient(to right, var(--progress-color) 30%, var(--progress-background-color) 30%) top left/150% 150% no-repeat;
    -webkit-animation: progressIndeterminate 1s linear infinite;
    animation: progressIndeterminate 1s linear infinite;
  }
  .pico-styles progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  .pico-styles progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .pico-styles [dir=rtl] progress:indeterminate {
    animation-direction: reverse;
  }
}

@-webkit-keyframes progressIndeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes progressIndeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
.pico-styles details[role=list], .pico-styles li[role=list] {
  position: relative;
}

.pico-styles details[role=list] summary + ul, .pico-styles li[role=list] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
.pico-styles details[role=list] summary + ul li, .pico-styles li[role=list] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5) var(--form-element-spacing-horizontal);
  list-style: none;
}
.pico-styles details[role=list] summary + ul li:first-of-type, .pico-styles li[role=list] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
.pico-styles details[role=list] summary + ul li:last-of-type, .pico-styles li[role=list] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
.pico-styles details[role=list] summary + ul li a, .pico-styles li[role=list] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5) calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
.pico-styles details[role=list] summary + ul li a:hover, .pico-styles li[role=list] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

.pico-styles details[role=list] summary::after, .pico-styles li[role=list] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

.pico-styles details[role=list] {
  padding: 0;
  border-bottom: none;
}
.pico-styles details[role=list] summary {
  margin-bottom: 0;
}
.pico-styles details[role=list] summary:not([role]) {
  height: calc(1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 + var(--border-width) * 2);
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.pico-styles details[role=list] summary:not([role]):active, .pico-styles details[role=list] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
.pico-styles details[role=list] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
.pico-styles details[role=list][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.pico-styles details[role=list][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

.pico-styles nav details[role=list] summary, .pico-styles nav li[role=list] a {
  display: flex;
  direction: ltr;
}

.pico-styles nav details[role=list] summary + ul, .pico-styles nav li[role=list] > ul {
  min-width: -webkit-fit-content;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
.pico-styles nav details[role=list] summary + ul li a, .pico-styles nav li[role=list] > ul li a {
  border-radius: 0;
}

.pico-styles nav details[role=list] summary, .pico-styles nav details[role=list] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
.pico-styles nav details[role=list][open] summary {
  border-radius: var(--border-radius);
}
.pico-styles nav details[role=list] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
.pico-styles nav details[role=list] summary[role=link] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
.pico-styles nav details[role=list] summary[role=link] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

.pico-styles li[role=list]:hover > ul, .pico-styles li[role=list] a:active ~ ul, .pico-styles li[role=list] a:focus ~ ul {
  display: flex;
}
.pico-styles li[role=list] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal));
  margin-inline-start: calc(var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal));
}
.pico-styles li[role=list] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
.pico-styles [aria-busy=true] {
  cursor: progress;
}

.pico-styles [aria-busy=true]:not(input):not(select):not(textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  -webkit-animation: spinner 0.75s linear infinite;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
.pico-styles [aria-busy=true]:not(input):not(select):not(textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
.pico-styles [aria-busy=true]:not(input):not(select):not(textarea):empty {
  text-align: center;
}

.pico-styles button[aria-busy=true], .pico-styles input[type=submit][aria-busy=true], .pico-styles input[type=button][aria-busy=true], .pico-styles input[type=reset][aria-busy=true], .pico-styles a[aria-busy=true] {
  pointer-events: none;
}

@-webkit-keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
.pico-styles [data-tooltip] {
  position: relative;
}
.pico-styles [data-tooltip]:not(a):not(button):not(input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
.pico-styles [data-tooltip]::before, .pico-styles [data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
.pico-styles [data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
.pico-styles [data-tooltip]:focus::before, .pico-styles [data-tooltip]:focus::after, .pico-styles [data-tooltip]:hover::before, .pico-styles [data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  .pico-styles [data-tooltip]:focus::before, .pico-styles [data-tooltip]:focus::after, .pico-styles [data-tooltip]:hover::before, .pico-styles [data-tooltip]:hover::after {
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-name: slide;
    animation-name: slide;
  }
  .pico-styles [data-tooltip]:focus::after, .pico-styles [data-tooltip]:hover::after {
    -webkit-animation-name: slideCaret;
    animation-name: slideCaret;
  }
}

@-webkit-keyframes slide {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}

@keyframes slide {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@-webkit-keyframes slideCaret {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes slideCaret {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
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

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  .pico-styles *:not([aria-busy=true]), .pico-styles :not([aria-busy=true])::before, .pico-styles :not([aria-busy=true])::after {
    background-attachment: initial !important;
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-animation-delay: -1ms !important;
    animation-delay: -1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`
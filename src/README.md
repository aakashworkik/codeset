# Process

1. Estimate over your time

- if you take longer please just tell me in advance

2. before you hand over:

- double check with the designs (mobile/desktop) (focus/hover)
- logic test
- ping me

## Code Style guide

https://followjack.notion.site/Frontend-Style-Guide-d575012efbda4026930b3a4de8d99bfb

## Designs

https://www.figma.com/file/YlbOOK47cV7lxBPmbbLhoz/test?node-id=0%3A1

# Frontend

As frontend developers we want to write useful and reusable components in order to serve the best user experience for travel customers.

### Renderer

In order to get maximum flexbility when creating reusable components and adjust to the themes need the concept of renderers is used in here.

### Style Guide

Code structure should follow the best practices of [Airbnb react style guide](https://github.com/airbnb/javascript/tree/master/react).

## Design system

When developing components keep in mind:
[Mobile First](https://www.browserstack.com/guide/how-to-implement-mobile-first-design)

### Device support

We try to support smallest possible devices like iPhone 5 with a width of 320px.
Please orient yourself with the given designs for your theme.

The orientation for the device breakpoints you'll find at `assets/wikinger/scss/_breakpoints.scss`.

### Browser support

We do not support internet explorer.
Minimum support for the most popular browser (chrome, firefox, safari, edge).
Therefore we use flexbox model. No Grid model (missing support yet).

For verification you can use [caniuse](https://caniuse.com/)

### Styling

#### Preprocessor SCSS

We use scss as preprocessor.

For our core components you'll find the scss files under `assets/scss`.
There you also find the variables used everywhere `assets/scss/variables.scss`. Please reuse them.

#### Class naming convention BEM

The naming convention for css classes are according to [BEM](http://getbem.com/). Please stick to the naming to have specific and unique classes to avoid ugly side effects of css overrides. They are hard to debug.

#### Icons

For icons we use [iconmoon](https://icomoon.io/) to generate our icons (no login required) from SVGs. In there we use a json file (ask Nils for the file) to import /export the icons.

We store icons then in the theme e.g. for wikinger under `assets/wikinger/webfonts/icomoon.svg` (here you find the list of all available icons) and their css in `assets/wikinger/scss/_icons.scss`.

In order to use an icon place

```
<i className="thin-0023_calendar_month_day_planner_events" />
```

For adding new icons you:

1. go iconmoon
2. import the json file from Nils
3. upload the new svg
4. generate fonts and download those files
5. replace fonts in `assets/wikinger/webfonts/icomoon.svg`and style in `assets/wikinger/scss/_icons.scss`

Icons are now available with their css class.

### Date/Time parsing

For date/time parsing we use [dayjs](https://day.js.org/).
For an example see `assets/js/date.js`.

## Linting and Formatter

Currently we don't have a common linting ground. Proposal would be to use [ESlint](https://eslint.org/) ion addition with AirBnB style guide.

For formatting our code we use [EditorConfig](https://editorconfig.org/). You can auto enforce it by selecting it as your standard formatter in your favorite code editor.

Label

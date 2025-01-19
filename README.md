# Hello Chris

My personal website.

## Color palette

To keep things simple, this site uses colors built into Tailwind. The three primary colors of the light mode are:

![alt](/readme_images/amber-400.svg) yellow-400

![alt](/readme_images/sky-600.svg) sky-600

![red-700](/readme_images/red-700.svg) red-700

Various shades of these colors are used throughout the site. The light mode tends warmer and the dark mode tends cooler. Illustrations use mildly desaturated versions of these colors.

## Hacks and workarounds

Of course things didn't didn't proceed with perfect smoothness in the making of this site, so this section serves as a reminder of how I mitigated issues that got in the way.

### Styling incline code blocks

Tailwind can't differentiate between inline code and blocks of code. I discovered I wasn't the only person with this problem (<https://github.com/tailwindlabs/tailwindcss-typography/issues/329>) and found a workaround that adds a new utility class (<https://github.com/tailwindlabs/tailwindcss-typography/issues/329#issuecomment-2306011145>).

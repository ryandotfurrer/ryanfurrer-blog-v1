---
title: Another Modern CSS Reset
date: '2022-01-31'
featuredImage:
  type: ImageBlock
  url: /images/another-modern-reset-cover.jpg
  altText: 'Clean white desk with laptop, mouse, and phone.'
  caption: 'Clean white desk with laptop, mouse, and phone.'
bottomSections:
  - elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Like what you've read?
    text: >-
      Subscribe to stay in the know for when I publish new articles, find
      interesting things on the web, and more!
    actions:
      - type: Button
        label: Subscribe
        url: 'https://www.getrevue.co/profile/theryanfurrer'
        style: primary
    backgroundImage:
      url: 'https://assets.stackbit.com/components/images/default/default-image.png'
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-12
          - mb-8
          - ml-4
          - mr-4
        padding:
          - p-9
        alignItems: center
        justifyContent: center
        flexDirection: col
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: NewsletterCTA
layout: PostLayout
author: content/data/team/person-p8afuy38p.json
---
![Clean white desk with laptop, mouse, and phone.](/images/another-modern-reset-cover.jpg)

What is a CSS Reset for the uninitiated, and why is it useful?

In its simplest form, a CSS Reset is a stylesheet used to remove any unwanted default styling a browser might apply to your HTML elements. Many people - myself included - choose to use CSS Resets to add their *preferred* default styling to their projects so there is some form of consistency and continuity between their projects.

While browsers have pared down their default stylings and brought them more in line with one another, a CSS Reset can still offer you a handful of benefits. We’ll dig more into those as we move along in my CSS reset, but first, let us take a look at the reset in its entirety. This can seem a bit lengthy but stick with me.

<hr>

**NOTE**

This CSS Reset is a conglomerate of cherry-picked properties for my use case from [Andy Bell's CSS Reset](https://piccalil.li/blog/a-modern-css-reset/), [Josh Commeau’s CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/), and some properties I found from [Kent C. Dodds' website](https://kentcdodds.com/).

## The Entire Reset

```
/*
  This CSS Reset is a conglomerate of Andy Bell's, Josh Commeau, and some properties I found from Kent C. Dodds' website.
*/

/*
  Andy's Custom CSS Reset
  https://piccalil.li/blog/a-modern-css-reset/
*/

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

/*
  Kent C. Dodds
  https://kentcdodds.com/
*/s

/*-----Universal Styles-----*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

/*-----Core Styles-----*/
html {
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1440px;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

main {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

footer {
  border-top: 1px solid black;
  margin-top: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
}

body > footer {
  position: sticky;
  top: 100vh;
}

/*-----Element Styles-----*/
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  line-height: 1.15;
}

small {
  font-size: 80%;
}

b,
strong {
  font-weight: bolder;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

a:is([class]) {
  text-decoration: none;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

/*-----Browser Inconsistancy Fixes-----*/
button,
input,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/*-----Media Queries-----*/
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Part 1: Universal Styles

```
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
}
```

If you only chose to include these two stylings, you would be set up for success, to be sure - this would be a perfectly acceptable simple and minimal CSS Reset. It makes sizing elements easier and removes all margin and padding on all elements by taking advantage of the universal selector, \*.

## Part 2: Default Body Styles

```
html {
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1440px;
	padding: 0 1rem;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

main {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

footer {
  margin-top: var(—size-5);
  padding-top: var(—size-8);
  border-top: var(—border-size-1) solid var(—bg-tertiary);
  padding-bottom: var(—size-5);
}

body > footer {
  position: sticky;
  top: 100vh;
}
```

This part is a bit lengthy so let’s break it down a bit further.

```
html {
  text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}
```

First, we set text-size-adjust and its accompanying browser pre-fixes to none.  When Apple released the first iPhone, and you would rotate your device when viewing a site, the text size would enlarge to make things easier to see. This made sense before responsive websites; however, it is archaic and unnecessary. That being said, Apple still makes it happen. This disables it from occurring.

Next up is html:focus-within - this enables smooth scrolling without an issue pointed out in this article on CSS-Tricks. I highly encourage you to [read and understand](https://css-tricks.com/fixing-smooth-scrolling-with-find-on-page/) why using  html { scroll-behavior: smooth;} is not currently advised.

Lastly, adding height: 100%; to our html and body tags allows us to use percentage-based heights on elements on our page. I always wondered by this did not work as you’d expect, and as [Josh explains](https://www.joshwcomeau.com/css/custom-css-reset/#digit-percentage-based-heights) “…the *height* of an element is calculated based on its *children*.”

## I don’t use vh on mobile sites because all the browsers are different and often show/hide elements based on what direction the user is scrolling; as such, using vh can cause unexpected effects.

```
body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1440px;
	padding: 0 1rem;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

main {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

footer {
  margin-top: var(—size-5);
  padding-top: var(—size-8);
  border-top: var(—border-size-1) solid var(—bg-tertiary);
  padding-bottom: var(—size-5);
}

body > footer {
  position: sticky;
  top: 100vh;
}
```

This part is a bit magical for me; we’ll break this down piece by piece again. You may see some reused styles, such as display: flex; - that is because, in my reset, I don’t like to do much nesting or truncating so that I can easily see what is happening I need to fix any issues.

```
body {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1440px;
	padding: 0 1rem;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}
```

As I work from a mobile-first approach, as I encourage most to do, I make my content into a column from a meta-level using display: flex; and flex-direction: column;. Though this is how the page is typically rendered, I’ve run into some weird things in the past and prefer to add two lines of code to ensure it looks how I expect.

Next, I add some defaults that I prefer:

*   line-height: 1.5; - a basic default recommended for better reading experiences and accessibility. This is unnecessary for large font and headings, which you’ll see get over-written later.

*   margin: 0 auto; - centers all visible content on the page. This is necessary when you take into account the following style…

*   max-width: 1440px - I find that a page width of 1440px works well for me as it limits how far people have to move their heads to see both ends of your website. As much as people enjoy massive ultra-wide displays, I don’t think having the header navigation spanning 34” is helpful, nor is it good to look at.

*   padding: 0 1rem; - this adds padding to the left and right sides of the body, which is great for mobile browsing. Otherwise, you’d have no space between the content and where the screen ends.

*   text-rendering: optimizeSpeed; - The browser emphasizes rendering speed over legibility and geometric precision when drawing text. It disables kerning and ligatures.

*   ```
    \-webkit-font-smoothing: antialiased; - I can’t explain this any better than [Josh](https://www.joshwcomeau.com/css/custom-css-reset/#digit-font-smoothing); however, know it only applies to computers running macOS.
    ```

## Part 3: Inner-Element Styles

```
/*-----Element Styles-----*/
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Enables hard wraps when no soft wrap opportunities are found */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  line-height: 1.15;
}

/* Add the correct font size in all browsers */
small {
  font-size: 80%;
}

/* Add the correct font weight in Edge and Safari */
b,
strong {
  font-weight: bolder;
}

/* Prevent 'sub' and 'sup' elements from affecting the line height in all browsers */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a:is([class]) {
  text-decoration: none;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove default styling from buttons */
button {
  background: none;
  border: none;
  cursor: pointer;
}
```

### Improving Accessibility and Improving Styling

```
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
```

This removes the list-style on any ol or ul with an attribute of role=‘list'. While this rule wouldn’t be necessary if CSS didn’t remove the semantics and a11y of lists with the list-style removed, we at least have a solution with this rule applied. You can read more about this in Scott O’Hara’s article [“Fixing” Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

### Improving Working with Images

```
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
```

This rule is rather straightforward - it makes any image element render as a block element and removes its ability to break outside of its container by settings its max-width to 100%.

### Baseline Text Styles

```
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  line-height: 1.15;
}
```

The first rule encourages the browser to break lines on words rather than insert hyphens and “…will only create a break if an entire word cannot be placed on its own line without overflowing...” - As per the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap). This - in my opinion - is a stylistic choice rather than a *must-have*.

The second rule above reduces the line-height of heading elements h1, h2, and h3. As per the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#accessibility_concerns), only the *main paragraph content* must have a line-height of 1.5. While still maintaining accessibility, headings may have a slightly smaller line-height as the larger font sizes associated with them create more white space, thus possibly leading to header lines being spread too far apart.

### Preferred Styles

```
small {
  font-size: 80%;
}

b,
strong {
  font-weight: bolder;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

a:is([class]) {
  text-decoration: none;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
```

The rules above are more so preferred styles that also do away with any browser inconsistencies. We’ll go through these quickly as they are relatively straightforward.

```
small { 
	font-size: 80%;
}
```

Sets font-size of any text inside the HTML \<small> tag to 80% of the regular size for that element. If it’s a \<p> tag with a regular size of 1rem or 16px, the \<small> size is 0.8rem, or 12.8px.

```
b, strong { 
	font-weight: bolder; 
}
```

Old Microsoft Edge (before it was Chromium-based) and Safari render the b and strong tags differently from other browsers. This rule sets a standard boldness (font-weight) to display any text wrapped in those tags.

```
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
```

Prevent sub and sup elements from affecting the line height in all browsers.

```
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a:is([class]) {
  text-decoration: none;
}
```

The first rule assigns default styles (text-decoration: underline;) to any \<a> without a class. The second rule applies text-decoration: none; to any \<a> *with* a class. This is incredibly useful in reducing the number of times you might need to repeat these rules to get the styling you’d like.

The critical thing to remember when using these rules and get the most out of them - to [keep your code DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#:~:text=%22Don't%20repeat%20yourself%22,data%20normalization%20to%20avoid%20redundancy.)) - is to *never* apply a class to an anchor tag you’d like to maintain default styling on.

```
input,
button,
textarea,
select {
  font: inherit;
}
```

This rule tells the input, button, texture, and select elements to use, or *inherit* the same font as their parent element. By default, these will use a different text which, for me, is unwanted.

```
button {
  background: none;
  border: none;
  cursor: pointer;
}
```

The above removes the default background and border of buttons and ensures the cursor becomes a 👆🏻 to suggest something will happen when you click it.

## Part 4: Fixing Browser Inconsistencies

```
/*-----Browser Inconsistancy Fixes-----*/
/* Correct the inability to style clickable types in iOS and Safari */
button,
input,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/* Remove the inner padding in Chrome and Safari on macOS */
::-webkit-search-decoration {
  -webkit-appearance: none;
}

/* Correct the cursor style of increment and decrement buttons in Safari */
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Remove the inner border and padding in Firefox */
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/* Restore the focus styles unset by the previous rule */
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
```

The CSS rules above I saw on Kent C. Dodds’ new site and thought, “If he’s got them, they are there for a reason,” and thought I’d throw them in my CSS reset. They all do something to “fix” browser styling, “correct,” or make different browsers consistent with the others. Most of these apply to Safari on iOS and macOS, which I’d argue are the new Internet Explorer.

Read the comments in the code above to learn more about each rule.

## Part 5: Increasing Accessibility

```
/*-----Media Queries-----*/
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

The above media query is something I consider a *must-have* for all projects. It respects users that prefer reduced motion when viewing websites, mobile apps, and operating systems - basically, any piece of software.

Some people have reported experiencing bouts of motion sickness and vertigo when they see too much motion in software partially caused by [vestibular disorders](https://www.a11yproject.com/posts/understanding-vestibular-disorders/).

## Wrapping Up

Phew, that was a lot!

So there you have it, a CSS Reset that is a conglomeration of the resets of two well-known developers, [Andy Bell](https://piccalil.li/blog/a-modern-css-reset/) and [Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/), and some code from Kent C. Dodds’ [new site](https://kentcdodds.com/).

While the code snippets I used from Kent’s website are more for fixing browser inconsistencies (a lot for Safari), Josh’s CSS Reset focuses a lot on making the browser easier/better to build in, while Andy’s does the same, and then some.

It is important to note that there is no single correct way to do a CSS Reset, which is why you can see that while the two of them share similarities, they are different enough that I feel they achieve slightly different things in the end. This could, of course, be reflective of each developer’s style, or there may be additional tools such as frameworks or CSS Libraries that we do not see.

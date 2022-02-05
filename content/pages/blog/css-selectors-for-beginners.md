---
title: CSS Selectors for Beginners
date: '2022-02-21'
featuredImage:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post thumbnail image
  caption: ''
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
# CSS Selectors for Beginners

## What the hell is \*?

The **\*** is the universal selector in CSS. It can, and will, select every type of HTML element and apply whichever rules you wish to every element on the page.

Its low specificity enables us to use it as a great base layer but also makes it easy enough to overwrite it should we need to. We'll expand more on specificity in a future post, but for now, just know that the lower the specificity the easier it is to overwrite that rule. Read more bout the Universal selector at the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors).

## What is box-sizing and Why Do I Want It?

Box Sizing

```

*,
*::before,
*::after {
  box-sizing: border-box;
}

```

The box-sizing property has to do strictly with the [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model). It is how the browser calculates the size - the width and height - of an element.

\`box-sizing: border-box;\` makes the browser calculate the height of width of an element *including* the content, padding, and border. This alleviates the need to do precise - albeit simple - calculations to make your layouts work. In my opinion, this should be the default for the browsers but I don’t make the rules.

With this enabled, the height and width are calculated as *border + padding + height/width of the content*.

Long story short, if you want the width of an element to be exactly 100px, it is much easier to do so with \`box-sizing: border-box\` than the default, \`content-box. Though we like to stay away from px around here and stick to [relative units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units).

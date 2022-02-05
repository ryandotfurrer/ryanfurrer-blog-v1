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
Below is a list of all the selectors we'll be going through in this post. You can click on any of the links in the list below to jump to the section of the blog on that specific selector.

## Table of Content
* Universal Selector
* Type Selector
* Class Selector
* ID Selector

## Universal Selector

The Universal Selector is represented by an asterisk, `*`. It can, and will, select every type of HTML element and apply whichever rules you wish to every element on the page.

Its low specificity enables us to use it as a great base layer but also makes it easy enough to overwrite it should we need to. We'll expand more on specificity in a future post, but for now, just know that the lower the specificity the easier it is to overwrite that rule. Read more bout the Universal selector at the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors).
---
layout: PostFeedLayout
numOfPostsPerPage: 6
postFeed:
  showDate: true
  showAuthor: false
  showExcerpt: false
  variant: variant-a
  colors: colors-f
  styles:
    self:
      width: wide
      padding:
        - pt-9
        - pl-9
        - pr-9
        - pb-9
      margin:
        - mt-0
        - ml-0
        - mb-0
        - mr-0
      borderRadius: medium
      borderColor: border-secondary
styles:
  title:
    textAlign: center
topSections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Blogging about web development one article at a time.
    subtitle: ''
    text: >
      Keep up to date with new posts via my
      [newsletter](https://ryanfurrer.beehiiv.com/) or
      [Twitter](https://twitter.com/ryandotfurrer).
    actions:
      - type: Button
        label: Newsletter
        url: 'https://ryanfurrer.substack.com'
        style: primary
        altText: Subscribe to The Ryan Furrer Newsletter
    media:
      type: ImageBlock
      url: /images/blog-header.png
      altText: Illustration depicting a newsletter
      caption: Illustration depicting a newsletter
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-8
          - ml-4
          - mr-4
        padding:
          - pt-9
          - pb-9
          - pl-9
          - pr-9
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
  - elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Another Modern CSS Reset
    subtitle: Published 1/31/22
    badge:
      label: LATEST POST
      elementId: ''
      styles:
        self:
          textAlign: left
    actions:
      - label: Read Blog
        altText: Read Blog
        url: /blog/another-modern-css-reset
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    media:
      type: ImageBlock
      url: /images/another-modern-reset-cover.jpg
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-8
          - ml-4
          - mr-4
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
bottomSections:
  - type: CtaSection
    elementId: newsletter-cta-edit
    colors: colors-f
    backgroundSize: inset
    title: Like what you've read?
    text: >
      Subscribe to stay in the know when I publish new articles, find
      interesting things on the web, and more!


      [Subscribe](https://ryanfurrer.beehiiv.com/) to The RF Newsletter and be
      notified whenever I send out a new issue.
    actions:
      - label: Subscribe
        altText: Subscribe to The RF Newsletter
        url: 'https://ryanfurrer.beehiiv.com/'
        showIcon: null
        icon: null
        iconPosition: null
        style: primary
        elementId: null
    backgroundImage: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
title: All Blog Posts
---

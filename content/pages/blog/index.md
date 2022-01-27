---
layout: PostFeedLayout
title: Blog
numOfPostsPerPage: 6
postFeed:
  showDate: true
  showAuthor: false
  showExcerpt: false
  variant: variant-a
  colors: colors-c
  styles:
    self:
      width: wide
      padding:
        - pt-9
        - pl-9
        - pr-9
        - pb-9
styles:
  title:
    textAlign: center
topSections:
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: 'A great feature, we’re proud of'
    subtitle: ''
    badge:
      label: This is the badge
      elementId: ''
      styles:
        self:
          textAlign: left
    text: >-
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    actions:
      - type: Button
        label: Sign Up
        url: /
        style: primary
    media:
      type: ImageBlock
      url: /images/hero-1.png
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
          - pt-9
          - pb-9
          - pl-9
          - pr-9
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
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Like what you've read?
    text: >
      Subscribe to stay in the know for when I publish new articles, find
      interesting things on the web, and more!
    actions:
      - type: Button
        label: Subscribe
        url: 'https://www.getrevue.co/profile/theryanfurrer'
        style: primary
        altText: Subscribe to The Ryan Furrer Newsletter
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
          - pt-9
          - pb-9
          - pl-9
          - pr-9
        alignItems: center
        justifyContent: center
        flexDirection: col
        borderRadius: medium
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
---

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
    colors: colors-a
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
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
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
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        label: Try it now
        url: /
        style: primary
      - type: Button
        label: Learn More
        showIcon: true
        icon: arrowRight
        url: /
        style: link
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
    type: CtaSection
---

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
        - mt-12
        - ml-4
        - mb-6
        - mr-4
      borderRadius: medium
      borderColor: border-secondary
styles:
  title:
    textAlign: center
topSections:
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: Blogging about web development one article at a time.
    subtitle: ''
    text: >
      Keep up to date with new posts via my
      [newsletter](https://www.getrevue.co/profile/theryanfurrer) or
      [Twitter](https://twitter.com/TheRyanFurrer).
    actions:
      - type: Button
        label: Newsletter
        url: 'https://www.getrevue.co/profile/theryanfurrer'
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
      - label: Learn more
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    media:
      type: ImageBlock
      url: /images/portfolio-cover-image-v3.svg
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
        styles:
          self:
            width: 
              - w-6/12
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
            width: 
              - w-6/12
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
---

---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-c
    title: Front-End Web Development Blogs for all
    subtitle: 'Technical articles, how-tos, devJournals, and more!'
    actions:
      - type: Button
        label: Read Blogs
        url: 'https://www.stackbit.com/blog'
        style: primary
        showIcon: false
      - label: Newsletter
        altText: View Portfolio
        url: '/#newsletter-cta'
        showIcon: false
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
    media:
      type: ImageBlock
      url: /images/home-header-image.png
      altText: Illustration depicting a blog post
      caption: Illustration depicting a blog post
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-8
          - ml-0
          - mr-0
        padding:
          - pt-9
          - pb-9
          - pr-9
          - pl-9
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
  - elementId: ''
    colors: colors-f
    title: Don't know where to start?
    badge:
      type: Badge
      label: Featured Posts
      styles:
        self:
          textAlign: left
    actions: []
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-6
          - ml-4
          - mr-4
        padding:
          - pt-9
          - pb-9
          - pl-9
          - pr-9
        justifyContent: center
        flexDirection: row
        alignItems: center
        borderRadius: medium
        boxShadow: xx-large
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
    backgroundSize: inset
    subtitle: Check out these posts
  - elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    variant: variant-a
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
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
        justifyContent: center
        borderRadius: medium
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    title: Featured
    subtitle: Featured blog posts section example
    colors: colors-f
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    type: FeaturedPostsSection
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Like what you've read?
    text: >
      Subscribe to stay in the know for when I publish new articles, find
      interesting things on the web, and more!
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-12
          - mb-6
          - ml-4
          - mr-4
        padding:
          - pt-9
          - pb-9
          - pr-9
          - pl-9
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: medium
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
    elementId: newsletter-cta
  - elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Like what you've read?
    text: >
      Subscribe to stay in the know for when I publish new articles, find
      interesting things on the web, and more!
    actions:
      - type: Button
        label: Subscribe
        url: /
        style: primary
    backgroundImage:
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
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
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

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
        label: View more blogs
        url: /blog
        style: primary
        showIcon: false
        altText: View all Blogs
      - label: Newsletter
        altText: Learn more about my newsletter
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
  - elementId: featured-posts
    showDate: true
    showAuthor: false
    showExcerpt: false
    variant: variant-a
    actions:
      - type: Button
        label: view more blogs
        altText: View All Blogs
        url: /blog
        style: primary
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
        borderRadius: medium
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    title: Don't know where to start?
    subtitle: Check out some of my favorite posts below
    colors: colors-f
    posts:
      - content/pages/blog/demo-post-1.md
      - content/pages/blog/demo-post-2.md
      - content/pages/blog/demo-post-3.md
    type: FeaturedPostsSection
  - elementId: newsletter-cta
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
---

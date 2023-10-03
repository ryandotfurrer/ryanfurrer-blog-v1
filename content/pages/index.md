---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-c
    title: The RF Blog
    subtitle: Front-End Web Development Blogs For All
    actions:
      - type: Button
        label: View more posts
        url: /blog
        style: primary
        showIcon: false
        altText: View all posts
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
      url: /images/portfolio-image-dark-theme.webp
      altText: Ryan Furrer Logo
      caption: Ryan Furrer Logo
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
        label: View more posts
        altText: View all posts
        url: /blog
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-12
          - mb-0
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
    subtitle: 'Check out some of my favorite posts below:'
    colors: colors-f
    posts:
      - content/pages/blog/designing-and-developing-my-portfolio-v3.md
      - content/pages/blog/simple-ways-to-build-your-own-blog.md
      - content/pages/blog/journey-to-my-new-career-an-introduction.md
    type: FeaturedPostsSection
  - type: CtaSection
    elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Like what you've read?
    text: >
      Subscribe to stay in the know when I publish new articles, find
      interesting things on the web, and more!


      [Subscribe](https://ryanfurrer.beehiiv.com/) to The RF Newsletter and be
      notified whenever I send out a new issue.
    actions:
      - type: Button
        label: Subscribe
        url: /
        style: primary
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
        url: 'https://ryanfurrer.beehiiv.com/'
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
          - mt-0
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
        borderColor: border-primary
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: NewsletterCTA
metaTitle: The RF Blog
metaDescription: Front-End Web Development Blogs For All
addTitleSuffix: false
socialImage: /images/blog-share-card-2x.png
metaTags: []
---

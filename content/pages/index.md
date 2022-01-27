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
      - label: View Portfolio
        altText: View Portfolio
        url: 'https://furrer-2022.netlify.app'
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
          - mb-6
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-6
          - pr-4
          - pl-4
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
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increase your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
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
        flexDirection: col
        borderRadius: medium
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
---

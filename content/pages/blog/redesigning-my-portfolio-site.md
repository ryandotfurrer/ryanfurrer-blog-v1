---
title: Redesigning My Portfolio Site
date: '2019-08-16'
featuredImage:
  type: ImageBlock
  url: /images/blog-013.webp
  altText: HTML code
  caption: HTML code
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
![](/images/blog-013-718ac5f6.webp)

### Relevent Links

If you just wish to see the old and new sites you can hit the links below:

Early in my journey, I created my initial portfolio website as my first "big" HTML & CSS project. It is very basic but not the worst looking website, in my opinion.

As I will be applying to jobs in the next 1-1.5 months, mid to late September 2019, I wanted to recreate the portfolio site that will be housing my projects.

## Why Redesign?

I wanted to redesign my site for a few reasons:

## Design Process

Upon choosing the look and feel for my site, I wanted to create the feeling of something light (in feel, not color), clean, simple, and meaningful. Everything on the page has to have purpose.

>

I also knew I wanted to include a "card" idea in it. These cards would contain the actual content of the web page.

These were the only real general ideas I set out with. Instead, I first created a skeleton of the page by creating the content with HTML. For sections where I hadn't decided upon the content, I just put placeholder text.

Next I created my banner. I knew I wanted this to take up 100% of the screen upon loading the page so I set the height of the \<header> to 100vh. You can see it below on both mobile and desktop.

### Mobile First

You may have heard of this "mobile-first" approach to building modern websites. While I personally don't like designing mobile sites, I think they're boring, I feel it's easier to go from small -> large.

It was important for the "card" design to be on both mobile and desktop, so I created a class called .content-container and applied it to every section on my page that I wanted that "card" design on - Reusable CSS is a beautiful thing.

I also knew that I did not want to use a standard mobile navigation at the top of my page. Hamburger menus are great, but they are used everywhere, even on some desktop sites. You can see below that my mobile site navigation in the header looks the same as it does on larger screens.

## Optimizations

This was my first time truly utilizing Google's Lighthouse Audits that are built right into the Dev Tools. This is an amazing and powerful tool that I highly recommend you check out if you haven't.

The audit breaks your site down on a scale of 0 - 100 in four different sections: Performance, Accessibility, Best Practices, and SEO.

I think the best thing about Lighthouse is that if you don't understand something it is telling you to do, every part of the audit has a "learn more" link!

## Things still to do

These are items that I want to complete before merging this branch with the master-branch. When that is done it will replace the current site at my domain.

## Closing Thoughts

I have thoroughly enjoyed this project and cannot wait to work on my next one. If you've waited this entire time to check out the new site, here it is!

I really appreciate you taking the time to read my article and please to reach out below in the comments or on Twitter if you have any questions, comments, constructive criticism...anything!

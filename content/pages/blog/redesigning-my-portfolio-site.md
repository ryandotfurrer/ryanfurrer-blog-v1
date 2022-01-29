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

## Redesigns Are Fun

Early in my journey, I created my initial portfolio website as my first "big" HTML & CSS project. It is very basic but not the worst looking website, in my opinion.

As I will be applying to jobs in the next 1-1.5 months, mid to late September 2019, I wanted to recreate the portfolio site that will be housing my projects.

## Why Redesign?

I wanted to redesign my site for a few reasons:

*   I have learned a lot in the last few months and wanted to apply it all in one project

*   I did not feel that the current site was worth the effort of re-factoring the code, I'd rather start from scratch

*   I have a problem with looking at the same design for an extended period of time.

*   While this is kind of a joke, I often say that I have a problem because I change my phone's home screen (Android) about once per week 😂

## Design Process

Upon choosing the look and feel for my site, I wanted to create the feeling of something light (in feel, not color), clean, simple, and meaningful. Everything on the page has to have purpose.

*I mention the color because there will be dark mode toggle on my site #DarkModeEverything*

I also knew I wanted to include a "card" idea in it. These cards would contain the actual content of the web page.

![](/images/blog-013\_01.png)

These were the only real general ideas I set out with. Instead, I first created a skeleton of the page by creating the content with HTML. For sections where I hadn't decided upon the content, I just put placeholder text.

Next I created my banner. I knew I wanted this to take up 100% of the screen upon loading the page so I set the height of the \<header> to 100vh. You can see it below on both mobile and desktop.



### Mobile First

You may have heard of this "mobile-first" approach to building modern websites. While I personally don't like designing mobile sites, I think they're boring, I feel it's easier to go from small -> large.

It was important for the "card" design to be on both mobile and desktop, so I created a class called .content-container and applied it to every section on my page that I wanted that "card" design on - Reusable CSS is a beautiful thing.

I also knew that I did not want to use a standard mobile navigation at the top of my page. Hamburger menus are great, but they are used everywhere, even on some desktop sites. You can see below that my mobile site navigation in the header looks the same as it does on larger screens.

![](/images/blog-013\_03.png)

## Optimizations

This was my first time truly utilizing Google's [Lighthouse Audits](https://developers.google.com/web/tools/lighthouse/) that are built right into the Dev Tools. This is an amazing and powerful tool that I highly recommend you check out if you haven't.

The audit breaks your site down on a scale of 0 - 100 in four different sections: Performance, Accessibility, Best Practices, and SEO.

**Performance** is how well your site performs. How fast it is to load, how optimized your images are, minifying your code, and much more.

**Accessibility** is currently a very big topic, and rightfully so. For those browsing the web who's sight is impaired, they need a way to navigate, and a lot use something called a [screen reader](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers). Lighthouse ensures your website is accessible to everyone and is one of the biggest reasons I recommend using it.

**Best Practices** is just that, ensuring that you are using the best coding practices possible. One of those that I see ignored most of the time is "*Avoids Requesting The Notification Permission On Page Load*" 😒

**SEO** is very important if you want your site to show up in search results. SEO stands for "Search Engine Optimization" and while I'm not expert at it, Google is, which means Lighthouse is.

I think the best thing about Lighthouse is that if you don't understand something it is telling you to do, every part of the audit has a "learn more" link!

![](/images/blog-013\_04.png)

## Things still to do

These are items that I want to complete before merging this branch with the master-branch. When that is done it will replace the current site at [my domain](https://ryan-furrer-v2.netlify.app/).

*   Fix Photos that are too compressed

*   Finalize font sizing

*   Add LinkedIn link to footer

*   Add favicon

*   Clean up code

*   Redundant/Unnecessary CSS

*   Make sure HTML is semantic

*   Adjust margin and padding

*   Increase margin/padding to allow for more room to breathe

*   Make sure it is all equal where it should be

*   Add dark theme to website

*   I'll be using [ezToggle](https://dev.to/ryan_furrer/simple-javascript-theme-toggle-46ea)

*   Add floating navigation when past header

## Closing Thoughts

I have thoroughly enjoyed this project and cannot wait to work on my next one. If you've waited this entire time to check out the new site, [here it is](https://ryan-furrer-v2.netlify.app/)!

I really appreciate you taking the time to read my article and please to reach out below in the comments or on [Twitter](https://twitter.com/TheRyanFurrer) if you have any questions, comments, constructive criticism...anything!

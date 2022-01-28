---
layout: PostFeedLayout
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
      margin:
        - mt-12
        - ml-4
        - mb-6
        - mr-4
      borderRadius: medium
styles:
  title:
    textAlign: center
topSections:
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: Blogging about web development one article at a time.
    subtitle: ''
    text: |
      Keep up to date with new posts via my newsletter or RSS feed.
    actions:
      - type: Button
        label: Subscribe to Newsletter
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
bottomSections: []
---

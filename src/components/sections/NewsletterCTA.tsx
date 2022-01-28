// src/components/sections/NewsletterCTA.tsx
import React from 'react'

const NewsletterCTA = ({ text }) => {
    return (

        <div id="newsletter-cta" data-sb-field-path="sections.2" className="sb-component sb-component-section sb-component-cta-section flex justify-center mt-12 mb-6 ml-4 mr-4">
            <div className="colors-f flex flex-col justify-center relative w-full max-w-screen-md pt-9 pb-9 pl-9 pr-9 border-none rounded-lg">
                <div className="relative w-full"><div className="w-full">
                    <div className="flex flex-col items-center space-y-8">
                        <div className="w-full lg:flex-grow">
                            <h2 className="text-left" data-sb-field-path=".title">Like what you've read?</h2>
                            <div className="sb-markdown sm:text-lg text-left mt-4" data-sb-field-path=".text">
                                <p>Subscribe to stay in the know for when I publish new articles, find interesting things on the web, and more!</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="overflow-x-hidden">
                                <div className="flex flex-wrap items-center -mx-2 lg:flex-nowrap justify-start" data-sb-field-path=".actions">
                                    <a 
                                        href="https://www.getrevue.co/profile/theryanfurrer/" 
                                        aria-label="Subscribe to The Ryan Furrer Newsletter" 
                                        className="sb-component sb-component-block sb-component-button mb-3 mx-2 lg:whitespace-nowrap sb-component-button-primary" data-sb-field-path=".0 .0.url#@href .0.altText#@aria-label .0.elementId#@id .0.label#span[1] .0.icon#svg[1]"><span>Subscribe</span></a></div></div></div></div></div></div></div></div>
    )
}

export default NewsletterCTA
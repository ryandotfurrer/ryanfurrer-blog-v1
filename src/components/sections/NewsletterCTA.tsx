// src/components/sections/NewsletterCTA.tsx
// import React from 'react'
// import { getDataAttrs } from '../../utils/get-data-attrs'

// const NewsletterCTA = ({ text, ...props }) => {
//     return (

//         <div {...getDataAttrs(props)} id="newsletter-cta" className="sb-component sb-component-section sb-component-cta-section flex justify-center mt-12 mb-6 ml-4 mr-4">
//             <div className="colors-f flex flex-col justify-center relative w-full max-w-screen-md pt-9 pb-9 pl-9 pr-9 border-none rounded-lg">
//                 <div className="relative w-full"><div className="w-full">
//                     <div className="flex flex-col items-center space-y-8">
//                         <div className="w-full lg:flex-grow">
//                             <h2 className="text-left" data-sb-field-path=".title">Like what you've read?</h2>
//                             <div className="sb-markdown sm:text-lg text-left mt-4" data-sb-field-path=".text">
//                                 <p>Subscribe to stay in the know for when I publish new articles, find interesting things on the web, and more!</p>
//                             </div>
//                         </div>
//                         <div className="w-full">
//                             <div className="overflow-x-hidden">
//                                 <div className="flex flex-wrap items-center -mx-2 lg:flex-nowrap justify-start" data-sb-field-path=".actions">
//                                     <a
//                                         href="https://www.getrevue.co/profile/theryanfurrer/"
//                                         aria-label="Subscribe to The Ryan Furrer Newsletter"
//                                         className="sb-component sb-component-block sb-component-button mb-3 mx-2 lg:whitespace-nowrap sb-component-button-primary"
//                                         data-sb-field-path=".0 .0.url#@href .0.altText#@aria-label .0.elementId#@id .0.label#span[1] .0.icon#svg[1]">
//                                         <span>Subscribe</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NewsletterCTA

import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../utils/get-data-attrs';
import Action from '../atoms/Action';

export default function NewsletterCTA(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const bgSize = props.backgroundSize || 'full';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    const sectionFlexDirection = sectionStyles.flexDirection || 'row';
    const sectionAlignItems = sectionStyles.alignItems || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-cta-section',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin
            )}
        >
            <div
                className={classNames(
                    colors,
                    'flex',
                    'flex-col',
                    'justify-center',
                    'relative',
                    bgSize === 'inset' ? 'w-full' : null,
                    bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                    mapMinHeightStyles(sectionHeight),
                    sectionStyles.padding || 'py-12 px-4',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                    sectionStyles.boxShadow ? mapStyles({ boxShadow: sectionStyles.boxShadow }) : null
                )}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
                }}
            >
                {props.backgroundImage && ctaBackgroundImage(props.backgroundImage)}
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        bgSize === 'full' ? 'flex' : null,
                        bgSize === 'full' ? mapStyles({ justifyContent: sectionJustifyContent }) : null
                    )}
                >
                    <div
                        className={classNames(
                            'w-full',
                            bgSize === 'full' ? mapMaxWidthStyles(sectionWidth) : null
                        )}
                    >
                        <div
                            className={classNames(
                                'flex',
                                mapFlexDirectionStyles(sectionFlexDirection),
                                mapStyles({ alignItems: sectionAlignItems }),
                                'space-y-8',
                                {
                                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row'
                                }
                            )}
                        >
                            {ctaBody(props)}
                            {ctaActions(props)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function ctaBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageStyles = image.styles?.self || {};
    const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
    return (
        <div
            className="bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity * 0.01
            }}
        />
    );
}

function ctaBody(props) {
    if (!props.title && !props.text) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className="w-full lg:flex-grow">

            <h1>Hello World</h1>
            {props.title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.text && (
                <Markdown

                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div className={classNames('w-full', styles.self?.flexDirection === 'row' ? 'lg:w-auto' : null)}>
            <div className="overflow-x-hidden">
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', 'lg:flex-nowrap', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
    }
    return null;
}

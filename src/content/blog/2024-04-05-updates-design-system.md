---
title: 'Updates on the University of St Andrews Design System'
description: 'Progress update on the next-generation design system and pattern library.'
pubDate: 'Apr 05 2024'
heroImage: '/blog-placeholder-4.jpg'
---

The University of St Andrews is undergoing a transformative journey in digital design, marked by the development of a next-generation design system and pattern library for our website.

In July of last year, I embarked on the ambitious project initiated by my predecessor three years ago: the development of a next-generation design system and new design pattern library for the University’s website. Today, I’m delighted to share a major update on our progress, which reflects the evolution of our initial vision. Throughout this journey, I’ve made some adjustments to the project, ensuring that we stay current with technology advancements and best practices.

The new design pattern library and design system are being developed collaboratively by our dedicated team of developers.

Project planning is underway, with the goal of having most newly implemented components available on Terminalfour (T4) by the end of the year. We understand the importance of transparency and collaboration, and we welcome your feedback and involvement throughout this process.

Leveraging the power of Astro.build, our new design system is poised to document components from any framework, making it future-proof for potential changes in content delivery methods.

## Something old

Reflecting on the work of our past colleagues, it’s evident that the existing digital pattern library served us well but faced challenges due to its reliance on outdated technologies such as Bootstrap and jQuery. As web technology advances, it becomes imperative for us to adapt and embrace modern methodologies to meet evolving needs.

One key aspect of our new approach is modularity. By breaking down our components into manageable modules, we can enhance page load speed and facilitate seamless integration of new features. While a complete redesign of components is not our immediate priority, we are committed to refining our designs progressively, based on rigorous user testing and feedback.

## Something new

One of the pivotal shifts in our approach involves moving away from reliance on third-party frameworks such as Bootstrap. Instead, we are crafting our own grid system and custom CSS/SCSS classes, tailored specifically to the unique identity of the University of St Andrews. This transition marks a departure from the traditional Block Element Modifier (BEM) notation in favour of a hybrid SMACSS and functional CSS style approach, enabling developers to work with clarity and efficiency.

We are currently using node-sass to compile SCSS code to CSS with plans to transition to Dart Sass in the near future.

Recognising the importance of optimisation, we are also transitioning to a more lightweight icon library, bidding farewell to Font Awesome icons (v4). This strategic move not only enhances performance but also aligns with our commitment to staying ahead of the curve in digital design.

## Something borrowed

Speaking of design systems, let’s take a moment to appreciate the remarkable implementations we’ve seen in Astro.build, such as Microsoft’s Fluent2 Design System. These exemplify the potential for creating cohesive, scalable design systems that transcend frameworks and platforms.

As our design system is a documentation page for our web components and style, we were also able to enhance the development experience of future users by integrating Algolia DocSearch with our implementation, similarly to the Microsoft Fluent 2 design system mentioned above, and countless other big brands.

## Something blue

While these projects are definitely still a work in progress, if you are curious, you can have a look at our proof of concept design system page:

St Andrews Design System

The journey towards a more dynamic and sustainable digital landscape at the University of St Andrews continues. With advancements in our digital pattern library and design system, we are paving the way for innovative and user-centric experiences.

Keep an eye out for our newsletter updates, where we’ll share regular insights and progress reports about this project. Your feedback and involvement are invaluable as we shape the future of digital experiences at the University of St Andrews.

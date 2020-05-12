This is a simple project to use a web browser as a presentation software (like powerpoint/google slides/keynote).
# DEMO
You can interact with this repository here: https://fanatiqs.github.io/presentationJS

# Why?
Why should you use something like this? If you want to have a presentation that shows off something that exists in a web environment, you can use all the normal web features in your slides. For example, if you need to access a website in your presentation, you can just implement it with an iframe. Or if you want to show off an interactive web framework, you do not need to move between your presentation and desktop since everything can be done in the presentation, the presentation is in a browser.

# How to use it
1. Create a blakn HTML document.
2. Populate the HTML `body` with some `divs` or other elements, these will be your slides.
2. Give all your slides a unique html id tag. A slide at this point would look something like this `<div id="A">this is a slide</div>`.
3. Create your presentation and tell it what id tags it should use. See `Constructor` section for more detail on how to use it.
4. Create a way of traversing through the slides. This can be done with the built in functions `createKeyListener` and `createRemote` or you can create your own. More details on how they work can be found further down at the `Key Listener`, `Remote window` and `Custom` sections.
5. Show off the slideshow and impress your friends ;)

# Moving through the slides
There are two built-in functions to achieve easily traversable slides. These are `createKeyListener` and `createRemote`.

## Constructor
First you need to create a new presentation. That is done with `new Presentation([...])`. The argument has to be an array consisting of CSS selector strings. For example, if our slides have the id `A` and `B`. The code would look something like this: `const presentation = new Presentation(['#A', '#B']);`.

## Key Listener
This one is really simple. Just supply it with two arguments, `nextCode` and `prevCode`. These are the key codes you want to use. For example, `39` and `37` are for the right and left arrow keys.

## Remote window
This one creates a small separate window that has two buttons, `next` and `back`. They move you to the next or previous slide. Since it is a separate window, it can be kept on a separate screen from the presentation.

## Custom
If you want to roll your custom traversal system, you just use the `move(n)` method where `n` would be now many slides you want to move. `1` would be the `next` slide and `-1` would be the previous one. Look at how `createKeyListener` works for more detail.

# Example
The index.html file in this repository is a simple example of what you can do. You can interact with it here:  https://fanatiqs.github.io/presentationJS 

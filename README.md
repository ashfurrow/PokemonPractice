# Pokemon Practice

When interviewing Senior+ software developers, I've often seen them struggle when programming in fresh app environments. I get it – we are so used to working day-to-day in codebases that have been set up and fine-tuned that it's hard to start from scratch. We are so used to design systems, custom abstractions, linter configurations, etc that it's paralyzing to suddenly work "without a net", so to speak.

I'm currently interviewing and I wanted to make sure I was comfortable working in a fresh project, so I started this one. Pretty soon, though, I started tweaking things the way _I_ like them. So this repository is both a way for me to practice building something from scratch and a way for me to add tooling/systems/abstractions thoughtfully, from first principles.

This project is a React Native app (in [Expo](https://expo.dev)) that uses the [PokeAPI](https://pokeapi.co). I'm not trying to win any design awards, but I'd like the project to be more than _just_ functional. It should look nice, eventually.

I'll [blog](https://ashfurrow.com) about this soon, and you can check out the [open issues](https://github.com/ashfurrow/PokemonPractice/issues) for an idea of where this is going next.

## Project Setup

You need Xcode installed to run the iOS simualator. (Or Android Studio, either should work.) Otherwise, you'll need [node](https://nodejs.org) and [yarn](https://yarnpkg.com) installed.

```sh

# clone the repo

yarn # installs dependencies
yarn ios # runs in the iOS simulator
```

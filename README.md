# Star Wars API

## How to

1- Install the dependencies

```sh
npm install
```

2- Run the project

```sh
npm run dev
```

3- Open the app

Go to http://localhost:5173

## Project structure

```sh
.
├── public          // Assets
└── src
    ├── components  // UI components
    ├── hooks       // useful hooks including React query hooks
    ├── lib         // utilities folder
    ├── pages       // All available pages
    └── services    // Services folder is where general services reside, example API, localization...etc

```

## Routes

- `/`: To search for movies.
- `/films`: To show the list of films available (minimal data).
- `/films/:filmId`: To see details about a specific film.

## Autocomplete

The Autocomplete is minimal implementation, there are a lot of stuff missing to make it production ready for example

- Caching
- Debouncing inputs
- Race conditions
- Proper API to query
- Error handling

## Error handling generally

Not much is being done to handle errors due to time limit.

## Going to production

Before going to production there are a few stuff need to be changed/added/discussed to improve the performance, here i list of several things

- Code splitting to reduce the amount of data is send to the client per request.
- Transpilation: Browsers that we need to target.
- Minification: To reduce bundle size.
- Preload/prefetch data.
- Optimize custom fonts.
- Lazy loading assets.
- Virtualization for the list of items.
- Rendering mechanism (Server side rendering, Client side rendering). Consider maybe using a framework like Next.js or Remix.

## Tools used in this project:

- React: React is a popular UI library for building UI applications, it has a large community and was part of the assignment requirements.
- Typescript: There are many good reasons for it, two biggest ones for me are Static Typing and Intellisense.
- React Query(RQ): it's an amazing tool for managing network state, it provides many useful functionality that are quite challenging to implement.
  - I have considered Redux toolkit but I think RQ is simpler and does it's job quite well and i have used RQ at scale so i'm quite familiar with it.
    React Router (RR): The routing library, not much can be said, as of now it's one of the most well known libraries out there.
- CSS Modules + PostCSS(not used in this project since it's quite small): CSS Modules for css scoping and PostCss for extra functionalities.
  - I have considered other tools like Sass and Tailwind but i have no experience with Tailwind and i believe PostCSS is way better than Sass since you have more control over what you need so much faster.
- No styled UI library used: I believe headless UI library are much better and provide more control to style the components to match your brand which is very nice.
  There are 3 libraries I always go to when i need a headless component. **Headless UI**, **Radix**, and **Aria-kit** because building some of utilities is quite challenging and takes a lot of time to build them right so i prefer to not reinvent the wheel.

# Overview

Please add a write-up of your implementation here. Please also include any instructions needed to run the application.

## Project Overview

Thanks for the opportunity to build out this code sample. The project was fun to build.
My approach was a mobile first UI using React, Tailwind for CSS, Vite and Vitest.

### Initial setup and configuration

The boilerplate project was setup in Create React App. While CRA used to be the go to method for starting new React projects, it is no longer the case.

New recommendations are to use Vite or a framework such as Next.js or Remix Run etc.

For this project I converted the boilerplate code over to use Vite.

`npm run dev` works the same hover the port is now `5173`

### Mobile first

The app is built using a mobile first approach. This translates over to the desktop view showing a very simple UI.

### Modular approach

The project is split out into smaller components. Each component is responsible for showing very specific info based on the userId. Followers, Orgs and Repos a split into their own components to make testing easier and managing each section easier.

### Tailwind

Tailwind has become a popular was to style React apps. I recenlty converted over to usng Tailwind from other forms of CSS. The utility first aspect and inline styling like approach make is easy to build and style. I added configurations for using Vite with Tailwind.

### Testing

Setup tests and mock functions using vitest.

### Maintainability

Major sections are split out to separate concerns with a components folder split up into each separate React components. There is a types folder for consolidating types in the app. There is a lib folders with a services files which handles the api calls. This will allow for easier switching of api calls in the future. e.g. switching to Octokit if needed.

### Tradeoffs

Overall I was able to get the initial spec complete. I was just under the rate limite so I did not have to get an api key and using Octokit api. I was able to make direct REST calls for each.

Future considerations would be to move this fully over to Octokit. I would also recommend using React Query for managing other types of REST calls. There is better fetching, caching and revalidation control over standard fetch calls.

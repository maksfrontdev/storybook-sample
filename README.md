### This project is a sample of code using React + Storybook

I have implemented an Autocomplete component on the top of MUI Autocomplete.
Also, a Storybook story is added for testing.
I have added very basic linting and code formatting in the project.

Technologies used:
- React
- TypeScript
- Storybook
- MUI

### Running the application

1. Install dependencies with  `npm install`
2. Run the app with `npm run start`
3. To run the storybook use command `npm run storybook`

### Components
1. `src/components/autocomplete/index.tsx` - reusable Autocomplete component, responsive, fills the full width of its parent
2. `src/components/autocomplete/autocomplete-containter.tsx` - container to set the width of autocomplete for demo purposes (used in story and in App.tsx).
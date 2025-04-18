# Netflix GPT

- Create react app
- Configured TailwindCSS
- Routing of App
- Header
- Login Form
- Signup Form
- Form Validation
- useRef hook
- firebase setup is done
- Deploying our app on production
- Create sign up user in firebase
- Implemented Sign in user API
- Setup of Redux using ReduxToolkit
    - first we created store in appStore.js
    - then we created reducer in utils -> userSlice.js
    - Imported reducer in store 
    - now provide store at the root of the app
- Implemented Signout 
- Bugfix : user profile update
- Bugfix : User will only redirect to browse if he/she is logged in 
- User profile will get update on sign-in
- Ubsubscribe to the onAuthStateChanged callback
- Hardcoded files added in constant file
- Register to TMDB to get the api keys for your app
- Get data from TMDB now playing movies list api
- Fetch movies from TMDB 
- Custom Hook for nowPlayingMovies
- Update the store with movies data
- Planning for main and secondary container
- Fetched data for trailer video.
- Update store with trailer video data.
- Embadded the youtube video and make it autoplay and mute.
- Tailwind classes to make main container it better.
- Movies list are dynamic now with 4 different options.
- GPT search feature.
- GPT search bar.
- Multi language support in GPT search page.

# Feature 
- Login/ Sign Up
    - Sign in / Sign up form
    - redirect to browse page
- Browse (after authentication) 
    - Header
    - Main movie
        - Trailer in background 
        - Title and description
        - MovieSuggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions
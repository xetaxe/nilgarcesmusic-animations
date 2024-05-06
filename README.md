# Nil Garcés music animations
Animations used in social media featuring my music

- index.html is the root entry point (in this case, purely static)
- /animations contains the different html pages with the animations, these do have code
- /public contains public assets, served directly from root
- /src contains source code, with /assets, /js and /styles folders
- /src/js contains shared js logic across animations (in /shared) and custom js logic for each animation (in /animations)
- New pages in /animations must be added to vite.config.js as new entry points

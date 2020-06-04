## Sleep application

##### Dependencies that was added to the app
- React
- Redux
- Redux Thunk


### Quick Start
Follow these steps to run the application

```
Step 1.) npm install (For installing dependencies needed for the project)
Step 2.) npm start (Runs the app in the development mode.)
Step 3.) visit http://localhost:8080 to view it in the browser.
```

Find live version at https://dreamy-mcclintock-80247e.netlify.app/

Find screenshots at [./screenshots](./screenshots)

### Folder Structure
```
Sleek
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── screenshots
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   └── 5.png
├── src
│   ├── actions
│   │   └── students.js
│   ├── components
│   │   ├── index.js
│   │   ├── studentCard
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── tags
│   │       ├── index.js
│   │       └── styles.js
│   ├── index.html
│   ├── index.js
│   ├── reducers
│   │   ├── index.js
│   │   └── students.js
│   ├── services
│   │   ├── index.js
│   │   └── students.js
│   ├── store.js
│   └── styles
│       ├── index.js
│       ├── media.js
│       └── theme.js
└── webpack.config.js
```

`# actions and reducers directory contains all actions and reducers required by redux setup.`

### About app
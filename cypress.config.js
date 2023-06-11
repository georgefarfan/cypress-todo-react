const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    projectId:'zjm5ca',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://localhost:3000/'
  },
});

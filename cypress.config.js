const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4dt7hq",
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://luma-demo.scandipwa.com/",
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
  },
});

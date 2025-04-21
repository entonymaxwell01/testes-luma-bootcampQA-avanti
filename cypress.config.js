const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4dt7hq",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://luma-demo.scandipwa.com/",
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
  },
  video: true,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const util = require("util");
            const sqlite3 = require("sqlite3").verbose();
            const cucumber = require("cypress-cucumber-preprocessor").default;
            on('task', {
                deletePost: (title) => {
                    var db = new sqlite3.Database('./instance/flaskr.sqlite');
                    db.run(
                        'DELETE FROM post WHERE title=(?)', title, function(err) {
                            if(err) {
                                console.log(err)
                            }

                        });
                    db.close();
                    return null;
                },
            });
            on('file:preprocessor', cucumber())
        },

        specPattern: "*cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature,features,*spec*.js}",
    },
})


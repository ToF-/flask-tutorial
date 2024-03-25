const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const util = require("util");
            const sqlite3 = require("sqlite3").verbose();
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
            })
        },

    },
})


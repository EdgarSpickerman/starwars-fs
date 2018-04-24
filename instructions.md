* Star Wars App
** Check Demo
*** https://starwars-express.herokuapp.com/
** Express
*** Create new NodeJS app
*** Install Express
**** https://expressjs.com/en/starter/hello-world.html
*** Install body-parser
**** https://www.npmjs.com/package/body-parser
** Persistence
*** Firebase
**** https://www.npmjs.com/package/firebase
*** JSON Seed Data
**** Obi Wan
***** {name: "Obi Wan Kenobi", role: "Jedi Knight", age: 42, forcePoints: 1350}
** Router
*** Create a Router files with these routes
**** https://expressjs.com/en/starter/basic-routing.html
*** GET "/"
**** renders "view.html"
*** GET "/add"
**** renders "add.html"
*** GET "/all"
**** renders "all.html"
*** GET "/api/characters"
**** Displays all characters
*** GET "/api/characters/:character"
**** gets `:character` passed in as a request param
**** Displays a single character, or returns false
*** POST "/api/characters"
**** Create New Characters - takes in JSON input
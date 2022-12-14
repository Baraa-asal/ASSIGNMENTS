const PersonController = require("../controllers/person.controller");

module.exports = function (app) {
  app.get("/api/people", PersonController.findAllPeople);
  app.post("/api/people", PersonController.createPerson);
};

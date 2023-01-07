const { Person } = require("../models/person.model");


module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.findAllPeople = (request, response) => {
  Person.find({})
    .then((res) => {
      response.json(res);
    })
    .catch((err) => {
      response.json({ err });
    });
};





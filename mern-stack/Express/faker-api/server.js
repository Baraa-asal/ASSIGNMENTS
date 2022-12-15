const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        },
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    res.json(createUser())
})
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
})
app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(), company: createCompany()})
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

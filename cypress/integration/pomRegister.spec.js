/// < reference types="Cypress" />

import {authLogin} from '../page_objects/authLogin';
import {authRegister} from '../page_objects/authRegister';
import {header} from '../page_objects/header';

const faker = require ("faker");

describe ("POM Register", () => {

    let userData = {
        randomFirstName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password(),

    }

    before ('visit app', () => {
        cy.visit('/');
        cy.url().should("contains", 'gallery-app');


    });

    it('register new user', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register(userData.randomFirstName, userData.randomLastName, userData.randomPassword, userData.randomNewPassword);
        //authLogin.errorMsg.should('be.visible');
    
        //cy.get('[type="checkbox"]').check();
        //cy.get('button[type="submit"]').click();
    });


});
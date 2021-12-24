/// < reference types="Cypress" />

import {authRegister} from '../page_objects/authRegister';
import {header} from '../page_objects/header';

const faker = require ("faker");

describe ("POM Register", () => {
    
    let userData = {
        randomFirstName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(10),
        randomNewPassword: faker.internet.password(10),

    }

    beforeEach('visit app', () => {
        cy.visit('/');
        cy.url().should("contains", 'gallery-app');
        
    });

    //xit('register new user', () => {
    //    header.registerBtn. click();
    //    cy.url().should('contains','/register');
        
    //    authRegister.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomNewPassword);
    
    //});
    
    xit('Register New User without First Name', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register('{selectall}{backspace}', userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomNewPassword);
        authRegister.lastName.should('have.value', '');
        header.registerBtn.should('be.visible');

    });

    xit('Register New User without Last Name', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register(userData.randomFirstName,'{selectall}{backspace}', userData.randomEmail, userData.randomPassword, userData.randomNewPassword);
        authRegister.lastName.should('have.value', '');
        header.registerBtn.should('be.visible');
    });

    xit('Register New User without Email', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register(userData.randomFirstName, userData.randomLastName,'{selectall}{backspace}', userData.randomPassword, userData.randomNewPassword);
        authRegister.email.should('have.value', '');
        header.registerBtn.should('be.visible');
    });

    xit('Register New User without Password', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail,'{selectall}{backspace}', userData.randomNewPassword);
        authRegister.password.should('have.value', '');
        header.registerBtn.should('be.visible');
    });

    xit('Register New User without Password Confirmation', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, '{selectall}{backspace}');
        authRegister.newPassword.should('have.value', '');
        header.registerBtn.should('be.visible');
    });
    it('Register without checking Terms and Conditions', () => {
        header.registerBtn. click();
        cy.url().should('contains','/register');


        authRegister.checkbox(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomNewPassword);
        header.registerBtn.should('be.visible');
        authRegister.errorAlert.should ('have.text', 'The password confirmation does not match.The terms and conditions must be accepted.');

    });

});
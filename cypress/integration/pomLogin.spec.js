/// < reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';

const faker = require ("faker");

describe ("POM login", () => {
    let validEmail = "tcvijic1@gmail.com";
    let validPass = "testiranje22";

    //let userData = {
        
    //    randomEmail: faker.internet.email(),
    //    randomPassword: faker.internet.password()

    //}

    before ('visit app', () => {
        cy.visit('/');
        cy.url().should("contains", 'gallery-app');
    });

    xit('login with invalid credentials', () => {
        header.loginBtn.click();
        authLogin.login(userData.randomEmail, userData.randomPassword);
        authLogin.loginPageHeading.should ('be.visible');

        authLogin.errorMsg.should('be.visible');
        authLogin.errorMsg.should('have.text', 'Bad Credentials');
        authLogin.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        header.loginBtn.should('exist');
        cy.url().should('contains', '/login');
    });

    it.only('login with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('login');

        header.loginBtn.click();
        cy.url().should('contains', '/login');

        authLogin.login (validEmail, validPass);
        cy.wait ('@login').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
        });
        header.loginBtn.should('not.exist');
        cy.url().should('not.contains', '/login');
    });



    it('logout', () => {
        header.logoutBtn.click();
    });
    
});

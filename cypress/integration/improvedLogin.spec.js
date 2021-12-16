/// < reference types="Cypress" />


const Locators = require ('../fixtures/Locators.json');
const faker = require ("faker");

describe("login test", () => {
    let validEmail = "tcvijic1@gmail.com";
    let validPass = "testiranje22";

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.datatype.number()

    }

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should('contains',"https://gallery-app");

        });
    
    xit("Login with invalid credentials", () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains','/login');

        cy.get(Locators.LoginPage.EmailInput).clear().type(userData.randomEmail);
        cy.get(Locators.LoginPage.PasswordInput).clear().type(userData.randomPassword);
        cy.get(Locators.LoginPage.SubmitButton).click();
        cy.url().should('contains','/login');

    });


    it('Login', () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains','/login');

        cy.get(Locators.LoginPage.EmailInput).clear().type(validEmail);
        cy.get(Locators.LoginPage.PasswordInput).clear().type(validPass);
        cy.get(Locators.LoginPage.SubmitButton).click();
        
    });

    it('Logout', () => {
        cy.wait(500);
        cy.get(Locators.LoginPage.LogoutButton).eq(3).click();

    });


});
/// < reference types="Cypress" />


const Locators = require ('../fixtures/Locators.json');
const faker = require ("faker");


describe("Register test", () => {

    let userData = {
        randomFirstName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password(),
        randomShortPassword: faker.internet.password(5)

    }

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should('eq',"https://gallery-app.vivifyideas.com/");

        });


        it('Register', () => {
            cy.get(Locators.Header.RegisterButton).click();
            cy.url().should('contains','/register');
            
            cy.get("#first-name").type(userData.randomFirstName);
            cy.get("#last-name").type(userData.randomLastName);
            cy.get("#email").type(userData.randomEmail);
            cy.get("#password").type(userData.randomPassword);
            cy.get("#password-confirmation").type(userData.randomPassword);
            cy.get('[type="checkbox"]').check();
            cy.get('button[type="submit"]').click();
    
        });

    });

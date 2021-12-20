/// < reference types="Cypress" />
import {authLogin} from '../page_objects/authLogin';
import {pageCreate} from '../page_objects/page_create';
import {header} from '../page_objects/header';

const faker = require ("faker");

describe ("POM Create", () => {
    let validEmail = "tcvijic1@gmail.com";
    let validPass = "testiranje22";

    let userData = {
        
        title:faker.lorem.words(8),
        description: faker.lorem.sentence(6),
        img:faker.image.avatar()
    }

    beforeEach ('visit app and login', () => {
        cy.visit('/');
        cy.url().should("contains", "https://gallery-app.vivifyideas.com/");
        header.loginBtn.click();
        cy.url().should('contains','/login');

        authLogin.login(validEmail, validPass);
        cy.wait (10000);
        cy.url().should('not.contains','/login');
    });

    //it('login with valid credentials', () => {
    //    header.loginBtn.click();
    //    cy.url().should('contains','/login');

    //    authLogin.login(validEmail, validPass);
    //    cy.wait (10000);
    //    cy.url().should('not.contains','/login');
    //});

    it('Create new Gallery', () => {
        header.createBtn.click();
        cy.url().should('contains','/create');

        pageCreate.create (userData.title, userData.description, userData.img)
        
        header.subBtn.click();
        cy.url().should('not.contains','/create');
    });

});

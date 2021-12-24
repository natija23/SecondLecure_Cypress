//<reference type='Cypress'/> 

import {authLogin} from '../page_objects/authLogin';
import {header} from '../page_objects/header';
import {allGal}from '../page_objects/authAll';

//const faker = require ("faker");

describe ("POM All Galleries", () => {
    let validEmail = "tcvijic1@gmail.com";
    let validPass = "testiranje22";

    beforeEach ('visit app and login', () => {
        cy.visit('/');
        cy.url().should("contains", "https://gallery-app.vivifyideas.com/");
        header.loginBtn.click();
        cy.url().should('contains','/login');

        authLogin.login(validEmail, validPass);
        cy.wait (5000);
        cy.url().should('not.contains','/login');
    });

    it('Check Search Input', () => {
        cy.url().should("contains", 'gallery-app');
        allGal.search ();
        allGal.filterBtn.click();
    });

    it('Check gallery by Heading', () => {
        cy.url().should("contains", 'gallery-app');
        allGal.getGalAuthor("Tijana Cvijic");
        allGal.loadMore.click();
        allGal.getGalleryHeading("12");
    });


   
});

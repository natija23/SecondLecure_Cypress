

import {authLogin} from '../page_objects/authLogin';
import {header} from '../page_objects/header';
import {allGal}from '../page_objects/authAll';

//const faker = require ("faker");

describe("All Galleries page test", () => {
    

    before('login via backend', () => {
        //cy.loginViaBackend();

        //---drugi---nacin------cy.loginViaBackend ('tcvijic1@gmail.com', 'testiranje22');

        //---prvi---nacin--------cy.request ('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
        //-----------------------    email: 'tcvijic1@gmail.com',
        //-----------------------    password:'testiranje22'
        //-----------------------}).its('body').then((response) => {
        //-----------------------    window.localStorage.setItem('token', response.access_token);
        //-----------------------});
        ///ZAKOMENTARISANO JE DUZA VERZIJA LOGOVANJA
    });

        xit('assert login',() => {
            cy.visit ('/');
            header.loginBtn.should('not.exist');
        });
       
    });
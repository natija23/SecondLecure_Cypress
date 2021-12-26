/// < reference types="Cypress" />

import { header } from '../page_objects/header';
import { pageCreate } from '../page_objects/page_create';
import { allGal } from '../page_objects/authAll';
import { newCreate } from '../page_objects/createAgainOb';

const faker = require("faker");

describe ('Visit and change galery created trough backend', () => {
    let commentAdded = 'ovo je sasvim potpuno sasvim novi komentar';
    let authToken = window.localStorage.getItem('token');
    let galleryId = '';

    let userData = {

        title: "Galerija Inter opet",
        description: "Novi description",
        img: 'https://image.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg'
    }

    let allData = {

        titleNew: "Galerija Intercept Editovana",
        descriptionNew: "I deskripsn je editovan",
        imageNew: 'https://cdn-media-2.freecodecamp.org/w1280/5f9ca048740569d1a4ca47b4.jpg'
    }

    beforeEach('Visit app and login', () => {
        cy.loginViaBackend();
        cy.visit('/');
        header.loginBtn.should('not.exist');
    });

    it('Create new Gallery', () => {
        cy.visit('./create');
        cy.intercept({
            method: "POST",
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('createGallery');

        pageCreate.create(userData.title, userData.description, userData.img);

        cy.wait('@createGallery').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(201);
            galleryId = interception.response.body.id;
        })
    });
    it('Visit new gallery', () => {
        cy.visit(`/my-galleries?page=1&term=` + galleryId);
        cy.wait (5000);
        allGal.boxTitle.click();
        cy.url().should('contains',galleryId);
        header.logoutBtn.should ("be.visible");

        pageCreate.comment.type (commentAdded);
        pageCreate.subBtn.click();
        pageCreate.comment.should ('have.value', commentAdded);
    });  
     
    it('Edit gallery', () => {
        cy.intercept({
            method: 'PUT',
            url: `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`
        }).as('editGallery');

        cy.visit(`/edit-gallery/${galleryId}`);
        cy.url(`/edit-gallery/${galleryId}`);

        pageCreate.titleInput.clear();
        
        newCreate.create(allData.titleNew, allData.descriptionNew, allData.imageNew);

        pageCreate.comment.type (commentAdded);
        pageCreate.subBtn.click();
        pageCreate.comment.should ('have.value', commentAdded);

        cy.wait('@editGallery').then((interception) => {
            expect(interception.response.statusCode).eq(200);
        });
    });


});

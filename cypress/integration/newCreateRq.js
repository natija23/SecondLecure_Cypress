import {authLogin} from '../page_objects/authLogin';
import {pageCreate} from '../page_objects/page_create';
import {header} from '../page_objects/header';


const faker = require ("faker");

describe("POM Create", () => {
    let galleryId = "";
    let galleryComment = 'jako lepa galerija';
    let authToken = window.localStorage.getItem('token');

    let validEmail = "tcvijic1@gmail.com";
    let validPass = "testiranje22";

    let userData = {
        
        title:faker.lorem.words(8),
        description: faker.lorem.sentence(6),
        img:faker.image.avatar()
    }

    beforeEach('visit app and login', () => {
        cy.loginViaBackend();
        //cy.visit('/');
        //cy.url().should("contains", "https://gallery-app.vivifyideas.com/");
        //header.loginBtn.click();
        //cy.url().should('contains','/login');
        //authLogin.login (validEmail, validPass);
        //authLogin.submitBtn.click();
        
    });
    
    xit('Create new Gallery', () => {
        cy.visit('./create');
        cy.intercept({
            method: "POST",
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('createGallery');

        pageCreate.create(userData.title, userData.description, userData.img)

        cy.wait('@createGallery').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(201);
            galleryId = interception.response.body.id;
        })
    });

    xit('visit specific gallery', () => {
        //cy.visit(`/galleries/${galleryId}`);
        //cy.url(`/galleries/${galleryId}`);
        cy.visit(`/galleries/` + galleryId);
        //cy.get('button').contains('Delete').click();

    });
    xit('visit and comment specific gallery', () => {
        cy.intercept({
            method: "POST",
            url: 'https://gallery-api.vivifyideas.com/api/comments'
        }).as('commentGallery');

        //cy.visit(`/galleries/${galleryId}`);
        //cy.url(`/galleries/${galleryId}`);
        cy.visit(`/galleries/` + galleryId);
        
        cy.get ('textarea').type(galleryComment);
        cy.get ('button').contains("Submit").click();
        
        cy.wait('@commentGallery').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.body[0].body).to.have.string(galleryComment);
        });

    it('create gallery via backend', () => {
        cy.request({
           method: "POST",
            url: 'https://gallery-api.vivifyideas.com/api/galleries',
            headers: {
                authorization: `Bearer ${authToken}`
            },
            body: {
                title: "neki title",
                description: "najlepsa galerija",
                images: [
                    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg'
                ],
                title: 'neki title'
            }
        
        });

    });
    cy.visit('/');
}); 
});   

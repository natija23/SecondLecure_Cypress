
import { header } from '../page_objects/header';
import { allGal }from '../page_objects/authAll';
import { pageCreate } from '../page_objects/page_create';

describe('Visit and change galery created trough backend', () => {
    let commentAdded = 'drugi komentar ispisan';
    let authToken = window.localStorage.getItem('token');
    let galleryId = 4212;
    let commentId = '';
    

    beforeEach('Visit app and login', () => {
        cy.loginViaBackend();
        cy.visit('/');
        header.loginBtn.should('not.exist');
    });

    it('Create gallery via backend', () => {
        header.createBtn.click();
        cy.request({
            method: "POST",
            url: 'https://gallery-api.vivifyideas.com/api/galleries',
           headers: {
                authorization: `Bearer ${authToken}`
            },
            body: {
                title: "kosmicka zima",
                description: "poslednja galerija",
                images: [
                    'https://i0.wp.com/www.planeta.rs/29/7%20kosmologija%201.jpg'
                ]
            }.its('body').then((response) => {
                galleryId = response.id;
        })    
    });

    it('Delete comment via backend', () => {
        cy.wait(2000);
        cy.visit(`/galleries/${galleryId}`);
        pageCreate.comment.type(commentAdded);
        pageCreate.subBtn.click();

        cy.request({
            method: 'DELETE',
            url: `https://gallery-api.vivifyideas.com/api/comments/${commentId}`,
            headers: {
                authorization: `Bearer ${authToken}`
            }
        
        })
    });

    xit('Visit and delete specific gallery', () => {
        cy.visit(`/my-galleries?page=1&term=` + galleryId);
        cy.wait (5000);
        allGal.boxTitle.click();
        cy.url().should('contains',galleryId);
        header.logoutBtn.should ("be.visible");

        cy.request({
            method: 'DELETE',
            url: `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`,
            headers: {
                authorization: `Bearer ${authToken}`
            }
        })
    }); 
      
});

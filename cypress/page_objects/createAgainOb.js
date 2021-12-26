class createAgain {   
    get titleNew () { 
        return cy.get ("input[id='title']")
    }

    get descriptionNew () {
        return cy.get ("input[id='description']")
    }
    
    get imageNew () {
        return cy.get ("input[placeholder='image url']")
    }
    
    get submitNew () {
        return cy.get("button[type='submit']").contains('Submit');
    }

    create (title, description, img) {
        this.titleNew.type(title);
        this.descriptionNew.type(description);
        this.imageNew.type(img);
        this.submitNew.click();

    }

}
export const newCreate = new createAgain (); 
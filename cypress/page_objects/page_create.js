class PageCreate {

    get titleInput () {
        return cy.get ("input[id='title']")
    }

    get descriptionInput () {
        return cy.get ("input[id='description']")
    }
    get imageInput () {
        return cy.get ("input[placeholder='image url']")
    }
    get subBtn () {
        return cy.get("button[type='submit']").contains('Submit');
    }
    
    get cancelBtn () {
        return cy.get ('.btn').eq(1);
    }

    get addImage () {
        return cy.get ('button[type="button"]').eq(2);
    }

    get imageAddInput () {
        return cy.get ('input[placeholder="image url"]').eq(1);
    }
    get comment () {
        return cy.get ('textarea');
    }
    get affterCreateHeading () {
        return cy.get ('h1[class="title-style"]');
    }

    create (title, description, img) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageInput.type(img);
        this.subBtn.click();

    }

    justTypeNoSubmit (title, description, img) { 
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(img);
    }

    createTwoImg (title, description, img) {
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(img);
        this.addImage.click();
        this.imageAddInput.clear().type(img);
        this.subBtn.click();
    }

    cancelCreating (title, description, img) {
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(img);
        this.cancelBtn.click();

    }
    createNoTitle (title, description, img) {
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(img);
        this.subBtn.click();
    }
}
export const pageCreate = new PageCreate();

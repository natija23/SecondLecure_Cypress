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
        return cy.get ("button[type='submit']")
    }

    create (title, description, img) {
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(img);
        this.subBtn.click();

    }
}
export const pageCreate = new PageCreate();

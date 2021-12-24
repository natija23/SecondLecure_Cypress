class allGall {

    get searchField () {
        return cy.get ('.form-control');
    }
    get filterBtn () {
        return cy.get ('button').eq(0);
    }
    get loadMore () {
        return cy.get ('button').contains ('Load More');
    }
    get containerGal () {
        return cy.get ('.cell');
    }
    getGalleryHeading (index) {
        return this.containerGal.eq(index).find ('h2');
    }
    getGalleryAuthor (index) {
        return this.containerGal.eq(index).find ('p');
    }
    getGalAuthor (author) {
        return this.containerGal.find('p').contains (author);
    }

    search () {
        this.searchField.clear().type ('Zima');
        this.filterBtn.click();
    }

    search2() {
        this.searchField.clear().type('Zima');
        this.filterBtn.click();
        this.loadMore.click();
    }


}
export const allGal = new allGall();

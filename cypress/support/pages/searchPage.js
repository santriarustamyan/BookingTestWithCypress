class SearchPage {

    getFourStarCheckBox() {
        return cy.get('[data-filters-item="class:class=4"]:first > input');
    }

    getStarBoxes() {
        return cy.get('[data-testid^="rating-squares"]');
    }

    getResultAddressBox() {
        return cy.get('[data-testid="address"]');
    }

    getPaginationBtn() {
        return cy.get('[data-testid="pagination"] button');
    }

    goNextPageBtn() {
        return cy.get('[data-testid="pagination"] [aria-label="Next page"]');
    }

    filterWithFourStars() {
        cy.wait(2000)
        this.getFourStarCheckBox().check();
    }






}

module.exports = new SearchPage();

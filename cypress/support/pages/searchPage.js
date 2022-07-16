import helpers from "../../support/helpers";

class SearchPage {
    startData = helpers.generateDatesForBooking(6);
    endDate = helpers.generateDatesForBooking(10);

    selectStartDate() {
        cy.get("[data-date = " + this.startData + "]").click()
    }

    selectEndDate() {
        cy.get('[data-testid = "date-display-field-end"]').click()
        cy.get("[data-date = " + this.endDate + "]").click()
    }

    increaseNumberOfAdults() {
        cy.get('[data-testid="occupancy-config"]').click()
        cy.get(":nth-child(1) > div.e98c626f34 > button.d64a4ea64d").click()
        cy.contains("Done").click()
    }

    clickSearchBtn() {
        cy.get(".f4605622ad.c827b27356").click()
    }

    getFourStarCheckBox() {
        return cy.get('[data-filters-item="class:class=4"]:first > input');
    }

    filterWithFourStars() {
        cy.wait(2000)
        this.getFourStarCheckBox().check();
    }
}
module.exports = new SearchPage();

const helpers = require("../helpers");

class BasePage {

    getLocationTextField() {
        return cy.get('[id="ss"]')
    }

    getGenerateStartDate() {
        return helpers.generateDatesForBooking(6);
    }

    getGenerateEndDate() {
        return helpers.generateDatesForBooking(10);
    }

    getCalendarBtn() {
        return cy.get('[class="xp__dates-inner"]')
    }

    getStartData() {
        return cy.get("[data-date = " + this.getGenerateStartDate() + "]")
    }

    getEndData() {
        return cy.get("[data-date = " + this.getGenerateEndDate() + "]")
    }

    getSearchBtn() {
        return cy.get('[class="js-sb-submit-text "]')
    }

    getBtnOfChangePersonCount() {
        return cy.get('[class="xp__input-group xp__guests"]')
    }

    getBtnAddOfAdult() {
        return cy.get("[data-bui-ref='input-stepper-add-button']").first()
    }

    goTo() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/')
    }

    searchLocation(whereAreGoingName) {
        this.getLocationTextField().type(whereAreGoingName)
    }

    selectDate() {
        this.getCalendarBtn().click()
        this.getStartData().click()
        this.getEndData().click()
    }

    increaseNumberOfAdults() {
        this.getBtnOfChangePersonCount().click()
        this.getBtnAddOfAdult().click()
    }

    clickSearchBtn() {
        this.getSearchBtn().click()
    }
}

module.exports = new BasePage();

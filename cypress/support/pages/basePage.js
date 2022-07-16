class BasePage {
    goTo() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('/')
    }

    whereAreGoing(whereAreGoingName) {
        cy.get('[id="ss"]').type(whereAreGoingName)
    }

    clickSearchBtn() {
        cy.get('[class="js-sb-submit-text "]').click()
    }
}

module.exports = new BasePage();

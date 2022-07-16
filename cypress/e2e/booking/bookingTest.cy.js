import basePage from "/cypress/support/pages/basePage.js";
import searchPage from "../../support/pages/searchPage";
import {locationName} from "../../support/constantData";

describe('search Dilijan', () => {
    beforeEach("Navigate to Booking Page", () => {
        basePage.goTo()
    })
    it('search ', function () {
        basePage.whereAreGoing(locationName)
        basePage.clickSearchBtn()

        searchPage.selectStartDate()
        searchPage.selectEndDate()

        searchPage.increaseNumberOfAdults()

        searchPage.clickSearchBtn()

        searchPage.filterWithFourStars()
    })
})

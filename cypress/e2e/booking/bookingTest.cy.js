import basePage from "/cypress/support/pages/basePage.js";
import searchPage from "../../support/pages/searchPage";
import assert from "../../support/pages/asserts";
import {locationName} from "../../support/constantData";

describe('search Dilijan', () => {
    beforeEach("Navigate to Booking Page", () => {
        basePage.goTo()
    })
    it('search ', function () {
        basePage.searchLocation(locationName)

        basePage.selectDate()

        basePage.increaseNumberOfAdults()

        basePage.clickSearchBtn()

        assert.verifyLocationsOnAllPages()

        searchPage.filterWithFourStars()

        assert.verifyTheStars()
    })
})

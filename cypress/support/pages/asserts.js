import searchPage from "../pages/searchPage";
import {locationName, numberOfStars} from "../constantData";

class Assertions {

    verifyTheLocations() {
        searchPage.getResultAddressBox().each(el => {
            let txt = el.text();
            expect(txt).to.be.oneOf([locationName])
        });
    }

    verifyLocationsOnAllPages() {
        searchPage.getPaginationBtn().then(el => {
            this.verifyTheLocations();
            let numberOfPagesToBeTurned = el.length - 3;
            for (let i = 0; i < numberOfPagesToBeTurned; i++) {
                searchPage.goNextPageBtn().click();
                this.verifyTheLocations();
            }
        })
    }

    verifyTheStars() {
        searchPage.getStarBoxes().each(el => {
            let stars = el.find("span");
            expect(stars).to.have.lengthOf(numberOfStars);
        });
    }
}

module.exports = new Assertions();

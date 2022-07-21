module.exports = {
    generateDatesForBooking (day) {
        let today = new Date();
        return new Date(today.setDate(today.getDate() + day)).toISOString().split('T')[0];
    }
}

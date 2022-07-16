module.exports = {
    generateDatesForBooking (day) {
        let today = new Date();
        let date = new Date(today.setDate(today.getDate() + day)).toISOString().split('T')[0];
        return date;
    }
}

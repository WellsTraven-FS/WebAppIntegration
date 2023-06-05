const card = (string) => {
    let card = "4130370300491570";
    if (card == string) {
        let obscurd = "************1570";
        return obscurd;
    } else {
        let error = "Invalid Credit Card";
        return error;
    }
};

module.exports = card;

const card = require("./card");

describe("Return last 4 numbers of card", () => {
    test("Should return last 4", () => {
        expect(card("4130370300491570")).toEqual("************1570");
    });
});

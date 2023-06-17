require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

// driver
//     .get("http://www.google.com/ncr")
//     .then((_) =>
//         driver.findElement(By.name("q")).sendKeys("nicholas cage", Key.RETURN)
//     )
//     .then((_) =>
//         driver.wait(until.titleIs("nicholas cage - Google Search"), 1000)
//     )
//     .then((_) => driver.quit());

describe("", () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();

        await driver.manage().window().maximize();
    });

    afterAll(async () => {
        await driver.quit();
    });

    const setDelay = async () => {
        await driver.sleep(1000);
    };

    it("Want to open up localhost:3000", async () => {
        await driver.get("http://localhost:3000");
        await driver.getTitle().then((title) => {
            expect(title).toEqual("Home");
        });
        await setDelay();
    });
    it("Want to open up localhost:3000/contact", async () => {
        await driver.get("http://localhost:3000/contact");
        await driver.getTitle().then((title) => {
            expect(title).toEqual("Contact Us");
        });
        await setDelay();
    });
    it("Get value of input", async () => {
        await driver.get("http://localhost:3000/contact");
        let element = await driver.findElement(
            By.id("formInput", "formMessage", () => {
                element = "travendwells@outlook.com";
                expect(element).toEqual(
                    "travendwells@outlook.com",
                    "More info coming to"
                );
            })
        );
    });
});

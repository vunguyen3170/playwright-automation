import { expect } from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../baseTest/pageFixtures";
import { LoginPageObject } from "../../pageObjects/loginPagesObject"
import  WebPageActions  from "../../pageObjects/common/webPageActions"

Given('User navigates to the HRM website', async function () {
  fixture.logger.info("Navigated to the HRM website")
  const webPageActions = new WebPageActions(fixture.page);
  await webPageActions.goto(process.env.BASEURL);
})

Given('User enter the username as {string}', async function (username) {
  fixture.logger.info(`Entering the username: ${username}`);
  const loginPage = new LoginPageObject(fixture.page);
  await loginPage.enterUsername(username);
});

Given('User enter the password as {string}', async function (password) {
  fixture.logger.info(`Entering the username: ${password}`);
  const loginPage = new LoginPageObject(fixture.page);
  await loginPage.enterUsername(password);
})

When('User click on the login button', async function () {
  fixture.logger.info(`Click on the login button`);
  const loginPage = new LoginPageObject(fixture.page);
  await loginPage.clickLoginButton();
});


// Then('Login should be success', async function () {
//   const text = await fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]").textContent();
//   console.log("Username: " + text);
//   fixture.logger.info("Username: " + text);
// })

// When('Login should fail', async function () {
//   const failureMesssage = fixture.page.locator("mat-error[role='alert']");
//   await expect(failureMesssage).toBeVisible();
// });
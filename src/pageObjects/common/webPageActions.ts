import { Page } from "@playwright/test";
import { ElementNotClickableError } from "../../errorHandling/elementNotClickableError"

export default class WebPageActions {
    constructor(private page: Page) {}

    /**
     * Navigate to the specified URL.
     * @param url The URL to navigate to.
     */
    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",
        });
    }

    /**
     * Wait for the element specified by the locator to be attached and then click it.
     * Throws an ElementNotClickableError if the element is not clickable.
     * @param locator The locator of the element.
     */
    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({ state: "attached" });
        if (await element.isEnabled()) {
            await element.click();
        } else {
            throw new ElementNotClickableError(locator);
        }
    }

    /**
     * Click the link specified by the locator and wait for navigation to complete.
     * @param link The locator of the link.
     */
    async navigateTo(link: string) {
        const linkElement = this.page.locator(link);
        await Promise.all([this.page.waitForNavigation(), linkElement.click()]);
    }
}

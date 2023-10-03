import { Page } from 'playwright';

export class LoginPageObject {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locator
    private readonly usernameSelector = 'input[name="username"]'; 
    private readonly passwordSelector = 'input[name="password"]'; 
    private readonly loginButtonSelector = 'input[type="submit"]'; 

    async enterUsername(username: string) {
        await this.page.fill(this.usernameSelector, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.passwordSelector, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButtonSelector);
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}


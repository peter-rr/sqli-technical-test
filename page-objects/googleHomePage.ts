import { Page } from "@playwright/test";

export class GoogleHomePage {

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async selectCookies(optionSelected: string) {
        const cookiesDialogBox = this.page.getByRole('heading', { name: "Before you continue to Google" })
        // Accept or reject cookies if prompted
        if (await cookiesDialogBox.isVisible()) {
            await this.page.getByRole('button', { name: optionSelected }).click()
        }
    }

    async searchFor(text: string) {
        await this.page.getByTitle('Search').fill(text)
        await this.page.getByLabel('Google Search').first().click()
    }
}
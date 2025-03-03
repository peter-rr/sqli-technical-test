import { expect, Page } from "@playwright/test";

export class GoogleResultsPage {

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async selectResultFromTheList(text: string) {
        const resultSelected = this.page.locator('a span').getByText(text).first()
        await expect(resultSelected).toBeVisible()
        await resultSelected.click()
    }
}
import { expect, Page } from "@playwright/test";

export class WikipediaResultPage {

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async searchForSomeText(text: string) {
        await this.page.goto('https://en.wikipedia.org/wiki/Automation')

        await this.page.waitForSelector('.mw-body-content') // Wait for article to be loaded
        const articleContent = this.page.locator('body')
        await expect(articleContent).toContainText(text)
    }
        // -> Try out with element screenshot
        // -> Try with parametrized screenshot method
    
    async takeScreenshot(filePath: string, isFullPage: boolean) {
        await this.page.screenshot({ path: filePath, fullPage: isFullPage })
    }

}
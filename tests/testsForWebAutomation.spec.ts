import { test } from '@playwright/test'
import { GoogleHomePage } from '../page-objects/googleHomePage'
import { GoogleResultsPage } from '../page-objects/googleResultsPage'
import { WikipediaResultPage } from '../page-objects/wikipediaResultPage'


test.describe('Tests for web automation', () => {
    
    test('make search on Google, find a wikipedia result and take a screenshot', async ({page}) => {  
        
        await page.goto('https://www.google.com/?hl=en-GB')

        const onGoogleHomePage = new GoogleHomePage(page)
        const onGoogleResultsPage = new GoogleResultsPage(page)
        const onWikipediaResultPage = new WikipediaResultPage(page)

        await onGoogleHomePage.selectCookies("Accept all")
        await onGoogleHomePage.searchFor("automation")
        await onGoogleResultsPage.selectResultFromTheList("Wikipedia")
        await onWikipediaResultPage.searchForSomeText("270 BC")
        await onWikipediaResultPage.takeScreenshot("screenshot.png", true)

    })
})
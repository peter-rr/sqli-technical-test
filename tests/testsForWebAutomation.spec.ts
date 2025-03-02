import { test } from '@playwright/test'


test.describe('Tests for web automation', () => {
    
    test('exercise 1', async ({page}) => {
        await page.goto('https://www.google.com/')
        await page.getByRole('button', {name: "Rechazar todo"}).click()
    })
})
/**
 * @Playwright END to End Testing 
 * this test navigates to teh routes provided to ensure the expected results are on the pages
 * `run npm test` to see the results
 */

import { expect, test } from '@playwright/test'; 

    test('lists all the birthdays', async({page}) => {

        await page.goto('/birthdays'); 
        await expect( page.getByText('Hercules')).toBeVisible();
        await expect( page.getByText('Athena')).toBeVisible();

    });

    test("saves a new birthday", async({ page }) => {

        await page.goto('/birthday'); 
        await page.getByLabel("Name").fill('Persephone');
        await page.getByLabel('Date of birth').fill('1985-01-01'); 
        await page.getByRole('button').click(); 
        await expect(page.getByText('Persephone')).toBeVisible(); 
    }); 
/**
 *  This unit test is expected to load +page.svelte and 
 *   check the page route to ensure the correct data is displayed
 *   in this case teh @param Hercules & @param Athena are hard coded. 
 *    
 * 
 */
import { describe, it, expect } from 'vitest'; 
import { render, screen } from '@testing-library/svelte'; 
import * as Page from './+page.svelte'; 

describe('/birthdays - route', () => {
    const birthdays = [
            { name: 'Hercules', dob: '1994-02-02' },
            { name: 'Athena', dob: '1989-01-01' }
            ];

    it('displays all the birthdays passed to it', () => {

        render(Page, { data: { birthdays } });

        expect( screen.queryByText('Hercules') ).toBeVisible();
        expect( screen.queryByText('Athena') ).toBeVisible();
       
        });
    });
/**
 *  @Birthday component unit test 
 *  This unit test ensures the Birthday components exist before checking
 *  for values on the page
 * 
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";

import Birthday from './Birthday.svelte'; 

describe("Birthday", () => {

    const exampleBirthday = {
        name: "xRob", 
        dob: "1982-02-22"
    };

    it("Displays the name of a person", () => {

        render(Birthday, {...exampleBirthday, name: 'Athena'}); 
        expect(screen.queryByText('Athena')).toBeVisible();

    }); 

    it("Imports Birthday Component => displaying birthdays", () => {

        render(Birthday, { ...exampleBirthday, name : "Amora"}); 
        
        expect(screen.queryByText("Amora")).toBeVisible();
    });

    it("Displays the DOB", () => {
    
        render(Birthday, {...exampleBirthday, dob : '2021-05-02'}); 
        expect(screen.queryByText('2021-05-02')).toBeVisible();
    });
})
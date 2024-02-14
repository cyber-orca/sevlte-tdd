import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";

import Birthdays from './Birthdays.svelte'; 

describe("Birthday", () => {

    const exampleBirthday = {
        name: "xRob", 
        dob: "1982-02-22"
    };

    it("Displays the name of a person", () => {

        render(Birthdays, {...exampleBirthday, name: 'Athena'}); 
        expect(screen.queryByText('Athena')).toBeVisible();

    }); 

    it("Imports Birthday Component => displaying birthdays", () => {

        render(Birthdays, { ...exampleBirthday, name : "Amora"}); 
        
        expect(screen.queryByText("Amora")).toBeVisible();
    });

    it("Displays the DOB", () => {
    
        render(Birthdays, {...exampleBirthday, dob : '2021-05-02'}); 
        expect(screen.queryByText('2021-05-02')).toBeVisible();
    });
})
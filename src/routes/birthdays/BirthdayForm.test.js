import { describe, it, expect } from 'vitest'; 
import { render, screen } from '@testing-library/svelte';
import BirthdayForm from './BirthdayForm.svelte'; 

describe("Birthday Form - Route", () => {

    it("Displays a form ", () => {
        render(BirthdayForm); 
        expect(screen.queryByRole('form')).toBeVisible()
    });

    it("Has a form method of POST", () => {
        render(BirthdayForm); 
        expect(screen.queryByRole('form').method).toEqual('post');
    });

    it("Displays the button to save the form", () => {
        render(BirthdayForm); 
        expect(screen.queryByRole('button')).toBeVisible(); 
    });

});

describe("Validate Name Field Exist.", () => {

    it("Should have a name field", () => {

        render(BirthdayForm);

        const field = screen.queryByLabelText('Name', {
            selector: 'input[type=text]'
        }); 

        expect(field).toBeVisible();
        expect(field.name).toEqual('name');
    });
});

describe("Validate DOB Field Exist.", () => {

    it("Should have a dob field", () => {

        render(BirthdayForm);

        const field = screen.queryByLabelText('DOB', { 
            selector: 'input[type=text]' 
        }); 
        expect(field).toBeVisible();
        expect(field.name).toEqual('dob');
    });
});
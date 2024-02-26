/**
 *  @Vitest This Unit Test runs on ly on the server side page.server.test.js
 *  This Unit test ensure the load function exist then loads the hard coded 
 *  data of two JavaScript Obejct for Birthdays.
 */
import { describe, it, expect } from 'vitest';
import { load } from './+page.server'; 

describe("/birthdays - load()", () => {

    it("returns a fixture of two items ", () => {

        const result = load(); 
        expect(result.birthdays).toEqual([
            { name: "Hercules", dob: "1994-02-02" }, 
            { name: "Athena", dob: "1989-01-01"}
        ])
    })
});
const { expect } = require ('@playwright/test');

exports.contactPage= class contactPage
{
    constructor(page)
    {
        this.page=page;
        this.fName='//*[@id="firstName"]';
        this.lName='//*[@id="lastName"]';
        this.dob='//*[@id="birthdate"]';
        this.email='//*[@id="email"]';
        this.streetAddress1='';
        this.streetAddress2='';
        this.city='';
        this.province='';
        this.postalCode='';
        this.country='';

        this.submitButton='//button[@id="submit"]';
        this.cancelBUtton='';
        //this.logOut='//*[@id="logout"]';
        this.loginValidation='//p[text()="Click on any contact to view the Contact Details"]';
        this.invalidLogin='//span[text()="Incorrect username or password"]';
    }

    await 

    async contactAdd(fName, lName, dob, email, phone, address,city,state,postal,country){
        await this.page.locator(this.fName).fill(firstname);
        await this.page.locator(this.lname).fill(lastName);
        await this.page.locator(this.dob).fill(DOB);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phone).fill(phone);
        await this.page.locator(this.address).fill(address);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.state).fill(state);
        await this.page.locator(this.postal).fill(postal);
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.submitButton).click();
    }

    async validateContactCreated(fName, lName, dob, email, phone, address,city,state,postal,country){
        const fNameValidation=await this.page.locator[this.savedFirstName];
        const lNameValidation=await this.page.locator[this.savedLastName];
        const dobValidation=await this.page.locator[this.savedDOB];
        const emailValidation=await this.page.locator[this.savedEmail];
        const phoneValidation=await this.page.locator[this.savedPhone];
        const addressValidation=await this.page.locator[this.savedAddress];
        const cityValidation=await this.page.locator[this.savedCity];
        const stateValidation=await this.page.locator[this.savedState];
        const postalValidation=await this.page.locator[this.savedPostal];
        const countryValidation=await this.page.locator[this.savedCountry];
        await expect(fNameValidation.toHaveText(fname));
        await expect(lNameValidation.toHaveText(lname));
        await expect(dobValidation.toHaveText(dob));
        await expect(fNameValidation.toHaveText(email));
        await expect(fNameValidation.toHaveText(phone));
        await expect(fNameValidation.toHaveText(address));
        await expect(fNameValidation.toHaveText(city));
        await expect(fNameValidation.toHaveText(state));
        await expect(fNameValidation.toHaveText(postal));
        await expect(fNameValidation.toHaveText(country));

    }
}
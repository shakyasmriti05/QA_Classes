import{test,expect} from '@playwright/test';
import{loginPage} from '../../pageObjects/login.po';
const testData= require('../../fixtures/loginFixture.json');

test.beforeEach(async({page})=>
{
    await page.goto('/');
})

test.describe('valid login tests',()=>
{
    test('Login using valid username and password',async ({ page }) =>
    {
        const login=new loginPage (page);
        await login.login(testData.validUser.username, testData.validUser.password);
        //await login.login('smriti@gmail.com','rachana123');
        await login.verifyValidLogin();
    });
})

test.describe('invalid login tests',()=>
{
    test('Login using invalid username and password',async ({ page }) =>
    {
        const login=new loginPage (page);
        await login.login(testData.invalidUser.username, testData.validUser.password);
        //await login.login('smgmail.com','rac123');
        await login.verifyInvalidLogin();
    });
})
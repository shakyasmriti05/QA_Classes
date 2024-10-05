import{test,expect} from '@playwright/test';
import{loginPage} from '../../pageObjects/contact.po';
const testData= require('../../fixtures/contactFixture.json');
let accessToken;

test.beforeEach(async({page})=>
{
    const login=new loginPage(page);
    await page.goto('/');
    await login.login(testData.validUser.username,testData.validUser.password);
    await login.verifyValidLogin();
})

test.describe('Contact Test Cases',()=>
{
    test('Contact Add Test',async ({ page,context,request }) =>
    {
        const contact=new ContactPage (page);
        await contact.contactAdd(contactTestData.contact.firstName);
        await contact.viewContact();
        await contact.validateContactCreated(contactTestData.contact.firstName);
        accessToken=await authenticateUser(testData.validUser.username);
        const id= await getEntity (accessToken,'/contacts','200');
        await login.verifyValidLogin();
    });
})

import { clear } from "console";
import { TIMEOUT } from "dns";
import { exists } from "fs";

"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
// failing the test
 return false
});
let rowsLength;
describe('Scope Tool Testing - Landing Page', () => {
 before(() => {
cy.task('readXlsx', { file: 'cypress/support/Login.xlsx', sheet: "Sheet1" }).then((rows) => {
rowsLength = rows.length;
cy.writeFile("cypress/fixtures/Login.json", { rows })
})
cy.visit("https://cybersecurity.att.com/api/v3/scopes/portal/login/");
cy.wait(4000)
})
it('Logging in with Valid and Invalid Data', () => {
//Scope_1 to Scope_25
//To check if the user is able to land on scoping tool login page.
//cy.visit('https://cybersecurity.att.com/order/scopes/login/')
cy.contains('Sign In')
cy.contains('Username')
cy.contains('Password')
cy.contains('Forgot/Reset Password')
cy.contains("Don't have access?")
cy.contains('Request Scoping Tool Access')
cy.contains('Login Tutorial')
cy.wait(2000)
//To check if the user is able to login with invalid and valid data
cy.fixture('Login').then((data) => {
cy.url().should('include', 'https://cybersecurity.att.com/').then(() => {
//Forogot password button
cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > a.btn.btn-link:nth-child(2)').click()
cy.wait(1000)
cy.get('#id_email').type(data.rows[0].Email)
cy.get('div.container:nth-child(2) main.my-4 div.row div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(3) > button.submit.btn.btn-block.btn-primary').click()
cy.wait(1000)
//Back to Login Page 
// cy.contains("Back to Login Page").click()
cy.xpath("//a[contains(text(),'Back to Login Page')]").click()
cy.wait(1000)
//Negative validations forgot password 
cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > a.btn.btn-link:nth-child(2)').click()
cy.wait(1000)
cy.get('#id_email').type(' ')
cy.get('div.container:nth-child(2) main.my-4 div.row div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(3) > button.submit.btn.btn-block.btn-primary').click()
cy.wait(1000)
cy.contains("This field is required.")
cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
cy.wait(1000)

 //login tutorial link
cy.get('#loginvideo').click()
cy.wait(2000)
cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(2) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.accessrequest_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
cy.wait(3000)
 cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(2) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()
cy.wait(2000)
 //Requesting Scope tool access
 cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(2) > a.btn.btn-primary:nth-child(3)').click()
 cy.wait(2000)
 cy.get('#id_email').type(data.rows[1].Email)
 cy.wait(2000)
 cy.get('div.container:nth-child(2) main.my-4 div.row div.col-md-6.offset-md-3 form:nth-child(3) > button.btn.btn-primary:nth-child(3)').click()
 cy.wait(2000)
 cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
 cy.wait(2000)
 //negative scenario 
 cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(2) > a.btn.btn-primary:nth-child(3)').click()
 cy.wait(2000)
 cy.get('#id_email').type(' ')
 cy.wait(2000)
 cy.get('div.container:nth-child(2) main.my-4 div.row div.col-md-6.offset-md-3 form:nth-child(3) > button.btn.btn-primary:nth-child(3)').click()
 cy.wait(2000)
 cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
 cy.wait(2000)
 cy.get('#id_username')
 cy.get('#id_password').type(data.rows[2].Password)
 cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > button.btn.btn-primary:nth-child(1)').click()
 cy.get('#id_password').clear()
 cy.get('#id_username').type(data.rows[2].Email)
 cy.get('#id_password')
 cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > button.btn.btn-primary:nth-child(1)').click()
 cy.get('#id_username').clear()
 cy.wait(2000)
 cy.get('#id_username')
 .clear().type(data.rows[2].Email);
 cy.get('#id_password')
 .clear().type(data.rows[2].Password);
 cy.get('#mainContainer > main > div.row > div > div > div:nth-child(1) > form > div.d-grid.gap-2 > button').click();
 })
 })
// cy.scrollTo('bottom')
 //logout
cy.xpath("//a[contains(text(),'logout')]").click()
 })
})
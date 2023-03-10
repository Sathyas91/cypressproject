///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
let rowsLength;
let userData
describe('Portfolio Module', () => {
    before(function () {
        cy.task('readXlsx', { file: 'cypress/fixtures/Port.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/Port.json", { rows })
        })
        cy.fixture('port').then(function (data) {
            userData = data;

            cy.visit("https://cybersecurity.att.com/api/v3/scopes/portal/login/");
            cy.wait(2000)
            cy.get('#id_username').type(userData.rows[0].Email)
            cy.get('#id_password').type(userData.rows[0].Password)
            cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > button.btn.btn-primary:nth-child(1)').click()
            cy.wait(3000)
        })

    })

    it('To check the elements availability under portfolio option and new scop portfolio button', () => {
        //To click porfolio option from header
        cy.get('body > header > div > div > ul > li:nth-child(2) > a').click()
        cy.wait(2000)
        cy.contains('AT&T Cybersecurity')
        cy.contains('Scope')
        cy.contains('Portfolios')
        cy.contains('Scope Portfolio')
        cy.contains('New Scope Portfolio')
        cy.contains('Show')
        cy.contains('Search')
        cy.contains('Name')
        cy.contains('Products')
        cy.contains('logout')
        cy.get('#newPortfolioButton').click()
        cy.wait(2000)
        cy.contains('Name')
        cy.contains('Products')
        cy.contains('USM Anywhere')
        cy.get('[value="26"]').should('be.visible')
        //cy.contains('AT&T MTDR')
        cy.get('#versionProducts > [value="25"]').should('be.visible')
        //cy.contains('USM Anywhere-MSSP')
        cy.get('[value="28"]').should('be.visible')
        //cy.contains('Penetration Test')
        cy.contains('MVP Qualys')
        cy.contains('MVP DDI')
        cy.contains('Hold Ctrl (windows) or Cmd (mac) to select multiple')
        cy.contains('Only excel files.')
        cy.contains('Close')
        cy.contains('Create')
        cy.get('#newPortfolioModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//Close button
        cy.wait(2000)
        //To click TDR QA option from table
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(2)').click()
        cy.wait(2000)
        /*
        //diable button
        cy.get('#enableTogglePortfolio')
        //delete button
        cy.get('#deletePortfolio')
         */
    })
    it('Under user option', () => {

        //To check user heading visiability
        cy.get('#mainContainer > main > div.panel.panel-default.my-4 > div.panel-heading.clearfix > h2').should('be.visible')
        //To validate search box with invalid data
        cy.get('#userdataTable_filter > label > .form-control').click()//To click search box
        cy.get('#userdataTable_filter > label > .form-control').type(userData.rows[0].SearchBox)//To type invalid data
        cy.wait(3000)
        //To validate search box with valid data
        cy.get('#userdataTable_filter > label > .form-control').clear()//To clear searchbox field
        cy.get('#userdataTable_filter > label > .form-control').type(userData.rows[1].SearchBox)//To type valid data 
        cy.wait(3000)

        //To validate 'X' icon(remove user from portfolio) in user table
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > button.removeUser.btn.btn-xs.btn-danger').click()
        cy.wait(3000)
        //To click add user button
        cy.get('#addUser').click()
        //cy.contains('Add User to Portfolio')
        cy.get('#addUserModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')
        //cy.contains('Search')
        cy.get('#associateuserdataTable_filter > label').should('be.visible')
        //cy.contains('First Name')
        cy.get('#associateuserdataTable > thead > tr > [aria-label="First Name: activate to sort column ascending"]').should('be.visible')
        //cy.contains('Last Name')
        cy.get('#associateuserdataTable > thead > tr > [aria-label="Last Name: activate to sort column ascending"]').should('be.visible')
        //cy.contains('Email')
        cy.get('#associateuserdataTable > thead > tr > .sorting_asc').should('be.visible')
        //cy.contains('Previous')
        cy.get('#associateuserdataTable_previous').should('be.visible')
        //cy.contains('Next')
        cy.get('#associateuserdataTable_next > .page-link').should('be.visible')
        //cy.contains('Select a user from above table')
        cy.get(':nth-child(2) > .control-label').should('be.visible')
        //cy.contains('Group')
        cy.get(':nth-child(3) > .control-label').should('be.visible')
        // cy.contains('Close')
        cy.get('#addUserModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').should('be.visible')
        //cy.contains('Add User')
        cy.get('#addUserBtn').should('be.visible')
        cy.wait(2000)
        cy.get('#addUserBtn').click()//To click add user button
        cy.contains('You must select a user.')
        //To validate 'X' icon
        cy.get('#addUserModal > div > div > div.modal-header > button').click()
        cy.wait(1000)
        cy.get('#addUser').click()//To click add user button
        cy.wait(1000)
        //To validate close button
        cy.get('#addUserModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        //cy.get('#addUserModal > div > div > div.modal-footer > button.btn.btn-secondary').click()
        cy.wait(1000)
        cy.get('#addUser').click()//To click add user button
        //To search invalid data in search box after clicking add user button
        cy.get('#associateuserdataTable_filter > label > input').click()//To click search box
        cy.get('#associateuserdataTable_filter > label > input').type(userData.rows[2].SearchBox)
        cy.wait(3000)
        //To search valid data in search box after clicking add user button
        cy.get('#associateuserdataTable_filter > label > input').clear()
        cy.get('#associateuserdataTable_filter > label > input').type(userData.rows[1].SearchBox)
        cy.wait(3000)
        //To select data under Add User to Portfolio popup window to adduser under user section
        cy.get('#associateuserdataTable > tbody > :nth-child(5) > .sorting_1').click()
        //Group dropdown
        cy.get('#newUserGroup').select(2)
        cy.wait(1000)
        cy.get('#newUserGroup').select(3)
        cy.wait(1000)
        cy.get('#newUserGroup').select(4)
        cy.wait(1000)
        // cy.get('#newUserGroup').select(5)
        //cy.wait(1000)
        cy.get('#newUserGroup').select('Admin')
        cy.wait(1000)
        cy.get('#addUserBtn').click({ force: true })//To click adduser button in popup window
        cy.wait(3000)
        cy.get('#addUserModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()
        cy.wait(2000)
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td:nth-child(3)').should('be.visible')
        //cy.get('#userdataTable > tbody > tr:nth-child(1)').should('have.text', '1@gmail.com') //To check the newly added user is visiable in the table 
        //To validate next button
        cy.get('#userdataTable_next > a').click({ force: true })
        cy.wait(2000)
        //To validate previous button
        cy.get('#userdataTable_previous').click({ force: true })
        cy.wait(2000)


    })
    it('Validating Notifications icon, Tongle Buutons in user section', () => {
        //To click notification icon
        cy.xpath("//body[1]/div[1]/main[1]/div[3]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[6]/div[1]/button[2]/i[1]").click()
        cy.contains('Update Notifications')
        cy.contains('Sent To Customer')
        cy.contains('Customer Submitted')
        cy.contains('MSSP Validation Request')
        cy.contains('MSSP Validation Denied')
        cy.contains('Sent For Validation')
        cy.contains('Valid with Limitations')
        cy.contains('Limitation Response')
        cy.contains('Validation Complete')
        cy.contains('Validation Denied')
        cy.contains('Closed')
        cy.contains('Archived')
        cy.contains('Not Interested')
        cy.contains('Closed Won')
        cy.contains('Mute All Notifications')
        cy.contains('Mute')
        cy.contains('Close')
        //To enable and disable tongle
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(1) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(2) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(3) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(4) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(5) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(6) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(7) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(8) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(9) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(10) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(11) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(12) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(13) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(14) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(8) label.form-check-label > input.form-check-input').click()
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) div.form-check.form-switch div.form-check.form-switch:nth-child(9) label.form-check-label > input.form-check-input').click()
        cy.wait(3000)
        //To validate 'X' icon under notification popup window
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(8) div.modal-dialog.modal-lg div.modal-content div.modal-header > button.btn-close').click()
        cy.wait(2000)
        //To click notification icon
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > button.notificationChange.btn.btn-xs.btn-default').click()
        cy.get('#notificationModal > div > div > div.modal-footer > button').scrollIntoView().click()
        //Group dropdown under user option in front page
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td.sorting_1 > select').select('Security Expert')
        //cy.contains('Security Expert').select()
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td.sorting_1 > select').select('Sales Rep')
        //cy.contains('Sales Rep').select()
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td.sorting_1 > select').select('MSSP')
        //cy.contains('MSSP').select()
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td.sorting_1 > select').select('Portfolio Manager')
        //cy.contains('Portfolio Manager').select()
        cy.get('#userdataTable > tbody > tr:nth-child(1) > td.sorting_1 > select').select('Admin')
        //cy.contains('Admin').select()
        cy.wait(1000)
    })
    it('Version section', () => {
        cy.scrollTo('bottom')
        //To click new version button
        cy.get('#newVersion').click()
        cy.wait(1000)
        cy.contains('New Version')
        cy.contains('Only excel files.')
        cy.contains('Close')
        cy.contains('Create')
        cy.get('#excelSave').click()
        //should display an error message.
        cy.contains('Excel File is required.')
        cy.wait(3000)
        //To validate close button
        cy.xpath("//body/div[@id='mainContainer']/main[1]/div[5]/div[1]/div[1]/div[3]/button[1]").click()
        cy.get('#newVersion').click() //To click new version button
        cy.get('#excelFile').click()
        //uploading a json file
        const j = 'example.json'
        cy.get('#excelFile').click().attachFile(j);
        cy.wait(3000)
        //uploading a excel file
        const v = 'USM Anywhere_Scoping_desi_051023.xlsx.xlsx.xlsx'
        cy.get('#excelFile').click().attachFile(v);
        cy.wait(3000)
        cy.get('#excelSave').click()
        cy.wait(3000)
        //Error alert message we can't assert its keepon changing
        //cy.get('#newVersionModal > .modal-dialog > .modal-content > .modal-body > .alert').should('be.visible')
        //To validate 'X' icon in version popup
        cy.get('#newVersionModal > div > div > div.modal-header > button').click({ force: true })
        cy.wait(1000)
        //To validate current column 
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(4) > button').click() //convert false to true
        cy.wait(2000)
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(4) > button').click() //convert  true to false
        //To validate available column 
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(5) > button').click() //convert false to true
        cy.wait(2000)
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(5) > button').click() //convert  true to false
        //To validate download excel
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > button.downloadScopeFile.btn.btn-xs.btn-default').click()
        cy.wait(2000)
        //To validate view scop form
        cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > button.viewScopeForm.btn.btn-xs.btn-default').click()
        cy.get('#dataTable_next > a').click()//Next button
        cy.wait(2000)
        cy.get('#dataTable_previous').click()//previous button
        cy.wait(1000)
    })
})
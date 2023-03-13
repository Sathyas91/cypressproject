///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
let rowsLength;
let userData
describe('Scope Tool Testing - Home Page', () => {
    before(function () {
        cy.task('readXlsx', { file: 'cypress/fixtures/Scope.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/Scope.json", { rows })
        })
        cy.fixture('Scope').then(function (data) {
            userData = data;

            cy.visit("https://cybersecurity.att.com/api/v3/scopes/portal/login/");
            cy.wait(2000)
            cy.get('#id_username').type(userData.rows[0].Email)
            cy.get('#id_password').type(userData.rows[0].Password)
            cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(1) div.col-md-6.offset-md-3 div.vstack.gap-3 div.bg-light:nth-child(1) form.my-4:nth-child(2) div.d-grid.gap-2:nth-child(4) > button.btn.btn-primary:nth-child(1)').click()
            cy.wait(3000)
        })
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('PIM-SESSION-ID', 'S031m2N1Mu1dUxe9')
        Cypress.Cookies.preserveOnce('GULP_TH2', '1')
    })
it("Dropdown Section and Status Filter Section", () => {

    //To Check if the user is able to select respective entries from Show dropdown list (10, 50, 25,100)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_length label:nth-child(1) > select.form-select.form-select-sm').select(1)
    cy.wait(2000)
    cy.contains('25')
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_length label:nth-child(1) > select.form-select.form-select-sm').select(2)
    cy.wait(2000)
    cy.contains('50')
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.get('header').click()
    cy.wait(2000)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_length label:nth-child(1) > select.form-select.form-select-sm').select(3)
    cy.wait(2000)
    cy.contains('100')
    cy.get('header').click()
    cy.wait(2000)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_length label:nth-child(1) > select.form-select.form-select-sm').select(0)
    cy.wait(2000)
    cy.contains('10')
    cy.get('header').click()
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    //To Check if the user is able to select respective status from Status filter list

    cy.get('#scopeStateFitler').select('No Selection')
    cy.wait(2000)
    cy.contains('No Selection')
    cy.wait(2000)
    cy.get('#scopeStateFitler').select('Created')
    cy.wait(2000)
    cy.contains('Created')
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()//To click created file
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-header > button').click()//Close button
    cy.wait(2000)
    cy.get('#scopeStateFitler').select('Sent To Customer')
    cy.wait(2000)
    cy.contains('Sent To Customer')
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Customer Submitted')
    cy.wait(2000)
    cy.contains('Customer Submitted')
    cy.wait(2000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Sent For Validation')
    cy.contains('Sent For Validation')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Valid with Limitations')
    cy.contains('Valid with Limitations')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Limitation Response')
    cy.contains('Limitation Response')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Validation Complete')
    cy.contains('Validation Complete')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Validation Denied')
    cy.contains('Validation Denied')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Invalid')
    cy.contains('Invalid')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr > td:nth-child(2)').click({force :true})
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Closed')
    cy.contains('Closed')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr > td.truncate').click({force : true})//single file
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Archived')
    cy.contains('Archived')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Not Interested')
    cy.contains('Not Interested')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button
    cy.get('#scopeStateFitler').select('Closed Won')
    cy.contains('Closed Won')
    cy.wait(3000)
    cy.get('#dataTable > tbody > tr:nth-child(2) > td:nth-child(2)').click()
    cy.wait(2000)
    cy.get('#adminStateChange').scrollIntoView()
    cy.wait(1000)
    cy.get('#newScopeModal > div > div > div.modal-footer > button.btn.btn-secondary').click()//close button

})
it("Search Box Validations", () => {

    //To check valid result is shown while searching with valid data and To check error message is shown while searching with invalid data

    //valid data
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_filter label:nth-child(1) > input.form-control.form-control-sm').type(userData.rows[0].SearchBox)
    cy.wait(3000)
    cy.get('header').click()
    cy.wait(3000)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_filter label:nth-child(1) > input.form-control.form-control-sm').clear()
    cy.wait(3000)
    //invalid data
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_filter label:nth-child(1) > input.form-control.form-control-sm').type(userData.rows[1].SearchBox)
    cy.wait(3000)
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.dataTables_filter label:nth-child(1) > input.form-control.form-control-sm').clear()
    cy.wait(1000)
    //cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
    cy.wait(2000)
    //To check if previous, next and navigation buttons are working
    cy.get('#scopeStateFitler').select('Created')
    cy.wait(2000)
    cy.get('#dataTable_next > a').click()
    cy.wait(3000)
    //To validate previous button
    cy.get('#dataTable_previous').click()
    cy.wait(3000)


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    }
    )
}
)
it('Creating,Sending and Archieving a scope', () => {
    //To check if the user is able to create the new scope with invalid and valid data
    //to click scop option tc 31
    cy.get('#newScopeButton').click()
    cy.wait(2000)
    cy.contains('Customer email')
    cy.contains('Customer name')
    cy.contains('Company name')
    cy.contains('Portfolio and Product')
    cy.contains('Portfolio being sold')
    cy.contains('Product being sold')
    cy.contains('Scopes Version')
    cy.contains('AT&T Internal')
    cy.contains('Sales Representative')
    cy.contains('Sales Expert')
    cy.contains('Salesforce opportunity id')
    cy.contains('Change State')
    cy.contains('Customer Information')
    cy.contains('Close')
    cy.contains('Save')
    //to check without value tc 34 to 39
    cy.wait(2000)
    cy.get('#saveScope').click()
    cy.scrollTo('top')
    cy.wait(3000)
    cy.contains('Customer email is required.')
    cy.contains('Customer name is required.')
    //cy.contains('Product being sold is required.')
    //cy.contains('Sales representative has not been set properly.')
    cy.wait(2000)
    cy.get('#id_customer_name').type(userData.rows[0].customerName)//name
    cy.wait(1000)
    //to validate why do we need an email tc 40 and 41 inactive
    cy.xpath("//button[@id='emailpopover']").click()
    cy.wait(3000)
    cy.xpath("//button[@id='emailpopover']").click()
    cy.get('#id_customer_email').type(userData.rows[0].customerEmail) //email
    cy.get('#id_company_name').type(userData.rows[0].companyName) //company id name
    //Salesforce opportunity ID
    cy.get('#id_salesforce_opportunity_id').type(userData.rows[0].salesforceId)
    cy.xpath("//body/div[@id='mainContainer']/main[1]/div[8]/div[1]/div[1]/div[3]/form[1]/div[1]").click()
    cy.wait(4000)
    //Salesforce id is invalid 
    //cy.contains("Salesforce opportunity id is not valid")
    cy.wait(1000)
    cy.get('#id_salesforce_opportunity_id').clear()

    //using ID Product being sold
    cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(13) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(3) > div.unboxed-fields:nth-child(9)').click()
    cy.get('#id_product_being_sold').select('USM Anywhere')
    cy.wait(2000)
    cy.get('#id_product_being_sold').select('AT&T MTDR')
    cy.wait(2000)
    cy.get('#id_product_being_sold').select('USM Anywhere-MSSP')
    cy.wait(2000)
    cy.get('#id_product_being_sold').select('Penetration Test')
    cy.wait(2000)
    cy.get('#id_product_being_sold').select('USM Anywhere')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('AT&T MTDR_Scoping_Luck Companies_090321.xlsx')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('USM Anywhere_Scoping_Phoenix Color_101821.xlsx')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('AT&T MTDR_Scoping_desi_030822.xlsx')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('USM Anywhere_Scoping_testqa_102621.xlsx.xlsx.xlsx.xlsx')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('USM Anywhere_Scoping_testqa_102621.xlsx.xlsx.xlsx.xlsx.xlsx')
    cy.wait(2000)
    cy.get('#scope_version_selection').select('USM Anywhere_Scoping_testqa_102621.xlsx.xlsx')
    cy.wait(2000)
    cy.get('#id_salesforce_override').select('Cybersecurity-Consulting')
    cy.wait(2000)
    cy.get('#id_salesforce_override').select('CyberSandbox')
    cy.wait(2000)
    cy.get('#sales_rep_typeahead').type(userData.rows[0].salesRepresentative)
    cy.wait(2000)
    cy.get('#id_salesforce_opportunity_id').type(userData.rows[0].opportunityId)
    cy.wait(1000)
    //cy.get('#saveScope').click()
    //To validate 'close' icon tc 54
    cy.wait(3000)
    cy.get('#newScopeButton').click({ force: true }) //click scop option
    //to x icon tc 55
    //cy.get('#newScopeModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()

    cy.xpath("//body/div[@id='mainContainer']/main[1]/div[8]/div[1]/div[1]/div[2]/button[1]").click({ force: true })
    cy.wait(3000)
    //To validate 'Active Portfolio' dropdown tc 56
    //cy.xpath("//select[@id='portfolio_picker']").select(2)



    //Send scope to customer, open validation , Archive scope
    //to click mail icon
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.DTFC_ScrollWrapper div.DTFC_LeftWrapper div.DTFC_LeftBodyWrapper div.DTFC_LeftBodyLiner table.table.table-sm.table-striped.table-condensed.table-bordered.table-hover.dataTable.no-footer.DTFC_Cloned tbody:nth-child(2) tr.odd:nth-child(1) td.dt-center div.btn-group.scopeActions > button.sendEmailButton.btn.btn-xs.btn-outline-primary').click({ force: true })
    cy.wait(2000)
    //email link warning agree button 
    cy.get('#emailLinkWarningAgreeButton').click()
    cy.wait(3000)
    // Sending scope
    cy.scrollTo('top')
    cy.contains('Email the Scope to the Customer')
    cy.contains('Subject')
    cy.contains('Message')
    cy.contains('You must have the token {{ link }} in your message to successfully send the email.')

    cy.wait(2000)
    cy.get('#sendEmail').click()
    //opening validation
    cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.DTFC_ScrollWrapper div.DTFC_LeftWrapper div.DTFC_LeftBodyWrapper div.DTFC_LeftBodyLiner table.table.table-sm.table-striped.table-condensed.table-bordered.table-hover.dataTable.no-footer.DTFC_Cloned tbody:nth-child(2) tr.odd:nth-child(1) td.dt-center div.btn-group.scopeActions > button.openValidation.btn.btn-xs.btn-outline-primary').click({ force: true })
    cy.wait(3000)
    // archive scope(delete icon)
    //cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.dataTables_wrapper.dt-bootstrap5.no-footer:nth-child(5) div.toolbar div.DTFC_ScrollWrapper div.DTFC_LeftWrapper div.DTFC_LeftBodyWrapper div.DTFC_LeftBodyLiner table.table.table-sm.table-striped.table-condensed.table-bordered.table-hover.dataTable.no-footer.DTFC_Cloned tbody:nth-child(2) tr.odd:nth-child(1) td.dt-center div.btn-group.scopeActions > button.archiveBtn.btn.btn-xs.btn-outline-danger').click()
    //cy.wait(3000)
})
})
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
    it('Elements and links in the Scope Home Page', () => {
        //checking for the elements in Home page.
        cy.contains('AT&T Cybersecurity')
        cy.contains('Scope')
        cy.contains('Portfolios')
        cy.contains('Active Portfolio')
        cy.contains('New Scope')
        cy.contains('Only Mine')
        cy.contains('Completed')
        cy.contains('Archived')
        cy.contains('In Progress')
        cy.contains('Show')
        cy.contains('entries')
        cy.contains('Status Filter')
        cy.contains('Actions')
        cy.contains('Status')
        cy.contains('Company name')
        cy.contains('Customer Name')
        cy.contains('Customer Email')
        cy.contains('Sales Rep')
        cy.contains('Need Help?')
        cy.contains('logout')
        //To Check if page redirects to at&t cybersecurity landing page when user clicks on AT&T Cybersecurity link
        cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
        cy.contains('AT&T Cybersecurity')
        cy.contains('Scope')
        cy.contains('Portfolios')
        cy.contains('Active Portfolio')
        cy.contains('New Scope')
        cy.contains('Only Mine')
        cy.contains('Completed')
        cy.contains('Archived')
        cy.contains('In Progress')
        cy.contains('Show')
        cy.contains('entries')
        cy.contains('Status Filter')
        cy.contains('Actions')
        cy.contains('Status')
        cy.contains('Company name')
        cy.contains('Customer Name')
        cy.contains('Customer Email')
        cy.contains('Sales Rep')
        cy.contains('Need Help?')
        cy.contains('logout')
        //To Check if page redirects to at&t cybersecurity landing page when user clicks on Scope Button
        cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
        cy.contains('AT&T Cybersecurity')
        cy.contains('Scope')
        cy.contains('Portfolios')
        cy.contains('Active Portfolio')
        cy.contains('New Scope')
        cy.contains('Only Mine')
        cy.contains('Completed')
        cy.contains('Archived')
        cy.contains('In Progress')
        cy.contains('Show')
        cy.contains('entries')
        cy.contains('Status Filter')
        cy.contains('Actions')
        cy.contains('Status')
        cy.contains('Company name')
        cy.contains('Customer Name')
        cy.contains('Customer Email')
        cy.contains('Sales Rep')
        cy.contains('Need Help?')
        cy.contains('logout')
        //To Check if page redirect to ' Portfolios page' when user clicks on ' Portfolios ' link'
        cy.get('header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start ul.nav.col-12.col-lg-auto.me-lg-auto.mb-2.justify-content-center.mb-md-0.mx-4 li:nth-child(2) > a.nav-link.px-2.text-white').click()
        cy.wait(3000)
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
        //Validating MSSP Link 
        cy.get('body:nth-child(2) header.p-3.bg-primary:nth-child(1) div.container div.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-lg-start > a.d-flex.align-items-center.mb-2.mb-lg-0.text-white.text-decoration-none').click()
        cy.wait(4000)
    })
    it("Checks on all Scoping Videos", () => {
        //Need help (Video Section)

        //Video 1

        cy.get('#supportAction').click()
        cy.wait(500)
        cy.xpath('//body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]').click()
        cy.wait(500)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(2) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.accessrequest_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
        cy.wait(4000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(2) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()

        //Video 2
        cy.wait(500)
        cy.get('#scopingvideo').click()
        cy.wait(500)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(4) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.scopingvideohelp_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
        cy.wait(4000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(4) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()

        //Video 3
        cy.wait(500)
        cy.get('#tscvideo').click()
        cy.wait(500)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(6) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.tscvideohelp_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
        cy.wait(5000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(6) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()

        //Video 4
        cy.wait(500)
        cy.get('#customerperspective').click()
        cy.wait(500)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(10) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.customerperspectivehelp_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
        cy.wait(5000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(10) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()

        //Video 5
        cy.wait(500)
        cy.get('#scopingoverview').click()
        cy.wait(500)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(8) div.modal-dialog.modal-xl div.modal-content div.modal-body div.embed-responsive.embed-responsive-16by9 div.video-js.vjs-16-9.vjs-paused.scopingoverviewhelp_container-dimensions.vjs-controls-enabled.vjs-workinghover.vjs-v7.vjs-user-active button.vjs-big-play-button > span.vjs-icon-placeholder').click({ force: true })
        cy.wait(5000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.show:nth-child(8) div.modal-dialog.modal-xl div.modal-content div.modal-header > button.btn-close').click()
        cy.get('#supportAction').click()
        cy.wait(500)

        //Useful Resources 
        cy.get('#supportAction').click()
        cy.xpath("//a[contains(text(),'Support Service SLA')]").click({ multiple: true })
        cy.xpath("//a[contains(text(),'USMA Scoping Sheet')]").click({ multiple: true })
        cy.xpath("//a[contains(text(),'USMA Scoping Sheet for Gov')]").click({ multiple: true })
        //cy.xpath("//a[contains(text(),'Scoping Tool Sample')]')]").click({ multiple: true })
        cy.xpath("//a[contains(text(),'Scoping Tool Sample')]").click({ multiple: true })

        cy.get('#supportAction').click()
    })
    it("Only Mine,In Progress,Completed,Archived,Export,Notification and Closed Buttons", () => {

        //To check respective user created scopes only  displayed while clicking on Only Mine button

        cy.get('#onlyMineToggle').click()
        cy.wait(3000)
        cy.get('header').click()
        cy.wait(3000)
        //To check process button
        cy.get('#dataTable_container > div.btn-toolbar.mb-3 > div:nth-child(2) > div > div > button.btn.btn-primary').click(
            cy.wait(3000)
        )
        //To check if the user is able to see the completed status scope while clicking on Completed button

        cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.btn-toolbar.mb-3:nth-child(4) div.btn-group.me-2:nth-child(2) div.stateGroup div.btn-group > button.btn.btn-default:nth-child(2)').click({ force: true })
        cy.wait(3000)

        //To check if the user is able to see the Archived status scope while clicking on Archived button'

        cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.btn-toolbar.mb-3:nth-child(4) div.btn-group.me-2:nth-child(2) div.stateGroup div.btn-group > button.btn.btn-default:nth-child(3)').click({ force: true })
        cy.wait(5000)
        //Notification button

        cy.get('div.container:nth-child(2) main.my-4 div.row:nth-child(12) div.col div.btn-toolbar.mb-3:nth-child(4) div.btn-group.me-2:nth-child(3) button.btn.btn-link.pull-left:nth-child(2) > i.bi-bell').click()
        cy.wait(2000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(1) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(2) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(3) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(4) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(5) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(6) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(7) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(8) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(9) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(10) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(11) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(12) > input.form-check-input').click()
        cy.get(2000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(1) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(2) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(3) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(4) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(5) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(6) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(7) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(8) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(9) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(10) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(11) > input.form-check-input').click()
        cy.get(1000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-body form:nth-child(4) div.form-group div.form-check.form-switch:nth-child(12) > input.form-check-input').click()
        cy.get(2000)
        cy.get('body.modal-open:nth-child(2) div.container:nth-child(2) main.my-4 div.modal.fade.show:nth-child(15) div.modal-dialog.modal-lg div.modal-content div.modal-header > button.btn-close').click()
        cy.get(2000)
        //export button
        cy.xpath("//body/div[@id='mainContainer']/main[1]/div[7]/div[1]/div[3]/div[3]/button[1]/i[1]").click()
    })

   

})
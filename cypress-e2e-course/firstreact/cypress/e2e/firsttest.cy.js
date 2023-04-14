// Ths is my first test

describe("Test orangehrm landing page", () => {
    
    it("check the oranehrm landing page title - positive", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })



    it("check the oranehrm landing page title - negative", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRMS')
    })

})
describe('Testing About page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('visits About page from Home page', () => {
        cy.get('#nav').contains('About').click()
        cy.url().should('include', '/about')
    })

    it('check "About page" and "Tymur Pankov" text', () => {
        cy.get('#nav').contains('About').click()
        cy.url().should('include', '/about')
        cy.contains('h1', 'About page')
        cy.contains('h2', 'Pankov Tymur')
    })
})
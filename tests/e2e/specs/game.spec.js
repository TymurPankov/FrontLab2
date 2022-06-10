describe('Game page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav').contains('Login').click()
        cy.url().should('include', '/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button').contains('Login').click()
        cy.get('#nav').contains('Tic-Tac-Toe').click()
        cy.url().should('contain', '/game')
    })

    it('pve mode', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('label').contains('pve').click()
        cy.get('button').contains('Start').click()
        cy.contains('button', 'Start').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Choosed mode: pve')
        });
    })
    it('pvp mode', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('label').contains('pvp').click()
        cy.get('button').contains('Start').click()
        cy.contains('button', 'Start').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Choosed mode: pvp')
        });
    })
})
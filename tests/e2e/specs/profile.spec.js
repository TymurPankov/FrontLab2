describe('Profile page test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav').contains('Login').click()
        cy.url().should('include', '/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button').contains('Login').click()
        cy.get('#nav').contains('Profile').click()
        cy.url().should('contain', '/profile')
    })

    it('empty email', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fill all gaps')
        });
    })

    it('empty username', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fill all gaps')
        });
    })

    it('empty name', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="name"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fill all gaps')
        });
    })

    it('empty date', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="date"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fill all gaps')
        });
    })

    it('empty password', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="password"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fill all gaps')
        });
    })

    it('successfull update', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').clear();
        cy.get('input[name="username"]').clear();
        cy.get('input[name="name"]').clear();
        cy.get('input[name="date"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('input[name="email"]').type('tim@tim.com');
        cy.get('input[name="username"]').type('tim');
        cy.get('input[name="name"]').type('Tim');
        cy.get('input[name="date"]').type('2000-08-14');
        cy.get('input[name="password"]').type('password');
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Profile info updated')
        });
    })
})
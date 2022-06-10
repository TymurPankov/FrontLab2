describe('Login page test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav').contains('Login').click()
        cy.url().should('include', '/login')
    })
    it('empty username', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').should('contain', '');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fields can`t be null')
        });
        cy.url().should('contain', '/login');
    })

    it('empty password', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="password"]').type('user');
        cy.get('input[name="password"]').should('contain', '');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Fields can`t be null')
        });
        cy.url().should('contain', '/login');
    })

    it('wrong username', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').type('user');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Didn`t find user with \'${user.username}\' username')
        });
    })

    it('wrong password', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Wrong password')
        });
    })

    it('successful login', () => {
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/');
    })
})
describe('Registration page test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav').contains('Registration').click()
        cy.url().should('include', '/reg')
    })

    it('empty email', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="name"]').type('Pan');
        cy.get('input[name="username"]').type('pan');
        cy.get('input[name="date"]').type('1998-12-31');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Noone line can`t be null')
        });
        cy.url().should('contain', '/reg');
    })
    it('empty name', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').type('pan@pan.com');
        cy.get('input[name="username"]').type('pan');
        cy.get('input[name="date"]').type('1998-12-31');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Noone line can`t be null')
        });
        cy.url().should('contain', '/reg');
    })
    it('empty username', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').type('pan@pan.com');
        cy.get('input[name="name"]').type('Pan');
        cy.get('input[name="date"]').type('1998-12-31');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Noone line can`t be null')
        });
        cy.url().should('contain', '/reg');
    })
    it('empty date', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').type('pan@pan.com');
        cy.get('input[name="name"]').type('Pan');
        cy.get('input[name="username"]').type('pan');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Noone line can`t be null')
        });
        cy.url().should('contain', '/reg');
    })
    it('empty password', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').type('pan@pan.com');
        cy.get('input[name="name"]').type('Pan');
        cy.get('input[name="username"]').type('pan');
        cy.get('input[name="date"]').type('1998-12-31');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Noone line can`t be null')
        });
        cy.url().should('contain', '/reg');
    })

    it('succefull registration', () => {
        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="email"]').type('pan@pan.com');
        cy.get('input[name="name"]').type('Pan');
        cy.get('input[name="username"]').type('pan');
        cy.get('input[name="date"]').type('1998-12-31');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="passwordConfirm"]').type('pass');

        cy.get('button').contains('Register').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Successfull registration')
        });
        cy.url().should('contain', '/login');
    })
})
describe('login', () => {
    it('should accept ToF', () => {
        cy.visit('localhost:5000/auth/login');
        cy.get('input[name="username"]').type('ToF');
        cy.get('input[name="password"]').type('cooper');
        cy.get('input[type="submit"]').click();
        cy.contains('Posts').should('be.visible');
    })
})

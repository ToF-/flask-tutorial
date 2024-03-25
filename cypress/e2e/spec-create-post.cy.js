describe('create post', () => {
    afterEach( () => {
        cy.task('deletePost', 'A new Post');
    });

    it('should create a post for ToF', () => {
        cy.visit('localhost:5000/auth/login');
        cy.get('input[name="username"]').type('ToF');
        cy.get('input[name="password"]').type('cooper');
        cy.get('input[type="submit"]').click();
        cy.contains('Posts').should('be.visible');
        cy.contains('New').click();
        cy.contains('New Post').should('be.visible');
        cy.get('input[name="title"]').type('A new Post');
        cy.get('textarea[name="body"]').type('This is the content of the new post.');
        cy.get('input[type="submit"]').click();
        cy.contains('Posts');
        cy.contains('h1','A new Post').should('exist');


    })
})

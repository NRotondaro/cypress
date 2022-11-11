describe('Scroll on the Page', () => {
	it('should scroll down and up on the page', () => {
		cy.visit('https://docs.cypress.io/');
		cy.wait(5000);
		cy.get('a[href*="https://www.cypress.io/about"]').scrollIntoView();
		cy.wait(5000);
		cy.get('.main-content-header').scrollIntoView();
	});
});

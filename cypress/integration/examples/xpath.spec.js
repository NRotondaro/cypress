describe('Xpaths  with Cypress Example', () => {
	before(function () {
		cy.visit('https://docs.cypress.io/');
	});

	it('should verify if the element is visible using xpath', () => {
		cy.xpath('//h2[@id="In-a-nutshell"]').should('be.visible');
	});

	it('should display main content', () => {
		cy.xpath('//div[@class="main-content-header"]').should('be.visible');
	});
});

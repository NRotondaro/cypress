describe.skip('Browser Actions', () => {
	it('should load correct url', () => {
		cy.visit('http://example.com/', { timeout: 1500 });
	});

	it('should check correct url', () => {
		cy.url().should('include', 'example.com');
	});

	it('should wait for 3 seconds', () => {
		cy.wait(3000);
	});

	it('should pause the execution', () => {
		cy.pause();
	});

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});

describe('Books to scrape', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
		cy.url().should('include', 'index.html');
		cy.log('Before Reload');
		cy.reload();
		cy.log('After Reload');
	});

	it('should click on Travel category', () => {
		cy.get('a').contains('Travel').click();
		cy.get('h1').contains('Travel');
	});

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11);
	});

	it('should click on poetry category', () => {
		cy.get('a').contains('Poetry').click();
	});

	it('should click on Olio book detail', () => {
		cy.get('a').contains('Olio').click();
	});

	it('should have correct price tag', () => {
		cy.get('.price_color').should('contain', 23.88);
	});
});

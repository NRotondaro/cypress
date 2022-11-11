describe('Screenshots', () => {
	it('full page screenshot', () => {
		cy.visit('https://quantic.edu');
		cy.screenshot({ capture: 'fullPage' });
	});

	it('single element screenshot', () => {
		cy.get('header').screenshot();
	});
});

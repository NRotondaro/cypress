describe('keyboard press simulation', () => {
	it('should submit serachbox with pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#searchTerm').type('just some text {enter}');
	});
});

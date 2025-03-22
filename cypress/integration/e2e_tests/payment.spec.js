describe('Payment Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#signin_button').click();
		cy.fixture('user').then((user) => {
			const username = user.id;
			const password = user.pwd;
			cy.login(username, password);
		});
	});

	it('should send new payment (fake)', () => {
		cy.get('#pay_bills_tab').click();
		cy.contains('Pay Saved Payee').click();
		cy.get('#sp_payee').select('wellsFargo');
		cy.get('#sp_account').select('Credit Card');
		cy.get('#sp_amout').type('2000');
		cy.get('#sp_date').type('2022-11-14 {enter}');
		cy.get('#sp_description').type('just a description');
		cy.get('#pay_saved_payees').click();
	});

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted');
	});

	it('should send new payment (fake)', () => {});

	it('should send new payment (fake)', () => {});

	it('should send new payment (fake)', () => {});
});

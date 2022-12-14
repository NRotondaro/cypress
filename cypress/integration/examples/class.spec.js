class BasePage {
	static loadHomePage() {
		cy.visit('https://docs.cypress.io/');
	}

	static wait(number) {
		cy.wait(number);
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('a[href*="https://www.cypress.io/about"]').scrollIntoView();
	}

	static scrollToTop() {
		cy.get('.main-content-header').scrollIntoView();
	}
}

describe('Abstraction with classes', () => {
	before(function () {
		// reuns before all tests inside describe
		// setup test data or test context
		// seed or reset the database
		HomePage.loadHomePage();
	});

	after(function () {
		// runs after all tests inside describe block are done
		// test clean up
		// clean cookies or localStorage
	});

	beforeEach(function () {
		// runs before each it block in the describe
	});

	afterEach(function () {
		// runs after each it block in the describe
	});

	it.skip('1st IT', () => {
		HomePage.scrollToBottom();
		HomePage.wait(5000);
		HomePage.scrollToTop();
		HomePage.wait(3000);
		HomePage.scrollToBottom();
	});

	it.only('2nd IT', () => {
		HomePage.scrollToBottom();
		HomePage.wait(5000);
		HomePage.scrollToTop();
		HomePage.wait(3000);
		HomePage.scrollToBottom();
	});
});

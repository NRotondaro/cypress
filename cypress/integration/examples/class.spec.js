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
	it('should scroll down and up on the page', () => {
		HomePage.loadHomePage();
		HomePage.scrollToBottom();
		HomePage.wait(5000);
		HomePage.scrollToTop();
		HomePage.wait(3000);
		HomePage.scrollToBottom();
	});
});

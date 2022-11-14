describe('Demo Test', () => {
  it('Should login into an application', () => {
    cy.visitLoginpage();
    cy.fixture('loginData').then(({ username, password }) => {
      cy.login(username, password);
    });
  });
});

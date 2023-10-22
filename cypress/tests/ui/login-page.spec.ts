describe("User Sign-up and Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("authorized user can login", () => {
    cy.location("pathname").should("equal", "/signin");
    cy.getBySel("signin-username").type("Tavares_Barrows");
    cy.getBySel("signin-password").type("s3cret");
    cy.getBySel("signin-submit").click();
    cy.getBySel("sidenav-user-full-name").invoke('text').should('eq', 'Arely K')
  });

  it.only("clearing username text triggers validation warning", () => {
    cy.getBySel("signin-username").type("Tavares_Barrows");
    cy.focused().clear();
    cy.get('body').click(0,0);
    cy.get('#username-helper-text').invoke('text').should('eq', 'Username is required')
  });
});

describe("User Sign-up and Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("user can add a new transaction", () => {
    //login
    cy.getBySel("signin-username").type("Katharina_Bernier");
    cy.getBySel("signin-password").type("s3cret");
    cy.getBySel("signin-submit").click();
    //new transaction
    cy.getBySel("nav-top-new-transaction").click();
    cy.location("pathname").should("equal", "/transaction/new");
    //add contact
    cy.getBySel("user-list-item-qywYp6hS0U").click();
    //fill out form
    cy.getBySel("transaction-create-amount-input").type("$1.00");
    cy.getBySel("transaction-create-description-input").type("Test transaction");
    cy.getBySel("transaction-create-submit-payment").click();
    // Assert success
    cy.get('h2').contains('Paid $1.00 for Test transaction');
    //this needs data clean up if possible
    //cy.getBySel("sidenav-user-balance").should("eq", "$1,679.37")
    cy.getBySel("new-transaction-return-to-transactions").click();
    cy.getBySel("transaction-list").should("exist");
  });
});
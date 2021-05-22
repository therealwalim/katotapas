context("Login into our app", () => {
    it("login", () => {
        cy.visit("/Login");
        cy.get("#email").type("sbanks@wwe.net");
        cy.get("#password").type("12345678");
        cy.get("#submitButton").click();
    })
})
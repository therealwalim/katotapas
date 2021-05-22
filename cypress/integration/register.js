context("Register into our app", () => {
    it("register", () => {
        cy.visit("/Register");
        cy.get("#name").type("walimtest273873873");
        cy.get("#email").type("walimtest273873873@wwe.net");
        cy.get("#password").type("12345678");
        cy.get("#submitButton").click();
    })
})
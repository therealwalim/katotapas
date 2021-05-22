describe("Rendering the homepage", () => {
    it("Renders correctly", () => {
        cy.visit("/Home");
        cy.get(".contain").should("exist");
    })
})
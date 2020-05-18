/// <reference types="cypress" />

it("should change to architecture grid when selected", () => {
  cy.visit("http://localhost:3000");
  cy.contains("Work").click();
  cy.contains("Illustration").click();
  cy.contains("Photography").click();
  cy.contains("Architecture").click();
  cy.get("[data-testid=1]").click();
});
export default undefined;

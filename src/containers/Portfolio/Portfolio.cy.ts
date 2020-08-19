/// <reference types="cypress" />
/// <reference types="cypress-plugin-snapshots" />

it("should display a modal with subimages when an image is selected", () => {
  cy.visit("http://localhost:3000/en");

  // Wait out the loading animation on first load
  cy.wait(5000);
  cy.get("[data-testid=loader]").should("not.be.visible");

  cy.get("[data-testid=portfolio-image]").first().click();

  // TODO: Wait until image load
  cy.get("[data-testid=modal-image]").should("be.visible");
  cy.get("[data-testid=portfolio]").toMatchImageSnapshot();
});

it("should display a modal with subimages when an image is selected on iphone 6", () => {
  cy.viewport("iphone-6");
  cy.visit("http://localhost:3000/en");

  cy.get("[data-testid=loader]").should("not.be.visible");

  cy.get("[data-testid=portfolio-image]").first().click();

  cy.get("[data-testid=modal-image]").should("be.visible");
  cy.get("[data-testid=portfolio]").toMatchImageSnapshot();
});

export default undefined;

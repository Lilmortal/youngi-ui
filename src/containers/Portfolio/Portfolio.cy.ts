/// <reference types="cypress" />
/// <reference types="cypress-plugin-snapshots" />

it("should display a modal with subimages when an image is selected", () => {
  cy.visit("http://localhost:3000/en");

  // TODO: To wait out the loading animation on first load, this is considered an anti-pattern, look into it...
  cy.wait(5000);
  cy.get("[data-testid=loader").should("not.be.visible");

  cy.get('[data-image-name="dog.jpeg"]').click();

  cy.get('img[alt="fish.jpeg"]').should("be.visible");
  cy.get("[data-testid=portfolio").toMatchImageSnapshot();
});

it("should display a modal with subimages when an image is selected on iphone 6", () => {
  cy.viewport("iphone-6");
  cy.visit("http://localhost:3000/en");

  cy.get("[data-testid=loader").should("not.be.visible");

  cy.get('[data-image-name="dog.jpeg"]').click();

  cy.get('img[alt="fish.jpeg"]').should("be.visible");
  cy.get("[data-testid=portfolio").toMatchImageSnapshot();
});

export default undefined;

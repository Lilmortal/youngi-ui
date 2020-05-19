/// <reference types="cypress" />

it("should select architecture category and display a modal when an image is selected", () => {
  cy.visit("http://localhost:3000/works");
  cy.contains("Architecture").click();
  cy.get("[data-testid=1]").click();

  cy.get("[data-testid=imageDescription").should(
    "have.text",
    "test ttest test"
  );
  cy.get("[data-testid=works").toMatchImageSnapshot({
    threshold: 0.001,
  });
});
export default undefined;

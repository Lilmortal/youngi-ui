import React, { Dispatch, SetStateAction } from "react";
import { PortfolioWithoutNav } from "./Portfolio";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { mockPortfolioCmsResponse } from "./mock-data/data";

import { PortfolioProps } from "./Portfolio.types";
import MockRouter from "../../commons/Link/MockRouter";

const defaultProps: PortfolioProps = {
  ...mockPortfolioCmsResponse,
};

const renderPortfolioPage = (
  props?: Partial<PortfolioProps>,
  query: { category?: string } = {}
): RenderResult =>
  render(
    <MockRouter value={{ query }}>
      <div id="modal" />
      <PortfolioWithoutNav {...defaultProps} {...props} />
    </MockRouter>
  );

jest.mock("./Loader/useLoader", () => (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => [false, jest.fn()]);

describe("portfolio", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display all images when it is not filtered", () => {
    const { getAllByRole } = renderPortfolioPage({});

    const images = getAllByRole("button");
    expect(images[0].getAttribute("data-image-name")).toEqual(
      "architecture image"
    );
    expect(images[1].getAttribute("data-image-name")).toEqual(
      "photography image"
    );
    expect(images[2].getAttribute("data-image-name")).toEqual(
      "illustration image"
    );
  });

  it("should display photography images", () => {
    const { getByRole } = renderPortfolioPage({}, { category: "photography" });
    expect(getByRole("button").getAttribute("data-image-name")).toEqual(
      "photography image"
    );
  });

  it("should display illustration images", () => {
    const { getByRole } = renderPortfolioPage({}, { category: "illustration" });
    expect(getByRole("button").getAttribute("data-image-name")).toEqual(
      "illustration image"
    );
  });

  it("should display photography sub images when main image is clicked", () => {
    const { getAllByAltText, getByRole } = renderPortfolioPage(
      {},
      { category: "photography" }
    );

    fireEvent.click(getByRole("button"));

    expect(getAllByAltText("photography alt text")).toHaveLength(6);
  });

  it("should display illustration sub images when main image is clicked", () => {
    const { getAllByAltText, getByRole } = renderPortfolioPage(
      {},
      { category: "illustration" }
    );

    fireEvent.click(getByRole("button"));

    expect(getAllByAltText("illustration alt text")).toHaveLength(6);
  });
});

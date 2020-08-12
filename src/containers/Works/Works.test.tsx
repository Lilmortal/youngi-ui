import React, { Dispatch, SetStateAction } from "react";
import { WorksWithoutNav } from "./Works";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { mockWorksCmsResponse } from "./mock-data/data";

import { WorkProps } from "./Works.types";
import MockRouter from "../../commons/Link/MockRouter";

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
};

const renderWorksPage = (
  props?: Partial<WorkProps>,
  query: { works?: string } = {}
): RenderResult =>
  render(
    <MockRouter value={{ query }}>
      <WorksWithoutNav {...defaultProps} {...props} />
    </MockRouter>
  );

jest.mock("./Loader/useLoader", () => (): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => [false, jest.fn()]);

describe("works", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display all images when it is not filtered", () => {
    const { getAllByRole } = renderWorksPage({});

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
    const { getByRole } = renderWorksPage({}, { works: "photography" });
    expect(getByRole("button").getAttribute("data-image-name")).toEqual(
      "photography image"
    );
  });

  it("should display illustration images", () => {
    const { getByRole } = renderWorksPage({}, { works: "illustration" });
    expect(getByRole("button").getAttribute("data-image-name")).toEqual(
      "illustration image"
    );
  });

  it("should display photography sub images when main image is clicked", () => {
    const { getAllByAltText, getByRole } = renderWorksPage(
      {},
      { works: "photography" }
    );

    fireEvent.click(getByRole("button"));

    expect(getAllByAltText("photography alt text")).toHaveLength(6);
  });

  it("should display illustration sub images when main image is clicked", () => {
    const { getAllByAltText, getByRole } = renderWorksPage(
      {},
      { works: "illustration" }
    );

    fireEvent.click(getByRole("button"));

    expect(getAllByAltText("illustration alt text")).toHaveLength(6);
  });
});

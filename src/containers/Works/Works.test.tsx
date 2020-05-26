import React from "react";
import Works from "./Works";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
  Matcher,
  SelectorMatcherOptions,
  MatcherOptions,
  act,
} from "@testing-library/react";
import { mockSidebar } from "../../commons/Sidebar/mock-sidebar";
import { mockWorksCmsResponse } from "./mock-data/data";

import styles from "./Work.module.scss";
import { WorkProps, ImageModalResponse } from "./Works.types";

interface FakeApiResponse<T = object> {
  json?(): Promise<T>;
  ok: boolean;
}

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
  sidebarProps: { ...mockSidebar },
};

const renderWorksPage = (props?: Partial<WorkProps>): RenderResult =>
  render(<Works {...defaultProps} {...props} />);

const setupMockedImageModalApiCalls = <T extends FakeApiResponse>(
  mockImageModalResponse: ImageModalResponse,
  mockOverrides?: T
): jest.SpyInstance<
  Promise<Response>,
  [RequestInfo, (RequestInit | undefined)?]
> =>
  jest.spyOn(window, "fetch").mockImplementationOnce(
    () =>
      Promise.resolve({
        json: () => Promise.resolve(mockImageModalResponse),
        ok: true,
        ...mockOverrides,
      }) as Promise<Response>
  );

const clickOnArchitectureNavigation = (
  getByText: (
    text: Matcher,
    options?: SelectorMatcherOptions | undefined,
    waitForElementOptions?: unknown
  ) => HTMLElement,
  getByTestId: (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown
  ) => HTMLElement
): void => {
  const architectureNavigation = getByText("Architecture");

  fireEvent.click(architectureNavigation);

  const architectureImage = getByTestId("3");

  fireEvent.click(architectureImage);
};

describe("works", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not render photography works when illustration is selected", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");

    fireEvent.click(illustrationNavigation);

    expect(getByTestId("portfolioImages")).not.toHaveClass(styles.photography);
  });

  /* TODO: This is a really flaky test relying on class names...
       Identity-obj-proxy unfortunately, returns `undefined` as the BEM "Block"
       because it only calculates this classname on the fly when this test runs.
    */
  it("should render photography works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const photographyNavigation = getByText("Photography");

    fireEvent.click(photographyNavigation);

    expect(getByTestId("portfolioImages")).toHaveClass(
      "undefined__photography"
    );
  });

  it("should render illustration works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");

    fireEvent.click(illustrationNavigation);

    expect(getByTestId("portfolioImages")).toHaveClass(
      "undefined__illustration"
    );
  });

  it("should render architecture works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const architectureNavigation = getByText("Architecture");

    fireEvent.click(architectureNavigation);

    expect(getByTestId("portfolioImages")).toHaveClass(
      "undefined__architecture"
    );
  });

  it("should not highlight architecture navigation if not selected", () => {
    const { getByText } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");
    const architectureNavigation = getByText("Architecture");

    fireEvent.click(illustrationNavigation);

    expect(architectureNavigation).not.toHaveClass(
      styles["undefined__sidebarCategory--selected"]
    );
  });

  it("should highlight the selected architecture navigation", () => {
    const { getByText } = renderWorksPage();

    const architectureNavigation = getByText("Architecture");

    fireEvent.click(architectureNavigation);

    expect(architectureNavigation).toHaveClass(
      styles["undefined__sidebarCategory--selected"]
    );
  });

  it("should display an architecture modal when an architecture image is selected", async () => {
    setupMockedImageModalApiCalls({});
    const { getByText, getByTestId } = renderWorksPage();

    clickOnArchitectureNavigation(getByText, getByTestId);

    expect(getByTestId("overlay")).toBeInTheDocument();

    // We are going to test image modal descriptions further down...
    await act(() => Promise.resolve());
  });

  it("should render modal with image description after API response returned", async () => {
    const mockedFetch = setupMockedImageModalApiCalls({
      description: "description",
    });
    const { getByText, getByTestId, queryByText } = renderWorksPage();

    expect(queryByText("description")).not.toBeInTheDocument();

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(0));

    clickOnArchitectureNavigation(getByText, getByTestId);

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));

    expect(queryByText("description")).toBeInTheDocument();
    expect(
      queryByText("Failed to load image modal data. -", { exact: false })
    ).not.toBeInTheDocument();
  });

  it("should display an error message if API failed", async () => {
    const mockedFetch = setupMockedImageModalApiCalls({}, { ok: false });
    const { getByText, getByTestId, queryByText } = renderWorksPage();

    expect(queryByText("description")).not.toBeInTheDocument();

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(0));

    clickOnArchitectureNavigation(getByText, getByTestId);

    expect(
      queryByText("Failed to load image modal data. -", { exact: false })
    ).not.toBeInTheDocument();

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));

    expect(
      queryByText("Failed to load image modal data. -", { exact: false })
    ).toBeInTheDocument();
  });

  it("should display an error message if API does not return a description", async () => {
    const mockedFetch = setupMockedImageModalApiCalls({});
    const { getByText, getByTestId, queryByText } = renderWorksPage();

    expect(queryByText("description")).not.toBeInTheDocument();

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(0));

    expect(
      queryByText("Failed to load image modal data. -", { exact: false })
    ).not.toBeInTheDocument();

    clickOnArchitectureNavigation(getByText, getByTestId);

    await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));

    expect(
      queryByText("No description found for ", { exact: false })
    ).toBeInTheDocument();
  });
});

import React from "react";
import Works from "./Works";
import {
  render,
  RenderResult,
  fireEvent,
  Matcher,
  SelectorMatcherOptions,
  MatcherOptions,
  act,
} from "@testing-library/react";
import { mockSidebar } from "../../commons/Sidebar/mock-sidebar";
import { mockWorksCmsResponse } from "./mock-data/data";

import styles from "./Work.module.scss";
import { WorkProps } from "./Works.types";
import IntlProvider from "../../commons/intl/IntlProvider";

interface FakeApiResponse<T = object> {
  json?(): Promise<T>;
  ok: boolean;
}

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
  sidebarProps: { ...mockSidebar },
};

const renderWorksPage = (props?: Partial<WorkProps>): RenderResult =>
  render(
    <IntlProvider
      locale="en"
      setLocale={jest.fn()}
      messages={{}}
      setMessages={jest.fn()}
    >
      <Works {...defaultProps} {...props} />
    </IntlProvider>
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

  const architectureImage = getByTestId("1");

  fireEvent.click(architectureImage);
};

jest.mock("next/dist/client/router", () => ({
  useRouter(): object {
    return {
      asPath: "",
      replace: (): void => undefined,
      query: "",
    };
  },
}));

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

  // it("should highlight the selected architecture navigation", () => {
  //   const { getByText } = renderWorksPage();

  //   const architectureNavigation = getByText("Architecture");

  //   fireEvent.click(architectureNavigation);

  //   expect(architectureNavigation).toHaveClass(
  //     styles["undefined__sidebarCategory--selected"]
  //   );
  // });

  it("should display an architecture modal when an architecture image is selected", async () => {
    const { getByText, getByTestId } = renderWorksPage();

    clickOnArchitectureNavigation(getByText, getByTestId);

    expect(getByTestId("overlay")).toBeInTheDocument();

    // We are going to test image modal descriptions further down...
    await act(() => Promise.resolve());
  });
});

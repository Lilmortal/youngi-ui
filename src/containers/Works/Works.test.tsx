import React from "react";
import Works from "./Works";
import {
  render,
  RenderResult,
  // fireEvent,
  // Matcher,
  // SelectorMatcherOptions,
  // MatcherOptions,
  // act,
} from "@testing-library/react";
import { mockWorksCmsResponse } from "./mock-data/data";

import { WorkProps } from "./Works.types";
import IntlProvider from "../../commons/intl/IntlProvider";

interface FakeApiResponse<T = object> {
  json?(): Promise<T>;
  ok: boolean;
}

const defaultProps: WorkProps = {
  ...mockWorksCmsResponse,
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

  it("should display all images when it is not filtered", () => {
    const { getAllByRole } = renderWorksPage();

    expect(getAllByRole("button")).toHaveLength(3);
  });

  it("should display photography images", () => {
    // TODO: Figure out how to mock such that it returns photography query
    // jest.mock("next/dist/client/router", () => ({
    //   useRouter(): object {
    //     return {
    //       asPath: "",
    //       replace: (): void => undefined,
    //       query: { works: "photography" },
    //     };
    //   },
    // }));
    // const { getAllByRole } = renderWorksPage();
    // expect(getAllByRole("button")).toHaveLength(1);
  });

  // it("should display illustration images", () => {
  //   const { getByText, getByTestId } = renderWorksPage();

  //   const illustrationNavigation = getByText("Illustration");

  //   fireEvent.click(illustrationNavigation);

  //   expect(getByTestId("portfolioImages")).toHaveClass(
  //     "undefined__illustration"
  //   );
  // });

  // it("should not display illustration images when filtered by photography", () => {
  //   const { getByText, getByTestId } = renderWorksPage();

  //   const architectureNavigation = getByText("Architecture");

  //   fireEvent.click(architectureNavigation);

  //   expect(getByTestId("portfolioImages")).toHaveClass(
  //     "undefined__architecture"
  //   );
  // });

  // it("should not highlight architecture navigation if not selected", () => {
  //   const { getByText } = renderWorksPage();

  //   const illustrationNavigation = getByText("Illustration");
  //   const architectureNavigation = getByText("Architecture");

  //   fireEvent.click(illustrationNavigation);

  //   expect(architectureNavigation).not.toHaveClass(
  //     styles["undefined__sidebarCategory--selected"]
  //   );
  // });

  // it("should display an architecture modal when an architecture image is selected", async () => {
  //   const { getByText, getByTestId } = renderWorksPage();

  //   clickOnArchitectureNavigation(getByText, getByTestId);

  //   expect(getByTestId("overlay")).toBeInTheDocument();

  //   // We are going to test image modal descriptions further down...
  //   await act(() => Promise.resolve());
  // });
});

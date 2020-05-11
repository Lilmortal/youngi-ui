import React from "react";
import Works, { WorkProps } from "./Works";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import { mockSidebar } from "../../components/SideBar/mock-sidebar";

import styles from "./Work.module.scss";

const defaultProps: WorkProps = {
  categories: [
    {
      name: "Photography",
    },
    { name: "Illustration" },
    { name: "Architecture" },
  ],
  images: [
    {
      id: 1,
      layoutId: 1,
      image: "/download.jpg",
      name: "Photography 1",
      type: "Photography",
    },
    {
      id: 2,
      layoutId: 1,
      image: "/download.jpg",
      name: "Illustration 1",
      type: "Illustration",
    },
    {
      id: 3,
      layoutId: 1,
      image: "/download.jpg",
      name: "Architecture 1",
      type: "Architecture",
    },
  ],
  ...mockSidebar,
};

const renderWorksPage = (props?: Partial<WorkProps>): RenderResult =>
  render(<Works {...defaultProps} {...props} />);

describe("works", () => {
  it("should not render photography works when illustration is selected", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");

    fireEvent.click(illustrationNavigation);

    expect(getByTestId("images")).not.toHaveClass(styles.photography);
  });

  it("should render photography works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const photographyNavigation = getByText("Photography");

    fireEvent.click(photographyNavigation);

    expect(getByTestId("images")).toHaveClass(styles.photography);
  });

  it("should render illustration works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");

    fireEvent.click(illustrationNavigation);

    expect(getByTestId("images")).toHaveClass(styles.illustration);
  });

  it("should render architecture works", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const architectureNavigation = getByText("Architecture");

    fireEvent.click(architectureNavigation);

    expect(getByTestId("images")).toHaveClass(styles.architecture);
  });

  // TODO: Flaky to rely on class names
  it("should not highlight architecture navigation if not selected", () => {
    const { getByText } = renderWorksPage();

    const illustrationNavigation = getByText("Illustration");
    const architectureNavigation = getByText("Architecture");

    fireEvent.click(illustrationNavigation);

    expect(architectureNavigation).not.toHaveClass(
      styles["sidebarCategory--selected"]
    );
  });

  it("should highlight the selected architecture navigation", () => {
    const { getByText } = renderWorksPage();

    const architectureNavigation = getByText("Architecture");

    fireEvent.click(architectureNavigation);

    expect(architectureNavigation).toHaveClass(
      styles["sidebarCategory--selected"]
    );
  });

  it("should display an architecture modal when an architecture image is selected", () => {
    const { getByText, getByTestId } = renderWorksPage();

    const architectureNavigation = getByText("Architecture");

    fireEvent.click(architectureNavigation);

    const architectureImage = getByTestId("3");

    fireEvent.click(architectureImage);

    expect(getByTestId("overlay")).toBeInTheDocument();
  });
});

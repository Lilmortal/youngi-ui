import { PortfolioCategoryResponse } from "../../containers/Portfolio";

export interface NavResponse {
  url: string;
  name: string;
}

export interface NavProps {
  navResponse: NavResponse[];
  portfolioCategoriesResponse: PortfolioCategoryResponse[];
  contactResponse: ContactResponse[];
}

export interface ContactResponse {
  url: string;
  name: string;
}

export interface LayoutProps {
  displayCopyrightMark?: boolean;
}

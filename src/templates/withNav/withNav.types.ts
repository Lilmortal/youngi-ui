import { PortfolioCategoryResponse } from "../../containers/Works";

export interface NavResponse {
  url: string;
  name: string;
}

export interface NavProps {
  navResponse: NavResponse[];
  portfolioCategoriesResponse: PortfolioCategoryResponse[];
}

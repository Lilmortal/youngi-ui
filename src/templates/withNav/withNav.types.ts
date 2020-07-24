export interface PortfolioCategoryResponse {
  type: string;
}

export interface NavResponse {
  url: string;
  name: string;
}

export interface NavProps {
  navResponse: NavResponse[];
  portfolioCategoriesResponse: PortfolioCategoryResponse[];
}

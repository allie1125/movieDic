interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieAPIRes {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface IPageNumber {
  page: number;
}

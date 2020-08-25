export interface History {
  id: number;
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: Links;
}

export interface Links {
  reddit: null;
  article: string;
  wikipedia: string;
}

export interface HistoryState {
  readonly loading: boolean;
  readonly data: History[];
  readonly errors?: string;
}

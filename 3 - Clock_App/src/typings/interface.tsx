export default {};

export interface QuoteDataProps {
  author: string;
  authorSlug: string;
  content: string;
  dataAdded: string;
  dateModified: string;
  length: number;
  tag: string[];
  _id: string;
}

export interface TimerProps {
  datetime: string;
  abbreviation: string;
  timezone: string;
  day_of_week: number;
  week_number: number;
  day_of_year: number;
}

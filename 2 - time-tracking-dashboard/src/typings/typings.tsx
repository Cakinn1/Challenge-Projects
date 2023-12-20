export interface DataProps {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
  };
}

export interface InputValueProps {
  handleClick: (value: string) => void;
  value: string;
  selected: string;
}

export interface CardProps extends DataProps {
  index: number;
  selected: string;
  timeframes: any;
  dataMatchedToColorAndImage: {
    image: string;
    color: string;
  }[];
}

export interface Props {
  image: string;
  color: string;
}

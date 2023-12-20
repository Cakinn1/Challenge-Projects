interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt:  string;
  score: number;
  replyingTo?: string;
  user?: User;
  replies?: Comment[] | undefined;
}

export interface DataProps {
  currentUser: User;
  comments: Comment[];
}

export interface Props {
  infoData: DataProps
  setInfoData: (value: DataProps) => void

}

export interface InfoProps {
  handleIncreaseDecreaseReplyCounter: (value: number, operation: string, id: number) => void
  infoData: DataProps
  setInfoData: (value: DataProps) => void
  
}

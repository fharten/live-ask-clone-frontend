export interface Question {
  id: string;
  sessionId: string;
  question: string;
  numLikes: number;
  isAnswered: boolean;
  createdAt: string;
}

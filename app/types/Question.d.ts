export interface Question {
  sessionId: string;
  question: string;
  numLikes: number;
  isAnswered: boolean;
  createdAt: string;
  id?: string;
}

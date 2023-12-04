export interface GetCards {
  cards: RootObjectCards[];
  packUserId: string;
  packName: string;
  packPrivate: boolean;
  packCreated: string;
  packUpdated: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
}

export interface RootObjectCards {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  comments: string;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
}

// ...
export type CardGradeType = 0 | 1 | 2 | 3 | 4 | 5;

export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  comments: string;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
};

// response
export type FetchCardsResponseType = {
  cards: CardType[];
  packUserId: string;
  packName: string;
  packPrivate: boolean;
  packCreated: string;
  packUpdated: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
};

export type AddCardResponseType = {
  newCard: CardType;
  token: string;
  tokenDeathTime: number;
};
export type ArgGetCardsType = {
  packId: string;
  page?: number;
  pageCount?: number;
};
export type DeleteCardResponseType = {
  deletedCard: CardType;
  token: string;
  tokenDeathTime: number;
};
// ❗Явное дублирование типов
// Просто создаем родительский тип и в дочерних убираем ненужные свойства 🤘

export type CreateUpdateCardType = {
  _id: string;
  cardsPack_id: string;
  question?: string;
  answer?: string;
  grade?: CardGradeType;
  shots?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};

export type ArgCreateCardType = Omit<CreateUpdateCardType, "_id">;
export type ArgUpdateCardType = Omit<CreateUpdateCardType, "cardsPack_id">;
type ErrorDataType = {
  error: string;
  errorObject: Object;
  in: string;
  info: string;
};

export type CustomerError = {
  data: ErrorDataType;
  status: number;
};

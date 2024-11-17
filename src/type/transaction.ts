export type TTransaction = {
  id: number;
  amount: number;
  description: string;
  create_time: string;
  category_id: number;
  name: string;
  icon: string;
};

export type AddExpense = {
  amount: number;
  description: string;
  // date: string;
  category_id: number;
};

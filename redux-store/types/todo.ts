export interface ITodoState {
  id: number;
  title: string;
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

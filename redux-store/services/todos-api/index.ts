import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrlJPH } from 'redux-store/helpers';
import { ITodoState } from 'redux-store/types/todo';

/* export const todosAPI = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlJPH }),
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodoState[], number>({
      query: (limit = 10, page = 1) => ({
        url: '/todos',
        params: { _limit: limit, _page: page }
      })
    })
  })
}); */

export const todosAPI = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlJPH }),
  endpoints: (build) => ({
    getAllTodos: build.query<ITodoState[], { limit: number; page: number }>({
      query: (arg) => {
        const { limit, page } = arg;
        return {
          url: '/todos',
          params: { _limit: limit, _page: page }
        };
      }
    })
  })
});

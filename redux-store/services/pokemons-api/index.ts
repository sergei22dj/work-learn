import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPokemonsState } from 'redux-store/types/pokemon';

export const pokemonsAPI = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: (build) => ({
    getAllCharacters: build.query<IPokemonsState, { limit: number; page: number; id: number }>({
      query: (args) => {
        const { limit, page, id } = args;
        return {
          url: `/pokemon/${id}`,
          params: { _limit: limit, _page: page }
        };
      }
    })
  })
});

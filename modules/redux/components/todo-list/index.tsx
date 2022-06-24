import React from 'react';
// views
import { ButtonWrapper, Header, Pages, PagesItem, Title, TodoWrapper, Wrapper } from './views';
import { Button } from '@md-modules/shared/buttons/gradien-animated-button/views';
// loaders
import LoaderEllepsis from '@md-modules/shared/loaders/elepsis';
import LoaderSpinner from '@md-modules/shared/loaders/spiner';
// RTK query
import { todosAPI } from 'redux-store/services/todos-api';
// slices
import { modalSlice } from 'redux-store/modules/modal/slicer';
import { todoSlice } from 'redux-store/modules/todo/slicer';
// hooks
import { useAppSelector } from '@md-modules/shared/hooks/use-app-selector';
import { useAppDispatch } from '@md-modules/shared/hooks/use-app-dispatch';

const TodoList: React.FC = () => {
  const { page } = useAppSelector((state) => state.todoReducer);
  const { data: todos, isError, isLoading } = todosAPI.useGetAllTodosQuery({ limit: 10, page: page });
  const { openModal } = modalSlice.actions;
  const { setTodoPage } = todoSlice.actions;
  const dispatch = useAppDispatch();

  const pages = [1, 2, 3, 4, 5];

  const Loader = () => {
    return (
      <Header>
        <LoaderEllepsis />
      </Header>
    );
  };

  const Loader2 = () => {
    return (
      <TodoWrapper>
        <LoaderSpinner />
      </TodoWrapper>
    );
  };

  const Error = () => {
    return <Header>Ошибка :( {isError}</Header>;
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={() => dispatch(openModal())}>open modal</Button>
      </ButtonWrapper>

      {isError ? (
        <Error />
      ) : (
        <Wrapper>
          {isLoading ? (
            <Header>
              Loading
              <Loader />
            </Header>
          ) : (
            <Header>TODO LIST</Header>
          )}

          {isLoading ? (
            <Loader2 />
          ) : (
            <TodoWrapper>
              {todos?.map((todo, index) => (
                <Title key={index}>
                  {todo.id}. - {todo.title}
                </Title>
              ))}
            </TodoWrapper>
          )}

          <Pages>
            {pages.map((p, index) => (
              <PagesItem p={p} page={page} onClick={() => dispatch(setTodoPage(p))} key={index}>
                {p}
              </PagesItem>
            ))}
          </Pages>
        </Wrapper>
      )}
    </Wrapper>
  );
};
export default TodoList;

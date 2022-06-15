import React, { useEffect } from 'react';
// hooks
import { useActions } from '@md-modules/redux/hooks/useAction';
import { useTypeSelector } from '@md-modules/redux/hooks/useTypeSelector';
// views
import { ButtonWrapper, Header, Pages, PagesItem, Title, TodoWrapper, Wrapper } from './views';
import LoaderEllepsis from '@md-modules/shared/loaders/elepsis';
import LoaderSpinner from '@md-modules/shared/loaders/spiner';
import { Button } from '@md-modules/shared/buttons/gradien-animated-button/views';

const TodoList: React.FC = () => {
  const { error, loading, todos, page, limit } = useTypeSelector((state) => state.todo);
  const { activeModal } = useTypeSelector((state) => state.modal);
  const { fetchTodos, setTodoPage, setOpenModal, setCloseModal } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

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
    return <Header>Ошибка :( {error}</Header>;
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={() => (activeModal ? setCloseModal(true) : setOpenModal(true))}>
          {activeModal ? <Title>closeModal</Title> : <Title>openModal</Title>}
        </Button>
      </ButtonWrapper>

      {error ? (
        <Error />
      ) : (
        <Wrapper>
          {loading ? (
            <Header>
              Loading
              <Loader />
            </Header>
          ) : (
            <Header>TODO LIST</Header>
          )}

          {loading ? (
            <Loader2 />
          ) : (
            <TodoWrapper>
              {todos.map((todo, index) => (
                <Title key={index}>
                  {todo.id}. - {todo.title}
                </Title>
              ))}
            </TodoWrapper>
          )}

          <Pages>
            {pages.map((p, index) => (
              <PagesItem p={p} page={page} onClick={() => setTodoPage(p)} key={index}>
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

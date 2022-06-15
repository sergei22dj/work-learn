import { Provider } from 'react-redux';
import ModalWUsers from './components/modal-with-users';
import TodoList from './components/todo-list';
import { store } from './redux-store';

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <ModalWUsers />
        <hr />
        <TodoList />
      </Provider>
    </div>
  );
};
export default Redux;

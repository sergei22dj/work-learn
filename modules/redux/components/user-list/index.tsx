import { useActions } from '@md-modules/redux/hooks/useAction';
import { useTypeSelector } from '@md-modules/redux/hooks/useTypeSelector';
import LoaderEllepsis from '@md-modules/shared/loaders/elepsis';
import LoaderSpinner from '@md-modules/shared/loaders/spiner';
import React, { useEffect } from 'react';
import {
  ActionBar,
  ControlItem,
  ControlPanel,
  DeleteButton,
  Description,
  Header,
  Info,
  UserItem,
  UserListWrapper,
  Wrapper
} from './views';

const UserList: React.FC = () => {
  const { loading, users } = useTypeSelector((state) => state.user);
  const { fetchUsers, deleteUser } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <ControlPanel>
        <ControlItem>{loading ? <LoaderEllepsis /> : <div>{users.length}</div>}</ControlItem>
        <ControlItem onClick={() => fetchUsers()}>refresh</ControlItem>
      </ControlPanel>

      <UserListWrapper>
        <Header>Squad</Header>

        <div>
          {loading ? (
            <LoaderSpinner />
          ) : (
            <div>
              {users.map((user, index) => (
                <UserItem key={index}>
                  {index + 1}. - {user.name}
                  <ActionBar>
                    <DeleteButton onClick={() => deleteUser(user.id)}>delete</DeleteButton>
                    <Info>
                      ?
                      <Description>
                        email - {user.email}; <br /> phone - {user.phone}; <br /> city - {user.address.city} <br />{' '}
                        street - {user.address.street};
                      </Description>
                    </Info>
                  </ActionBar>
                </UserItem>
              ))}
            </div>
          )}
        </div>
      </UserListWrapper>
    </Wrapper>
  );
};
export default UserList;

import React, { useEffect, useState } from 'react';
// hooks
// views
import { ControlItem, ControlPanel, Header, Image, Title, UserItem, UserListWrapper, Wrapper } from './views';
import { useAppSelector } from '@md-modules/shared/hooks/use-app-selector';
import { useAppDispatch } from '@md-modules/shared/hooks/use-app-dispatch';
import { fetchPokemons } from 'redux-store/modules/pokemons/action-creator';

const UserList: React.FC = () => {
  const [pokeID, setPokeID] = useState(1);
  const { users } = useAppSelector((state) => state.pokemonsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(pokeID));
  }, [dispatch, pokeID]);

  return (
    <Wrapper>
      <UserListWrapper>
        <Header>CHOOSE YOUR POKEMON</Header>

        <div>
          <div>
            <UserItem>
              <Title>{users.name}</Title>
              <Image src={users.sprites.front_default} />
            </UserItem>
          </div>
        </div>
      </UserListWrapper>
      <ControlPanel>
        <ControlItem disabled={pokeID === 1} onClick={() => setPokeID((prev) => prev - 1)}>
          previous
        </ControlItem>
        <ControlItem onClick={() => setPokeID((prev) => prev + 1)}>next</ControlItem>
      </ControlPanel>
    </Wrapper>
  );
};
export default UserList;

import React, { useEffect, useState } from 'react';
// hooks
// views
import {
  ActionBar,
  ControlItem,
  ControlPanel,
  Description,
  Header,
  Image,
  Info,
  UserItem,
  UserListWrapper,
  Wrapper
} from './views';
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
        <Header>Squad</Header>

        <div>
          <div>
            <UserItem>
              {pokeID} - {users.name}
              <Image src={users.sprites.front_default} />
              <ActionBar>
                <Info>
                  ?
                  <Description>
                    Planet -
                    <br />
                    Profession -
                    <br />
                  </Description>
                </Info>
              </ActionBar>
            </UserItem>
          </div>
        </div>
      </UserListWrapper>
      <ControlPanel>
        <ControlItem disabled={pokeID === 1} onClick={() => setPokeID((prev) => prev - 1)}>
          back
        </ControlItem>
        <ControlItem onClick={() => setPokeID((prev) => prev + 1)}>next</ControlItem>
      </ControlPanel>
    </Wrapper>
  );
};
export default UserList;

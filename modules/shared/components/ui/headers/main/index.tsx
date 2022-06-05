import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { Tab } from '@md-shared/layouts/main';
// constants
import { globalMenuItems } from './constants';
// view components
import { MenuItem } from '@md-ui/menu-items/main';
import TabItem from '@md-ui/headers/main/components/tab-item';
// views
import { IWrapper, RWrapper, TabsWrapper, Wrapper } from './views';

interface Props {
  activeTab?: string;
  childrenTabs?: Tab[];
  setActiveTab: (type: string) => void;
}

const Header: React.FC<Props> = ({ childrenTabs, activeTab, setActiveTab }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <IWrapper>
        <RWrapper>
          {globalMenuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
        </RWrapper>
      </IWrapper>

      {!!childrenTabs?.length && (
        <TabsWrapper>
          {childrenTabs.map((tab) => (
            <TabItem
              id={tab.id}
              key={tab.id}
              title={tab.title}
              onClick={setActiveTab}
              isActive={activeTab === tab.id}
            />
          ))}
        </TabsWrapper>
      )}
    </Wrapper>
  );
};

export { Header };

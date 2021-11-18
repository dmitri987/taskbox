import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { PureInboxScreen } from './InboxScreen';
import { 
  WithPinnedTasks as DefaultTaskList, 
  Loading as LoadingTaskList, 
  Empty as EmptyTaskList 
} from '../TaskList/TaskList.stories';


const fakeStore = (state) => ({
  getState: () => state,
  subscribe: () => {},
  dispatch: action('dispatch'),
});

// const fakeStore = createFakeStore(DefaultTaskList.args.tasks);
// console.log(fakeStore.getState())

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  // decorators: [story => <Provider store={fakeStore}>{story()}</Provider>],
};

// const Template = args => <PureInboxScreen {...args} />;

const Template = (fakeState, error = null) => (
  <Provider store={fakeStore(fakeState)}>
    <PureInboxScreen error={error}/>
  </Provider>
);

export const Default = () => Template({
  tasks: DefaultTaskList.args.tasks,
  loading: false,
});

export const Loading = () => Template({  
  loading: true,
});

export const Empty = () => Template({
  tasks: [],
  loading: false,
});

export const Error = () => Template({}, "No network");
  
import React from 'react';

import TaskList from './TaskList';
import { STATES } from '../Task/Task';
import * as TaskStories from '../Task/Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story) => <div style={{ margin: '2em', }}>{story()}</div>,
  ]
}

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(),
    { id: '7', title: 'Pinned Task 1', state: STATES.TASK_PINNED},
    { id: '8', title: 'Pinned Task 2', state: STATES.TASK_PINNED},
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  loading: false,
}
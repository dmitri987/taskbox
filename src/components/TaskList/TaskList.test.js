import { render, screen, } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from './TaskList.stories';

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks on top of the list', () => {
  const { container } = render(<WithPinnedTasks />);

  console.log(screen.getAllByRole('listitem')[0].innerHTML);
  expect(screen.getAllByRole('listitem')[0].innerHTML).toMatch(/pinned/i);
})
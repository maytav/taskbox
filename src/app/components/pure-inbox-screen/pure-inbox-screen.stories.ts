import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import PureInboxScreenComponent from '@app/components/pure-inbox-screen/pure-inbox-screen.component';
import InboxScreenComponent from '@app/components/inbox-screen/inbox-screen.component';
import {NgxsModule, Store} from '@ngxs/store';
import {importProvidersFrom} from '@angular/core';
import {TasksState} from '@app/components/task/states/task.stat';
import {fireEvent, within} from '@storybook/test';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PureInboxScreenComponent, InboxScreenComponent],
    }),
    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    }),
  ],
};
export default meta;
type Story = StoryObj<PureInboxScreenComponent>;
export const Default: Story = {};
export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    await fireEvent.click(canvas.getByLabelText('pinTask-2'));
  },
};

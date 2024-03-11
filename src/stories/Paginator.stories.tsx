import { Paginator } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

type PaginatorPropsAndCustomArgs = ComponentProps<typeof Paginator> & {
  currentPageArgs: { display: boolean } & ComponentProps<typeof Paginator.CurrentPage>;
  nextPagesArgs: { display: boolean } & ComponentProps<typeof Paginator.NextPages>;
  previousPagesArgs: { display: boolean } & ComponentProps<typeof Paginator.PreviousPages>;
  setToFirstArgs: { display: boolean } & ComponentProps<typeof Paginator.SetToFirst>;
  setToIndexArgs: { display: boolean } & ComponentProps<typeof Paginator.SetToIndex>;
  setToLastArgs: { display: boolean } & ComponentProps<typeof Paginator.SetToLast>;
  setToNextArgs: { display: boolean } & ComponentProps<typeof Paginator.SetToNext>;
  setToPreviousArgs: { display: boolean } & ComponentProps<typeof Paginator.SetToPrevious>;
};

const meta = {
  args: {
    setToFirstArgs: {
      display: true
    },
    setToPreviousArgs: {
      display: true
    },
    previousPagesArgs: {
      display: true
    },
    currentPageArgs: {
      display: true
    },
    nextPagesArgs: {
      display: true
    },
    setToNextArgs: {
      display: true
    },
    setToLastArgs: {
      display: true
    },
  },
  component: Paginator,
  parameters: {
    layout: 'centered'
  },
  title: 'Paginator'
} satisfies Meta<PaginatorPropsAndCustomArgs>;

export default meta;
type Story = StoryObj<Meta<PaginatorPropsAndCustomArgs>>;

export const Primary: Story = {
  render: ({ ...args }) => <Paginator {...args}>
    {args.setToFirstArgs.display && <Paginator.SetToFirst {...args.setToFirstArgs} />}
    {args.setToPreviousArgs.display && <Paginator.SetToPrevious {...args.setToPreviousArgs} />}
    {args.previousPagesArgs.display && <Paginator.PreviousPages {...args.previousPagesArgs} />}
    {args.currentPageArgs.display && <Paginator.CurrentPage {...args.currentPageArgs} />}
    {args.nextPagesArgs.display && <Paginator.NextPages {...args.nextPagesArgs} />}
    {args.setToNextArgs.display && <Paginator.SetToNext {...args.setToNextArgs} />}
    {args.setToLastArgs.display && <Paginator.SetToLast {...args.setToLastArgs} />}
  </Paginator>
};
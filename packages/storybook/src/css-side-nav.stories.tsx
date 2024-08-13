/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/side-nav/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-kernteam/components-css/side-nav/index.scss';
import { SideNavigation } from '../../components-react/src/SideNavigation';

const meta = {
  title: 'CSS Component/Side Nav',
  id: 'css-side-nav',
  component: SideNavigation,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listItems: [
      {
        label: 'Introductie',
        href: '/',
      },
      {
        label: 'Stijl',
        href: '/',
      },
      {
        label: 'Formulieren',
        href: '/',
        children: [
          {
            label: 'Introductie formulieren',
            href: '/',
          },
          {
            label: 'Buttons',
            href: '/',
          },
          {
            label: 'Bevestigingspagina',
            href: '/',
          },
        ],
      },
      {
        label: 'WCAG',
        href: '/',
      },
    ],
  },
};

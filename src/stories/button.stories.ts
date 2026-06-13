import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../../projects/ui/src/lib/components/button/button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },

    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },

    icon: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    ariaLabel: {
      control: 'text',
    },
  },

  args: {
    variant: 'primary',
    type: 'button',
    disabled: false,
    icon: false,
    ariaLabel: 'Botão',
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [variant]="variant"
        [type]="type"
        [icon]="icon"
        [disabled]="disabled"
        [ariaLabel]="ariaLabel">
        Clique aqui
      </mal-button>
    `,
  }),
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [variant]="variant">
        Salvar
      </mal-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [variant]="variant">
        Cancelar
      </mal-button>
    `,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [variant]="variant">
        Excluir
      </mal-button>
    `,
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [variant]="variant">
        Ver detalhes
      </mal-button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [disabled]="disabled">
        Desabilitado
      </mal-button>
    `,
  }),
};

export const IconButton: Story = {
  args: {
    icon: true,
    ariaLabel: 'Adicionar',
  },

  render: (args) => ({
    props: args,
    template: `
      <mal-button
        [icon]="icon"
        [ariaLabel]="ariaLabel">
        +
      </mal-button>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <mal-button variant="primary">
          Primary
        </mal-button>

        <mal-button variant="secondary">
          Secondary
        </mal-button>

        <mal-button variant="danger">
          Danger
        </mal-button>

        <mal-button variant="ghost">
          Ghost
        </mal-button>
      </div>
    `,
  }),
};

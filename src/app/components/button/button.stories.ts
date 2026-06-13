import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'MAL/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    icon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button
        [variant]="variant"
        [disabled]="disabled">
        Salvar
      </app-button>
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
      <app-button
        [variant]="variant"
        [disabled]="disabled">
        Voltar
      </app-button>
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
      <app-button
        [variant]="variant"
        [disabled]="disabled">
        Apagar
      </app-button>
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
      <app-button
        [variant]="variant"
        [disabled]="disabled">
        Desativado
      </app-button>
    `,
  }),
};

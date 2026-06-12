import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CardComponent } from '../../components/card/card.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MetricCardComponent } from '../../components/metric-card/metric-card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';

type ButtonShowcaseVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonShowcaseExample {
  name: string;
  usage: string;
  variant: ButtonShowcaseVariant;
  hover?: boolean;
  disabled?: boolean;
  icon?: boolean;
  label?: string;
}

interface ButtonShowcaseGroup {
  title: string;
  examples: ButtonShowcaseExample[];
}

@Component({
  selector: 'app-design-system-page',
  imports: [
    BadgeComponent,
    ButtonComponent,
    CalendarComponent,
    CardComponent,
    EventCardComponent,
    FooterComponent,
    HeaderComponent,
    MetricCardComponent,
    SidebarComponent,
    StepperComponent,
    TabsComponent,
    TextFieldComponent,
  ],
  templateUrl: './design-system-page.component.html',
  styleUrl: './design-system-page.component.css',
})
export class DesignSystemPageComponent {
  readonly docsNav = ['Tokens', 'Como usar', 'Botoes', 'Formularios', 'Cards e navegacao', 'Calendario', 'Padroes'];
  readonly tabs = ['Visao geral', 'Clientes', 'Projetos', 'Financeiro', 'Configuracoes'];
  readonly steps = ['Informacoes', 'Detalhes', 'Revisao', 'Conclusao'];
  readonly appNav = ['Dashboard', 'Clientes', 'Projetos', 'Tarefas', 'Relatorios'];
  readonly eventDays = [4, 8, 12, 16, 24];
  readonly statusOptions = ['Ativo', 'Pendente', 'Inativo'];
  readonly usageDocs = [
    {
      title: 'Header e footer',
      description: 'Use para abrir e fechar paginas mantendo a marca MAL consistente.',
      code: '<app-header title="MAL Design System" />\n<app-footer />',
    },
    {
      title: 'Botao',
      description: 'Use variants nomeadas e mantenha o tamanho padrao do sistema.',
      code: '<app-button variant="primary">Salvar</app-button>',
    },
    {
      title: 'Sidebar',
      description: 'Use em layouts de produto com navegacao lateral.',
      code: '<app-sidebar [items]="menu" [activeIndex]="0" />',
    },
    {
      title: 'Formularios',
      description: 'Use text-field para input, select e textarea com o mesmo visual.',
      code: '<app-text-field label="Nome" placeholder="Digite o nome" />',
    },
    {
      title: 'Cards e badges',
      description: 'Use para blocos de conteudo, estados e destaques.',
      code: '<app-card title="Plano" badge="Novo">Texto</app-card>',
    },
    {
      title: 'Calendario',
      description: 'Use para agendas, prazos e eventos.',
      code: '<app-calendar [events]="[4, 8, 12]" />',
    },
  ];
  readonly buttonGroups: ButtonShowcaseGroup[] = [
    {
      title: 'Acoes principais',
      examples: [
        { name: 'Primario', usage: 'Acao principal da tela', variant: 'primary' },
        { name: 'Primario hover', usage: 'Estado de hover', variant: 'primary', hover: true },
        { name: 'Primario disabled', usage: 'Acao indisponivel', variant: 'primary', disabled: true },
      ],
    },
    {
      title: 'Acoes secundarias',
      examples: [
        { name: 'Secundario', usage: 'Acao complementar', variant: 'secondary' },
        { name: 'Secundario hover', usage: 'Estado de hover', variant: 'secondary', hover: true },
        { name: 'Fantasma', usage: 'Acao discreta em barras e tabelas', variant: 'ghost' },
      ],
    },
    {
      title: 'Acoes criticas e compactas',
      examples: [
        { name: 'Perigo', usage: 'Excluir ou cancelar fluxo', variant: 'danger' },
        { name: 'Icone', usage: 'Acao compacta sem texto', variant: 'primary', icon: true, label: '>' },
        { name: 'Mais acoes', usage: 'Menu contextual', variant: 'ghost', icon: true, label: '...' },
      ],
    },
  ];
}

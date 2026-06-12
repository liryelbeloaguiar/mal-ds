# MAL Design System Angular

Projeto Angular com componentes reutilizaveis para a identidade MAL.

## Rodar

```bash
npm install
npm start
```

O app roda por padrao em `http://localhost:4200`.

## Estrutura

```text
public/
  logo-mal-azul.png
  logo-mal-branca.png
  logo-mal-blue.svg
  logo-mal-white.svg
src/
  app/
    components/
      badge/
      button/
      calendar/
      card/
      event-card/
      footer/
      header/
      logo/
      metric-card/
      sidebar/
      stepper/
      tabs/
      text-field/
    pages/
      design-system/
  styles.css
```

## Exemplos de uso

```html
<app-header logoSrc="/logo-mal-azul.png" />
<app-footer />

<app-button variant="primary">Salvar</app-button>
<app-button variant="secondary">Cancelar</app-button>
<app-button variant="ghost" [icon]="true" ariaLabel="Mais acoes">&vellip;</app-button>

<app-card title="Card destacado" badge="Novo" badgeVariant="success" action="Ver detalhes">
  Texto do card.
</app-card>

<app-sidebar [items]="['Dashboard', 'Clientes', 'Projetos']" [activeIndex]="0" />
<app-calendar title="Junho 2026" [today]="12" [selected]="12" [events]="[4, 8, 12]" />
<app-text-field label="Nome completo" placeholder="Digite o nome" />
```

## Padrao visual

- Botoes: altura `44px`, largura minima `148px`.
- Botoes de icone: `44px x 44px`.
- Inputs e selects: altura `44px`.
- Cards e paineis: raio `12px`; secoes principais usam raio `20px`.
- Tokens globais: cores, espacamentos, raios e sombras ficam em `src/styles.css`.

## Como usar cada componente

- `app-header`: topo da pagina. Aceita `title`, `tagline` e `logoSrc`.
- `app-footer`: rodape padrao da apresentacao ou produto.
- `app-button`: use `variant="primary"`, `secondary`, `danger` ou `ghost`; use `[icon]="true"` para acoes compactas.
- `app-sidebar`: recebe `[items]` e `[activeIndex]` para navegacao lateral.
- `app-text-field`: usa `kind="input"`, `select` ou `textarea`; aceita `label`, `placeholder`, `hint`, `[invalid]` e `[disabled]`.
- `app-card`: aceita `title`, `variant`, `badge`, `badgeVariant` e `action`.
- `app-badge`: use `variant="success"`, `warning`, `danger` ou `info`.
- `app-tabs`: recebe `[items]` e `[activeIndex]`.
- `app-stepper`: recebe `[steps]` e `[activeIndex]`.
- `app-calendar`: recebe `title`, `[today]`, `[selected]` e `[events]`.
- `app-event-card`: aceita `time`, `title` e `variant`.
- `app-metric-card`: aceita `label`, `value`, `trend` e `direction`.

Os tokens de marca, cores, tipografia, raios, sombras e espacamentos ficam centralizados em `src/styles.css`.


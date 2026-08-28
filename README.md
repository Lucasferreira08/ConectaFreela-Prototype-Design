# ConectaFreela

Protótipo de uma plataforma que conecta talentos a organizações para oportunidades de projetos, voluntariado e trabalhos remunerados.

O projeto é uma aplicação frontend: os dados, mensagens, candidaturas e avaliações são simulados no navegador. Não há autenticação real, banco de dados nem integração com API neste estágio.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Tailwind CSS 4
- pnpm

## Como executar

### Pré-requisitos

- Node.js 22 ou posterior
- pnpm 10 ou posterior

As versões utilizadas pelo projeto estão registradas em [`.mise.toml`](.mise.toml).

### Instalação

No terminal, dentro da pasta do projeto:

```powershell
pnpm install
```

### Ambiente de desenvolvimento

```powershell
pnpm dev
```

O Vite exibirá a URL para acesso. Por padrão, a aplicação utiliza a porta `8443`:

```text
http://localhost:8443
```

No Figma Make, o servidor de desenvolvimento já é iniciado pelo ambiente e as alterações aparecem automaticamente no painel de preview.

### Build de produção

```powershell
pnpm build
```

O resultado é gerado na pasta `dist`.

### Visualizar a build

```powershell
pnpm preview
```

### Formatação

```powershell
pnpm format
```

## Fluxos da plataforma

A página inicial apresenta os dois caminhos. No login/cadastro, a pessoa escolhe se entra como **Talento** ou **Organização**. A navegação principal muda de acordo com essa escolha.

### Fluxo do Talento

1. **Criar conta ou entrar**
   - Seleciona “Sou talento”.
   - Quem se cadastra passa pelo onboarding para informar nome, área de interesse e competências.

2. **Explorar oportunidades**
   - Acessa a lista de vagas.
   - Pode buscar por título, competência ou organização e filtrar por categoria e modalidade.

3. **Ver vaga e candidatar-se**
   - Abre os detalhes da oportunidade.
   - Envia uma mensagem de apresentação para concluir a candidatura.

4. **Acompanhar candidaturas**
   - Consulta as candidaturas enviadas, seus status e a linha do tempo de cada processo.
   - Quando há uma conversa iniciada, pode abrir o chat diretamente pela candidatura.

5. **Conversar e receber atualizações**
   - Usa Mensagens para conversar com organizações.
   - Usa Notificações para ver alterações de status, novas mensagens e solicitações de avaliação.

6. **Avaliar a parceria**
   - Após um projeto concluído, pode avaliar a organização e registrar um comentário.

### Fluxo da Organização

1. **Criar conta ou entrar**
   - Seleciona “Sou organização”.
   - No cadastro, passa pelo onboarding com dados da instituição e área de atuação.

2. **Painel da organização**
   - Visualiza a oportunidade ativa e a distribuição dos candidatos por status.
   - Acessa a lista de candidatos para revisar cada perfil, portfólio e mensagem de candidatura.

3. **Publicar uma oportunidade**
   - Cria uma nova vaga com título, descrição, modalidade, duração e competências desejadas.
   - Ao publicar, retorna ao painel da organização.

4. **Revisar candidatos**
   - Abre o perfil de cada candidato.
   - Registra notas internas e define o status como “Em análise”, “Aprovado” ou “Recusado”.
   - Para candidatos aprovados, pode iniciar uma conversa.

5. **Gerir o perfil institucional**
   - Acessa Perfil pela navegação ou pelo avatar.
   - Consulta apresentação, áreas de atuação, indicadores de impacto, canais de contato e avaliações recebidas.
   - Gerencia visualmente membros da equipe e oportunidades publicadas.
   - Pode editar as informações institucionais pelo modal de edição.

6. **Mensagens, notificações e avaliações**
   - Conversa com candidatos no chat e retorna ao painel pelo botão contextual.
   - Recebe notificações relacionadas a novas candidaturas, conversas e avaliações.
   - Avalia a colaboração após a conclusão de um projeto.

## Estrutura principal

```text
src/
├── App.tsx                # Estado e navegação entre telas
├── components/            # Cabeçalho e logo compartilhados
├── data/mock.ts           # Dados simulados de vagas, candidatos e candidaturas
├── pages/                 # Telas dos fluxos de Talento e Organização
└── index.css              # Tema, fontes e estilos globais
```

## Limitações do protótipo

- A sessão, os dados dos formulários e as mensagens não persistem após recarregar a página.
- O login é uma simulação para demonstrar os caminhos de cada perfil.
- Não há controle de permissão no servidor; a separação de perfis é visual e de navegação.

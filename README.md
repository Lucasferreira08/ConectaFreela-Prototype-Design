# ConectaFreela

Protótipo de uma plataforma que conecta talentos a organizações para oportunidades de projetos, voluntariado e trabalhos remunerados.

É uma aplicação frontend demonstrativa. Dados de vagas, candidatos, mensagens, avaliações, recuperação de senha e contratação de planos são simulados no navegador; não há API, banco de dados, autenticação ou pagamento real.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- Tailwind CSS 4
- pnpm

## Como executar

### Pré-requisitos

- Node.js 22 ou posterior
- pnpm 10 ou posterior

As versões usadas pelo projeto estão em [`.mise.toml`](.mise.toml).

### Instalação

No terminal, dentro da pasta do projeto:

```powershell
pnpm install
```

### Desenvolvimento

```powershell
pnpm dev
```

O Vite exibirá a URL de acesso. A porta padrão é `8443`:

```text
http://localhost:8443
```

No Figma Make, o servidor de desenvolvimento já é iniciado pelo ambiente. As alterações aparecem automaticamente no painel de preview.

### Build de produção

```powershell
pnpm build
```

Os arquivos são gerados em `dist`.

### Visualizar a build

```powershell
pnpm preview
```

### Formatação

```powershell
pnpm format
```

## Acesso e cadastro

A landing page possui atalhos para entrar ou criar uma conta. No cadastro, a pessoa escolhe entre os perfis **Talento** e **Organização**.

- Os CTAs direcionados a Talento já abrem o cadastro com “Sou talento” selecionado.
- Os CTAs direcionados a Organização já abrem o cadastro com “Sou organização” selecionado.
- O botão “Cadastrar grátis” permite escolher o perfil antes de criar a conta.
- Login e cadastro têm o botão **Voltar ao início**.
- No login, o link **Esqueci minha senha** abre o fluxo de recuperação por e-mail. O envio é apenas demonstrativo neste protótipo.

## Fluxos da plataforma

### Fluxo do Talento

1. **Criar conta ou entrar**
   - Seleciona “Sou talento”.
   - No cadastro, passa pelo onboarding para informar nome, área de interesse e competências.

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
   - Visualiza oportunidades ativas e a distribuição dos candidatos por status.
   - Acessa a lista de candidatos para revisar cada perfil, portfólio e mensagem de candidatura.

3. **Publicar e dar visibilidade a oportunidades**
   - Cria uma nova vaga com título, descrição, modalidade, duração e competências desejadas.
   - Pode selecionar **Destacar vaga** no painel para promover uma oportunidade por sete dias. O fluxo demonstra o preço de R$ 29, benefícios e confirmação visual do destaque.

4. **Revisar candidatos**
   - Abre o perfil de cada candidato.
   - Registra notas internas e define o status como “Em análise”, “Aprovado” ou “Recusado”.
   - Para candidatos aprovados, pode iniciar uma conversa.

5. **Gerir o perfil institucional**
   - Acessa Perfil pela navegação ou pelo avatar.
   - Consulta apresentação, áreas de atuação, indicadores de impacto, canais de contato e avaliações recebidas.
   - Gerencia visualmente membros da equipe e oportunidades publicadas.
   - Pode editar informações institucionais pelo modal de edição.

6. **Contratar um plano institucional**
   - Acessa **Plano** pela navegação da Organização ou pelos CTAs do painel.
   - Compara o plano Gratuito com o Plano Institucional.
   - Alterna entre cobrança mensal (R$ 99/mês) e anual (R$ 79/mês).
   - Preenche um formulário demonstrativo com dados de faturamento e confirma a solicitação.

7. **Mensagens, notificações e avaliações**
   - Conversa com candidatos no chat e retorna ao painel pelo botão contextual.
   - Recebe notificações relacionadas a candidaturas, conversas e avaliações.
   - Avalia a colaboração após a conclusão de um projeto.

## Monetização demonstrada

| Recurso | Público | Demonstração no protótipo |
| --- | --- | --- |
| Plano Institucional | Organizações | Plano pago com mais oportunidades ativas, destaques mensais, métricas, equipe e selo de verificação. |
| Destaque de vaga | Organizações | Impulsionamento de uma vaga por sete dias, com selo visual e posição prioritária na busca. |

Os preços e a contratação existem apenas para demonstrar o fluxo de produto. Nenhuma cobrança é processada.

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

- Sessão, formulários, mensagens, destaques e solicitações de plano não persistem após recarregar a página.
- Login, recuperação de senha e controle de perfil são simulações de interface.
- Não há controle de permissões no servidor; a separação de perfis é visual e de navegação.
- Não há integração com gateway de pagamento, emissão de cobrança ou e-mail transacional.

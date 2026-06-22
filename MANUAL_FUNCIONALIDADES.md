# Manual Completo - Site Institucional NUVCORE

**Versão:** 1.0  
**Data:** 28 de Fevereiro de 2026  
**Desenvolvido com:** React 19 + Express 4 + tRPC 11 + MySQL

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Seções do Site](#seções-do-site)
3. [Funcionalidades de Contato](#funcionalidades-de-contato)
4. [Sistema de Notificações](#sistema-de-notificações)
5. [Painel Admin](#painel-admin)
6. [Configuração de Email](#configuração-de-email)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

O site institucional da NUVCORE é uma plataforma moderna de "Desenvolvimento Web & Design" que apresenta seus serviços, portfólio e permite que clientes solicitem diagnósticos gratuitos. O site possui um sistema completo de notificações em tempo real, gerenciamento de contatos e painel administrativo.

**Características principais:**

- Design "Precision Dark" com tema escuro profissional
- Responsivo para desktop, tablet e mobile
- Sistema de notificações em tempo real (WebSocket)
- Formulário de contato com validação
- Painel admin protegido para gerenciar contatos
- Histórico de notificações persistente
- Integração com email para notificações
- Logo oficial da NUVCORE integrado

---

## 📄 Seções do Site

### 1. **Navbar (Barra de Navegação)**

**Localização:** Topo da página, fixa ao rolar

**Elementos:**
- Logo NUVCORE (clicável, leva para home)
- Menu de navegação com links para as seções:
  - Sobre
  - Serviços
  - Processo
  - Portfólio
  - Contato
- Botão "Solicitar Diagnóstico" (CTA principal em vermelho)

**Funcionalidade:** Navegação suave entre seções com scroll automático

---

### 2. **Hero Section (Seção Principal)**

**Localização:** Topo da página, após navbar

**Conteúdo:**
- Label: "Desenvolvimento Web & Design"
- Headline: "Eu construo estruturas digitais que posicionam e crescem."
- Descrição: Texto sobre a abordagem da NUVCORE
- 2 Botões:
  - "Solicitar Diagnóstico Gratuito" (vermelho, CTA principal)
  - "Ver Serviços" (outline, leva para seção de serviços)
- Estatísticas: 100% Foco em resultados | Estratégia Antes de código | Startups & Pequenos negócios
- Ícone de scroll (chevron animado)

**Funcionalidade:** Apresentação visual impactante com animações de entrada

---

### 3. **About Section (Sobre)**

**Localização:** Segunda seção

**Conteúdo:**
- Label: "Sobre"
- Headline: "Não criei apenas sites bonitos. Criei presença digital estratégica."
- Descrição detalhada sobre a abordagem
- Imagem visual (marca d'água do logo)
- Pontos-chave:
  - Foco em resultados
  - Antes de código, estratégia
  - Estrutura digital que cresce

**Funcionalidade:** Apresenta a filosofia e diferencial da agência

---

### 4. **Services Section (Serviços)**

**Localização:** Terceira seção

**Conteúdo:** 4 cards de serviços com ícones:

1. **Desenvolvimento Web & Design**
   - Descrição: Sites institucionais e plataformas digitais
   - Destaques: React & Next.js, Performance otimizada, SEO técnico, Responsivo

2. **Landing Pages de Alta Conversão**
   - Descrição: Páginas construídas para converter visitantes em clientes
   - Destaques: Copywriting estratégico, A/B ready, Carregamento rápido, Integração com CRM

3. **Planejamento de Estrutura Digital**
   - Descrição: Análise e planejamento antes da construção
   - Destaques: Arquitetura de informação, Jornada do usuário, Análise competitiva, Wireframes estratégicos

4. **Otimização de Sites Existentes**
   - Descrição: Diagnóstico técnico e estratégico
   - Destaques: Auditoria técnica, Core Web Vitals, Otimização de conversão, Relatório detalhado

**Funcionalidade:** Apresenta os 4 principais serviços com ícones e descrições

---

### 5. **Process Section (Processo de Trabalho)**

**Localização:** Quarta seção

**Conteúdo:** 5 etapas do processo:

1. **Diagnóstico** - Análise profunda do seu negócio e mercado
2. **Estratégia** - Definição de objetivos e arquitetura digital
3. **Design** - Criação visual e prototipagem
4. **Desenvolvimento** - Construção técnica e otimização
5. **Lançamento & Suporte** - Deploy e acompanhamento contínuo

**Funcionalidade:** Mostra a metodologia de trabalho de forma visual

---

### 6. **Portfolio Section (Portfólio)**

**Localização:** Quinta seção

**Conteúdo:** 3 casos de estudo com:
- Imagem do projeto
- Nome do cliente/projeto
- Descrição breve
- Resultados/métricas
- Link para detalhes

**Funcionalidade:** Demonstra trabalhos anteriores e resultados alcançados

---

### 7. **Why Section (Por que Escolher NUVCORE)**

**Localização:** Sexta seção

**Conteúdo:** 4 diferenciais principais:
- Foco em Resultados
- Estratégia Antes de Código
- Acompanhamento Contínuo
- Tecnologia de Ponta

**Funcionalidade:** Reforça os principais diferenciais da agência

---

### 8. **CTA Section (Chamada para Ação)**

**Localização:** Sétima seção

**Conteúdo:**
- Headline: "Vamos começar seu projeto?"
- Descrição: Convite para solicitar diagnóstico
- Botão: "Solicitar Diagnóstico Gratuito"
- Imagem de fundo

**Funcionalidade:** Reforça a CTA principal antes da seção de contato

---

### 9. **Contact Section (Contato)**

**Localização:** Oitava seção (antes do footer)

**Conteúdo - Lado Esquerdo:**
- Label: "Contato"
- Headline: "Vamos construir algo extraordinário juntos."
- Descrição: Convite para conversar
- Informações de contato:
  - E-mail: nuvcore.agency@gmail.com
  - Instagram: @nuvcore
- Box de aviso: Responde em até 24 horas

**Conteúdo - Lado Direito (Formulário):**
- Campo: Nome (obrigatório)
- Campo: E-mail (obrigatório)
- Campo: Telefone (opcional)
- Campo: Empresa (opcional)
- Campo: Mensagem (obrigatório, mínimo 10 caracteres)
- Botão: "Enviar Solicitação"

**Funcionalidade:** Coleta informações de contato com validação

---

### 10. **Footer**

**Localização:** Rodapé da página

**Conteúdo:**
- Logo NUVCORE
- Links rápidos para seções
- Informações de contato
- Redes sociais
- Copyright

**Funcionalidade:** Navegação adicional e informações gerais

---

## 📞 Funcionalidades de Contato

### Fluxo de Envio de Contato

**Passo 1:** Usuário preenche o formulário na seção "Contato"

**Passo 2:** Validação dos campos:
- Nome: mínimo 2 caracteres
- E-mail: formato válido
- Mensagem: mínimo 10 caracteres
- Telefone e Empresa: opcionais

**Passo 3:** Se houver erro, exibe toast de aviso em amarelo

**Passo 4:** Se tudo estiver correto, envia para o backend

**Passo 5:** Backend processa:
- Salva no banco de dados (tabela `contacts`)
- Envia notificação ao dono do site
- Envia email de confirmação
- Emite notificação em tempo real via WebSocket
- Broadcast para painel admin

**Passo 6:** Frontend exibe:
- Toast de sucesso em verde
- Mensagem de confirmação
- Formulário é resetado

**Passo 7:** Você recebe:
- Notificação no painel admin
- Notificação em tempo real (se conectado)
- Email com os detalhes do contato

---

## 🔔 Sistema de Notificações

### Tipos de Notificações

**1. Toast (Pop-up no canto inferior direito)**
- Aparece automaticamente
- Desaparece após 5 segundos
- Pode ser fechado manualmente
- 4 tipos: Success (verde), Error (vermelho), Warning (amarelo), Info (azul)

**2. Histórico de Notificações**
- Acesso em `/notifications`
- Mostra todas as notificações recebidas
- Permite marcar como lido
- Permite deletar notificações
- Persiste no banco de dados

**3. Notificações em Tempo Real (WebSocket)**
- Conecta automaticamente ao carregar a página
- Recebe notificações instantaneamente
- Não requer recarregar a página
- Reconecta automaticamente se desconectar

### Quando Recebe Notificações

**Ao submeter um contato:**
- Toast: "Solicitação Enviada!"
- Histórico: Notificação salva
- Painel Admin: Novo contato aparece em tempo real

**Erros ao submeter:**
- Toast: Descrição do erro
- Histórico: Notificação de erro salva

**Validação:**
- Toast: "Campos Obrigatórios"
- Se campos estiverem vazios

---

## 🛠️ Painel Admin

### Acesso ao Painel

**URL:** `seu-site.com/admin`

**Requisito:** Estar logado como admin

**Como se tornar admin:** Contate o desenvolvedor para ser promovido

### Funcionalidades do Painel Admin

#### Aba: Contatos

**Exibe:**
- Lista de todos os contatos recebidos
- Para cada contato:
  - Nome
  - E-mail (clicável, abre cliente de email)
  - Telefone (se fornecido)
  - Empresa (se fornecida)
  - Mensagem completa
  - Data e hora de recebimento

**Ações:**
- Visualizar detalhes
- Copiar e-mail
- Responder diretamente

#### Aba: Notificações

**Exibe:**
- Lista de todas as notificações
- Para cada notificação:
  - Ícone do tipo (success, error, warning, info)
  - Título
  - Mensagem
  - Data e hora
  - Badge "Novo" se não lido

**Ações:**
- Marcar como lido (botão com ícone de check)
- Deletar (botão com ícone de lixeira)

### Como Usar o Painel Admin

**Passo 1:** Acesse `seu-site.com/admin`

**Passo 2:** Escolha a aba desejada (Contatos ou Notificações)

**Passo 3:** Visualize a lista de itens

**Passo 4:** Para contatos, clique no e-mail para responder

**Passo 5:** Para notificações, marque como lido ou delete conforme necessário

---

## 📧 Configuração de Email

### Como Ativar Notificações por Email

**Atualmente:** O sistema está configurado para enviar emails, mas precisa de credenciais SMTP.

**Passo 1:** Configure as variáveis de ambiente:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=noreply@nuvcore.com
```

**Passo 2:** Para Gmail:
- Ative a autenticação de 2 fatores
- Gere uma "Senha de App" em https://myaccount.google.com/apppasswords
- Use essa senha no `SMTP_PASS`

**Passo 3:** Teste enviando um contato

**Passo 4:** Você receberá um email com os detalhes

### Integração com Slack (Opcional)

Para receber notificações também no Slack:

**Passo 1:** Crie um webhook no Slack em https://api.slack.com/apps

**Passo 2:** Configure a variável:
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

**Passo 3:** O sistema enviará notificações para o Slack automaticamente

---

## 🔧 Troubleshooting

### Problema: Formulário não envia

**Solução 1:** Verifique se todos os campos obrigatórios estão preenchidos
- Nome (mínimo 2 caracteres)
- E-mail (formato válido)
- Mensagem (mínimo 10 caracteres)

**Solução 2:** Verifique o console do navegador (F12 > Console) para erros

**Solução 3:** Recarregue a página e tente novamente

### Problema: Não recebo notificações em tempo real

**Solução 1:** Verifique se o WebSocket está conectado
- Abra F12 > Console
- Procure por "[WebSocket] Connected"

**Solução 2:** Recarregue a página

**Solução 3:** Verifique se o firewall não está bloqueando WebSocket

### Problema: Não recebo emails

**Solução 1:** Verifique se as credenciais SMTP estão corretas

**Solução 2:** Verifique a pasta de spam/lixo

**Solução 3:** Verifique os logs do servidor para erros

**Solução 4:** Se usar Gmail, certifique-se de usar "Senha de App" e não a senha normal

### Problema: Painel admin mostra "Acesso Negado"

**Solução:** Você não é admin. Peça ao desenvolvedor para promover sua conta

### Problema: Notificações desaparecem ao recarregar

**Solução:** É comportamento normal. As notificações são salvas no banco de dados e aparecem em `/notifications`

---

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- **Desktop:** 1920px e acima
- **Tablet:** 768px a 1024px
- **Mobile:** 320px a 767px

Todos os formulários, botões e textos se adaptam ao tamanho da tela.

---

## 🎨 Cores e Design

**Paleta de Cores:**
- Tech Black: #0F0F12 (fundo principal)
- Soft White: #F2F2F2 (texto principal)
- Institutional Red: #C41B2C (CTA e destaques)
- Electric Blue: #2563EB (acentos)

**Tipografia:**
- Space Grotesk: Headlines e títulos
- Inter: Corpo de texto

**Logo:** Integrado em navbar, footer e como marca d'água sutil

---

## 🚀 Próximos Passos Sugeridos

1. **Adicionar mais projetos ao portfólio** - Substitua os casos de estudo placeholder por projetos reais
2. **Integrar com Google Analytics** - Acompanhe visitantes e comportamento
3. **Criar página de blog** - Publique artigos sobre web design e desenvolvimento
4. **Adicionar chat em tempo real** - Para conversar com visitantes
5. **Implementar agendamento de reuniões** - Calendário integrado para agendar chamadas

---

## 📞 Suporte

Para dúvidas ou problemas, entre em contato:
- E-mail: nuvcore.agency@gmail.com
- Instagram: @nuvcore

---

**Última atualização:** 28 de Fevereiro de 2026  
**Versão do Site:** 1.0.0

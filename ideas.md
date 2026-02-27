# NUVCORE — Ideias de Design

## Três Abordagens Estilísticas

<response>
<text>

### Ideia 1 — "Precision Dark" (Precisão Sombria)

**Design Movement:** Dark SaaS Modernism inspirado em Stripe, Linear e Vercel

**Core Principles:**
1. Contraste extremo: preto profundo (#0F0F12) como base, com texto branco e acentos vermelhos e azuis
2. Grid estruturado e assimétrico com colunas de larguras diferentes
3. Tipografia de peso variável — display bold + body regular
4. Animações de entrada suaves, baseadas em scroll (Framer Motion)

**Color Philosophy:**
- Tech Black #0F0F12 como fundo principal — transmite seriedade, profundidade e autoridade
- Soft White #F2F2F2 para texto — legibilidade máxima sem o contraste agressivo do branco puro
- Institutional Red #C41B2C como cor de destaque primária — urgência, identidade, diferenciação
- Electric Blue #2563EB como cor de destaque secundária — tecnologia, confiança, inovação
- Bordas sutis em oklch(1 0 0 / 8%) para separar seções sem ruído visual

**Layout Paradigm:**
- Hero com layout dividido: texto à esquerda (60%), visual abstrato à direita (40%)
- Seções alternando entre fundo preto e fundo levemente mais claro (#16161A)
- Cards com bordas finas e gradientes sutis no hover
- Estrutura de grid 12 colunas com espaçamento generoso

**Signature Elements:**
1. Linha vermelha fina horizontal como separador de seções e decoração tipográfica
2. Números de seção em fonte grande e transparente como elemento decorativo de fundo
3. Tags/badges em vermelho para destacar conceitos-chave

**Interaction Philosophy:**
- Hover em cards: elevação sutil com border-color mudando para vermelho
- CTAs com efeito de preenchimento ao hover
- Links com underline animado em vermelho

**Animation:**
- Elementos entram com `opacity: 0 → 1` + `translateY: 20px → 0` ao scroll
- Stagger de 100ms entre elementos de uma mesma seção
- Parallax suave no hero (10-15% de deslocamento)
- Transições de 400ms com easing `cubic-bezier(0.16, 1, 0.3, 1)`

**Typography System:**
- Display: Space Grotesk Bold (700) para títulos grandes
- Body: Inter Regular (400) e Medium (500) para texto corrido
- Mono: JetBrains Mono para elementos técnicos/código
- Hierarquia: 72px / 48px / 32px / 24px / 16px / 14px

</text>
<probability>0.08</probability>
</response>

<response>
<text>

### Ideia 2 — "Geometric Brutalism" (Brutalismo Geométrico)

**Design Movement:** Tech Brutalism com influências de Figma e Raycast

**Core Principles:**
1. Formas geométricas como elemento visual dominante
2. Tipografia expressiva com variações extremas de peso
3. Espaçamento generoso e deliberado
4. Contraste alto com uso estratégico de cor

**Color Philosophy:**
- Fundo quase-preto com textura sutil de grain
- Vermelho como único acento cromático — pureza visual
- Texto em branco com variações de opacidade para hierarquia

**Layout Paradigm:**
- Seções com largura total (full-bleed) alternando com containers centralizados
- Elementos quebram o grid intencionalmente em pontos estratégicos
- Uso de overlapping entre seções

**Signature Elements:**
1. Formas geométricas (círculos, retângulos) como decoração de fundo
2. Texto gigante como elemento visual (não apenas informacional)
3. Linhas diagonais como divisores de seção

**Interaction Philosophy:**
- Interações agressivas e diretas
- Hover effects com transformações geométricas

**Animation:**
- Entradas rápidas e precisas (200-300ms)
- Sem parallax — movimento apenas em resposta a ações do usuário

**Typography System:**
- Display: Syne ExtraBold para impacto máximo
- Body: DM Sans para legibilidade
- Hierarquia extrema entre tamanhos

</text>
<probability>0.06</probability>
</response>

<response>
<text>

### Ideia 3 — "Luminous Precision" (Precisão Luminosa)

**Design Movement:** Dark Premium SaaS com influências de Linear e Resend

**Core Principles:**
1. Escuridão como luxo — fundo profundo com elementos que "brilham"
2. Gradientes sutis em elementos de destaque
3. Micro-detalhes que revelam cuidado artesanal
4. Hierarquia tipográfica rigorosa

**Color Philosophy:**
- Fundo #0F0F12 com gradientes radiais sutis em azul e vermelho nas seções-chave
- Acentos em vermelho e azul com variações de opacidade para profundidade
- Texto principal em branco com texto secundário em cinza médio

**Layout Paradigm:**
- Layout centrado com max-width de 1200px
- Seções com padding vertical generoso (120px+)
- Cards com glassmorphism sutil

**Signature Elements:**
1. Gradientes radiais como "luz" emanando de elementos-chave
2. Bordas com gradiente (border-image) em cards premium
3. Glow effects em CTAs e elementos interativos

**Interaction Philosophy:**
- Hover com glow suave
- CTAs com shimmer animation
- Scroll suave entre seções

**Animation:**
- Fade + scale suave ao entrar na viewport
- Glow pulsante em elementos de destaque
- Parallax em elementos decorativos de fundo

**Typography System:**
- Display: Clash Display para títulos
- Body: Satoshi para texto corrido
- Hierarquia com gradiente de cor (branco → cinza)

</text>
<probability>0.07</probability>
</response>

---

## Decisão Final: Ideia 1 — "Precision Dark"

Escolhida por alinhar perfeitamente com a referência Stripe, as cores oficiais da NUVCORE e o posicionamento de marca tech premium. O layout assimétrico com grid estruturado, animações suaves de scroll e a combinação Space Grotesk + Inter criam a experiência moderna, institucional e de alta performance que a marca exige.

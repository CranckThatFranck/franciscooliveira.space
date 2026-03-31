# Gaia Works — Bíblia de Design System 🌌

> Documentação técnica e visual exaustiva gerada por engenharia reversa do repositório **gaiaworks.com.br**.  
> Objetivo: servir como referência completa para replicar a estética espacial, futurista e luxuosa do site em projetos irmãos (ex.: `franciscooliveira.space`).

---

## Índice

1. [Identidade Visual e Atmosfera](#1-identidade-visual-e-atmosfera)
2. [Paleta de Cores](#2-paleta-de-cores)
3. [Tipografia](#3-tipografia)
4. [Efeitos Especiais e Animações](#4-efeitos-especiais-e-animações)
5. [Componentes Principais](#5-componentes-principais)
6. [Layout e Espaçamento](#6-layout-e-espaçamento)
7. [Stack Tecnológica do Frontend](#7-stack-tecnológica-do-frontend)

---

## 1. Identidade Visual e Atmosfera

### The Vibe

O site Gaia Works transmite a sensação de estar em um observatório espacial de luxo: **silencioso, vasto, preciso e majestoso**. Cada elemento foi projetado para evocar três dimensões simultâneas:

| Dimensão | Como é expressa |
|---|---|
| **Luxo** | Muito espaço negativo, tipografia pesada com tracking fino, paleta limitada e sofisticada |
| **Tecnologia** | Cards com glassmorphism, bordas sutis em branco semi-transparente, badge de lançamento com ícone de foguete |
| **Espaço Profundo** | Fundo quase negro (#05050A), partículas flutuantes em canvas, gradientes radiais azuis que simulam nebulosas |

### Contraste e Legibilidade

- **Fundo**: praticamente preto (`#05050A` / `#0A0F1A`) — sem nenhuma textura, a escuridão é total e intencional.
- **Textos primários**: branco puro (`#FFFFFF`) ou platina (`#D1D5DB`) — alto contraste sobre o fundo escuro.
- **Textos secundários / muteds**: cinza médio (`text-gray-400`, `#9CA3AF`) para hierarquia visual sem poluição.
- **Destaques (accent)**: azul elétrico (`#3B82F6`) — usado em rótulos, spans de destaque, linhas decorativas e ícones.
- A transição entre o espaço e o conteúdo é feita com gradientes verticais (`from-transparent to-[#05050A]`), criando uma dissolução natural.

---

## 2. Paleta de Cores

### Variáveis CSS (@theme — Tailwind v4)

Definidas em `src/index.css` com a diretiva `@theme`:

```css
@theme {
  --color-void:           #05050A;  /* Fundo principal — "O Vazio" */
  --color-void-light:     #0A0F1A;  /* Fundo secundário — azul noite profundo */
  --color-lux-blue:       #1D4ED8;  /* Azul de luxo — botões, glows */
  --color-lux-blue-dark:  #1E3A8A;  /* Azul escuro — variante sombria */
  --color-lux-blue-light: #3B82F6;  /* Azul claro — destaques, labels, ícones */
  --color-platinum:       #D1D5DB;  /* Platina — texto principal do body */
}
```

### Tabela Completa de Cores

| Token / Classe Tailwind | Hex | Uso |
|---|---|---|
| `--color-void` / `bg-[#05050A]` | `#05050A` | Cor de fundo base do site inteiro |
| `--color-void-light` / `bg-[#0A0F1A]` | `#0A0F1A` | Fundo do canvas de partículas (centro do gradiente radial) |
| `--color-lux-blue` / `bg-blue-700` | `#1D4ED8` | Gradient inicial do botão CTA, box-shadow de glows |
| `--color-lux-blue-dark` / `bg-blue-800` | `#1E3A8A` | Variante escura do azul de luxo |
| `--color-lux-blue-light` / `text-blue-400` | `#3B82F6` | Cor de destaque principal (labels, ícones, linhas decorativas) |
| `--color-platinum` / `text-gray-300` | `#D1D5DB` | Cor do texto do body |
| `text-white` | `#FFFFFF` | Títulos e nomes em destaque máximo |
| `text-gray-400` | `#9CA3AF` | Texto muted / descrições secundárias |
| `text-gray-500` | `#6B7280` | Rótulos de seção, eyebrows de título |
| `text-blue-300` | `#93C5FD` | Cargo / subtítulo nos cards de perfil, variante suave do accent |
| `text-purple-400` | `#C084FC` | Ícone de features / variante de destaque |
| `text-green-400` | `#4ADE80` | Ícone "Gratuito de Verdade" |
| `text-orange-400` | `#FB923C` | Ícone "Escalabilidade Premium" |

### Gradientes Chave

```css
/* Gradiente de texto principal (título "Gaia Works") */
background-image: linear-gradient(to right, #ffffff, #3b82f6);

/* Gradiente de título alternativo (palavra "Musa") */
background: linear-gradient(to right, #93C5FD, #C084FC); /* blue-300 → purple-300 */

/* Fundo do canvas de partículas */
background: radial-gradient(circle at 50% 50%, #0a0f1a 0%, #05050a 100%);

/* Overlay do Hero (dissolução para o fundo) */
background: linear-gradient(to bottom, transparent, #05050A);

/* Overlay das fotos no card (revelação do nome) */
background: linear-gradient(to top, #05050A, rgba(5,5,10,0.2), transparent);

/* Botão CTA */
background: linear-gradient(to right, #1D4ED8 /* blue-700 */, #3B82F6 /* blue-500 */);

/* Gradiente de scrollbar indicator */
background: linear-gradient(to bottom, rgba(59,130,246,0.5), transparent); /* blue-500/50 */
```

---

## 3. Tipografia

### Fontes Utilizadas

Definidas em `src/index.css` via `@theme`:

```css
--font-sans: 'Inter', 'Outfit', sans-serif;
```

- **Inter**: fonte primária — humanista, geométrica, leitura em tela excelente. Disponível via Google Fonts.
- **Outfit**: fonte de fallback — geométrica e moderna, reforça o tom futurista.
- Nenhuma fonte local; ambas são carregadas via Google Fonts (ou CDN equivalente).
- `-webkit-font-smoothing: antialiased` aplicado globalmente para renderização suavíssima.

### Hierarquia Tipográfica

| Nível | Classes Tailwind | Equivalente | Uso |
|---|---|---|---|
| **H1 — Hero** | `text-5xl md:text-7xl lg:text-8xl font-black tracking-tight` | 48px / 72px / 96px, peso 900 | Título principal "Gaia Works" |
| **H2 — Section Title** | `text-5xl md:text-7xl font-bold tracking-tight` | 48px / 72px, peso 700 | Título da seção CTA |
| **H3 — Subsection** | `text-4xl md:text-5xl font-bold` | 36px / 48px, peso 700 | Títulos internos de seção |
| **H3 — Small** | `text-3xl font-bold` | 30px, peso 700 | Nome do criador no card |
| **H4 — Card Title** | `text-2xl font-bold` | 24px, peso 700 | Títulos de cards (Stack, Features) |
| **Eyebrow / Label** | `text-sm uppercase tracking-[0.3em] font-semibold` | 14px, maiúsculas, letterSpacing 0.3em | Rótulos de seção ("A Obra-Prima", "A Inspiração") |
| **Body** | `text-lg md:text-2xl font-light leading-relaxed` | 18px / 24px, peso 300 | Parágrafo do subtítulo hero |
| **Body Secondary** | `text-lg font-light leading-relaxed` | 18px, peso 300 | Parágrafos de seção |
| **Caption / Small** | `text-sm` | 14px | Descrições de cards, cargos |
| **Scroll Indicator** | `text-xs uppercase tracking-[0.3em]` | 12px, letterSpacing 0.3em | "Desça para explorar" |

### Padrão de Eyebrow (Label de Seção)

Todo início de seção usa um rótulo em maiúsculas com tracking largo antes do título principal:

```tsx
<h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
  A Inspiração
</h2>
<h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
  Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Musa</span>
</h3>
```

### Efeito de Texto Gradiente

```css
/* Utilitário .text-gradient (src/index.css) */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #ffffff, #3b82f6);
}

/* Uso inline (ex: "Musa", "Sintaxe") */
className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
```

---

## 4. Efeitos Especiais e Animações

### 4.1 Fundo de Estrelas / Partículas (Canvas)

**Arquivo:** `src/components/ui/ParticlesBackground.tsx`  
**Tecnologia:** Canvas HTML5 via React `useRef` + `requestAnimationFrame`.

#### Lógica de Geração

```tsx
// 70 partículas (estrelas) distribuídas aleatoriamente na tela
const particleCount = 70;

// Cada partícula tem:
{
  x: Math.random() * canvas.width,    // posição horizontal aleatória
  y: Math.random() * canvas.height,   // posição vertical aleatória
  radius: Math.random() * 1.5 + 0.5, // raio entre 0.5 e 2.0 px (micro pontos)
  vx: (Math.random() - 0.5) * 0.3,   // velocidade horizontal: -0.15 a +0.15 px/frame
  vy: (Math.random() - 0.5) * 0.3,   // velocidade vertical: -0.15 a +0.15 px/frame
  alpha: Math.random() * 0.5 + 0.1   // opacidade: 10% a 60% (brilho variável)
}

// Cor de cada ponto: branco semi-transparente
ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;

// Comportamento de borda: wrap-around (estrelas "reaparecem" do outro lado)
if (p.x < 0) p.x = canvas.width;
if (p.x > canvas.width) p.x = 0;
if (p.y < 0) p.y = canvas.height;
if (p.y > canvas.height) p.y = 0;
```

#### Posicionamento e Background

```tsx
// Canvas ocupa a tela toda e fica fixo (parallax passivo durante o scroll)
<canvas
  className="fixed inset-0 w-full h-full pointer-events-none z-0"
  style={{ background: 'radial-gradient(circle at 50% 50%, #0a0f1a 0%, #05050a 100%)' }}
/>
```

O gradiente radial cria um "centro iluminado" mais azulado (`#0A0F1A`) que vai escurecendo para o preto absoluto (`#05050A`) nas bordas — simulando a profundidade do espaço.

#### Responsividade

O canvas redimensiona automaticamente com `window.addEventListener('resize')` e reinicializa as partículas a cada resize.

---

### 4.2 Glows (Halos Luminosos Azuis)

#### Glow atrás do logo (Hero)

```tsx
// Halo azul desfocado atrás do logo, intensifica no hover
<div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
```

#### Glow de seção (Masterpiece)

```tsx
// Halo central enorme para "iluminar" o fundo da seção
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px] opacity-10
               pointer-events-none" />
```

#### Glow animado na CTA

```tsx
// Dois halos sobrepostos (azul + roxo) com animação de pulse
<div className="w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse" />
<div className="absolute w-[800px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-10 transform rotate-45" />
```

#### Glow de imagem (card)

```tsx
// Halo atrás do card da foto — cria profundidade
<div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-[80px] opacity-20 transform rotate-6 translate-y-8" />
```

#### Glow do botão (GlowingButton)

```css
/* Estado normal */
box-shadow: 0 0 20px rgba(29, 78, 216, 0.5);  /* shadow-[0_0_20px_rgba(29,78,216,0.5)] */

/* Estado hover */
box-shadow: 0 0 40px rgba(29, 78, 216, 0.8);  /* hover:shadow-[0_0_40px_rgba(29,78,216,0.8)] */
```

#### Glow do GlassCard (hover)

```css
/* GlassCard em hover (glowOnHover=true) */
box-shadow: 0 0 30px rgba(29, 78, 216, 0.15); /* hover:shadow-[0_0_30px_rgba(29,78,216,0.15)] */
transform: translateY(-4px);                   /* hover:-translate-y-1 */
```

#### Glow da imagem do Negócio de Bolso

```css
box-shadow: 0 0 50px rgba(59, 130, 246, 0.3); /* shadow-[0_0_50px_rgba(59,130,246,0.3)] */
```

---

### 4.3 Animações Framer Motion

**Biblioteca:** `framer-motion` v12.

#### Padrão de Entrada (Fade + Slide Up)

Usado em todos os blocos de conteúdo ao entrar no viewport:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}         // começa invisível, 50px abaixo
  whileInView={{ opacity: 1, y: 0 }}      // anima para visível na posição normal
  viewport={{ once: true, margin: "-100px" }} // dispara 100px antes de chegar na tela
  transition={{ duration: 1, ease: "easeOut" }}
>
```

#### Padrão de Entrada do Hero (Scale + Fade)

```tsx
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
```

#### Entrada Lateral (Slide Left/Right)

```tsx
// Da esquerda
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}

// Da direita
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
```

#### Scroll Indicator (apareça atrasada)

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
>
```

#### Delay em Cascata

Elementos em grid entram em sequência com `delay` incremental:
```tsx
transition={{ duration: 0.8 }}           // item 1
transition={{ duration: 0.8, delay: 0.2 }} // item 2
```

---

### 4.4 Animação CSS Nativa

#### Logo Pulsante

```tsx
// Aplicado via classe Tailwind JIT (keyframes padrão do Tailwind)
className="animate-[pulse_4s_ease-in-out_infinite]"
// → O logo do Gaia Works pulsa suavemente a cada 4 segundos
```

#### Imagem do Criador — Grayscale → Colorido no Hover

```tsx
className="grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-700 ease-out"
// Foto em preto e branco; ao hover revela as cores + leve zoom
```

#### Imagens de Card — Zoom Suave no Hover

```tsx
className="transform hover:scale-105 transition-transform duration-700 ease-out"
```

#### Overlay de Hover na Imagem do Projeto

```tsx
<div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
```

---

## 5. Componentes Principais

### 5.1 GlassCard

**Arquivo:** `src/components/ui/GlassCard.tsx`

#### Estrutura Visual

```
┌─────────────────────────────────────────────┐
│  Glass panel com blur (backdrop-filter)     │
│  Borda: 1px solid rgba(255,255,255, 0.05)  │
│  Background: rgba(10, 15, 26, 0.4)         │
│  Rounded: rounded-2xl (16px)               │
│  Padding: p-6 (24px)                       │
│                                             │
│  [ children ]                              │
└─────────────────────────────────────────────┘
```

#### CSS Completo

```css
/* Classe utilitária .glass-panel (src/index.css) */
.glass-panel {
  background: rgba(10, 15, 26, 0.4);           /* void-light com 40% de opacidade */
  backdrop-filter: blur(12px);                  /* desfoque de fundo (glassmorphism) */
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05); /* borda quase invisível, muito sutil */
}
```

#### Props e Variações

```tsx
// Uso básico
<GlassCard>Conteúdo</GlassCard>

// Com glow no hover (padrão: ativado)
<GlassCard glowOnHover={true}>Conteúdo</GlassCard>

// Card de diferencial (fundo mais escuro)
<GlassCard className="p-6 border-white/5 bg-white/5">...</GlassCard>

// Card de stack tecnológica (borda azul, gradiente)
<GlassCard className="border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">...</GlassCard>

// Card de features (borda roxa, gradiente)
<GlassCard className="border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-transparent">...</GlassCard>

// Card de foto (padding mínimo, bordas muito arredondadas)
<GlassCard className="p-2 md:p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">...</GlassCard>
```

#### Hover State (quando `glowOnHover={true}`)

```tsx
'hover:shadow-[0_0_30px_rgba(29,78,216,0.15)] hover:border-white/10 hover:-translate-y-1'
// → Sombra azul suave + borda ligeiramente mais visível + leve elevação (4px para cima)
```

---

### 5.2 GlowingButton

**Arquivo:** `src/components/ui/GlowingButton.tsx`

#### Estrutura Visual

```
╔══════════════════════════════════════╗   ← rounded-full
║  [ícone?]  TEXTO DO BOTÃO           ║   ← font-semibold text-white
╚══════════════════════════════════════╝
          ↓ blur azul abaixo
```

#### Classes Completas

```tsx
const baseClasses = cn(
  "relative inline-flex items-center justify-center px-8 py-4",  // padding generoso
  "font-semibold text-white",
  "transition-all duration-300 rounded-full",                    // pill shape
  "bg-gradient-to-r from-blue-700 to-blue-500",                 // #1D4ED8 → #3B82F6
  "shadow-[0_0_20px_rgba(29,78,216,0.5)]",                     // glow normal
  "hover:shadow-[0_0_40px_rgba(29,78,216,0.8)]",               // glow intenso no hover
  "hover:-translate-y-1 overflow-hidden group"                   // elevação no hover
);
```

#### Inner Glow no Hover

```tsx
// Camada de brilho interno que aparece no hover
<div className="absolute inset-0 w-full h-full
                bg-gradient-to-r from-blue-400 to-blue-300
                opacity-0 group-hover:opacity-20
                transition-opacity duration-300 rounded-full" />
```

#### Como Usar

```tsx
// Como link externo
<GlowingButton href="https://..." target="_blank" rel="noopener noreferrer">
  Texto do botão
</GlowingButton>

// Como botão
<GlowingButton onClick={handler}>
  Texto do botão
</GlowingButton>
```

---

### 5.3 Framing de Imagens nos Cards de Perfil

Os cards de perfil (Francisco e Gaia) seguem um padrão único de emolduração de imagem em 3 camadas:

#### Camada 1 — Halo Externo (atrás do card)

```tsx
// Cria profundidade: halo colorido desfocado atrás do card inteiro
<div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-[80px] opacity-20 transform rotate-6 translate-y-8" />
```

#### Camada 2 — O GlassCard (moldura de vidro)

```tsx
<GlassCard className="p-2 md:p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
  {/* padding mínimo (2–3px) cria uma borda fina de "vidro" */}
```

#### Camada 3 — A Imagem + Overlay de Revelação

```tsx
<div className="relative overflow-hidden rounded-[2rem] aspect-square bg-void">
  <img className="object-cover w-full h-full ..." />
  
  {/* Overlay gradiente que revela o nome na parte inferior */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent opacity-90" />
  
  {/* Identificação flutuante sobre o gradiente */}
  <div className="absolute bottom-8 left-8 right-8">
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-[2px] bg-blue-500" />   {/* linha decorativa azul */}
      <p className="text-blue-300 text-sm tracking-[0.2em] uppercase font-semibold">O Criador</p>
    </div>
    <p className="text-white font-bold text-3xl">Francisco</p>
    <p className="text-gray-400 text-sm mt-1">Engenheiro de Software</p>
  </div>
</div>
```

#### Aspect Ratios dos Cards de Imagem

- **Francisco (criador):** `aspect-square` (1:1)
- **Gaia (gata):** `aspect-[4/5]` (retrato levemente mais alto)

---

### 5.4 Badge / Label de Status

```tsx
<div className="inline-flex items-center gap-2
                px-4 py-2 rounded-full
                border border-blue-500/30 bg-blue-500/10
                text-blue-300 text-sm tracking-widest uppercase
                font-semibold backdrop-blur-md mb-8">
  <Rocket className="w-4 h-4" />
  <span>Lançamento Oficial: 1º Semestre de 2026</span>
</div>
```

---

### 5.5 Linha Decorativa do Scroll Indicator

```tsx
// Linha fina que dissolve (branco → transparente), criando sensação de infinito
<div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
```

---

### 5.6 Ícone de Stack no Card Técnico

Padrão de item de lista com ícone em container colorido:

```tsx
<div className="flex items-start gap-4">
  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
    {/* ícone Lucide React */}
    <Database className="w-5 h-5" />
  </div>
  <div>
    <h4 className="text-white font-medium">Backend</h4>
    <p className="text-gray-400 text-sm mt-1">Java, Spring Boot</p>
  </div>
</div>
```

---

## 6. Layout e Espaçamento

### Container Máximo

| Contexto | Classe | Valor |
|---|---|---|
| Seções de conteúdo | `max-w-7xl mx-auto` | 1280px centralizado |
| Hero e CTA | `max-w-5xl mx-auto` | 1024px centralizado |
| Texto da CTA | `max-w-4xl mx-auto` | 896px centralizado |
| Parágrafo de descrição | `max-w-3xl` | 768px |
| Parágrafo de CTA | `max-w-2xl mx-auto` | 672px |

### Padding Horizontal (Responsivo)

```tsx
// Padrão para seções
className="px-4 md:px-8"
// Mobile: 16px  |  Tablet+: 32px
```

### Padding Vertical (Seções)

```tsx
// Seções de conteúdo
className="py-32"       // 128px topo e base

// Hero
className="min-h-screen" // altura total da viewport

// CTA
className="py-32 md:py-48"  // 128px mobile, 192px desktop
```

### Espaçamento entre Elementos

| Padrão | Classe | Valor |
|---|---|---|
| Gap entre colunas (desktop) | `gap-16 lg:gap-24` | 64px / 96px |
| Espaço entre itens de texto | `space-y-6` a `space-y-8` | 24px–32px |
| Margem abaixo de eyebrow | `mb-4` | 16px |
| Margem abaixo de título | `mb-6` | 24px |
| Margem abaixo de seção header | `mb-20` | 80px |
| Margem abaixo de parágrafo CTA | `mb-12` | 48px |

### Grid de Cards Técnicos

```tsx
// Grid 12 colunas com proporção 7:5
<div className="grid lg:grid-cols-12 gap-8">
  <div className="lg:col-span-7">  {/* Stack Tecnológica — maior */}
  <div className="lg:col-span-5">  {/* Destaques — menor */}
```

### Estrutura de Seção com Duas Colunas

```tsx
// Flex responsivo: coluna em mobile, linha em desktop
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
  <div className="flex-1 ...">  {/* coluna esquerda */}
  <div className="flex-1 ...">  {/* coluna direita */}
```

### Z-Index Stack

| Elemento | z-index | Classe |
|---|---|---|
| Canvas de partículas | 0 | `z-0` |
| Halos / glows decorativos | auto | (sem z-index explícito, ficam abaixo pelo fluxo) |
| Overlay de gradiente Hero | 10 | `z-10` |
| Conteúdo do Hero | 20 | `z-20` |
| Conteúdo das seções | 10 | `relative z-10` |
| Conteúdo interno do GlassCard | 10 | `relative z-10` |

---

## 7. Stack Tecnológica do Frontend

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | React | 19 |
| Linguagem | TypeScript | ~5.9 |
| Bundler | Vite | 8 |
| CSS | Tailwind CSS | 4 (via `@tailwindcss/vite`) |
| Animações | Framer Motion | 12 |
| Ícones | Lucide React | 0.577 |
| Utilitário CSS | clsx + tailwind-merge | 2.1 + 3.5 |
| Deploy | GitHub Pages | (via workflow CI/CD) |

### Configuração Tailwind (Método v4)

No Tailwind v4, **não existe `tailwind.config.js`**. Todo o tema é definido diretamente no CSS com `@theme`:

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-void: #05050a;
  /* ... demais tokens */
  --font-sans: 'Inter', 'Outfit', sans-serif;
}
```

### Utilitário `cn()` (Class Names)

```ts
// src/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// → Mescla classes condicionais (clsx) e resolve conflitos Tailwind (twMerge)
```

---

## Checklist de Replicação para `franciscooliveira.space`

Para clonar a estética perfeitamente, garanta que os seguintes elementos estejam presentes:

- [ ] **Fundo**: `background-color: #05050A` no `body`
- [ ] **Canvas de Partículas**: componente `<ParticlesBackground />` fixo com `z-0`
- [ ] **Fonte**: `'Inter', 'Outfit', sans-serif` com `antialiased`
- [ ] **Cor de Texto Base**: `#D1D5DB` (platina)
- [ ] **Gradiente de Texto**: `linear-gradient(to right, #fff, #3b82f6)` em títulos principais
- [ ] **Glassmorphism**: `backdrop-filter: blur(12px)`, `background: rgba(10,15,26,0.4)`, `border: 1px solid rgba(255,255,255,0.05)`
- [ ] **Glows Azuis**: halos de `bg-blue-600 rounded-full blur-[80px–150px] opacity-10–20`
- [ ] **Botão Pill**: `rounded-full`, gradiente azul, `box-shadow` de glow, `hover:-translate-y-1`
- [ ] **Eyebrow Pattern**: `text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold`
- [ ] **Animações de Entrada**: Framer Motion com `initial={{ opacity: 0, y: 50 }}` + `whileInView`
- [ ] **Espaçamento Luxuoso**: `py-32`, `gap-16 lg:gap-24`, `max-w-7xl`
- [ ] **Cards de Imagem**: `rounded-[2.5rem]`, overlay gradiente `from-[#05050A]`, identificação sobreposta

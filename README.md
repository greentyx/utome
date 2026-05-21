# UTOME — Site Oficial

> **Tecnologia que acolhe.**  
> Startup de tecnologia inclusiva e inovação para pessoas com TEA.

---

## Sobre a UTOME

A UTOME foi fundada por **Alejandro Thalyson** com o objetivo de criar tecnologias acolhedoras, acessíveis e simples para crianças e adultos com Transtorno do Espectro Autista.

Nossos produtos são pensados desde o início com inclusão, não como adaptação tardia.

---

## Estrutura do Projeto

```
utome/
│
├── assets/
│   ├── favicon/
│   │   └── logotipo.png        ← Logo da marca
│   └── icons/                  ← Ícones SVG (Icons8 SF Regular)
│
├── pages/
│   ├── 404.html                ← Página de erro
│   └── offline.html            ← Página offline (PWA)
│
├── styles/
│   ├── variables.css           ← Design tokens (cores, espaços, tipografia)
│   ├── global.css              ← Reset + estilos base + componentes
│   ├── animations.css          ← Animações e transições
│   └── responsive.css          ← Media queries
│
├── scripts/
│   ├── main.js                 ← Entry point (ES Modules)
│   ├── navbar.js               ← Lógica da navbar
│   ├── animations.js           ← Scroll reveal
│   └── accessibility.js        ← Foco, skip link, ARIA
│
├── index.html                  ← Página principal
└── README.md
```

---

## Tecnologias

- **HTML5** semântico
- **CSS3** com custom properties
- **JavaScript** vanilla (ES Modules)
- **Google Fonts** — DM Sans
- Zero dependências externas de runtime

---

## Como executar localmente

Qualquer servidor estático funciona. Exemplos:

```bash
# Python
python -m http.server 3000

# Node.js (npx)
npx serve .

# VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Depois acesse: `http://localhost:3000`

---

## Design System

| Token | Valor |
|---|---|
| `--color-orange` | `#ff4f18` |
| `--color-black` | `#1a1a1a` |
| `--color-cream` | `#f8f6f3` |
| `--color-white` | `#ffffff` |
| `--font-body` | DM Sans |

---

## Acessibilidade

- Skip-to-content link
- Suporte a teclado no menu mobile
- ARIA labels e roles corretos
- Contraste adequado (WCAG AA)
- Animações respeitam `prefers-reduced-motion`

---

## Licença

© 2025 UTOME. Todos os direitos reservados.  
Fundada por Alejandro Thalyson.

---

*Tecnologia que acolhe.*

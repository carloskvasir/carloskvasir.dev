# Carlos Kvasir Personal Site

![License](https://img.shields.io/badge/license-MPL--2.0-blue.svg)
![Gatsby](https://img.shields.io/badge/Gatsby-v5-663399.svg)
![Node](https://img.shields.io/badge/Node-v18.20.6-339933.svg)

Blog pessoal desenvolvido com Gatsby, focado em compartilhar conhecimentos sobre desenvolvimento de software, especialmente backend.

## 🚀 Stack

- Gatsby v5
- React 18
- TypeScript
- SASS/Bulma
- Docker
- ESLint/Prettier
- GraphQL

## 💻 Pré-requisitos

- Node.js 18.20.6
- npm ou yarn
- Docker (opcional)

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run develop
```

## 📜 Scripts

| Comando | Descrição | Porta/Saída |
|---------|-----------|-------------|
| `npm run develop` | Inicia servidor de desenvolvimento | http://localhost:8000 |
| `npm run build` | Gera build otimizado para produção | `./public` |
| `npm run serve` | Serve build de produção localmente | http://localhost:9000 |
| `npm run clean` | Limpa cache e arquivos temporários | Remove `.cache` e `public` |
| `npm run format` | Formata código com Prettier | Atualiza arquivos `.js`, `.ts`, `.jsx`, `.tsx` |
| `npm run lint` | Verifica código com ESLint | Mostra erros e warnings |
| `npm run type-check` | Verifica tipos TypeScript | Exibe erros de tipagem |

## 📁 Estrutura
```
.
├── src/
│   ├── components/  # Componentes React
│   ├── pages/      # Páginas
│   ├── posts/      # Posts em MD
│   ├── styles/     # Estilos SASS
│   └── templates/  # Templates
├── .devcontainer/  # Config Dev Container
└── gatsby-*.js     # Config Gatsby
```

## 🎯 Features
- Blog em Markdown
- Portfolio de projetos
- Design responsivo (Bulma)
- Syntax highlighting
- SEO otimizado
- TypeScript
- Docker multi-stage
- CI/CD com GitHub Actions

## 📝 Licença
Este projeto está licenciado sob a **Licença Pública Mozilla 2.0 (MPL-2.0)**.

A MPL-2.0 é uma licença de código aberto que permite o uso, modificação e distribuição do código, desde que os termos da licença sejam respeitados.

Para mais informações sobre o que você pode e não pode fazer sob esta licença, acesse:
[https://choosealicense.com/licenses/mpl-2.0/](https://choosealicense.com/licenses/mpl-2.0/).

## 👨‍💻 Desenvolvido por Carlos Kvasir

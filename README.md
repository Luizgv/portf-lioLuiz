# Portfólio Luiz Gustavo - Desenvolvedor | Futuro Product Owner

Um portfólio moderno e responsivo desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e elegantes

## ✨ Funcionalidades

- 🎨 Design moderno e responsivo
- 🌓 Dark mode com toggle
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🎯 SEO otimizado
- 🎭 Animações sutis e elegantes
- 📧 Formulário de contato funcional
- 📝 Seção de artigos preparada para conteúdo futuro
- 🛠️ Código limpo e bem documentado

## 📋 Seções do Portfólio

1. **Home** - Apresentação com foto profissional e call-to-action
2. **Sobre Mim** - Biografia, valores e jornada profissional
3. **Projetos** - Destaque para Seiva e OLima com descrições técnicas
4. **Habilidades** - Competências técnicas e soft skills
5. **Artigos** - Blog pessoal para compartilhar conhecimentos
6. **Contato** - Formulário e informações para contato

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório ou extraia os arquivos
2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🚀 Deploy na Vercel

1. Faça push do código para um repositório Git
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente se necessário
4. Deploy automático será realizado

## 🎨 Personalização

### Cores

As cores do projeto estão configuradas no `tailwind.config.js`:

- Primary: `#4300d2`
- Primary Light: `#5a1de8`
- Secondary: `#270570`

### Conteúdo

Para atualizar o conteúdo:

1. **Projetos**: Edite o array `projects` em `components/Projects.tsx`
2. **Habilidades**: Modifique `skillCategories` em `components/Skills.tsx`
3. **Artigos**: Atualize o array `articles` em `components/Articles.tsx`
4. **Contato**: Configure informações em `components/Contact.tsx`

### Foto de Perfil

A foto de perfil está localizada em `public/Perfil.jpg`. Substitua por sua própria imagem mantendo o mesmo nome ou atualize o caminho em `components/Hero.tsx`.

## 📧 Configuração do Formulário de Contato

O formulário está preparado para integração com serviços como:

- Netlify Forms
- Formspree
- EmailJS
- API personalizada

Atualize a função `handleSubmit` em `components/Contact.tsx` para conectar com seu serviço preferido.

## 🔧 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── Hero.tsx          # Seção hero/home
│   ├── About.tsx         # Seção sobre mim
│   ├── Projects.tsx      # Seção projetos
│   ├── Skills.tsx        # Seção habilidades
│   ├── Articles.tsx      # Seção artigos
│   ├── Contact.tsx       # Seção contato
│   ├── Navbar.tsx        # Navegação
│   ├── Footer.tsx        # Rodapé
│   └── ThemeProvider.tsx # Provider do tema
├── public/               # Arquivos estáticos
└── tailwind.config.js    # Configuração do Tailwind
```

## 🌟 SEO

O projeto está otimizado para SEO com:

- Meta tags configuradas
- Open Graph tags
- Twitter Cards
- Schema markup preparado
- URLs amigáveis
- Performance otimizada

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Lazy loading de imagens
- Code splitting automático
- CSS otimizado
- Compressão de assets
- Lighthouse Score: 90+

## 📄 Licença

Este projeto é de uso pessoal para o portfólio de Luiz Gustavo.

## 🤝 Contato

- **Email**: luiz@exemplo.com
- **LinkedIn**: [linkedin.com/in/luizgustavo](https://linkedin.com/in/luizgustavo)
- **GitHub**: [github.com/luizgustavo](https://github.com/luizgustavo)

---

Desenvolvido com ❤️ por Luiz Gustavo | Futuro Product Owner

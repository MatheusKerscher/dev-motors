# Dev Motors

![Thumbnail](./public/images/thumbnail.png)

Este é um projeto de blog desenvolvido para a oficina **Dev Motors**, utilizando as seguintes tecnologias:

- **[Next.js](https://nextjs.org/)**: Framework React para construção de aplicações web modernas.
- **[Cosmic.js](https://www.cosmicjs.com/)**: CMS headless usado para gerenciar o conteúdo do blog.
- **SCSS**: Pré-processador CSS para estilização avançada e modular.

## Funcionalidades

- **Página inicial** com informações sobre a oficina, serviços oferecidos e contatos.
- **Blog de posts** com detalhes de cada postagem.
- **Menu responsivo** para navegação entre as páginas.
- **Hero banner** com chamada para ação (CTA).
- **Seção de serviços** com imagens e descrições.
- **Seção de contato** com informações como telefone, e-mail e endereço.
- **Design responsivo** para dispositivos móveis e desktops.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
src/
├── app/                # Páginas e layout principal
├── components/         # Componentes reutilizáveis
├── utils/              # Tipos e funções utilitárias
```

## Tecnologias Utilizadas

- **Next.js**: Para renderização no lado do servidor (SSR) e geração de páginas estáticas.
- **Cosmic.js**: Para gerenciamento de conteúdo dinâmico.
- **SCSS**: Para estilização modular e reutilizável.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Lucide Icons**: Ícones modernos para melhorar a interface.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusKerscher/dev-motors.git
   cd dev-motors
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   NEXT_PUBLIC_API_URL=<URL da API do Cosmic.js>
   COSMIC_READ_KEY=<Chave de leitura do Cosmic.js>
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run start`: Inicia o servidor de produção.

## Estilização

O projeto utiliza SCSS para estilização modular. Cada componente possui seu próprio arquivo `.module.scss`, garantindo isolamento de estilos e facilidade de manutenção.

## Gerenciamento de Conteúdo

O conteúdo do blog é gerenciado pelo **Cosmic.js**, permitindo a criação e edição de posts, serviços e informações de contato diretamente no painel do CMS.

## Deploy

O projeto pode ser facilmente implantado na **Vercel**, a plataforma oficial para aplicações Next.js. Para mais informações, consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

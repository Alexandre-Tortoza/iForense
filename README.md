# iForense - Teste Técnico Frontend Jr Vue.js

Este projeto foi desenvolvido como parte do teste técnico para a vaga de Frontend Jr, utilizando Vue.js 3 com Composition API.

## Requisitos do Projeto

O projeto atende aos seguintes requisitos:

1. **Consumo de API**

   - Utiliza a API pública JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
   - Implementa loading state durante o carregamento dos dados
   - Tratamento de erros na requisição

2. **Visualização dos Dados**

   - Exibe os posts em dois formatos:
     - Tabela: mostra ID, título e corpo do post
     - Cards: apresenta título e corpo do post em formato de cards
   - Botão para alternar entre os modos de visualização

3. **Tecnologias Utilizadas**

   - Vue.js 3 com Composition API
   - Tailwind CSS para estilização
   - Axios para requisições HTTP
   - Vite como bundler

4. **Estrutura do Projeto**
   - Componentes reutilizáveis
   - Gerenciamento de estado com Composition API
   - Serviços separados para chamadas à API
   - Layout responsivo

## Instalação e Execução

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para build de produção:
   ```bash
   npm run build
   ```

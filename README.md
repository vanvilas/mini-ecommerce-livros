# 📚 Mini E-commerce de Livros

Projeto criado com React focado em funcionalidades reais e testes automatizados com Jest e Cypress.

---

## 💡 Sobre o Projeto

Uma aplicação de e-commerce simples onde o usúario pode:
- Visualizar uma lista de livros
- Adicionar ou remover livros do carrinho
- Finalizar uma compra
- Ver uma mensagem de confirmação
- Persistir o carrinho com `localStorage`

Tudo isso acompanhado por testes unitários e de ponta a ponta!

---

## 📦 Tecnologias usadas

- **React**
- **HTML + CSS**
- **JavaScript**
- **Cypress** (testes E2E)
- **Jest** (testes unitários)
- **Vite**
- **Git + GitHub**

---

## 🧪 Testes Automatizados

### ✔️ Unitários (Jest)
- Simulação do localStorage (get, set e clear)
- Teste do carrinho com mock de livros
- Validação das funções: 
- `addToCart`
- `removeFromCart`
- `clearCart` 

### 🌐 E2E (Cypress)
- Visualização da lista de livros
- Clique no botão "Ver mais livros" (paginação dinâmica)
- Adição de livros ao carrinho
- Acesso ao checkout
- Finalização da compra com mensagem de sucesso
- Limpeza do carrinho após o pedido

---

## ✅ Funcionalidades testadas (com prints)

### 📌 Lista inicial carregada com botão visível
![Lista de livros carregada](cypress/screenshots/Captura%20de%20tela%202025-04-27%20150351.png)  
*A página inicial mostra os livros renderizados e o botão "Ver mais livros" disponível para interação.*

---

### 📚 Novos livros exibidos após clique
![Mais livros carregados](cypress/screenshots/Captura%20de%20tela%202025-04-29%20183819.png)  
*Ao clicar no botão, mais 3 livros são carregados, simulando uma API paginada.*

---

## 🧠 Aprendizados

- Organizar o projeto de forma testável desde o início
- Simular `localStorage` em ambiente de teste
- Automatizar o fluxo de compra com Jest e Cypress
- Criar componentes reutilizáveis com boa estrutura de código

---

## 🚀 Próximos Aprendizados 

- Conectar o projeto com uma API real (ou mock com JSON Server)
- Automatizar deploy com GitHub Actions (CI/CD)
- Explorar testes de integração
- Criar versão com backend Node.js (em novo repositório)

---

## 💻 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/vanvilas/mini-ecommerce-livros.git

# Acesse a pasta
cd mini-ecommerce-livros

# Instale as dependências
npm install

# Rode a aplicação
npm run dev

# Para rodar os testes unitários com Jest
npm test

# Para iniciar os testes E2E com Cypress
npx cypress open
```

## 👩‍💻 Desenvolvedora

Projeto feito com 💙 por Vanessa
🔍 Em busca de oportunidade como estagiária em QA/Testes Automatizados
[Linkedin](https://www.linkedin.com/in/vanessa-vilas-boas)

---

## ⭐ Status

✅ Finalizado — com espaço para melhorias e novos aprendizados


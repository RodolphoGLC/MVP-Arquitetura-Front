# 🎴 Pokémon Team Builder – Front-end

Aplicação web para criação, edição e gerenciamento de **times Pokémon**, desenvolvida em **React + TypeScript**, integrada a uma API própria e à **PokéAPI** para obtenção de dados oficiais dos Pokémon.

Este front-end faz parte de uma aplicação **full stack** e **deve ser executado junto com o back-end via Docker Compose**.

---

## ✨ Funcionalidades

- 📋 Listagem de times Pokémon
- ➕ Criação de novos times
- ✏️ Edição de times existentes
- 🗑️ Exclusão de times
- 🎴 Visualização dos Pokémon do time
- 🎨 Interface moderna com cards, animações e layout responsivo
- 🔗 Integração com a API do back-end
- 🌐 Consumo da PokéAPI para dados visuais

---

## 🌐 API Externa

O projeto consome a **PokéAPI**, utilizada para buscar informações oficiais dos Pokémon, como:

- Nome
- ID
- Tipos
- Imagem (sprite oficial)

🔗 https://pokeapi.co/

> A PokéAPI é utilizada **apenas no front-end** para exibição visual.  
> Os dados persistidos ficam armazenados via back-end.

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Fetch API (sem Axios)
- CSS moderno (cards e animações)
- Docker

---

## 📁 Estrutura do Projeto

```text
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── Dockerfile
└── README.md
```

## 🔗 Integração com o Back-end

O front-end se comunica com uma API desenvolvida em **FastAPI**, responsável por:

- Criar times Pokémon
- Editar times
- Excluir times
- Listar times
- Persistir dados em PostgreSQL

A comunicação ocorre via **HTTP (REST)** utilizando `fetch`.

---

## 🚀 Como Rodar o Projeto

⚠️ **Este front-end não deve ser executado isoladamente.**  
Ele depende do back-end e do banco de dados.

---

### Pré-requisitos

- Docker (baixado e iniciado)
- Docker Compose
- Clonar o Front do git: https://github.com/RodolphoGLC/MVP-Arquitetura-Front
- Criar uma pasta em algum lugar no seu computador
- Você precisa copiar e colar a pasta back na pasta criada, junto aos 2 arquivos do repositório do front a estrutura que deverá ficar está abaixo:

```text
front/
back/
docker-compose.yml
```

---

### ▶️ Subindo Front + Back

Na **raiz do projeto** (onde está o `docker-compose.yml`), execute:

```bash
docker compose up --build
```

Quando o primeiro comando terminar de rodar, vc vai rodar o comando abaixo em um novo terminal
⚠️ **Este comando precisará que o back esteja rodando no docker.**  

```bash
docker compose exec backend alembic upgrade head
```

Este comando irá:

- Subir o banco PostgreSQL
- Subir o back-end (FastAPI)
- Subir o front-end (React)

---

## 🌐 Acessos

| Serviço | URL |
|------|-----|
| Front-end | http://localhost:5173 |
| Back-end (API) | http://localhost:8000 |
| Swagger | http://localhost:8000/docs |
| Redoc | http://localhost:8000/redoc |

---

## ⚙️ Observações Importantes

- Não é necessário rodar `npm install`
- O front já está configurado para consumir a API via Docker Network
- Comunicação HTTP realizada com `fetch`
- O front e o back devem rodar na **mesma stack Docker**

---

## 📌 Considerações Finais

Este projeto foi desenvolvido com foco em:

- Arquitetura Full Stack
- Integração entre front-end e back-end
- Uso de APIs REST
- Containerização com Docker

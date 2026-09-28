---
title: "Task Tracker"
description: "Um pequeno gerenciador de tarefas auto-hospedado para times, com uma API em Node.js e um cliente web leve."
techStack:
  - "TypeScript"
  - "Node.js"
  - "PostgreSQL"
  - "Docker"
links:
  repo: "https://github.com/mavalu22/sample-task-tracker"
  demo: "https://sample-task-tracker.example.com"
order: 1
date: 2024-03-01
cover: "./cover.png"
coverAlt: "Captura de tela do quadro do Task Tracker com três colunas de cartões de tarefas"
---

Este é um conteúdo de exemplo (placeholder) usado para testar o layout e o pipeline de conteúdo do site. Ele será substituído por um projeto real antes do lançamento.

Task Tracker é uma pequena aplicação auto-hospedada para times que querem um quadro estilo Kanban simples, sem a complexidade de uma ferramenta maior de gerenciamento de projetos. Ela expõe uma API REST escrita em Node.js e TypeScript, com PostgreSQL como banco de dados, e é distribuída como imagens Docker para que um time possa rodá-la na própria infraestrutura em poucos minutos.

## Por que eu construí

A maioria dos quadros de tarefas que testei era simples demais para o fluxo de trabalho de um time pequeno, ou pesada demais para hospedar com conforto. Eu queria algo que:

- Rodasse bem em um único servidor pequeno ou num Raspberry Pi
- Mantivesse todos os dados em um único banco PostgreSQL, fácil de fazer backup
- Tivesse uma API REST documentada, para ser usada em scripts ou integrada a outras ferramentas
- Fosse distribuído como imagens Docker, para que a instalação fosse um `docker compose up`

## Como funciona

O backend expõe uma pequena API REST para quadros, colunas e cartões. Cada quadro pode ter qualquer número de colunas, e os cartões podem ser movidos entre colunas ou reordenados dentro de uma mesma coluna. A autenticação usa cookies de sessão assinados, e a API valida cada payload com um schema antes de tocar no banco de dados.

Um cliente web mínimo, escrito em TypeScript puro e sem framework, consome a API e renderiza o quadro. Ele se comunica com o backend apenas por endpoints documentados como:

```ts
async function moveCard(cardId: string, toColumnId: string, position: number) {
  const response = await fetch(`/api/cards/${cardId}/move`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ toColumnId, position }),
  });

  if (!response.ok) {
    throw new Error(`Failed to move card: ${response.status}`);
  }

  return response.json();
}
```

Veja o [README do projeto](https://github.com/mavalu22/sample-task-tracker) para a referência completa da API e a configuração do Docker Compose usada para rodá-lo localmente ou em um servidor pequeno.

## O que eu aprendi

Construir a lógica de reordenação por arrastar e soltar sobre um banco de dados relacional, sem introduzir condições de corrida quando duas pessoas movem cartões ao mesmo tempo, foi a parte mais interessante do projeto. Isso me levou a modelar a posição do cartão como um índice fracionário em vez de um inteiro simples, o que evita renumerar todos os cartões de uma coluna a cada movimento.

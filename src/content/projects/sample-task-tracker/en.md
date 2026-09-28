---
title: "Task Tracker"
description: "A small self-hosted task tracker for teams, built with a Node.js API and a lightweight web client."
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
coverAlt: "Screenshot of the Task Tracker board with three columns of task cards"
---

This is placeholder sample content used to test the site's layout and content pipeline. It will be replaced with a real project before launch.

Task Tracker is a small self-hosted application for teams who want a simple Kanban-style board without the overhead of a larger project management tool. It exposes a REST API written in Node.js and TypeScript, backed by PostgreSQL, and ships as a set of Docker images so a team can run it on their own infrastructure in minutes.

## Why I built it

Most task boards I tried were either too simple for a small team's workflow or too heavy to self-host comfortably. I wanted something that:

- Runs comfortably on a single small server or a Raspberry Pi
- Keeps all data in one PostgreSQL database, easy to back up
- Has a documented REST API so it can be scripted or integrated with other tools
- Ships as Docker images, so setup is a `docker compose up`

## How it works

The backend exposes a small REST API for boards, columns and cards. Each board can have any number of columns, and cards can be moved between columns or reordered within one. Authentication uses signed session cookies, and the API validates every payload with a schema before touching the database.

A minimal web client, built with plain TypeScript and no framework, consumes the API and renders the board. It talks to the backend only through documented endpoints such as:

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

See the [project's README](https://github.com/mavalu22/sample-task-tracker) for the full API reference and the Docker Compose setup used to run it locally or on a small server.

## What I learned

Building the drag-and-drop reordering logic on top of a relational database, without introducing race conditions when two people move cards at the same time, was the most interesting part of the project. It pushed me to model card position as a fractional index instead of a plain integer, which avoids renumbering every card in a column on each move.

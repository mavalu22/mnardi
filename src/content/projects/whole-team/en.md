---
title: "WholeTeam"
description: "A software factory for AI coding agents: turns Claude Code or Codex into a full software team that defines your product, then builds it task by task through tests, review, QA and security."
techStack:
  - "Multi-agent"
  - "Claude Code"
  - "OpenAI Codex"
  - "Agentic workflows"
  - "Model tiering"
  - "Git worktrees"
links:
  repo: "https://github.com/mavalu22/whole-team"
category: "Developer Tools"
topics:
  - "Developer Tools"
  - "AI"
  - "Automation"
meta:
  - label: "Role"
    value: "Creator · Product · Workflow design"
  - label: "Stack"
    value: "Multi-agent · Agentic workflows · Git worktrees"
  - label: "Agents"
    value: "Claude Code · OpenAI Codex"
  - label: "Version"
    value: "1.3.2"
order: 1
date: 2026-09-30
cover: "./wholeteam-workflow-dark.png"
coverAlt: "WholeTeam workflow diagram (simplified)"
---

WholeTeam is a software factory for AI coding agents. It is a set of role definitions, workflow rules, templates and installer scripts that turn Claude Code or OpenAI Codex into a complete software team. The team includes a Product Owner, Architect, Developer, Test Engineer, QA, Security and more.

You install it once into an existing git project and type `Let's code`. From then on the main session acts as the **Orchestrator**. It keeps the project state in files and delegates specialist work to 13 role agents, each running on a model tier suited to its job.

## How it works

1. **Discovery:** the team defines the product with you in 8 short steps, each one approved by you. You can brainstorm with it and push back on its recommendations.
2. **Backlog:** it generates tasks with a dependency graph, waves and checkpoints.
3. **Delivery:** it builds the backlog task by task, or in parallel. Each task is developed and then goes through the gates your process enables: tests, code review, QA and security.
4. **Checkpoints:** at each milestone it verifies the build and tests, updates the docs and CHANGELOG, writes a validation report and, once you approve, merges `develop` into `main`.

When the backlog is done, the project moves to maintenance: you report bugs or ask for new features, and it implements them through the same pipeline.

## Highlights

- **New or ongoing projects.** In an existing codebase it starts with a reverse Discovery: it reads the code, runs a baseline of your tests and build before changing anything, and can audit the code for bugs and security issues.
- **Process presets.** `mvp`, `standard` and `complete` let you choose how much process a product needs. You can change it at any time on a running project.
- **Many interface types.** It supports `gui`, `api`, `cli`, `service`, `library` and `plugin` products, and combinations of them. Each interface gets its own spec, tests, QA and checkpoint instructions.
- **State in files.** Project state lives in the repository, so work can be resumed, reviewed and audited.
- **Cross-platform installers.** Install and update with `install.sh` (Linux, macOS, Git Bash) or `install.ps1` (Windows).
- **Configurable.** Most of the process is set in one config file: which pipeline stages run, when you approve, the model tier for each role, how many rejections before it stops and asks you, security review depth, audits on checkpoints, checkpoint merges by PR or locally, and whether commits credit the AI.

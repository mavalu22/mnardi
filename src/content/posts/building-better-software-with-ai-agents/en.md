---
title: "Building better software with AI agents"
date: 2026-09-01
summary: "Orchestration, context, evaluation, and where agent workflows actually help."
topics:
  - "AI"
  - "Engineering"
---

AI coding agents are useful long before they are fully autonomous. The interesting engineering problem is not making one model do everything; it is deciding where to put different capabilities, what context to pass forward, and how to verify each stage.

## Start with responsibilities

Instead of one giant prompt, the workflow can be divided into roles. A planning step can produce a concise product and architecture brief. An implementation step can focus on code. Tests and security can then act as independent checks.

## Context is an engineering resource

Passing every previous message to every agent is expensive and often noisy. Good orchestration should preserve decisions, constraints, and artifacts while dropping irrelevant conversational state.

```text
plan → architecture → implementation → tests → security → review
```

## Verification should be explicit

The most useful workflows make each stage leave a concrete artifact: a plan, a diff, a test result, or a review. That makes it easier to stop, retry, or hand work to another agent without losing the thread.

## Where this leads

For me, the most promising direction is not "AI replaces the team." It is software that coordinates different AI capabilities while keeping human decisions visible and the resulting system understandable.

---
title: "Goalden"
description: "Task and planning product designed around radical simplicity, recurring work, goals, and sync."
techStack:
  - "Go"
  - "Flutter"
  - "Supabase"
category: "Product"
topics:
  - "Product"
  - "Backend"
meta:
  - label: "Role"
    value: "Product · Backend"
  - label: "Status"
    value: "In development"
  - label: "Stack"
    value: "Go · Flutter"
  - label: "Sync"
    value: "Supabase"
order: 1
cover: "./cover.svg"
coverAlt: "Goalden interface concept"
---

A simple task and planning application designed to make everyday work feel focused instead of overloaded.

## Overview

Goalden is a personal SaaS idea centered on daily and weekly planning. The design direction is deliberately restrained: large typography, a dark surface, gold accents, and as little visual clutter as possible.

## Product direction

The first version focuses on desktop. Tasks support dates, priorities, notes, recurrence, time ranges, drag ordering, postponement, deletion, and independent recurring instances.

## Architecture

The client is built with Flutter while the backend is written in Go. Local persistence is used as a synchronization boundary with Supabase, keeping the interface fast while the remote store handles shared state.

## What I am exploring

- Simple state synchronization without making the UI feel network-dependent.
- Recurring tasks that remain independent after creation.
- How much functionality a productivity tool can hide while staying predictable.

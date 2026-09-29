---
title: "ADA Management"
description: "Academic support management system with structured workflows, reports, and data integrity."
techStack:
  - "Go"
  - "React"
  - "PostgreSQL"
category: "Academic system"
topics:
  - "Backend"
meta:
  - label: "Role"
    value: "Full-stack · Backend"
  - label: "Stack"
    value: "Go · React"
  - label: "Database"
    value: "PostgreSQL"
  - label: "Context"
    value: "University · TCC"
order: 2
cover: "./cover.svg"
coverAlt: "Architecture diagram concept"
---

A management system for academic support workflows, designed to replace fragmented administrative steps with one structured interface.

## Overview

The system is centered on academic administration and recurring workflows. The implementation prioritizes clear domain boundaries, predictable data relationships, and a UI that maps closely to the underlying process.

## Technical direction

The frontend uses React and the backend uses Go. The data model is represented through GORM and PostgreSQL, with the API responsible for validation and business rules.

## What this project demonstrates

- Translating real administrative feedback into concrete system behavior.
- Designing relational structures around domain workflows instead of isolated screens.
- Maintaining consistency between diagrams, code, and generated database schema.

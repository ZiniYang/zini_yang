---
layout: project
title: LLMs Creativity Evaluation Benchmark
description: Measuring how closely model outputs align with human creativity
importance: 1
category: research
related_publications: false
---

Most creativity benchmarks only use explicitly defined criteria, which miss the nuance in human-generated ideas. I build a two-step framework that uses human responses to ground evaluation: (1) learn the smallest convex hull containing high-density human responses in embedding space, and (2) compute an LLM coverage rate that measures how many model outputs fall inside that human-grounded boundary.

Across divergent thinking, code generation, and creative writing tasks, the LLM coverage rate dropped as tasks demanded more thoughtful responses—highlighting where models fall short of human-level creativity.

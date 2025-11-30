---
layout: project
title: LLM-Based Vaccine Warning System
description: Early risk detection from massive open-source text
importance: 2
category: research
---

News coverage of vaccine issues spikes only after crises escalate, so early signals in open-source data often go unnoticed. I built an end-to-end pipeline that scans terabytes of Common Crawl to surface weak signals quickly:

- A FastText-based coarse filter runs >1,000x faster than LLM classification while keeping ~60% precision.
- A locally hosted Qwen model performs fine-grained labeling with validated prompts.
- UMAP clustering plus LLM-generated summaries improve interpretability by revealing emerging discourse patterns.

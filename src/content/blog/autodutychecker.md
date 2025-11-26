---
title: "AutoDutyChecker – AI-Powered Import Duty Estimation"
description: "How I built an end-to-end tool to help Ghanaian car importers estimate duties with accuracy and transparency."
publishDate: "2024-12-20"
isFeatured: true
tags:
  - AI
  - Ghana
  - Data
---

AutoDutyChecker solves a very real problem in Ghana:  
importers often have *no idea* what their duty charges will be until they reach the port.

This uncertainty leads to stress, hidden costs, and in some cases, people losing money.

## Why I Built It
My family has imported several vehicles from Korea, and I saw firsthand how  
complex the estimation process was. Every importer I spoke to said the same:

> “I wish there was a simple tool that tells me the duty before I ship.”

So I built one.

## How It Works
The system takes core variables:

- Make  
- Model  
- Engine capacity  
- Year  
- Cost value  
- Exchange rate  

And then calculates:

- **CIF value**  
- **Import duty**  
- **VAT**  
- **Levies and fees**  
- **Total port charges**  

## Technical Highlights
- Formula engine for customs rules  
- Updated rates via a small data API  
- Clean UI for quick checks  
- PDF export for estimates  

## Impact
This tool removes uncertainty and empowers importers with clarity.  
It’s one of the most practical AI/data projects I’ve worked on,  
designed specifically for the Ghanaian context.
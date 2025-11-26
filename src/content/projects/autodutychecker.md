---
title: "AutoDutyChecker – Ghana Car Import Duty Estimator"
description: "A web app that helps Ghanaian car importers quickly estimate customs duties and fees using vehicle details."
publishDate: 2024-06-15
isFeatured: true
tags:
  - AI
  - Data Engineering
  - Ghana
---

AutoDutyChecker is a project I built to help people in Ghana estimate how much they will pay in import duty when bringing a car into the country.

Instead of guessing or relying on informal quotes, users can enter information such as:

- Vehicle make and model  
- Year of manufacture  
- Engine capacity  
- Estimated vehicle value  
- Port and clearing options  

The system applies configurable duty rules, taxes, and port charges, then returns an estimated breakdown of:

- CIF value  
- Duty, VAT, and other taxes  
- Port and handling charges  
- Total expected cost  

I designed the system with:

- A clean web front end for non-technical users  
- A rules engine that can be updated when customs policies change  
- A data model that keeps historical calculations for later analysis  

This project matters because import duty is a major cost for car buyers in Ghana, and having a transparent estimate helps people make better financial decisions before shipping a vehicle.
---
title: "Building a Dog-Breed Classifier with Transfer Learning (AWS x Udacity)"
description: "A computer vision project where I fine-tuned a pre-trained CNN to classify 133 dog breeds."
publishDate: "2024-10-15"
isFeatured: false
tags:
  - AI
  - Computer Vision
  - AWS
---

This project was part of the **Future AWS AI Scientist** program.  
The goal was to classify dog breeds using a pre-trained convolutional neural network.

## Approach
I started with a ResNet-based model and fine-tuned it:

1. Pre-processed images  
2. Augmented the dataset  
3. Froze base layers  
4. Trained final layers  
5. Evaluated on a validation set  

## Results
- Strong accuracy  
- Improved generalization with augmentation  
- Clear confusion matrix patterns for similar breeds  

## What I Learned
This project strengthened my understanding of:

- Transfer learning  
- Training strategies  
- Debugging CV pipelines  

It was a great introduction to production-level computer vision on AWS.
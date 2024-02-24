---
title: "Paper Title Number 3"
collection: publications
permalink: /publication/2024-2-aligner.md
date: 2024-02-02
venue: 'Under review'
paperurl: 'https://arxiv.org/pdf/2402.02416.pdf'
---
## Author
Jiaming Ji\*, Boyuan Chen\*, **Hantao Lou**, Donghai Hong, Borong Zhang, Xuehai Pan, Juntao Dai, Yaodong Yang

## Abstract
Efforts to align Large Language Models (LLMs) are mainly conducted via Reinforcement Learning from Human Feedback (RLHF) methods. However, RLHF encounters major challenges including training reward models, actor-critic engineering, and importantly, it requires access to LLM parameters. Here we introduce *Aligner*, a new efficient alignment paradigm that bypasses the whole RLHF process by learning the correctional residuals between the aligned and the unaligned answers. Our *Aligner* offers several key advantages. Firstly, it is an autoregressive seq2seq model that is trained on the query-answer-correction dataset via supervised learning; this offers a parameter-efficient alignment solution with minimal resources. Secondly, the *Aligner* facilitates *weak-to-strong generalization*;finetuning large pretrained models by *Aligner*'s supervisory signals demonstrates strong performance boost. Thirdly, *Aligner* functions as a model-agnostic plug-and-play module, allowing for its direct application on different open-source and API-based models. Remarkably, *Aligner*-7B improves 11 different LLMs by $21.9$\% in helpfulness and $23.8$\% in harmlessness on average (GPT-4 by $17.5$\% and $26.9$\%). When finetuning (strong) Llama2-70B with (weak) *Aligner*-13B's supervision, we can improve Llama2 by $8.2$\% in helpfulness and $61.6$\% in harmlessness.
See our dataset and code at [https://aligner2024.github.io](https://aligner2024.github.io).

[Paper link](https://arxiv.org/pdf/2402.02416.pdf)
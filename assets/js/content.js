/*
 * ================================================================
 * EDIT YOUR WEBSITE CONTENT IN THIS FILE
 * ================================================================
 *
 * You normally do not need to edit index.html, site.js, or styles.css.
 *
 * Formatting you can use inside text:
 *   **bold text**
 *   [link text](https://example.com)
 *
 * Important:
 *   - Keep quotation marks, commas, and brackets in place.
 *   - Text must be inside backticks: `like this`
 *   - Save the file, then refresh the website.
 *   - See EDITING_GUIDE.md for a Chinese step-by-step guide.
 */

window.SITE_CONTENT = {
  seo: {
    title: `Zini Yang | JHU Computer Science PhD`,
    description: `Zini Yang is a Computer Science PhD student at Johns Hopkins University computational social science and NLP.`,
    keywords: `Zini Yang, Johns Hopkins University, JHU, Computer Science, Trustworthy AI, Computational Social Science, Game Theory, Behavioral Economics, Network Science`,
  },

  profile: {
    name: `Zini Yang`,
    photo: `assets/images/zini_jhu_cropped.jpg`,
    photoAlt: `Zini Yang`,

    captions: [
      `PhD @ JHU CS`,
      `MS @ Duke CS & Econ`,
    ],

    bio: [
      `Hi! I am a PhD student in Computer Science at Johns Hopkins University, advised by [Prof. Kristina Gligorić](https://gligoric.cs.jhu.edu/). My research bridges computational social science and AI, focusing on game theory, behavioral economics, and network science to build socially aware and trustworthy AI.`,
      `Before joining Johns Hopkins, I completed my master's studies in Computer Science and Economics at Duke University, where I worked with [Prof. Emily Wenger](https://www.emilywenger.com/) at the [Argus Lab](https://arguslab.pratt.duke.edu/). I completed my undergraduate studies in Mathematical Economics at Shanghai University of Finance and Economics (SUFE) under [Prof. Simin He](https://hesimin.com/), where I worked on behavioral economics.`,
    ],

    contacts: [
      { label: `Email`, url: `mailto:zyang181@jh.edu` },
      { label: `CV`, url: `assets/Zini_Yang_CV_new.pdf` },
      { label: `GitHub`, url: `https://github.com/ZiniYang` },
      { label: `LinkedIn`, url: `https://www.linkedin.com/in/zini-yang-6517102a0/` },
    ],
  },

  research: {
    title: `Research Interests`,
    interests: [
      {
        title: `Social Science for Trustworthy AI`,
        description: `Utilize insights from game theory, behavioral economics, and network science to bridge the gaps between LLMs and human intelligence and build more socially aware, aligned models.`,
      },
      {
        title: `AI for Science & Social Science`,
        description: `Explore how AI can enhance scientific discovery and social science, improving modeling and simulations of human behavior.`,
      },
    ],
  },

  publications: [
    {
      title: `Inequality Ranking and Inference System (IRIS) — Giving Mathematical Conjectures Numerical Value`,
      authors: `**Zini Yang**, Ethan Fang, Junwei Lu`,
      venue: `ICML 2025 Workshop on AI for Math, 2025`,
      description: `We introduce the **Inequality Ranking and Inference System (IRIS)**, a system that quantifies and ranks mathematical conjectures through sharpness, diversity, difficulty, and novelty metrics. By re-engineering the GraffitiAI pipeline, IRIS scales conjecture evaluation and includes an automated counterexample discovery system using GNN embeddings and PPO-based reinforcement learning, refuting 95% of tested conjectures.`,
      image: `assets/images/mathematics.png`,
      imageAlt: `Inequality Ranking and Inference System (IRIS)`,
      links: [
        { label: `PDF`, url: `https://openreview.net/pdf?id=v6Ulp3U1ZT` },
        { label: `OpenReview`, url: `https://openreview.net/forum?id=v6Ulp3U1ZT` },
      ],
      keywords: `AI for Science, Reinforcement Learning, Graph Neural Networks, Automated Reasoning`,
    },
  ],

  /*
   * PROJECTS
   *
   * Leave this list empty to hide Projects from the page and navigation.
   * Later, copy the example below into the list and replace its content.
   *
   * Example:
   * {
   *   title: `My New Project`,
   *   authors: `Advisor: Prof. Name`,
   *   venue: `Ongoing Research`,
   *   description: `A short description of the project.`,
   *   image: `assets/images/my-project.png`,
   *   imageAlt: `My project illustration`,
   *   links: [
   *     { label: `Paper`, url: `https://example.com` },
   *   ],
   *   keywords: `NLP, Computational Social Science`,
   * },
   */
  projects: [],

  news: [
    {
      date: `Aug 2026`,
      text: `Started my PhD in Computer Science at [Johns Hopkins University](https://www.jhu.edu/), advised by [Prof. Kristina Gligorić](https://gligoric.cs.jhu.edu/).`,
    },
    {
      date: `July 2026`,
      text: `Presented research at [ICML Cultural AI Workshop 2026](https://www.doingaidifferently.org/culturexaiworkshop).`,
    },
    {
      date: `Aug 2024`,
      text: `Started MS in Computer Science and Economics at [Duke University](https://duke.edu/).`,
    },
  ],
};

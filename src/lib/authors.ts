export interface Author {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  lastUpdatedAt: string;
}

const AUTHORS: Author[] = [
  {
    slug: 'hasham-ul-haq',
    name: 'Hasham Ul Haq',
    role: 'Co-Founder',
    image: '/assets/blog/hasham-ul-haq.jpeg',
    bio: 'Hasham Ul Haq is a Data Scientist at John Snow Labs, and an AI scholar and researcher at PI School of AI. During his carrier, he has worked on numerous projects across various sectors, including healthcare. At John Snow Labs, his primary focus is to build scalable and pragmatic systems for NLP, that are both, production-ready, and give SOTA performance. In particular, he has been working on Natural Language Inference, disambiguation, Named Entity Recognition, and a lot more! Hasham also has an active research profile with a publications in NeurIPS, AAAI, and multiple scholarship grants and affiliations. Prior to John Snow Labs, he was leading search engine and knowledge base development at one of Europe’s largest telecom providers. He has also been mentoring startups in computer vision by providing trainings and designing ML architectures.',
    lastUpdatedAt: '1st January'
  },
  {
    slug: 'ritwik-jain',
    name: 'Ritwik Jain',
    role: 'Co-Founder',
    image: '/assets/blog/ritwik-jain.jpg',
    bio: 'Ritwik Jain is the Co-Founder of Martlet AI, a John Snow Labs spin-off building products for the clinical coding and risk adjustment ecosystem to advance value based care. He also serves as Senior Director of Healthcare Payers at John Snow Labs, where he leads the adoption of NLP and Generative AI across major U.S. health plans. With a background in AI, digital and cloud transformation, Ritwik focuses on aligning innovation with business outcomes to improve efficiency, accuracy, and scalability in healthcare.',
    lastUpdatedAt: '1st January'
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(author => author.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  // Simple check, might need normalization if names vary slightly
  return AUTHORS.find(author => author.name === name);
}

export function getAllAuthors(): Author[] {
  return AUTHORS;
}

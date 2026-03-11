export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  year: number;
  abstract: string;
  type: 'Journal Article' | 'Clinical Trial' | 'Review' | 'Systematic Review';
  doi: string;
  tags: string[];
}

export const mockPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Efficacy of mRNA Vaccines against SARS-CoV-2 Variants: A Systematic Review',
    authors: ['Sarah Johnson', 'Michael Chen', 'Elena Rodriguez'],
    journal: 'The Lancet Infectious Diseases',
    date: '2023-11-15',
    year: 2023,
    abstract: 'This systematic review evaluates the neutralizing activity and real-world effectiveness of mRNA-1273 and BNT162b2 vaccines against emerging variants of concern...',
    type: 'Systematic Review',
    doi: '10.1016/S1473-3099(23)00456-X',
    tags: ['Vaccines', 'COVID-19', 'Immunology']
  },
  {
    id: '2',
    title: 'Neural Architecture of Cognitive Flexibility in Aging Populations',
    authors: ['David Smith', 'Amara Okafor'],
    journal: 'Nature Neuroscience',
    date: '2024-01-20',
    year: 2024,
    abstract: 'We used high-resolution functional MRI to investigate the structural and functional connectivity patterns associated with cognitive flexibility in adults aged 65-85...',
    type: 'Journal Article',
    doi: '10.1038/s41593-023-01512-4',
    tags: ['Neuroscience', 'Aging', 'MRI']
  },
  {
    id: '3',
    title: 'Phase III Trial of Targeted Therapy in Advanced Non-Small-Cell Lung Cancer',
    authors: ['Li Wei', 'James Anderson', 'Sofia Rossi'],
    journal: 'New England Journal of Medicine',
    date: '2023-09-05',
    year: 2023,
    abstract: 'In this double-blind, randomized phase III trial, we compared the efficacy of a novel tyrosine kinase inhibitor with standard chemotherapy in patients with NSCLC...',
    type: 'Clinical Trial',
    doi: '10.1056/NEJMoa2308712',
    tags: ['Oncology', 'Lung Cancer', 'Clinical Trials']
  },
  {
    id: '4',
    title: 'Gut Microbiome Composition and Response to Immunotherapy in Melanoma',
    authors: ['Emma Thomas', 'Klaus Meyer'],
    journal: 'Science',
    date: '2023-12-10',
    year: 2023,
    abstract: 'Recent studies suggest that the composition of the gut microbiota influences the therapeutic response to immune checkpoint inhibitors in patients with metastatic melanoma...',
    type: 'Journal Article',
    doi: '10.1126/science.ade3452',
    tags: ['Microbiome', 'Immunology', 'Oncology']
  },
  {
    id: '5',
    title: 'AI-Driven Diagnosis of Retinal Diseases: A Meta-Analysis',
    authors: ['Robert Brown', 'Lisa Zhang'],
    journal: 'JAMA Ophthalmology',
    date: '2024-02-02',
    year: 2024,
    abstract: 'Deep learning algorithms have shown remarkable potential in detecting diabetic retinopathy and age-related macular degeneration from fundus photographs...',
    type: 'Review',
    doi: '10.1001/jamaophthalmol.2023.6120',
    tags: ['Artificial Intelligence', 'Ophthalmology', 'Diagnostics']
  },
  {
    id: '6',
    title: 'Precision Oncology in Pediatric Medulloblastoma: A Five-Year Follow-up',
    authors: ['Chen Liu', 'Sarah G. Schmidt'],
    journal: 'Cell Reports',
    date: '2022-06-12',
    year: 2022,
    abstract: 'Pediatric medulloblastoma is characterized by significant clinical and molecular heterogeneity. This five-year longitudinal study focuses on the genomic landscape of patient cohorts...',
    type: 'Journal Article',
    doi: '10.1016/j.celrep.2022.110987',
    tags: ['Pediatrics', 'Oncology', 'Medulloblastoma']
  },
  {
    id: '7',
    title: 'Dietary Fiber and Cardiovascular Disease: A Meta-Analysis of Clinical Trials',
    authors: ['Maria Gonzalez', 'Arjun Patel'],
    journal: 'Journal of Clinical Nutrition',
    date: '2021-03-18',
    year: 2021,
    abstract: 'Cardiovascular health is strongly influenced by dietary habits. We conducted a systematic meta-analysis of randomized controlled trials examining high-fiber interventions...',
    type: 'Systematic Review',
    doi: '10.1093/ajcn/nqab015',
    tags: ['Nutrition', 'Cardiology', 'Meta-Analysis']
  },
  {
    id: '8',
    title: 'CRISPR-Cas9 Gene Editing for Sickle Cell Disease: A Phase I/II Trial',
    authors: ['Isaac Newton-Smith', 'Lydia Hall'],
    journal: 'New England Journal of Medicine',
    date: '2021-12-25',
    year: 2021,
    abstract: 'Sickle cell disease presents a significant clinical challenge. This phase I/II trial evaluates the safety and initial efficacy of ex vivo CRISPR-Cas9 editing of autologous CD34+ cells...',
    type: 'Clinical Trial',
    doi: '10.1056/NEJMoa2031054',
    tags: ['Genetics', 'Hematology', 'Sickle Cell Disease']
  }
];

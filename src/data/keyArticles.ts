import { parseISO } from 'date-fns';

interface KeyArticles {
  title: string;
  authors: string;
  date: string;
  journal: string;
  volume: string;
  pages: string;
  type: string;
  category: string;
  doi?: string;
  url?: string;
}

export const keyArticles: KeyArticles[] = [
  {
    title: 'Incidental and Progressive Tobacco Smoking in Childhood and Subsequent Risk of Premature Cardiac Damage',
    authors: 'Agbaje, Andrew O',
    date: '2024-12-11',
    journal: 'Journal of the American College of Cardiology',
    volume: '',
    pages: 'S0735-1097(24)09964-9',
    type: 'Original article',
    category: 'cardiovascular-health',
    url: ' https://www.jacc.org/doi/10.1016/j.jacc.2024.09.1229',
  },
  {
    title:
      'Effects of accelerometer-based sedentary time and physical activity on DEXA-measured fat mass in 6059 children',
    authors: 'Agbaje AO, Perng W, Tuomainen TP',
    date: '2023-12-12',
    journal: 'Nature Communications',
    volume: '14',
    pages: '8232',
    type: 'Original article',
    category: 'physical-activity',
    doi: '10.1038/s41467-023-43316-w',
  },
  {
    title:
      'Accelerometer-based sedentary time and physical activity from childhood through young adulthood with progressive cardiac changes: a 13-year longitudinal study',
    authors: 'Agbaje AO',
    date: '2024-09-06',
    journal: 'European Journal of Preventive Cardiology',
    volume: '31',
    pages: '1480-1492',
    type: 'Original article',
    category: 'cardiovascular-health',
    doi: '10.1093/eurjpc/zwae129',
  },
  {
    title:
      'Waist-circumference-to-height-ratio had better longitudinal agreement with DEXA-measured fat mass than BMI in 7237 children',
    authors: 'Agbaje AO',
    date: '2024-10-01',
    journal: 'Pediatric Research',
    volume: '96',
    pages: '1369-1380',
    type: 'Original article',
    category: 'anthropometry',
    doi: '10.1038/s41390-024-03112-8',
  },
  {
    title:
      'DXA-based Fat Mass With Risk of Worsening Insulin Resistance in Adolescents: A 9-Year Temporal and Mediation Study',
    authors: 'Agbaje AO, Saner C, Zhang J, Henderson M, Tuomainen TP',
    date: '2024-08-13',
    journal: 'Journal of Clinical Endocrinology and Metabolism',
    volume: '109',
    pages: 'e1708-e1719',
    type: 'Original article',
    category: 'metabolic-health',
    doi: '10.1210/clinem/dgae004',
  },
  {
    title:
      'Effects of Arterial Stiffness and Carotid Intima-Media Thickness Progression on the Risk of Overweight/Obesity and Elevated Blood Pressure/Hypertension: a Cross-Lagged Cohort Study',
    authors: 'Agbaje AO, Barker AR, Tuomainen TP',
    date: '2022-01-01',
    journal: 'Hypertension',
    volume: '79',
    pages: '159-169',
    type: 'Original article',
    category: 'cardiovascular-health',
    doi: '10.1161/HYPERTENSIONAHA.121.18449',
  },
];

// Sort articles by date (newest first)
export const sortedKeyArticles = [...keyArticles].sort((a, b) => {
  const dateA = parseISO(a.date);
  const dateB = parseISO(b.date);
  return dateB.getTime() - dateA.getTime();
});

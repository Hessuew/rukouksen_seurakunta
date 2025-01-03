import { groupByYear } from '~/utils/dataProcessing';
import { parseISO } from 'date-fns';

interface Publication {
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

export const publications: Publication[] = [
  {
    title:
      'Accelerometer-based sedentary time and physical activity with incident and progressive tobacco smoking in 2503 children: A 13-year mediation and temporal longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2025-02-01',
    journal: 'Behavior Research and Therapy',
    volume: '',
    pages: '',
    type: 'Original article',
    category: 'physical-activity',
    doi: '10.1016/j.brat.2024.104674',
  },
  {
    title:
      'The Interactive Effects of Sedentary Time, Physical Activity, and Fat Mass on Insulin Resistance in the Young Population',
    authors: 'Agbaje, Andrew O',
    date: '2024-03-01',
    journal: 'The Journal of Clinical Endocrinology and Metabolism',
    volume: '',
    pages: '',
    type: 'Original article',
    category: 'metabolic-health',
    doi: '10.1210/clinem/dgae135',
  },
  {
    title: 'Incidental and Progressive Tobacco Smoking in Childhood and Subsequent Risk of Premature Cardiac Damage',
    authors: 'Agbaje, Andrew O',
    date: '2024-12-11',
    journal: 'Journal of the American College of Cardiology',
    volume: '',
    pages: '',
    type: 'Original article',
    category: 'cardiac-health',
    doi: '10.1016/j.jacc.2024.09.1229',
  },
  {
    title: 'JHH Young Investigator Award 2023: interview with the winner Andrew O. Agbaje',
    authors: 'Agbaje, Andrew O',
    date: '2024-11-01',
    journal: 'Journal of Human Hypertension',
    volume: '38',
    pages: '733-735',
    type: 'Original article',
    category: 'research-recognition',
    doi: '10.1038/s41371-024-00974-7',
  },
  {
    title:
      'Incidental and progressive tobacco smoking from childhood through young adulthood with premature structural and functional cardiac damage in 1931 children: A 14-Year Longitudinal Study',
    authors: 'Agbaje, Andrew O',
    date: '2024-11-11',
    journal: 'Circulation',
    volume: '150',
    pages: 'Supplement_1',
    type: 'Conference abstract',
    category: 'cardiac-health',
    doi: '10.1161/circ.150.suppl_1.4147083',
  },
  {
    title:
      'Fat mass mediating effect on the association of worsening insulin resistance with increased left ventricular mass in 1595 adolescents: a 7-Year Longitudinal and Mediation Study',
    authors: 'Agbaje, Andrew O',
    date: '2024-10-01',
    journal: 'European Heart Journal',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'metabolic-health',
    doi: '10.1093/eurheartj/ehae666.2898',
  },
  {
    title:
      'Accelerometer-based sedentary time and physical activity from childhood through young adulthood with progressive cardiac changes: a 13-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2024-05-07',
    journal: 'European journal of preventive cardiology',
    volume: '31',
    pages: '1480-1492',
    type: 'Study protocol',
    category: 'cardiac-health',
    doi: '10.1093/eurjpc/zwae129',
  },
  {
    title:
      'Accelerometer-based sedentary time and physical activity with MASLD and liver cirrhosis in 2684 British adolescents',
    authors: 'Agbaje, Andrew O',
    date: '2024-05-29',
    journal: 'npj gut and liver',
    volume: '1',
    pages: '1-13',
    type: 'Study protocol',
    category: 'liver-health',
    doi: '10.1038/s44355-024-00002-y',
  },
  {
    title:
      'Accelerometer‐based sedentary time, light physical activity, and moderate‐to‐vigorous physical activity from childhood with arterial stiffness and carotid IMT progression: A 13‐year longitudinal study of 1339 children',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Lewandowski, Adam J; Leeson, Paul; Tuomainen, Tomi‐Pekka',
    date: '2024-03-21',
    journal: 'Acta physiologica',
    volume: '240',
    pages: '',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1111/apha.14132',
  },
  {
    title:
      'Author reply to correspondence from Hudda et al. on waist-circumference-to-height-ratio had better longitudinal agreement with DEXA-measured fat mass than BMI in 7237 children',
    authors: 'Agbaje, Andrew O',
    date: '2024-06-12',
    journal: 'Pediatric research',
    volume: '',
    pages: '1-2',
    type: 'Correspondence',
    category: 'research-response',
    doi: '10.1038/s41390-024-03316-y',
  },
  {
    title:
      'DXA-based Fat Mass With Risk of Worsening Insulin Resistance in Adolescents: A 9-Year Temporal and Mediation Study',
    authors: 'Agbaje, Andrew O; Saner, Christoph; Zhang, Jie; Henderson, Mélanie; Tuomainen, Tomi-Pekka',
    date: '2024-01-06',
    journal: 'Journal of clinical endocrinology and metabolism',
    volume: '109',
    pages: 'e1708-e1719',
    type: 'Study protocol',
    category: 'metabolic-health',
    doi: '10.1210/clinem/dgae004',
  },
  {
    title:
      'Effectiveness of a school-based high-intensity interval training intervention in adolescents: study protocol of the PRO-HIIT cluster randomised controlled trial',
    authors:
      'Liu, Yong; Barker, Alan R; Adlam, Anna-Lynne R.; Li, Minghui; Duncombe, Stephanie L.; Agbaje, Andrew O.; Gu, Yaodong; Zhou, Huiyu; Williams, Craig A.',
    date: '2024-10-29',
    journal: 'Frontiers in pediatrics',
    volume: '12',
    pages: '. 1458610',
    type: 'Study protocol',
    category: 'physical-activity',
    url: 'https://www.frontiersin.org/journals/pediatrics/articles/10.3389/fped.2024.1458610/full',
  },
  {
    title:
      'Environmental Exposures and Pediatric Cardiology: A Scientific Statement From the American Heart Association',
    authors:
      'Zachariah, Justin P; Jone, Pei-Ni; Agbaje, Andrew O; Ryan, Heather H; Trasande, Leonardo; Perng, Wei; Farzan, Shohreh F; on behalf of the American Heart Association Council on Lifelong Congenital Heart and Heart Health in the Young; Council on Cardiovascular and Stroke Nursing; Council on Epidemiology and Prevention; Council on Lifestyle and Cardiometabolic Health; and Council on Clinical Cardiology',
    date: '2024-04-15',
    journal: 'Circulation',
    volume: '149',
    pages: 'e1165-e1175',
    type: 'Review',
    category: 'cardiovascular-health',
    doi: '10.1161/CIR.0000000000001234',
  },
  {
    title:
      'Increased low-density lipoprotein cholesterol predict the risk of progressive structural but not functional cardiac damage in youth: a 7-year follow-up study',
    authors: 'Agbaje, Andrew O',
    date: '2024-06-13',
    journal: 'European journal of preventive cardiology',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiac-health',
    doi: '10.1093/eurjpc/zwae175.366',
  },
  {
    title:
      'Increasing lipids with risk of worsening cardiac damage in 1595 adolescents: A 7-year longitudinal and mediation study',
    authors: 'Agbaje, Andrew O',
    date: '2024-02-01',
    journal: 'Atherosclerosis',
    volume: '389',
    pages: '',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2023.117440',
  },
  {
    title: 'Inflammation: reviewing current evidence',
    authors: 'Agbaje, Andrew O',
    date: '2024',
    journal: 'TYÖTERVEYSLÄÄKÄRI',
    volume: '42',
    pages: '44-47',
    type: '',
    category: 'inflammation',
    doi: '',
    url: 'https://www.terveysportti.fi/apps/dtk/tyt/article/ttl02280?toc=1132784',
  },
  {
    title: 'JHH Young Investigator Award 2023: interview with the winner Andrew O. Agbaje',
    authors: 'Agbaje, Andrew O',
    date: '2024-10-29',
    journal: 'Journal of human hypertension',
    volume: '38',
    pages: '733-735',
    type: '',
    category: 'research-recognition',
    doi: '10.1038/s41371-024-00974-7',
  },
  {
    title:
      'Lean Mass Longitudinally Confounds Sedentary Time and Physical Activity With Blood Pressure Progression in 2513 Children',
    authors: 'Agbaje, Andrew O',
    date: '2024-11-13',
    journal: 'Journal of cachexia, sarcopenia and muscle',
    volume: '',
    pages: '1-16',
    type: 'Original article',
    category: 'physical-activity',
    doi: '10.1002/jcsm.13639',
  },
  {
    title:
      'Mediating effect of fat mass, lean mass, blood pressure and insulin resistance on the associations of accelerometer-based sedentary time and physical activity with arterial stiffness, carotid IMT and carotid elasticity in 1574 adolescents',
    authors: 'Agbaje, Andrew O',
    date: '2024-02-26',
    journal: 'Journal of human hypertension',
    volume: '38',
    pages: '393-403',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1038/s41371-024-00905-6',
  },
  {
    title:
      'No association between increased high-density lipoprotein cholesterol and progressive cardiac damage in 1595 adolescents: a 7-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2024-06-13',
    journal: 'European journal of preventive cardiology',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiac-health',
    doi: '10.1093/eurjpc/zwae175.365',
  },
  {
    title:
      'Waist-circumference-to-height-ratio had better longitudinal agreement with DEXA-measured fat mass than BMI in 7237 children',
    authors: 'Agbaje, Andrew O',
    date: '2024-03-05',
    journal: 'Pediatric research',
    volume: '',
    pages: '1-12',
    type: 'Study protocol',
    category: 'physical-measurements',
    doi: '10.1038/s41390-024-03112-8',
  },
  {
    title:
      'A 7-year longitudinal association of total cholesterol with premature structural and functional cardiac damage progression in youth: the ALSPAC birth cohort study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehad655.1138',
  },
  {
    title:
      "Adolescents cholesterol passport: a universal pediatric lipid screening tool to combat atherosclerosis—the world's deadliest scourge",
    authors: 'Agbaje, Andrew O',
    date: '2023-06-28',
    journal: 'Frontiers in pediatrics',
    volume: '11',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.3389/fped.2023.1228483',
  },

  {
    title:
      "Adolescents cholesterol passport: a universal pediatric lipid screening tool to combat atherosclerosis—the world's deadliest scourge",
    authors: 'Agbaje, Andrew O',
    date: '2023-06-28',
    journal: 'Frontiers in pediatrics',
    volume: '11',
    pages: '. 1228483',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.3389/fped.2023.1228483',
  },
  {
    title:
      'An average of 60mins/day of moderate to vigorous physical activity from childhood through young adulthood was associated with worsening cardiac structural damage in youth: A 13-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal abstract',
    volume: '',
    pages: '',
    type: 'Study protocol',
    category: 'physical-activity',
    doi: '10.1093/eurheartj/ehad655.2602',
  },
  {
    title:
      'Arterial Stiffness Preceding Metabolic Syndrome in 3862 Adolescents: A Mediation and Temporal Causal Longitudinal Birth Cohort Study',
    authors: 'Agbaje, Andrew O',
    date: '2023-05-17',
    journal: 'American journal of physiology : heart and circulatory physiology',
    volume: '324',
    pages: 'H905-H911',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1152/ajpheart.00126.2023',
  },
  {
    title:
      'Arterial stiffness but not carotid intima-media thickness progression precedes premature structural and functional cardiac damage in youth: A 7-year temporal and mediation longitudinal study',
    authors: ' Agbaje, Andrew O; Zachariah, Justin P; Tuomainen, Tomi-Pekka.',
    date: '2023-09-11',
    journal: 'Atherosclerosis',
    volume: '380',
    pages: '',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2023.117197',
  },
  {
    title:
      'Associations of Sedentary Time and Physical Activity From Childhood With Lipids: A 13-Year Mediation and Temporal Study',
    authors: 'Agbaje, Andrew O',
    date: '2023-12-14',
    journal: 'Journal of clinical endocrinology and metabolism',
    volume: '109',
    pages: 'e1494-e1505',
    type: 'Study protocol',
    category: 'physical-activity',
    doi: '10.1210/clinem/dgad688',
  },
  {
    title:
      'Associations of accelerometer‐based sedentary time, light physical activity, and moderate‐to‐vigorous physical activity with resting cardiac structure and function in adolescents according to sex, fat mass, lean mass, BMI, and hypertensive status',
    authors: 'Agbaje, Andrew O',
    date: '2023-04-10',
    journal: 'Scandinavian journal of medicine and science in sports',
    volume: '33',
    pages: '1399-1411',
    type: 'Study protocol',
    category: 'physical-activity',
    doi: '10.1111/sms.14365',
  },
  {
    title: 'Cardiorespiratory Fitness in Adolescence: A Telescope into Future Cardiovascular Health',
    authors: 'Agbaje, Andrew O',
    date: '2022-12-13',
    journal: 'European journal of preventive cardiology',
    volume: '30',
    pages: '404-406',
    type: 'Editorial',
    category: 'physical-activity',
    doi: '10.1093/eurjpc/zwac298',
  },
  {
    title:
      'Cumulative accelerometer-based light physical activity from childhood through young adulthood progressively decreases left ventricular mass in British youth: a 13-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1093/eurheartj/ehad655.1139',
  },
  {
    title:
      'Cumulative accelerometer-based light physical activity from childhood through young adulthood with arterial stiffness and carotid intima-media thickness progression: a 13-year longitudinal study',
    authors: 'Agbaje, Andrew O; Barker, Anna; Lewandowski, Adam James; Leeson, Paul; Tuomainen, Tomi-Pekka',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1093/eurheartj/ehad655.2338',
  },
  {
    title:
      'Cumulative accelerometer-based sedentary time from childhood through young adulthood with increased arterial stiffness and carotid intima-media thickness in youth: a 13-year longitudinal study',
    authors: 'Agbaje, Andrew O; Barker, Anna; Lewandowski, Adam James; Leeson, Paul; Tuomainen, Tomi-Pekka',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1093/eurheartj/ehad655.2077',
  },
  {
    title:
      'Cumulative accelerometer-based sedentary time from childhood through young adulthood with progressive left ventricular remodelling in British youth: a 13-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1093/eurheartj/ehad655.2393',
  },
  {
    title:
      'Cumulative dyslipidemia with arterial stiffness and carotid IMT progression in asymptomatic adolescents: A simulated intervention longitudinal study using temporal inverse allocation model',
    authors: 'Agbaje, Andrew O.; Lloyd-Jones, Donald M.; Magnussen, Costan G.; Tuomainen, Tomi-Pekka',
    date: '2023-01-01',
    journal: 'Atherosclerosis',
    volume: '364',
    pages: '39-48',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2022.11.011',
  },
  {
    title:
      'Cumulative effect of accelerometer-based moderate-to-vigorous physical activity from childhood through young adulthood on carotid intima-media thickness progression: The ALSPAC birth cohort study',
    authors: 'Agbaje, Andrew O',
    date: '2023-08-01',
    journal: 'Atherosclerosis',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1016/j.atherosclerosis.2023.06.816',
  },
  {
    title:
      'Cumulative insulin resistance and hyperglycaemia with arterial stiffness and carotid IMT progression in 1779 adolescents: A 9-Year Longitudinal Cohort Study',
    authors: 'Agbaje, Andrew O; Zachariah, Justin P; Bamsa, Olutola; Odili, Augustine N; Tuomainen, Tomi-Pekka',
    date: '2023-03-10',
    journal: 'American journal of physiology : endocrinology and metabolism',
    volume: '324',
    pages: 'E268-E278',
    type: 'Study protocol',
    category: 'metabolic-health',
    doi: '10.1152/ajpendo.00008.2023',
  },
  {
    title:
      'Does arterial stiffness mediate or suppress the associations of blood pressure with cardiac structure and function in adolescents?',
    authors: 'Agbaje, Andrew O',
    date: '2023-04-25',
    journal: 'American journal of physiology : heart and circulatory physiology',
    volume: '324',
    pages: 'H776-H781',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1152/ajpheart.00094.2023',
  },
  {
    title:
      'Effects of accelerometer-based sedentary time and physical activity on DEXA-measured fat mass in 6059 children',
    authors: 'Agbaje, Andrew O; Perng, Wei; Tuomainen, Tomi Pekka',
    date: '2023-12-12',
    journal: 'Nature communications',
    volume: '14',
    pages: '',
    type: 'Study protocol',
    category: 'physical-activity',
    doi: '10.1038/s41467-023-43316-w',
  },
  {
    title: 'Elevated Blood Pressure and Worsening Cardiac Damage During Adolescence',
    authors: 'Agbaje, Andrew O',
    date: '2023-03-02',
    journal: 'Journal of pediatrics',
    volume: '257',
    pages: '',
    type: 'Study protocol',
    category: 'cardiac-health',
    doi: '10.1016/j.jpeds.2023.02.018',
  },
  {
    title:
      'Increased triglyceride independently associates with premature structural and functional cardiac damage progression in asymptomatic adolescents: a 7-year longitudinal study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehad655.2502',
  },
  {
    title:
      'Longitudinal Associations of Accelerometer-Based Sedentary Time and Physical Activity With Blood Pressure Progression From Childhood Through Young Adulthood: A 13-year Mediation and Isotemporal Substitution Study of 2513 Children',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-06',
    journal: 'Circulation',
    volume: '',
    pages: '',
    type: '',
    category: 'physical-activity',
    doi: '10.1161/circ.148.suppl_1.16549',
  },
  {
    title:
      'Longitudinal Left Ventricular Mass Indexing for DEXA-Measured Lean Mass and Fat Mass: Normative Reference Centiles in Post-Pubertal Adolescents and Young Adults',
    authors: 'Agbaje, Andrew O',
    date: '2023-03-23',
    journal: 'American journal of physiology : heart and circulatory physiology',
    volume: '324',
    pages: 'H571-H577',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1152/ajpheart.00045.2023',
  },
  {
    title:
      'Longitudinal Mediating Effect of Fat Mass and Lipids on Sedentary Time, Light PA, and MVPA with Inflammation in Youth',
    authors: 'Agbaje, Andrew O',
    date: '2023-12-12',
    journal: 'Journal of clinical endocrinology and metabolism',
    volume: '108',
    pages: '3250-3259',
    type: 'Study protocol',
    category: 'metabolic-health',
    doi: '10.1210/clinem/dgad354',
  },
  {
    title:
      'Prospective associations of non-HDL cholesterol with premature structural and functional cardiac damage progression in British youth: the ALSPAC study',
    authors: 'Agbaje, Andrew O',
    date: '2023-11-09',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehad655.3017',
  },
  {
    title:
      'Suppressing effect of HDL-cholesterol on the associations of accelerometer-based sedentary time with low-grade inflammation: A 13-year longitudinal study from childhood through young adulthood',
    authors: 'Agbaje, Andrew O',
    date: '2023-08-11',
    journal: 'Atherosclerosis',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2023.06.349',
  },
  {
    title:
      'Temporal longitudinal associations of carotid-femoral pulse wave velocity and carotid intima-media thickness with resting heart rate and inflammation in youth',
    authors: 'Agbaje, Andrew O; Barmi, Samuel; Sansum, Kate M; Baynard, Tracy; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2023-03-10',
    journal: 'Journal of applied physiology',
    volume: '134',
    pages: '657-666',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1152/japplphysiol.00701.2022',
  },
  {
    title:
      'Adolescence arterial stiffness precedes elevated blood pressure in young adulthood: The ALSPAC birth cohort',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2022-03-01',
    journal: 'Metabolism: clinical and experimental',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1016/j.metabol.2021.154993',
  },
  {
    title: 'Arterial stiffness precedes hypertension and metabolic risks in youth: a review',
    authors: 'Agbaje, Andrew O',
    date: '2022-10-01',
    journal: 'Journal of hypertension',
    volume: '40',
    pages: '1887-1896',
    type: 'Review',
    category: 'cardiovascular-health',
    doi: '10.1097/HJH.0000000000003239',
  },
  {
    title:
      'Cumulative dysglycemia, hyperinsulinemia and insulin resistance with arterial stiffness progression in healthy adolescents: The Avon Longitudinal Study of Parents and children (ALSPAC)',
    authors: 'Agbaje, AO.',
    date: '2022-08-01',
    journal: 'Atherosclerosis',
    volume: '',
    pages: '',
    type: '',
    category: 'metabolic-health',
    doi: '10.1016/j.atherosclerosis.2022.06.570',
  },
  {
    title:
      'Cumulative dyslipidaemia from mid-adolescence through young adulthood with carotid intima-media thickness progression: a 9-year longitudinal study',
    authors: 'Agbaje, Andrew O; Lloyd-Jones, D M; Magnussen, C G; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehac544.2350',
  },
  {
    title:
      'Cumulative hyperinsulinemia, hyperglycaemia, and insulin resistance from mid-adolescence through young adulthood with carotid intima-media thickness progression: a 9-year longitudinal study',
    authors: 'Agbaje, Andrew O; Zachariah, J P; Bamsa, O; Odili, A N; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'metabolic-health',
    doi: '10.1093/eurheartj/ehac544.2414',
  },
  {
    title:
      'Cumulative muscle mass and blood pressure but not fat mass drives arterial stiffness and carotid intima-media thickness progression in the young population and is unrelated to vascular organ damage',
    authors: 'Agbaje, Andrew O.; Barker, Alan R.; Tuomainen, Tomi-Pekka',
    date: '2022-10-14',
    journal: 'Hypertension research',
    volume: '46',
    pages: '984-999',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1038/s41440-022-01065-1',
  },
  {
    title:
      'Does arterial stiffness progression temporally precede higher low-grade inflammation in adolescents? Causal longitudinal evidence using auto-regressive cross-lagged structural equation models',
    authors: 'Agbaje, Andrew O; Barmi, S; Sansum, K M; Baynard, T; Barker, A R; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: '',
    category: 'inflammation',
    doi: '10.1093/eurheartj/ehac544.2247',
  },
  {
    title:
      'Effect of Arterial Stiffness and Carotid Intima-Media Thickness Progression on the Risk of Dysglycemia, Insulin Resistance, and Dyslipidemia: a Temporal Causal Longitudinal Study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Mitchell, Gary F; Tuomainen, Tomi-Pekka',
    date: '2022-01-18',
    journal: 'Hypertension',
    volume: '79',
    pages: '667-678',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1161/hypertensionaha.121.18754',
  },
  {
    title:
      'Fat mass paradox and carotid intima-media thickness progression: A longitudinal study from childhood through young adulthood',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2022-03-01',
    journal: 'Metabolism: clinical and experimental',
    volume: '',
    pages: '',
    type: '',
    category: 'metabolic-health',
    doi: '10.1016/j.metabol.2021.154992',
  },
  {
    title:
      'Longitudinal and bi-directional associations of arterial stiffness with general and central fat mass from adolescence through young adulthood: The ALSPAC Study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2022-03-01',
    journal: 'Metabolism: clinical and experimental',
    volume: '',
    pages: '',
    type: '',
    category: 'cardiovascular-health',
    doi: '10.1016/j.metabol.2021.154994',
  },
  {
    title:
      'Longitudinal associations of cumulative dyslipidaemia from mid-adolescence through young adulthood with arterial stiffness progression: the ALSPAC study',
    authors: 'Agbaje, Andrew O; Lloyd-Jones, D M; Magnussen, C G; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehac544.2351',
  },
  {
    title:
      'Mediating role of body composition and insulin resistance on the association of arterial stiffness with blood pressure among adolescents: The ALSPAC study',
    authors: 'Agbaje, Andrew O',
    date: '2022-09-02',
    journal: 'Frontiers in cardiovascular medicine',
    volume: '9',
    pages: '939125',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.3389/fcvm.2022.939125',
  },
  {
    title:
      'Simulated intervention and optimal timing for attenuating dyslipidaemia-related atherosclerotic progression in the young: a temporal inverse allocation analysis of the ALSPAC cohort',
    authors: 'Agbaje, Andrew O; Lloyd-Jones, D M; Magnussen, C G; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehac544.2352',
  },
  {
    title:
      'Temporal causal longitudinal associations of high-sensitivity C-reactive protein with carotid intima-media thickness progression in adolescents: the ALSPAC birth cohort study',
    authors: 'Agbaje, Andrew O; Barmi, S; Sansum, K M; Baynard, T; Barker, A R; Tuomainen, T P',
    date: '2022-10-03',
    journal: 'European heart journal',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'inflammation',
    doi: '10.1093/eurheartj/ehac544.2246',
  },
  {
    title: 'To prevent hypertension in Africans: do we need to eat more vegetables?',
    authors: 'Agbaje, Andrew O',
    date: '2022-10-10',
    journal: 'European journal of preventive cardiology',
    volume: '29',
    pages: '2333–2335',
    type: 'Editorial',
    category: 'cardiovascular-health',
    doi: '10.1093/eurjpc/zwac233',
  },
  {
    title:
      'A 15-year Cumulative High Exposure to Lean Mass and Blood Pressure but not Fat Mass predicts the 7-year change in Carotid-Femoral Pulse Wave Velocity and Carotid Intima-Media Thickness: The ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-05-18',
    journal: 'Circulation',
    volume: '143',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1161/circ.143.suppl_1.080',
  },
  {
    title:
      'A 7-Year Arterial Stiffness and Carotid Intima-Media Thickness Progression Predict Obesity, High Lean Mass, and Incident Hypertension from Age 17.7 to 24.5 Years: the ALSPAC Study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-11-08',
    journal: 'Circulation',
    volume: '144',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1161/circ.144.suppl_1.11483',
  },
  {
    title:
      'Adiponectin and lean mass in relation to endothelial function, arterial elasticity and arterial stiffness in 9-11-year-old-the ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, A R; Tuomainen, T-P',
    date: '2021-10-14',
    journal: 'Pediatric diabetes',
    volume: '',
    pages: '',
    type: 'Conference abstract',
    category: 'metabolic-health',
    doi: '10.1111/pedi.13198',
  },
  {
    title: 'Arterial stiffness in adolescence predicts elevated blood pressure in young adulthood: the ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, A R; Tuomainen, T-P',
    date: '2021-10-14',
    journal: 'European heart journal',
    volume: '42',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1093/eurheartj/ehab724.2317',
  },
  {
    title:
      'Association of Fat Mass, Lean Mass, Body Mass Index, and Blood Pressure with Carotid-Femoral Pulse Wave Velocity and Carotid Intima-Media Thickness in Young Adults: The ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-03-01',
    journal: 'Metabolism: clinical and experimental',
    volume: '116',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1016/j.metabol.2020.154486',
  },
  {
    title:
      'Arterial stiffness and carotid intima-media thickness in relation to cardiometabolic health in adolescence: The ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, A R; Tuomainen, T-P',
    date: '2021-08-01',
    journal: 'Atherosclerosis',
    volume: '331',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2021.06.493',
  },
  {
    title:
      'Association of carotid-femoral pulse wave velocity and carotid intima-media thickness with cardiometabolic risks among young adults: The Alspac study',
    authors: 'Agbaje, Andrew O; Barker, A R; Tuomainen, T-P',
    date: '2021-03-01',
    journal: 'Atherosclerosis',
    volume: '331',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1016/j.atherosclerosis.2021.06.066',
  },
  {
    title:
      'Associations of endothelial function, arterial elasticity, and arterial stiffness with adiponectin and skeletal muscle mass',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-09-02',
    journal: 'International journal of epidemiology',
    volume: '50',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1093/ije/dyab168.011',
  },
  {
    title:
      'Cardiorespiratory Fitness, Fat Mass, and Cardiometabolic Health with Endothelial Function, Arterial Elasticity, and Stiffness in Children',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-01-01',
    journal: 'Medicine and science in sports and exercise',
    volume: '54',
    pages: '141-152',
    type: 'Study protocol',
    category: 'physical-activity',
    doi: '10.1249/mss.0000000000002757',
  },
  {
    title:
      'Differing Relations Of Arterial Stiffness And Carotid Intima-Media Thickness In Adolescence With Metabolic Risks In Young Adulthood: The ALSPAC Study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-11-08',
    journal: 'Circulation',
    volume: '144',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1161/circ.144.suppl_1.13236',
  },
  {
    title:
      'Effects of Arterial Stiffness and Carotid Intima-Media Thickness Progression on the Risk of Overweight/Obesity and Elevated Blood Pressure/Hypertension: a Cross-Lagged Cohort Study',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-11-17',
    journal: 'Hypertension',
    volume: '79',
    pages: '159-169',
    type: 'Study protocol',
    category: 'cardiovascular-health',
    doi: '10.1161/HYPERTENSIONAHA.121.18449',
  },
  {
    title:
      'Longitudinal associations of fat mass, lean mass, body mass index and blood pressure from childhood through young adulthood with carotid-femoral pulse wave velocity and carotid intima-media thickness at age 24.5 years',
    authors: 'Agbaje, Andrew O; Barker, Alan R; Tuomainen, Tomi-Pekka',
    date: '2021-05-11',
    journal: 'Journal of the american college of cardiology',
    volume: '77',
    pages: '',
    type: 'Conference abstract',
    category: 'cardiovascular-health',
    doi: '10.1016/S0735-1097%2821%2902848-5',
  },
  {
    title:
      'Mediating role of cardiorespiratory fitness on the association of cardiometabolic health with endothelial function, arterial elasticity and arterial stiffness in 9-11-year olds: The ALSPAC study',
    authors: 'Agbaje, Andrew O; Barker, A R; Tuomainen, T-P',
    date: '2020-12-01',
    journal: 'Atherosclerosis',
    volume: '315',
    pages: 'E181-E182',
    type: 'Conference abstract',
    category: 'physical-activity',
    doi: '10.1016/j.atherosclerosis.2020.10.565',
  },
];

export const publicationTypes = [
  'Original article',
  'Review',
  'Editorial',
  'Correspondence',
  'Study protocol',
  'Conference abstract',
];
export const publicationCategories = [...new Set(publications.map((item) => item.category))].filter(Boolean);

// Group publications by year and sort within each year by date
export const publicationsByYear = groupByYear(publications);

// Sort publications within each year by date
Object.keys(publicationsByYear).forEach((year) => {
  publicationsByYear[Number(year)].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });
});

// Sort years in descending order
export const sortedYears = Object.keys(publicationsByYear)
  .map(Number)
  .sort((a, b) => b - a);

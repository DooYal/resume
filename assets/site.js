(() => {
  const translations = {
    'nav.aria': { zh: '站点导航', en: 'Site navigation' },
    'nav.home': { zh: '首页', en: 'Home' },
    'nav.now': { zh: '2023–至今', en: '2023–present' },
    'lang.switch': { zh: 'English', en: '中文' },
    'lang.aria': { zh: 'Switch to English', en: '切换到中文' },
    'hero.eyebrow': { zh: '个人简介', en: 'Profile' },
    'hero.name': { zh: '李都悦', en: 'Douyue Li' },
    'hero.lead': { zh: '博士，助理研究员，专业为生物信息学。研究与工作重点覆盖短串联重复序列、临床多组学分析、病原微生物 mNGS 平台、中药相关组学分析，以及 ExpOmics、circMine v2 等在线组学分析平台后端开发。', en: 'PhD and Assistant Researcher specializing in bioinformatics. Research and professional work span short tandem repeats, clinical multi-omics analysis, pathogen mNGS platforms, traditional Chinese medicine-related omics, and backend development for online omics platforms including ExpOmics and circMine v2.' },
    'hero.cta': { zh: '查看近期研究与平台', en: 'View recent research and platforms' },
    'profile.photo': { zh: '个人证件照', en: 'Portrait' },
    'profile.photo.alt': { zh: '李都悦证件照', en: 'Portrait of Douyue Li' },
    'overview.kicker': { zh: 'Profile', en: 'Profile' },
    'overview.title': { zh: '科研经历总览', en: 'Research experience overview' },
    'overview.research.title': { zh: '研究积累', en: 'Research foundation' },
    'overview.research.body': { zh: '对微卫星序列/短串联重复序列有较深理解，完成分布图谱、密度分析与产生机理模型相关研究。', en: 'Built deep expertise in microsatellites and short tandem repeats, including distribution landscapes, density analysis, and mechanistic models.' },
    'overview.omics.title': { zh: '组学分析', en: 'Omics analysis' },
    'overview.omics.body': { zh: '覆盖转录组、芯片数据、GEO 数据、单细胞联合分析、临床多组学分析等多类场景。', en: 'Covers transcriptomics, microarray datasets, GEO studies, single-cell joint analysis, and clinical multi-omics scenarios.' },
    'overview.platform.title': { zh: '平台开发', en: 'Platform development' },
    'overview.platform.body': { zh: '参与或主导多个在线组学分析平台后端开发，强调自动化流程、数据分析与可视化结果整合。', en: 'Contributed to or led backend development for online omics platforms, with emphasis on automated workflows, analysis, and visualization.' },
    'experience.kicker': { zh: 'Experience atlas', en: 'Experience atlas' },
    'experience.title': { zh: '各阶段经历介绍', en: 'Experience by stage' },
    'exp.2015.title': { zh: '博士阶段：短串联重复序列研究', en: 'Doctoral stage: short tandem repeat research' },
    'exp.2015.body': { zh: '围绕人类 Y 染色体微卫星分布、短串联重复序列聚集和复制滑移模型展开研究。', en: 'Studied human Y-chromosome microsatellite distribution, short tandem repeat aggregation, and replication slippage models.' },
    'exp.2022.title': { zh: '诺道中科：病原微生物 mNGS 平台', en: 'Novogene: pathogen mNGS platform' },
    'exp.2022.body': { zh: '建设自动化分析流程，覆盖样本读取、质控、去人源、去重、物种鉴定与病原列表筛选。', en: 'Built automated analysis workflows covering sample loading, quality control, host read removal, deduplication, species identification, and pathogen list filtering.' },
    'exp.2023.title': { zh: '博奥生物：中药相关多组学分析', en: 'CapitalBio: TCM-related multi-omics analysis' },
    'exp.2023.body': { zh: '围绕中药开发与对症疾病，完成转录组、芯片数据、GEO 分析与方剂评价相关工作。', en: 'Conducted transcriptome, microarray, GEO analysis, and prescription evaluation work for traditional Chinese medicine development and related diseases.' },
    'exp.now.title': { zh: '广州医科大学：临床多组学与平台开发', en: 'Guangzhou Medical University: clinical multi-omics and platform development' },
    'exp.now.body': { zh: '从事肝癌组学临床研究，主导 ExpOmics、circMine v2 等在线平台后端开发。', en: 'Works on clinical omics research in liver cancer and leads backend development for online platforms including ExpOmics and circMine v2.' },
    'exp.open': { zh: '点击查看详细', en: 'View details' },
    'education.kicker': { zh: 'Education & honors', en: 'Education & honors' },
    'education.title': { zh: '教育经历与荣誉', en: 'Education and honors' },
    'education.study.title': { zh: '教育经历', en: 'Education' },
    'education.study.1': { zh: '2015.09 — 2021.10：湖南大学，生物学专业，博士（硕博连读），研究方向为生物信息学和计算生物学。', en: '2015.09 — 2021.10: Hunan University, PhD in Biology through a combined master-doctoral program, focusing on bioinformatics and computational biology.' },
    'education.study.2': { zh: '2011.09 — 2015.06：湖南农业大学，生物信息学，本科。', en: '2011.09 — 2015.06: Hunan Agricultural University, BS in Bioinformatics.' },
    'education.honors.title': { zh: '获得荣誉', en: 'Honors' },
    'education.honors.1': { zh: '2015.09 — 2021.06：三次校级研究生学业一等奖学金。', en: '2015.09 — 2021.06: First-class graduate academic scholarship at university level, awarded three times.' },
    'education.honors.2': { zh: '2011.09 — 2015.06：两次国家励志奖学金，一次校级一等奖学金。', en: '2011.09 — 2015.06: National Encouragement Scholarship twice and one university-level first-class scholarship.' },
    'papers.kicker': { zh: 'Publications', en: 'Publications' },
    'papers.title': { zh: '代表论文', en: 'Selected publications' },
    'papers.lead': { zh: '代表论文按研究主题与发表时间整理。', en: 'Selected publications organized by research topic and publication time.' },
    'paper.expomics.cite': { zh: 'Bioinformatics, 2024, 40(8): btae507。JCR 一区，IF: 5.4。本人贡献：平台后端搭建、案例分析、初稿撰写。', en: 'Bioinformatics, 2024, 40(8): btae507. JCR Q1, IF: 5.4. Contributions: platform backend development, case analysis, and initial manuscript drafting.' },
    'paper.y.cite': { zh: 'BMC Genomics, 2021, 22(1): 76。JCR 二区，IF: 3.9。本人贡献：人类 Y 染色体 SSR 密度分析、论文撰写。', en: 'BMC Genomics, 2021, 22(1): 76. JCR Q2, IF: 3.9. Contributions: SSR density analysis of the human Y chromosome and manuscript writing.' },
    'paper.ebola.cite': { zh: 'Biochemical and Biophysical Research Communications, 2021, 565: 79-84。本人贡献：流程搭建、论文指导与修改。', en: 'Biochemical and Biophysical Research Communications, 2021, 565: 79-84. Contributions: workflow construction, manuscript guidance, and revision.' },
    'paper.awti.cite': { zh: 'Interdisciplinary Sciences - Computational Life Sciences, 2026。本人贡献：lncRNA 变异特征数据集与自动化注释工作流构建。', en: 'Interdisciplinary Sciences - Computational Life Sciences, 2026. Contributions: lncRNA mutation feature datasets and automated annotation workflow construction.' },
    'paper.landscape.cite': { zh: 'BMC Genomics, 2024, 25(1): 960。本人贡献：初稿撰写、算法与程序开发、数据分析。', en: 'BMC Genomics, 2024, 25(1): 960. Contributions: initial manuscript drafting, algorithm and program development, and data analysis.' },
    'paper.slippage.cite': { zh: 'BMC Genomics, 2020, 21(1): 563。本人贡献：数据分析和模型构造、论文撰写。', en: 'BMC Genomics, 2020, 21(1): 563. Contributions: data analysis, model construction, and manuscript writing.' },
    'contact.kicker': { zh: 'Contact', en: 'Contact' },
    'contact.title': { zh: '联系方式', en: 'Contact' },
    'contact.card.title': { zh: '联系', en: 'Contact details' },
    'contact.email': { zh: '邮箱：', en: 'Email: ' },
    'contact.phone': { zh: '手机：', en: 'Phone: ' },
    'footer.local': { zh: '仅限本机 localhost 访问', en: 'Localhost access only' },
    'footer.home': { zh: '返回首页', en: 'Back to home' },
    'detail.2015.meta': { zh: '2015.09 — 2021.10 · 湖南大学', en: '2015.09 — 2021.10 · Hunan University' },
    'detail.2015.title': { zh: '短串联重复序列研究与微卫星图谱构建', en: 'Short tandem repeat research and microsatellite landscape construction' },
    'detail.2015.lead': { zh: '博士阶段以基因组微卫星序列为主要研究对象，重点分析人类 Y 染色体参考序列上短串联重复序列的分布特征，并围绕短串联重复序列产生机理提出模型解释。', en: 'During the doctoral stage, research focused on genomic microsatellites, especially the distribution of short tandem repeats on the human Y-chromosome reference sequence and mechanistic models for their formation.' },
    'detail.back.overview': { zh: '返回经历总览', en: 'Back to experience overview' },
    'detail.focus.title': { zh: '研究重点', en: 'Research focus' },
    'detail.2015.focus.body': { zh: '绘制 540 张基因组分辨率为 1 Kbp 的短串联重复序列特征分布图谱，发现大量区域性高密度聚集，并观察到极显著的统计学差异。', en: 'Generated 540 distribution maps of short tandem repeat features at 1 Kbp genomic resolution, revealing extensive regional high-density aggregation and highly significant statistical differences.' },
    'detail.significance.title': { zh: '研究意义', en: 'Research significance' },
    'detail.2015.significance.body': { zh: '这些图谱为揭示特异聚集形成意义提供了重要指导，也为男性遗传性疾病与进化史相关研究提供参考。', en: 'These maps provide guidance for understanding the meaning of specific aggregation and references for studies of male hereditary diseases and evolutionary history.' },
    'detail.model.title': { zh: '模型工作', en: 'Modeling work' },
    'detail.2015.model.body': { zh: '研究短串联重复序列产生机理，提出相对半保留学说和折叠复制滑移模型，用于解释基因组扩增与短串联重复序列普遍存在的现象。', en: 'Studied mechanisms of short tandem repeat formation and proposed the relatively semi-conservative replication hypothesis and folded slippage model to explain genomic amplification and the broad presence of STRs.' },
    'detail.related.title': { zh: '相关论文', en: 'Related publications' },
    'detail.2015.figure.label': { zh: 'Research figure', en: 'Research figure' },
    'detail.2015.figure.body': { zh: '短串联重复序列图谱展示与折叠复制滑移模型示意。', en: 'Landscape visualization and folded replication slippage model for short tandem repeats.' },
    'detail.2022.meta': { zh: '2021.12 — 2022.11 · 诺道中科（北京）生物科技有限公司', en: '2021.12 — 2022.11 · Novogene Bioinformatics Technology Co., Ltd.' },
    'detail.2022.title': { zh: '病原微生物二代测序分析平台开发', en: 'Pathogen mNGS analysis platform development' },
    'detail.2022.lead': { zh: '该阶段聚焦感染宏基因组二代测序 mNGS 分析检测病原微生物平台，目标是把样本处理、质控、去宿主、分类鉴定和病原筛选串联成自动化流程。', en: 'This stage focused on a pathogen detection platform for infection metagenomic next-generation sequencing, connecting sample processing, quality control, host removal, taxonomic identification, and pathogen filtering into an automated workflow.' },
    'detail.2022.workflow.title': { zh: '平台流程', en: 'Platform workflow' },
    'detail.2022.workflow.body': { zh: '流程已能实现自动读取样本列表、低质量序列过滤、去人源序列、去重、微生物类别鉴定等步骤。', en: 'The workflow could automatically read sample lists, filter low-quality reads, remove human sequences, deduplicate reads, and identify microbial categories.' },
    'detail.2022.pathogen.title': { zh: '病原筛选', en: 'Pathogen filtering' },
    'detail.2022.pathogen.body': { zh: '平台能够基于美国 NIAID、FDA 给定的病原列表和中国病原微生物资源库给定的病原列表进行筛选。', en: 'The platform filters against pathogen lists from the U.S. NIAID and FDA as well as the China Pathogen Microbiology Resource Bank.' },
    'detail.2022.status.title': { zh: '阶段状态', en: 'Stage status' },
    'detail.2022.status.body': { zh: '流程进入测试阶段；原计划进一步自建微生物鉴别数据库和地方特异病原列表数据库，并实现报告化处理。', en: 'The workflow entered testing, with planned extensions for custom microbial identification databases, locally specific pathogen lists, and report generation.' },
    'detail.2022.figure.body': { zh: '病原微生物 mNGS 分析平台相关流程。', en: 'Workflow for the pathogen mNGS analysis platform.' },
    'detail.2023.meta': { zh: '2022.12 — 2023.06 · 博奥生物集团有限公司', en: '2022.12 — 2023.06 · CapitalBio Technology Group' },
    'detail.2023.title': { zh: '中药开发相关多组学分析', en: 'Multi-omics analysis for traditional Chinese medicine development' },
    'detail.2023.lead': { zh: '该阶段主要围绕中药和对症疾病相关的转录组组学分析、芯片数据分析和各类生信需求展开，强调数据处理、富集分析、网络分析和方剂评价。', en: 'This stage centered on transcriptomic analysis, microarray analysis, and bioinformatics tasks related to traditional Chinese medicine and associated diseases, emphasizing data processing, enrichment analysis, network analysis, and prescription evaluation.' },
    'detail.2023.analysis.title': { zh: '分析内容', en: 'Analysis scope' },
    'detail.2023.analysis.body': { zh: '完成药物处理细胞存活率计算质控平台，支持药物处理转录组差异基因数据的转录因子快速富集和 PPI 网络分析。', en: 'Built a quality-control platform for drug-treated cell viability calculations and supported rapid transcription factor enrichment and PPI network analysis for drug-treated transcriptome differential genes.' },
    'detail.2023.data.title': { zh: '数据整理', en: 'Data curation' },
    'detail.2023.data.body': { zh: '对主流中药分子数据库进行数据抓取和整理，为中药方剂逆转效果评价提供基础数据。', en: 'Scraped and organized major traditional Chinese medicine molecular databases to support reversal-effect evaluation of herbal prescriptions.' },
    'detail.2023.geo.title': { zh: 'GEO 与通路分析', en: 'GEO and pathway analysis' },
    'detail.2023.geo.body': { zh: '完成基于 GEO 数据的 PCA、t-SNE、样本相关性、GO 富集、KEGG 通路富集、GSEA 分析等工作。', en: 'Completed GEO-based PCA, t-SNE, sample correlation, GO enrichment, KEGG pathway enrichment, and GSEA analyses.' },
    'detail.2023.prescription.title': { zh: '方剂评价', en: 'Prescription evaluation' },
    'detail.2023.prescription.body': { zh: '基于公司开发的中药方剂逆转效果评价算法，进行不同组成成分的方剂评价。', en: 'Evaluated prescriptions with different compositions using the company-developed reversal-effect evaluation algorithm.' },
    'detail.2023.figure.body': { zh: '中药开发相关组学分析、富集分析和结果展示。', en: 'Overview of omics analysis, enrichment analysis, and result presentation for traditional Chinese medicine development.' },
    'detail.now.meta': { zh: '2023.08 — 至今 · 广州医科大学', en: '2023.08 — present · Guangzhou Medical University' },
    'detail.now.title': { zh: '临床多组学分析、肝癌研究与在线平台后端开发', en: 'Clinical multi-omics, liver cancer research, and online platform backend development' },
    'detail.now.lead': { zh: '当前阶段重点从事肝癌组学临床研究，围绕非经典开放阅读框翻译蛋白进行多维特征分析，同时主导多个在线组学分析平台后端开发。', en: 'Current work focuses on clinical omics research in liver cancer, multidimensional feature analysis of noncanonical ORF-translated proteins, and backend development for online omics analysis platforms.' },
    'detail.now.expomics': { zh: '访问 ExpOmics', en: 'Visit ExpOmics' },
    'detail.now.circmine': { zh: '访问 circMine v2', en: 'Visit circMine v2' },
    'detail.now.clinical.title': { zh: '肝癌组学临床研究', en: 'Liver cancer clinical omics' },
    'detail.now.clinical.body': { zh: '重点研究非经典开放阅读框翻译蛋白的临床作用，构建肝细胞癌非经典开放阅读框多维图谱。', en: 'Studies the clinical role of proteins translated from noncanonical open reading frames and builds a multidimensional atlas for hepatocellular carcinoma noncanonical ORFs.' },
    'detail.now.feature.title': { zh: '分子特征预测', en: 'Molecular feature prediction' },
    'detail.now.feature.body': { zh: '除基本统计外，完成亚细胞定位、信号肽、保守结构域、免疫原性、跨膜结构等分子特征预测与综合分析。', en: 'Beyond basic statistics, performs molecular feature prediction and integrated analysis of subcellular localization, signal peptides, conserved domains, immunogenicity, and transmembrane structures.' },
    'detail.now.target.title': { zh: '候选靶标筛选', en: 'Candidate target screening' },
    'detail.now.target.body': { zh: '筛选具有肿瘤、复发、耐药上调且不良预后特性的非经典开放阅读框及其转录本和编码微肽，并结合单细胞转录组数据进行联合分析。', en: 'Screens noncanonical ORFs, transcripts, and encoded micropeptides that are upregulated in tumors, recurrence, and drug resistance and associated with poor prognosis, then integrates them with single-cell transcriptomic data.' },
    'detail.now.backend.title': { zh: '在线平台后端开发', en: 'Online platform backend development' },
    'detail.now.backend.body': { zh: '主导 ExpOmics 和 circMine v2 等组学分析平台后端开发工作。ExpOmics 已发表于 Bioinformatics，circMine v2 待发表。', en: 'Leads backend development for omics analysis platforms including ExpOmics and circMine v2. ExpOmics has been published in Bioinformatics, and circMine v2 is under publication.' },
    'detail.now.figure.1': { zh: '肝癌相关非经典开放阅读框研究与多维特征分析展示。', en: 'Display of liver cancer-related noncanonical ORF research and multidimensional feature analysis.' },
    'detail.now.figure.2': { zh: '候选分子与单细胞转录组联合分析相关结果展示。', en: 'Results from integrated analysis of candidate molecules and single-cell transcriptomic data.' },
    'detail.now.figure.3': { zh: 'ExpOmics首页概览。', en: 'Homepage of a the ExpOmics.' },
    'detail.now.figure.4': { zh: 'circMine v2首页概览。', en: 'Homepage of the circMine v2.' }
  };

  const pageMeta = {
    'index.html': {
      title: { zh: '李都悦｜个人网站', en: 'Douyue Li | Personal website' },
      description: { zh: '李都悦的本地静态个人网站，展示生物信息学、组学分析平台开发和科研经历。', en: 'Local static personal website for Douyue Li, presenting bioinformatics research, omics platform development, and research experience.' }
    },
    '2015-2021.html': {
      title: { zh: '2015–2021｜短串联重复序列研究｜李都悦', en: '2015–2021 | Short tandem repeat research | Douyue Li' },
      description: { zh: '李都悦博士阶段短串联重复序列与微卫星研究经历。', en: 'Douyue Li’s doctoral experience in short tandem repeat and microsatellite research.' }
    },
    '2022.html': {
      title: { zh: '2022｜病原微生物 mNGS 平台｜李都悦', en: '2022 | Pathogen mNGS platform | Douyue Li' },
      description: { zh: '李都悦在诺道中科从事病原微生物mNGS分析平台开发的经历。', en: 'Douyue Li’s experience developing a pathogen mNGS analysis platform at Novogene.' }
    },
    '2023.html': {
      title: { zh: '2023｜中药相关多组学分析｜李都悦', en: '2023 | TCM-related multi-omics analysis | Douyue Li' },
      description: { zh: '李都悦在博奥生物进行中药与对症疾病相关多组学分析的经历。', en: 'Douyue Li’s multi-omics analysis work for traditional Chinese medicine and related diseases at CapitalBio.' }
    },
    '2023-now.html': {
      title: { zh: '2023–至今｜临床多组学与平台开发｜李都悦', en: '2023–present | Clinical multi-omics and platform development | Douyue Li' },
      description: { zh: '李都悦在广州医科大学从事临床多组学分析、肝癌研究和在线平台后端开发的经历。', en: 'Douyue Li’s work at Guangzhou Medical University in clinical multi-omics analysis, liver cancer research, and online platform backend development.' }
    }
  };

  const getPageName = () => window.location.pathname.split('/').pop() || 'index.html';
  const getLanguage = () => localStorage.getItem('siteLanguage') === 'en' ? 'en' : 'zh';

  const applyLanguage = (language) => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = translations[element.dataset.i18n]?.[language];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-prefix]').forEach((element) => {
      const value = translations[element.dataset.i18nPrefix]?.[language];
      if (value !== undefined) element.firstChild.textContent = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = translations[element.dataset.i18nAlt]?.[language];
      if (value !== undefined) element.alt = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = translations[element.dataset.i18nAria]?.[language];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });

    const meta = pageMeta[getPageName()];
    if (meta) {
      document.title = meta.title[language];
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = meta.description[language];
    }

    localStorage.setItem('siteLanguage', language);
  };

  const languageButton = document.querySelector('[data-language-toggle]');
  if (languageButton) {
    languageButton.addEventListener('click', () => {
      applyLanguage(getLanguage() === 'zh' ? 'en' : 'zh');
    });
  }

  applyLanguage(getLanguage());

  const previewableImages = document.querySelectorAll('.work-card img, .figure-card img');
  if (!previewableImages.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'image-lightbox';
  overlay.setAttribute('aria-hidden', 'true');

  const closeButton = document.createElement('button');
  closeButton.className = 'lightbox-close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', '关闭图片预览');
  closeButton.textContent = '×';

  const overlayImage = document.createElement('img');
  overlayImage.alt = '';

  overlay.append(closeButton, overlayImage);
  document.body.appendChild(overlay);

  let lastFocused = null;

  const close = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    overlayImage.removeAttribute('src');
    overlayImage.alt = '';
    if (lastFocused) lastFocused.focus();
  };

  const open = (image) => {
    lastFocused = document.activeElement;
    overlayImage.src = image.currentSrc || image.src;
    overlayImage.alt = image.alt;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    closeButton.focus();
  };

  previewableImages.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.addEventListener('click', () => open(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(image);
      }
    });
  });

  closeButton.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();

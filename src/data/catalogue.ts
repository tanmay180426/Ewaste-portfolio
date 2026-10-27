export interface AssignmentItem {
  id: string;
  title: string;
  assignmentNumber?: string;
  category: 
    | "Assignment 0 — Course Insights"
    | "Toxic Heavy Metals in E-Waste"
    | "India vs. World E-Waste Data Comparison"
    | "E-Waste Management Rules in Different Countries"
    | "E-Waste Awareness Poster / Comic"
    | "E-Waste to Wealth — District-wise Recoverable Metals in Sikkim"
    | "Hydrogen Decrepitation — Rare-Earth Element Recovery"
    | "Sikkim District-Level E-Waste Generation, Collection, and Recycling Analysis"
    | "Additional Assignments, Class Activities, Notes & Research";
  description: string;
  originalFilename: string;
  publicAssetPath: string;
  previewThumbnail?: string;
  allPreviews?: string[];
  fileType: 'PDF' | 'IMAGE' | 'DOCX' | 'XLSX' | 'PPTX' | 'HTML';
  fileSizeFormatted: string;
  fileSizeBytes: number;
  submissionStatus?: 'Verified' | 'Submitted' | 'Self-Study & Reference';
  sourceOrReference?: string;
  tags: string[];
  keyHighlights: string[];
  featured?: boolean;
}

export const STUDENT_PROFILE = {
  name: "Tanmay Lalge",
  rollNumber: "24102C0034",
  college: "Vidyalankar Institute of Technology, Mumbai",
  department: "Department of Computer Engineering",
  course: "E-Waste Management",
  websiteTitle: "Tanmay Lalge | E-Waste Academic Portfolio",
  tagline: "Learn. Document. Analyse. Recycle Responsibly.",
  semester: "Term Evaluation / Autonomous Curriculum",
  overviewBio: "Curated academic portfolio for the autonomous E-Waste Management course at Vidyalankar Institute of Technology. Showcasing sub-national field data analytics for Sikkim, rare-earth magnet recovery through Hydrogen Decrepitation, chemical hazard notes, interactive CPCB EPR modeling, and global circular economy case studies."
};

export const CATEGORIES = [
  "All Categories",
  "Assignment 0 — Course Insights",
  "Toxic Heavy Metals in E-Waste",
  "India vs. World E-Waste Data Comparison",
  "E-Waste Management Rules in Different Countries",
  "E-Waste Awareness Poster / Comic",
  "E-Waste to Wealth — District-wise Recoverable Metals in Sikkim",
  "Hydrogen Decrepitation — Rare-Earth Element Recovery",
  "Sikkim District-Level E-Waste Generation, Collection, and Recycling Analysis",
  "Additional Assignments, Class Activities, Notes & Research"
] as const;

export const ASSIGNMENT_CATALOGUE: AssignmentItem[] = [
  {
    id: "assign-0",
    title: "Assignment 0 — Course Insights & Curriculum Architecture",
    assignmentNumber: "Assignment 0",
    category: "Assignment 0 — Course Insights",
    description: "Official course insight submission answering foundational questions about the autonomous curriculum at VIT Mumbai, HSSM credit allocation (2 credits), and the 75-mark In-Semester Assessment (ISA) framework.",
    originalFilename: "Assignment - 0 Ewem.pdf",
    publicAssetPath: "/assignments/Assignment-0-Ewem.pdf",
    fileType: "PDF",
    fileSizeFormatted: "112.3 KB",
    fileSizeBytes: 115018,
    submissionStatus: "Submitted",
    sourceOrReference: "Autonomous Curriculum Syllabus, Vidyalankar Institute of Technology",
    tags: ["VIT Mumbai", "HSSM Bucket", "Course Outcomes", "Credits", "ISA 75"],
    keyHighlights: [
      "HSSM bucket allocation requiring 2 autonomous credits",
      "Comprehensive breakdown of Course Outcomes (CO1 to CO4)",
      "ISA weightage: 75 marks continuous evaluation without MSE/ESE",
      "Focus on green computing, e-waste lifecycle, and extended producer responsibility"
    ],
    featured: true
  },
  {
    id: "assign-toxic-metals",
    title: "Toxic Heavy Metals in E-Waste — Handwritten Study Notes",
    assignmentNumber: "Chemical Hazards Assignment",
    category: "Toxic Heavy Metals in E-Waste",
    description: "Authentic handwritten submission with student roll number (24102C0034) detailing 5 critical toxic chemicals found in electrical equipment: Lead, Chromium, Arsenic, Cadmium, and Mercury, paired with official WHO drinking water threshold limits.",
    originalFilename: "Toxic Chemicals_Any 5.jpeg",
    publicAssetPath: "/notes/Toxic-Chemicals-Heavy-Metals-Notes.jpeg",
    previewThumbnail: "/notes/Toxic-Chemicals-Heavy-Metals-Notes.jpeg",
    fileType: "IMAGE",
    fileSizeFormatted: "6.0 MB",
    fileSizeBytes: 6291459,
    submissionStatus: "Submitted",
    sourceOrReference: "Handwritten Classroom Notes & WHO Drinking Water Quality Guidelines",
    tags: ["Toxic Heavy Metals", "Lead", "Chromium", "Arsenic", "Cadmium", "Mercury", "WHO Guidelines"],
    keyHighlights: [
      "Lead (Pb): Neurological damage, kidney disorders, non-biodegradable (WHO limit <= 0.01 mg/L)",
      "Chromium (Cr): Lung cancer risk, skin irritation, entering via industrial waste (WHO limit <= 0.05 mg/L)",
      "Arsenic (As): Hyperkeratosis, high toxicity at trace concentrations (WHO limit <= 0.01 mg/L)",
      "Cadmium (Cd): Bone weakening, osteomalacia, human carcinogen (WHO limit <= 0.003 mg/L)",
      "Mercury (Hg): Fetal brain degradation and central nervous system collapse (WHO limit <= 0.006 mg/L)"
    ],
    featured: true
  },
  {
    id: "assign-india-vs-world",
    title: "India vs. World E-Waste Data Task — Class Activity",
    assignmentNumber: "Class Activity 1",
    category: "India vs. World E-Waste Data Comparison",
    description: "Handwritten research submission comparing India's accelerating e-waste generation (from 1.97 million metric tonnes in 2015 to 3.23 million MT in 2019) against China, USA, Germany, and the UK, along with national regulatory evolution (Rules 2011, 2016, and 2022 EPR Portal).",
    originalFilename: "E waste India Vs World Data Task_Class Activity.pdf",
    publicAssetPath: "/assignments/India-Vs-World-Data-Task-Class-Activity.pdf",
    previewThumbnail: "/previews/india-vs-world-notes.jpg",
    fileType: "PDF",
    fileSizeFormatted: "1.6 MB",
    fileSizeBytes: 1654786,
    submissionStatus: "Submitted",
    sourceOrReference: "Global E-Waste Monitor / CPCB National Reports",
    tags: ["India vs World", "Generation Trends", "EPR Portal", "CPCB", "WEEE Directive"],
    keyHighlights: [
      "India's surge: 1.97 MT (2015) to 3.23 MT (2019) — highest percentage growth rate among studied nations",
      "Comparative analysis against China (world's largest generator) and USA (2nd largest)",
      "EU WEEE Directive benchmarks: Germany and UK formal collection exceeding 50%",
      "Indian policy timeline: E-Waste Rules 2011 -> 2016 (EPR mandated) -> 2022 (CPCB centralized digital portal)"
    ],
    featured: true
  },
  {
    id: "assign-rules-comparison",
    title: "Comparison of E-Waste Management Rules in Different Countries",
    assignmentNumber: "Policy Comparison Matrix",
    category: "E-Waste Management Rules in Different Countries",
    description: "A comprehensive comparative policy infographic examining legal frameworks, Producer Responsibility mandates, collection architectures, recycling requirements, and monitoring authorities across India, USA, Germany, UK, and Russia.",
    originalFilename: "IMG-20260825-WA0006.jpg",
    publicAssetPath: "/posters/Global-EWaste-Rules-Comparison.jpg",
    previewThumbnail: "/posters/Global-EWaste-Rules-Comparison.jpg",
    fileType: "IMAGE",
    fileSizeFormatted: "170 KB",
    fileSizeBytes: 174113,
    submissionStatus: "Verified",
    sourceOrReference: "Comparative Environmental Legislation Review",
    tags: ["Policy Comparison", "EPR", "ElektroG", "WEEE Directive", "CPCB", "EPA"],
    keyHighlights: [
      "India: E-Waste Management Rules 2022 with mandatory digital EPR and CPCB online monitoring",
      "USA: State-by-state decentralized legislative matrix with state EPA enforcement",
      "Germany: Strict ElektroG Act featuring strong producer financing and free municipal take-back",
      "UK: Post-Brexit WEEE Regulations with approved treatment facilities (AATF)",
      "Russia: Federal Waste Management law with evolving producer responsibility quotas"
    ],
    featured: true
  },
  {
    id: "assign-epr-calculator",
    title: "E-Waste EPR Registration & Target Calculator Application",
    assignmentNumber: "Interactive Web Tool",
    category: "E-Waste Management Rules in Different Countries",
    description: "An interactive regulatory application implementing CPCB E-Waste Rules 2022 formulas for Extended Producer Responsibility targets across financial years, equipment classifications, and recycling obligations.",
    originalFilename: "ewaste_epr_app-blue.html",
    publicAssetPath: "/tools/ewaste-epr-calculator.html",
    fileType: "HTML",
    fileSizeFormatted: "11.4 KB",
    fileSizeBytes: 11701,
    submissionStatus: "Verified",
    sourceOrReference: "Central Pollution Control Board (CPCB) EPR Portal Guidelines",
    tags: ["EPR Calculator", "Interactive Tool", "CPCB Rules 2022", "Compliance"],
    keyHighlights: [
      "Live calculations across FY2022-23 to FY2027-28 target tiers",
      "Category breakdowns for IT, telecommunications, and consumer electronic goods",
      "Automated recycling liability and target credit determination",
      "Direct browser execution without external dependencies"
    ]
  },
  {
    id: "assign-comic-awareness",
    title: "E-Waste Today, A Cleaner Tomorrow | Jai Maharashtra! Comic",
    assignmentNumber: "Awareness Campaign",
    category: "E-Waste Awareness Poster / Comic",
    description: "A full 9-panel educational comic strip set in a college hostel in Pune, charting a student's discovery of gadget hazards, organizing an on-campus E-Waste Awareness Week, conducting segregation drives, and partnering with authorized recyclers.",
    originalFilename: "WhatsApp Image 2026-09-09 at 18.41.40.jpeg",
    publicAssetPath: "/posters/EWaste-Awareness-Comic-Strip.jpeg",
    previewThumbnail: "/posters/EWaste-Awareness-Comic-Strip.jpeg",
    fileType: "IMAGE",
    fileSizeFormatted: "674 KB",
    fileSizeBytes: 690344,
    submissionStatus: "Verified",
    sourceOrReference: "Campus Community Outreach Initiative",
    tags: ["Comic Strip", "Campus Drive", "Student Initiative", "Pune", "Segregation"],
    keyHighlights: [
      "Student awareness catalyst: Realizing discarded electronics leach heavy metals into drinking water",
      "Action blueprint: Campus collection bins for mobile phones, laptops, and chargers",
      "Peer-to-peer workshops: Educating peers on responsible end-of-life disposal",
      "Tie-up with authorized green dismantlers for zero-landfill recycling"
    ],
    featured: true
  },
  {
    id: "assign-poster-same-tech",
    title: "Same Tech. Different Tomorrow. — Recycle Responsibly Poster",
    assignmentNumber: "Visual Awareness Poster",
    category: "E-Waste Awareness Poster / Comic",
    description: "High-impact visual communication asset contrasting the dark reality of electronic waste landfills with a thriving green planet powered by circular recovery, urging viewers to Reduce, Reuse, Recycle, and Support Sustainable Brands.",
    originalFilename: "ChatGPT Image Sep 9, 2026, 06_57_38 PM.png",
    publicAssetPath: "/posters/Same-Tech-Different-Tomorrow-Poster.png",
    previewThumbnail: "/posters/Same-Tech-Different-Tomorrow-Poster.png",
    fileType: "IMAGE",
    fileSizeFormatted: "2.3 MB",
    fileSizeBytes: 2448404,
    submissionStatus: "Verified",
    sourceOrReference: "Creative Environmental Communication",
    tags: ["Visual Design", "Circular Economy", "Recycle Responsibly", "Public Outreach"],
    keyHighlights: [
      "Dual-sphere visual metaphor: Landfill debris versus regenerative lush biosphere",
      "Core actionable pillars: Reduce unnecessary electronics, reuse functional gear, recycle right",
      "Empowering message: 'Small Choices Create A Cleaner World'"
    ],
    featured: true
  },
  {
    id: "assign-sikkim-metals",
    title: "E-Waste to Wealth — District-wise Recoverable Metals in Sikkim",
    assignmentNumber: "Sub-National Infographic",
    category: "E-Waste to Wealth — District-wise Recoverable Metals in Sikkim",
    description: "Detailed district-level technological infographic charting main e-waste sources, specific precious and strategic metals (Cu, Au, Ag, Pd, Li, Nd, Dy, Pr, Ta, Nb), and recommended extraction technologies for all 6 districts of Sikkim.",
    originalFilename: "24102C0034-1.pdf",
    publicAssetPath: "/posters/E-Waste-To-Wealth-Sikkim-Infographic.pdf",
    previewThumbnail: "/previews/ewaste-to-wealth-sikkim.jpg",
    fileType: "PDF",
    fileSizeFormatted: "255 KB",
    fileSizeBytes: 261189,
    submissionStatus: "Submitted",
    sourceOrReference: "Sikkim Sub-National Field Analysis, VIT Mumbai",
    tags: ["Sikkim", "E-Waste to Wealth", "Recoverable Metals", "Gangtok", "Rare Earths", "Hydrometallurgy"],
    keyHighlights: [
      "Gangtok: High-density IT & telecom equipment yielding Cu, Au, Ag, Pd, Li, Ta, Nb, Ga, In, Nd, Dy, Pr",
      "Pakyong: Airport electronics & aerospace communications yielding precious metals and tantalum",
      "Namchi & Gyalshing: Consumer white goods and appliances yielding Cu, Al, Fe, and gallium",
      "All Districts: Neodymium magnets processed via Hydrogen Decrepitation -> Acid Leaching -> Solvent Extraction",
      "Key benefits: Conserves virgin ores, reduces carbon footprint, creates local green jobs in the Himalayas"
    ],
    featured: true
  },
  {
    id: "assign-hydrogen-decrepitation-flow",
    title: "Hydrogen Decrepitation Process Flow — Rare Earth Recovery Diagram",
    assignmentNumber: "Technical Flowchart",
    category: "Hydrogen Decrepitation — Rare-Earth Element Recovery",
    description: "Exhaustive industrial chemical engineering diagram documenting the 7-stage recovery pipeline of critical Rare Earth Elements (Neodymium, Dysprosium, Praseodymium, Terbium) from end-of-life NdFeB permanent magnets.",
    originalFilename: "file_0000000034dc8211adb85c09885e3ad8.png",
    publicAssetPath: "/diagrams/Hydrogen-Decrepitation-Process-Flow.png",
    previewThumbnail: "/diagrams/Hydrogen-Decrepitation-Process-Flow.png",
    fileType: "IMAGE",
    fileSizeFormatted: "2.0 MB",
    fileSizeBytes: 2095532,
    submissionStatus: "Verified",
    sourceOrReference: "Advanced Metallurgical Extraction Literature",
    tags: ["Hydrogen Decrepitation", "Rare Earth Elements", "NdFeB Magnets", "Hydrometallurgy", "Neodymium"],
    keyHighlights: [
      "1. Input Materials: E-waste NdFeB magnets from HDDs, EV motors, wind turbines, and acoustic speakers",
      "2. Pre-Treatment: Mechanical separation, surface cleaning, and size reduction (1-5 mm)",
      "3. Hydrogen Decrepitation: Exposure to pure H2 at 2-10 bar, 300-500°C for lattice expansion and decrepitation",
      "4. Post-Treatment & Milling: Dehydrogenation under vacuum, inert argon/N2 handling, and fine pulverization",
      "5. Leaching & REE Separation: Selective acid leaching (HCl/H2SO4) followed by solvent extraction and oxalate precipitation",
      "6. Recovered Products: Pure Neodymium (Nd 60), Dysprosium (Dy 66), and Praseodymium (Pr 59)"
    ],
    featured: true
  },
  {
    id: "assign-hd-magnet-report",
    title: "NdFeB Magnet Recycling Using Hydrogen Decrepitation Report",
    assignmentNumber: "Technical Research Report",
    category: "Hydrogen Decrepitation — Rare-Earth Element Recovery",
    description: "Academic research documentation analyzing the thermodynamics, reaction kinetics, safety protocols, and eco-efficiency of Hydrogen Decrepitation compared to energy-intensive pyrometallurgical smelting.",
    originalFilename: "EWEM_assignmet.docx",
    publicAssetPath: "/reports/NdFeB-Magnet-Recycling-Hydrogen-Decrepitation.docx",
    fileType: "DOCX",
    fileSizeFormatted: "20.7 KB",
    fileSizeBytes: 21196,
    submissionStatus: "Submitted",
    sourceOrReference: "Sustainable Metallurgy & Rare Earth Recycling Studies",
    tags: ["Hydrogen Decrepitation", "NdFeB Recycling", "Research Paper", "Green Metallurgy"],
    keyHighlights: [
      "Mechanism: Interstitial absorption of hydrogen into Nd2Fe14B crystal lattice causing lattice volume expansion and embrittlement",
      "Substantial energy savings over classical high-temperature pyrometallurgy",
      "Lower emissions and minimal toxic acid effluents during downstream separation",
      "Strategic value for India's self-reliance in clean energy components (EVs and wind power)"
    ]
  },
  {
    id: "assign-sikkim-deck",
    title: "Sub-National E-Waste Assessment: Sikkim FY 2026 Presentation",
    assignmentNumber: "State Research Presentation",
    category: "Sikkim District-Level E-Waste Generation, Collection, and Recycling Analysis",
    description: "Official slide deck by Tanmay Lalge and Yukta Padekar (Vidyalankar Institute of Technology, Mumbai) presenting the state-level assessment of e-waste generation (310.5 tonnes), collection shortfall, and district infrastructure divides across Sikkim.",
    originalFilename: "Sikkim_Ewaste_Deck.pptx",
    publicAssetPath: "/reports/Sikkim-District-EWaste-Assessment-Deck.pptx",
    fileType: "PPTX",
    fileSizeFormatted: "385 KB",
    fileSizeBytes: 394170,
    submissionStatus: "Submitted",
    sourceOrReference: "Sub-National E-Waste Series · India, VIT Mumbai",
    tags: ["Sikkim", "Sub-National Assessment", "Tanmay Lalge", "Yukta Padekar", "Presentation Deck", "Capture Rate"],
    keyHighlights: [
      "Statewide Generation: 310.5 tonnes generated across all six districts in FY 2026",
      "Formal Collection Shortfall: Only 18.2 tonnes formally collected (5.86% capture rate)",
      "District Divide: Gangtok accounts for 39% of generation (120 t) and holds formal collection hubs, whereas Mangan, Gyalshing, and Soreng have zero formal recyclers",
      "Waste Composition: Large/Small equipment (33%), IT & Telecom (27%), Consumer electronics (23%), Batteries (10%)",
      "Informal Workforce: 97 identified informal e-waste workers (only 42% trained or registered)"
    ],
    featured: true
  },
  {
    id: "assign-sikkim-tracker",
    title: "Sikkim State E-Waste Management Tracker & 100-Point Scorecard",
    assignmentNumber: "State Data Model",
    category: "Sikkim District-Level E-Waste Generation, Collection, and Recycling Analysis",
    description: "Comprehensive multi-worksheet data model recording Sikkim's district-by-district generation inventory, collection logs, recycling facility permits, regulatory compliance, informal hotspots, and live 46.1/100 state performance scorecard.",
    originalFilename: "State_EWaste_Tracker_Completed_Fixed 1.xlsx",
    publicAssetPath: "/datasets/State-EWaste-Tracker-Completed-Sikkim.xlsx",
    fileType: "XLSX",
    fileSizeFormatted: "40.8 KB",
    fileSizeBytes: 41828,
    submissionStatus: "Verified",
    sourceOrReference: "Sikkim SPCB & Sub-National E-Waste Audit",
    tags: ["State Tracker", "District Data", "Scorecard", "Inventory", "Excel Model"],
    keyHighlights: [
      "Overall State Score: 46.1 / 100 ('Needs Improvement')",
      "Full district dataset: Gangtok (120 t), Gyalshing (52.5 t), Namchi (52.5 t), Pakyong (31.5 t), Mangan (28 t), Soreng (26 t)",
      "Detailed category breakdown: IT/telecom, consumer goods, large equipment, lighting, and batteries",
      "9 operational sheets covering infrastructure, monitoring, and awareness campaigns"
    ],
    featured: true
  },
  {
    id: "assign-sikkim-spcb-report",
    title: "Sikkim E-Waste Soil & Sediment Diagnostic Report (SPCB)",
    assignmentNumber: "Environmental Diagnostics",
    category: "Sikkim District-Level E-Waste Generation, Collection, and Recycling Analysis",
    description: "Sikkim State Pollution Control Board environmental diagnostic report documenting heavy metal and persistent organic pollutant concentrations in e-waste dumpsites versus natural Himalayan baseline levels.",
    originalFilename: "E-waste_Sikkim.pdf",
    publicAssetPath: "/reports/Sikkim-EWaste-Diagnostic-Report-SPCB.pdf",
    previewThumbnail: "/previews/sikkim-spcb-report.jpg",
    fileType: "PDF",
    fileSizeFormatted: "213.5 KB",
    fileSizeBytes: 218670,
    submissionStatus: "Verified",
    sourceOrReference: "Sikkim State Pollution Control Board (SPCB) E-Waste Monitoring Program, FY 2026",
    tags: ["SPCB", "Diagnostic Report", "Soil Pollution", "PBDEs", "PCBs", "Heavy Metals"],
    keyHighlights: [
      "PBDE flame retardants in dumpsites: 6.8 to 8,100 ng/g (baseline: 1.5 - 120 ng/g)",
      "PCBs: Up to 950 ng/g in dumpsite soils compared to 21 ng/g state background",
      "SCCPs (Short Chain Chlorinated Paraffins): Severe spike hitting 30,200 ng/g (baseline: 18 ng/g)",
      "Heavy metals: Copper (1,620 ug/g) and Lead (1,180 ug/g) drastically exceeding natural levels (15-60 ug/g)",
      "Call to action: Immediate remediation of unlined Himalayan dumping grounds"
    ],
    featured: true
  },
  {
    id: "assign-ebin-smart-atm",
    title: "E-Bin: The Smart E-Waste ATM Presentation Deck",
    assignmentNumber: "Innovation Project",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "A 6-slide innovation deck proposing an AI-powered smart collection kiosk for micro e-waste (dead phones, cables, alkaline batteries) with computer vision sorting, consumer instant incentives, and a closed-loop business model.",
    originalFilename: "E-Bin Smart Recycling.pdf",
    publicAssetPath: "/reports/E-Bin-Smart-Recycling-ATM-System.pdf",
    previewThumbnail: "/previews/ebin-slide-1.png",
    allPreviews: [
      "/previews/ebin-slide-1.png",
      "/previews/ebin-slide-2.png",
      "/previews/ebin-slide-3.png",
      "/previews/ebin-slide-4.png",
      "/previews/ebin-slide-5.png",
      "/previews/ebin-slide-6.png"
    ],
    fileType: "PDF",
    fileSizeFormatted: "5.6 MB",
    fileSizeBytes: 5810215,
    submissionStatus: "Verified",
    sourceOrReference: "Smart Cities & Circular Economy Innovation",
    tags: ["E-Bin", "Smart ATM", "AI Sorting", "Computer Vision", "Incentive Economy"],
    keyHighlights: [
      "Slide 1: Vision for the Smart E-Waste ATM and Closed-Loop Micro-Economy",
      "Slide 2: The Micro E-Waste Crisis — High friction leads consumers to trash small gadgets",
      "Slide 3: Paradigm Shift — Traditional high friction vs. ATM-style accessible drop-off with instant rewards",
      "Slide 4: Machine Journey — Camera scan -> Neural net classification -> Mechanical compartment routing",
      "Slide 5: Multi-stakeholder ecosystem uniting recyclers, retail brand partners, and B2B campuses",
      "Slide 6: Sustainable micro-economy transforming toxic trash into circular value"
    ],
    featured: true
  },
  {
    id: "assign-green-aiot-paper",
    title: "Green AIoT for Sustainable Smart Cities IEEE Research Paper",
    assignmentNumber: "Research Paper",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "An academic research manuscript formatted for IEEE exploring energy-aware edge intelligence, TinyML inference on resource-constrained sensors, and renewable energy harvesting for sustainable urban sensing and e-waste mitigation.",
    originalFilename: "Green_AIoT_IEEE_Research_Paper.docx",
    publicAssetPath: "/reports/Green-AIoT-IEEE-Research-Paper.docx",
    fileType: "DOCX",
    fileSizeFormatted: "43.7 KB",
    fileSizeBytes: 44755,
    submissionStatus: "Self-Study & Reference",
    sourceOrReference: "Department of Computer Engineering, Vidyalankar Institute of Technology, Mumbai",
    tags: ["Green AIoT", "IEEE Paper", "Edge AI", "TinyML", "Sustainable Smart Cities"],
    keyHighlights: [
      "Edge-computing optimization to curb electronic waste from premature sensor obsolescence",
      "TinyML architectures lowering computational power draw by up to 80%",
      "Lifecycle assessments for distributed smart city IoT devices",
      "Integration of solar and ambient kinetic energy harvesting"
    ]
  },
  {
    id: "assign-ahp-ism-research",
    title: "AHP & ISM Modeling of Barriers to E-Waste Management in India",
    assignmentNumber: "Methodological Paper",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Rigorous academic analysis utilizing Analytic Hierarchy Process (AHP) and Interpretive Structural Modeling (ISM) to prioritize and map interdependent barriers plaguing India's formal e-waste collection and recycling ecosystem.",
    originalFilename: "E_Waste_AHP_ISM_Answers.docx",
    publicAssetPath: "/reports/EWaste-AHP-ISM-Research-Answers.docx",
    fileType: "DOCX",
    fileSizeFormatted: "49.6 KB",
    fileSizeBytes: 50759,
    submissionStatus: "Submitted",
    sourceOrReference: "Operations Research & Decision Science in E-Waste Management",
    tags: ["AHP", "ISM", "Barrier Analysis", "Structural Modeling", "Indian Policy"],
    keyHighlights: [
      "Identification of root-cause barriers: Lack of consumer awareness, informal sector competition, logistics costs",
      "Structural reachability matrices defining dominant vs dependent factors",
      "Strategic policy levers required to formalize informal dismantling clusters",
      "Mathematical multi-criteria decision making applied to municipal waste management"
    ]
  },
  {
    id: "assign-mse2-case-studies-pack",
    title: "TE MSE-2 Global Case Study Report & Exam Revision Pack",
    assignmentNumber: "MSE-2 Revision Pack",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Comprehensive 10-case study synthesis on international waste management, e-waste, and circular economies, including Japan, Switzerland, San Francisco, South Korea, Rwanda, Sweden, Singapore, Taiwan, and Curitiba, with SWOT analysis and India takeaways.",
    originalFilename: "TE_MSE2_Case_Study_Report_and_Revision_Pack.docx",
    publicAssetPath: "/reports/TE-MSE2-Case-Study-Report-and-Revision-Pack.docx",
    fileType: "DOCX",
    fileSizeFormatted: "1.1 MB",
    fileSizeBytes: 1120024,
    submissionStatus: "Submitted",
    sourceOrReference: "TE MSE-2 Course Assessment Pack, Department of Computer Engineering",
    tags: ["Global Case Studies", "Circular Economy", "Japan 3Rs", "San Francisco Zero Waste", "SWOT Analysis"],
    keyHighlights: [
      "10 in-depth global case studies spanning 5 continents",
      "Japan 3Rs model: 99.2% waste reduction rate and consumer-funded take-back",
      "San Francisco Zero Waste: Mandatory composting and aggressive landfill diversion",
      "Sweden Waste-to-Energy: Over 99% household waste recycled or converted to heat",
      "Concrete policy recommendations tailored for Indian metropolitan cities"
    ]
  },
  {
    id: "assign-case-studies-deck",
    title: "Global Waste Management Benchmarks (Case Studies 1–5 Deck)",
    assignmentNumber: "Presentation",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Slide deck breaking down Case Studies 1 through 5, highlighting how leading nations like Japan achieve a 99.2% waste-reduction rate through consumer separation, producer responsibility, and high-capacity formal treatment facilities.",
    originalFilename: "Case_Studies_1-5.pptx",
    publicAssetPath: "/reports/Global-Case-Studies-Presentation.pptx",
    fileType: "PPTX",
    fileSizeFormatted: "366 KB",
    fileSizeBytes: 374704,
    submissionStatus: "Verified",
    sourceOrReference: "International Waste Management Best Practices",
    tags: ["Case Studies Deck", "Japan 3Rs", "Presentation", "Lessons for India"],
    keyHighlights: [
      "Executive summary of Japan's Sound Material-Cycle Society policy",
      "Distinction between material recycling rate (19.3%) and total waste reduction (99.2%)",
      "Municipal collection networks versus manufacturer take-back schemes",
      "Actionable insights for Indian municipal corporations"
    ]
  },
  {
    id: "assign-carbon-footprint",
    title: "Institutional Carbon Footprint Calculator (Student Model 24102C0034)",
    assignmentNumber: "Carbon Footprint Assessment",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Detailed multi-tab environmental audit model registered under Roll 24102C0034 calculating Scope 1, 2, and 3 emissions from fossil fuel usage, electricity consumption, water, waste output, and student commuting.",
    originalFilename: "24102C0034.xlsx",
    publicAssetPath: "/datasets/Institutional-Carbon-Footprint-Calculator-24102C0034.xlsx",
    fileType: "XLSX",
    fileSizeFormatted: "58.1 KB",
    fileSizeBytes: 59450,
    submissionStatus: "Submitted",
    sourceOrReference: "Green Campus Sustainability Assessment, VIT Mumbai",
    tags: ["Carbon Footprint", "Scope 1 2 3", "Roll 24102C0034", "Campus Audit", "Emission Factors"],
    keyHighlights: [
      "Structured accounting for stationary fossil fuel and generator fuels",
      "Grid electricity consumption analysis and Scope 2 carbon equivalents",
      "Municipal water consumption and wastewater carbon impacts",
      "Campus commuter travel emissions and carbon offset calculations"
    ]
  },
  {
    id: "assign-leed-scores-vit",
    title: "10 Indian Green Buildings LEED Category Scores & VIT Baseline",
    assignmentNumber: "Green Buildings Audit",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Comparative LEED scorecard evaluating 10 landmark certified buildings in India (CII Godrej GBC, ITC Green Centre, Suzlon One Earth, Indira Paryavaran Bhawan) alongside an estimated baseline scoring for the VIT Mumbai campus.",
    originalFilename: "10_Indian_Green_Buildings_LEED_Category_Scores_with_VIT.xlsx",
    publicAssetPath: "/datasets/10-Indian-Green-Buildings-LEED-Scores-VIT.xlsx",
    fileType: "XLSX",
    fileSizeFormatted: "17.7 KB",
    fileSizeBytes: 18149,
    submissionStatus: "Verified",
    sourceOrReference: "USGBC / IGBC Certified Green Buildings Data",
    tags: ["Green Buildings", "LEED Scores", "VIT Mumbai", "Water Efficiency", "Energy & Atmosphere"],
    keyHighlights: [
      "Category scores for Sustainable Sites, Water Efficiency, Energy & Atmosphere, and Materials",
      "Suzlon One Earth (Pune): 82.6% overall score with perfect water efficiency (6/6)",
      "CII-Godrej GBC (Hyderabad): 81.2% score with top indoor environmental quality",
      "VIT campus estimation based on solar installations, rainwater harvesting, and waste segregation"
    ]
  },
  {
    id: "assign-leed-dashboard",
    title: "LEED Green Buildings Comparative Scorecard Dashboard",
    assignmentNumber: "Interactive Dataset",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Spreadsheet dashboard with dynamic formula rankings, percentage normalized charts, and verification notes assessing sustainable commercial architecture across Indian metropolitan cities.",
    originalFilename: "LEED_Green_Buildings_Dashboard-1.xlsx",
    publicAssetPath: "/datasets/LEED-Green-Buildings-Dashboard.xlsx",
    fileType: "XLSX",
    fileSizeFormatted: "31.5 KB",
    fileSizeBytes: 32284,
    submissionStatus: "Verified",
    sourceOrReference: "Green Building Rating Systems Comparative Study",
    tags: ["LEED Dashboard", "Benchmarking", "Building Ratings", "Data Analysis"],
    keyHighlights: [
      "Normalised percentage rankings across 10 certified landmark structures",
      "Visual scorecard identifying leaders in Energy & Atmosphere vs Indoor Air Quality",
      "Comprehensive verification notes citing official USGBC project numbers"
    ]
  },
  {
    id: "assign-green-buildings-totals",
    title: "Green Buildings Built-up Area, Points & Totals Matrix",
    assignmentNumber: "Infrastructure Matrix",
    category: "Additional Assignments, Class Activities, Notes & Research",
    description: "Comparative matrix tracking gross built-up floor area, rating tiers (Platinum, Gold), city locations, and cumulative credit totals for high-performance sustainable campuses in India.",
    originalFilename: "green_buildings_area_points_and_totals.xlsx",
    publicAssetPath: "/datasets/Green-Buildings-Area-Points-Totals.xlsx",
    fileType: "XLSX",
    fileSizeFormatted: "17.7 KB",
    fileSizeBytes: 18171,
    submissionStatus: "Verified",
    sourceOrReference: "National Green Building Certification Records",
    tags: ["Area Matrix", "Built-Up Area", "Platinum Ratings", "Point Totals"],
    keyHighlights: [
      "Covers campuses in Hyderabad, Gurugram, Pune, Mysuru, and New Delhi",
      "Analysis of square footage vs energy savings efficiency",
      "Platinum threshold verification guidelines"
    ]
  }
];

// Blog posts targeting low-competition, high-student-intent NCERT/education keywords

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  classTag: string;
  subject: string;
  readTime: number; // minutes
  publishedAt: string;
  keywords: string[];
  content: BlogSection[];
}

export interface BlogSection {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "table" | "tip" | "note";
  heading?: string;
  text?: string;
  items?: string[];
  rows?: { cells: string[] }[];
  headers?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "difference-between-plant-cell-and-animal-cell-class-8",
    title:
      "Difference Between Plant Cell and Animal Cell — NCERT Class 8 Science",
    metaTitle:
      "Plant Cell vs Animal Cell — Difference, Diagram & Notes | NCERT Class 8",
    metaDescription:
      "Learn the key differences between plant cell and animal cell with diagram, table, and easy notes. NCERT Class 8 Science Chapter 8 explained simply.",
    excerpt:
      "A simple, exam-ready comparison of plant cells and animal cells from NCERT Class 8 Science — with diagram, table, and important questions.",
    category: "Science",
    classTag: "Class 8",
    subject: "Science",
    readTime: 5,
    publishedAt: "2026-03-01",
    keywords: [
      "difference between plant cell and animal cell class 8",
      "plant cell vs animal cell",
      "NCERT class 8 science chapter 8",
      "plant cell animal cell diagram",
    ],
    content: [
      {
        type: "p",
        text: "In NCERT Class 8 Science Chapter 8 (Cell — Structure and Functions), students learn about the basic unit of life — the cell. One of the most commonly asked topics in CBSE exams is the difference between a plant cell and an animal cell.",
      },
      {
        type: "h2",
        heading: "What is a Cell?",
        text: "A cell is the smallest structural and functional unit of all living organisms. Both plants and animals are made up of cells, but these cells have some important differences.",
      },
      {
        type: "h2",
        heading: "Key Differences Between Plant Cell and Animal Cell",
      },
      {
        type: "table",
        headers: ["Feature", "Plant Cell", "Animal Cell"],
        rows: [
          { cells: ["Cell Wall", "Present (made of cellulose)", "Absent"] },
          { cells: ["Chloroplasts", "Present (for photosynthesis)", "Absent"] },
          { cells: ["Vacuole", "Large central vacuole", "Small or absent"] },
          {
            cells: [
              "Shape",
              "Fixed rectangular shape",
              "Irregular/round shape",
            ],
          },
          { cells: ["Centrioles", "Absent", "Present"] },
          { cells: ["Lysosomes", "Rare", "Common (found in cytoplasm)"] },
          { cells: ["Plastids", "Present", "Absent"] },
        ],
      },
      {
        type: "h2",
        heading: "Plant Cell — Key Features",
      },
      {
        type: "ul",
        items: [
          "Has a rigid cell wall made of cellulose outside the cell membrane",
          "Contains chloroplasts that trap sunlight and make food (photosynthesis)",
          "Has a large central vacuole filled with cell sap",
          "Does not have centrioles",
          "Contains plastids (chloroplasts, chromoplasts, leucoplasts)",
        ],
      },
      {
        type: "h2",
        heading: "Animal Cell — Key Features",
      },
      {
        type: "ul",
        items: [
          "Only has a cell membrane — no cell wall",
          "Does not have chloroplasts",
          "Vacuoles are small and temporary",
          "Has centrioles that help in cell division",
          "Contains lysosomes that digest waste materials",
        ],
      },
      {
        type: "tip",
        text: "Trick to remember: Plant cells have a WALL (cell wall), a GARDEN (chloroplasts for photosynthesis), and a big TANK (large vacuole). Animal cells are more flexible — no wall, no garden, small tank.",
      },
      {
        type: "h2",
        heading: "Important Questions for CBSE Class 8 Exam",
      },
      {
        type: "ol",
        items: [
          "Name two organelles found only in plant cells.",
          "What is the function of the cell wall in a plant cell?",
          "Why do plant cells have large vacuoles?",
          "What is the role of chloroplasts?",
          "Why are animal cells called heterotrophic?",
        ],
      },
      {
        type: "note",
        text: "This topic is covered in NCERT Class 8 Science, Chapter 8. Revise it along with Chapter 1 (Crop Production) for a strong science foundation.",
      },
    ],
  },
  {
    slug: "ncert-class-9-science-chapter-1-matter-important-questions",
    title:
      "NCERT Class 9 Science Chapter 1: Matter in Our Surroundings — Important Questions & Notes",
    metaTitle:
      "Class 9 Science Ch 1 Matter in Our Surroundings — Notes, Important Questions | NCERT",
    metaDescription:
      "Complete notes and important questions for NCERT Class 9 Science Chapter 1 Matter in Our Surroundings. States of matter, properties, evaporation explained.",
    excerpt:
      "Complete notes, key concepts, and important exam questions for NCERT Class 9 Science Chapter 1 — Matter in Our Surroundings.",
    category: "Science",
    classTag: "Class 9",
    subject: "Science",
    readTime: 6,
    publishedAt: "2026-03-01",
    keywords: [
      "NCERT Class 9 Science Chapter 1 important questions",
      "matter in our surroundings class 9",
      "class 9 science chapter 1 notes",
      "states of matter class 9",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 9 Science Chapter 1 — 'Matter in Our Surroundings' — is one of the most important chapters for CBSE board exams. It introduces students to the three states of matter, their properties, and concepts like evaporation and latent heat.",
      },
      {
        type: "h2",
        heading: "Key Concepts in Chapter 1",
      },
      {
        type: "ul",
        items: [
          "Matter: Anything that has mass and occupies space",
          "Three states of matter: Solid, Liquid, Gas",
          "Interconversion of states: melting, evaporation, condensation, freezing, sublimation",
          "Plasma: The fourth state of matter",
          "Bose-Einstein Condensate (BEC): Fifth state of matter",
          "Latent heat of fusion and vaporisation",
          "Evaporation and the factors affecting it",
        ],
      },
      {
        type: "h2",
        heading: "Properties of Three States of Matter",
      },
      {
        type: "table",
        headers: ["Property", "Solid", "Liquid", "Gas"],
        rows: [
          {
            cells: [
              "Shape",
              "Fixed",
              "No fixed shape (takes shape of container)",
              "No fixed shape",
            ],
          },
          { cells: ["Volume", "Fixed", "Fixed", "No fixed volume"] },
          { cells: ["Compressibility", "Very low", "Low", "High"] },
          { cells: ["Fluidity", "Cannot flow", "Can flow", "Can flow"] },
          {
            cells: [
              "Particle spacing",
              "Very close",
              "Slightly apart",
              "Far apart",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "What is Evaporation?",
        text: "Evaporation is the process by which a liquid changes into vapour (gas) at any temperature below its boiling point. It is a surface phenomenon.",
      },
      {
        type: "h3",
        heading: "Factors Affecting Evaporation",
      },
      {
        type: "ul",
        items: [
          "Temperature: Higher temperature → faster evaporation",
          "Surface area: Larger surface area → faster evaporation",
          "Humidity: Higher humidity → slower evaporation",
          "Wind speed: Higher wind speed → faster evaporation",
        ],
      },
      {
        type: "tip",
        text: "Evaporation causes cooling — that's why we feel cool when we sweat. The liquid sweat evaporates and takes heat from our body.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Define matter. Give two examples.",
          "What are the characteristics of particles of matter?",
          "Why does the smell of hot food reach us faster than cold food?",
          "What is sublimation? Give one example.",
          "Explain why evaporation causes cooling.",
          "What is latent heat of fusion?",
          "Describe the interconversion of states of matter with a diagram.",
          "Why is ice at 0°C more effective in cooling than water at 0°C?",
        ],
      },
    ],
  },
  {
    slug: "how-to-study-ncert-effectively-for-cbse-board-exam",
    title:
      "How to Study NCERT Effectively for CBSE Board Exams — A Complete Guide",
    metaTitle:
      "How to Study NCERT for CBSE Board Exam — Complete Study Guide 2026",
    metaDescription:
      "Learn how to study NCERT books effectively to score high in CBSE board exams. Study tips, timetable, chapter-wise strategy for Class 10 and 12.",
    excerpt:
      "A practical step-by-step guide to studying NCERT books for CBSE Class 10 and 12 board exams — with timetable, chapter tips, and revision strategies.",
    category: "Study Tips",
    classTag: "Class 10 & 12",
    subject: "All Subjects",
    readTime: 7,
    publishedAt: "2026-03-02",
    keywords: [
      "how to study NCERT for board exam",
      "NCERT study tips CBSE",
      "CBSE board exam preparation tips",
      "how to read NCERT effectively",
    ],
    content: [
      {
        type: "p",
        text: "Every CBSE student hears this advice: 'Just read the NCERT thoroughly.' But what does that actually mean? This guide gives you a clear, step-by-step method to study NCERT books so you can score 90+ in your CBSE board exams.",
      },
      {
        type: "h2",
        heading: "Why NCERT is the Most Important Book for CBSE",
      },
      {
        type: "ul",
        items: [
          "Almost 80–90% of CBSE board exam questions come directly from NCERT textbooks",
          "NCERT language is used in model answers — examiners expect NCERT-based responses",
          "All competitive exams (JEE, NEET, UPSC) use NCERT as the base",
          "NCERT books are clear, concise, and written by subject experts",
        ],
      },
      {
        type: "h2",
        heading: "Step-by-Step Method to Study NCERT",
      },
      {
        type: "ol",
        items: [
          "First reading — Read the entire chapter once without taking notes. Just understand the flow.",
          "Second reading — Read again and highlight key terms, definitions, and formulas.",
          "Make notes — Write short notes in your own words. Use bullet points, not paragraphs.",
          "Solve NCERT exercises — Every question in the NCERT exercise is exam-worthy. Do all of them.",
          "Revise examples and diagrams — In Science and Maths, diagrams and solved examples are very important.",
          "Solve previous year papers — After finishing NCERT, solve 5–10 years of CBSE past papers.",
          "Weekly revision — Revise your notes every weekend to keep information fresh.",
        ],
      },
      {
        type: "h2",
        heading: "Subject-Wise NCERT Study Tips",
      },
      {
        type: "h3",
        heading: "Science (Class 9 & 10)",
      },
      {
        type: "ul",
        items: [
          "Draw all diagrams yourself — label them clearly",
          "Memorise definitions word-for-word from NCERT",
          "For Physics: Understand formulas and their derivations",
          "For Chemistry: Learn equations and reactions chapter-wise",
          "For Biology: Draw and label diagrams for every chapter",
        ],
      },
      {
        type: "h3",
        heading: "Mathematics",
      },
      {
        type: "ul",
        items: [
          "Solve every NCERT exercise question — do not skip any",
          "For theorems: Learn proofs step-by-step",
          "Revise formulas daily — make a formula sheet",
          "Practice each type of problem at least 3 times",
        ],
      },
      {
        type: "h3",
        heading: "Social Science",
      },
      {
        type: "ul",
        items: [
          "For History: Make timelines of events",
          "For Geography: Use maps and diagrams",
          "For Civics: Learn key terms and article numbers",
          "For Economics: Understand definitions and examples",
        ],
      },
      {
        type: "tip",
        text: "Golden Rule: If it is in NCERT, it can come in the exam. If it is not in NCERT, it is less likely to come. Never skip any part of the NCERT textbook.",
      },
      {
        type: "h2",
        heading: "Sample 3-Month NCERT Study Timetable (Class 10)",
      },
      {
        type: "table",
        headers: ["Month", "Focus", "Activity"],
        rows: [
          {
            cells: [
              "Month 1",
              "Complete all chapters once",
              "First + second reading, basic notes",
            ],
          },
          {
            cells: [
              "Month 2",
              "Practice and exercises",
              "Solve all NCERT exercises, past papers",
            ],
          },
          {
            cells: [
              "Month 3",
              "Revision",
              "Revise notes, weak chapters, mock tests",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "difference-between-mitosis-and-meiosis-class-10",
    title:
      "Difference Between Mitosis and Meiosis — NCERT Class 10 Science Notes",
    metaTitle:
      "Mitosis vs Meiosis — Difference, Diagram, Table | NCERT Class 10 Science",
    metaDescription:
      "Clear comparison of mitosis and meiosis with diagram, table and examples. NCERT Class 10 Science Chapter 8 How do Organisms Reproduce — easy notes.",
    excerpt:
      "Easy-to-understand comparison of mitosis and meiosis with a comparison table, diagram description, and important exam questions for Class 10.",
    category: "Science",
    classTag: "Class 10",
    subject: "Science",
    readTime: 5,
    publishedAt: "2026-03-02",
    keywords: [
      "difference between mitosis and meiosis class 10",
      "mitosis vs meiosis CBSE",
      "mitosis meiosis diagram class 10",
      "NCERT class 10 science chapter 8",
    ],
    content: [
      {
        type: "p",
        text: "Mitosis and meiosis are two types of cell division. Understanding the difference between them is essential for scoring well in CBSE Class 10 Science (Chapter 8 — How do Organisms Reproduce?).",
      },
      {
        type: "h2",
        heading: "What is Mitosis?",
        text: "Mitosis is a type of cell division where one parent cell divides to produce two identical daughter cells. Each daughter cell has the same number of chromosomes as the parent cell (diploid). It is used for growth and repair of body tissues.",
      },
      {
        type: "h2",
        heading: "What is Meiosis?",
        text: "Meiosis is a type of cell division where one parent cell divides twice to produce four daughter cells, each with half the number of chromosomes (haploid). It is used to produce sex cells (gametes) — sperm and eggs.",
      },
      {
        type: "h2",
        heading: "Mitosis vs Meiosis — Comparison Table",
      },
      {
        type: "table",
        headers: ["Feature", "Mitosis", "Meiosis"],
        rows: [
          {
            cells: ["Number of divisions", "1", "2 (Meiosis I and Meiosis II)"],
          },
          { cells: ["Daughter cells produced", "2", "4"] },
          {
            cells: [
              "Chromosome number",
              "Same as parent (diploid 2n)",
              "Half of parent (haploid n)",
            ],
          },
          {
            cells: [
              "Genetic variation",
              "No — daughter cells are identical",
              "Yes — due to crossing over",
            ],
          },
          {
            cells: [
              "Where it occurs",
              "Body (somatic) cells",
              "Reproductive organs (gonads)",
            ],
          },
          {
            cells: [
              "Purpose",
              "Growth, repair, asexual reproduction",
              "Sexual reproduction (gamete formation)",
            ],
          },
          {
            cells: [
              "Stages",
              "Prophase, Metaphase, Anaphase, Telophase",
              "Same stages but twice (I and II)",
            ],
          },
        ],
      },
      {
        type: "tip",
        text: "Memory trick: Mitosis = Makes identical copies (M = Mirror). Meiosis = Makes eggs and sperm, Mix chromosomes (M = Mix).",
      },
      {
        type: "h2",
        heading: "Why is Meiosis Important?",
      },
      {
        type: "ul",
        items: [
          "Produces gametes (sperm and egg) needed for sexual reproduction",
          "Maintains the chromosome number across generations — if gametes were diploid, the offspring would have double chromosomes",
          "Creates genetic variation through crossing over — this drives evolution",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "What is the significance of meiosis in organisms that reproduce sexually?",
          "Why is mitosis called equational division?",
          "Why is meiosis called reductional division?",
          "Where does mitosis occur in the human body? Give two examples.",
          "What is crossing over and why is it important?",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-9-maths-chapter-1-number-systems-explained",
    title: "NCERT Class 9 Maths Chapter 1: Number Systems — Explained Simply",
    metaTitle:
      "NCERT Class 9 Maths Ch 1 Number Systems — Notes, Examples & Important Questions",
    metaDescription:
      "Easy explanation of NCERT Class 9 Maths Chapter 1 Number Systems. Rational, irrational numbers, real numbers, number line, and important exam questions.",
    excerpt:
      "Simple and clear notes for NCERT Class 9 Maths Chapter 1 — Number Systems. Covers rational numbers, irrational numbers, real numbers, and the number line.",
    category: "Mathematics",
    classTag: "Class 9",
    subject: "Mathematics",
    readTime: 6,
    publishedAt: "2026-03-02",
    keywords: [
      "NCERT class 9 maths chapter 1 number systems",
      "rational irrational numbers class 9",
      "real numbers class 9 notes",
      "number systems class 9 important questions",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 9 Maths Chapter 1 — Number Systems — is the foundation of Class 9 Mathematics. It covers different types of numbers and how they are related. Understanding this chapter well makes algebra and geometry much easier.",
      },
      {
        type: "h2",
        heading: "Types of Numbers — Quick Summary",
      },
      {
        type: "table",
        headers: ["Type", "Definition", "Example"],
        rows: [
          {
            cells: [
              "Natural Numbers (N)",
              "Counting numbers",
              "1, 2, 3, 4, ...",
            ],
          },
          {
            cells: [
              "Whole Numbers (W)",
              "Natural numbers + 0",
              "0, 1, 2, 3, ...",
            ],
          },
          {
            cells: [
              "Integers (Z)",
              "Whole numbers + negative numbers",
              "..., -2, -1, 0, 1, 2, ...",
            ],
          },
          {
            cells: [
              "Rational Numbers (Q)",
              "Numbers of the form p/q, where q ≠ 0",
              "1/2, 3/4, -5/3, 0.25",
            ],
          },
          {
            cells: [
              "Irrational Numbers",
              "Numbers that cannot be written as p/q",
              "√2, √3, π",
            ],
          },
          {
            cells: [
              "Real Numbers (R)",
              "All rational + irrational numbers",
              "All numbers on the number line",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "What are Rational Numbers?",
        text: "A rational number is any number that can be written in the form p/q, where p and q are integers and q ≠ 0. All terminating decimals and repeating decimals are rational numbers.",
      },
      {
        type: "h2",
        heading: "What are Irrational Numbers?",
        text: "An irrational number cannot be written as p/q. Its decimal expansion is non-terminating and non-repeating. Example: √2 = 1.41421356... (never ends, never repeats).",
      },
      {
        type: "tip",
        text: "How to check if a number is rational or irrational: If the decimal terminates (e.g. 0.5) or repeats (e.g. 0.333...) — it is rational. If the decimal goes on forever without repeating — it is irrational.",
      },
      {
        type: "h2",
        heading: "Laws of Exponents for Real Numbers",
      },
      {
        type: "ul",
        items: [
          "aᵐ × aⁿ = aᵐ⁺ⁿ",
          "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
          "(aᵐ)ⁿ = aᵐⁿ",
          "aᵐ × bᵐ = (ab)ᵐ",
          "a⁰ = 1 (where a ≠ 0)",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Is zero a rational number? Justify your answer.",
          "Find five rational numbers between 3/5 and 4/5.",
          "Show that 1.272727... = 1.27 (repeating) is a rational number.",
          "Classify as rational or irrational: √23, √225, 0.3796, 7.478478...",
          "Simplify: (√5 + √2)² ",
          "Rationalise the denominator of 1/√7",
          "If a = 2 + √3, find the value of a - 1/a.",
        ],
      },
    ],
  },
  {
    slug: "class-10-science-chapter-6-life-processes-notes",
    title: "NCERT Class 10 Science Chapter 6: Life Processes — Complete Notes",
    metaTitle:
      "Life Processes Class 10 Notes — NCERT Ch 6 Science | Nutrition Respiration Transport",
    metaDescription:
      "Complete NCERT Class 10 Science Chapter 6 Life Processes notes. Covers nutrition, respiration, transportation, and excretion with diagrams and important questions.",
    excerpt:
      "Full notes for NCERT Class 10 Science Chapter 6 — Life Processes. Covers nutrition, respiration, transport in plants and animals, and excretion.",
    category: "Science",
    classTag: "Class 10",
    subject: "Science",
    readTime: 8,
    publishedAt: "2026-03-03",
    keywords: [
      "life processes class 10 notes",
      "NCERT class 10 science chapter 6",
      "nutrition respiration class 10",
      "life processes important questions class 10",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 10 Science Chapter 6 — Life Processes — is one of the highest-weightage chapters for CBSE board exams. It covers the basic processes that keep living organisms alive: nutrition, respiration, transportation, and excretion.",
      },
      {
        type: "h2",
        heading: "What are Life Processes?",
        text: "Life processes are the basic functions that a living organism must perform to stay alive. The major life processes are: Nutrition, Respiration, Transportation, and Excretion.",
      },
      {
        type: "h2",
        heading: "1. Nutrition",
      },
      {
        type: "ul",
        items: [
          "Autotrophic nutrition: Organism makes its own food (e.g. plants using photosynthesis)",
          "Heterotrophic nutrition: Organism takes food from outside (animals, fungi, most bacteria)",
          "Photosynthesis equation: 6CO₂ + 6H₂O + sunlight energy → C₆H₁₂O₆ + 6O₂",
          "Nutrition in Amoeba: holozoic nutrition — ingestion, digestion, absorption, assimilation, egestion",
          "Human digestive system: mouth → oesophagus → stomach → small intestine → large intestine → anus",
        ],
      },
      {
        type: "h2",
        heading: "2. Respiration",
      },
      {
        type: "ul",
        items: [
          "Aerobic respiration: requires oxygen — C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)",
          "Anaerobic respiration: without oxygen — produces lactic acid (in muscles) or ethanol + CO₂ (in yeast)",
          "Breathing in humans: diaphragm and intercostal muscles control inhalation/exhalation",
          "Respiration in plants: through stomata (day), lenticels",
        ],
      },
      {
        type: "h2",
        heading: "3. Transportation",
      },
      {
        type: "ul",
        items: [
          "In plants: Xylem transports water and minerals (upward). Phloem transports food/sugars (in both directions).",
          "In humans: Blood circulatory system — heart, blood vessels (arteries, veins, capillaries), blood",
          "Double circulation: pulmonary (heart ↔ lungs) + systemic (heart ↔ body)",
          "Blood components: RBC (oxygen), WBC (immunity), platelets (clotting), plasma (nutrients)",
        ],
      },
      {
        type: "h2",
        heading: "4. Excretion",
      },
      {
        type: "ul",
        items: [
          "Excretion: removal of waste products from the body",
          "In humans: kidneys filter blood and produce urine (urea, water, salts)",
          "Nephron: functional unit of the kidney — filters blood and reabsorbs useful substances",
          "In plants: stomata (CO₂), leaves fall off carrying waste, resins and gums are stored in old xylem",
        ],
      },
      {
        type: "tip",
        text: "For board exams, always draw the diagrams for: human digestive system, human respiratory system, human heart, and nephron. These are frequently asked for 5-mark questions.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "What is the role of saliva in the digestion of food?",
          "What is the significance of emulsification of fats?",
          "How are the lungs designed to maximise the area for exchange of gases?",
          "What are the components of the transport system in human beings?",
          "Describe the structure of the nephron with a labelled diagram.",
          "Compare aerobic and anaerobic respiration.",
          "What is the difference between arteries and veins?",
        ],
      },
    ],
  },
  {
    slug: "class-8-geography-chapter-1-resources-notes-summary",
    title: "NCERT Class 8 Geography Chapter 1: Resources — Notes & Summary",
    metaTitle:
      "Resources Class 8 Geography Notes — NCERT Ch 1 | Types, Uses & Conservation",
    metaDescription:
      "Easy notes and summary for NCERT Class 8 Geography Chapter 1 Resources. Types of resources, sustainable development, conservation — for CBSE exam prep.",
    excerpt:
      "Simple notes for NCERT Class 8 Geography Chapter 1 — Resources. Covers types of resources, utility, sustainable development, and conservation.",
    category: "Social Science",
    classTag: "Class 8",
    subject: "Geography",
    readTime: 5,
    publishedAt: "2026-03-03",
    keywords: [
      "class 8 geography chapter 1 resources notes",
      "NCERT class 8 resources summary",
      "types of resources class 8",
      "sustainable development class 8",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 8 Geography Chapter 1 — Resources — is the starting point of Social Science Geography. It explains what resources are, how they are classified, and why conservation and sustainable development are important.",
      },
      {
        type: "h2",
        heading: "What is a Resource?",
        text: "Anything that can be used to satisfy a need is called a resource. A substance becomes a resource only when it has utility — the ability to satisfy a human need.",
      },
      {
        type: "h2",
        heading: "Types of Resources",
      },
      {
        type: "h3",
        heading: "1. On the Basis of Development",
      },
      {
        type: "ul",
        items: [
          "Actual resources: Known and used at present (coal, water, petroleum)",
          "Potential resources: Known but not yet used fully (solar/wind energy in many areas)",
        ],
      },
      {
        type: "h3",
        heading: "2. On the Basis of Origin",
      },
      {
        type: "ul",
        items: [
          "Biotic resources: Obtained from living things (plants, animals, fish)",
          "Abiotic resources: Obtained from non-living things (land, water, minerals)",
        ],
      },
      {
        type: "h3",
        heading: "3. On the Basis of Distribution",
      },
      {
        type: "ul",
        items: [
          "Ubiquitous resources: Found everywhere (air, sunlight)",
          "Localised resources: Found in specific places only (iron ore, gold, petroleum)",
        ],
      },
      {
        type: "h3",
        heading: "4. On the Basis of Ownership",
      },
      {
        type: "ul",
        items: [
          "Individual resources: Owned by individuals (personal land, cars, buildings)",
          "Community resources: Owned by community (parks, playgrounds, village ponds)",
          "National resources: Owned by the nation (roads, railways, minerals, forests)",
          "International resources: Beyond any country's boundary (ocean resources beyond 200 km)",
        ],
      },
      {
        type: "h2",
        heading: "What is Sustainable Development?",
        text: "Sustainable development means using resources carefully so that future generations can also enjoy them. It balances economic growth with protecting the environment.",
      },
      {
        type: "tip",
        text: "Key CBSE point: 'Resources are not free gifts of nature. We become a resource only when it satisfies a human need.' Always include this in your definition of resources.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "What do you understand by the term 'resource'?",
          "What is the difference between actual and potential resources? Give examples.",
          "Differentiate between biotic and abiotic resources.",
          "What is sustainable development? Why is it important?",
          "Name the four types of resources on the basis of ownership.",
          "Why is conservation of resources necessary?",
        ],
      },
    ],
  },
  {
    slug: "how-to-score-95-in-cbse-class-10-board-exam",
    title:
      "How to Score 95+ in CBSE Class 10 Board Exam — Practical Tips That Work",
    metaTitle:
      "How to Score 95+ in CBSE Class 10 Board Exam 2026 — Study Tips & Strategy",
    metaDescription:
      "Proven tips to score 95+ in CBSE Class 10 Board Exam 2026. Subject-wise strategy, revision plan, and common mistakes to avoid — by NCERT Bhaiya.",
    excerpt:
      "Practical, no-fluff tips to score 95 marks or more in CBSE Class 10 Board Exams — including subject-wise strategy, revision tips, and exam-day advice.",
    category: "Study Tips",
    classTag: "Class 10",
    subject: "All Subjects",
    readTime: 7,
    publishedAt: "2026-03-03",
    keywords: [
      "how to score 95 in CBSE class 10 board exam",
      "CBSE class 10 study tips",
      "class 10 board exam preparation 2026",
      "tips for scoring high in board exam",
    ],
    content: [
      {
        type: "p",
        text: "Scoring 95+ in CBSE Class 10 boards is absolutely possible with the right strategy. Thousands of students do it every year — not by studying 16 hours a day, but by studying smart. Here is exactly what you need to do.",
      },
      {
        type: "h2",
        heading: "1. Master NCERT First — No Exceptions",
      },
      {
        type: "p",
        text: "90% of CBSE board questions come from NCERT. Before you touch any reference book, complete NCERT thoroughly. Read every line. Solve every exercise question. Memorise key definitions in NCERT language.",
      },
      {
        type: "h2",
        heading: "2. Solve 10 Years of Past Papers",
      },
      {
        type: "p",
        text: "Past papers are the most reliable predictor of what will come in the exam. Solve CBSE past papers from 2014 to 2025. Notice which chapters come every year — those are your high-priority topics.",
      },
      {
        type: "h2",
        heading: "3. Subject-Wise Strategy",
      },
      {
        type: "table",
        headers: ["Subject", "High-Weight Topics", "Key Tip"],
        rows: [
          {
            cells: [
              "Science",
              "Life Processes, Heredity, Light, Electricity",
              "Draw all diagrams + memorise definitions",
            ],
          },
          {
            cells: [
              "Mathematics",
              "Triangles, Arithmetic Progressions, Statistics",
              "Practice 10+ questions per topic",
            ],
          },
          {
            cells: [
              "Social Science",
              "Nationalism, Federalism, Development, Resources",
              "Make chapter summaries + map work",
            ],
          },
          {
            cells: [
              "English",
              "Comprehension, Grammar, Writing, Literature",
              "Read carefully + practice letter/essay formats",
            ],
          },
          {
            cells: [
              "Hindi",
              "Grammar, Comprehension, Literature essays",
              "Learn key quotes from poems and prose",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "4. Make a Realistic Timetable",
      },
      {
        type: "ul",
        items: [
          "Study 5–6 hours daily — not more. Quality beats quantity.",
          "Rotate subjects — do not study the same subject for 5 hours",
          "Keep 1 hour every evening for revision only",
          "Take a 15-minute break every 45–50 minutes",
        ],
      },
      {
        type: "h2",
        heading: "5. Common Mistakes to Avoid",
      },
      {
        type: "ul",
        items: [
          "Skipping NCERT exercises — these are the most important questions",
          "Not practising diagrams — 3–5 mark questions often require labelled diagrams",
          "Ignoring answer writing format — learn how to structure 3-mark and 5-mark answers",
          "Studying new topics 2 days before the exam — spend the last 2 days on revision only",
          "Not sleeping well — 8 hours of sleep improves memory and focus",
        ],
      },
      {
        type: "tip",
        text: "Exam day tip: Read all questions first before starting. Attempt easy questions first to build confidence. Allocate time per section and stick to it. Leave 10 minutes at the end to review answers.",
      },
    ],
  },
  {
    slug: "ncert-solutions-class-7-science-chapter-1-nutrition-in-plants",
    title:
      "NCERT Solutions Class 7 Science Chapter 1: Nutrition in Plants — Notes & Questions",
    metaTitle:
      "Nutrition in Plants Class 7 Notes — NCERT Science Ch 1 | Photosynthesis, Parasitic",
    metaDescription:
      "Complete NCERT Class 7 Science Chapter 1 Nutrition in Plants notes. Photosynthesis, autotrophs, heterotrophs, parasitic plants — easy explanation for CBSE.",
    excerpt:
      "Easy-to-understand notes for NCERT Class 7 Science Chapter 1 — Nutrition in Plants. Covers photosynthesis, types of nutrition, and important questions.",
    category: "Science",
    classTag: "Class 7",
    subject: "Science",
    readTime: 5,
    publishedAt: "2026-03-04",
    keywords: [
      "nutrition in plants class 7 notes",
      "NCERT class 7 science chapter 1",
      "photosynthesis class 7",
      "autotrophic heterotrophic nutrition class 7",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 7 Science Chapter 1 — Nutrition in Plants — teaches students how plants make their food and the different modes of nutrition in the plant kingdom. This is a foundational chapter that connects to higher-class topics like ecosystems and food chains.",
      },
      {
        type: "h2",
        heading: "What is Nutrition?",
        text: "Nutrition is the process by which organisms obtain and use food for energy, growth, and repair. The mode of nutrition differs between plants and animals.",
      },
      {
        type: "h2",
        heading: "Modes of Nutrition in Plants",
      },
      {
        type: "h3",
        heading: "1. Autotrophic Nutrition",
        text: "Plants make their own food using sunlight, water, and carbon dioxide. This process is called photosynthesis. Plants are called autotrophs (auto = self, troph = feeding).",
      },
      {
        type: "h3",
        heading: "Photosynthesis — Simple Explanation",
      },
      {
        type: "ul",
        items: [
          "Raw materials: Carbon dioxide (CO₂) from air, Water (H₂O) from soil, Sunlight",
          "Where it happens: Chloroplasts in green leaves (chlorophyll absorbs sunlight)",
          "Products: Glucose (food) + Oxygen",
          "Equation: Carbon dioxide + Water + Sunlight → Glucose + Oxygen",
          "CO₂ enters through stomata (tiny pores on leaf surface)",
          "Water is absorbed by roots and transported through xylem",
        ],
      },
      {
        type: "h3",
        heading: "2. Heterotrophic Nutrition in Plants",
      },
      {
        type: "ul",
        items: [
          "Parasitic plants: Get nutrition from host plants — e.g. Cuscuta (Amarbel), mistletoe",
          "Insectivorous plants: Catch and digest insects — e.g. Venus flytrap, pitcher plant",
          "Saprotrophic plants: Feed on dead organic matter — e.g. some fungi and moulds",
          "Symbiotic: Mutually beneficial relationship — e.g. lichens (algae + fungi), legumes + Rhizobium",
        ],
      },
      {
        type: "tip",
        text: "Remember: Cuscuta (Amarbel) is the most commonly asked parasitic plant in CBSE exams. It has no chlorophyll — that is why it cannot do photosynthesis and steals nutrients from the host plant.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Name the raw materials required for photosynthesis.",
          "What role does chlorophyll play in photosynthesis?",
          "What is a parasite? Give one example from the plant kingdom.",
          "What is the role of stomata?",
          "How do insectivorous plants get their nitrogen?",
          "Explain how Rhizobium helps leguminous plants.",
          "Why are plants called producers?",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-9-science-chapter-5-fundamental-unit-of-life-notes",
    title:
      "NCERT Class 9 Science Chapter 5: The Fundamental Unit of Life — Notes & Important Questions",
    metaTitle:
      "The Fundamental Unit of Life Class 9 Notes — NCERT Ch 5 Science | CBSE",
    metaDescription:
      "Easy notes for NCERT Class 9 Science Chapter 5 The Fundamental Unit of Life. Cell theory, organelles, plant vs animal cell — important questions for CBSE board.",
    excerpt:
      "Complete notes and important questions for NCERT Class 9 Science Chapter 5 — The Fundamental Unit of Life. Covers cell theory, cell organelles, and differences between plant and animal cells.",
    category: "Science",
    classTag: "Class 9",
    subject: "Science",
    readTime: 7,
    publishedAt: "2026-03-05",
    keywords: [
      "the fundamental unit of life class 9 notes",
      "NCERT class 9 science chapter 5",
      "cell organelles class 9",
      "fundamental unit of life important questions",
      "class 9 science chapter 5 CBSE",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 9 Science Chapter 5 — 'The Fundamental Unit of Life' — introduces students to the cell: the basic building block of all living organisms. This is one of the highest-scoring chapters for CBSE exams. Mastering it gives a strong foundation for Class 10 Biology.",
      },
      {
        type: "h2",
        heading: "What is a Cell?",
        text: "A cell is the smallest structural and functional unit of living organisms. All living things are made of cells. The study of cells is called cytology.",
      },
      {
        type: "h2",
        heading: "Cell Theory — 3 Key Points",
      },
      {
        type: "ol",
        items: [
          "All living organisms are made up of one or more cells.",
          "The cell is the basic unit of life.",
          "All cells arise from pre-existing cells.",
        ],
      },
      {
        type: "h2",
        heading: "Types of Cells",
      },
      {
        type: "table",
        headers: ["Feature", "Prokaryotic Cell", "Eukaryotic Cell"],
        rows: [
          { cells: ["Nuclear membrane", "Absent", "Present"] },
          {
            cells: [
              "Membrane-bound organelles",
              "Absent",
              "Present (mitochondria, ER, Golgi, etc.)",
            ],
          },
          {
            cells: [
              "Examples",
              "Bacteria, Blue-green algae",
              "Plant cells, Animal cells, Fungi",
            ],
          },
          { cells: ["Size", "Smaller (1–10 µm)", "Larger (10–100 µm)"] },
        ],
      },
      {
        type: "h2",
        heading: "Cell Organelles and Their Functions",
      },
      {
        type: "table",
        headers: ["Organelle", "Function"],
        rows: [
          {
            cells: [
              "Cell membrane",
              "Selectively permeable — controls what enters/exits the cell",
            ],
          },
          {
            cells: [
              "Cell wall",
              "Provides rigidity and protection — present only in plant cells",
            ],
          },
          {
            cells: [
              "Nucleus",
              "Controls all cell activities; contains DNA (genetic material)",
            ],
          },
          {
            cells: [
              "Mitochondria",
              "Site of cellular respiration — produces energy (ATP). Called the powerhouse of the cell.",
            ],
          },
          {
            cells: [
              "Chloroplast",
              "Site of photosynthesis — found only in plant cells. Contains chlorophyll.",
            ],
          },
          {
            cells: [
              "Endoplasmic Reticulum (ER)",
              "Rough ER: protein synthesis. Smooth ER: lipid synthesis.",
            ],
          },
          {
            cells: [
              "Golgi apparatus",
              "Packages and ships proteins and lipids out of the cell.",
            ],
          },
          {
            cells: [
              "Lysosome",
              "Contains digestive enzymes — destroys waste and foreign particles. Called the suicide bag.",
            ],
          },
          {
            cells: [
              "Vacuole",
              "Stores water, food, waste. Large in plant cells, small in animal cells.",
            ],
          },
          {
            cells: [
              "Ribosome",
              "Site of protein synthesis — found in all cells (prokaryotes and eukaryotes).",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "Plasma Membrane (Cell Membrane)",
        text: "The plasma membrane is a thin, flexible, selectively permeable membrane made of lipids and proteins. It controls the movement of substances in and out of the cell.",
      },
      {
        type: "h3",
        heading: "Osmosis and Diffusion",
      },
      {
        type: "ul",
        items: [
          "Diffusion: Movement of substances from high concentration to low concentration (e.g. CO₂ and O₂ movement in/out of cells)",
          "Osmosis: Movement of water through a semi-permeable membrane from low concentration to high concentration",
          "Hypotonic solution: Less concentrated than cell — cell swells (endosmosis)",
          "Hypertonic solution: More concentrated than cell — cell shrinks (exosmosis/plasmolysis)",
        ],
      },
      {
        type: "tip",
        text: "Exam tip: 'Lysosome is called the suicide bag' and 'Mitochondria is called the powerhouse of the cell' are the two most commonly asked 1-mark MCQ questions in CBSE Class 9.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Who discovered the cell and how?",
          "What is the difference between prokaryotic and eukaryotic cells?",
          "What is the function of the nucleus in a cell?",
          "Why is mitochondria called the powerhouse of the cell?",
          "Why is the lysosome called a suicide bag?",
          "What is osmosis? Distinguish between endosmosis and exosmosis.",
          "Name the organelle that is the site of photosynthesis.",
          "What are chromosomes? What do they contain?",
          "Draw a well-labelled diagram of a plant cell.",
        ],
      },
      {
        type: "note",
        text: "This chapter connects directly to Class 8 Ch 8 (Cell Structure and Functions). Revise both together for maximum retention.",
      },
    ],
  },
  {
    slug: "difference-between-acids-bases-and-salts-class-7-science",
    title:
      "Difference Between Acids, Bases and Salts — NCERT Class 7 Science Notes",
    metaTitle:
      "Acids Bases and Salts Class 7 Notes — Difference, Examples | NCERT Science",
    metaDescription:
      "Easy notes on Acids, Bases and Salts for NCERT Class 7 Science. Properties, differences, natural indicators, pH scale — important questions for CBSE exam prep.",
    excerpt:
      "Simple and clear notes on Acids, Bases and Salts from NCERT Class 7 Science. Covers properties, natural indicators, neutralisation, and important exam questions.",
    category: "Science",
    classTag: "Class 7",
    subject: "Science",
    readTime: 6,
    publishedAt: "2026-03-05",
    keywords: [
      "difference between acids bases and salts class 7",
      "NCERT class 7 science acids bases salts",
      "acids and bases class 7 notes",
      "neutralisation reaction class 7",
      "natural indicators class 7 science",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 7 Science Chapter 5 — 'Acids, Bases and Salts' — is a very important chapter for CBSE exams. It explains the properties of acids and bases, how to identify them using indicators, and how they react with each other to form salts.",
      },
      {
        type: "h2",
        heading: "What are Acids?",
        text: "Acids are substances that taste sour and turn blue litmus paper red. They have a pH less than 7. Examples: lemon juice (citric acid), vinegar (acetic acid), hydrochloric acid (HCl).",
      },
      {
        type: "h2",
        heading: "What are Bases?",
        text: "Bases are substances that taste bitter and feel slippery. They turn red litmus paper blue. They have a pH greater than 7. Examples: baking soda (sodium bicarbonate), soap, lime water (calcium hydroxide).",
      },
      {
        type: "h2",
        heading: "Acids vs Bases vs Salts — Comparison Table",
      },
      {
        type: "table",
        headers: ["Property", "Acid", "Base", "Salt"],
        rows: [
          { cells: ["Taste", "Sour", "Bitter", "Salty"] },
          { cells: ["pH", "Less than 7", "More than 7", "Around 7 (neutral)"] },
          {
            cells: [
              "Effect on litmus",
              "Turns blue litmus red",
              "Turns red litmus blue",
              "No change",
            ],
          },
          { cells: ["Texture", "Corrosive", "Slippery/soapy", "Crystalline"] },
          {
            cells: [
              "Examples",
              "HCl, H₂SO₄, citric acid, acetic acid",
              "NaOH, Ca(OH)₂, soap, baking soda",
              "NaCl, Na₂SO₄, NaHCO₃",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "Natural Indicators",
        text: "Natural indicators are substances obtained from nature that change colour in the presence of acids and bases.",
      },
      {
        type: "table",
        headers: ["Indicator", "Colour in Acid", "Colour in Base"],
        rows: [
          { cells: ["Litmus (purple)", "Red", "Blue"] },
          { cells: ["Turmeric", "Yellow (no change)", "Red/brown"] },
          { cells: ["China rose (Gurhal)", "Dark pink/magenta", "Green"] },
          {
            cells: ["Red cabbage juice", "Pink/red", "Green/yellow"],
          },
        ],
      },
      {
        type: "h2",
        heading: "Neutralisation Reaction",
        text: "When an acid reacts with a base, they cancel each other out to form a salt and water. This reaction is called neutralisation.",
      },
      {
        type: "ul",
        items: [
          "General equation: Acid + Base → Salt + Water",
          "Example: HCl + NaOH → NaCl + H₂O",
          "The product (salt) is neutral — neither acidic nor basic",
          "Real-life examples: Ant bite (formic acid) treated with baking soda; Acidity in stomach treated with antacids",
        ],
      },
      {
        type: "tip",
        text: "Exam tip: Ants inject formic acid when they bite. That is why applying a base like baking soda relieves the pain. This is a very common 2-mark application question in CBSE Class 7.",
      },
      {
        type: "h2",
        heading: "Salts in Everyday Life",
      },
      {
        type: "ul",
        items: [
          "Common salt (NaCl): Used in food, making soap, and preserving food",
          "Baking soda (NaHCO₃): Used in cooking (makes dough rise), relieves acidity",
          "Washing soda (Na₂CO₃): Used in cleaning clothes and softening hard water",
          "Bleaching powder (CaOCl₂): Used to disinfect water and bleach fabrics",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Define acid and base. Give two examples of each.",
          "What happens when an acid and a base are mixed? Write the equation.",
          "Name two natural indicators. What colour does each turn in an acidic solution?",
          "Why does a bee sting hurt? How can you relieve the pain?",
          "What is litmus? How is it obtained?",
          "Classify the following as acid, base or salt: vinegar, soap, common salt, lemon juice, milk of magnesia.",
          "What is the pH scale? What does a pH of 7 mean?",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-10-maths-chapter-3-pair-of-linear-equations-notes",
    title:
      "NCERT Class 10 Maths Chapter 3: Pair of Linear Equations in Two Variables — Notes & Solutions",
    metaTitle:
      "Pair of Linear Equations Class 10 Maths Notes — NCERT Ch 3 | Methods & Examples",
    metaDescription:
      "Complete notes for NCERT Class 10 Maths Chapter 3 Pair of Linear Equations. Graphical, substitution, elimination methods with solved examples and important questions.",
    excerpt:
      "Full notes for NCERT Class 10 Maths Chapter 3 — Pair of Linear Equations in Two Variables. Covers graphical, substitution, and elimination methods with solved examples.",
    category: "Mathematics",
    classTag: "Class 10",
    subject: "Mathematics",
    readTime: 8,
    publishedAt: "2026-03-05",
    keywords: [
      "pair of linear equations class 10 notes",
      "NCERT class 10 maths chapter 3",
      "linear equations two variables class 10",
      "substitution elimination method class 10",
      "class 10 maths chapter 3 important questions",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 10 Maths Chapter 3 — 'Pair of Linear Equations in Two Variables' — is one of the highest-weightage chapters in CBSE Class 10 boards. It is also foundational for algebra in Class 11. This chapter teaches you how to solve two equations with two unknowns using multiple methods.",
      },
      {
        type: "h2",
        heading: "What is a Linear Equation in Two Variables?",
        text: "A linear equation in two variables has the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero. Example: 2x + 3y = 12.",
      },
      {
        type: "h2",
        heading: "Types of Solutions — Graphical Understanding",
      },
      {
        type: "table",
        headers: ["Type of Lines", "Number of Solutions", "Type of Equations"],
        rows: [
          {
            cells: [
              "Intersecting lines",
              "Exactly one solution (unique)",
              "Consistent",
            ],
          },
          {
            cells: [
              "Parallel lines (no intersection)",
              "No solution",
              "Inconsistent",
            ],
          },
          {
            cells: [
              "Coincident lines (same line)",
              "Infinitely many solutions",
              "Dependent/Consistent",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "Condition for Type of Solution",
      },
      {
        type: "p",
        text: "For a pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0:",
      },
      {
        type: "ul",
        items: [
          "Unique solution (intersecting): a₁/a₂ ≠ b₁/b₂",
          "No solution (parallel): a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
          "Infinitely many solutions (coincident): a₁/a₂ = b₁/b₂ = c₁/c₂",
        ],
      },
      {
        type: "h2",
        heading: "Method 1 — Substitution Method",
      },
      {
        type: "ol",
        items: [
          "From one equation, express one variable in terms of the other (e.g. x = 3 - 2y)",
          "Substitute this expression into the second equation",
          "Solve for the remaining variable",
          "Substitute back to find the first variable",
        ],
      },
      {
        type: "h2",
        heading: "Method 2 — Elimination Method",
      },
      {
        type: "ol",
        items: [
          "Multiply both equations by suitable constants to make the coefficient of one variable equal",
          "Add or subtract the equations to eliminate that variable",
          "Solve the resulting equation for the remaining variable",
          "Substitute back to find the eliminated variable",
        ],
      },
      {
        type: "h2",
        heading: "Method 3 — Cross-Multiplication Method",
      },
      {
        type: "p",
        text: "For equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the solution is given by the cross-multiplication formula:",
      },
      {
        type: "ul",
        items: [
          "x = (b₁c₂ - b₂c₁) / (a₁b₂ - a₂b₁)",
          "y = (c₁a₂ - c₂a₁) / (a₁b₂ - a₂b₁)",
          "This method works for any pair of linear equations and is fastest for multiple-choice questions",
        ],
      },
      {
        type: "tip",
        text: "For board exams: Substitution and elimination methods are most commonly tested. Practice 5–6 word problems from the NCERT exercises — they appear almost every year in the 3-mark or 4-mark section.",
      },
      {
        type: "h2",
        heading: "Common Word Problem Types",
      },
      {
        type: "ul",
        items: [
          "Age problems: Find ages of two people given their sum/difference and relationship",
          "Number problems: Find two numbers given their sum, difference, or ratio",
          "Speed-distance-time: Boats in streams, trains, walking speed problems",
          "Money problems: Cost of items, change problems",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Solve: 2x + 3y = 11 and 2x - 4y = -24 by elimination method.",
          "For what value of k do the equations 2x + 3y = 7 and (k+1)x + (2k-1)y = 4k+1 have infinitely many solutions?",
          "A boat covers 32 km upstream and 36 km downstream in 7 hours. Also, it covers 40 km upstream and 48 km downstream in 9 hours. Find the speed of the boat in still water and the speed of the stream.",
          "Solve the system 3x - 5y = 4 and 9x - 2y = 7 using the cross-multiplication method.",
          "The sum of two numbers is 35 and their difference is 13. Find the numbers.",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-8-science-chapter-6-combustion-and-flame-notes",
    title:
      "NCERT Class 8 Science Chapter 6: Combustion and Flame — Complete Notes",
    metaTitle:
      "Combustion and Flame Class 8 Notes — NCERT Science Ch 6 | Types & Fire Triangle",
    metaDescription:
      "Easy notes for NCERT Class 8 Science Chapter 6 Combustion and Flame. Types of combustion, fire triangle, ignition temperature, zones of a flame — CBSE board prep.",
    excerpt:
      "Clear and easy notes for NCERT Class 8 Science Chapter 6 — Combustion and Flame. Covers types of combustion, fire triangle, ignition temperature, and zones of a candle flame.",
    category: "Science",
    classTag: "Class 8",
    subject: "Science",
    readTime: 5,
    publishedAt: "2026-03-05",
    keywords: [
      "combustion and flame class 8 notes",
      "NCERT class 8 science chapter 6",
      "types of combustion class 8",
      "fire triangle class 8",
      "zones of flame class 8 CBSE",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 8 Science Chapter 6 — 'Combustion and Flame' — covers how things burn, what conditions are needed for burning, and why different fuels burn in different ways. This chapter is important for CBSE exams and everyday safety knowledge.",
      },
      {
        type: "h2",
        heading: "What is Combustion?",
        text: "Combustion is a chemical process in which a substance reacts with oxygen to give off heat and light. The substance that burns is called a fuel. Example: burning wood, coal, LPG.",
      },
      {
        type: "h2",
        heading: "Conditions Required for Combustion",
      },
      {
        type: "ul",
        items: [
          "Fuel — a combustible substance (wood, petrol, coal, wax)",
          "Supporter of combustion — oxygen (usually from air)",
          "Ignition temperature — the minimum temperature at which a substance starts burning",
        ],
      },
      {
        type: "h2",
        heading: "The Fire Triangle",
        text: "For a fire to start and keep burning, three things must be present at the same time: fuel, oxygen, and heat (ignition temperature). If you remove any one of these, the fire goes out. This is called the Fire Triangle.",
      },
      {
        type: "tip",
        text: "This is why water puts out fire — it cools the fuel below ignition temperature. CO₂ fire extinguishers cut off oxygen supply. Sand smothers small fires by removing both oxygen and cooling the fuel.",
      },
      {
        type: "h2",
        heading: "Types of Combustion",
      },
      {
        type: "table",
        headers: ["Type", "Description", "Example"],
        rows: [
          {
            cells: [
              "Rapid combustion",
              "Burns quickly with heat and light",
              "Burning LPG, candle",
            ],
          },
          {
            cells: [
              "Spontaneous combustion",
              "Catches fire on its own without external heat",
              "Phosphorus burns in air at room temperature",
            ],
          },
          {
            cells: [
              "Explosive combustion",
              "Burns suddenly with a loud sound and large amount of heat and light",
              "Crackers, dynamite",
            ],
          },
          {
            cells: [
              "Slow combustion",
              "Burning very slowly without flame or light",
              "Rusting of iron, digestion of food in body",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "Zones of a Candle Flame",
      },
      {
        type: "table",
        headers: ["Zone", "Colour", "Description"],
        rows: [
          {
            cells: [
              "Innermost zone (dark zone)",
              "Black/dark blue",
              "Unburnt wax vapours — lowest temperature",
            ],
          },
          {
            cells: [
              "Middle zone (luminous zone)",
              "Yellow/orange",
              "Partial combustion — bright due to glowing carbon particles",
            ],
          },
          {
            cells: [
              "Outer zone (non-luminous zone)",
              "Blue",
              "Complete combustion — hottest part of the flame",
            ],
          },
        ],
      },
      {
        type: "note",
        text: "Goldsmith uses the outermost (blue) zone of the flame to melt gold and silver — because it is the hottest zone where complete combustion takes place.",
      },
      {
        type: "h2",
        heading: "Fuels and Their Calorific Values",
        text: "The amount of heat energy produced by complete combustion of 1 kg of a fuel is called its calorific value (in kJ/kg). Higher calorific value = better fuel.",
      },
      {
        type: "ul",
        items: [
          "Wood: ~17,000 kJ/kg",
          "Charcoal: ~33,000 kJ/kg",
          "Diesel: ~45,000 kJ/kg",
          "Petrol: ~45,000 kJ/kg",
          "CNG: ~50,000 kJ/kg",
          "Hydrogen: ~150,000 kJ/kg (highest known calorific value)",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "What is combustion? Write the conditions necessary for combustion.",
          "What is ignition temperature? Why do we store LPG in sealed cylinders?",
          "Explain the fire triangle with a diagram.",
          "Why is CO₂ used in fire extinguishers?",
          "Describe the three zones of a candle flame. Which zone is the hottest?",
          "What is the difference between rapid combustion and explosive combustion?",
          "Why is hydrogen considered an ideal fuel for the future?",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-10-science-photosynthesis-light-reaction-dark-reaction",
    title:
      "Photosynthesis in Class 10 Science — Light Reaction, Dark Reaction & Notes",
    metaTitle:
      "Photosynthesis Class 10 Notes — Light & Dark Reaction | NCERT Life Processes",
    metaDescription:
      "Easy notes on Photosynthesis for NCERT Class 10 Science (Life Processes). Light reaction, dark reaction, chlorophyll, stomata — with important CBSE exam questions.",
    excerpt:
      "Clear notes on Photosynthesis from NCERT Class 10 Science Chapter 6 — Life Processes. Covers light and dark reactions, raw materials, and important exam questions.",
    category: "Science",
    classTag: "Class 10",
    subject: "Science",
    readTime: 6,
    publishedAt: "2026-03-05",
    keywords: [
      "photosynthesis class 10 notes",
      "light reaction dark reaction class 10",
      "photosynthesis NCERT class 10 science",
      "photosynthesis important questions class 10",
      "life processes photosynthesis CBSE",
    ],
    content: [
      {
        type: "p",
        text: "Photosynthesis is the process by which green plants make their own food using sunlight, carbon dioxide, and water. It is covered in NCERT Class 10 Science Chapter 6 (Life Processes) and is one of the most commonly tested topics in CBSE board exams.",
      },
      {
        type: "h2",
        heading: "Photosynthesis — The Simple Definition",
        text: "Photosynthesis is the process in which plants use sunlight, water, and carbon dioxide to produce glucose (food) and oxygen. It occurs in the chloroplasts of green plant cells.",
      },
      {
        type: "h2",
        heading: "Photosynthesis Equation",
      },
      {
        type: "p",
        text: "6CO₂ + 6H₂O + Light energy (sunlight) → C₆H₁₂O₆ (Glucose) + 6O₂",
      },
      {
        type: "h2",
        heading: "Raw Materials and Products",
      },
      {
        type: "table",
        headers: ["Component", "Role", "Source"],
        rows: [
          {
            cells: [
              "Carbon dioxide (CO₂)",
              "Raw material",
              "Enters through stomata in leaves",
            ],
          },
          {
            cells: [
              "Water (H₂O)",
              "Raw material",
              "Absorbed by roots, transported by xylem",
            ],
          },
          {
            cells: [
              "Sunlight",
              "Energy source",
              "Absorbed by chlorophyll in chloroplasts",
            ],
          },
          {
            cells: [
              "Chlorophyll",
              "Light-absorbing pigment",
              "Present in chloroplasts (green colour)",
            ],
          },
          {
            cells: [
              "Glucose (C₆H₁₂O₆)",
              "Product — stored as food",
              "Produced in the leaf",
            ],
          },
          {
            cells: [
              "Oxygen (O₂)",
              "By-product — released into air",
              "Released through stomata",
            ],
          },
        ],
      },
      {
        type: "h2",
        heading: "Two Stages of Photosynthesis",
      },
      {
        type: "h3",
        heading: "Stage 1 — Light Reaction (Light-Dependent Reaction)",
      },
      {
        type: "ul",
        items: [
          "Occurs in the thylakoid membranes of chloroplasts",
          "Requires direct sunlight",
          "Water molecules are split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂",
          "Oxygen is released as a by-product — this is the source of O₂ in the air we breathe",
          "ATP and NADPH are produced and used in the next stage",
        ],
      },
      {
        type: "h3",
        heading:
          "Stage 2 — Dark Reaction (Calvin Cycle / Light-Independent Reaction)",
      },
      {
        type: "ul",
        items: [
          "Occurs in the stroma of chloroplasts",
          "Does NOT require direct sunlight (but still happens in daytime using ATP and NADPH from light reaction)",
          "CO₂ is fixed (combined with organic molecules) using ATP and NADPH",
          "Glucose (C₆H₁₂O₆) is produced",
        ],
      },
      {
        type: "tip",
        text: "Memory trick: 'Light reaction = Light + Water → Oxygen + ATP'. 'Dark reaction = CO₂ + ATP → Glucose'. The dark reaction is not dark — it just doesn't need light directly.",
      },
      {
        type: "h2",
        heading: "Factors Affecting Photosynthesis",
      },
      {
        type: "ul",
        items: [
          "Light intensity: More light → faster photosynthesis (up to a limit)",
          "CO₂ concentration: More CO₂ → faster photosynthesis",
          "Temperature: Optimum temperature (25–35°C) gives maximum rate",
          "Water availability: Shortage of water slows photosynthesis",
          "Chlorophyll content: More chlorophyll → more light absorbed → faster photosynthesis",
        ],
      },
      {
        type: "h2",
        heading: "Why is Photosynthesis Important?",
      },
      {
        type: "ul",
        items: [
          "It is the primary source of food and energy for almost all life on Earth",
          "It releases oxygen — essential for all aerobic organisms",
          "It removes CO₂ from the atmosphere — helps regulate climate",
          "All fossil fuels (coal, petroleum) are stored solar energy from ancient photosynthesis",
        ],
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Write the equation for photosynthesis. Name all the raw materials.",
          "What role does chlorophyll play in photosynthesis?",
          "How does CO₂ enter the leaf? Draw a labelled diagram of a stomatal pore.",
          "Distinguish between the light reaction and dark reaction of photosynthesis.",
          "Why do plants appear green?",
          "What would happen to photosynthesis if all the stomata in a leaf were blocked?",
          "Explain why leaves are broad and flat in most plants.",
        ],
      },
    ],
  },
  {
    slug: "ncert-class-6-science-chapter-1-food-where-does-it-come-from",
    title:
      "NCERT Class 6 Science Chapter 1: Food — Where Does It Come From? Notes",
    metaTitle:
      "Food Where Does It Come From Class 6 Notes — NCERT Science Ch 1 | CBSE",
    metaDescription:
      "Simple notes for NCERT Class 6 Science Chapter 1 Food Where Does It Come From. Sources of food, herbivores, carnivores, omnivores — easy CBSE prep.",
    excerpt:
      "Easy notes for NCERT Class 6 Science Chapter 1 — Food: Where Does It Come From? Covers sources of food, ingredients, and types of animals based on diet.",
    category: "Science",
    classTag: "Class 6",
    subject: "Science",
    readTime: 4,
    publishedAt: "2026-03-04",
    keywords: [
      "food where does it come from class 6 notes",
      "NCERT class 6 science chapter 1",
      "herbivores carnivores omnivores class 6",
      "sources of food class 6",
    ],
    content: [
      {
        type: "p",
        text: "NCERT Class 6 Science Chapter 1 — 'Food: Where Does It Come From?' — is the very first chapter of middle school science. It introduces students to the concept of food, where it comes from, and how different animals get their food.",
      },
      {
        type: "h2",
        heading: "What Do We Eat?",
        text: "We eat a variety of foods — rice, dal, vegetables, fruits, milk, eggs, fish, and more. All these foods come from two main sources: plants and animals.",
      },
      {
        type: "h2",
        heading: "Sources of Food",
      },
      {
        type: "table",
        headers: ["Food", "Source (Plant/Animal)", "Part Used"],
        rows: [
          { cells: ["Rice", "Plant", "Seeds"] },
          { cells: ["Wheat", "Plant", "Seeds"] },
          { cells: ["Mustard oil", "Plant", "Seeds of mustard plant"] },
          { cells: ["Milk", "Animal", "Cow, buffalo, goat"] },
          { cells: ["Honey", "Animal", "Bees collect from flowers"] },
          { cells: ["Potato", "Plant", "Underground stem (tuber)"] },
          { cells: ["Spinach", "Plant", "Leaves"] },
          { cells: ["Eggs", "Animal", "Hens, ducks"] },
        ],
      },
      {
        type: "h2",
        heading: "Types of Animals Based on Food Habits",
      },
      {
        type: "ul",
        items: [
          "Herbivores: Animals that eat only plants — e.g. cow, horse, deer, rabbit",
          "Carnivores: Animals that eat only other animals — e.g. lion, tiger, eagle, hawk",
          "Omnivores: Animals that eat both plants and animals — e.g. human, bear, crow, dog",
        ],
      },
      {
        type: "tip",
        text: "Easy memory trick: Herb = plant → Herbivores eat plants. Carni = flesh → Carnivores eat flesh. Omni = all → Omnivores eat everything.",
      },
      {
        type: "h2",
        heading: "What are Ingredients?",
        text: "The different items that go into making a food dish are called ingredients. For example, to make dal: dal (lentils), water, oil, onion, tomato, spices are the ingredients.",
      },
      {
        type: "h2",
        heading: "Important Exam Questions",
      },
      {
        type: "ol",
        items: [
          "Name two food items that come from plants and two that come from animals.",
          "What are the two main sources of food?",
          "What do you mean by herbivores, carnivores, and omnivores? Give two examples of each.",
          "From which part of the plant do we get mustard oil?",
          "Where do bees collect honey from?",
          "What are ingredients? Give an example.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [
  "All",
  "Science",
  "Mathematics",
  "Social Science",
  "Study Tips",
];

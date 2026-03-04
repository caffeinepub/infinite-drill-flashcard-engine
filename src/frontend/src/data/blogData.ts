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

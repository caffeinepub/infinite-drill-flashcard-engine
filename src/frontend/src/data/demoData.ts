export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
}

export interface CheatsheetEntry {
  id: number;
  type: "Definition" | "Formula" | "Example" | "Tip";
  icon: string;
  title: string;
  content: string;
}

export interface TopicData {
  id: string;
  board: string;
  className: string;
  subject: string;
  chapter: string;
  microTopic: string;
  questionCount: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  questions: Question[];
  flashcards: Flashcard[];
  cheatsheet: CheatsheetEntry[];
}

// ─── Carbon Compounds ────────────────────────────────────────────────────────

const carbonQuestions: Question[] = [
  {
    id: 1,
    question: "What is the IUPAC name of CH₃-CH₂-OH?",
    options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
    correctIndex: 1,
    explanation:
      "CH₃-CH₂-OH contains 2 carbon atoms with a hydroxyl (-OH) group, making it Ethanol (eth = 2 carbons, -ol suffix for alcohol).",
  },
  {
    id: 2,
    question: "Which functional group is present in carboxylic acids?",
    options: ["-OH", "-CHO", "-COOH", "-CO-"],
    correctIndex: 2,
    explanation:
      "Carboxylic acids are characterized by the -COOH (carboxyl) group, which consists of a carbonyl group (C=O) bonded to a hydroxyl group (-OH).",
  },
  {
    id: 3,
    question:
      "What type of reaction occurs when ethanol reacts with ethanoic acid?",
    options: ["Substitution", "Esterification", "Saponification", "Combustion"],
    correctIndex: 1,
    explanation:
      "When an alcohol reacts with a carboxylic acid in the presence of a catalyst (H₂SO₄), an ester is formed. This reaction is called Esterification.",
  },
  {
    id: 4,
    question:
      "The process of converting soap into glycerol and fatty acid salts is called:",
    options: ["Esterification", "Hydrogenation", "Saponification", "Oxidation"],
    correctIndex: 2,
    explanation:
      "Saponification is the hydrolysis of fats/oils using a strong base (NaOH/KOH) to produce glycerol and fatty acid salts (soap).",
  },
  {
    id: 5,
    question: "Which of the following is a saturated hydrocarbon?",
    options: [
      "Ethylene (C₂H₄)",
      "Acetylene (C₂H₂)",
      "Benzene (C₆H₆)",
      "Ethane (C₂H₆)",
    ],
    correctIndex: 3,
    explanation:
      "Ethane (C₂H₆) is a saturated hydrocarbon (alkane) because all carbon-carbon bonds are single bonds. Ethylene has a double bond, acetylene has a triple bond, and benzene has delocalized bonds.",
  },
  {
    id: 6,
    question: "What is the general formula for alkenes?",
    options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
    correctIndex: 1,
    explanation:
      "Alkenes have the general formula CₙH₂ₙ because they contain one C=C double bond, which reduces the hydrogen count by 2 compared to alkanes (CₙH₂ₙ₊₂).",
  },
  {
    id: 7,
    question:
      "Which property of carbon allows it to form long chains and rings?",
    options: ["Valency", "Catenation", "Isomerism", "Hybridization"],
    correctIndex: 1,
    explanation:
      "Catenation is the unique property of carbon that allows carbon atoms to bond with each other to form long chains, branched chains, and rings — the basis of organic chemistry.",
  },
  {
    id: 8,
    question: "The IUPAC name of CH₃COOH is:",
    options: [
      "Methanoic acid",
      "Ethanoic acid",
      "Propanoic acid",
      "Butanoic acid",
    ],
    correctIndex: 1,
    explanation:
      "CH₃COOH has 2 carbons with a -COOH group. The IUPAC name uses 'eth-' (2 carbons) + '-anoic acid', giving Ethanoic acid (commonly known as acetic acid).",
  },
  {
    id: 9,
    question:
      "Which of the following reactions describes the addition of hydrogen to an unsaturated compound?",
    options: ["Combustion", "Substitution", "Hydrogenation", "Fermentation"],
    correctIndex: 2,
    explanation:
      "Hydrogenation is the addition of H₂ gas to an unsaturated compound (alkene/alkyne) in the presence of a catalyst (Ni, Pt, Pd) to form a saturated compound.",
  },
  {
    id: 10,
    question: "What is formed when ethanol undergoes oxidation?",
    options: ["Ethane", "Ethanoic acid", "Ethene", "Methanol"],
    correctIndex: 1,
    explanation:
      "When ethanol (CH₃CH₂OH) is oxidized (using alkaline KMnO₄ or acidified K₂Cr₂O₇), it is converted to ethanoic acid (CH₃COOH), an example of oxidation in organic chemistry.",
  },
];

const carbonFlashcards: Flashcard[] = [
  {
    id: 1,
    front: "What is Catenation?",
    back: "The unique property of carbon to bond with other carbon atoms forming long chains, branched chains, and rings. This gives rise to millions of organic compounds.",
  },
  {
    id: 2,
    front: "Define a Functional Group",
    back: "An atom or group of atoms in an organic molecule that determines its chemical properties. Examples: -OH (alcohol), -COOH (carboxylic acid), -CHO (aldehyde), -CO- (ketone).",
  },
  {
    id: 3,
    front: "What is Esterification?",
    back: "The reaction between an alcohol and a carboxylic acid (with H₂SO₄ catalyst) to form an ester and water.\n\nExample: CH₃OH + CH₃COOH → CH₃COOCH₃ + H₂O (methyl ethanoate)",
  },
  {
    id: 4,
    front: "Alkane vs Alkene vs Alkyne",
    back: "Alkane: CₙH₂ₙ₊₂ (single bonds, saturated)\nAlkene: CₙH₂ₙ (one double bond)\nAlkyne: CₙH₂ₙ₋₂ (one triple bond, unsaturated)",
  },
  {
    id: 5,
    front: "What is Saponification?",
    back: "Hydrolysis of fats/oils with a strong base (NaOH or KOH) producing glycerol and fatty acid salts (soap). This is how soap is manufactured commercially.",
  },
  {
    id: 6,
    front: "IUPAC Naming: Number of carbons",
    back: "1C = Meth | 2C = Eth | 3C = Prop | 4C = But | 5C = Pent | 6C = Hex\n\nSuffix: -ane (alkane), -ene (alkene), -ol (alcohol), -al (aldehyde), -oic acid (carboxylic acid)",
  },
  {
    id: 7,
    front: "What is Hydrogenation?",
    back: "Addition of hydrogen (H₂) to unsaturated compounds (alkenes/alkynes) using catalysts like Ni, Pt, or Pd at high temperature. Converts unsaturated fats (oils) to saturated fats (vanaspati ghee).",
  },
  {
    id: 8,
    front: "What distinguishes Ethanol from Ethanoic acid?",
    back: "Ethanol (CH₃CH₂OH): alcohol, 2 carbons, -OH group, neutral pH, used in beverages/fuel.\n\nEthanoic acid (CH₃COOH): carboxylic acid, 2 carbons, -COOH group, acidic pH, gives sour taste (vinegar).",
  },
];

const carbonCheatsheet: CheatsheetEntry[] = [
  {
    id: 1,
    type: "Definition",
    icon: "📖",
    title: "Catenation",
    content:
      "Property of carbon to form bonds with other carbon atoms. Unique to carbon due to its small size and tetravalency.",
  },
  {
    id: 2,
    type: "Formula",
    icon: "⚗️",
    title: "Homologous Series Formulas",
    content:
      "Alkanes: CₙH₂ₙ₊₂ | Alkenes: CₙH₂ₙ | Alkynes: CₙH₂ₙ₋₂ | Alcohols: CₙH₂ₙ₊₁OH | Carboxylic Acids: CₙH₂ₙ₊₁COOH",
  },
  {
    id: 3,
    type: "Definition",
    icon: "📖",
    title: "Functional Groups",
    content:
      "-OH (Hydroxyl/Alcohol) | -COOH (Carboxyl/Acid) | -CHO (Aldehyde) | -CO- (Ketone) | -NH₂ (Amine) | C=C (Alkene)",
  },
  {
    id: 4,
    type: "Example",
    icon: "🔬",
    title: "Esterification Reaction",
    content:
      "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O (with conc. H₂SO₄ catalyst). Ethanoic acid + Ethanol → Ethyl ethanoate (a sweet-smelling ester)",
  },
  {
    id: 5,
    type: "Tip",
    icon: "💡",
    title: "IUPAC Naming Mnemonic",
    content:
      "My Elephant Paddy Beats Paddy Hard = Meth(1), Eth(2), Prop(3), But(4), Pent(5), Hex(6). Add suffix: -ane/-ene/-yne/-ol/-al/-oic acid based on functional group.",
  },
  {
    id: 6,
    type: "Formula",
    icon: "⚗️",
    title: "Saponification (Soap Making)",
    content:
      "Fat/Oil + NaOH(aq) → Soap (fatty acid sodium salt) + Glycerol\nExample: (RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃",
  },
];

// ─── Quadratic Equations ─────────────────────────────────────────────────────

const quadraticQuestions: Question[] = [
  {
    id: 11,
    question: "The discriminant of ax² + bx + c = 0 is given by:",
    options: ["b² - 4ac", "b² + 4ac", "-b ± √(b²-4ac)", "2a"],
    correctIndex: 0,
    explanation:
      "The discriminant D = b² - 4ac determines the nature of roots. D > 0: two distinct real roots; D = 0: two equal roots; D < 0: no real roots.",
  },
  {
    id: 12,
    question:
      "If the discriminant of a quadratic equation is zero, the roots are:",
    options: ["Imaginary", "Distinct and real", "Equal and real", "Irrational"],
    correctIndex: 2,
    explanation:
      "When D = b² - 4ac = 0, the quadratic formula gives x = -b/2a (only one value), meaning both roots are equal and real.",
  },
  {
    id: 13,
    question: "The roots of the equation x² - 5x + 6 = 0 are:",
    options: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"],
    correctIndex: 0,
    explanation:
      "Factoring: x² - 5x + 6 = (x-2)(x-3) = 0. Therefore x = 2 or x = 3. Verify: sum of roots = 5 = -b/a ✓, product = 6 = c/a ✓",
  },
  {
    id: 14,
    question:
      "Which method cannot always be used to solve quadratic equations?",
    options: [
      "Quadratic formula",
      "Completing the square",
      "Factorization",
      "Graphical method",
    ],
    correctIndex: 2,
    explanation:
      "Factorization can only be applied when the quadratic can be expressed as a product of linear factors with rational coefficients. The quadratic formula and completing the square always work.",
  },
  {
    id: 15,
    question: "The sum of roots of ax² + bx + c = 0 is:",
    options: ["c/a", "-b/a", "b/a", "-c/a"],
    correctIndex: 1,
    explanation:
      "By Vieta's formulas, for ax² + bx + c = 0 with roots α and β: Sum (α + β) = -b/a, Product (α × β) = c/a.",
  },
  {
    id: 16,
    question: "If one root of x² - 3x + k = 0 is 2, find k:",
    options: ["2", "-2", "10", "-10"],
    correctIndex: 0,
    explanation:
      "Substituting x = 2: 4 - 6 + k = 0, so k = 2. Verify with Vieta's: product of roots = k/1 = 2, so other root = 2/2 = 1. Sum = 1+2 = 3 ✓",
  },
  {
    id: 17,
    question: "The equation 2x² + x - 6 = 0 has roots:",
    options: ["3/2 and -2", "-3/2 and 2", "3 and -4", "6 and -1"],
    correctIndex: 0,
    explanation:
      "Using the quadratic formula: x = (-1 ± √(1+48))/4 = (-1 ± 7)/4. So x = 6/4 = 3/2 or x = -8/4 = -2.",
  },
  {
    id: 18,
    question: "A quadratic equation has no real roots when:",
    options: ["D > 0", "D = 0", "D < 0", "D ≥ 0"],
    correctIndex: 2,
    explanation:
      "When D = b² - 4ac < 0, the square root of a negative number is not real. The equation has two complex conjugate roots (no real solutions).",
  },
  {
    id: 19,
    question: "The quadratic equation whose roots are 3 and -4 is:",
    options: [
      "x² - x - 12 = 0",
      "x² + x - 12 = 0",
      "x² - x + 12 = 0",
      "x² + x + 12 = 0",
    ],
    correctIndex: 1,
    explanation:
      "Sum of roots = 3 + (-4) = -1 = -b/a, so b = 1. Product = 3 × (-4) = -12 = c/a, so c = -12. Equation: x² + x - 12 = 0.",
  },
  {
    id: 20,
    question: "What is the nature of roots of x² + 4x + 5 = 0?",
    options: [
      "Real and distinct",
      "Real and equal",
      "No real roots",
      "One zero root",
    ],
    correctIndex: 2,
    explanation:
      "D = 4² - 4(1)(5) = 16 - 20 = -4 < 0. Since D < 0, the equation has no real roots (roots are complex: -2 ± i).",
  },
];

const quadraticFlashcards: Flashcard[] = [
  {
    id: 9,
    front: "Quadratic Formula",
    back: "x = [-b ± √(b² - 4ac)] / 2a\n\nFor equation ax² + bx + c = 0\nWhere D = b² - 4ac is the discriminant",
  },
  {
    id: 10,
    front: "Nature of Roots from Discriminant",
    back: "D > 0: Two distinct real roots\nD = 0: Two equal real roots (repeated root)\nD < 0: No real roots (complex conjugate roots)",
  },
  {
    id: 11,
    front: "Vieta's Formulas for ax² + bx + c = 0",
    back: "Sum of roots (α + β) = -b/a\nProduct of roots (α × β) = c/a\n\nUseful for forming equations when roots are known.",
  },
  {
    id: 12,
    front: "Completing the Square Method",
    back: "1. Move constant to right: ax² + bx = -c\n2. Divide by a: x² + (b/a)x = -c/a\n3. Add (b/2a)² to both sides\n4. Factor left side as (x + b/2a)²\n5. Solve for x",
  },
  {
    id: 13,
    front: "How to form a quadratic from roots?",
    back: "If roots are α and β:\nx² - (α+β)x + αβ = 0\n\nSubstitute sum and product of given roots.\nExample: roots 2,3 → x² - 5x + 6 = 0",
  },
  {
    id: 14,
    front: "Factorization Method (Split the Middle Term)",
    back: "For x² + bx + c = 0:\nFind two numbers p,q where p+q = b and p×q = c\nRewrite: x² + px + qx + c = 0\nFactor by grouping\n\nExample: x²-5x+6 = (x-2)(x-3) = 0",
  },
  {
    id: 15,
    front: "What is a Quadratic Equation?",
    back: "A polynomial equation of degree 2: ax² + bx + c = 0\nwhere a ≠ 0, a,b,c are real numbers.\n\nIt always has exactly 2 roots (counting multiplicity, possibly complex).",
  },
  {
    id: 16,
    front: "Relationship: Roots and Coefficients",
    back: "For roots α, β of ax² + bx + c = 0:\n• α + β = -b/a\n• αβ = c/a\n• α - β = √D / a (where D = b²-4ac)\n• α² + β² = (α+β)² - 2αβ",
  },
];

const quadraticCheatsheet: CheatsheetEntry[] = [
  {
    id: 7,
    type: "Formula",
    icon: "⚗️",
    title: "Quadratic Formula",
    content:
      "x = [-b ± √(b² - 4ac)] / 2a for equation ax² + bx + c = 0 (a ≠ 0). Discriminant: D = b² - 4ac",
  },
  {
    id: 8,
    type: "Definition",
    icon: "📖",
    title: "Discriminant (D) and Nature of Roots",
    content:
      "D = b² - 4ac\n• D > 0: Real and distinct roots\n• D = 0: Real and equal roots\n• D < 0: No real roots (imaginary)",
  },
  {
    id: 9,
    type: "Formula",
    icon: "⚗️",
    title: "Vieta's Formulas",
    content:
      "For roots α, β of ax² + bx + c = 0:\nSum: α + β = -b/a\nProduct: α × β = c/a\nForm equation: x² - (sum)x + (product) = 0",
  },
  {
    id: 10,
    type: "Tip",
    icon: "💡",
    title: "Choosing the Right Method",
    content:
      "Factorization: when roots are integers/simple fractions\nCompleting square: when a=1 and b is even\nQuadratic formula: always works, use as fallback\nGraphical: for approximate roots",
  },
  {
    id: 11,
    type: "Example",
    icon: "🔬",
    title: "Solving x² - 5x + 6 = 0",
    content:
      "Method: Factorization\nFind p,q: p+q=5, p×q=6 → p=2, q=3\nx²-2x-3x+6 = x(x-2)-3(x-2) = (x-2)(x-3)\nRoots: x=2 or x=3",
  },
  {
    id: 12,
    type: "Definition",
    icon: "📖",
    title: "Standard Form",
    content:
      "ax² + bx + c = 0 where a≠0\na = coefficient of x², b = coefficient of x, c = constant term\nDegree = 2 (highest power of variable)",
  },
];

// ─── French Revolution ────────────────────────────────────────────────────────

const frenchRevolutionQuestions: Question[] = [
  {
    id: 21,
    question: "The French Revolution began in the year:",
    options: ["1776", "1789", "1804", "1815"],
    correctIndex: 1,
    explanation:
      "The French Revolution began in 1789 with the convening of the Estates-General and the storming of the Bastille on July 14, 1789 — now celebrated as Bastille Day.",
  },
  {
    id: 22,
    question: "The slogan of the French Revolution was:",
    options: [
      "Liberty, Equality, Fraternity",
      "God, King, Country",
      "Peace, Land, Bread",
      "Work, Family, Fatherland",
    ],
    correctIndex: 0,
    explanation:
      "'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity) became the national motto of France and the guiding principle of the Revolution.",
  },
  {
    id: 23,
    question: "The Estates-General of France consisted of:",
    options: ["Two estates", "Three estates", "Four estates", "Five estates"],
    correctIndex: 1,
    explanation:
      "French society was divided into Three Estates: First Estate (Clergy), Second Estate (Nobility), Third Estate (Commoners — bourgeoisie, peasants, workers).",
  },
  {
    id: 24,
    question: "The storming of the Bastille symbolized:",
    options: [
      "End of the Revolution",
      "Fall of royal tyranny",
      "Napoleon's rise to power",
      "The Reign of Terror",
    ],
    correctIndex: 1,
    explanation:
      "The Bastille was a royal fortress and prison symbolizing royal despotism. Its storming on July 14, 1789 by Parisian crowds symbolized the fall of royal tyranny and the start of the Revolution.",
  },
  {
    id: 25,
    question:
      "The Declaration of the Rights of Man and of the Citizen was adopted in:",
    options: ["1787", "1789", "1792", "1795"],
    correctIndex: 1,
    explanation:
      "The Declaration of the Rights of Man and of the Citizen was adopted by the National Constituent Assembly on August 26, 1789, proclaiming individual freedoms and equality before the law.",
  },
  {
    id: 26,
    question: "The period known as the 'Reign of Terror' was led by:",
    options: [
      "Louis XVI",
      "Napoleon Bonaparte",
      "Maximilien Robespierre",
      "Marie Antoinette",
    ],
    correctIndex: 2,
    explanation:
      "Robespierre, leading the Committee of Public Safety, orchestrated the Reign of Terror (1793-94) during which thousands perceived as enemies of the Revolution were executed by guillotine.",
  },
  {
    id: 27,
    question: "The social class that mainly drove the French Revolution was:",
    options: ["Clergy", "Nobility", "Bourgeoisie", "Serfs"],
    correctIndex: 2,
    explanation:
      "The bourgeoisie (educated middle class — merchants, lawyers, intellectuals) were the primary drivers of the Revolution. They opposed feudal privileges and demanded political representation and rights.",
  },
  {
    id: 28,
    question: "Napoleon Bonaparte came to power in France through a coup in:",
    options: ["1795", "1799", "1804", "1815"],
    correctIndex: 1,
    explanation:
      "Napoleon seized power through the coup of 18 Brumaire (November 9, 1799), overthrowing the Directory government and establishing himself as First Consul, effectively ending the Revolution.",
  },
  {
    id: 29,
    question: "The immediate cause of the French Revolution was:",
    options: [
      "Seven Years' War",
      "American Revolution",
      "Financial crisis and food shortage",
      "Napoleon's military campaigns",
    ],
    correctIndex: 2,
    explanation:
      "France faced severe financial bankruptcy (partly from supporting the American Revolution) and widespread food shortages causing bread prices to soar. This immediate crisis triggered the 1789 uprising.",
  },
  {
    id: 30,
    question: "The concept of 'popular sovereignty' in the Revolution means:",
    options: [
      "King has supreme power",
      "Church governs society",
      "Power comes from the people",
      "Military rules the state",
    ],
    correctIndex: 2,
    explanation:
      "Popular sovereignty — the idea that political authority derives from the people, not from divine right of kings — was a central principle of the Revolution, fundamentally changing political theory.",
  },
];

const frenchFlashcards: Flashcard[] = [
  {
    id: 17,
    front: "What were the Three Estates of France?",
    back: "First Estate: Clergy (0.5% of population, owned 10% of land, paid no taxes)\nSecond Estate: Nobility (1.5%, tax exemptions, court privileges)\nThird Estate: Everyone else (98%: bourgeoisie, peasants, urban poor — paid all taxes)",
  },
  {
    id: 18,
    front: "Key causes of the French Revolution",
    back: "1. Financial crisis (near bankruptcy, costly wars)\n2. Food shortages & rising bread prices\n3. Enlightenment ideas (Voltaire, Rousseau, Locke)\n4. Social inequality (unfair tax burden on Third Estate)\n5. Weak leadership of Louis XVI\n6. Influence of American Revolution",
  },
  {
    id: 19,
    front: "What was the Bastille and why was it stormed?",
    back: "The Bastille was a medieval fortress/prison in Paris symbolizing royal tyranny. On July 14, 1789, angry Parisians stormed it to seize weapons and free political prisoners. This marked the start of the Revolution.",
  },
  {
    id: 20,
    front: "What was the Reign of Terror (1793-94)?",
    back: "A radical phase led by Robespierre and the Committee of Public Safety. ~17,000 people officially executed (40,000+ total deaths). Targeted 'enemies of the Revolution'. Ended with Robespierre's own execution (Thermidorian Reaction, July 1794).",
  },
  {
    id: 21,
    front: "Enlightenment philosophers who influenced the Revolution",
    back: "• Voltaire: criticized Church and absolute monarchy\n• Rousseau: Social Contract, popular sovereignty\n• Montesquieu: Separation of powers\n• John Locke: Natural rights (life, liberty, property)\n\nTheir ideas spread through salons and pamphlets.",
  },
  {
    id: 22,
    front: "Napoleon Bonaparte's role in the Revolution",
    back: "Rose through Revolutionary wars as a military hero. In 1799, led coup of 18 Brumaire overthrowing the Directory. Became First Consul, then Emperor (1804). Preserved some Revolutionary principles (Napoleonic Code) while ending the Revolution itself.",
  },
  {
    id: 23,
    front: "Declaration of Rights of Man and Citizen (1789)",
    back: "Adopted August 26, 1789. Key principles:\n• All men born free and equal\n• Liberty, property, security, resistance to oppression\n• Sovereignty resides in the nation\n• Freedom of speech and religion\n\nBased on Enlightenment philosophy.",
  },
  {
    id: 24,
    front: "What was the National Assembly?",
    back: "Formed June 1789 when Third Estate representatives broke away from Estates-General. They took the Tennis Court Oath (June 20, 1789), vowing to write a new constitution. Later became the National Constituent Assembly, fundamentally changing France's government.",
  },
];

const frenchCheatsheet: CheatsheetEntry[] = [
  {
    id: 13,
    type: "Definition",
    icon: "📖",
    title: "The Three Estates",
    content:
      "First Estate: Clergy | Second Estate: Nobility | Third Estate: Commoners (97% of population). First two estates had tax exemptions, Third Estate bore all tax burden.",
  },
  {
    id: 14,
    type: "Formula",
    icon: "⚗️",
    title: "Revolution Timeline",
    content:
      "1789: Estates-General → Storming of Bastille → Declaration of Rights\n1792: First French Republic\n1793-94: Reign of Terror (Robespierre)\n1799: Napoleon's coup → Revolution ends",
  },
  {
    id: 15,
    type: "Definition",
    icon: "📖",
    title: "Popular Sovereignty",
    content:
      "Political authority derives from the consent of the people (not divine right of kings). Key concept introduced by Rousseau's Social Contract and central to the Revolution.",
  },
  {
    id: 16,
    type: "Tip",
    icon: "💡",
    title: "Remember: FESIT Causes",
    content:
      "F - Financial crisis (bankruptcy)\nE - Enlightenment ideas\nS - Social inequality (unfair taxes)\nI - Influence of American Revolution\nT - Third Estate's political exclusion",
  },
  {
    id: 17,
    type: "Example",
    icon: "🔬",
    title: "Tennis Court Oath (June 20, 1789)",
    content:
      "Third Estate locked out of Estates-General meeting. Members gathered at a nearby tennis court and swore to remain until a constitution was written. Directly challenged royal authority.",
  },
  {
    id: 18,
    type: "Definition",
    icon: "📖",
    title: "Jacobins vs Girondins",
    content:
      "Jacobins: radical republicans led by Robespierre, believed in centralized government and Terror. Girondins: moderate republicans, favored federalism. Jacobins eliminated Girondins in 1793 during radicalization.",
  },
];

// ─── Topics ───────────────────────────────────────────────────────────────────

export const topicsData: TopicData[] = [
  {
    id: "1",
    board: "CBSE",
    className: "Class 10",
    subject: "Science",
    chapter: "Carbon Compounds",
    microTopic: "IUPAC Naming & Reactions",
    questionCount: 10,
    difficulty: "Medium",
    description:
      "Explore organic chemistry fundamentals including IUPAC naming, functional groups, and key reactions like esterification and saponification.",
    questions: carbonQuestions,
    flashcards: carbonFlashcards,
    cheatsheet: carbonCheatsheet,
  },
  {
    id: "2",
    board: "CBSE",
    className: "Class 10",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    microTopic: "Discriminant & Roots",
    questionCount: 10,
    difficulty: "Medium",
    description:
      "Master quadratic equations using discriminant analysis, Vieta's formulas, and multiple solving methods including factorization and completing the square.",
    questions: quadraticQuestions,
    flashcards: quadraticFlashcards,
    cheatsheet: quadraticCheatsheet,
  },
  {
    id: "3",
    board: "CBSE",
    className: "Class 9",
    subject: "Social Science",
    chapter: "French Revolution",
    microTopic: "Causes & Consequences",
    questionCount: 10,
    difficulty: "Easy",
    description:
      "Understand the causes, key events, and lasting impact of the French Revolution on world history, from the Estates-General to Napoleon's rise.",
    questions: frenchRevolutionQuestions,
    flashcards: frenchFlashcards,
    cheatsheet: frenchCheatsheet,
  },
];

// ─── Leaderboard ─────────────────────────────────────────────────────────────

export interface LeaderboardUser {
  rank: number;
  username: string;
  xp: number;
  level: string;
  streak: number;
  badges: string[];
  isCurrentUser?: boolean;
}

export const leaderboardData: LeaderboardUser[] = [
  {
    rank: 1,
    username: "RohanSharma",
    xp: 1850,
    level: "Champion",
    streak: 14,
    badges: ["🏆 Champion", "🔥 Hot Streak", "⚡ Speed Master"],
  },
  {
    rank: 2,
    username: "PriyaVerma",
    xp: 1720,
    level: "Champion",
    streak: 9,
    badges: ["🏆 Champion", "📚 Scholar"],
  },
  {
    rank: 3,
    username: "AkashPatel",
    xp: 1540,
    level: "Expert",
    streak: 21,
    badges: ["🥉 Expert", "🔥 Unstoppable"],
  },
  {
    rank: 4,
    username: "NehaGupta",
    xp: 1320,
    level: "Expert",
    streak: 7,
    badges: ["🥉 Expert", "💯 Perfect Score"],
  },
  {
    rank: 5,
    username: "You",
    xp: 1180,
    level: "Expert",
    streak: 5,
    badges: ["🥉 Expert", "🌟 Rising Star"],
    isCurrentUser: true,
  },
  {
    rank: 6,
    username: "VikhramSingh",
    xp: 980,
    level: "Scholar",
    streak: 3,
    badges: ["📚 Scholar"],
  },
  {
    rank: 7,
    username: "AishaTiwari",
    xp: 840,
    level: "Scholar",
    streak: 8,
    badges: ["📚 Scholar", "🔥 On Fire"],
  },
  {
    rank: 8,
    username: "KartikJain",
    xp: 720,
    level: "Scholar",
    streak: 2,
    badges: ["📚 Scholar"],
  },
  {
    rank: 9,
    username: "SnehaRao",
    xp: 590,
    level: "Scholar",
    streak: 4,
    badges: ["📚 Scholar", "🎯 Accurate"],
  },
  {
    rank: 10,
    username: "DevMehta",
    xp: 420,
    level: "Beginner",
    streak: 1,
    badges: ["🌱 Beginner"],
  },
];

// ─── XP Level System ──────────────────────────────────────────────────────────

export function getLevel(xp: number): string {
  if (xp >= 600) return "Champion";
  if (xp >= 300) return "Expert";
  if (xp >= 100) return "Scholar";
  return "Beginner";
}

export function getLevelProgress(xp: number): {
  current: number;
  next: number;
  progress: number;
} {
  if (xp >= 600)
    return {
      current: 600,
      next: 1000,
      progress: Math.min(100, ((xp - 600) / 400) * 100),
    };
  if (xp >= 300)
    return { current: 300, next: 600, progress: ((xp - 300) / 300) * 100 };
  if (xp >= 100)
    return { current: 100, next: 300, progress: ((xp - 100) / 200) * 100 };
  return { current: 0, next: 100, progress: (xp / 100) * 100 };
}

export const levelColors: Record<string, string> = {
  Beginner: "text-neon-green",
  Scholar: "text-neon-blue",
  Expert: "text-neon-purple",
  Champion: "text-neon-amber",
};

export const difficultyColors: Record<string, string> = {
  Easy: "bg-neon-green/15 text-neon-green border border-neon-green/30",
  Medium: "bg-neon-amber/15 text-neon-amber border border-neon-amber/30",
  Hard: "bg-neon-red/15 text-neon-red border border-neon-red/30",
};

export const subjectColors: Record<string, string> = {
  Science: "from-neon-green/20 to-neon-blue/10 border-neon-green/30",
  Mathematics: "from-neon-purple/20 to-neon-blue/10 border-neon-purple/30",
  "Social Science": "from-neon-amber/20 to-neon-red/10 border-neon-amber/30",
};

// ─── AI Teacher Responses ──────────────────────────────────────────────────────

export interface AIResponse {
  keywords: string[];
  subject: string;
  answer: string;
}

export const aiResponses: AIResponse[] = [
  {
    keywords: [
      "photosynthesis",
      "chlorophyll",
      "plants make food",
      "light reaction",
      "dark reaction",
    ],
    subject: "Biology",
    answer:
      "**Photosynthesis** is the process by which plants convert sunlight, water (H₂O), and carbon dioxide (CO₂) into glucose (sugar) and oxygen.\n\n📐 **Formula:** 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\n🌱 **Where it happens:** In chloroplasts, specifically using chlorophyll (the green pigment).\n\n**Two stages:**\n1. **Light Reaction** (in thylakoids): Uses sunlight to split water, releasing O₂ and producing ATP + NADPH\n2. **Dark Reaction/Calvin Cycle** (in stroma): Uses ATP to convert CO₂ into glucose\n\nThis is covered in Class 10 Science (Life Processes) and Class 11 Biology!",
  },
  {
    keywords: [
      "newton",
      "newton's law",
      "laws of motion",
      "inertia",
      "force and motion",
      "f=ma",
    ],
    subject: "Physics",
    answer:
      "**Newton's Three Laws of Motion** are fundamental to physics!\n\n⚡ **1st Law (Inertia):** An object stays at rest or in motion unless acted upon by an external force. *Example:* When a bus brakes, you jerk forward — your body continues moving due to inertia.\n\n⚡ **2nd Law:** Force = Mass × Acceleration (F = ma). A heavier object needs more force to accelerate by the same amount.\n\n⚡ **3rd Law:** For every action, there's an equal and opposite reaction. *Example:* A rocket shoots gas backward, gas pushes rocket forward!\n\n📌 **Conservation of Momentum:** When no external force acts, total momentum (p = mv) stays constant.\n\nCovered in Class 9 Science, Chapter 9!",
  },
  {
    keywords: [
      "cell",
      "cell structure",
      "organelle",
      "mitochondria",
      "nucleus",
      "cell unit of life",
    ],
    subject: "Biology",
    answer:
      "**The Cell** is the basic structural and functional unit of all living organisms!\n\n🔬 **Cell Theory:**\n• All living things are made of cells\n• Cells come from pre-existing cells\n• Cell is the basic unit of life\n\n**Prokaryotic vs Eukaryotic:**\n• Prokaryote (bacteria): No membrane-bound nucleus, simpler\n• Eukaryote (plants/animals): True nucleus + organelles\n\n**Key Organelles:**\n• 🧠 **Nucleus** — control center, contains DNA\n• ⚡ **Mitochondria** — 'powerhouse,' produces ATP energy\n• 🌿 **Chloroplast** — photosynthesis (plants only)\n• 📦 **Golgi Apparatus** — packaging and transport\n• 💧 **Lysosome** — 'suicidal bags,' digests waste\n\nSee Class 11 Biology, Chapter 8!",
  },
  {
    keywords: [
      "mitosis",
      "cell division",
      "meiosis",
      "chromosome",
      "cell cycle",
    ],
    subject: "Biology",
    answer:
      "**Cell Division** is how organisms grow and reproduce!\n\n🔄 **Mitosis (for growth):**\n• Produces 2 identical daughter cells\n• Used for growth, repair, and asexual reproduction\n• Stages: Prophase → Metaphase → Anaphase → Telophase (PMAT)\n• DNA amount stays the same (2n → 2n)\n\n🔄 **Meiosis (for reproduction):**\n• Produces 4 genetically diverse cells with half the chromosomes\n• Used for sexual reproduction (makes eggs and sperm)\n• Two rounds of division: Meiosis I (separation of chromosome pairs) and Meiosis II (like mitosis)\n• Chromosome number halved (2n → n)\n\n🧬 **Why important?** Meiosis creates genetic diversity — crucial for evolution!",
  },
  {
    keywords: [
      "quadratic",
      "discriminant",
      "quadratic equation",
      "quadratic formula",
      "roots of equation",
    ],
    subject: "Mathematics",
    answer:
      "**Quadratic Equations** are polynomials of degree 2: **ax² + bx + c = 0**\n\n📐 **Quadratic Formula:**\nx = **[-b ± √(b² - 4ac)] / 2a**\n\n🔍 **Discriminant (D = b² - 4ac):**\n• D > 0: Two distinct real roots\n• D = 0: Two equal real roots (repeated)\n• D < 0: No real roots (complex numbers)\n\n**Vieta's Formulas:**\n• Sum of roots (α + β) = **-b/a**\n• Product of roots (α × β) = **c/a**\n\n**Methods to solve:**\n1. Factorization (split middle term)\n2. Completing the square\n3. Quadratic formula (always works!)\n\n📝 Example: x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x = 2 or x = 3",
  },
  {
    keywords: [
      "french revolution",
      "bastille",
      "revolution france",
      "three estates",
      "reign of terror",
    ],
    subject: "Social Science",
    answer:
      "**The French Revolution (1789-1799)** transformed the world!\n\n📜 **Causes:**\n• Financial bankruptcy of France\n• Social inequality (Third Estate paid all taxes)\n• Enlightenment ideas (Rousseau, Voltaire)\n• Food shortages and bread prices\n\n📅 **Key Events:**\n• 1789: Storming of the Bastille (July 14) — symbol of tyranny's fall\n• 1789: Declaration of Rights of Man\n• 1793-94: Reign of Terror under Robespierre\n• 1799: Napoleon's coup ends the Revolution\n\n⚖️ **Three Estates:**\n• 1st: Clergy (no taxes)\n• 2nd: Nobility (no taxes)\n• 3rd: Everyone else (97% of population, paid ALL taxes!)\n\n💡 **Slogan:** *Liberté, Égalité, Fraternité* (Liberty, Equality, Fraternity)\n\nClass 9 Social Science, Chapter 1!",
  },
  {
    keywords: [
      "acid",
      "base",
      "acid base",
      "ph scale",
      "neutralization",
      "salt",
    ],
    subject: "Chemistry",
    answer:
      "**Acids, Bases, and Salts** — fundamental chemistry!\n\n🧪 **Acids:**\n• Produce H⁺ ions in water\n• pH < 7, sour taste, turn blue litmus red\n• Examples: HCl (hydrochloric), H₂SO₄ (sulfuric), CH₃COOH (vinegar)\n\n🧪 **Bases/Alkalis:**\n• Produce OH⁻ ions in water\n• pH > 7, bitter/slippery, turn red litmus blue\n• Examples: NaOH (caustic soda), Ca(OH)₂ (lime water)\n\n⚗️ **Neutralization:**\nAcid + Base → Salt + Water\nHCl + NaOH → NaCl + H₂O\n\n📊 **pH Scale:** 0-14\n• 0: Strongest acid\n• 7: Neutral (pure water)\n• 14: Strongest base\n\nCovered in Class 7 and Class 10 Science!",
  },
  {
    keywords: [
      "democracy",
      "democratic",
      "parliament",
      "constitution",
      "government",
      "rights",
    ],
    subject: "Social Science",
    answer:
      "**Democracy** is a system where power belongs to the people!\n\n🏛️ **Types of Democracy:**\n• **Direct Democracy:** Citizens vote on every issue directly (ancient Greece)\n• **Representative/Indirect Democracy:** Citizens elect representatives (most modern countries)\n• India is a **representative democracy** with a parliamentary system\n\n📜 **Key Features:**\n• Free and fair elections\n• Rule of law\n• Protection of fundamental rights\n• Independent judiciary\n• Freedom of speech and press\n\n🇮🇳 **India's Democracy:**\n• World's largest democracy\n• Parliamentary system (Lok Sabha + Rajya Sabha)\n• Constitution adopted January 26, 1950\n• Preamble declares India 'Democratic, Sovereign, Socialist, Secular, Republic'\n\nExplored in Class 9 & 10 Social Science (Political Science)!",
  },
  {
    keywords: [
      "atom",
      "atomic structure",
      "proton",
      "neutron",
      "electron",
      "bohr",
      "shell",
    ],
    subject: "Chemistry",
    answer:
      "**Atomic Structure** — the building blocks of everything!\n\n⚛️ **Parts of an Atom:**\n• **Proton:** Positive charge, in nucleus, mass ≈ 1 amu\n• **Neutron:** No charge, in nucleus, mass ≈ 1 amu  \n• **Electron:** Negative charge, in orbits/shells, mass ≈ 0\n\n🔵 **Bohr's Model:**\n• Electrons orbit in fixed energy levels (shells)\n• Shells: K(2), L(8), M(18), N(32)\n• Valence electrons (outermost) determine chemical properties\n\n📊 **Important Numbers:**\n• **Atomic Number (Z)** = number of protons\n• **Mass Number (A)** = protons + neutrons\n• **Isotopes:** Same Z, different A (e.g., C-12 and C-14)\n\nCovered in Class 9 Science Chapter 4!",
  },
  {
    keywords: [
      "linear equation",
      "simultaneous equation",
      "pair of linear",
      "two variable",
    ],
    subject: "Mathematics",
    answer:
      "**Pair of Linear Equations** in two variables!\n\n📐 **Standard Form:** a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0\n\n**3 Methods to Solve:**\n1. **Graphical:** Plot both lines; intersection = solution\n2. **Substitution:** Solve one equation for x, substitute in other\n3. **Elimination:** Multiply to make coefficients equal, add/subtract\n\n🔍 **Types of Solutions:**\n• **Unique solution:** Lines intersect at one point (a₁/a₂ ≠ b₁/b₂)\n• **No solution:** Parallel lines (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)\n• **Infinite solutions:** Same line (a₁/a₂ = b₁/b₂ = c₁/c₂)\n\n💡 **Real-life example:** If 2 pens + 3 notebooks = ₹50 and 3 pens + 2 notebooks = ₹60, find individual prices!\n\nClass 10 Mathematics, Chapter 3!",
  },
  {
    keywords: [
      "magnetic field",
      "magnet",
      "electromagnetism",
      "electromagnet",
      "electric motor",
    ],
    subject: "Physics",
    answer:
      "**Magnetism and Electromagnetism** — fascinating physics!\n\n🧲 **Magnetic Field:**\n• Region around a magnet where it can exert force\n• Field lines go from North to South pole outside the magnet\n• Earth itself is a giant magnet!\n\n⚡ **Electromagnets:**\n• Electricity flowing through a coil creates a magnetic field\n• Strength depends on: current strength, number of turns, iron core\n\n🔄 **Key Applications:**\n• **Electric Motor:** Uses magnetic force to convert electrical energy to mechanical motion\n• **Generator:** Converts mechanical energy to electrical (opposite of motor)\n• **Transformer:** Changes voltage levels using electromagnetic induction\n• **Loudspeakers, MRI machines, cranes**\n\n📚 **Fleming's Rules:**\n• Left Hand Rule → Motor (force direction)\n• Right Hand Rule → Generator (current direction)\n\nClass 10 Science Chapter 13!",
  },
  {
    keywords: [
      "evolution",
      "natural selection",
      "darwin",
      "adaptation",
      "species",
    ],
    subject: "Biology",
    answer:
      "**Evolution** — how life changes over time!\n\n🌍 **Darwin's Theory of Natural Selection:**\n1. Organisms vary in their traits\n2. Traits can be inherited\n3. More offspring are born than can survive (competition)\n4. Organisms with advantageous traits survive better ('survival of the fittest')\n5. Beneficial traits accumulate over generations → new species\n\n🦕 **Evidence for Evolution:**\n• **Fossil record:** Preserved remains show gradual change\n• **Homologous organs:** Similar structures in different species (human arm, whale flipper, bat wing)\n• **Vestigial organs:** Reduced organs with no current function (human tailbone)\n• **DNA similarities** between related species\n\n🦋 **Famous Examples:**\n• Darwin's finches: Different beak shapes for different food sources\n• Peppered moths: Color change during industrial revolution\n\nClass 10 Science Chapter 9!",
  },
  {
    keywords: [
      "heredity",
      "genetics",
      "mendel",
      "gene",
      "chromosome",
      "dominant",
      "recessive",
    ],
    subject: "Biology",
    answer:
      "**Heredity and Genetics** — how traits are passed on!\n\n🧬 **Mendel's Laws:**\n• **Law of Dominance:** In a cross, dominant trait masks recessive trait\n• **Law of Segregation:** Allele pairs separate during gamete formation\n• **Law of Independent Assortment:** Genes for different traits assort independently\n\n📊 **Key Terms:**\n• **Gene:** Segment of DNA that codes for a trait\n• **Allele:** Different versions of the same gene\n• **Dominant (T):** Expressed even with one copy\n• **Recessive (t):** Only expressed with two copies (tt)\n• **Genotype:** Genetic makeup (TT, Tt, tt)\n• **Phenotype:** Physical appearance (Tall/Short)\n\n🔬 **Punnett Square:** Used to predict offspring ratios!\nCross Tt × Tt → 25% TT : 50% Tt : 25% tt\n\nClass 10 Science Chapter 9 + Class 12 Biology!",
  },
  {
    keywords: [
      "respiratory system",
      "breathing",
      "lungs",
      "oxygen",
      "carbon dioxide",
      "alveoli",
    ],
    subject: "Biology",
    answer:
      "**The Respiratory System** — how we breathe!\n\n💨 **Pathway of Air:**\nNose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → **Alveoli**\n\n🫁 **Alveoli (Air sacs):**\n• Tiny balloon-like sacs in the lungs\n• Very thin walls (one cell thick) for easy gas exchange\n• 300 million in each lung — huge surface area!\n• O₂ diffuses into blood; CO₂ diffuses out\n\n⚗️ **Gas Exchange:**\n• Blood entering lungs: high CO₂, low O₂\n• Blood leaving lungs: high O₂, low CO₂\n\n🔄 **Types of Respiration:**\n• **Aerobic:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP (efficient!)\n• **Anaerobic:** Glucose → Lactic acid + 2 ATP (in muscles during exercise)\n\nClass 10 Science Chapter 6 (Life Processes)!",
  },
  {
    keywords: [
      "periodic table",
      "elements",
      "period",
      "group",
      "valence electron",
      "atomic number",
    ],
    subject: "Chemistry",
    answer:
      "**The Periodic Table** — chemistry's master organizer!\n\n📊 **Organization:**\n• **Periods (rows):** 7 horizontal rows; same number of electron shells\n• **Groups (columns):** 18 vertical columns; same number of valence electrons\n• Elements arranged in order of increasing atomic number\n\n🔑 **Key Groups:**\n• **Group 1 (Alkali Metals):** Li, Na, K — very reactive, 1 valence electron\n• **Group 17 (Halogens):** F, Cl, Br — highly reactive non-metals\n• **Group 18 (Noble Gases):** He, Ne, Ar — inert, complete outer shells\n• **Transition Metals:** Iron, copper, gold — in middle\n\n📈 **Periodic Trends (across period, left to right):**\n• Atomic size decreases\n• Ionization energy increases\n• Electronegativity increases\n\nDeveloped by Dmitri Mendeleev (1869)! Class 10 Science Chapter 5!",
  },
  {
    keywords: [
      "trigonometry",
      "sin",
      "cos",
      "tan",
      "angle",
      "pythagoras",
      "sine cosine",
    ],
    subject: "Mathematics",
    answer:
      "**Trigonometry** — the mathematics of triangles and angles!\n\n📐 **SOH-CAH-TOA (remember this!):**\n• **sin θ** = Opposite/Hypotenuse\n• **cos θ** = Adjacent/Hypotenuse\n• **tan θ** = Opposite/Adjacent\n\n🔢 **Important Values:**\n| θ | 0° | 30° | 45° | 60° | 90° |\n|---|-----|------|------|------|-----|\n| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |\n| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |\n| tan | 0 | 1/√3 | 1 | √3 | ∞ |\n\n🔑 **Key Identities:**\n• sin²θ + cos²θ = 1\n• 1 + tan²θ = sec²θ\n• 1 + cot²θ = cosec²θ\n\nClass 10 Mathematics Chapter 8!",
  },
  {
    keywords: [
      "carbon",
      "carbon compound",
      "organic chemistry",
      "hydrocarbon",
      "catenation",
    ],
    subject: "Chemistry",
    answer:
      "**Carbon Compounds** — the basis of organic chemistry!\n\n⚛️ **Why Carbon is Special:**\n• **Catenation:** Can bond with other carbon atoms forming chains, rings, branches\n• **Tetravalency:** Forms 4 bonds (can bond with H, O, N, Cl, etc.)\n• Result: Millions of organic compounds!\n\n🧪 **Homologous Series:**\n• **Alkanes:** CₙH₂ₙ₊₂ (single bonds — CH₄, C₂H₆, C₃H₈)\n• **Alkenes:** CₙH₂ₙ (one double bond — C₂H₄, C₃H₆)\n• **Alkynes:** CₙH₂ₙ₋₂ (one triple bond — C₂H₂)\n\n🔬 **Functional Groups:**\n• -OH: Alcohol (Ethanol)\n• -COOH: Carboxylic acid (Acetic acid/Vinegar)\n• -CHO: Aldehyde\n\n⚗️ **IUPAC Naming:**\n1C=Meth, 2C=Eth, 3C=Prop, 4C=But, 5C=Pent\n\nClass 10 Science Chapter 4!",
  },
  {
    keywords: [
      "light",
      "reflection",
      "refraction",
      "lens",
      "mirror",
      "optics",
      "speed of light",
    ],
    subject: "Physics",
    answer:
      "**Light, Reflection & Refraction** — the physics of vision!\n\n💡 **Laws of Reflection:**\n• Angle of incidence (i) = Angle of reflection (r)\n• Incident ray, normal, and reflected ray are in the same plane\n\n🔭 **Mirrors:**\n• **Concave:** Converging; used in torches, satellite dishes, solar cookers\n• **Convex:** Diverging; used in rear-view mirrors (wide field of view)\n• **Mirror formula:** 1/f = 1/v + 1/u\n\n🌊 **Refraction:**\n• Light bends when moving between media (different speeds)\n• **Snell's Law:** n₁ sin θ₁ = n₂ sin θ₂\n• **Refractive index (n)** = speed of light in vacuum / speed in medium\n\n👁️ **Eye Defects:**\n• **Myopia** (near-sighted): Corrected with CONCAVE lens\n• **Hypermetropia** (far-sighted): Corrected with CONVEX lens\n\nClass 10 Science Chapter 10!",
  },
  {
    keywords: [
      "ecosystem",
      "food chain",
      "food web",
      "trophic level",
      "biodiversity",
      "ecology",
    ],
    subject: "Biology",
    answer:
      "**Ecosystems and Ecology** — how nature is interconnected!\n\n🌿 **Ecosystem Components:**\n• **Producers:** Plants (make food through photosynthesis)\n• **Primary Consumers:** Herbivores (eat plants: rabbits, deer)\n• **Secondary Consumers:** Eat primary consumers (frogs, small fish)\n• **Tertiary Consumers:** Top predators (eagles, tigers)\n• **Decomposers:** Break down dead matter (bacteria, fungi)\n\n🔗 **Food Chain Example:**\nGrass → Grasshopper → Frog → Snake → Eagle\n\n⚡ **10% Rule:** Only 10% of energy transfers to next trophic level\n\n🌍 **Biodiversity:**\n• Number of species in an area\n• **Hotspots:** Areas with high biodiversity (India has 4!)\n• **Threats:** Habitat destruction, climate change, pollution\n\n♻️ **Biogeochemical Cycles:** Carbon, nitrogen, oxygen, water cycles maintain balance\n\nClass 10 & 12 Biology!",
  },
  {
    keywords: [
      "nationalism",
      "nation",
      "colonialism",
      "independence",
      "freedom movement",
    ],
    subject: "Social Science",
    answer:
      "**Nationalism and Independence Movements**!\n\n🌍 **What is Nationalism?**\nThe belief that people sharing common identity (language, culture, history) should have their own self-governing nation-state.\n\n🇮🇳 **India's Freedom Movement:**\n• 1857: First War of Independence\n• 1885: Indian National Congress founded\n• 1919: Rowlatt Act → Jallianwala Bagh massacre\n• 1920-22: Non-Cooperation Movement (Gandhi)\n• 1930: Dandi March (Salt Satyagraha)\n• 1942: Quit India Movement\n• **1947: Independence!**\n\n🌐 **Nationalism in Europe:**\n• 1830s-1870s: German and Italian unification\n• Bismarck's 'blood and iron' policy for Germany\n• Garibaldi and Cavour unified Italy\n\n💡 **Key Thinkers:** Rousseau (popular sovereignty), Mazzini (Italian nationalism), Tilak, Gandhi, Nehru (Indian nationalism)\n\nClass 10 Social Science Chapter 1!",
  },
  {
    keywords: [
      "water cycle",
      "hydrological cycle",
      "evaporation water",
      "precipitation",
      "rain",
    ],
    subject: "Science",
    answer:
      "**The Water Cycle (Hydrological Cycle)** — Earth's endless water journey!\n\n💧 **Steps of the Water Cycle:**\n1. **Evaporation:** Sun heats water bodies → water vapor rises\n2. **Transpiration:** Plants release water vapor through leaves\n3. **Condensation:** Water vapor cools at high altitudes → forms clouds (water droplets)\n4. **Precipitation:** Water falls as rain, snow, hail, or sleet\n5. **Collection:** Water collects in rivers, lakes, groundwater\n6. Cycle begins again!\n\n🌊 **Importance:**\n• Distributes freshwater across Earth\n• Regulates temperature\n• Maintains all life on Earth\n• ~97% of Earth's water is in oceans (salty)\n• Only ~3% is freshwater!\n\n🌡️ **Fun Fact:** The water you drink may have been inside a dinosaur millions of years ago!\n\nCovered in Class 6-8 Science!",
  },
  {
    keywords: [
      "reproduction",
      "sexual reproduction",
      "asexual reproduction",
      "fertilization",
    ],
    subject: "Biology",
    answer:
      "**Reproduction** — how living things multiply!\n\n🔬 **Asexual Reproduction (one parent):**\n• **Binary Fission:** Amoeba, bacteria split in two\n• **Budding:** Hydra, yeast form buds that separate\n• **Spore Formation:** Fungi, ferns produce spores\n• **Vegetative Propagation:** Plants from stems/roots/leaves (potato, rose cuttings)\n• No genetic variation!\n\n🌸 **Sexual Reproduction (two parents):**\n• Requires male (sperm/pollen) and female (egg/ovule) gametes\n• **Fertilization:** fusion of gametes\n• Creates genetic diversity!\n\n🌺 **Flowering Plants:**\n• Pollination (transfer of pollen)\n• **Double Fertilization** — unique to flowering plants\n• One sperm + egg → embryo; other sperm + polar nuclei → endosperm\n\n👶 **Human Reproduction:**\nFertilization → Zygote → Embryo → Fetus → Baby (9 months gestation)\n\nClass 10 Science Chapter 8 + Class 12 Biology!",
  },
  {
    keywords: [
      "electricity",
      "current",
      "voltage",
      "resistance",
      "ohm",
      "circuit",
      "electric",
    ],
    subject: "Physics",
    answer:
      "**Electricity** — the foundation of modern technology!\n\n⚡ **Ohm's Law:**\n**V = IR** (Voltage = Current × Resistance)\n• V = Voltage in Volts (V)\n• I = Current in Amperes (A)\n• R = Resistance in Ohms (Ω)\n\n🔋 **Key Concepts:**\n• **Current (I):** Flow of electric charge (electrons)\n• **Voltage (V):** Electric pressure driving current\n• **Resistance (R):** Opposition to current flow\n\n🔌 **Circuits:**\n• **Series:** Resistors in sequence; same current, voltages add (Rtotal = R₁ + R₂)\n• **Parallel:** Resistors side by side; same voltage, currents add (1/Rtotal = 1/R₁ + 1/R₂)\n\n💡 **Power = V × I = I²R = V²/R** (in Watts)\n\n**Kilowatt-hour (kWh):** Unit of electrical energy used in billing\n1 kWh = 1000 W used for 1 hour\n\nClass 10 Science Chapter 12!",
  },
  {
    keywords: [
      "climate change",
      "global warming",
      "greenhouse effect",
      "carbon dioxide",
      "ozone",
    ],
    subject: "Science",
    answer:
      "**Climate Change and Environmental Issues** — a critical topic!\n\n🌡️ **Greenhouse Effect:**\n• Greenhouse gases (CO₂, CH₄, N₂O, water vapor) trap heat in atmosphere\n• Natural greenhouse effect keeps Earth warm enough for life\n• **Enhanced greenhouse effect** from human activities is causing global warming\n\n🏭 **Causes of Climate Change:**\n• Burning fossil fuels (coal, oil, gas) → CO₂ emissions\n• Deforestation → less CO₂ absorbed\n• Agriculture → CH₄ from cattle, rice paddies\n• Industrial processes\n\n🌊 **Effects:**\n• Rising temperatures and sea levels\n• Melting glaciers and ice caps\n• Extreme weather events\n• Threat to biodiversity\n\n🍃 **Ozone Depletion:**\n• Ozone layer (O₃) protects Earth from harmful UV radiation\n• CFCs (from old refrigerants) destroy ozone → 'ozone hole'\n\nClass 8 & 10 Science!",
  },
  {
    keywords: [
      "harappan",
      "indus valley",
      "mohenjo daro",
      "ancient india",
      "civilization",
    ],
    subject: "Social Science",
    answer:
      "**The Harappan/Indus Valley Civilisation** (2600-1900 BCE)!\n\n🏛️ **Key Facts:**\n• One of the world's FIRST urban civilisations\n• Extended over 1.5 million km² (Pakistan + northwest India)\n• Contemporary with ancient Egypt and Mesopotamia!\n\n🏙️ **Urban Planning (Advanced!):**\n• Grid-pattern streets (planned cities!)\n• Covered drainage systems\n• Standardized baked brick buildings\n• Great Bath at Mohenjo-daro (ritual cleansing?)\n• Separate citadel (upper town) and lower town\n\n💼 **Economy:**\n• Agriculture: wheat, barley, cotton\n• Crafts: pottery, beads, metalwork\n• Long-distance trade with Mesopotamia (seals found there!)\n\n🔍 **Mystery:**\n• Harappan script is STILL undeciphered!\n• Decline around 1900 BCE — climate change? River shifts?\n\nClass 12 History Chapter 1!",
  },
  {
    keywords: [
      "probability",
      "chance",
      "sample space",
      "event",
      "random experiment",
    ],
    subject: "Mathematics",
    answer:
      "**Probability** — the mathematics of chance!\n\n🎲 **Basic Formula:**\nP(Event) = Favorable outcomes / Total outcomes\n\n📊 **Key Terms:**\n• **Random Experiment:** Outcome cannot be predicted with certainty (tossing a coin)\n• **Sample Space (S):** Set of all possible outcomes\n• **Event:** A subset of the sample space\n\n🎯 **Important Rules:**\n• 0 ≤ P(E) ≤ 1 (probability is always between 0 and 1)\n• P(Impossible event) = 0\n• P(Sure event) = 1\n• P(E) + P(not E) = 1\n\n🎪 **Examples:**\n• P(getting head in coin toss) = 1/2\n• P(getting 6 on die) = 1/6\n• P(getting even number on die) = 3/6 = 1/2\n\n🃏 **Cards (52-card deck):**\n• 4 suits: Hearts ♥ Diamonds ♦ Clubs ♣ Spades ♠\n• 13 cards each suit: A, 2-10, J, Q, K\n\nClass 10 Mathematics Chapter 15!",
  },
  {
    keywords: [
      "digestive",
      "digestion",
      "stomach",
      "intestine",
      "enzyme",
      "nutrition human",
    ],
    subject: "Biology",
    answer:
      "**Human Digestive System** — turning food into fuel!\n\n🍎 **Journey of Food:**\n1. **Mouth:** Teeth chew; saliva (amylase enzyme) starts starch digestion\n2. **Esophagus:** Food moves down by peristalsis (muscular waves)\n3. **Stomach:** HCl creates acidic environment; pepsin digests proteins; churning mixes food\n4. **Small Intestine:** Main digestion site!\n   • Pancreatic juice: amylase, lipase, proteases\n   • Bile (from liver): emulsifies fats\n   • Intestinal enzymes complete digestion\n   • **Villi** absorb nutrients into blood\n5. **Large Intestine:** Absorbs water; forms feces\n6. **Anus:** Egestion\n\n⚗️ **Digestive Enzymes:**\n• Amylase: Starch → Glucose\n• Pepsin/Protease: Protein → Amino acids\n• Lipase: Fat → Fatty acids + Glycerol\n\nClass 10 Science (Life Processes)!",
  },
];

// Find a response based on user question
export function findAIResponse(question: string): AIResponse | null {
  const questionLower = question.toLowerCase();

  for (const response of aiResponses) {
    for (const keyword of response.keywords) {
      if (questionLower.includes(keyword.toLowerCase())) {
        return response;
      }
    }
  }

  return null;
}

export const fallbackResponse =
  "That's a great question! 🤔 This topic is covered in your NCERT textbook. Try searching for it in the **NCERT Browse** section above, or explore related topics in our Quiz and Flashcard sections. If you need detailed help, ask your teacher for more guidance.\n\nTip: Try asking about specific topics like *'photosynthesis'*, *'Newton's laws'*, *'quadratic equations'*, *'French Revolution'*, or *'cell structure'*!";

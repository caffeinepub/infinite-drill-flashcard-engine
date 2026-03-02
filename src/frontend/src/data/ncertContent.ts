// ─── NCERT Content Data ────────────────────────────────────────────────────────

export interface KeyConcept {
  title: string;
  description: string;
}

export interface ImportantTerm {
  term: string;
  definition: string;
}

export interface NCERTChapter {
  id: string;
  number: number;
  name: string;
  subject: string;
  classNum: number;
  explanation: string[];
  keyConcepts: KeyConcept[];
  importantTerms: ImportantTerm[];
  videoKeyword?: string;
}

export interface NCERTSubject {
  name: string;
  icon: string;
  chapters: NCERTChapter[];
}

export interface NCERTClass {
  classNum: number;
  subjects: NCERTSubject[];
}

// ─── Class 1 ──────────────────────────────────────────────────────────────────

const class1: NCERTClass = {
  classNum: 1,
  subjects: [
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "1-math-1",
          number: 1,
          name: "Shapes and Space",
          subject: "Mathematics",
          classNum: 1,
          explanation: [
            "This chapter introduces young learners to the world of shapes and spatial understanding. Children learn to identify common 2D shapes like circles, squares, triangles, and rectangles in everyday objects around them.",
            "Students explore the concepts of near and far, inside and outside, above and below through playful activities. These spatial vocabulary words help children describe the position of objects in relation to each other.",
            "Hands-on activities with blocks, toys, and real-world objects help children distinguish between flat (2D) and solid (3D) shapes. This lays the foundation for geometry in higher classes.",
          ],
          keyConcepts: [
            {
              title: "2D Shapes",
              description: "Flat shapes: circle, square, triangle, rectangle",
            },
            {
              title: "3D Shapes",
              description: "Solid objects: sphere, cube, cylinder, cone",
            },
            {
              title: "Spatial Relationships",
              description: "Near/far, inside/outside, above/below",
            },
            {
              title: "Comparing Shapes",
              description: "Identifying shapes in real-world objects",
            },
          ],
          importantTerms: [
            {
              term: "Circle",
              definition: "A round flat shape with no corners",
            },
            {
              term: "Square",
              definition: "A shape with 4 equal sides and 4 corners",
            },
            {
              term: "Triangle",
              definition: "A shape with 3 sides and 3 corners",
            },
          ],
          videoKeyword: "fractions",
        },
        {
          id: "1-math-2",
          number: 2,
          name: "Numbers from One to Nine",
          subject: "Mathematics",
          classNum: 1,
          explanation: [
            "This foundational chapter teaches children to count, read, and write numbers from 1 to 9. Using colorful pictures and counting objects, children develop number sense and one-to-one correspondence.",
            "Students learn to compare groups of objects to understand which group has more, fewer, or the same number. This comparative thinking is essential for developing mathematical reasoning.",
            "Number patterns and sequences are introduced through activities like filling missing numbers. Children begin to see that numbers follow a predictable order, which is the basis of all arithmetic.",
          ],
          keyConcepts: [
            { title: "Counting", description: "Counting objects from 1 to 9" },
            {
              title: "Number Writing",
              description: "Writing numerals 1-9 correctly",
            },
            {
              title: "Comparison",
              description: "More, fewer, and equal groups",
            },
            { title: "Ordering", description: "Arranging numbers in sequence" },
          ],
          importantTerms: [
            {
              term: "Numeral",
              definition: "The written symbol for a number (1, 2, 3...)",
            },
            {
              term: "Counting",
              definition: "Saying numbers in order to find how many",
            },
            {
              term: "Sequence",
              definition: "Numbers arranged in a specific order",
            },
          ],
        },
      ],
    },
    {
      name: "English",
      icon: "📖",
      chapters: [
        {
          id: "1-eng-1",
          number: 1,
          name: "A Happy Child",
          subject: "English",
          classNum: 1,
          explanation: [
            "This opening chapter uses a beautiful poem to introduce children to English reading and the joy of language. The poem expresses the happiness of a child surrounded by nature — trees, rivers, and open skies.",
            "Children learn to recognize letters and simple words through the poem. Reading poetry aloud helps develop phonemic awareness, rhythm, and the musicality of English language.",
            "The chapter encourages children to talk about what makes them happy, building vocabulary around emotions and the natural world. This connects language learning to personal experience.",
          ],
          keyConcepts: [
            {
              title: "Poetry Reading",
              description: "Reading poems with rhythm and expression",
            },
            {
              title: "Letter Recognition",
              description: "Identifying capital and small letters",
            },
            {
              title: "Vocabulary",
              description: "Learning new words about nature and feelings",
            },
            {
              title: "Oral Expression",
              description: "Talking about personal experiences",
            },
          ],
          importantTerms: [
            {
              term: "Poem",
              definition: "A piece of writing with rhythm and sometimes rhyme",
            },
            { term: "Rhyme", definition: "Words that end with the same sound" },
            {
              term: "Nature",
              definition: "The world of plants, animals, and outdoors",
            },
          ],
        },
      ],
    },
    {
      name: "EVS",
      icon: "🌿",
      chapters: [
        {
          id: "1-evs-1",
          number: 1,
          name: "Me and My Family",
          subject: "EVS",
          classNum: 1,
          explanation: [
            "Children are introduced to the concept of family — the people who live with them, care for them, and love them. They learn different family members' names: mother, father, grandparents, siblings, and relatives.",
            "The chapter helps children understand roles within a family. Each family member has special duties — parents go to work, children go to school, grandparents share wisdom and stories. This builds awareness of social roles.",
            "Students learn about different types of families — nuclear families (parents and children) and joint families (multiple generations). Respecting and caring for all family members is a core value taught here.",
          ],
          keyConcepts: [
            {
              title: "Family Members",
              description: "Names and relationships of family members",
            },
            {
              title: "Family Roles",
              description: "What each person does in the family",
            },
            {
              title: "Types of Families",
              description: "Nuclear and joint families",
            },
            {
              title: "Family Values",
              description: "Love, care, and respect in families",
            },
          ],
          importantTerms: [
            {
              term: "Nuclear Family",
              definition: "A family with parents and their children",
            },
            {
              term: "Joint Family",
              definition:
                "A family with grandparents, parents, and children together",
            },
            {
              term: "Relatives",
              definition: "Family members like aunts, uncles, and cousins",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 3 ──────────────────────────────────────────────────────────────────

const class3: NCERTClass = {
  classNum: 3,
  subjects: [
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "3-math-1",
          number: 1,
          name: "Where to Look From",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "This creative chapter challenges students to view objects from different perspectives — top view, side view, and front view. By looking at a table, chair, or box from different directions, children realize the same object can look very different.",
            "Students draw what they see when they look at objects from above (bird's eye view) versus from the side. This activity builds spatial visualization skills essential for geometry and later, engineering and architecture.",
            "The chapter connects to real-world applications like maps (top view of areas) and building plans. Understanding perspective is also fundamental to art and design.",
          ],
          keyConcepts: [
            {
              title: "Top View",
              description: "What an object looks like from above",
            },
            {
              title: "Side View",
              description: "What an object looks like from the side",
            },
            {
              title: "Front View",
              description: "What an object looks like from the front",
            },
            {
              title: "Perspective",
              description: "How our viewpoint changes what we see",
            },
          ],
          importantTerms: [
            {
              term: "Bird's Eye View",
              definition: "Looking at something from directly above",
            },
            {
              term: "Perspective",
              definition: "The way objects look from a particular position",
            },
            {
              term: "Symmetry",
              definition: "When both halves of an object look the same",
            },
          ],
        },
      ],
    },
    {
      name: "EVS",
      icon: "🌿",
      chapters: [
        {
          id: "3-evs-1",
          number: 1,
          name: "Poonam's Day Out",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Through the story of Poonam visiting a pond, students observe living things in their natural habitat. The chapter introduces the concept of habitats — where plants and animals naturally live and thrive.",
            "Students learn about the interdependence of living things. At a pond, fish eat insects, frogs eat insects too, birds eat frogs — forming a simple food chain. Understanding these connections builds ecological awareness.",
            "The chapter encourages children to be observant of nature around them. They learn that even a small pond is home to a rich community of life forms, from microscopic organisms to water birds.",
          ],
          keyConcepts: [
            {
              title: "Habitat",
              description: "The natural home of a plant or animal",
            },
            {
              title: "Food Chain",
              description: "The sequence of who eats whom in nature",
            },
            {
              title: "Pond Ecosystem",
              description: "Community of life in and around a pond",
            },
            {
              title: "Interdependence",
              description: "How living things depend on each other",
            },
          ],
          importantTerms: [
            {
              term: "Habitat",
              definition: "The place where an organism naturally lives",
            },
            {
              term: "Food Chain",
              definition:
                "A series showing how energy passes from one organism to another",
            },
            {
              term: "Ecosystem",
              definition: "A community of living things and their environment",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 5 ──────────────────────────────────────────────────────────────────

const class5: NCERTClass = {
  classNum: 5,
  subjects: [
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "5-math-4",
          number: 4,
          name: "Parts and Wholes (Fractions)",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Fractions represent equal parts of a whole. This chapter builds on the concept that when we divide something into equal parts, each part is a fraction. For example, cutting a chapati into 4 equal pieces means each piece is 1/4.",
            "Students learn about proper fractions (less than 1), improper fractions (greater than 1), and mixed numbers. They also practice equivalent fractions — different fractions that represent the same value, like 1/2 = 2/4 = 3/6.",
            "Real-life applications make fractions tangible — sharing food equally, measuring ingredients in cooking, reading a thermometer. Students learn to add and subtract like fractions as preparation for rational number arithmetic in higher classes.",
          ],
          keyConcepts: [
            {
              title: "Proper Fractions",
              description: "Fractions where numerator is less than denominator",
            },
            {
              title: "Equivalent Fractions",
              description: "Different fractions with same value (1/2 = 2/4)",
            },
            {
              title: "Comparing Fractions",
              description: "Which fraction is bigger or smaller",
            },
            {
              title: "Adding Like Fractions",
              description: "Adding fractions with the same denominator",
            },
          ],
          importantTerms: [
            {
              term: "Numerator",
              definition:
                "The top number in a fraction — how many parts we have",
            },
            {
              term: "Denominator",
              definition: "The bottom number — total equal parts",
            },
            {
              term: "Equivalent Fractions",
              definition: "Fractions that represent the same value",
            },
          ],
          videoKeyword: "fractions",
        },
      ],
    },
    {
      name: "EVS",
      icon: "🌿",
      chapters: [
        {
          id: "5-evs-1",
          number: 1,
          name: "Super Senses",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Animals have remarkable senses that often far exceed human capabilities. Dogs can detect smells 10,000 times better than humans. Bats use echolocation to navigate and hunt in complete darkness. Snakes sense heat through special pits on their faces.",
            "This chapter explores how different animals use their senses to survive — finding food, detecting predators, communicating, and navigating. Each animal's senses are adapted to its way of life and environment.",
            "Students connect animal super senses to human-made technology. Sonar systems in submarines are inspired by bat echolocation. Infrared cameras are inspired by snakes' heat-sensing ability. Nature has been the greatest engineer.",
          ],
          keyConcepts: [
            {
              title: "Echolocation",
              description: "Using sound echoes to navigate (bats, dolphins)",
            },
            {
              title: "Sensory Adaptation",
              description: "How senses are suited to an animal's lifestyle",
            },
            {
              title: "Migration",
              description: "Seasonal movement guided by Earth's magnetic field",
            },
            {
              title: "Biomimicry",
              description: "Human technology inspired by nature",
            },
          ],
          importantTerms: [
            {
              term: "Echolocation",
              definition: "Navigation using reflected sound waves",
            },
            {
              term: "Sensory Organ",
              definition: "Body part that detects environmental information",
            },
            {
              term: "Adaptation",
              definition:
                "A feature that helps an organism survive in its environment",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 6 Science ──────────────────────────────────────────────────────────

const class6: NCERTClass = {
  classNum: 6,
  subjects: [
    {
      name: "Science",
      icon: "🔬",
      chapters: [
        {
          id: "6-sci-1",
          number: 1,
          name: "Food: Where Does It Come From?",
          subject: "Science",
          classNum: 6,
          explanation: [
            "All food ultimately comes from either plants or animals. Plants are producers — they make their own food using sunlight through photosynthesis. Animals are consumers — they eat plants or other animals for energy. Understanding this distinction is fundamental to biology and ecology.",
            "Plant-based foods include fruits (mango, apple, banana), vegetables (spinach, potato, carrot), grains (wheat, rice, maize), pulses (dal, chickpeas), and edible seeds and nuts. Different parts of plants are eaten — roots (carrot), stems (sugarcane), leaves (spinach), flowers (cauliflower), fruits (tomato), and seeds (wheat).",
            "Animal-based foods include milk and dairy products, eggs, fish, meat, and honey. Many animals are herbivores (eat only plants), carnivores (eat only animals), or omnivores (eat both). Humans are omnivores, and understanding food sources helps us make nutritious dietary choices.",
          ],
          keyConcepts: [
            {
              title: "Plant Sources",
              description:
                "Roots, stems, leaves, flowers, fruits, and seeds as food",
            },
            {
              title: "Animal Sources",
              description: "Milk, eggs, meat, fish, and honey",
            },
            {
              title: "Herbivores & Carnivores",
              description: "Animals classified by their diet",
            },
            {
              title: "Ingredients",
              description: "Components that make up a dish or food item",
            },
          ],
          importantTerms: [
            {
              term: "Producer",
              definition: "An organism that makes its own food (plants)",
            },
            {
              term: "Consumer",
              definition: "An organism that eats other organisms for food",
            },
            {
              term: "Herbivore",
              definition: "An animal that eats only plants",
            },
            {
              term: "Omnivore",
              definition: "An animal that eats both plants and animals",
            },
          ],
        },
        {
          id: "6-sci-2",
          number: 2,
          name: "Components of Food",
          subject: "Science",
          classNum: 6,
          explanation: [
            "Food is made up of several nutrients — carbohydrates, proteins, fats, vitamins, and minerals — along with water and dietary fiber. Each nutrient has specific roles in keeping our body healthy. Carbohydrates and fats provide energy; proteins build and repair body tissues; vitamins and minerals regulate body processes.",
            "Carbohydrates are the body's primary energy source, found in cereals, bread, rice, potatoes, and sugar. Proteins, found in eggs, pulses, meat, milk, and nuts, are essential for growth and repair — they are called 'body-building foods.' Fats, found in oils, butter, nuts, and meat, provide concentrated energy and help absorb fat-soluble vitamins.",
            "Vitamins are needed in small amounts but are vital for health. Vitamin C (found in citrus fruits) prevents scurvy; Vitamin D (from sunlight and fish) strengthens bones; Vitamin A (from carrots, leafy vegetables) is essential for vision. Minerals like calcium (for bones), iron (for blood), and iodine (for thyroid) are also crucial. A balanced diet includes all nutrients in proper proportions.",
          ],
          keyConcepts: [
            {
              title: "Carbohydrates",
              description:
                "Energy-giving nutrients found in cereals, sugar, potatoes",
            },
            {
              title: "Proteins",
              description:
                "Body-building nutrients in pulses, eggs, milk, meat",
            },
            {
              title: "Vitamins and Minerals",
              description: "Protective nutrients needed in small amounts",
            },
            {
              title: "Balanced Diet",
              description: "Including all nutrients in correct proportions",
            },
            {
              title: "Deficiency Diseases",
              description: "Diseases caused by lack of specific nutrients",
            },
          ],
          importantTerms: [
            {
              term: "Nutrient",
              definition:
                "A substance in food that provides nourishment to the body",
            },
            {
              term: "Balanced Diet",
              definition:
                "A diet containing all essential nutrients in right amounts",
            },
            {
              term: "Deficiency Disease",
              definition:
                "An illness caused by the lack of a specific nutrient",
            },
            {
              term: "Roughage",
              definition: "Dietary fiber that aids digestion",
            },
          ],
        },
        {
          id: "6-sci-3",
          number: 3,
          name: "Fibre to Fabric",
          subject: "Science",
          classNum: 6,
          explanation: [
            "Fabrics are made from fibres, which can come from natural or synthetic sources. Natural fibres come from plants and animals. Cotton comes from the cotton plant's fluffy white boll; jute comes from the stem of the jute plant; silk comes from silkworm cocoons; and wool comes from the fleece of sheep.",
            "The process of making fabric involves several steps: ginning (separating cotton from seeds), spinning (making yarn from fibres), weaving or knitting (interlocking yarn threads to make fabric), and dyeing/finishing. Understanding these processes connects science with textile technology.",
            "Different fibres have different properties. Cotton is soft, absorbent, and comfortable in hot weather. Jute is coarse and strong, used for making sacks and ropes. Silk is smooth and lustrous. Wool is warm because it traps air. These properties determine the uses of each fabric.",
          ],
          keyConcepts: [
            {
              title: "Natural Fibres",
              description: "Cotton, jute, wool, silk from nature",
            },
            {
              title: "Spinning",
              description: "Twisting fibres together to make yarn",
            },
            {
              title: "Weaving",
              description: "Interlacing threads at right angles to make fabric",
            },
            {
              title: "Properties of Fibres",
              description: "How each fibre's characteristics determine its use",
            },
          ],
          importantTerms: [
            {
              term: "Fibre",
              definition: "A thin thread-like material used to make fabric",
            },
            {
              term: "Yarn",
              definition: "Spun fibres twisted together into a long strand",
            },
            {
              term: "Ginning",
              definition: "Process of separating cotton fibres from seeds",
            },
            {
              term: "Weaving",
              definition: "Making fabric by interlacing two sets of threads",
            },
          ],
        },
        {
          id: "6-sci-4",
          number: 4,
          name: "Sorting Materials into Groups",
          subject: "Science",
          classNum: 6,
          explanation: [
            "Everything around us is made of materials, and we can classify materials based on their observable properties. Properties include appearance (shiny or dull), hardness (hard or soft), solubility (dissolves in water or not), transparency (can light pass through), and whether they float or sink.",
            "Materials can be grouped as: metals (iron, copper — hard, shiny, conduct electricity), non-metals (wood, plastic — poor conductors), and materials with specific properties like transparency (glass, water) or magnetism (iron, nickel).",
            "Sorting and classifying materials is a fundamental scientific skill. It helps scientists and engineers choose the right material for each purpose — using transparent glass for windows, non-conducting rubber for wire coatings, and hard metal for tools.",
          ],
          keyConcepts: [
            {
              title: "Physical Properties",
              description: "Observable characteristics of materials",
            },
            {
              title: "Transparency",
              description:
                "Transparent (glass), translucent (oiled paper), opaque (wood)",
            },
            {
              title: "Solubility",
              description:
                "Whether a substance dissolves in water (salt) or not (sand)",
            },
            {
              title: "Conductors and Insulators",
              description: "Materials that allow or block heat/electricity",
            },
          ],
          importantTerms: [
            {
              term: "Transparent",
              definition:
                "A material that allows light to pass through clearly",
            },
            {
              term: "Translucent",
              definition: "Allows some light through but not clearly",
            },
            {
              term: "Opaque",
              definition: "Does not allow light to pass through",
            },
            {
              term: "Soluble",
              definition: "Capable of being dissolved in a liquid",
            },
          ],
        },
        {
          id: "6-sci-5",
          number: 5,
          name: "Separation of Mixtures",
          subject: "Science",
          classNum: 6,
          explanation: [
            "A mixture is a combination of two or more substances where each retains its own properties. Unlike a compound, a mixture can be separated by physical methods without any chemical change. We encounter mixtures daily — saltwater, muddy water, air, soil.",
            "Different separation methods are used based on the properties of the components: Filtration separates insoluble solids from liquids (muddy water through filter paper); Evaporation separates dissolved solids from liquids (salt from saltwater); Sedimentation lets heavier particles settle; Decantation pours off the clear liquid after sedimentation; Magnetic separation uses magnets to separate iron filings from sand.",
            "Hand-picking, threshing, and winnowing are traditional methods used in farming to separate grain from chaff. These everyday examples show that separation techniques are practical skills with real-world applications in food processing, water purification, and industrial manufacturing.",
          ],
          keyConcepts: [
            {
              title: "Filtration",
              description:
                "Separating insoluble solid from liquid through filter paper",
            },
            {
              title: "Evaporation",
              description: "Heating to separate dissolved solid from liquid",
            },
            {
              title: "Sedimentation and Decantation",
              description: "Settling and pouring off clear liquid",
            },
            {
              title: "Winnowing",
              description:
                "Using wind to separate lighter chaff from heavier grain",
            },
          ],
          importantTerms: [
            {
              term: "Mixture",
              definition:
                "Combination of substances each retaining their own properties",
            },
            {
              term: "Filtration",
              definition:
                "Separating suspended solids from a liquid using a filter",
            },
            {
              term: "Evaporation",
              definition:
                "Conversion of liquid to vapor to separate dissolved solids",
            },
            {
              term: "Sedimentation",
              definition: "Process of heavier particles settling to the bottom",
            },
          ],
        },
      ],
    },
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "6-math-1",
          number: 1,
          name: "Knowing Our Numbers",
          subject: "Mathematics",
          classNum: 6,
          explanation: [
            "This chapter extends students' understanding of numbers to large numbers — thousands, lakhs, and crores. The Indian number system groups digits differently from the International system, and students learn both systems for reading and writing large numbers.",
            "Comparing and ordering large numbers develops number sense. Students learn to estimate quantities — an essential skill for mental math and real-world problem-solving. For example, estimating the cost of a school trip or how many students are in a large school.",
            "Roman numerals, used on clocks and in some historical contexts, are also covered. Understanding their system — where subtractive notation (IV = 4, IX = 9) is used — helps students appreciate different number systems.",
          ],
          keyConcepts: [
            {
              title: "Indian Number System",
              description: "Ones, Tens, Hundreds, Thousands, Lakhs, Crores",
            },
            {
              title: "International Number System",
              description: "Ones, Tens, Hundreds, Thousands, Millions",
            },
            {
              title: "Estimation",
              description: "Finding an approximate value",
            },
            {
              title: "Roman Numerals",
              description: "I, V, X, L, C, D, M system",
            },
          ],
          importantTerms: [
            { term: "Lakh", definition: "100,000 in the Indian number system" },
            {
              term: "Crore",
              definition: "10,000,000 (10 million) in the Indian system",
            },
            {
              term: "Estimation",
              definition: "A rough calculation of value or quantity",
            },
          ],
        },
      ],
    },
    {
      name: "Social Science",
      icon: "🗺️",
      chapters: [
        {
          id: "6-sst-1",
          number: 1,
          name: "What, Where, How and When?",
          subject: "Social Science",
          classNum: 6,
          explanation: [
            "History is the study of the past — what happened, where it happened, how it happened, and when. This introductory chapter explains how historians find out about the past through various sources: manuscripts (handwritten texts), inscriptions (writing on stone/metal), coins, monuments, and archaeological remains.",
            "The subcontinent of India has an extremely rich and long history. Different regions were known by different names — the land around the Himalayas was called Bharata, while the name India comes from the Indus river. Understanding these geographical-historical connections helps contextualize ancient civilizations.",
            "Dates in history use BCE (Before Common Era) and CE (Common Era). The further back in time, the larger the BCE number. Understanding this timeline helps students place events in historical context and understand how civilizations developed and influenced each other.",
          ],
          keyConcepts: [
            {
              title: "Historical Sources",
              description:
                "Manuscripts, inscriptions, coins, monuments, excavations",
            },
            {
              title: "BCE and CE",
              description: "Before Common Era and Common Era dating systems",
            },
            {
              title: "Archaeological Evidence",
              description: "Physical objects giving information about the past",
            },
            {
              title: "Geographical Context",
              description: "How geography shaped historical events",
            },
          ],
          importantTerms: [
            {
              term: "Manuscript",
              definition:
                "A document written by hand, often on palm leaves or bark",
            },
            {
              term: "Inscription",
              definition: "Writing carved on hard surfaces like stone or metal",
            },
            {
              term: "Archaeology",
              definition:
                "The study of past human life by examining physical remains",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 9 ──────────────────────────────────────────────────────────────────

const class9: NCERTClass = {
  classNum: 9,
  subjects: [
    {
      name: "Science",
      icon: "🔬",
      chapters: [
        {
          id: "9-sci-1",
          number: 1,
          name: "Matter in Our Surroundings",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Matter is anything that has mass and occupies space. Everything around us — air, water, stone, metals — is matter. Matter exists in three states: solid, liquid, and gas. In solids, particles are tightly packed with strong intermolecular forces; in liquids, particles can flow but remain close; in gases, particles are far apart with weak forces.",
            "Evaporation is the process of a liquid converting to vapor at temperatures below its boiling point. It occurs from the surface of the liquid and causes cooling — the principle behind sweating. Sublimation is the direct conversion from solid to gas (dry ice, camphor, iodine). Factors affecting evaporation include temperature, surface area, wind speed, and humidity.",
            "The change of state is caused by changing temperature or pressure. Adding energy (heating) breaks intermolecular forces and causes melting (solid to liquid) or vaporization (liquid to gas). The temperature at which a solid melts is its melting point; where a liquid boils is its boiling point. Latent heat is the energy absorbed during a change of state at constant temperature.",
          ],
          keyConcepts: [
            {
              title: "States of Matter",
              description:
                "Solid, liquid, and gas and their particle arrangement",
            },
            {
              title: "Change of State",
              description:
                "Melting, freezing, evaporation, condensation, sublimation",
            },
            {
              title: "Evaporation",
              description:
                "Liquid to gas conversion at surface, causes cooling",
            },
            {
              title: "Latent Heat",
              description:
                "Heat absorbed at constant temperature during change of state",
            },
          ],
          importantTerms: [
            {
              term: "Sublimation",
              definition:
                "Direct conversion of solid to gas without passing through liquid state",
            },
            {
              term: "Latent Heat",
              definition:
                "Heat absorbed or released during change of state at constant temperature",
            },
            {
              term: "Evaporation",
              definition:
                "Conversion of liquid to vapor below boiling point at the surface",
            },
          ],
        },
        {
          id: "9-sci-2",
          number: 2,
          name: "Is Matter Around Us Pure?",
          subject: "Science",
          classNum: 9,
          explanation: [
            "A pure substance has a definite composition and specific properties. Elements (like iron, gold, oxygen) and compounds (like water, salt, sugar) are pure substances. A mixture contains two or more substances mixed together in any proportion, each retaining its own properties. Mixtures can be homogeneous (uniform throughout, like saltwater) or heterogeneous (non-uniform, like soil).",
            "Solutions are homogeneous mixtures. The solvent dissolves the solute — in saltwater, water is the solvent and salt is the solute. The concentration of a solution is the amount of solute in a given amount of solution. A saturated solution holds the maximum amount of solute possible at a given temperature.",
            "Colloids and suspensions are two other types of mixtures. In a colloid (milk, fog), particles are 1-1000 nm in size and show the Tyndall Effect (scattering light). In a suspension (muddy water), particles are larger and settle on standing. These distinctions are important in chemistry, medicine, and food science.",
          ],
          keyConcepts: [
            {
              title: "Pure Substances vs Mixtures",
              description: "Elements and compounds vs mixtures",
            },
            {
              title: "Types of Mixtures",
              description: "Homogeneous vs heterogeneous mixtures",
            },
            {
              title: "Solutions",
              description: "Solute, solvent, and concentration",
            },
            {
              title: "Tyndall Effect",
              description: "Scattering of light by colloidal particles",
            },
          ],
          importantTerms: [
            {
              term: "Colloid",
              definition:
                "A mixture with particles 1-1000 nm that don't settle",
            },
            {
              term: "Tyndall Effect",
              definition: "Scattering of a light beam by colloidal particles",
            },
            {
              term: "Suspension",
              definition:
                "A heterogeneous mixture with large particles that settle",
            },
            {
              term: "Saturated Solution",
              definition:
                "A solution containing maximum amount of dissolved solute",
            },
          ],
          videoKeyword: "chemistry",
        },
        {
          id: "9-sci-9",
          number: 9,
          name: "Force and Laws of Motion",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Newton's three laws of motion describe how forces affect the movement of objects. First Law (Law of Inertia): An object remains at rest or in uniform motion unless acted upon by an external unbalanced force. This is why passengers jerk forward when a bus stops suddenly — their bodies continue moving forward due to inertia.",
            "Second Law (F = ma): The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass. A larger force causes greater acceleration; a more massive object accelerates less with the same force. This law gave us the equation Force = mass × acceleration.",
            "Third Law: For every action, there is an equal and opposite reaction. When you push on a wall, the wall pushes back on you with equal force. Rockets are propelled forward because gases are ejected backward. Conservation of Momentum — the total momentum of a system remains constant if no external force acts — is derived from the third law.",
          ],
          keyConcepts: [
            {
              title: "Inertia",
              description:
                "Tendency of an object to resist change in its state of motion",
            },
            {
              title: "Newton's Second Law (F=ma)",
              description: "Force equals mass times acceleration",
            },
            {
              title: "Action-Reaction",
              description:
                "Every action force has an equal and opposite reaction force",
            },
            {
              title: "Conservation of Momentum",
              description:
                "Total momentum constant in the absence of external forces",
            },
          ],
          importantTerms: [
            {
              term: "Inertia",
              definition:
                "The resistance of an object to change in its state of rest or motion",
            },
            {
              term: "Momentum",
              definition: "Product of mass and velocity (p = mv)",
            },
            {
              term: "Force",
              definition:
                "A push or pull that changes the state of motion of an object",
            },
          ],
          videoKeyword: "newton",
        },
      ],
    },
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "9-math-1",
          number: 1,
          name: "Number Systems",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "This chapter introduces students to the full system of real numbers. Natural numbers (1, 2, 3...) are used for counting; Whole numbers include 0; Integers include negative numbers; Rational numbers (p/q form) include all fractions; Irrational numbers cannot be expressed as fractions (√2, π).",
            "Irrational numbers are non-terminating and non-repeating decimals. The ancient Greeks discovered that √2 cannot be written as a fraction, which was a revolutionary mathematical insight. The real number line includes both rational and irrational numbers.",
            "Laws of exponents for real numbers include: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, and (aᵐ)ⁿ = aᵐⁿ. Students also learn to rationalize denominators containing irrational numbers, a technique useful throughout higher mathematics.",
          ],
          keyConcepts: [
            {
              title: "Number Hierarchy",
              description: "Natural ⊂ Whole ⊂ Integer ⊂ Rational ⊂ Real",
            },
            {
              title: "Irrational Numbers",
              description: "Non-terminating, non-repeating decimals like √2, π",
            },
            {
              title: "Real Number Line",
              description:
                "Every real number corresponds to a point on the line",
            },
            {
              title: "Laws of Exponents",
              description: "Rules for operations with powers",
            },
          ],
          importantTerms: [
            {
              term: "Rational Number",
              definition:
                "A number that can be written as p/q where p,q are integers and q≠0",
            },
            {
              term: "Irrational Number",
              definition:
                "A number that cannot be expressed as a fraction (√2, π)",
            },
            {
              term: "Real Numbers",
              definition: "All rational and irrational numbers together",
            },
          ],
        },
      ],
    },
    {
      name: "Social Science",
      icon: "🗺️",
      chapters: [
        {
          id: "9-sst-1",
          number: 1,
          name: "The French Revolution",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "The French Revolution (1789-1799) was one of history's most transformative events. France was a monarchy under Louis XVI where society was divided into three estates: the Clergy (First Estate), the Nobility (Second Estate), and everyone else (Third Estate). The Third Estate paid all the taxes while the privileged classes were exempt, creating deep resentment.",
            "The revolution began in 1789 driven by financial crisis (France was bankrupt from wars), Enlightenment ideas (Voltaire, Rousseau, Montesquieu promoted liberty and equality), food shortages, and social inequality. The storming of the Bastille on July 14, 1789 became the symbol of revolution against tyranny.",
            "The Revolution's ideals — Liberty, Equality, Fraternity — fundamentally changed the world. The Declaration of Rights of Man proclaimed universal human rights. However, the radical Reign of Terror (1793-94) under Robespierre led to thousands of executions. Napoleon eventually emerged from the chaos to build a new French Empire, carrying revolutionary ideas across Europe.",
          ],
          keyConcepts: [
            {
              title: "Three Estates",
              description: "Clergy, Nobility, and Commoners (Third Estate)",
            },
            {
              title: "Causes of Revolution",
              description:
                "Financial crisis, social inequality, Enlightenment ideas",
            },
            {
              title: "Reign of Terror",
              description: "Radical phase 1793-94 with mass executions",
            },
            {
              title: "Impact on Europe",
              description: "Spread of democratic ideals across the continent",
            },
          ],
          importantTerms: [
            {
              term: "Bastille",
              definition:
                "A Paris prison stormed on July 14, 1789, symbolizing tyranny's fall",
            },
            {
              term: "Jacobins",
              definition:
                "Radical political club led by Robespierre during the Revolution",
            },
            {
              term: "Directory",
              definition: "The government (1795-1799) before Napoleon's coup",
            },
          ],
          videoKeyword: "french-revolution",
        },
      ],
    },
    {
      name: "English",
      icon: "📖",
      chapters: [
        {
          id: "9-eng-1",
          number: 1,
          name: "The Fun They Had",
          subject: "English",
          classNum: 9,
          explanation: [
            "Isaac Asimov's story imagines a future in 2157 where children learn at home through mechanical teachers on computer screens. Margie, the protagonist, discovers an old printed book and imagines what school was like when children gathered together to learn.",
            "The story explores the themes of technology, education, and human connection. While the mechanical teachers are efficient, Margie envies the fun children had in traditional schools — learning with friends, sharing textbooks, and having teachers who understood emotions.",
            "The story uses contrast between the technological future and the romanticized past to make readers appreciate human relationships in learning. It raises important questions about technology replacing human teachers and whether efficiency always equals better education.",
          ],
          keyConcepts: [
            {
              title: "Science Fiction",
              description:
                "Stories set in imaginary futures exploring technology's impact",
            },
            {
              title: "Theme",
              description: "Technology vs human connection in education",
            },
            {
              title: "Contrast",
              description:
                "Comparing two different situations to highlight differences",
            },
            {
              title: "Dramatic Irony",
              description: "Reader knows something the character doesn't",
            },
          ],
          importantTerms: [
            {
              term: "Science Fiction",
              definition:
                "A genre exploring imagined future technologies and societies",
            },
            {
              term: "Theme",
              definition: "The central idea or message of a literary work",
            },
            {
              term: "Mechanical Teacher",
              definition: "Asimov's imagined computer-based teaching machine",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 10 ─────────────────────────────────────────────────────────────────

const class10: NCERTClass = {
  classNum: 10,
  subjects: [
    {
      name: "Science",
      icon: "🔬",
      chapters: [
        {
          id: "10-sci-1",
          number: 1,
          name: "Chemical Reactions and Equations",
          subject: "Science",
          classNum: 10,
          explanation: [
            "A chemical reaction involves the rearrangement of atoms to form new substances. Chemical equations represent reactions using symbols and formulas. A balanced equation follows the Law of Conservation of Mass — the total mass of reactants equals the total mass of products. Balancing involves adjusting coefficients without changing chemical formulas.",
            "Types of chemical reactions: Combination reactions (A + B → AB, e.g., 2H₂ + O₂ → 2H₂O); Decomposition reactions (AB → A + B, e.g., 2H₂O → 2H₂ + O₂); Displacement reactions (A + BC → AC + B, e.g., Fe + CuSO₄ → FeSO₄ + Cu, iron displaces copper); Double displacement (AB + CD → AD + CB); Oxidation-Reduction (redox) reactions.",
            "Oxidation is the loss of electrons (or gain of oxygen/loss of hydrogen); Reduction is the gain of electrons (or loss of oxygen/gain of hydrogen). They always occur together — when one substance is oxidized, another is reduced. Corrosion (rusting of iron) and rancidity (spoiling of food) are common redox reactions with real-world importance.",
          ],
          keyConcepts: [
            {
              title: "Balancing Equations",
              description: "Equal number of atoms on both sides of equation",
            },
            {
              title: "Types of Reactions",
              description: "Combination, decomposition, displacement, redox",
            },
            {
              title: "Oxidation and Reduction",
              description: "Loss and gain of electrons respectively",
            },
            {
              title: "Corrosion and Rancidity",
              description: "Harmful oxidation reactions in daily life",
            },
          ],
          importantTerms: [
            {
              term: "Reactants",
              definition:
                "Substances that undergo change in a chemical reaction (left side)",
            },
            {
              term: "Products",
              definition:
                "New substances formed in a chemical reaction (right side)",
            },
            {
              term: "Oxidation",
              definition: "Loss of electrons or gain of oxygen",
            },
            {
              term: "Reduction",
              definition: "Gain of electrons or loss of oxygen",
            },
          ],
          videoKeyword: "chemistry",
        },
        {
          id: "10-sci-6",
          number: 6,
          name: "Life Processes",
          subject: "Science",
          classNum: 10,
          explanation: [
            "Life processes are the basic activities performed by all living organisms to maintain life. These include nutrition, respiration, transportation, and excretion. Nutrition provides energy and raw materials; Respiration releases energy from food; Transportation moves substances within the organism; Excretion removes metabolic waste.",
            "Nutrition can be autotrophic (self-feeding, like plants using photosynthesis: CO₂ + H₂O + light → glucose + O₂) or heterotrophic (consuming other organisms). In humans, digestion breaks down food into simpler molecules: proteins → amino acids, carbohydrates → glucose, fats → fatty acids and glycerol.",
            "Respiration (aerobic: with oxygen, producing CO₂, water, and ATP energy; anaerobic: without oxygen, producing lactic acid or ethanol) releases energy from glucose. The human respiratory system includes lungs with alveoli for gas exchange. Circulation (heart, blood, blood vessels) transports oxygen, nutrients, and waste. Excretion removes urea (kidneys), CO₂ (lungs), and sweat (skin).",
          ],
          keyConcepts: [
            {
              title: "Photosynthesis",
              description:
                "CO₂ + H₂O + sunlight → glucose + O₂ in chloroplasts",
            },
            {
              title: "Respiration Types",
              description:
                "Aerobic (with O₂, more energy) and Anaerobic (without O₂)",
            },
            {
              title: "Human Digestion",
              description: "Mouth → esophagus → stomach → intestines → colon",
            },
            {
              title: "Blood Circulation",
              description:
                "Heart pumps blood to lungs (pulmonary) and body (systemic)",
            },
          ],
          importantTerms: [
            {
              term: "Photosynthesis",
              definition:
                "Process by which plants make food using sunlight, CO₂, and water",
            },
            {
              term: "Aerobic Respiration",
              definition:
                "Respiration using oxygen, producing CO₂, water, and energy",
            },
            {
              term: "Excretion",
              definition: "Removal of metabolic waste products from the body",
            },
            {
              term: "Nephron",
              definition: "Functional unit of the kidney that filters blood",
            },
          ],
          videoKeyword: "photosynthesis",
        },
        {
          id: "10-sci-10",
          number: 10,
          name: "Light – Reflection and Refraction",
          subject: "Science",
          classNum: 10,
          explanation: [
            "Light travels in straight lines and bounces off surfaces through reflection. The Laws of Reflection state that the angle of incidence equals the angle of reflection, and both rays and the normal lie in the same plane. Mirrors (plane, concave, convex) are classified by their reflecting surface. Concave mirrors converge light rays and are used in torches and solar cookers; convex mirrors diverge light and are used as rear-view mirrors.",
            "Mirror formula: 1/f = 1/v + 1/u, where f = focal length, v = image distance, u = object distance. Magnification m = -v/u. Real images are formed when rays actually converge (on the same side as reflected rays); virtual images appear behind the mirror. The focal length of a concave mirror is half its radius of curvature (f = R/2).",
            "Refraction is the bending of light as it passes from one medium to another (due to change in speed). Snell's Law: n₁ sin θ₁ = n₂ sin θ₂. The refractive index (n) measures how much a medium bends light. Lenses (convex/converging and concave/diverging) work by refraction. The human eye uses a convex lens. Common defects — myopia (short-sightedness) corrected with concave lens, hypermetropia (far-sightedness) with convex lens.",
          ],
          keyConcepts: [
            {
              title: "Laws of Reflection",
              description: "Angle of incidence = angle of reflection",
            },
            {
              title: "Mirror Formula",
              description: "1/f = 1/v + 1/u with sign convention",
            },
            {
              title: "Refraction and Snell's Law",
              description: "Bending of light at medium boundaries",
            },
            {
              title: "Lens Defects and Correction",
              description: "Myopia, hypermetropia, and bifocals",
            },
          ],
          importantTerms: [
            {
              term: "Focal Length",
              definition:
                "Distance from mirror/lens center to focal point where parallel rays converge",
            },
            {
              term: "Refractive Index",
              definition:
                "Ratio of speed of light in vacuum to speed in a medium",
            },
            {
              term: "Myopia",
              definition:
                "Nearsightedness — distant objects appear blurry, corrected by concave lens",
            },
            {
              term: "Hypermetropia",
              definition:
                "Farsightedness — nearby objects blurry, corrected by convex lens",
            },
          ],
          videoKeyword: "light",
        },
      ],
    },
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "10-math-3",
          number: 3,
          name: "Pair of Linear Equations",
          subject: "Mathematics",
          classNum: 10,
          explanation: [
            "A pair of linear equations in two variables (a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0) can be solved graphically or algebraically. Graphically, each equation represents a straight line, and the solution is where the lines intersect. If lines intersect at one point: unique solution (consistent). If lines are parallel: no solution (inconsistent). If lines overlap (same line): infinitely many solutions (dependent).",
            "Algebraic methods: Substitution method (solve one variable, substitute in other equation); Elimination method (multiply equations to make coefficients equal, add/subtract to eliminate one variable); Cross-multiplication method (direct formula giving x and y).",
            "Conditions: For a unique solution, a₁/a₂ ≠ b₁/b₂. For no solution, a₁/a₂ = b₁/b₂ ≠ c₁/c₂. For infinite solutions, a₁/a₂ = b₁/b₂ = c₁/c₂. Real-life problems often translate into pairs of linear equations — like finding the price of two items from two purchase scenarios.",
          ],
          keyConcepts: [
            {
              title: "Graphical Solution",
              description:
                "Point of intersection of two lines gives the solution",
            },
            {
              title: "Substitution Method",
              description:
                "Express one variable in terms of other and substitute",
            },
            {
              title: "Elimination Method",
              description: "Make coefficients equal and add/subtract equations",
            },
            {
              title: "Consistency Conditions",
              description: "Conditions for unique, no, or infinite solutions",
            },
          ],
          importantTerms: [
            {
              term: "Consistent System",
              definition: "A system with at least one solution",
            },
            {
              term: "Inconsistent System",
              definition: "A system with no solution (parallel lines)",
            },
            {
              term: "Dependent System",
              definition: "A system with infinitely many solutions (same line)",
            },
          ],
        },
        {
          id: "10-math-4",
          number: 4,
          name: "Quadratic Equations",
          subject: "Mathematics",
          classNum: 10,
          explanation: [
            "A quadratic equation is a polynomial equation of degree 2 in the form ax² + bx + c = 0, where a ≠ 0. Solutions (roots) can be found by factorization, completing the square, or the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a.",
            "The discriminant D = b² - 4ac determines the nature of roots: D > 0 means two distinct real roots; D = 0 means two equal real roots (called a repeated root); D < 0 means no real roots (complex roots). This is essential for determining whether a real-world problem has valid solutions.",
            "Quadratic equations have numerous real-world applications: projectile motion paths are parabolic (quadratic), calculating areas, finding dimensions of rectangles, engineering design. The relationship between roots (α, β) and coefficients: α + β = -b/a (sum of roots), αβ = c/a (product of roots) — these Vieta's formulas allow forming equations given roots.",
          ],
          keyConcepts: [
            {
              title: "Standard Form",
              description: "ax² + bx + c = 0 where a ≠ 0",
            },
            {
              title: "Quadratic Formula",
              description: "x = [-b ± √(b²-4ac)] / 2a",
            },
            {
              title: "Discriminant",
              description: "D = b²-4ac determines nature of roots",
            },
            {
              title: "Vieta's Formulas",
              description: "Sum and product of roots in terms of coefficients",
            },
          ],
          importantTerms: [
            {
              term: "Discriminant",
              definition: "D = b²-4ac; determines real vs complex roots",
            },
            {
              term: "Quadratic Formula",
              definition: "Formula giving roots of any quadratic equation",
            },
            {
              term: "Repeated Root",
              definition: "When D = 0, both roots are equal: x = -b/2a",
            },
          ],
          videoKeyword: "quadratic",
        },
      ],
    },
    {
      name: "Social Science",
      icon: "🗺️",
      chapters: [
        {
          id: "10-sst-1",
          number: 1,
          name: "The Rise of Nationalism in Europe",
          subject: "Social Science",
          classNum: 10,
          explanation: [
            "Nationalism — the belief that people sharing a common identity (language, culture, history) should have their own nation-state — transformed Europe in the 19th century. Before this, Europe consisted of large multi-ethnic empires (Ottoman, Habsburg, Russian) and divided regions like Germany and Italy.",
            "The French Revolution spread ideas of popular sovereignty and nationalism across Europe. Napoleon's conquests, while creating resistance, also spread revolutionary ideas. The Congress of Vienna (1815) tried to restore old order but couldn't suppress nationalist movements.",
            "Key nationalist movements: Greece's independence from Ottoman Empire (1832), aided by European romantics; German unification under Bismarck (1871) through wars and 'blood and iron' policy; Italian unification (Risorgimento) led by Garibaldi and Cavour. These movements show how nationalism reshaped the European map.",
          ],
          keyConcepts: [
            {
              title: "Nationalism",
              description:
                "Political belief that a nation should govern itself",
            },
            {
              title: "Unification Movements",
              description: "German and Italian unification in the 19th century",
            },
            {
              title: "Romanticism",
              description:
                "Cultural movement that promoted national identity through art",
            },
            {
              title: "Bismarck's Realpolitik",
              description: "Pragmatic politics, 'blood and iron' approach",
            },
          ],
          importantTerms: [
            {
              term: "Nation-State",
              definition:
                "A state where the political and national unit are congruent",
            },
            {
              term: "Romanticism",
              definition:
                "Artistic and cultural movement emphasizing emotion and national identity",
            },
            {
              term: "Realpolitik",
              definition:
                "Politics based on practical rather than ideological considerations",
            },
          ],
        },
      ],
    },
    {
      name: "English",
      icon: "📖",
      chapters: [
        {
          id: "10-eng-1",
          number: 1,
          name: "A Letter to God",
          subject: "English",
          classNum: 10,
          explanation: [
            "This story by G.L. Fuentes tells of Lencho, a farmer whose crops are destroyed by a hailstorm. He has complete, unshakeable faith in God and writes a letter to God asking for 100 pesos to resow his fields.",
            "The post office employees are moved by Lencho's faith and collect money among themselves to send to him. However, only 70 pesos are collected. When Lencho receives the money, he believes the post office employees stole 30 pesos from God, and writes a second letter asking God to send the rest.",
            "The story has deep irony — the very people who showed kindness are accused of theft by the beneficiary. It raises questions about blind faith versus human goodness, and the nature of gratitude and suspicion. The ending highlights how simple faith can coexist with comical misunderstanding.",
          ],
          keyConcepts: [
            {
              title: "Irony",
              description:
                "Outcome opposite to what's expected — accusation against helpers",
            },
            {
              title: "Blind Faith",
              description:
                "Unquestioning belief in God without considering human efforts",
            },
            {
              title: "Human Goodness",
              description: "The employees' selfless act of kindness",
            },
            {
              title: "Character Sketch",
              description: "Lencho as a man of faith but ungrateful perception",
            },
          ],
          importantTerms: [
            {
              term: "Irony",
              definition:
                "A situation where the outcome is opposite to what was expected",
            },
            {
              term: "Faith",
              definition:
                "Complete trust or confidence in someone or something",
            },
            {
              term: "Gratitude",
              definition:
                "The quality of being thankful; readiness to show appreciation",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 11 ─────────────────────────────────────────────────────────────────

const class11: NCERTClass = {
  classNum: 11,
  subjects: [
    {
      name: "Biology",
      icon: "🧬",
      chapters: [
        {
          id: "11-bio-1",
          number: 1,
          name: "The Living World",
          subject: "Biology",
          classNum: 11,
          explanation: [
            "What distinguishes living from non-living? Seven characteristics define living organisms: Growth (increase in mass and number), Reproduction (producing offspring), Cellular organization (all life is made of cells), Metabolism (chemical reactions sustaining life), Consciousness/Response to stimuli, Homeostasis (maintaining internal balance), and Heredity (passing characteristics to offspring).",
            "Taxonomy is the science of naming, describing, and classifying organisms. Carolus Linnaeus established binomial nomenclature — every organism gets a two-part scientific name (genus + species). For example, Homo sapiens (humans), Panthera leo (lion). Scientific names are universal across languages, preventing confusion.",
            "The hierarchy of classification (from broadest to specific) is: Kingdom → Phylum → Class → Order → Family → Genus → Species. All life is classified into five kingdoms: Monera (bacteria), Protista (amoeba), Fungi (mushrooms), Plantae (plants), Animalia (animals). Understanding this classification system helps reveal evolutionary relationships.",
          ],
          keyConcepts: [
            {
              title: "Characteristics of Life",
              description:
                "Growth, reproduction, metabolism, response, homeostasis",
            },
            {
              title: "Binomial Nomenclature",
              description: "Two-part scientific naming: Genus species",
            },
            {
              title: "Taxonomic Hierarchy",
              description:
                "Kingdom > Phylum > Class > Order > Family > Genus > Species",
            },
            {
              title: "Five Kingdom Classification",
              description: "Monera, Protista, Fungi, Plantae, Animalia",
            },
          ],
          importantTerms: [
            {
              term: "Taxonomy",
              definition:
                "The science of classifying and naming living organisms",
            },
            {
              term: "Binomial Nomenclature",
              definition:
                "System of naming organisms with genus and species names",
            },
            {
              term: "Metabolism",
              definition:
                "All chemical reactions occurring inside a living organism",
            },
            {
              term: "Homeostasis",
              definition:
                "Maintenance of constant internal environment in an organism",
            },
          ],
        },
        {
          id: "11-bio-8",
          number: 8,
          name: "Cell: The Unit of Life",
          subject: "Biology",
          classNum: 11,
          explanation: [
            "The Cell Theory (proposed by Schleiden and Schwann, completed by Virchow) states: All living organisms are made of cells; The cell is the basic structural and functional unit of life; All cells arise from pre-existing cells. Cells range from 1 μm (mycoplasma, the smallest) to 1 meter (nerve cells). Most cells are microscopic.",
            "Prokaryotic cells (bacteria, archaea) lack a membrane-bound nucleus. Their genetic material (DNA) floats in the cytoplasm. They have no membrane-bound organelles but have ribosomes. Eukaryotic cells (plants, animals, fungi) have a true nucleus with a nuclear membrane, and numerous membrane-bound organelles.",
            "Eukaryotic cell organelles and functions: Nucleus (control center, contains DNA); Mitochondria (energy production — ATP synthesis, 'powerhouse of the cell'); Chloroplasts (photosynthesis in plants); Endoplasmic Reticulum (Rough ER for protein synthesis, Smooth ER for lipid synthesis); Golgi Apparatus (packaging and transport); Lysosomes ('suicidal bags,' contain digestive enzymes); Ribosomes (protein synthesis); Cell wall (only in plants/fungi — protection and shape).",
          ],
          keyConcepts: [
            {
              title: "Cell Theory",
              description: "All life is made of cells; cells come from cells",
            },
            {
              title: "Prokaryote vs Eukaryote",
              description: "Without vs with membrane-bound nucleus",
            },
            {
              title: "Organelles and Functions",
              description: "Mitochondria, chloroplast, ER, Golgi, nucleus",
            },
            {
              title: "Plant vs Animal Cell",
              description: "Cell wall, chloroplasts, vacuole vs centrosome",
            },
          ],
          importantTerms: [
            {
              term: "Prokaryote",
              definition: "Cell without a membrane-bound nucleus (bacteria)",
            },
            {
              term: "Eukaryote",
              definition:
                "Cell with a true nucleus and membrane-bound organelles",
            },
            {
              term: "Mitochondria",
              definition:
                "Organelle that produces ATP through cellular respiration",
            },
            {
              term: "Chloroplast",
              definition:
                "Plant organelle containing chlorophyll for photosynthesis",
            },
          ],
          videoKeyword: "cell",
        },
      ],
    },
    {
      name: "Physics",
      icon: "⚛️",
      chapters: [
        {
          id: "11-phy-1",
          number: 1,
          name: "Physical World",
          subject: "Physics",
          classNum: 11,
          explanation: [
            "Physics is the study of nature and natural phenomena through observation, experimentation, and mathematical analysis. Four fundamental forces govern all physical interactions: Gravitational force (attraction between masses), Electromagnetic force (between charges, responsible for light, chemistry, and molecular bonds), Strong nuclear force (holds atomic nuclei together, strongest force), and Weak nuclear force (responsible for radioactive decay).",
            "Science progresses through the scientific method: Observation → Hypothesis → Experiment → Analysis → Conclusion. Great discoveries like Newton's gravity, Maxwell's electromagnetism, and Einstein's relativity emerged through this process. Physics has led to transformative technologies — electricity, computers, MRI machines, solar cells.",
            "Physics is classified into classical mechanics, thermodynamics, electromagnetism, optics, quantum mechanics, and relativity. Modern physics (quantum mechanics and relativity) overturned classical views. Science is a continuous process of questioning and revising understanding based on new evidence.",
          ],
          keyConcepts: [
            {
              title: "Four Fundamental Forces",
              description:
                "Gravitational, electromagnetic, strong nuclear, weak nuclear",
            },
            {
              title: "Scientific Method",
              description: "Observation → Hypothesis → Experiment → Theory",
            },
            {
              title: "Classical vs Modern Physics",
              description: "Newton's laws vs quantum mechanics and relativity",
            },
            {
              title: "Physics and Technology",
              description:
                "How physics discoveries drive technological progress",
            },
          ],
          importantTerms: [
            {
              term: "Strong Nuclear Force",
              definition:
                "Force holding protons and neutrons in atomic nucleus",
            },
            {
              term: "Scientific Method",
              definition:
                "Systematic process of making observations and testing hypotheses",
            },
            {
              term: "Hypothesis",
              definition:
                "A proposed explanation made on the basis of limited evidence",
            },
          ],
        },
      ],
    },
    {
      name: "Chemistry",
      icon: "⚗️",
      chapters: [
        {
          id: "11-chem-1",
          number: 1,
          name: "Some Basic Concepts of Chemistry",
          subject: "Chemistry",
          classNum: 11,
          explanation: [
            "Matter has mass and occupies space. The International System (SI) provides standard units: kilogram (mass), meter (length), Kelvin (temperature), mole (amount of substance). Significant figures indicate the precision of measurements — the last digit has uncertainty.",
            "Atoms are the smallest particles of an element that retain its chemical identity. The atomic mass unit (amu or u) = 1/12 the mass of a Carbon-12 atom. The mole concept: 1 mole of any substance contains 6.022 × 10²³ particles (Avogadro's number). This bridges the microscopic and macroscopic worlds.",
            "Stoichiometry involves calculating quantitative relationships in chemical reactions. The empirical formula gives simplest whole number ratio of atoms; molecular formula shows actual number. Limiting reagent is the reactant that is consumed first and determines the maximum product. Percentage yield = (actual yield/theoretical yield) × 100%.",
          ],
          keyConcepts: [
            {
              title: "SI Units",
              description: "Standard units: kg, m, K, mol, A, cd, s",
            },
            {
              title: "Mole Concept",
              description: "1 mole = 6.022×10²³ particles (Avogadro's number)",
            },
            {
              title: "Empirical and Molecular Formula",
              description: "Simplest ratio vs actual atomic ratio",
            },
            {
              title: "Stoichiometry",
              description:
                "Calculating reactant/product quantities from equations",
            },
          ],
          importantTerms: [
            {
              term: "Avogadro's Number",
              definition: "6.022 × 10²³ — number of particles in one mole",
            },
            {
              term: "Molar Mass",
              definition: "Mass of one mole of a substance in grams",
            },
            {
              term: "Limiting Reagent",
              definition:
                "Reactant consumed first, limiting the amount of product formed",
            },
          ],
          videoKeyword: "chemistry",
        },
      ],
    },
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "11-math-1",
          number: 1,
          name: "Sets",
          subject: "Mathematics",
          classNum: 11,
          explanation: [
            "A set is a well-defined collection of objects called elements. Sets can be represented by roster (listing elements: {1, 2, 3}) or set-builder notation ({x : x is a natural number < 4}). Special sets: empty set ∅, universal set U, subset (A ⊆ B if all elements of A are in B), proper subset (A ⊂ B if A ⊆ B and A ≠ B).",
            "Set operations: Union (A ∪ B = elements in A or B or both), Intersection (A ∩ B = elements in both A and B), Complement (A' = elements in U not in A), Difference (A - B = elements in A but not B). Venn diagrams visually represent these operations.",
            "De Morgan's Laws: (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'. For finite sets: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). These principles underlie Boolean algebra, logic, and database queries.",
          ],
          keyConcepts: [
            {
              title: "Set Representation",
              description: "Roster and set-builder notation",
            },
            {
              title: "Set Operations",
              description: "Union, intersection, complement, difference",
            },
            {
              title: "Venn Diagrams",
              description:
                "Visual representation of sets and their relationships",
            },
            {
              title: "De Morgan's Laws",
              description: "Laws relating union, intersection, and complement",
            },
          ],
          importantTerms: [
            {
              term: "Subset",
              definition:
                "Set A is a subset of B if every element of A is in B",
            },
            {
              term: "Union",
              definition: "Set of all elements in A or B or both (A ∪ B)",
            },
            {
              term: "Intersection",
              definition: "Set of elements common to both A and B (A ∩ B)",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 12 ─────────────────────────────────────────────────────────────────

const class12: NCERTClass = {
  classNum: 12,
  subjects: [
    {
      name: "Biology",
      icon: "🧬",
      chapters: [
        {
          id: "12-bio-2",
          number: 2,
          name: "Sexual Reproduction in Flowering Plants",
          subject: "Biology",
          classNum: 12,
          explanation: [
            "Flowering plants reproduce sexually through flowers. The male reproductive part is the stamen (consisting of anther, which produces pollen, and filament). The female reproductive part is the pistil/carpel (consisting of stigma — receives pollen, style, and ovary — contains ovules which develop into seeds).",
            "Pollination is the transfer of pollen from anther to stigma. Self-pollination occurs within the same flower; cross-pollination between different flowers. Pollinating agents include wind (anemophily), water (hydrophily), insects (entomophily), birds (ornithophily), and bats. Flowers are adapted to attract specific pollinators — bright colors and nectar for insects, strong scent for night pollinators.",
            "After pollination, fertilization occurs: the pollen tube grows through the style to the ovule, delivering two male gametes. Double fertilization (unique to flowering plants) — one male gamete fertilizes the egg to form the embryo (2n), while the other fuses with the polar nuclei to form the endosperm (3n, food for seed). The ovule develops into a seed; the ovary develops into the fruit.",
          ],
          keyConcepts: [
            {
              title: "Flower Structure",
              description: "Sepals, petals, stamen (male), pistil (female)",
            },
            {
              title: "Pollination Types",
              description:
                "Self-pollination vs cross-pollination; wind, insect, water agents",
            },
            {
              title: "Double Fertilization",
              description:
                "Unique to angiosperms: embryo (2n) + endosperm (3n)",
            },
            {
              title: "Fruit and Seed Formation",
              description: "Ovary → fruit; ovule → seed after fertilization",
            },
          ],
          importantTerms: [
            {
              term: "Pollination",
              definition: "Transfer of pollen from anther to stigma",
            },
            {
              term: "Double Fertilization",
              definition:
                "Two male gametes fertilize: one forms embryo, one forms endosperm",
            },
            {
              term: "Endosperm",
              definition:
                "Nutritive tissue (3n) providing food to developing embryo",
            },
            {
              term: "Angiosperm",
              definition:
                "Flowering plant producing seeds enclosed within fruit",
            },
          ],
        },
        {
          id: "12-bio-13",
          number: 13,
          name: "Organisms and Populations",
          subject: "Biology",
          classNum: 12,
          explanation: [
            "Ecology studies how organisms interact with each other and their environment. Organisms live in specific habitats and occupy ecological niches (their functional role). Environmental factors include abiotic (non-living: temperature, light, water, soil) and biotic (living: predators, competitors, parasites). Organisms adapt to their environment through behavioral, physiological, and morphological adaptations.",
            "A population is a group of individuals of the same species in a given area. Population characteristics include density (number per unit area), birth rate, death rate, age structure, and sex ratio. Population growth can be exponential (unlimited resources, J-shaped curve: dN/dt = rN) or logistic (limited resources, S-shaped curve: dN/dt = rN(K-N)/K, where K is carrying capacity).",
            "Interspecific interactions: Mutualism (+/+, both benefit, e.g., mycorrhizae), Commensalism (+/0, one benefits, other unaffected, e.g., barnacles on whale), Parasitism (+/-, parasite benefits, host harmed), Predation (+/-, predator benefits), Competition (-/-, both harmed), Amensalism (0/-, one harmed, other unaffected). The competitive exclusion principle states two species competing for identical resources cannot coexist.",
          ],
          keyConcepts: [
            {
              title: "Abiotic and Biotic Factors",
              description: "Physical environment vs living interactions",
            },
            {
              title: "Population Growth Models",
              description: "J-shaped (exponential) and S-shaped (logistic)",
            },
            {
              title: "Carrying Capacity (K)",
              description: "Maximum population the environment can sustain",
            },
            {
              title: "Interspecific Interactions",
              description:
                "Predation, competition, mutualism, parasitism, commensalism",
            },
          ],
          importantTerms: [
            {
              term: "Carrying Capacity",
              definition:
                "Maximum population size an environment can sustain long-term",
            },
            {
              term: "Mutualism",
              definition: "Interaction benefiting both species (+/+)",
            },
            {
              term: "Niche",
              definition:
                "Functional role and position of a species in its ecosystem",
            },
            {
              term: "Logistic Growth",
              definition:
                "S-shaped population growth when resources are limited",
            },
          ],
        },
      ],
    },
    {
      name: "Physics",
      icon: "⚛️",
      chapters: [
        {
          id: "12-phy-1",
          number: 1,
          name: "Electric Charges and Fields",
          subject: "Physics",
          classNum: 12,
          explanation: [
            "Electric charge is a fundamental property of matter. There are two types: positive (protons) and negative (electrons). Like charges repel, unlike charges attract. Charge is quantized — it exists in multiples of the elementary charge e = 1.6 × 10⁻¹⁹ C. Charge is conserved — total charge in an isolated system remains constant.",
            "Coulomb's Law: The force between two point charges is F = kq₁q₂/r², where k = 9×10⁹ N·m²/C². This is analogous to Newton's Gravitational Law. The electric field E at a point is the force per unit positive charge: E = F/q = kQ/r². Field lines show direction and strength of the field.",
            "Electric flux (Φ) through a surface is the number of field lines passing through it (Φ = E·A·cosθ). Gauss's Law states that total electric flux through a closed surface equals the enclosed charge divided by ε₀ (Φ = Q/ε₀). This powerful law simplifies electric field calculations for symmetric charge distributions.",
          ],
          keyConcepts: [
            {
              title: "Properties of Charge",
              description: "Quantization, conservation, positive/negative",
            },
            {
              title: "Coulomb's Law",
              description: "F = kq₁q₂/r² — electrostatic force between charges",
            },
            {
              title: "Electric Field",
              description: "E = F/q; field lines show direction and magnitude",
            },
            {
              title: "Gauss's Law",
              description: "Electric flux through closed surface = Q/ε₀",
            },
          ],
          importantTerms: [
            {
              term: "Electric Charge",
              definition:
                "Fundamental property of matter; measured in Coulombs (C)",
            },
            {
              term: "Electric Field",
              definition: "Force per unit positive charge at a point in space",
            },
            {
              term: "Gauss's Law",
              definition:
                "Total electric flux through closed surface = enclosed charge/ε₀",
            },
          ],
        },
      ],
    },
    {
      name: "Chemistry",
      icon: "⚗️",
      chapters: [
        {
          id: "12-chem-1",
          number: 1,
          name: "The Solid State",
          subject: "Chemistry",
          classNum: 12,
          explanation: [
            "Solids have definite shape and volume because their constituent particles are fixed in positions with strong intermolecular forces. Crystalline solids have ordered, repeating arrangements of particles (like NaCl, diamond). Amorphous solids lack long-range order (glass, rubber) — they are sometimes called supercooled liquids.",
            "Crystalline solids are classified by bonding: Ionic (NaCl — held by electrostatic forces, hard, high melting point), Covalent/Network (diamond, SiO₂ — very hard, very high melting point), Metallic (iron, copper — conduct electricity, malleable), and Molecular (ice, sugar — soft, low melting point, non-conducting).",
            "Crystal defects: Point defects include Schottky defect (equal cation and anion vacancies, density decreases), Frenkel defect (ion displaced to interstitial site, density unchanged), and impurity defects (doping). Electrical properties arise from defects: adding Group 14 silicon with Group 15 phosphorus creates n-type semiconductor (extra electrons); adding Group 13 aluminum creates p-type (electron holes).",
          ],
          keyConcepts: [
            {
              title: "Crystalline vs Amorphous",
              description: "Ordered lattice vs disordered arrangement",
            },
            {
              title: "Types of Crystalline Solids",
              description: "Ionic, covalent, metallic, molecular",
            },
            {
              title: "Crystal Defects",
              description: "Schottky, Frenkel defects and their effects",
            },
            {
              title: "Semiconductors",
              description: "n-type and p-type semiconductors through doping",
            },
          ],
          importantTerms: [
            {
              term: "Crystalline Solid",
              definition:
                "Solid with regular, repeating arrangement of particles",
            },
            {
              term: "Schottky Defect",
              definition:
                "Missing cation-anion pair in ionic crystal, decreases density",
            },
            {
              term: "Frenkel Defect",
              definition:
                "Ion displaced to interstitial site; density unchanged",
            },
            {
              term: "Doping",
              definition:
                "Adding impurity atoms to a semiconductor to change conductivity",
            },
          ],
        },
      ],
    },
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "12-math-1",
          number: 1,
          name: "Relations and Functions",
          subject: "Mathematics",
          classNum: 12,
          explanation: [
            "A relation R from set A to set B is a subset of A × B (Cartesian product). Special relations: Reflexive (aRa for all a), Symmetric (aRb ⟹ bRa), Transitive (aRb and bRc ⟹ aRc), Equivalence (reflexive + symmetric + transitive). For example, 'is parallel to' among lines is an equivalence relation.",
            "A function f: A → B assigns exactly one element of B to each element of A. Functions can be: One-one/Injective (different inputs give different outputs), Onto/Surjective (every B has at least one preimage), Bijective (both one-one and onto — establishes a one-to-one correspondence and has an inverse).",
            "Composition of functions: (f ∘ g)(x) = f(g(x)) — apply g first, then f. The inverse function f⁻¹ exists only if f is bijective. Binary operations on a set S: closure (a * b ∈ S), associativity ((a*b)*c = a*(b*c)), identity element (a*e = a), and inverse (a * a⁻¹ = e).",
          ],
          keyConcepts: [
            {
              title: "Equivalence Relations",
              description: "Reflexive, symmetric, and transitive relations",
            },
            {
              title: "Types of Functions",
              description: "Injective, surjective, bijective",
            },
            {
              title: "Composite Functions",
              description: "(f∘g)(x) = f(g(x)) — function composition",
            },
            {
              title: "Inverse Functions",
              description: "Exists only for bijective functions",
            },
          ],
          importantTerms: [
            {
              term: "Bijective Function",
              definition:
                "A function that is both one-one and onto; has an inverse",
            },
            {
              term: "Equivalence Relation",
              definition:
                "Relation that is reflexive, symmetric, and transitive",
            },
            {
              term: "Composite Function",
              definition: "f∘g means first apply g, then apply f to the result",
            },
          ],
        },
      ],
    },
    {
      name: "History",
      icon: "🏛️",
      chapters: [
        {
          id: "12-his-1",
          number: 1,
          name: "Bricks, Beads and Bones: The Harappan Civilisation",
          subject: "History",
          classNum: 12,
          explanation: [
            "The Harappan or Indus Valley Civilisation (2600–1900 BCE) was one of the world's first urban civilisations, contemporary with ancient Egypt and Mesopotamia. It extended over 1.5 million km² across present-day Pakistan and northwest India. Major cities include Mohenjo-daro, Harappa, Dholavira, and Lothal.",
            "Harappan cities show remarkable urban planning: grid-pattern streets, standardised burnt-brick construction, sophisticated drainage systems, and two-story houses. The Great Bath at Mohenjo-daro suggests ritual purification practices. The citadel (administrative/religious) and lower town (residential) layout shows social organization.",
            "The Harappan economy was based on agriculture (wheat, barley, cotton) and extensive trade — evidenced by seals found as far away as Mesopotamia. The undeciphered Harappan script remains one of archaeology's great mysteries. The civilisation declined around 1900 BCE, possibly due to climate change, shifting rivers, or decline in trade.",
          ],
          keyConcepts: [
            {
              title: "Urban Planning",
              description: "Grid streets, drainage, citadel, and lower town",
            },
            {
              title: "Economy",
              description:
                "Agriculture, craft production, and long-distance trade",
            },
            {
              title: "Harappan Script",
              description: "Undeciphered writing system found on seals",
            },
            {
              title: "Decline of Civilisation",
              description:
                "Climate change, river shifts, trade disruption theories",
            },
          ],
          importantTerms: [
            {
              term: "Mohenjo-daro",
              definition:
                "Major Harappan city meaning 'mound of the dead' in Sindhi",
            },
            {
              term: "Great Bath",
              definition:
                "Large public bathing structure at Mohenjo-daro, possibly ritual",
            },
            {
              term: "Citadel",
              definition:
                "Raised area in Harappan cities, possibly for administration",
            },
          ],
        },
      ],
    },
    {
      name: "Economics",
      icon: "📊",
      chapters: [
        {
          id: "12-eco-1",
          number: 1,
          name: "Introduction to Microeconomics",
          subject: "Economics",
          classNum: 12,
          explanation: [
            "Economics studies how individuals, firms, and societies allocate scarce resources among unlimited wants. Microeconomics focuses on individual economic units — consumers, producers, markets. Macroeconomics studies economy-wide aggregates — national income, inflation, employment.",
            "The central problems of economics arise from scarcity: What to produce (what goods and services), How to produce (which production methods), and For whom to produce (how to distribute output). Different economic systems (capitalism, socialism, mixed economy) solve these differently.",
            "The Production Possibility Frontier (PPF) shows maximum combinations of two goods an economy can produce with given resources. Points on the curve are efficient; inside are inefficient; outside are unattainable currently. The opportunity cost of producing more of one good is the amount of the other good sacrificed.",
          ],
          keyConcepts: [
            {
              title: "Scarcity and Choice",
              description: "Limited resources vs unlimited wants",
            },
            {
              title: "Central Economic Problems",
              description: "What, How, and For Whom to produce",
            },
            {
              title: "Production Possibility Frontier",
              description: "Shows maximum output combinations",
            },
            {
              title: "Opportunity Cost",
              description: "Value of next best alternative foregone",
            },
          ],
          importantTerms: [
            {
              term: "Scarcity",
              definition:
                "Condition of limited resources relative to unlimited wants",
            },
            {
              term: "Opportunity Cost",
              definition:
                "The value of the best alternative foregone when making a choice",
            },
            {
              term: "PPF",
              definition:
                "Production Possibility Frontier: curve showing maximum production combinations",
            },
          ],
        },
      ],
    },
  ],
};

// ─── All Classes ──────────────────────────────────────────────────────────────

export const ncertClasses: NCERTClass[] = [
  class1,
  class3,
  class5,
  class6,
  class9,
  class10,
  class11,
  class12,
];

// Helper to get subjects for a class
export function getSubjectsForClass(classNum: number): string[] {
  if (classNum >= 1 && classNum <= 5) {
    return ["Mathematics", "EVS", "English", "Hindi"];
  }
  if (classNum >= 6 && classNum <= 10) {
    return ["Science", "Mathematics", "Social Science", "English", "Hindi"];
  }
  return [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "History",
    "Economics",
    "English",
  ];
}

// Get NCERT class data (returns closest available if exact not found)
export function getNCERTClass(classNum: number): NCERTClass | undefined {
  return ncertClasses.find((c) => c.classNum === classNum);
}

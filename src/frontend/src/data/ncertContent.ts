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
      name: "Hindi",
      icon: "🔤",
      chapters: [
        {
          id: "1-hin-1",
          number: 1,
          name: "झूला (Jhula - The Swing)",
          subject: "Hindi",
          classNum: 1,
          explanation: [
            "यह पाठ बच्चों को हिंदी की दुनिया में एक झूले की कविता के माध्यम से ले जाता है। बच्चे झूले पर बैठकर आनंद लेते हुए ऊंचे-नीचे जाने का वर्णन पढ़ते हैं। कविता में सरल शब्दों का प्रयोग बच्चों को पढ़ने में आसानी देता है।",
            "Students learn to identify and read basic Hindi vowels (अ, आ, इ, ई, उ, ऊ) and consonants through the poem. Repetition of simple words helps children memorize the alphabet and build reading confidence.",
            "The poem celebrates the joy of childhood — swings, parks, and outdoor play. Children connect the language to their own experiences, making learning enjoyable and memorable.",
          ],
          keyConcepts: [
            {
              title: "Hindi Vowels",
              description: "अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ",
            },
            {
              title: "Reading Aloud",
              description: "Reading Hindi with proper pronunciation",
            },
            {
              title: "Word Recognition",
              description: "Recognizing simple Hindi words",
            },
            {
              title: "Joyful Learning",
              description: "Learning through poems about familiar experiences",
            },
          ],
          importantTerms: [
            {
              term: "झूला (Jhula)",
              definition: "A swing; a common childhood play item",
            },
            { term: "स्वर (Swar)", definition: "Vowels in Hindi language" },
            {
              term: "व्यंजन (Vyanjan)",
              definition: "Consonants in Hindi language",
            },
          ],
        },
        {
          id: "1-hin-2",
          number: 2,
          name: "आम की टोकरी (Aam ki Tokari)",
          subject: "Hindi",
          classNum: 1,
          explanation: [
            "इस कविता में एक छोटी लड़की आम की टोकरी लिए बाज़ार जाती है। कविता में गिनती और फलों का परिचय होता है। बच्चे एक साथ हिंदी और गणित — दोनों सीखते हैं।",
            "Students learn Hindi numbers (एक, दो, तीन...) through the counting of mangoes. This integration of math and language makes both subjects more engaging and helps children remember vocabulary in context.",
            "The poem introduces market vocabulary and the concept of buying and selling. Children learn about community helpers like vendors and understand how everyday transactions work.",
          ],
          keyConcepts: [
            {
              title: "Hindi Numbers",
              description: "एक, दो, तीन, चार, पाँच... (1-10)",
            },
            {
              title: "Fruits Vocabulary",
              description: "आम, केला, सेब, संतरा (mango, banana, apple)",
            },
            {
              title: "Market Scene",
              description: "Buying and selling in a market",
            },
            {
              title: "Cross-subject Learning",
              description: "Hindi + Mathematics together",
            },
          ],
          importantTerms: [
            { term: "आम (Aam)", definition: "Mango — India's national fruit" },
            {
              term: "टोकरी (Tokari)",
              definition: "A basket for carrying items",
            },
            { term: "गिनती (Ginti)", definition: "Counting in Hindi" },
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

// ─── Class 2 ──────────────────────────────────────────────────────────────────

const class2: NCERTClass = {
  classNum: 2,
  subjects: [
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "2-math-1",
          number: 1,
          name: "What is Long, What is Short?",
          subject: "Mathematics",
          classNum: 2,
          explanation: [
            "This chapter teaches children to compare the lengths of objects without using measuring tools. Children learn words like longer, shorter, taller, and smaller by comparing objects directly — placing them side by side or one on top of the other.",
            "Students explore non-standard units of measurement like handspans, foot-lengths, and pencils to measure objects. This builds the foundation for understanding that measurement needs a consistent unit.",
            "Through activities like measuring the classroom door with footsteps, children learn that different-sized units give different numbers. This curiosity leads naturally to the idea of standard units.",
          ],
          keyConcepts: [
            {
              title: "Comparison",
              description: "Longer, shorter, taller, smaller",
            },
            {
              title: "Non-Standard Units",
              description: "Using handspans, footsteps to measure",
            },
            {
              title: "Ordering",
              description: "Arranging objects from shortest to longest",
            },
            {
              title: "Estimation",
              description: "Guessing length before measuring",
            },
          ],
          importantTerms: [
            {
              term: "Length",
              definition: "The measurement of something from end to end",
            },
            {
              term: "Unit",
              definition: "A standard amount used for measuring",
            },
            {
              term: "Non-standard unit",
              definition:
                "An informal unit like a hand or pencil used for measuring",
            },
          ],
        },
        {
          id: "2-math-2",
          number: 2,
          name: "Counting in Groups",
          subject: "Mathematics",
          classNum: 2,
          explanation: [
            "Children learn that counting large groups of objects is easier when items are grouped into tens and ones. By making bundles of 10 sticks, students physically experience the concept of place value.",
            "The chapter introduces the idea that our number system is based on groups of ten (decimal system). Grouping objects into tens helps children count quickly and understand that 24 means '2 tens and 4 ones.'",
            "Students practice skip counting by 2s, 5s, and 10s. This prepares them for multiplication in higher classes and strengthens their mental math abilities.",
          ],
          keyConcepts: [
            {
              title: "Grouping by Tens",
              description: "Bundling objects into groups of 10",
            },
            {
              title: "Place Value",
              description: "Tens and ones positions in a 2-digit number",
            },
            {
              title: "Skip Counting",
              description: "Counting by 2s, 5s, or 10s",
            },
            {
              title: "Tens and Ones",
              description: "Understanding 2-digit numbers",
            },
          ],
          importantTerms: [
            {
              term: "Place Value",
              definition:
                "The value of a digit based on its position in a number",
            },
            { term: "Tens", definition: "A group of ten items" },
            { term: "Ones", definition: "Single individual items (units)" },
          ],
        },
        {
          id: "2-math-3",
          number: 3,
          name: "How Much Can You Carry?",
          subject: "Mathematics",
          classNum: 2,
          explanation: [
            "This chapter introduces the concept of weight and comparison. Students learn to compare the heaviness of objects using a balance scale and vocabulary: heavier, lighter, equal weight.",
            "Children experiment with weighing objects using non-standard units like stones, blocks, or bags of sand. They discover that a small object can be heavier than a large one — size does not always equal weight.",
            "Students learn to estimate weight before measuring. Sorting objects by weight builds critical thinking skills and introduces the scientific method of forming and testing hypotheses.",
          ],
          keyConcepts: [
            {
              title: "Weight Comparison",
              description: "Heavier, lighter, and equal weight",
            },
            { title: "Balance Scale", description: "Tool to compare weights" },
            {
              title: "Non-Standard Weight Units",
              description: "Using stones or blocks to measure weight",
            },
            {
              title: "Estimation",
              description: "Predicting which object is heavier",
            },
          ],
          importantTerms: [
            { term: "Weight", definition: "How heavy an object is" },
            { term: "Balance", definition: "A tool used to compare weights" },
            {
              term: "Heavier/Lighter",
              definition: "Comparison words for weight",
            },
          ],
        },
        {
          id: "2-math-4",
          number: 4,
          name: "Rupees and Paise",
          subject: "Mathematics",
          classNum: 2,
          explanation: [
            "Children are introduced to Indian currency — rupees and paise. They learn to identify different coins (50 paise, 1 rupee, 2 rupees, 5 rupees, 10 rupees) and notes (10, 20, 50, 100 rupees) and their values.",
            "Through role-play shopping activities, students practice paying the right amount and receiving change. This real-world application makes addition and subtraction meaningful and engaging.",
            "Students learn that 100 paise = 1 rupee. They practice making amounts using combinations of coins and notes. Money math builds practical life skills alongside mathematical reasoning.",
          ],
          keyConcepts: [
            {
              title: "Indian Currency",
              description: "Rupees and paise, coins and notes",
            },
            {
              title: "100 Paise = 1 Rupee",
              description: "Relationship between rupees and paise",
            },
            {
              title: "Adding Money",
              description: "Combining coins to make an amount",
            },
            {
              title: "Making Change",
              description: "Subtracting to find change",
            },
          ],
          importantTerms: [
            {
              term: "Rupee",
              definition: "Indian currency unit; 1 rupee = 100 paise",
            },
            { term: "Paise", definition: "Smaller unit of Indian currency" },
            {
              term: "Change",
              definition: "Money returned after paying more than needed",
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
          id: "2-eng-1",
          number: 1,
          name: "First Day at School",
          subject: "English",
          classNum: 2,
          explanation: [
            "This story captures the excitement and nervousness a child feels on their first day at a new school. Students relate to the character's feelings of uncertainty and the joy of making new friends.",
            "The chapter builds vocabulary around school life — classroom, teacher, friends, books, pencils. Reading comprehension questions help children recall story details and sequence events.",
            "Students practice writing simple sentences about themselves and their own school experiences. This connects reading to personal expression and builds early writing skills.",
          ],
          keyConcepts: [
            {
              title: "Emotions",
              description: "Excited, nervous, happy, afraid",
            },
            {
              title: "School Vocabulary",
              description: "Classroom, teacher, desk, board, friends",
            },
            {
              title: "Sequencing",
              description: "Ordering events from the story",
            },
            {
              title: "Personal Writing",
              description: "Writing about one's own experiences",
            },
          ],
          importantTerms: [
            {
              term: "Emotion",
              definition: "A feeling such as happiness, sadness, or fear",
            },
            { term: "Vocabulary", definition: "Words of a language" },
            {
              term: "Comprehension",
              definition: "Understanding what you have read",
            },
          ],
        },
        {
          id: "2-eng-2",
          number: 2,
          name: "I am Lucky!",
          subject: "English",
          classNum: 2,
          explanation: [
            "This cheerful poem teaches children to appreciate what they have — eyes to see, ears to hear, legs to run, and hands to touch. Gratitude and positivity are core themes.",
            "Students learn new describing words (adjectives) through the poem's vivid imagery. Reciting the poem helps develop fluency, pronunciation, and rhythm in English speech.",
            "The chapter encourages children to write their own simple poems about things they are grateful for. Creative expression builds confidence and a love for the English language.",
          ],
          keyConcepts: [
            {
              title: "Gratitude",
              description: "Being thankful for what we have",
            },
            {
              title: "Adjectives",
              description: "Describing words — beautiful, big, small",
            },
            {
              title: "Rhyme Scheme",
              description: "Pattern of rhyming words in a poem",
            },
            {
              title: "Poetry Recitation",
              description: "Reading poems aloud with expression",
            },
          ],
          importantTerms: [
            {
              term: "Adjective",
              definition: "A word that describes a noun (big, red, happy)",
            },
            { term: "Stanza", definition: "A group of lines in a poem" },
            { term: "Rhyme", definition: "Words that end with the same sound" },
          ],
        },
      ],
    },
    {
      name: "EVS",
      icon: "🌿",
      chapters: [
        {
          id: "2-evs-1",
          number: 1,
          name: "Plants Around Us",
          subject: "EVS",
          classNum: 2,
          explanation: [
            "Children explore the plants in their immediate environment — in their home garden, school grounds, and nearby parks. They learn to classify plants as trees (big, woody), shrubs (medium-sized, bushy), and herbs (small, soft stems).",
            "Students learn the basic parts of a plant: roots (hold plant and absorb water), stem (transports water), leaves (make food), flowers (attract insects for pollination), and fruits/seeds (reproduction). This builds foundational biology knowledge.",
            "The chapter emphasizes the importance of plants to all life on Earth — they produce oxygen, provide food, offer shelter, and prevent soil erosion. Children develop an early sense of responsibility toward nature.",
          ],
          keyConcepts: [
            {
              title: "Types of Plants",
              description: "Trees, shrubs, herbs, creepers, climbers",
            },
            {
              title: "Parts of a Plant",
              description: "Roots, stem, leaves, flowers, fruits, seeds",
            },
            {
              title: "Uses of Plants",
              description: "Food, medicine, oxygen, shelter",
            },
            {
              title: "Care for Plants",
              description: "Watering, sunlight, and not harming them",
            },
          ],
          importantTerms: [
            { term: "Tree", definition: "A tall plant with a woody trunk" },
            {
              term: "Herb",
              definition: "A small plant with a soft, non-woody stem",
            },
            {
              term: "Roots",
              definition:
                "Plant part underground that absorbs water and minerals",
            },
          ],
        },
        {
          id: "2-evs-2",
          number: 2,
          name: "Animals Around Us",
          subject: "EVS",
          classNum: 2,
          explanation: [
            "Children learn to identify and categorize familiar animals as domestic (cow, dog, cat — kept by humans) and wild (lion, elephant, tiger — live in forests). They also learn about water animals and birds.",
            "Students explore what animals need to survive: food, water, shelter, and air. They learn what different animals eat — carnivores (only meat), herbivores (only plants), and omnivores (both).",
            "The chapter builds empathy toward animals. Children learn why we should not harm animals, why endangered animals need protection, and how animals are important to ecosystems and human life.",
          ],
          keyConcepts: [
            {
              title: "Domestic vs Wild Animals",
              description: "Animals kept by humans vs living freely",
            },
            {
              title: "What Animals Eat",
              description: "Carnivores, herbivores, omnivores",
            },
            {
              title: "Animal Homes",
              description: "Den, burrow, nest, hive, stable",
            },
            {
              title: "Caring for Animals",
              description: "Kindness and not harming wildlife",
            },
          ],
          importantTerms: [
            {
              term: "Domestic Animal",
              definition: "An animal kept by humans for companionship or work",
            },
            { term: "Carnivore", definition: "An animal that eats only meat" },
            {
              term: "Herbivore",
              definition: "An animal that eats only plants",
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
      name: "English",
      icon: "📖",
      chapters: [
        {
          id: "3-eng-1",
          number: 1,
          name: "Good Morning",
          subject: "English",
          classNum: 3,
          explanation: [
            "This opening poem teaches greetings and builds the habit of being polite and respectful. Good morning to the sun, the birds, the trees — children learn to appreciate the world around them as they start each day.",
            "Students practice simple greetings and responses in English: Good morning/afternoon/evening/night. Role-play activities help children become comfortable with everyday English conversational expressions.",
            "The poem introduces capital letters for proper nouns and the beginning of sentences, and punctuation like the exclamation mark for greetings. These foundational grammar rules are introduced naturally through the poem.",
          ],
          keyConcepts: [
            {
              title: "Greetings",
              description: "Good morning, afternoon, evening, night",
            },
            {
              title: "Capital Letters",
              description: "Starting sentences and proper nouns with capitals",
            },
            {
              title: "Exclamation Mark",
              description: "Punctuation for surprise and enthusiasm",
            },
            {
              title: "Polite Language",
              description: "Saying please, thank you, you're welcome",
            },
          ],
          importantTerms: [
            {
              term: "Greeting",
              definition: "A polite expression used when meeting someone",
            },
            {
              term: "Capital Letter",
              definition:
                "An uppercase letter used to begin sentences and proper nouns",
            },
            {
              term: "Punctuation",
              definition:
                "Marks used in writing to clarify meaning and sentences",
            },
          ],
        },
        {
          id: "3-eng-2",
          number: 2,
          name: "The Magic Garden",
          subject: "English",
          classNum: 3,
          explanation: [
            "A girl discovers a magical garden where all plants have unusual properties — a laughter tree, a candy bush, and a rainbow flower. The story stimulates imagination and builds creative thinking alongside reading skills.",
            "Students learn descriptive adjectives through the vivid garden imagery. They practice identifying nouns and adjectives and using them in their own sentences. Building a personal vocabulary list is encouraged.",
            "The story ends with the girl realizing any garden can be magical if you observe it carefully. This lesson in mindfulness and appreciation of nature extends the story's meaning beyond fantasy.",
          ],
          keyConcepts: [
            {
              title: "Descriptive Adjectives",
              description: "Words describing properties of nouns",
            },
            {
              title: "Nouns and Adjectives",
              description: "Identifying naming and describing words",
            },
            {
              title: "Creative Writing",
              description: "Inventing one's own magical garden story",
            },
            {
              title: "Observation",
              description: "Seeing beauty in real nature",
            },
          ],
          importantTerms: [
            {
              term: "Noun",
              definition: "A naming word — person, place, animal, or thing",
            },
            { term: "Adjective", definition: "A word that describes a noun" },
            {
              term: "Fantasy",
              definition: "A genre involving magical or imaginary elements",
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
        {
          id: "3-evs-2",
          number: 2,
          name: "The Plant Fairy",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "This imaginative chapter explores plants from the perspective of how they help each other and other living beings. Seeds travel in remarkable ways — by wind (dandelion, maple), by water (coconuts), by animals (burrs that cling to fur), and by explosion (touch-me-not pods). This dispersal spreads plants far and wide.",
            "Students learn about germination — the process by which a seed grows into a new plant. A seed needs water, warmth, and air to germinate. The embryo inside the seed uses stored food to grow its first roots (radicle) and shoot (plumule) before it can photosynthesize.",
            "The interconnection between plants and animals is highlighted — birds eat fruits and disperse seeds in their droppings; bees collect nectar and pollinate flowers; earthworms dig the soil and make it fertile. This web of relationships shows ecology's beautiful complexity.",
          ],
          keyConcepts: [
            {
              title: "Seed Dispersal",
              description: "Wind, water, animals, and explosion methods",
            },
            {
              title: "Germination",
              description: "How a seed sprouts into a new plant",
            },
            {
              title: "Plant-Animal Interdependence",
              description: "Bees, birds, and plants need each other",
            },
            {
              title: "Seed Structure",
              description: "Embryo, seed coat, and food store",
            },
          ],
          importantTerms: [
            {
              term: "Germination",
              definition: "The process of a seed sprouting into a new plant",
            },
            {
              term: "Dispersal",
              definition: "Spreading seeds away from the parent plant",
            },
            {
              term: "Radicle",
              definition: "The first root that emerges from a germinating seed",
            },
          ],
        },
        {
          id: "3-evs-9",
          number: 9,
          name: "It's Raining",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Rain is part of the water cycle — the continuous movement of water between earth, atmosphere, and back. The sun heats water in oceans, lakes, and rivers, causing evaporation (liquid → water vapor). Water vapor rises, cools, and condenses into clouds (tiny water droplets). When droplets get heavy enough, they fall as rain (precipitation).",
            "India's rainfall is mainly through the monsoon — seasonal winds that bring moisture from the Indian Ocean. The Southwest Monsoon (June-September) brings most of India's rainfall. Without monsoon rains, India's agriculture would collapse. Understanding the monsoon is key to understanding Indian climate and economy.",
            "Students learn about water conservation — saving rainwater through rooftop collection, ponds, and check dams. They understand that freshwater is limited and must be used carefully. Even though 71% of Earth is water, only 2.5% is freshwater, and most of that is frozen in ice caps.",
          ],
          keyConcepts: [
            {
              title: "Water Cycle",
              description:
                "Evaporation → condensation → precipitation → runoff",
            },
            {
              title: "Monsoon",
              description: "Seasonal winds bringing India's annual rainfall",
            },
            {
              title: "Water Conservation",
              description: "Saving and reusing water wisely",
            },
            {
              title: "Freshwater Scarcity",
              description: "Only 2.5% of Earth's water is fresh",
            },
          ],
          importantTerms: [
            {
              term: "Evaporation",
              definition: "Water converting from liquid to vapor due to heat",
            },
            {
              term: "Condensation",
              definition:
                "Water vapor cooling and turning to liquid water droplets",
            },
            {
              term: "Monsoon",
              definition:
                "Seasonal wind system bringing heavy rainfall to India",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 4 ──────────────────────────────────────────────────────────────────

const class4: NCERTClass = {
  classNum: 4,
  subjects: [
    {
      name: "Mathematics",
      icon: "🔢",
      chapters: [
        {
          id: "4-math-1",
          number: 1,
          name: "Building with Bricks",
          subject: "Mathematics",
          classNum: 4,
          explanation: [
            "Using the context of bricks and building, this chapter introduces children to arrays and multiplication concepts. By arranging bricks in rows and columns, students see how multiplication is related to repeated addition and rectangular arrangements.",
            "Students learn to describe 3D shapes from different viewpoints and understand the properties of common solids like cubes, cuboids, cylinders, and cones. This spatial thinking is foundational for geometry.",
            "The chapter connects math to real-world construction and architecture. Students are encouraged to notice geometric patterns in buildings around them, making math a living subject rather than an abstract one.",
          ],
          keyConcepts: [
            {
              title: "Arrays",
              description: "Rows and columns showing multiplication",
            },
            {
              title: "3D Shapes",
              description: "Cube, cuboid, cylinder, cone, sphere",
            },
            {
              title: "Faces, Edges, Corners",
              description: "Properties of 3D shapes",
            },
            {
              title: "Patterns in Buildings",
              description: "Geometric patterns in architecture",
            },
          ],
          importantTerms: [
            {
              term: "Array",
              definition: "Objects arranged in equal rows and columns",
            },
            {
              term: "Cuboid",
              definition: "A 3D shape with 6 rectangular faces",
            },
            { term: "Face", definition: "A flat surface of a 3D shape" },
          ],
        },
        {
          id: "4-math-2",
          number: 2,
          name: "Long and Short",
          subject: "Mathematics",
          classNum: 4,
          explanation: [
            "Students are introduced to the standard metric system: centimetres (cm) and metres (m). They learn that 100 cm = 1 m and practice measuring objects in the classroom and school environment.",
            "The chapter builds on informal measurement from earlier classes and introduces precision. Students learn to use rulers accurately, reading the scale correctly and understanding that measurements must start from zero.",
            "Word problems involving measurement build problem-solving skills. For example, if a ribbon is 3 m 50 cm long and 1 m 20 cm is cut, how much remains? Converting between cm and m is a key skill.",
          ],
          keyConcepts: [
            {
              title: "Metre and Centimetre",
              description: "Standard units of length; 100 cm = 1 m",
            },
            {
              title: "Using a Ruler",
              description: "Measuring accurately in cm",
            },
            { title: "Conversion", description: "Converting between cm and m" },
            {
              title: "Measurement Word Problems",
              description: "Solving real-life length problems",
            },
          ],
          importantTerms: [
            {
              term: "Metre (m)",
              definition: "Standard unit of length; 1 m = 100 cm",
            },
            {
              term: "Centimetre (cm)",
              definition: "Smaller unit of length; 100 cm = 1 m",
            },
            {
              term: "Scale",
              definition: "A marked measuring tool like a ruler",
            },
          ],
        },
        {
          id: "4-math-3",
          number: 3,
          name: "Tables and Shares (Division)",
          subject: "Mathematics",
          classNum: 4,
          explanation: [
            "Division is introduced as sharing equally — if 12 mangoes are shared among 4 children, each gets 3. Students connect division to the idea of equal groups, building on their understanding of multiplication.",
            "The chapter introduces the relationship between multiplication and division: 3 × 4 = 12 means 12 ÷ 4 = 3. Students use multiplication tables to solve division problems, showing the inverse relationship between the two operations.",
            "Long division is introduced with simple 2-digit dividends. The concept of remainder — what is left over when something cannot be divided equally — is explained through real-life sharing examples.",
          ],
          keyConcepts: [
            {
              title: "Division as Sharing",
              description: "Dividing into equal groups",
            },
            {
              title: "Division and Multiplication",
              description: "Inverse operations",
            },
            {
              title: "Remainder",
              description: "What is left over after division",
            },
            {
              title: "Long Division",
              description: "Step-by-step division method",
            },
          ],
          importantTerms: [
            { term: "Dividend", definition: "The number being divided" },
            { term: "Divisor", definition: "The number by which we divide" },
            {
              term: "Remainder",
              definition: "What is left after dividing as much as possible",
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
          id: "4-eng-1",
          number: 1,
          name: "Wake Up!",
          subject: "English",
          classNum: 4,
          explanation: [
            "This lively poem by Christina Rossetti wakes readers up to the beauty of the morning — birds singing, the sun rising, bees buzzing. The poem uses vivid sensory details to paint a picture of a fresh new day.",
            "Students learn about sensory language — words that describe what we see, hear, smell, feel, and taste. This enriches their vocabulary and helps them write more descriptive compositions.",
            "The poem's rhyme scheme and rhythm make it enjoyable to recite. Students practice reading aloud with expression and pace, developing oral English skills alongside reading comprehension.",
          ],
          keyConcepts: [
            {
              title: "Sensory Language",
              description: "Words describing sights, sounds, smells, etc.",
            },
            {
              title: "Rhyme Scheme",
              description: "The pattern of rhyming lines in a poem",
            },
            {
              title: "Morning Imagery",
              description: "Descriptive language about nature and morning",
            },
            {
              title: "Oral Reading",
              description: "Reading aloud with expression and rhythm",
            },
          ],
          importantTerms: [
            {
              term: "Imagery",
              definition: "Language that creates pictures in the reader's mind",
            },
            {
              term: "Rhyme Scheme",
              definition: "The pattern of end rhymes in a poem",
            },
            {
              term: "Recitation",
              definition: "Speaking a poem aloud from memory",
            },
          ],
        },
        {
          id: "4-eng-2",
          number: 2,
          name: "Neha's Alarm Clock",
          subject: "English",
          classNum: 4,
          explanation: [
            "Neha sets an alarm clock for the first time so she can wake up early and see the sunrise. The story explores themes of independence, responsibility, and the wonder of nature through a child's perspective.",
            "Students practice reading a short story and answering comprehension questions. They identify characters, setting, problem, and resolution — the basic elements of narrative structure.",
            "The chapter introduces past tense verbs and their irregular forms through the story's narrative. Students practice forming simple past tense sentences about events that have already happened.",
          ],
          keyConcepts: [
            {
              title: "Story Elements",
              description: "Characters, setting, problem, resolution",
            },
            {
              title: "Past Tense",
              description: "Verbs describing things that already happened",
            },
            {
              title: "Comprehension",
              description: "Understanding and answering questions about a text",
            },
            {
              title: "Responsibility",
              description: "Taking care of one's own duties",
            },
          ],
          importantTerms: [
            {
              term: "Narrative",
              definition: "A story that describes a sequence of events",
            },
            {
              term: "Past Tense",
              definition: "Verb form used for things that happened before now",
            },
            {
              term: "Setting",
              definition: "The time and place where a story happens",
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
          id: "4-evs-1",
          number: 1,
          name: "Going to School",
          subject: "EVS",
          classNum: 4,
          explanation: [
            "Children across India reach school in many different ways — on foot, by bus, boat, bullock cart, rickshaw, or even a horse! This chapter explores the diversity of transportation methods in different regions and geographical conditions.",
            "Students learn about different terrains in India — mountains, valleys, rivers, deserts, and plains — and how they affect how people travel. Children in hilly areas may walk steep paths; children near rivers use boats.",
            "The chapter builds appreciation for the diverse conditions of life in India. It encourages empathy for the challenges others face and pride in the variety of India's geography and culture.",
          ],
          keyConcepts: [
            {
              title: "Modes of Transport",
              description: "How children reach school in different regions",
            },
            {
              title: "India's Geography",
              description:
                "Mountains, plains, deserts, rivers affecting travel",
            },
            {
              title: "Community Diversity",
              description: "Different ways of life across India",
            },
            {
              title: "Empathy",
              description: "Understanding others' challenges and experiences",
            },
          ],
          importantTerms: [
            {
              term: "Terrain",
              definition: "The physical features of an area of land",
            },
            {
              term: "Transport",
              definition: "A way of moving from one place to another",
            },
            {
              term: "Community",
              definition: "A group of people living in the same area",
            },
          ],
        },
        {
          id: "4-evs-2",
          number: 2,
          name: "From The Window",
          subject: "EVS",
          classNum: 4,
          explanation: [
            "Through the metaphor of looking from a train window, students observe how the landscape changes as one travels across India — from green fields to dry scrubland, from villages to towns. This develops geographical observation skills.",
            "The chapter introduces the concept that India has great diversity in landscape, climate, vegetation, and lifestyle. The same train journey can pass through several distinct ecological zones.",
            "Students are encouraged to observe changes in their own environment as seasons change — trees losing leaves, birds migrating, ponds drying up. This builds skills of scientific observation and environmental awareness.",
          ],
          keyConcepts: [
            {
              title: "Changing Landscape",
              description: "How land looks different in different regions",
            },
            {
              title: "Diversity of India",
              description: "Varied geography, climate, and vegetation",
            },
            {
              title: "Seasonal Changes",
              description: "How surroundings change with seasons",
            },
            {
              title: "Observation Skills",
              description: "Noticing details in the environment",
            },
          ],
          importantTerms: [
            {
              term: "Landscape",
              definition: "The visible features of an area of land",
            },
            {
              term: "Vegetation",
              definition: "Plants that cover a particular area",
            },
            {
              term: "Migration",
              definition:
                "Seasonal movement of animals to find better conditions",
            },
          ],
        },
        {
          id: "4-evs-3",
          number: 3,
          name: "A River's Tale",
          subject: "EVS",
          classNum: 4,
          explanation: [
            "Rivers are the lifelines of civilizations. This chapter follows a river's journey from mountain glaciers through valleys, plains, and finally to the sea. Each stage of the river's journey has different characteristics and supports different life forms.",
            "Students learn how rivers support human settlements, agriculture, and industries. Most of India's ancient civilizations grew near rivers (Indus, Ganga) because rivers provide fresh water, fertile soil, and transportation routes.",
            "The chapter addresses river pollution — how factories, farms, and cities dump waste into rivers, harming aquatic life and making water unsafe. Students are encouraged to think about how to protect rivers for future generations.",
          ],
          keyConcepts: [
            {
              title: "River Journey",
              description: "Source → tributaries → plains → sea",
            },
            {
              title: "Rivers and Civilization",
              description: "How rivers support human life",
            },
            {
              title: "River Ecosystem",
              description: "Living things in and around rivers",
            },
            {
              title: "River Pollution",
              description: "Human activities harming rivers",
            },
          ],
          importantTerms: [
            {
              term: "Source",
              definition: "Where a river begins, often in mountains",
            },
            {
              term: "Tributary",
              definition: "A smaller river that flows into a larger river",
            },
            {
              term: "Delta",
              definition: "Fan-shaped land formed where a river meets the sea",
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
      name: "English",
      icon: "📖",
      chapters: [
        {
          id: "5-eng-1",
          number: 1,
          name: "Ice-Cream Man",
          subject: "English",
          classNum: 5,
          explanation: [
            "This delightful poem by Rachel Field describes an ice-cream man and his cart — the jingle of the bells, the colors of the ice cream, the happiness he brings. It develops sensory vocabulary and the ability to write vivid descriptions.",
            "Students learn the present tense through descriptions of what the ice-cream man does regularly. They practice simple present tense for habits and facts: 'He rings his bell,' 'Children run to him.'",
            "The poem introduces punctuation — commas in lists, apostrophes in contractions (it's, he's). These grammatical elements are taught in context rather than in isolation, making them easier to understand and remember.",
          ],
          keyConcepts: [
            {
              title: "Sensory Words",
              description: "Describing sights, sounds, tastes, and smells",
            },
            {
              title: "Simple Present Tense",
              description: "Describing habits and regular actions",
            },
            {
              title: "Vivid Description",
              description: "Using specific details to paint a picture",
            },
            {
              title: "Punctuation in Context",
              description: "Commas, apostrophes in poetry",
            },
          ],
          importantTerms: [
            {
              term: "Imagery",
              definition: "Language that creates a sensory picture",
            },
            {
              term: "Simple Present",
              definition: "Tense for habits: 'He walks to school'",
            },
            {
              term: "Apostrophe",
              definition:
                "Punctuation mark for contractions (it's) or possession (boy's)",
            },
          ],
        },
        {
          id: "5-eng-3",
          number: 3,
          name: "My Shadow",
          subject: "English",
          classNum: 5,
          explanation: [
            "Robert Louis Stevenson's classic poem explores the curious phenomenon of a shadow — how it changes size throughout the day, why it stays behind sometimes, and why the child imagines it as a companion. Scientific observation meets poetic imagination.",
            "Students learn about light and shadows as a scientific concept connected to the poem. Shadows are formed when an opaque object blocks light. Longer shadows at dawn and dusk, shorter shadows at noon — the poem captures these observations beautifully.",
            "The chapter develops skills of comparing and contrasting — the child vs the shadow, morning vs evening, reality vs imagination. Students write their own poems about natural phenomena they observe, combining science and creative writing.",
          ],
          keyConcepts: [
            {
              title: "Shadow Formation",
              description: "Opaque objects block light to form shadows",
            },
            {
              title: "Comparison Poetry",
              description: "Comparing two things to highlight differences",
            },
            {
              title: "Observation in Poetry",
              description: "Scientific observation expressed poetically",
            },
            {
              title: "Creative Writing",
              description: "Writing poems about personal observations",
            },
          ],
          importantTerms: [
            {
              term: "Shadow",
              definition: "Dark area formed when object blocks light",
            },
            { term: "Opaque", definition: "Does not let light pass through" },
            {
              term: "Stanza",
              definition: "A group of lines in a poem (like a paragraph)",
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
        {
          id: "5-evs-3",
          number: 3,
          name: "From Tasting to Digesting",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Food goes on a remarkable journey through your body. Digestion begins in the mouth, where teeth crush food and saliva softens it. The tongue helps swallow. Food travels down the esophagus to the stomach, where gastric acid and enzymes break it down into a liquid mixture.",
            "The small intestine is where most digestion and all absorption happens. Digestive juices from the liver (bile) and pancreas break down fats and proteins. Millions of tiny finger-like villi absorb nutrients into the bloodstream, which carries them to every cell in the body.",
            "The large intestine absorbs water from the remaining indigestible material. The rest passes out as solid waste. The whole process takes 24-72 hours. Understanding digestion helps children appreciate why different foods matter — proteins for growth, carbohydrates for energy, vitamins for protection.",
          ],
          keyConcepts: [
            {
              title: "Digestion Journey",
              description: "Mouth → esophagus → stomach → intestines → exit",
            },
            {
              title: "Role of Each Organ",
              description: "Mouth chews, stomach churns, intestine absorbs",
            },
            {
              title: "Nutrients and Their Functions",
              description: "Proteins, carbs, fats, vitamins",
            },
            {
              title: "Absorption",
              description: "Nutrients passing from intestine into blood",
            },
          ],
          importantTerms: [
            {
              term: "Digestion",
              definition:
                "Breaking down food into substances the body can absorb",
            },
            {
              term: "Absorption",
              definition: "Passage of digested nutrients into the bloodstream",
            },
            {
              term: "Esophagus",
              definition: "Tube connecting mouth to stomach",
            },
            { term: "Bile", definition: "Liver fluid that helps digest fats" },
          ],
        },
        {
          id: "5-evs-10",
          number: 10,
          name: "Walls Tell Stories",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "This chapter explores how ancient structures like forts, temples, mosques, and monuments tell us stories about the past. Walls, pillars, carvings, paintings, and inscriptions are historical sources. Buildings reveal what materials were available, what skills people had, and what they valued.",
            "Students learn about India's remarkable historical architecture: the Red Fort and Taj Mahal (Mughal era), Hampi temples (Vijayanagara Empire), Ajanta and Ellora caves (Buddhist and Hindu art). Each represents a different era and culture.",
            "The concept of heritage is introduced — buildings and artifacts from the past that belong to all of humanity. The UNESCO World Heritage Sites in India (Taj Mahal, Hampi, Qutub Minar, etc.) are protected for future generations. Students understand why preserving historical structures matters.",
          ],
          keyConcepts: [
            {
              title: "Buildings as Historical Sources",
              description: "What structures reveal about past societies",
            },
            {
              title: "India's Heritage Sites",
              description: "Taj Mahal, Hampi, Ajanta-Ellora caves",
            },
            {
              title: "Archaeological Preservation",
              description: "Why we protect ancient structures",
            },
            {
              title: "Architecture and Culture",
              description: "How buildings reflect their era",
            },
          ],
          importantTerms: [
            {
              term: "Heritage",
              definition:
                "Things passed down from earlier generations worth preserving",
            },
            {
              term: "UNESCO",
              definition:
                "UN organization that designates and protects World Heritage Sites",
            },
            {
              term: "Inscription",
              definition: "Writing carved on stone, metal, or walls",
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
          id: "5-math-1",
          number: 1,
          name: "The Fish Tale",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Through the story of a fishing village, students explore large numbers, estimation, and multiplication. If one fisherman catches 45 fish per day and there are 200 fishermen, how many fish are caught in a week? These practical problems show multiplication's power.",
            "Estimation is a key skill — before calculating exactly, we estimate to check if an answer is reasonable. 'About 200 × 50 = about 10,000' is faster than exact calculation and helps catch errors. Mental math strategies using rounding make everyday calculations more manageable.",
            "The chapter introduces data handling through the fishing context. Students learn to collect data (how many fish different people catch), organize it in tables, and represent it in bar graphs. These are foundational data literacy skills for the modern world.",
          ],
          keyConcepts: [
            {
              title: "Large Number Multiplication",
              description: "Multiplying 3-4 digit numbers",
            },
            {
              title: "Estimation",
              description: "Rounding to find approximate answers",
            },
            {
              title: "Data Collection",
              description: "Gathering and organizing information",
            },
            { title: "Bar Graphs", description: "Representing data visually" },
          ],
          importantTerms: [
            {
              term: "Estimation",
              definition: "An approximate calculation or judgment",
            },
            { term: "Data", definition: "Information collected for analysis" },
            {
              term: "Bar Graph",
              definition: "A chart using bars to represent quantities",
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
    {
      name: "Hindi",
      icon: "🔤",
      chapters: [
        {
          id: "6-hin-1",
          number: 1,
          name: "वह चिड़िया जो (Woh Chidiya Jo)",
          subject: "Hindi",
          classNum: 6,
          explanation: [
            "केदारनाथ अग्रवाल की यह कविता एक नीली चिड़िया का वर्णन करती है जो स्वतंत्र और निर्भीक है। वह खेतों में अनाज के दाने खाती है, नदी से पानी पीती है और जंगल में गाती है। कविता प्रकृति प्रेम और स्वतंत्रता का संदेश देती है।",
            "Students learn about metaphors in Hindi poetry — the bird represents freedom, joy, and connection to nature. Poetic devices (उपमा, रूपक) are introduced. Students identify and appreciate how poets use images to convey deeper meanings.",
            "Vocabulary related to nature — forest (जंगल), river (नदी), grain (अनाज), song (गीत) — is introduced. Students write their own short Hindi poem about an animal or bird they love, applying newly learned poetic language.",
          ],
          keyConcepts: [
            {
              title: "प्रकृति काव्य",
              description: "Nature poetry in Hindi tradition",
            },
            {
              title: "उपमा (Upma)",
              description: "Simile — comparing two things using 'like'",
            },
            {
              title: "रूपक (Roopak)",
              description: "Metaphor — directly equating two things",
            },
            {
              title: "भाव (Bhav)",
              description: "The emotional message of the poem",
            },
          ],
          importantTerms: [
            { term: "कविता (Kavita)", definition: "A poem in Hindi" },
            {
              term: "चिड़िया (Chidiya)",
              definition: "A bird; symbol of freedom in the poem",
            },
            {
              term: "स्वतंत्रता (Swatantrata)",
              definition: "Freedom; a key theme of the poem",
            },
          ],
        },
        {
          id: "6-hin-2",
          number: 2,
          name: "बचपन (Bachpan - Childhood)",
          subject: "Hindi",
          classNum: 6,
          explanation: [
            "कृष्णा सोबती की यह कहानी बचपन की यादों पर आधारित है। एक बड़ी हो चुकी महिला अपने बचपन की पसंद — कपड़े, खाना, खेल और आदतें — के बारे में बताती है। यह पाठ संस्मरण (memoir) विधा से परिचित कराता है।",
            "Students learn the concept of a memoir (संस्मरण) — first-person narrative about real personal memories. Contrasting past memories with present reality teaches students about how perspective and preferences change with age.",
            "Grammar focus: Past tense (भूतकाल) in Hindi. Students practice writing their own संस्मरण about a favourite childhood memory. This personal connection makes Hindi writing practice meaningful and enjoyable.",
          ],
          keyConcepts: [
            {
              title: "संस्मरण (Memoir)",
              description: "First-person writing about personal memories",
            },
            {
              title: "भूतकाल (Past Tense)",
              description: "Hindi verb forms for past actions",
            },
            {
              title: "बदलाव (Change)",
              description: "How preferences change as we grow",
            },
            {
              title: "वर्णनात्मक लेखन",
              description: "Descriptive writing about personal experience",
            },
          ],
          importantTerms: [
            {
              term: "संस्मरण (Smaran)",
              definition: "A piece of writing about personal memories",
            },
            {
              term: "भूतकाल (Bhootkaal)",
              definition: "Past tense in Hindi grammar",
            },
            {
              term: "आत्मकथा (Aatmakatha)",
              definition: "Autobiography — life story written by oneself",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 7 ──────────────────────────────────────────────────────────────────

const class7: NCERTClass = {
  classNum: 7,
  subjects: [
    {
      name: "Science",
      icon: "🔬",
      chapters: [
        {
          id: "7-sci-1",
          number: 1,
          name: "Nutrition in Plants",
          subject: "Science",
          classNum: 7,
          explanation: [
            "Plants are autotrophs — they make their own food through photosynthesis. The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ (glucose) + 6O₂. Chlorophyll in chloroplasts absorbs sunlight to power this process. All oxygen in Earth's atmosphere comes from photosynthesis.",
            "Not all plants are fully autotrophic. Some plants are partially or fully heterotrophic: Insectivorous plants (like Venus flytrap, pitcher plant) trap insects to get nitrogen; Parasitic plants (like Cuscuta/Amarbel) grow on other plants and steal nutrients; Saprophytes (some fungi) digest dead organic matter.",
            "Minerals from the soil are equally important as sunlight and CO₂. Nitrogen (for proteins), phosphorus (for energy), and potassium (for growth regulation) are key minerals. Farmers add fertilizers to supply these minerals when soil is depleted.",
          ],
          keyConcepts: [
            {
              title: "Photosynthesis",
              description: "CO₂ + H₂O + light → glucose + O₂ in chloroplasts",
            },
            {
              title: "Insectivorous Plants",
              description: "Trap insects to get nitrogen (Venus flytrap)",
            },
            {
              title: "Parasitic Plants",
              description: "Cuscuta steals nutrients from host plants",
            },
            {
              title: "Mineral Nutrients",
              description: "Nitrogen, phosphorus, potassium from soil",
            },
          ],
          importantTerms: [
            {
              term: "Photosynthesis",
              definition:
                "Process by which plants make food using light, CO₂, and water",
            },
            {
              term: "Chlorophyll",
              definition: "Green pigment in leaves that absorbs sunlight",
            },
            {
              term: "Autotroph",
              definition: "An organism that makes its own food",
            },
            {
              term: "Parasitic Plant",
              definition:
                "A plant that obtains nutrients from another living plant",
            },
          ],
        },
        {
          id: "7-sci-2",
          number: 2,
          name: "Nutrition in Animals",
          subject: "Science",
          classNum: 7,
          explanation: [
            "Animals cannot make their own food and must eat other organisms. The human digestive system breaks down food into simpler molecules: Mouth (chewing + salivary amylase breaks starch), Esophagus (muscular tube), Stomach (acid + pepsin breaks proteins), Small intestine (bile from liver + pancreatic enzymes complete digestion, villi absorb nutrients), Large intestine (absorbs water), Rectum and anus (eliminate waste).",
            "Nutrition in different animals shows interesting adaptations. Amoeba engulfs food by forming pseudopodia (phagocytosis). Paramecium uses cilia to sweep food into a gullet. Grasshoppers and earthworms have simpler digestive systems. Ruminants like cows have four-chambered stomachs to digest grass efficiently.",
            "Teeth are specialized for different functions: Incisors (cutting), Canines (tearing), Premolars (grinding), Molars (crushing). Carnivores have large canines; herbivores have strong molars. Humans, being omnivores, have all types. Understanding teeth helps in dental hygiene.",
          ],
          keyConcepts: [
            {
              title: "Human Digestive System",
              description:
                "Mouth → stomach → small intestine → large intestine",
            },
            {
              title: "Digestive Enzymes",
              description: "Amylase, pepsin, bile break down food",
            },
            {
              title: "Absorption",
              description:
                "Villi in small intestine absorb nutrients into blood",
            },
            {
              title: "Types of Teeth",
              description: "Incisors, canines, premolars, molars",
            },
          ],
          importantTerms: [
            {
              term: "Digestion",
              definition:
                "Breaking down food into simpler molecules the body can use",
            },
            {
              term: "Villi",
              definition:
                "Tiny finger-like projections in small intestine that absorb nutrients",
            },
            {
              term: "Enzyme",
              definition:
                "A biological molecule that speeds up chemical reactions",
            },
            {
              term: "Bile",
              definition: "Liquid produced by liver that helps digest fats",
            },
          ],
        },
        {
          id: "7-sci-5",
          number: 5,
          name: "Acids, Bases and Salts",
          subject: "Science",
          classNum: 7,
          explanation: [
            "Acids are sour-tasting substances that turn blue litmus red. Examples: hydrochloric acid (HCl) in stomach, citric acid in lemons, acetic acid in vinegar. Bases are bitter, slippery substances that turn red litmus blue. Examples: sodium hydroxide (NaOH), calcium hydroxide (lime), baking soda. The pH scale (0-14) measures acidity: below 7 is acidic, 7 is neutral, above 7 is basic.",
            "Indicators are substances that change color in acids and bases — litmus (red in acid, blue in base), turmeric (yellow in neutral, red-brown in base), and phenolphthalein (colorless in acid, pink in base). Natural indicators from plants (red cabbage, turmeric) can be used in simple experiments.",
            "Neutralization is the reaction between an acid and a base to form salt and water: Acid + Base → Salt + Water. This has practical uses — treating acid indigestion with antacids (base), adding lime to acidic soil, using baking soda on bee stings (acidic). Understanding acids and bases is fundamental to chemistry.",
          ],
          keyConcepts: [
            {
              title: "Acids",
              description: "Sour, turn blue litmus red, pH < 7",
            },
            {
              title: "Bases (Alkalis)",
              description: "Bitter, slippery, turn red litmus blue, pH > 7",
            },
            {
              title: "Indicators",
              description: "Substances that show if solution is acid or base",
            },
            {
              title: "Neutralization",
              description: "Acid + Base → Salt + Water",
            },
          ],
          importantTerms: [
            {
              term: "pH Scale",
              definition:
                "Scale from 0-14 measuring acidity/basicity of a solution",
            },
            {
              term: "Neutralization",
              definition: "Reaction of acid and base to form salt and water",
            },
            {
              term: "Indicator",
              definition:
                "A substance that shows presence of acid or base by color change",
            },
            {
              term: "Antacid",
              definition: "A base used to neutralize excess stomach acid",
            },
          ],
        },
        {
          id: "7-sci-13",
          number: 13,
          name: "Motion and Time",
          subject: "Science",
          classNum: 7,
          explanation: [
            "Motion is the change in position of an object with time. The speed of an object measures how fast it moves: Speed = Distance ÷ Time. The SI unit of speed is metres per second (m/s). The speedometer in a vehicle measures speed. Time is measured using clocks — sundials were the earliest clocks, followed by water clocks, sand clocks, and modern mechanical and digital clocks.",
            "Distance-time graphs are powerful tools to visualize motion. A horizontal line indicates the object is at rest; a sloping line indicates motion; a steeper slope means higher speed. If the line is straight (uniform slope), speed is constant (uniform motion). A curved line indicates changing speed (non-uniform motion).",
            "Period of a pendulum is the time taken for one complete swing. This was the principle behind pendulum clocks invented by Galileo and improved by Huygens. Simple harmonic motion (back-and-forth oscillation) has numerous applications from clock mechanisms to bridges and even earthquakes.",
          ],
          keyConcepts: [
            {
              title: "Speed Formula",
              description: "Speed = Distance ÷ Time (m/s)",
            },
            {
              title: "Distance-Time Graphs",
              description: "Slope shows speed; steeper = faster",
            },
            {
              title: "Uniform Motion",
              description:
                "Constant speed; straight line on distance-time graph",
            },
            {
              title: "Pendulum",
              description: "Regular oscillation used in timekeeping",
            },
          ],
          importantTerms: [
            { term: "Speed", definition: "Distance traveled per unit time" },
            {
              term: "Uniform Motion",
              definition: "Movement at constant speed in a straight line",
            },
            {
              term: "Oscillation",
              definition: "Back-and-forth movement about a central position",
            },
            {
              term: "Period",
              definition: "Time taken for one complete oscillation",
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
          id: "7-math-1",
          number: 1,
          name: "Integers",
          subject: "Mathematics",
          classNum: 7,
          explanation: [
            "Integers include all whole numbers, their negatives, and zero: {..., -3, -2, -1, 0, 1, 2, 3, ...}. They are needed to represent quantities below zero — temperature below freezing (-5°C), debt (-₹200), below sea level (-50 m). The number line extends infinitely in both directions.",
            "Addition and subtraction of integers follow rules: Adding a negative is like subtracting, and subtracting a negative is like adding. For example, -3 + (-2) = -5 (move further left on number line), and -3 - (-2) = -3 + 2 = -1 (subtracting a negative flips direction).",
            "Multiplication and division rules: positive × positive = positive, negative × negative = positive, positive × negative = negative. This means (-3) × (-4) = +12 and (-3) × 4 = -12. These rules are essential for all algebraic operations in higher classes.",
          ],
          keyConcepts: [
            {
              title: "Number Line",
              description: "Integers shown on a line extending both directions",
            },
            {
              title: "Adding Integers",
              description: "Rules for adding positive and negative numbers",
            },
            {
              title: "Multiplying Integers",
              description: "Same signs → positive; different signs → negative",
            },
            {
              title: "Real-Life Integers",
              description: "Temperature, altitude, debt use negative integers",
            },
          ],
          importantTerms: [
            {
              term: "Integer",
              definition: "Whole numbers including negatives and zero",
            },
            {
              term: "Absolute Value",
              definition: "The distance of a number from zero; always positive",
            },
            {
              term: "Additive Inverse",
              definition:
                "The number that when added gives zero (e.g., -5 is inverse of 5)",
            },
          ],
        },
        {
          id: "7-math-2",
          number: 2,
          name: "Fractions and Decimals",
          subject: "Mathematics",
          classNum: 7,
          explanation: [
            "Multiplication of fractions: multiply numerators and multiply denominators. (2/3) × (3/4) = 6/12 = 1/2. 'Of' in math means multiplication: 1/2 of 16 = 8. The product of two proper fractions is smaller than either fraction, which may seem surprising but makes intuitive sense (e.g., half of a quarter is less than a quarter).",
            "Division of fractions uses the reciprocal: (a/b) ÷ (c/d) = (a/b) × (d/c). To divide by a fraction, multiply by its reciprocal. This can be understood as asking 'how many times does c/d fit into a/b?' Real-world applications include dividing recipes.",
            "Decimal multiplication and division follow place value rules. Multiplying by 10, 100, 1000 shifts decimal point right; dividing shifts it left. Multiplying 3.25 × 10 = 32.5. Understanding this makes calculations much faster than long multiplication.",
          ],
          keyConcepts: [
            {
              title: "Fraction Multiplication",
              description: "Multiply numerators, multiply denominators",
            },
            {
              title: "Fraction Division",
              description: "Multiply by the reciprocal of the divisor",
            },
            {
              title: "Decimal Place Value",
              description: "Tenths, hundredths, thousandths",
            },
            {
              title: "Multiplying Decimals",
              description: "Multiply as integers, then place decimal point",
            },
          ],
          importantTerms: [
            {
              term: "Reciprocal",
              definition: "The inverse of a fraction: reciprocal of a/b is b/a",
            },
            {
              term: "Proper Fraction",
              definition: "A fraction where numerator is less than denominator",
            },
            {
              term: "Improper Fraction",
              definition:
                "A fraction where numerator is greater than denominator",
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
          id: "7-sst-1",
          number: 1,
          name: "Tracing Changes Through a Thousand Years",
          subject: "Social Science",
          classNum: 7,
          explanation: [
            "This chapter examines India from 700 CE to 1750 CE — a period of dramatic change. Historians use a variety of sources: manuscripts (handwritten texts), inscriptions, coins, paintings, architecture, and travellers' accounts. Each source has biases and limitations, so historians compare multiple sources to build reliable accounts.",
            "The nature of regions changed significantly — new kingdoms rose and fell, religions and cultures mixed, and foreign influences arrived. The term 'Hindu' was coined by outsiders to describe all people east of the Indus river, not a religious community. Similarly, 'India' evolved from the Greek 'Indika.'",
            "Cartography (mapmaking) improved dramatically in this period. Early medieval maps placed east at the top (where the sun rises), not north. Arabic maps were sometimes drawn with south at the top. Understanding how maps reflect the knowledge and perspective of their makers is a key historical thinking skill.",
          ],
          keyConcepts: [
            {
              title: "Historical Sources",
              description:
                "Manuscripts, coins, inscriptions, travellers' accounts",
            },
            {
              title: "Changing Terminologies",
              description: "How words like 'Hindu' and 'India' evolved",
            },
            {
              title: "Medieval Cartography",
              description: "Early maps and their orientations",
            },
            {
              title: "Source Evaluation",
              description:
                "Questioning bias and reliability of historical sources",
            },
          ],
          importantTerms: [
            {
              term: "Manuscript",
              definition: "A handwritten document from the past",
            },
            {
              term: "Inscription",
              definition: "Writing carved on hard surfaces like stone or metal",
            },
            {
              term: "Cartography",
              definition: "The science and art of making maps",
            },
          ],
        },
        {
          id: "7-sst-2",
          number: 2,
          name: "New Kings and Kingdoms",
          subject: "Social Science",
          classNum: 7,
          explanation: [
            "Between 700-1200 CE, new kingdoms emerged across the Indian subcontinent. The Rashtrakutas of the Deccan, the Gurjara-Pratiharas of northern India, and the Palas of eastern India were the three main powers constantly fighting over the Gangetic plain and its resources.",
            "The tripartite struggle over Kannauj (a powerful city controlling trade routes) lasted for centuries. Each kingdom wanted to control this wealthy city, showing how territorial control = economic and political power. This understanding helps explain why battles were fought.",
            "The concept of 'Rajput' emerged in this period — warrior chiefs who legitimized themselves through genealogies connecting them to solar and lunar dynasties. Poetry, literature, and temples were used to glorify kings. Royal courts supported artists, poets, and scholars to enhance royal prestige.",
          ],
          keyConcepts: [
            {
              title: "Three Kingdoms",
              description: "Rashtrakutas, Gurjara-Pratiharas, and Palas",
            },
            {
              title: "Tripartite Struggle",
              description: "Contest over Kannauj and Gangetic plain",
            },
            {
              title: "Rajput Clans",
              description: "Warrior chiefs with solar/lunar lineage claims",
            },
            {
              title: "Royal Patronage",
              description: "Kings supporting art, architecture, and scholars",
            },
          ],
          importantTerms: [
            {
              term: "Tripartite Struggle",
              definition: "Three-way conflict for control of northern India",
            },
            {
              term: "Prashasti",
              definition: "Sanskrit eulogy praising a king's achievements",
            },
            {
              term: "Genealogy",
              definition: "A record of family descent and ancestry",
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
          id: "7-eng-1",
          number: 1,
          name: "Three Questions",
          subject: "English",
          classNum: 7,
          explanation: [
            "Leo Tolstoy's philosophical story follows a king who wants answers to three questions: What is the best time to do things? Who are the most important people? What is the most important thing to do? He visits a wise hermit to find the answers.",
            "Through the story's events — the king helping the wounded enemy and the hermit — the answers emerge naturally: The most important time is now; The most important person is the one you are with; The most important thing is to do good to that person. The story is a parable about mindfulness and compassion.",
            "Students learn to identify the moral of a story and analyze how the author conveys a message through plot and character rather than stating it directly. This critical reading skill is central to literary analysis.",
          ],
          keyConcepts: [
            {
              title: "Parable",
              description: "A short story with a moral lesson",
            },
            {
              title: "Theme of Mindfulness",
              description: "Focusing on the present moment and person",
            },
            {
              title: "Moral of a Story",
              description: "The underlying lesson or message",
            },
            {
              title: "Character Analysis",
              description: "Understanding the king, hermit, and enemy",
            },
          ],
          importantTerms: [
            {
              term: "Parable",
              definition: "A simple story used to illustrate a moral lesson",
            },
            {
              term: "Moral",
              definition: "A lesson about right and wrong behavior",
            },
            {
              term: "Compassion",
              definition: "Feeling concern for and wanting to help others",
            },
          ],
        },
      ],
    },
  ],
};

// ─── Class 8 ──────────────────────────────────────────────────────────────────

const class8: NCERTClass = {
  classNum: 8,
  subjects: [
    {
      name: "Science",
      icon: "🔬",
      chapters: [
        {
          id: "8-sci-1",
          number: 1,
          name: "Crop Production and Management",
          subject: "Science",
          classNum: 8,
          explanation: [
            "Agriculture is the backbone of India's economy. The food we eat comes from crops — plants grown in large quantities for food, fiber, or fuel. Kharif crops (paddy, maize, cotton, soybean) are grown in the rainy season (June-September). Rabi crops (wheat, mustard, peas, gram) are grown in winter (November-April). Both need different care.",
            "Good farming practices include: Tilling/Ploughing (loosening soil to improve aeration and drainage), Sowing (planting seeds at proper depth and spacing), Irrigation (supplying water), Weeding (removing unwanted plants), Harvesting (cutting mature crops), Threshing (separating grain from stalks), and Winnowing (separating grain from chaff).",
            "Modern agriculture uses fertilizers and pesticides. Chemical fertilizers (NPK) provide nutrients quickly but can harm soil over time. Organic manure (compost, animal waste) improves soil structure. Overuse of pesticides can harm beneficial insects and pollute water. Sustainable farming balances productivity with environmental health.",
          ],
          keyConcepts: [
            {
              title: "Kharif and Rabi Crops",
              description: "Seasonal classification of crops",
            },
            {
              title: "Agricultural Practices",
              description: "Ploughing, sowing, irrigation, harvesting",
            },
            {
              title: "Fertilizers vs Manure",
              description: "Chemical vs organic soil nutrients",
            },
            {
              title: "Storage and Silos",
              description: "Protecting harvested grain from pests",
            },
          ],
          importantTerms: [
            {
              term: "Kharif Crop",
              definition:
                "Crops grown in rainy season (June-September): paddy, maize",
            },
            {
              term: "Rabi Crop",
              definition:
                "Crops grown in winter season (Nov-April): wheat, mustard",
            },
            {
              term: "Irrigation",
              definition: "Artificial supply of water to agricultural land",
            },
            {
              term: "Threshing",
              definition:
                "Separating grain seeds from the stalks of harvested crops",
            },
          ],
        },
        {
          id: "8-sci-6",
          number: 6,
          name: "Combustion and Flame",
          subject: "Science",
          classNum: 8,
          explanation: [
            "Combustion is the chemical reaction between a substance and oxygen that produces heat and light. For combustion to occur, three conditions are needed: fuel (combustible substance), oxygen (from air), and ignition temperature (minimum temperature to start burning). Removing any one of these stops a fire — the basis of fire extinguishing.",
            "Flames are produced when gaseous fuels or vapors burn. A candle flame has three zones: the innermost blue zone (unburnt gas), the middle yellow zone (partial combustion), and the outer blue zone (complete combustion, hottest). The yellow color of flames is caused by tiny carbon particles that glow when heated.",
            "Fuels are classified by their properties. Calorific value measures the heat produced per kg of fuel — LPG has high calorific value (~47,000 kJ/kg), wood has lower (~17,000 kJ/kg). Burning fuels release greenhouse gases (CO₂) and harmful gases (CO, SO₂, NO₂). Understanding combustion is essential for energy management and environmental protection.",
          ],
          keyConcepts: [
            {
              title: "Conditions for Combustion",
              description: "Fuel + Oxygen + Ignition temperature",
            },
            {
              title: "Structure of a Flame",
              description: "Three zones: inner blue, middle, outer blue",
            },
            {
              title: "Calorific Value",
              description: "Heat energy in fuel per kilogram",
            },
            {
              title: "Fuel Combustion Pollution",
              description: "CO₂, CO, SO₂ produced by burning fuels",
            },
          ],
          importantTerms: [
            {
              term: "Combustion",
              definition:
                "Chemical reaction of fuel with oxygen, releasing heat and light",
            },
            {
              term: "Ignition Temperature",
              definition: "Minimum temperature needed to start combustion",
            },
            {
              term: "Calorific Value",
              definition: "Amount of heat produced by burning 1 kg of fuel",
            },
            {
              term: "Fuel",
              definition: "A substance that burns to produce heat energy",
            },
          ],
        },
        {
          id: "8-sci-11",
          number: 11,
          name: "Force and Pressure",
          subject: "Science",
          classNum: 8,
          explanation: [
            "A force is a push or pull that can change the speed, direction, or shape of an object. Forces can be contact forces (friction, muscular force, normal reaction) or non-contact forces (gravity, magnetic force, electrostatic force). The SI unit of force is Newton (N). Multiple forces acting on an object combine into a net force.",
            "Pressure is the force applied per unit area: Pressure = Force/Area. This explains why a knife cuts easily (small area = high pressure) while snowshoes prevent sinking in snow (large area = low pressure). Atmospheric pressure — the weight of air pressing down on us — is about 101,325 Pa at sea level but decreases at higher altitudes.",
            "Liquids exert pressure in all directions — this is Pascal's Law, the basis of hydraulic systems (brakes, presses, cranes). The pressure at a point in a liquid depends on the depth and density of the liquid. Archimedes' principle — objects submerged in a fluid experience an upward buoyant force equal to the weight of displaced fluid — explains why ships float.",
          ],
          keyConcepts: [
            {
              title: "Types of Forces",
              description:
                "Contact (friction, muscular) vs non-contact (gravity, magnetic)",
            },
            {
              title: "Pressure Formula",
              description: "Pressure = Force ÷ Area; unit is Pascal (Pa)",
            },
            {
              title: "Atmospheric Pressure",
              description: "Weight of air pressing on Earth's surface",
            },
            {
              title: "Pressure in Liquids",
              description: "Increases with depth; Pascal's Law",
            },
          ],
          importantTerms: [
            {
              term: "Force",
              definition:
                "A push or pull that changes an object's motion or shape",
            },
            {
              term: "Pressure",
              definition: "Force exerted per unit area; measured in Pascals",
            },
            {
              term: "Atmospheric Pressure",
              definition: "Pressure exerted by the weight of the atmosphere",
            },
            {
              term: "Buoyancy",
              definition:
                "Upward force exerted by a fluid on a submerged object",
            },
          ],
        },
        {
          id: "8-sci-12",
          number: 12,
          name: "Friction",
          subject: "Science",
          classNum: 8,
          explanation: [
            "Friction is the force that opposes the relative motion of two surfaces in contact. It acts in the direction opposite to the direction of motion or attempted motion. Without friction, we could not walk, write, or drive — friction is both a nuisance and a necessity. Friction acts even between surfaces that appear smooth, because all surfaces have microscopic irregularities.",
            "Types of friction: Static friction (prevents stationary objects from moving); Sliding (kinetic) friction (opposes motion while object slides); Rolling friction (when object rolls, e.g., wheels); Fluid friction/drag (resistance in air or water). Rolling friction is much less than sliding friction — that's why wheels were such a revolutionary invention.",
            "Friction can be reduced (for efficiency) using lubricants (oil, grease), smooth/polished surfaces, ball bearings (converting sliding to rolling), and streamlining (reducing fluid drag). Friction is increased (for safety and grip) using rough surfaces (tire treads), sand on icy roads, and rubber soles on shoes.",
          ],
          keyConcepts: [
            {
              title: "Types of Friction",
              description: "Static, sliding, rolling, and fluid friction",
            },
            {
              title: "Friction as Force",
              description:
                "Opposes relative motion; acts against movement direction",
            },
            {
              title: "Reducing Friction",
              description: "Lubricants, smooth surfaces, ball bearings",
            },
            {
              title: "Increasing Friction",
              description: "Rough surfaces, tire treads, rubber soles",
            },
          ],
          importantTerms: [
            {
              term: "Friction",
              definition:
                "Force that opposes relative motion between two surfaces",
            },
            {
              term: "Lubricant",
              definition:
                "A substance (oil, grease) that reduces friction between surfaces",
            },
            {
              term: "Drag",
              definition:
                "Friction force exerted by fluids (air, water) on moving objects",
            },
            {
              term: "Rolling Friction",
              definition:
                "Friction when one surface rolls on another; less than sliding friction",
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
          id: "8-math-1",
          number: 1,
          name: "Rational Numbers",
          subject: "Mathematics",
          classNum: 8,
          explanation: [
            "Rational numbers are numbers that can be expressed in the form p/q where p and q are integers and q ≠ 0. This includes integers (5 = 5/1), fractions (3/4), and terminating/repeating decimals (0.5 = 1/2, 0.333... = 1/3). Irrational numbers like √2 and π cannot be expressed as p/q.",
            "Properties of rational numbers: Closure (any operation on two rational numbers gives a rational number, except division by zero), Commutativity (a + b = b + a, a × b = b × a), Associativity ((a+b)+c = a+(b+c)), Distributivity (a×(b+c) = a×b + a×c). These properties, shared with real numbers, form the foundation of algebra.",
            "Between any two rational numbers, there are infinitely many rational numbers. For example, between 1/3 and 1/2, we have 2/5, 5/12, etc. This property (density) distinguishes rationals from integers, where there is nothing between 3 and 4.",
          ],
          keyConcepts: [
            {
              title: "Definition",
              description: "p/q form where p,q are integers and q≠0",
            },
            {
              title: "Properties",
              description:
                "Closure, commutativity, associativity, distributivity",
            },
            {
              title: "Number Line",
              description: "Rational numbers densely fill the number line",
            },
            {
              title: "Operations",
              description:
                "Adding, subtracting, multiplying, dividing rationals",
            },
          ],
          importantTerms: [
            {
              term: "Rational Number",
              definition:
                "Any number expressible as p/q where p,q are integers, q≠0",
            },
            {
              term: "Closure Property",
              definition:
                "Operations on rational numbers give rational numbers",
            },
            {
              term: "Additive Identity",
              definition: "Zero; adding 0 to any number leaves it unchanged",
            },
          ],
        },
        {
          id: "8-math-2",
          number: 2,
          name: "Linear Equations in One Variable",
          subject: "Mathematics",
          classNum: 8,
          explanation: [
            "A linear equation is an equation where the variable has degree 1 (x, not x²). Examples: 3x + 5 = 14, 2x/3 = 8. The goal is to isolate the variable on one side by performing the same operation on both sides (maintaining equality). Solving: 3x + 5 = 14 → 3x = 9 → x = 3.",
            "Linear equations with variables on both sides: Collect variable terms on one side and constant terms on the other. For example: 5x - 2 = 3x + 8 → 5x - 3x = 8 + 2 → 2x = 10 → x = 5. Always verify by substituting the answer back into the original equation.",
            "Real-life applications are extensive: age problems (if Rahul is twice Priya's age and together they are 36, find each age), money problems (coins of different denominations totalling a certain amount), speed-time-distance problems. Word problems require translating sentences into mathematical equations.",
          ],
          keyConcepts: [
            {
              title: "Solving Linear Equations",
              description: "Isolate variable by inverse operations",
            },
            {
              title: "Variables on Both Sides",
              description: "Collect like terms to solve",
            },
            {
              title: "Verification",
              description: "Substituting answer back to check correctness",
            },
            {
              title: "Word Problems",
              description: "Translating real situations into equations",
            },
          ],
          importantTerms: [
            {
              term: "Linear Equation",
              definition: "An equation where the variable has degree 1",
            },
            {
              term: "Solution",
              definition:
                "The value of the variable that satisfies the equation",
            },
            {
              term: "Transposing",
              definition:
                "Moving a term from one side of the equation to the other",
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
          id: "8-sst-1",
          number: 1,
          name: "How, When and Where",
          subject: "Social Science",
          classNum: 8,
          explanation: [
            "Modern history of India begins with the arrival of the British East India Company in the early 17th century. The chapter examines how historians periodize the past. The British divided Indian history into Hindu, Muslim, and British periods, which has been criticized as oversimplified and communally biased. More useful divisions focus on economic and social changes.",
            "Dates in history mark events but can mislead — 1757 (Battle of Plassey) is often given as the start of British rule, but British influence was present before and took decades to consolidate. Historical processes are gradual, not sudden. Learning to question historical periodization is a critical thinking skill.",
            "Sources for modern Indian history are more abundant than for ancient history: official records (East India Company documents), private accounts (letters, diaries), newspapers, photographs, maps, and oral testimonies. Each source reflects the perspective of its creator. Colonial records were written from a British perspective and may underrepresent Indian voices.",
          ],
          keyConcepts: [
            {
              title: "Periodization",
              description:
                "Dividing history into periods has advantages and biases",
            },
            {
              title: "Colonial Records",
              description:
                "British documents as historical sources; their limitations",
            },
            {
              title: "Multiple Perspectives",
              description:
                "Same event described differently by different people",
            },
            {
              title: "Official vs Personal Records",
              description: "Government documents vs diaries and letters",
            },
          ],
          importantTerms: [
            {
              term: "Periodization",
              definition: "Dividing history into distinct periods or ages",
            },
            {
              term: "Colony",
              definition:
                "A territory under political control of another country",
            },
            {
              term: "Archive",
              definition: "A collection of historical documents and records",
            },
          ],
        },
        {
          id: "8-sst-5",
          number: 5,
          name: "When People Rebel (1857 and After)",
          subject: "Social Science",
          classNum: 8,
          explanation: [
            "The Revolt of 1857 (also called the Sepoy Mutiny by British, or First War of Independence by Indians) was the most widespread armed uprising against British rule. It began in Meerut on May 10, 1857 when sepoys refused to use greased cartridges (rumored to contain cow and pig fat, offensive to Hindus and Muslims respectively).",
            "The revolt spread rapidly — Nana Saheb in Kanpur, Begum Hazrat Mahal in Lucknow, Rani Lakshmi Bai in Jhansi, Tantia Tope coordinating military actions, and Khan Bahadur Khan in Bareilly. Delhi became the center of resistance, with the last Mughal Emperor Bahadur Shah Zafar proclaimed leader. The British suppressed the revolt brutally by late 1858.",
            "After 1857, the British government took direct control from the East India Company. Queen Victoria became the Empress of India. The British changed many policies: no interference with religious customs, promised to respect existing rulers, and increased British officers in the army. But political power remained firmly with the British, seeding nationalist movements.",
          ],
          keyConcepts: [
            {
              title: "Causes of 1857 Revolt",
              description:
                "Greased cartridges, annexations, cultural interference",
            },
            {
              title: "Key Leaders",
              description:
                "Rani Lakshmi Bai, Nana Saheb, Tantia Tope, Bahadur Shah",
            },
            {
              title: "Suppression and Aftermath",
              description: "British regained control by 1858",
            },
            {
              title: "Changes After 1857",
              description: "Crown rule replaced Company rule",
            },
          ],
          importantTerms: [
            {
              term: "Sepoy",
              definition:
                "Indian soldier employed by the British East India Company",
            },
            {
              term: "Doctrine of Lapse",
              definition:
                "British policy of annexing states without a male heir",
            },
            {
              term: "Crown Rule",
              definition:
                "British government (Queen Victoria) taking direct control from Company",
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
          id: "8-eng-1",
          number: 1,
          name: "The Best Christmas Present in the World",
          subject: "English",
          classNum: 8,
          explanation: [
            "Michael Morpurgo's moving story is set during World War I. The narrator finds an old writing desk and hidden inside, a letter written by a British soldier named Jim to his wife Connie. The letter describes the Christmas truce of 1914, when British and German soldiers temporarily stopped fighting to celebrate Christmas together.",
            "The story within the story (Jim's letter) describes a miraculous moment of peace in the horror of war. German and British soldiers exchanged gifts, played football, and embraced as human beings before returning to trenches the next day. This historical event is movingly depicted to show humanity's capacity for kindness even in conflict.",
            "Students analyze multiple narrative layers (present story + embedded letter), historical context, emotional themes, and characterization. The story challenges the idea of enemies as purely evil and explores shared humanity. Reading it develops empathy and historical consciousness.",
          ],
          keyConcepts: [
            {
              title: "World War I Context",
              description: "Trenches, Christmas truce of 1914",
            },
            {
              title: "Nested Narrative",
              description: "A story within a story structure",
            },
            {
              title: "Humanity in War",
              description: "Soldiers' shared humanity despite conflict",
            },
            {
              title: "Characterization",
              description: "Jim and Connie as symbols of love and longing",
            },
          ],
          importantTerms: [
            {
              term: "Truce",
              definition: "A temporary agreement to stop fighting",
            },
            {
              term: "Nested Narrative",
              definition: "A story told within another story",
            },
            {
              term: "Characterization",
              definition: "How an author creates and develops characters",
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
          id: "9-sci-5",
          number: 5,
          name: "The Fundamental Unit of Life",
          subject: "Science",
          classNum: 9,
          explanation: [
            "The cell is the basic structural and functional unit of all living organisms. Robert Hooke first observed cells in 1665 using a cork slice. All cells come from pre-existing cells (cell theory). Cells are of two types: Prokaryotic (bacteria — no nucleus, cell division by fission) and Eukaryotic (plants, animals, fungi — have nucleus, complex organelles).",
            "Key organelles in eukaryotic cells: Nucleus (contains DNA, controls all cell activities); Cell membrane (selective barrier, controls what enters/exits); Cytoplasm (jelly-like fluid containing organelles); Mitochondria (ATP production); Plastids in plants (chloroplasts for photosynthesis, leucoplasts for storage, chromoplasts for color); Vacuole (storage; plant cells have one large central vacuole); Endoplasmic Reticulum (ER); Golgi apparatus (packaging and secretion).",
            "Plant cells differ from animal cells: Plant cells have cell wall (cellulose — rigid support), large central vacuole (stores water and maintains turgor), and chloroplasts. Animal cells have centrioles (for cell division), smaller vacuoles, and lysosomes (digestive organelles called 'suicidal bags' because they can destroy the cell if ruptured).",
          ],
          keyConcepts: [
            {
              title: "Cell Theory",
              description: "All life is made of cells; cells arise from cells",
            },
            {
              title: "Prokaryote vs Eukaryote",
              description: "No nucleus vs true nucleus",
            },
            {
              title: "Cell Organelles",
              description: "Nucleus, mitochondria, chloroplast, ER, Golgi",
            },
            {
              title: "Plant vs Animal Cells",
              description: "Cell wall, vacuole, chloroplast differences",
            },
          ],
          importantTerms: [
            {
              term: "Cell Wall",
              definition: "Rigid outer layer of plant cells made of cellulose",
            },
            {
              term: "Mitochondria",
              definition:
                "Organelle producing energy (ATP); 'powerhouse of the cell'",
            },
            {
              term: "Lysosome",
              definition:
                "Organelle containing digestive enzymes; 'suicidal bag'",
            },
            {
              term: "Chloroplast",
              definition: "Plant organelle with chlorophyll for photosynthesis",
            },
          ],
          videoKeyword: "cell",
        },
        {
          id: "9-sci-8",
          number: 8,
          name: "Motion",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Motion is the change in position of an object. Key quantities: Distance (total path length, scalar) vs Displacement (shortest path from start to end, vector). Speed (distance/time, scalar) vs Velocity (displacement/time, vector). A car going around a circular track may have zero displacement (back to start) but a large distance traveled.",
            "Uniform motion: constant velocity (straight line, same speed). Non-uniform motion: changing velocity (acceleration present). Equations of uniformly accelerated motion: v = u + at; s = ut + ½at²; v² = u² + 2as. Here, u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement.",
            "Graphs are powerful tools for analyzing motion. Velocity-time graphs: slope = acceleration (horizontal line = uniform motion, sloped line = uniform acceleration, curved = non-uniform acceleration). The area under a velocity-time graph = displacement. Distance-time graphs: slope = speed. These mathematical interpretations build analytical skills.",
          ],
          keyConcepts: [
            {
              title: "Distance vs Displacement",
              description: "Path length (scalar) vs shortest path (vector)",
            },
            {
              title: "Speed vs Velocity",
              description: "Speed has no direction; velocity has direction",
            },
            {
              title: "Equations of Motion",
              description: "v=u+at, s=ut+½at², v²=u²+2as",
            },
            {
              title: "Motion Graphs",
              description:
                "Interpreting distance-time and velocity-time graphs",
            },
          ],
          importantTerms: [
            {
              term: "Acceleration",
              definition: "Rate of change of velocity; a = (v-u)/t; unit: m/s²",
            },
            {
              term: "Displacement",
              definition: "Change in position with direction; vector quantity",
            },
            {
              term: "Uniform Motion",
              definition: "Equal displacement in equal intervals of time",
            },
          ],
          videoKeyword: "newton",
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
        {
          id: "9-math-2",
          number: 2,
          name: "Polynomials",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "A polynomial is an algebraic expression with one or more terms involving variables raised to non-negative integer powers. Examples: 2x + 3 (linear, degree 1), x² - 5x + 6 (quadratic, degree 2), x³ + 2x² - x - 2 (cubic, degree 3). The degree is the highest power of the variable. The coefficient of the highest degree term is the leading coefficient.",
            "Key theorems: The Remainder Theorem states that when a polynomial p(x) is divided by (x - a), the remainder is p(a). This allows us to find remainders without long division. The Factor Theorem states (x - a) is a factor of p(x) if and only if p(a) = 0. These theorems are powerful tools for factoring polynomials.",
            "Algebraic identities are essential shortcuts: (a+b)² = a² + 2ab + b²; (a-b)² = a² - 2ab + b²; (a+b)(a-b) = a² - b²; (a+b)³ = a³ + 3a²b + 3ab² + b³; a³ + b³ = (a+b)(a² - ab + b²). These identities reduce complex calculations to simple substitutions.",
          ],
          keyConcepts: [
            {
              title: "Degree of Polynomial",
              description: "Highest power of variable; determines type",
            },
            {
              title: "Remainder Theorem",
              description: "Remainder when divided by (x-a) equals p(a)",
            },
            {
              title: "Factor Theorem",
              description: "(x-a) is factor if p(a) = 0",
            },
            {
              title: "Algebraic Identities",
              description: "Useful formulas for expansion and factorisation",
            },
          ],
          importantTerms: [
            {
              term: "Polynomial",
              definition:
                "Algebraic expression with non-negative integer powers",
            },
            {
              term: "Zero of a Polynomial",
              definition: "Value of x that makes the polynomial equal to zero",
            },
            {
              term: "Degree",
              definition: "The highest power of the variable in a polynomial",
            },
          ],
        },
        {
          id: "9-math-7",
          number: 7,
          name: "Triangles",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Congruent triangles are exactly the same in shape and size — one can be superimposed on the other. Congruence conditions: SSS (all three sides equal), SAS (two sides and included angle), ASA (two angles and included side), AAS (two angles and non-included side), RHS (right angle, hypotenuse, side for right triangles). Only these specific combinations guarantee congruence.",
            "Properties of triangles: Sum of all angles = 180°; Exterior angle = sum of two non-adjacent interior angles; The side opposite the largest angle is the longest; Triangle inequality: sum of any two sides > third side. The Pythagorean theorem (a² + b² = c² for right triangles) is one of mathematics' most important relationships.",
            "Similar triangles have the same shape but different sizes — corresponding angles are equal and corresponding sides are proportional. Similarity conditions: AA (two pairs of equal angles), SSS (sides in same ratio), SAS (two sides in ratio with included angle). Applications include finding heights of tall buildings and distances across rivers.",
          ],
          keyConcepts: [
            {
              title: "Congruence Criteria",
              description: "SSS, SAS, ASA, AAS, RHS conditions",
            },
            {
              title: "Triangle Properties",
              description: "Angle sum = 180°, triangle inequality",
            },
            {
              title: "Pythagoras Theorem",
              description: "a² + b² = c² for right triangles",
            },
            {
              title: "Similar Triangles",
              description: "Same shape, proportional sides",
            },
          ],
          importantTerms: [
            {
              term: "Congruent",
              definition:
                "Identical in shape and size; can be superimposed exactly",
            },
            {
              term: "Similar",
              definition:
                "Same shape but different size; corresponding angles equal",
            },
            {
              term: "Hypotenuse",
              definition:
                "Longest side of a right triangle, opposite the right angle",
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
        {
          id: "11-bio-16",
          number: 16,
          name: "Digestion and Absorption",
          subject: "Biology",
          classNum: 11,
          explanation: [
            "The human digestive system comprises the alimentary canal and accessory glands. The canal: Mouth (ingestion, mechanical and chemical digestion begins — salivary amylase acts on starch) → Pharynx → Esophagus (peristalsis) → Stomach (HCl + pepsin digest proteins; HCl creates acidic pH 2, kills bacteria) → Small intestine (duodenum + jejunum + ileum — main digestion and absorption occur here).",
            "Bile from the liver (stored in gall bladder) emulsifies fats into small droplets (increases surface area for lipase). Pancreatic juice contains trypsin, lipase, and amylase. The intestinal wall secretes peptidases, maltase, sucrase, and lactase. Together, these enzymes complete digestion of all nutrients into absorbable forms.",
            "Absorption occurs through the microvilli (brush border) of intestinal epithelial cells. Glucose and amino acids are absorbed by active transport into blood capillaries, then to liver via portal vein. Fatty acids and glycerol enter lacteals (lymph vessels) as chylomicrons. The large intestine absorbs water and electrolytes; remaining matter is compacted and egested.",
          ],
          keyConcepts: [
            {
              title: "Digestion Organs",
              description: "Mouth, stomach, small intestine, large intestine",
            },
            {
              title: "Digestive Enzymes",
              description:
                "Amylase, pepsin, trypsin, lipase and their substrates",
            },
            {
              title: "Role of Liver and Pancreas",
              description: "Bile and pancreatic juice in digestion",
            },
            {
              title: "Absorption Mechanisms",
              description: "Active transport, passive, fatty acid absorption",
            },
          ],
          importantTerms: [
            {
              term: "Peristalsis",
              definition:
                "Wave-like muscle contractions that move food through digestive tract",
            },
            {
              term: "Chyme",
              definition:
                "Semi-liquid mass of partly digested food leaving the stomach",
            },
            {
              term: "Villus",
              definition:
                "Finger-like projection of small intestine wall for absorption",
            },
            {
              term: "Emulsification",
              definition:
                "Breaking fats into tiny droplets (by bile) for easier digestion",
            },
          ],
          videoKeyword: "digestion",
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
        {
          id: "11-phy-5",
          number: 5,
          name: "Laws of Motion",
          subject: "Physics",
          classNum: 11,
          explanation: [
            "Newton's First Law (Law of Inertia): A body at rest stays at rest, and a body in uniform motion stays in uniform motion unless acted on by an external net force. Inertia is the property of resisting change — heavier objects have more inertia. This explains seatbelts: in a collision, your body continues moving forward even when the car stops.",
            "Newton's Second Law: Net Force = mass × acceleration (F = ma). Force is a vector; its direction determines the direction of acceleration. This law is the foundation of classical mechanics — given force and mass, we can predict motion precisely. The SI unit of force is Newton (1 N = 1 kg·m/s²).",
            "Newton's Third Law: For every action, there is an equal and opposite reaction. The forces are equal in magnitude, opposite in direction, but act on different objects. A rifle recoils when fired; rockets are propelled by exhaust gases. Importantly, action-reaction pairs don't cancel each other (they act on different objects). Free Body Diagrams isolate a single object and show all forces acting on it — essential for solving mechanics problems.",
          ],
          keyConcepts: [
            {
              title: "Law of Inertia",
              description: "Objects resist change in motion state",
            },
            {
              title: "F = ma",
              description: "Net force equals mass times acceleration",
            },
            {
              title: "Action-Reaction",
              description:
                "Equal forces on different objects in opposite directions",
            },
            {
              title: "Free Body Diagram",
              description: "Diagram showing all forces on a single object",
            },
          ],
          importantTerms: [
            {
              term: "Inertia",
              definition:
                "The resistance of an object to a change in its state of motion",
            },
            {
              term: "Net Force",
              definition: "The vector sum of all forces acting on an object",
            },
            {
              term: "Normal Force",
              definition: "Perpendicular contact force between surfaces",
            },
            {
              term: "Friction",
              definition: "Force opposing relative motion between surfaces",
            },
          ],
          videoKeyword: "newton",
        },
        {
          id: "11-phy-11",
          number: 11,
          name: "Thermal Properties of Matter",
          subject: "Physics",
          classNum: 11,
          explanation: [
            "Temperature measures how hot or cold an object is. Heat is energy transferred due to temperature difference. Temperature scales: Celsius (water freezes at 0°C, boils at 100°C), Kelvin (absolute scale, 0 K = -273°C, the coldest possible temperature), Fahrenheit (°F = 9/5°C + 32). The Kelvin scale is used in scientific calculations.",
            "Thermal expansion: most substances expand when heated. Linear expansion: ΔL = αL₀ΔT; Volume expansion: ΔV = γV₀ΔT. Water is anomalous — it contracts from 0°C to 4°C (maximum density at 4°C), then expands. This is why ice floats and why aquatic life can survive in winter.",
            "Heat transfer occurs by three mechanisms: Conduction (heat flows through material; metals are good conductors, wood is insulator), Convection (heat transferred by moving fluid — warm air rises, cool air sinks; convection currents drive weather), and Radiation (energy transmitted as electromagnetic waves; no medium needed — this is how sunlight reaches Earth). Newton's Law of Cooling: rate of cooling proportional to temperature difference.",
          ],
          keyConcepts: [
            {
              title: "Temperature Scales",
              description: "Celsius, Kelvin, Fahrenheit conversion",
            },
            {
              title: "Thermal Expansion",
              description: "Objects expand on heating; α is coefficient",
            },
            {
              title: "Anomalous Expansion of Water",
              description: "Maximum density at 4°C; ice floats",
            },
            {
              title: "Heat Transfer Methods",
              description: "Conduction, convection, and radiation",
            },
          ],
          importantTerms: [
            {
              term: "Absolute Zero",
              definition:
                "0 Kelvin (-273°C); theoretically coldest possible temperature",
            },
            {
              term: "Conduction",
              definition: "Heat transfer through a solid without bulk motion",
            },
            {
              term: "Convection",
              definition: "Heat transfer by movement of heated fluid",
            },
            {
              term: "Radiation",
              definition:
                "Heat transfer by electromagnetic waves without medium",
            },
          ],
          videoKeyword: "heat",
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
        {
          id: "11-chem-2",
          number: 2,
          name: "Structure of Atom",
          subject: "Chemistry",
          classNum: 11,
          explanation: [
            "The modern understanding of atomic structure evolved through many models. Thomson's plum-pudding model (electrons in positive sphere) was disproved by Rutherford's gold foil experiment — most alpha particles passed through (atom is mostly empty space) but some deflected sharply (dense, positive nucleus). Bohr's model then proposed electrons in fixed circular orbits with defined energy levels.",
            "Quantum numbers describe each electron's state: Principal quantum number (n = 1, 2, 3... defines shell/energy), Azimuthal quantum number (l = 0, 1... n-1; defines subshell s, p, d, f), Magnetic quantum number (ml; defines orbital orientation), Spin quantum number (ms = +½ or -½; defines spin). Pauli Exclusion Principle: no two electrons can have identical sets of all four quantum numbers.",
            "Electron configuration follows: Aufbau Principle (fill lowest energy orbitals first), Pauli Exclusion (max 2 electrons per orbital with opposite spins), and Hund's Rule (fill each degenerate orbital with one electron before pairing). The order is: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p... This determines chemical properties — elements in same group have same outer electron configuration.",
          ],
          keyConcepts: [
            {
              title: "Atomic Models",
              description:
                "Thomson → Rutherford → Bohr → Quantum model evolution",
            },
            {
              title: "Quantum Numbers",
              description: "n, l, ml, ms describe each electron's state",
            },
            {
              title: "Electron Configuration",
              description: "Aufbau + Pauli + Hund's rules fill orbitals",
            },
            {
              title: "Orbitals",
              description: "s (2 e⁻), p (6 e⁻), d (10 e⁻), f (14 e⁻)",
            },
          ],
          importantTerms: [
            {
              term: "Atomic Number",
              definition: "Number of protons in an atom; defines the element",
            },
            {
              term: "Orbital",
              definition:
                "Region of space with 90% probability of finding an electron",
            },
            {
              term: "Aufbau Principle",
              definition:
                "Electrons occupy lowest available energy orbitals first",
            },
            {
              term: "Pauli Exclusion Principle",
              definition: "No two electrons can have identical quantum numbers",
            },
          ],
          videoKeyword: "atom",
        },
        {
          id: "11-chem-5",
          number: 5,
          name: "States of Matter",
          subject: "Chemistry",
          classNum: 11,
          explanation: [
            "The three states of matter differ in intermolecular distance and forces. Gases follow gas laws: Boyle's Law (P∝1/V at constant T), Charles' Law (V∝T at constant P), Gay-Lussac's Law (P∝T at constant V), combined into the Ideal Gas Law: PV = nRT. R = 8.314 J/mol·K is the universal gas constant.",
            "Kinetic Molecular Theory explains gas behavior: gas molecules are in constant random motion; they have negligible volume; no intermolecular forces; collisions are perfectly elastic; average kinetic energy ∝ absolute temperature. Real gases deviate from ideal behavior at high pressures and low temperatures (when intermolecular forces matter).",
            "Liquids have properties between gases and solids. Surface tension (tendency of liquid surface to minimize area) explains why water droplets form spheres and insects can walk on water. Viscosity (resistance to flow) depends on temperature and molecular size — honey is more viscous than water. Evaporation is a cooling process; boiling occurs when vapor pressure equals external pressure.",
          ],
          keyConcepts: [
            {
              title: "Gas Laws",
              description:
                "Boyle's, Charles', Gay-Lussac's, and Ideal Gas Law PV=nRT",
            },
            {
              title: "Kinetic Theory",
              description:
                "Molecular explanation of gas properties and temperature",
            },
            {
              title: "Surface Tension",
              description:
                "Force pulling liquid surface inward to minimize area",
            },
            {
              title: "Viscosity",
              description:
                "Resistance of liquid to flow; decreases with temperature",
            },
          ],
          importantTerms: [
            {
              term: "Ideal Gas Law",
              definition: "PV = nRT; describes behavior of ideal gases",
            },
            {
              term: "Surface Tension",
              definition:
                "Force per unit length on liquid surface tending to minimize area",
            },
            {
              term: "Vapour Pressure",
              definition:
                "Pressure exerted by vapor above its liquid at equilibrium",
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
        {
          id: "11-math-3",
          number: 3,
          name: "Trigonometric Functions",
          subject: "Mathematics",
          classNum: 11,
          explanation: [
            "Trigonometric functions extend beyond right triangles to all angles and even real numbers. Starting from degree measure, radians are introduced as the natural unit: π radians = 180°. The unit circle (radius 1) defines sin θ and cos θ as y and x coordinates of a point, making them work for any angle from 0 to 360° and beyond.",
            "Key identities: sin²θ + cos²θ = 1 (Pythagorean identity); sin(A+B) = sinA cosB + cosA sinB; cos(A+B) = cosA cosB - sinA sinB. These addition formulas derive double-angle formulas: sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ - sin²θ. Memorizing and applying these identities is central to solving trigonometric problems.",
            "The graphs of sin x and cos x are periodic waves (period = 2π), with amplitude 1. tan x has period π. Understanding the period, amplitude, and phase shift of trigonometric functions is essential for physics (wave motion, simple harmonic motion) and engineering (signal processing, alternating current).",
          ],
          keyConcepts: [
            {
              title: "Radian Measure",
              description: "π radians = 180°; natural unit for angles",
            },
            {
              title: "Unit Circle Definition",
              description: "sin and cos as coordinates on unit circle",
            },
            {
              title: "Trigonometric Identities",
              description: "sin²θ+cos²θ=1, addition formulas",
            },
            {
              title: "Trigonometric Graphs",
              description: "Periodic waves; period, amplitude, phase",
            },
          ],
          importantTerms: [
            {
              term: "Radian",
              definition: "Angle where arc length equals radius; π rad = 180°",
            },
            {
              term: "Period",
              definition:
                "The smallest interval after which a function repeats",
            },
            {
              term: "Amplitude",
              definition: "The maximum displacement from equilibrium in a wave",
            },
            {
              term: "Identity",
              definition: "An equation true for all values of the variable",
            },
          ],
        },
        {
          id: "11-math-8",
          number: 8,
          name: "Sequences and Series",
          subject: "Mathematics",
          classNum: 11,
          explanation: [
            "A sequence is an ordered list of numbers following a rule. Arithmetic Progression (AP): each term differs from the previous by a constant difference d. nth term: aₙ = a + (n-1)d. Sum of n terms: Sₙ = n/2[2a + (n-1)d]. Examples: 2, 5, 8, 11... (d=3) or the natural numbers 1, 2, 3... (d=1).",
            "Geometric Progression (GP): each term is obtained by multiplying the previous by a constant ratio r. nth term: aₙ = arⁿ⁻¹. Sum of n terms: Sₙ = a(rⁿ-1)/(r-1) for r≠1. Sum of infinite GP: S∞ = a/(1-r) if |r| < 1. Examples: 2, 6, 18, 54... (r=3) or 1, 1/2, 1/4... (r=1/2).",
            "Applications are enormous: Compound interest follows GP, loan payments use AP/GP formulas, population growth is geometric. The number e = 2.718... is defined as the sum of the infinite series 1 + 1/1! + 1/2! + 1/3!... Sequences and series form the mathematical foundation for calculus and analysis.",
          ],
          keyConcepts: [
            {
              title: "Arithmetic Progression (AP)",
              description: "Constant difference d; nth term = a+(n-1)d",
            },
            {
              title: "Geometric Progression (GP)",
              description: "Constant ratio r; nth term = arⁿ⁻¹",
            },
            { title: "Sum of AP", description: "Sₙ = n/2[2a + (n-1)d]" },
            {
              title: "Infinite GP Sum",
              description: "S∞ = a/(1-r) when |r| < 1",
            },
          ],
          importantTerms: [
            {
              term: "Arithmetic Progression",
              definition:
                "Sequence where consecutive terms differ by constant amount",
            },
            {
              term: "Geometric Progression",
              definition:
                "Sequence where consecutive terms have constant ratio",
            },
            {
              term: "Common Difference (d)",
              definition: "Constant difference between consecutive terms in AP",
            },
            {
              term: "Common Ratio (r)",
              definition: "Constant factor between consecutive terms in GP",
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
  class2,
  class3,
  class4,
  class5,
  class6,
  class7,
  class8,
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

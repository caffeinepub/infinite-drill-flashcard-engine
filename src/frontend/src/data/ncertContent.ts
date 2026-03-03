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
        {
          id: "3-math-2",
          number: 2,
          name: "Fun with Numbers",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Students extend their counting skills to numbers up to 999. They learn to read and write number names — 'three hundred and forty-two' for 342. This builds number vocabulary and connects spoken language to written numerals.",
            "Place value is introduced with hundreds, tens, and ones. Using bundled sticks or base-ten blocks, children see that 342 means 3 hundreds, 4 tens, and 2 ones. This place value understanding is the foundation of all arithmetic.",
            "Students compare and order 3-digit numbers using the greater-than and less-than symbols. They arrange numbers on a number line and understand that moving right means bigger, moving left means smaller.",
          ],
          keyConcepts: [
            {
              title: "Numbers up to 999",
              description: "Counting, reading, and writing 3-digit numbers",
            },
            {
              title: "Place Value",
              description: "Hundreds, tens, and ones in a 3-digit number",
            },
            {
              title: "Number Names",
              description: "Writing numbers in words up to 999",
            },
            {
              title: "Comparing Numbers",
              description: "Using greater-than and less-than symbols",
            },
          ],
          importantTerms: [
            {
              term: "Place Value",
              definition:
                "The value of a digit based on its position in the number",
            },
            {
              term: "Hundreds",
              definition: "The third digit from the right in a 3-digit number",
            },
            {
              term: "Expanded Form",
              definition:
                "Writing a number as sum of its place values (300+40+2)",
            },
          ],
        },
        {
          id: "3-math-3",
          number: 3,
          name: "Give and Take",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "This chapter introduces addition with carrying (regrouping). When the sum of digits in a column exceeds 9, we carry 1 to the next column. For example, 47 + 35: the ones column gives 7+5=12, so we write 2 and carry 1 to the tens column.",
            "Subtraction with borrowing (regrouping) is also taught. When the top digit is smaller than the bottom digit, we borrow 10 from the next column. For example, 53 - 28: we cannot do 3-8 in the ones, so we borrow 10, making it 13-8=5 in the ones column.",
            "Real-life word problems — buying and selling, earning and spending — make addition and subtraction meaningful. Students learn to identify what is being asked, what information they have, and choose the correct operation to find the answer.",
          ],
          keyConcepts: [
            {
              title: "Addition with Carrying",
              description: "Regrouping when sum of digits exceeds 9",
            },
            {
              title: "Subtraction with Borrowing",
              description: "Regrouping when top digit is smaller than bottom",
            },
            {
              title: "Word Problems",
              description:
                "Solving real-life addition and subtraction problems",
            },
            {
              title: "Inverse Operations",
              description: "Addition and subtraction undo each other",
            },
          ],
          importantTerms: [
            {
              term: "Regrouping",
              definition:
                "Exchanging 10 ones for 1 ten (or vice versa) in calculations",
            },
            {
              term: "Carrying",
              definition: "Moving 1 to the next column when sum exceeds 9",
            },
            {
              term: "Borrowing",
              definition:
                "Taking 10 from the next column when top digit is too small",
            },
          ],
        },
        {
          id: "3-math-4",
          number: 4,
          name: "Long and Short",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Children begin with non-standard measurement — using handspans, footsteps, or pencils to measure length. They discover that everyone's handspan is different, which motivates the need for a standard unit that everyone agrees upon.",
            "The centimetre (cm) is introduced as a standard unit for measuring shorter lengths. Students learn to use a ruler correctly, aligning objects at zero and reading the scale carefully. They measure objects in their classroom and compare lengths.",
            "Students understand when to use different units — centimetres for short lengths like a pencil, metres for longer distances like the classroom. They estimate before measuring, then check their estimates, building strong measurement sense.",
          ],
          keyConcepts: [
            {
              title: "Non-Standard Measurement",
              description: "Using handspans, footsteps, pencils to measure",
            },
            {
              title: "Standard Units",
              description: "Centimetre (cm) as an agreed unit of measurement",
            },
            {
              title: "Using a Ruler",
              description: "Aligning at zero and reading scale accurately",
            },
            {
              title: "Estimation",
              description: "Guessing length before measuring to check accuracy",
            },
          ],
          importantTerms: [
            {
              term: "Centimetre (cm)",
              definition: "A standard unit of length; 100 cm = 1 metre",
            },
            {
              term: "Measurement",
              definition: "Finding the size of something using a standard unit",
            },
            {
              term: "Estimation",
              definition:
                "A careful guess about a measurement before measuring",
            },
          ],
        },
        {
          id: "3-math-5",
          number: 5,
          name: "Shapes and Designs",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Students explore 2D shapes — circles, triangles, squares, rectangles, hexagons — and learn their properties: number of sides, corners, and whether they have equal sides. They find these shapes in objects around them.",
            "Patterns and symmetry are central to this chapter. Students create repeating patterns using shapes and colours. They fold paper to find lines of symmetry — a shape is symmetric if one half is the mirror image of the other half.",
            "Tiling and tessellation activities show how shapes fit together without gaps or overlaps to cover a surface. Tiles on a floor, bricks in a wall, and honeycombs in a beehive all show tessellation. This connects geometry to real-world design and art.",
          ],
          keyConcepts: [
            {
              title: "2D Shapes",
              description: "Circle, triangle, square, rectangle, hexagon",
            },
            {
              title: "Symmetry",
              description: "Line of symmetry; one half mirrors the other",
            },
            {
              title: "Patterns",
              description: "Repeating arrangements of shapes and colours",
            },
            {
              title: "Tessellation",
              description:
                "Shapes fitting together without gaps to cover a surface",
            },
          ],
          importantTerms: [
            {
              term: "Symmetry",
              definition:
                "A shape has symmetry if one half is the mirror of the other",
            },
            {
              term: "Line of Symmetry",
              definition:
                "The fold line that divides a shape into two equal halves",
            },
            {
              term: "Pattern",
              definition:
                "A repeating arrangement of shapes, colours, or numbers",
            },
          ],
        },
        {
          id: "3-math-6",
          number: 6,
          name: "Fun with Give and Take",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Word problems bring addition and subtraction to life. Students learn a systematic approach: read the problem carefully, identify what is given, what is asked, choose the right operation, and write the answer with the correct unit.",
            "Multi-step problems require two or more operations. For example: Riya has 125 marbles, she gives 48 to her brother and receives 35 from her sister. How many does she have now? Students learn to break such problems into smaller steps.",
            "Checking answers using the inverse operation is emphasized — if you added to get an answer, subtract to check; if you subtracted, add to verify. This habit of checking builds mathematical accuracy and confidence.",
          ],
          keyConcepts: [
            {
              title: "Word Problem Strategy",
              description: "Read, identify, choose operation, solve, check",
            },
            {
              title: "Multi-Step Problems",
              description: "Problems requiring more than one operation",
            },
            {
              title: "Checking Answers",
              description: "Using inverse operation to verify solutions",
            },
            {
              title: "Real-Life Contexts",
              description: "Shopping, sharing, and collecting situations",
            },
          ],
          importantTerms: [
            {
              term: "Word Problem",
              definition:
                "A math problem described in words using a real-life situation",
            },
            {
              term: "Operation",
              definition:
                "A mathematical process: addition, subtraction, multiplication, or division",
            },
            {
              term: "Inverse",
              definition: "The opposite operation (addition ↔ subtraction)",
            },
          ],
        },
        {
          id: "3-math-7",
          number: 7,
          name: "Time Goes On",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Students learn to read both analogue and digital clocks. On an analogue clock, the short hand shows hours and the long hand shows minutes. They learn to read time to the nearest 5 minutes and then to the exact minute.",
            "Days of the week and months of the year are explored in order. Students learn that 7 days = 1 week, 30 or 31 days = 1 month (except February with 28 or 29), and 12 months = 1 year. The four seasons and their connection to months are introduced.",
            "Students calculate time intervals — how many hours between 9:00 AM and 2:00 PM, how many days until a birthday. Using calendars, they find days of the week for specific dates and count days between events. These are practical life skills.",
          ],
          keyConcepts: [
            {
              title: "Reading a Clock",
              description: "Hour hand, minute hand, and reading time",
            },
            {
              title: "Days and Months",
              description: "7 days in a week, 12 months in a year",
            },
            {
              title: "Seasons",
              description: "Summer, monsoon, autumn, winter and their months",
            },
            {
              title: "Time Intervals",
              description: "Calculating time elapsed between two times",
            },
          ],
          importantTerms: [
            {
              term: "Analogue Clock",
              definition:
                "A clock with hour and minute hands on a circular face",
            },
            {
              term: "AM/PM",
              definition:
                "Before noon (AM) and after noon (PM) in 12-hour time",
            },
            {
              term: "Calendar",
              definition: "A chart showing days, weeks, and months of the year",
            },
          ],
        },
        {
          id: "3-math-8",
          number: 8,
          name: "Who is Heavier?",
          subject: "Mathematics",
          classNum: 3,
          explanation: [
            "Weight comparison begins with direct experience — picking up objects and judging which is heavier. Students use a balance scale to compare weights systematically. The side that goes down is heavier; equal height means equal weight.",
            "Non-standard weights like clay balls, coins, or stones are used first. Students find that a small iron ball can be heavier than a big balloon because weight depends on what an object is made of, not just its size.",
            "The gram (g) is introduced as a standard unit for measuring light objects. Students handle gram weights and compare them to familiar objects. They estimate weights and then verify with a balance or weighing scale. This builds weight intuition and measurement skills.",
          ],
          keyConcepts: [
            {
              title: "Weight Comparison",
              description: "Heavier, lighter, and equal weight on a balance",
            },
            {
              title: "Balance Scale",
              description: "Tool for comparing and measuring weight",
            },
            {
              title: "Gram as Unit",
              description: "Standard unit for measuring weight",
            },
            {
              title: "Estimation",
              description: "Predicting weight before measuring",
            },
          ],
          importantTerms: [
            {
              term: "Weight",
              definition:
                "How heavy an object is; measured in grams (g) or kilograms (kg)",
            },
            {
              term: "Balance",
              definition: "A weighing tool with two pans for comparing weights",
            },
            {
              term: "Gram (g)",
              definition: "A standard unit of weight; 1000 g = 1 kilogram",
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
        {
          id: "3-eng-3",
          number: 3,
          name: "Bird Talk",
          subject: "English",
          classNum: 3,
          explanation: [
            "This delightful poem features two birds — a sparrow and a crow — having a conversation about their lives, food, and the sky. The poem introduces the concept of dialogue in poetry and builds speaking and listening skills.",
            "Similes are the key literary device in this chapter. Students learn that a simile compares two unlike things using 'like' or 'as' — for example, 'as free as a bird' or 'flies like an arrow.' They identify similes in the poem and create their own.",
            "The poem encourages children to observe birds in their neighbourhood and describe them using comparisons. Writing activities ask students to imagine a conversation between two animals of their choice, using the poem as a model.",
          ],
          keyConcepts: [
            {
              title: "Simile",
              description: "Comparing two things using 'like' or 'as'",
            },
            {
              title: "Dialogue in Poetry",
              description: "Two characters speaking to each other in verse",
            },
            {
              title: "Nature Observation",
              description: "Describing birds and their behaviour",
            },
            {
              title: "Oral Language",
              description: "Reading aloud with expression and character voices",
            },
          ],
          importantTerms: [
            {
              term: "Simile",
              definition:
                "A comparison using 'like' or 'as' (e.g., brave as a lion)",
            },
            {
              term: "Dialogue",
              definition: "Conversation between two or more characters",
            },
            {
              term: "Rhyme",
              definition: "Words that end with the same sound",
            },
          ],
        },
        {
          id: "3-eng-4",
          number: 4,
          name: "Nina and the Baby Sparrow",
          subject: "English",
          classNum: 3,
          explanation: [
            "Nina finds a baby sparrow that has fallen from its nest. She carefully picks it up and nurses it back to health over several days, feeding it and keeping it warm. The story develops themes of compassion, patience, and responsibility.",
            "Students learn narrative structure through this story — the introduction (finding the bird), rising action (caring for it), climax (will it survive?), and resolution (the bird flies away). Identifying these elements helps children understand and write stories.",
            "The story raises an important question: when the bird is healed, Nina releases it. Students discuss why it is important to let wild animals return to nature rather than keeping them as pets. This builds environmental ethics alongside literacy.",
          ],
          keyConcepts: [
            {
              title: "Narrative Structure",
              description: "Introduction, rising action, climax, resolution",
            },
            {
              title: "Compassion",
              description: "Caring for a hurt creature with kindness",
            },
            {
              title: "Wild vs Domestic",
              description: "Why wild animals should live freely in nature",
            },
            {
              title: "Sequence of Events",
              description:
                "Ordering story events using first, next, then, finally",
            },
          ],
          importantTerms: [
            {
              term: "Compassion",
              definition:
                "Feeling care and concern for something that is suffering",
            },
            {
              term: "Narrative",
              definition: "A story that tells a sequence of events",
            },
            {
              term: "Climax",
              definition: "The most exciting or important moment in a story",
            },
          ],
        },
        {
          id: "3-eng-5",
          number: 5,
          name: "Little By Little",
          subject: "English",
          classNum: 3,
          explanation: [
            "This poem traces the journey of a seed that grows, little by little, into a mighty tree. First a shoot, then a sapling, then branches, then a full tree with shade, flowers, and fruit — all from one tiny seed. The poem is a beautiful metaphor for patience and growth.",
            "The poem teaches the growth mindset — great things happen through small, persistent steps. Students relate the tree's growth to their own learning: each reading practice, each sum solved, each new word learned is a step in their growth.",
            "Literary devices introduced include personification (the seed 'struggled' upward) and metaphor (the child's growth compared to the tree's growth). Students write their own growth poems about something they have learned or developed gradually.",
          ],
          keyConcepts: [
            {
              title: "Metaphor",
              description: "A direct comparison without using 'like' or 'as'",
            },
            {
              title: "Personification",
              description: "Giving human qualities to non-human things",
            },
            {
              title: "Growth Mindset",
              description:
                "Believing abilities improve through effort and patience",
            },
            {
              title: "Plant Life Cycle",
              description: "Seed to seedling to sapling to tree",
            },
          ],
          importantTerms: [
            {
              term: "Metaphor",
              definition:
                "A comparison saying one thing IS another (e.g., life is a journey)",
            },
            {
              term: "Personification",
              definition: "Giving human traits to animals, objects, or ideas",
            },
            {
              term: "Seedling",
              definition: "A very young plant grown from a seed",
            },
          ],
        },
        {
          id: "3-eng-6",
          number: 6,
          name: "The Enormous Turnip",
          subject: "English",
          classNum: 3,
          explanation: [
            "In this classic folk tale, an old farmer plants a turnip that grows so large that he cannot pull it out alone. He calls his wife, who calls their granddaughter, who calls the dog, the cat, and finally a tiny mouse. Together, they pull the turnip out — showing that teamwork makes the impossible possible.",
            "The story follows a repetitive, cumulative pattern — each attempt adds a new character and repeats all the previous characters. This structure makes it easy for young readers to predict what comes next and join in the reading. Students practice sequence words: first, then, next, after that, finally.",
            "Students analyse the story's moral: even the smallest contribution matters. The tiny mouse made the difference. This is a powerful lesson about inclusion and teamwork. Students re-enact the story through role-play, building oral language and expression skills.",
          ],
          keyConcepts: [
            {
              title: "Teamwork Theme",
              description:
                "Working together to achieve what one cannot do alone",
            },
            {
              title: "Cumulative Story",
              description:
                "Each step repeats all previous steps — pattern in narrative",
            },
            {
              title: "Sequence Words",
              description: "First, then, next, after that, finally",
            },
            {
              title: "Folk Tale",
              description: "Traditional story passed down through generations",
            },
          ],
          importantTerms: [
            {
              term: "Folk Tale",
              definition:
                "A traditional story passed down orally through generations",
            },
            {
              term: "Teamwork",
              definition: "Working together with others towards a common goal",
            },
            {
              term: "Cumulative",
              definition: "Increasing by adding one thing on top of another",
            },
          ],
        },
        {
          id: "3-eng-7",
          number: 7,
          name: "Sea Song",
          subject: "English",
          classNum: 3,
          explanation: [
            "This poem describes the sea in vivid, musical language — the rhythm of the waves, the call of seagulls, the salt in the air, and the mystery of the deep ocean. The poem's rhythm itself mimics the rise and fall of ocean waves.",
            "Rhyme and rhythm are the focus of this chapter. Students identify the rhyme scheme (which lines rhyme with which) and clap out the rhythm (beat pattern) of the poem. They discover that the regular beat makes the poem feel like music.",
            "Students are encouraged to listen to the sounds of water and describe them in words. Onomatopoeia — words that sound like what they describe (splash, crash, roar, hiss) — is introduced through the poem's language about the sea.",
          ],
          keyConcepts: [
            {
              title: "Rhyme and Rhythm",
              description: "The sound pattern and beat of a poem",
            },
            {
              title: "Onomatopoeia",
              description: "Words that sound like the noises they describe",
            },
            {
              title: "Ocean Imagery",
              description: "Vivid descriptions of the sea and its features",
            },
            {
              title: "Sensory Language",
              description: "Words describing sounds, sights, smells of the sea",
            },
          ],
          importantTerms: [
            {
              term: "Onomatopoeia",
              definition:
                "A word that imitates the sound it represents (splash, crash)",
            },
            {
              term: "Rhythm",
              definition: "The pattern of beats or stresses in a poem",
            },
            {
              term: "Rhyme Scheme",
              definition: "The pattern showing which lines in a poem rhyme",
            },
          ],
        },
        {
          id: "3-eng-8",
          number: 8,
          name: "A Little Fish Story",
          subject: "English",
          classNum: 3,
          explanation: [
            "A small fish lives in a big ocean and feels afraid of all the larger creatures. One day, faced with a dangerous situation, the little fish finds unexpected courage within itself and swims bravely through to safety. The story celebrates inner strength and self-belief.",
            "Students explore the theme of bravery — understanding that being brave doesn't mean having no fear, but acting despite fear. The little fish is afraid but acts anyway. Students discuss times they felt scared but overcame their fear.",
            "The story uses vivid ocean vocabulary: currents, coral reefs, predators, scales, fins. Students build a word map of ocean words and write a short story about an undersea adventure, using new vocabulary in context. This builds both vocabulary and creative writing skills.",
          ],
          keyConcepts: [
            {
              title: "Bravery Theme",
              description: "Acting despite fear; finding inner strength",
            },
            {
              title: "Ocean Vocabulary",
              description: "Currents, coral reefs, predators, scales, fins",
            },
            {
              title: "Character Development",
              description: "How a character changes from beginning to end",
            },
            {
              title: "Creative Writing",
              description: "Writing an undersea adventure story",
            },
          ],
          importantTerms: [
            {
              term: "Bravery",
              definition: "Acting with courage despite feeling afraid",
            },
            {
              term: "Predator",
              definition: "An animal that hunts and eats other animals",
            },
            {
              term: "Character",
              definition: "A person or animal in a story",
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
        {
          id: "3-evs-3",
          number: 3,
          name: "Water O Water",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Water is essential for all life. This chapter explores the many sources of water — rivers, lakes, ponds, wells, taps, and rainfall. Students learn that different communities in India get water in different ways, from hand-pumps in villages to municipal taps in cities.",
            "Water is used in countless ways in daily life — for drinking, cooking, bathing, washing, farming, and industry. Students track how much water their family uses in a day and are often surprised by the large amounts. This awareness is the first step to conservation.",
            "Simple water conservation habits are taught: turning off taps while brushing teeth, fixing leaky pipes, using a bucket instead of a running tap for bathing. Students learn that wasting water is unfair to those who don't have enough. The chapter builds a sense of water responsibility.",
          ],
          keyConcepts: [
            {
              title: "Sources of Water",
              description: "Rivers, lakes, wells, taps, rainfall, groundwater",
            },
            {
              title: "Uses of Water",
              description: "Drinking, cooking, farming, industry, hygiene",
            },
            {
              title: "Water Conservation",
              description: "Simple daily habits to save water",
            },
            {
              title: "Water Scarcity",
              description: "Many communities lack access to clean water",
            },
          ],
          importantTerms: [
            {
              term: "Conservation",
              definition: "Using resources carefully to avoid waste",
            },
            {
              term: "Groundwater",
              definition:
                "Water stored underground, accessed through wells and bore wells",
            },
            {
              term: "Potable Water",
              definition: "Water that is safe and clean enough to drink",
            },
          ],
        },
        {
          id: "3-evs-4",
          number: 4,
          name: "Our First School",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "The family is our first school — the place where we learn our first words, values, habits, and ways of living. Parents, grandparents, siblings, and other family members all teach us different things: how to walk, talk, behave, and understand the world.",
            "Different family members play different roles. Grandparents often share stories, traditions, and wisdom. Parents provide food, safety, and guidance. Siblings are companions and playmates. The chapter builds appreciation for every family member's contribution.",
            "Students explore what they have learned from different family members — a grandmother's recipe, a grandfather's farm knowledge, a father's trade skill, a mother's organisational ability. This values activity reinforces respect for all kinds of knowledge and wisdom.",
          ],
          keyConcepts: [
            {
              title: "Family as First Teacher",
              description: "Learning values, language, and life skills at home",
            },
            {
              title: "Roles in Family",
              description: "What each family member teaches and contributes",
            },
            {
              title: "Traditional Knowledge",
              description: "Skills and wisdom passed down through generations",
            },
            {
              title: "Respect for Elders",
              description: "Honouring grandparents and their experience",
            },
          ],
          importantTerms: [
            {
              term: "Generation",
              definition:
                "A group of people born and living at around the same time",
            },
            {
              term: "Tradition",
              definition:
                "A custom or practice passed down within a family or community",
            },
            {
              term: "Values",
              definition: "Beliefs about what is important and how to behave",
            },
          ],
        },
        {
          id: "3-evs-5",
          number: 5,
          name: "Chhotu's House",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "India has an enormous variety of houses — mud huts in villages, brick houses in towns, bamboo homes in forests, stilt houses near rivers, and concrete buildings in cities. This chapter celebrates that diversity and helps children understand why houses differ.",
            "The materials used to build houses depend on what is available locally and what the climate requires. In rainy regions, sloping roofs help shed water; in hot desert areas, thick mud walls keep homes cool. In cold mountain areas, small windows and insulating materials keep heat inside.",
            "Students learn about the basic functions of a house: protection from weather, safety, privacy, and a place for family life. The chapter builds empathy for children who live in different kinds of homes and teaches respect for all living situations.",
          ],
          keyConcepts: [
            {
              title: "Types of Houses",
              description: "Mud, brick, bamboo, stilt, and concrete houses",
            },
            {
              title: "Building Materials",
              description: "Local materials suited to climate and geography",
            },
            {
              title: "Climate and House Design",
              description:
                "How weather shapes the shape and materials of homes",
            },
            {
              title: "Functions of a House",
              description: "Protection, safety, privacy, family space",
            },
          ],
          importantTerms: [
            {
              term: "Stilt House",
              definition: "A house built on poles above water or ground level",
            },
            {
              term: "Insulation",
              definition:
                "Material that prevents heat from entering or leaving a space",
            },
            {
              term: "Climate",
              definition:
                "The typical weather conditions of an area over a long period",
            },
          ],
        },
        {
          id: "3-evs-6",
          number: 6,
          name: "Foods We Eat",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "India's food is remarkably diverse. Different regions have different staples — rice in South and East India, wheat in North India, maize and millet in many areas. This diversity reflects different climates, agriculture, and cultures.",
            "Foods can be grouped by what they provide: energy foods (rice, wheat, potatoes), body-building foods (dal, milk, eggs, meat), and protective foods (fruits and vegetables). A balanced meal includes something from each group. Students plan a healthy meal using this framework.",
            "Food preparation methods vary too — steaming, boiling, frying, baking. Some foods are eaten raw (salads, fruits) while others must be cooked for safety and taste. Students learn basic kitchen safety and develop respect for the effort that goes into preparing food.",
          ],
          keyConcepts: [
            {
              title: "Regional Food Diversity",
              description: "India's different staple foods by region",
            },
            {
              title: "Food Groups",
              description: "Energy, body-building, and protective foods",
            },
            {
              title: "Balanced Meal",
              description: "Including foods from all three groups",
            },
            {
              title: "Food Preparation",
              description: "Different ways of cooking food safely",
            },
          ],
          importantTerms: [
            {
              term: "Nutrient",
              definition:
                "A substance in food that helps the body grow and stay healthy",
            },
            {
              term: "Staple Food",
              definition:
                "The main food eaten regularly in a particular region",
            },
            {
              term: "Balanced Diet",
              definition:
                "Eating a variety of foods to get all needed nutrients",
            },
          ],
        },
        {
          id: "3-evs-7",
          number: 7,
          name: "Saying Without Speaking",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "We communicate in many ways without using words. Facial expressions (smile, frown, surprise), gestures (waving, thumbs up, pointing), and body posture (crossed arms, open arms) all carry meaning. This non-verbal communication is universal across languages.",
            "Sign language allows people who cannot hear to communicate through hand shapes, facial expressions, and body movements. Students learn a few basic signs and appreciate the rich, complete language that sign language is. This builds inclusion and empathy for people with hearing impairment.",
            "Traffic signals, road signs, and danger symbols are examples of non-verbal communication used in everyday life. Students learn to read common symbols and understand why visual communication is often faster and more universal than written words.",
          ],
          keyConcepts: [
            {
              title: "Non-Verbal Communication",
              description: "Facial expressions, gestures, and body language",
            },
            {
              title: "Sign Language",
              description: "A complete language using hands and expressions",
            },
            {
              title: "Symbols and Signs",
              description: "Traffic signals, warning signs, and road symbols",
            },
            {
              title: "Universal Communication",
              description: "Gestures understood across cultures",
            },
          ],
          importantTerms: [
            {
              term: "Gesture",
              definition: "A movement of the body used to express meaning",
            },
            {
              term: "Sign Language",
              definition:
                "A visual language using hand shapes and expressions for the deaf",
            },
            {
              term: "Symbol",
              definition: "A mark, sign, or image that represents an idea",
            },
          ],
        },
        {
          id: "3-evs-8",
          number: 8,
          name: "Flying High",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Birds are remarkably adapted for flight. Their hollow bones reduce weight, streamlined bodies reduce air resistance, and powerful breast muscles drive their wings. Feathers — both the large flight feathers and the soft downy feathers — are essential for lift, insulation, and waterproofing.",
            "Different birds have different beak and feet adaptations for their lifestyle. An eagle has a sharp hooked beak for tearing meat and strong talons for gripping prey. A duck has a flat beak for filtering water and webbed feet for swimming. A woodpecker has a chisel-shaped beak for drilling into wood.",
            "Migration is one of nature's most extraordinary phenomena. Birds like Siberian cranes travel thousands of kilometres from cold regions to warmer India during winter. They navigate using the sun, stars, Earth's magnetic field, and landmarks. Students map migration routes and learn about the threats migratory birds face.",
          ],
          keyConcepts: [
            {
              title: "Bird Adaptations for Flight",
              description: "Hollow bones, streamlined body, wings, feathers",
            },
            {
              title: "Beak and Feet Adaptations",
              description:
                "Beaks and feet shaped for each bird's food and habitat",
            },
            {
              title: "Migration",
              description:
                "Long-distance seasonal travel for food and breeding",
            },
            {
              title: "Bird Diversity",
              description: "Different birds in different habitats across India",
            },
          ],
          importantTerms: [
            {
              term: "Migration",
              definition:
                "Seasonal movement of birds to warmer or cooler places",
            },
            {
              term: "Adaptation",
              definition:
                "A body feature or behaviour that helps an animal survive",
            },
            {
              term: "Feather",
              definition:
                "Lightweight structure on birds used for flight, warmth, and waterproofing",
            },
          ],
        },
        {
          id: "3-evs-10",
          number: 10,
          name: "What is Cooking?",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Cooking transforms raw food into safer, tastier, and more digestible meals. Heat kills harmful bacteria and breaks down tough plant cells. Cooking also changes the colour, texture, smell, and taste of food in wonderful ways.",
            "Different fuels are used for cooking: firewood and cow dung cakes in villages, LPG gas in most urban homes, kerosene, and increasingly solar cookers and electric stoves. Students learn the advantages and disadvantages of each fuel in terms of cost, safety, and pollution.",
            "Kitchen safety is an important part of this chapter. Children learn basic rules: keep away from open flames, never leave food unattended on a stove, wash hands before and after handling food, and store food correctly to prevent spoiling. These habits prevent accidents and illness.",
          ],
          keyConcepts: [
            {
              title: "Why We Cook Food",
              description: "Safety, digestibility, taste, and texture",
            },
            {
              title: "Cooking Fuels",
              description: "Wood, LPG gas, kerosene, solar, electric",
            },
            {
              title: "Kitchen Safety",
              description: "Rules to prevent burns, fires, and food poisoning",
            },
            {
              title: "Food Hygiene",
              description: "Washing hands and storing food correctly",
            },
          ],
          importantTerms: [
            {
              term: "LPG",
              definition:
                "Liquefied Petroleum Gas — a common cooking fuel in Indian homes",
            },
            {
              term: "Solar Cooker",
              definition:
                "A device that uses sunlight to cook food without fuel",
            },
            {
              term: "Hygiene",
              definition: "Practices that maintain health and prevent disease",
            },
          ],
        },
        {
          id: "3-evs-11",
          number: 11,
          name: "From Here to There",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Transport connects people, goods, and places. Land transport includes walking, cycling, rickshaws, buses, cars, trains, and trucks. Water transport uses boats, ferries, and ships on rivers, lakes, and seas. Air transport uses aeroplanes and helicopters for the fastest travel.",
            "Maps help us understand directions and routes. A map is a drawing of an area as seen from above, using symbols to show roads, rivers, towns, and other features. Students learn cardinal directions (North, South, East, West) and how to use a simple map to find routes.",
            "The postal and transport systems connect remote villages to cities. Students learn how goods like vegetables from farms reach city markets, how letters travel from one state to another, and how emergency vehicles like ambulances need clear roads. Transport infrastructure is the backbone of society.",
          ],
          keyConcepts: [
            {
              title: "Modes of Transport",
              description: "Land, water, and air transport",
            },
            {
              title: "Maps and Directions",
              description: "North, South, East, West and map symbols",
            },
            {
              title: "Goods and People",
              description: "How transport connects producers and consumers",
            },
            {
              title: "Infrastructure",
              description: "Roads, railways, waterways, and airways",
            },
          ],
          importantTerms: [
            {
              term: "Cardinal Directions",
              definition: "The four main directions: North, South, East, West",
            },
            {
              term: "Map",
              definition:
                "A drawing of an area showing its features from above",
            },
            {
              term: "Infrastructure",
              definition:
                "Basic systems needed for society to function (roads, rails)",
            },
          ],
        },
        {
          id: "3-evs-12",
          number: 12,
          name: "Work We Do",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Society functions because people perform many different kinds of work. Farmers grow food, teachers educate, doctors heal, builders construct, and sweepers keep areas clean. Every job contributes to the community and deserves equal respect.",
            "Students learn about division of labour — how different people specialize in different work so that society as a whole can function better than if everyone tried to do everything themselves. A farmer focuses on growing food rather than also building houses and making clothes.",
            "The chapter challenges gender stereotypes about work. Men and women can do any kind of work. Students look at examples from their own community where women drive buses, build houses, or run businesses, and where men cook, care for children, or nurse patients. All work has dignity.",
          ],
          keyConcepts: [
            {
              title: "Occupations",
              description: "Different jobs people do in a community",
            },
            {
              title: "Division of Labour",
              description: "Specialization of work for community efficiency",
            },
            {
              title: "Dignity of Work",
              description: "Every job deserves equal respect",
            },
            {
              title: "Gender and Work",
              description: "Breaking stereotypes about who does what work",
            },
          ],
          importantTerms: [
            {
              term: "Occupation",
              definition: "The work a person does regularly to earn a living",
            },
            {
              term: "Division of Labour",
              definition:
                "Assigning different tasks to different people or groups",
            },
            {
              term: "Stereotype",
              definition:
                "An oversimplified idea that all people in a group are the same",
            },
          ],
        },
        {
          id: "3-evs-13",
          number: 13,
          name: "Sharing Our Feelings",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Emotions are a natural and important part of being human. Happiness, sadness, anger, fear, surprise, and disgust are six basic emotions recognized in all cultures. Every emotion has a cause, and understanding what triggers emotions helps children manage them better.",
            "Expressing feelings in healthy ways — talking to someone, drawing, writing, running, or crying — is much better than bottling emotions inside or expressing them through aggression. Students learn that it is okay to feel sad, scared, or angry, and that these feelings will pass.",
            "Empathy — the ability to understand and share another person's feelings — is a crucial social skill. Students practice empathy through discussion of scenarios: How would you feel if...? What could you say to help? This builds emotional intelligence alongside academic learning.",
          ],
          keyConcepts: [
            {
              title: "Basic Emotions",
              description: "Happiness, sadness, anger, fear, surprise, disgust",
            },
            {
              title: "Expressing Feelings",
              description: "Healthy ways to share and release emotions",
            },
            {
              title: "Empathy",
              description:
                "Understanding and sharing another person's feelings",
            },
            {
              title: "Emotional Intelligence",
              description: "Recognising and managing emotions wisely",
            },
          ],
          importantTerms: [
            {
              term: "Emotion",
              definition: "A strong feeling like happiness, sadness, or fear",
            },
            {
              term: "Empathy",
              definition:
                "The ability to understand and share the feelings of another",
            },
            {
              term: "Expression",
              definition: "Showing or communicating a feeling to others",
            },
          ],
        },
        {
          id: "3-evs-14",
          number: 14,
          name: "The Story of Food",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Before food reaches our plate, it goes on a long journey. Seeds are sown by farmers, crops are watered and protected, harvested, transported to markets, bought by shopkeepers or mothers, and finally cooked and served. Understanding this journey builds gratitude for food.",
            "Farmers are the most important link in the food chain. They wake before sunrise, work through heat and rain, and face uncertainty about weather and prices. The chapter builds deep respect for farmers and agricultural work, which feeds the entire nation.",
            "Food waste is a serious problem — millions of people go hungry while enormous quantities of food are wasted. Students calculate how much food their family wastes in a week and think about how to reduce waste. Composting food scraps turns waste into useful fertiliser for plants.",
          ],
          keyConcepts: [
            {
              title: "Food Journey",
              description: "From farm to table: farmer, market, cook, plate",
            },
            {
              title: "Role of Farmers",
              description: "Hard work and challenges farmers face",
            },
            {
              title: "Food Waste",
              description: "How much food is wasted and how to reduce it",
            },
            {
              title: "Composting",
              description: "Turning food waste into fertiliser",
            },
          ],
          importantTerms: [
            {
              term: "Food Chain (supply)",
              definition: "The sequence from food production to consumption",
            },
            {
              term: "Harvest",
              definition: "The process of gathering ripe crops from the fields",
            },
            {
              term: "Compost",
              definition: "Decayed organic matter used as fertiliser for soil",
            },
          ],
        },
        {
          id: "3-evs-15",
          number: 15,
          name: "Making Pots",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Pottery is one of humanity's oldest crafts. Potters (kumhars) shape clay on a spinning wheel called a chak, creating pots, bowls, lamps, and decorative items. The pots are then dried in the sun and fired in a kiln at high temperature to become hard and waterproof.",
            "Clay is a naturally occurring material found near rivers. Different types of clay have different properties — some are smooth and fine, others are coarser. The potter tests the clay, kneads it to remove air bubbles, and shapes it with skilled hands before it hardens.",
            "India has rich pottery traditions in every state — blue pottery of Jaipur, black pottery of Manipur, terracotta of West Bengal, and many others. Each tradition reflects local materials, techniques, and artistic styles. Students appreciate this heritage and learn about crafts as cultural identity.",
          ],
          keyConcepts: [
            {
              title: "Pottery Process",
              description: "Clay → shaping on wheel → drying → kiln firing",
            },
            {
              title: "Clay Properties",
              description: "Soft when wet, hard when fired",
            },
            {
              title: "Pottery Traditions",
              description: "Regional pottery styles across India",
            },
            {
              title: "Crafts as Heritage",
              description: "Traditional crafts as cultural identity",
            },
          ],
          importantTerms: [
            {
              term: "Potter's Wheel",
              definition: "A spinning platform used to shape clay into pots",
            },
            {
              term: "Kiln",
              definition: "An oven used to fire and harden clay pottery",
            },
            {
              term: "Terracotta",
              definition: "Baked clay, usually reddish-brown in colour",
            },
          ],
        },
        {
          id: "3-evs-16",
          number: 16,
          name: "Games We Play",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "India has a treasure of traditional games played for centuries — Kabaddi, Kho-Kho, Gilli-Danda, Lagori, Hopscotch, Marbles, Pittu, and many more. These games are often played without expensive equipment, outdoors, with large groups, developing physical fitness and social skills together.",
            "Traditional games teach important values: fairness (following rules), teamwork (helping your side win), resilience (accepting defeat gracefully), and creativity (inventing variations). They also preserve cultural heritage and bring communities together across generations.",
            "Modern sports like cricket, football, and basketball also have great value. Students compare traditional and modern games in terms of equipment needed, space required, number of players, and benefits. The chapter encourages all children to be physically active every day for good health.",
          ],
          keyConcepts: [
            {
              title: "Traditional Indian Games",
              description: "Kabaddi, Kho-Kho, Gilli-Danda, Pittu, Lagori",
            },
            {
              title: "Values in Play",
              description: "Fairness, teamwork, resilience through games",
            },
            {
              title: "Physical Health",
              description: "Importance of daily activity and outdoor play",
            },
            {
              title: "Cultural Heritage",
              description: "Traditional games as part of India's culture",
            },
          ],
          importantTerms: [
            {
              term: "Kabaddi",
              definition:
                "A contact sport played widely in India, now an international sport",
            },
            {
              term: "Resilience",
              definition: "The ability to recover from setbacks and keep going",
            },
            {
              term: "Heritage",
              definition:
                "Things passed down from earlier generations worth preserving",
            },
          ],
        },
        {
          id: "3-evs-17",
          number: 17,
          name: "Here Comes the Mail",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "The postal system is one of India's oldest and most widespread public services. India Post has over 1.5 lakh post offices — more than any other country in the world. A letter travels from sender to collection, sorting, dispatch, transport, delivery — each step handled by postal workers.",
            "Students trace the journey of a letter from writing to delivery. A letter dropped in a letter box is collected by a postman, taken to a sorting office, stamped and sorted by destination, transported (by road, rail, or air), received at the destination post office, and finally delivered by a postman who knows every house in their beat.",
            "The chapter connects to modern communication — emails, WhatsApp, and video calls have largely replaced physical letters, but the postal system still handles parcels, money orders, and official documents. Students appreciate how technology has transformed communication while respecting the human postal workers who serve remote areas.",
          ],
          keyConcepts: [
            {
              title: "Journey of a Letter",
              description: "Writing → posting → sorting → transport → delivery",
            },
            {
              title: "India Post",
              description:
                "World's largest postal network with 1.5 lakh offices",
            },
            {
              title: "Postal Workers",
              description: "The people who make mail delivery possible",
            },
            {
              title: "Modern Communication",
              description: "How email and mobile phones changed communication",
            },
          ],
          importantTerms: [
            {
              term: "Postcode (PIN)",
              definition: "A 6-digit code identifying a postal area in India",
            },
            {
              term: "Sorting Office",
              definition: "A place where mail is organised by destination",
            },
            {
              term: "Money Order",
              definition: "A postal service for sending money to someone",
            },
          ],
        },
        {
          id: "3-evs-18",
          number: 18,
          name: "A House Like This",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "People around the world live in remarkable homes adapted to their environment. Igloos are built from blocks of ice and snow by the Inuit people of the Arctic — the curved shape traps warm air, and the thick ice walls insulate against extreme cold. Inside, body heat keeps the temperature above freezing.",
            "Houseboats on Dal Lake in Kashmir and on the backwaters of Kerala are floating homes built on water. They are often decorated beautifully and serve as both homes and tourist accommodations. Stilt houses in Assam and parts of South Asia are raised on poles to protect against floods and wild animals.",
            "Underground homes in Matmata, Tunisia, and cave dwellings in Cappadocia, Turkey, stay naturally cool in hot climates. Tree houses in forest communities are built without harming the tree. Students discover that human creativity in building homes is shaped entirely by local needs, materials, and environment.",
          ],
          keyConcepts: [
            {
              title: "Igloo",
              description:
                "Ice house of Arctic Inuit people; curved shape traps warmth",
            },
            {
              title: "Houseboat",
              description: "Floating home on water; Kashmir, Kerala",
            },
            {
              title: "Stilt House",
              description: "House raised on poles against floods and animals",
            },
            {
              title: "Climate-Adapted Homes",
              description:
                "Every home design solves local environmental challenges",
            },
          ],
          importantTerms: [
            {
              term: "Igloo",
              definition:
                "A dome-shaped snow house built by Inuit people in the Arctic",
            },
            {
              term: "Houseboat",
              definition:
                "A boat designed and used as a home floating on water",
            },
            {
              term: "Adaptation",
              definition: "Changing design to suit specific conditions",
            },
          ],
        },
        {
          id: "3-evs-19",
          number: 19,
          name: "Our Friends, Animals",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Humans and animals have shared a close relationship throughout history. Dogs were the first domesticated animals, helping humans hunt and guard. Cattle, goats, and sheep were domesticated for milk, meat, and wool. Horses and camels transformed travel and trade. This partnership shaped civilization.",
            "Animals serve us in countless ways — oxen and horses plough fields, guide dogs help the visually impaired, therapy animals comfort the sick, dolphins assist in search and rescue. Animals also play important ecological roles: bees pollinate crops, earthworms enrich soil, birds control insect populations.",
            "Our responsibility toward animals is central to this chapter. Cruelty to animals is wrong and often illegal. Wild animals should not be kept as pets. Endangered species need legal protection. Students discuss their own relationships with pets and wildlife, and commit to treating animals with kindness and respect.",
          ],
          keyConcepts: [
            {
              title: "Domestication",
              description:
                "How humans tamed animals for work, food, and companionship",
            },
            {
              title: "Service Animals",
              description: "Animals that help humans in specific ways",
            },
            {
              title: "Animal Rights",
              description: "Treating animals with care and preventing cruelty",
            },
            {
              title: "Ecological Role",
              description:
                "Animals' importance in maintaining healthy ecosystems",
            },
          ],
          importantTerms: [
            {
              term: "Domestication",
              definition: "The process of taming wild animals for human use",
            },
            {
              term: "Endangered Species",
              definition: "Animals at risk of extinction due to human activity",
            },
            {
              term: "Service Animal",
              definition:
                "An animal trained to assist people with disabilities",
            },
          ],
        },
        {
          id: "3-evs-20",
          number: 20,
          name: "Drop by Drop",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "The water cycle describes how water moves continuously through the environment. The sun heats surface water, causing it to evaporate into water vapour that rises into the atmosphere. As it rises and cools, it condenses into tiny droplets forming clouds. When enough drops collect, rain falls back to the earth.",
            "Water is used by plants through their roots, by animals through drinking, and by humans in homes, farms, and industry. After use, water eventually returns to oceans and lakes, where the cycle begins again. Students trace water through this continuous loop.",
            "The importance of saving water cannot be overstated. Collect rainwater, fix dripping taps, use grey water (from washing) for plants, take shorter showers. Students calculate how much water is wasted in their home and make a pledge to reduce it. Each drop saved counts.",
          ],
          keyConcepts: [
            {
              title: "Water Cycle Steps",
              description:
                "Evaporation, condensation, precipitation, collection",
            },
            {
              title: "Water Use",
              description: "By plants, animals, and humans in daily life",
            },
            {
              title: "Rainwater Harvesting",
              description: "Collecting rainwater for storage and later use",
            },
            {
              title: "Water Saving Habits",
              description: "Practical daily actions to conserve water",
            },
          ],
          importantTerms: [
            {
              term: "Precipitation",
              definition: "Water falling from clouds as rain, hail, or snow",
            },
            {
              term: "Water Cycle",
              definition:
                "The continuous movement of water through environment",
            },
            {
              term: "Rainwater Harvesting",
              definition: "Collecting and storing rainwater for future use",
            },
          ],
        },
        {
          id: "3-evs-21",
          number: 21,
          name: "Families Can Be Different",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Families come in many shapes and sizes across India. Some children live with both parents and siblings (nuclear family). Some live in large joint families with grandparents, aunts, uncles, and cousins all sharing a home. Some live with a single parent, or with grandparents. All are valid family structures.",
            "India's regional diversity means family traditions vary widely. Naming ceremonies, wedding customs, food habits, and festivals differ between Tamil, Bengali, Punjabi, and Marathi families, for example. This diversity is a strength — students learn from and about different family traditions with curiosity and respect.",
            "The chapter emphasises that what makes a family is love, care, and support — not the number of people or specific relationships. Students draw their own family tree and share it with the class, celebrating each family's unique structure. This activity builds confidence and inclusion.",
          ],
          keyConcepts: [
            {
              title: "Types of Families",
              description: "Nuclear, joint, single-parent, extended families",
            },
            {
              title: "Regional Diversity",
              description:
                "Different traditions, customs, and practices across India",
            },
            {
              title: "Family Tree",
              description: "A diagram showing relationships in a family",
            },
            {
              title: "Inclusion",
              description: "Respecting and welcoming all family types",
            },
          ],
          importantTerms: [
            {
              term: "Nuclear Family",
              definition: "A family unit of parents and their children",
            },
            {
              term: "Joint Family",
              definition: "Multiple generations living together in one home",
            },
            {
              term: "Family Tree",
              definition:
                "A diagram showing the relationships of family members",
            },
          ],
        },
        {
          id: "3-evs-22",
          number: 22,
          name: "Left-Right",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "Direction is fundamental to navigation and communication. The four cardinal directions — North, South, East, West — are the primary compass points. The sun rises in the East and sets in the West, providing a natural reference for directions. At noon in India, shadows point North.",
            "Maps use directions, symbols, and scale to represent real areas. North is usually at the top of maps. Students learn to read simple maps using direction labels and understand that the map is a bird's eye view of the real world, scaled down.",
            "Between the four cardinal directions are four intermediate directions: Northeast, Northwest, Southeast, Southwest. Students practice giving directions using these eight points. Treasure hunt activities using direction cards make learning fun and kinesthetic.",
          ],
          keyConcepts: [
            {
              title: "Cardinal Directions",
              description: "North, South, East, West",
            },
            {
              title: "Compass",
              description:
                "A tool that shows direction using a magnetic needle",
            },
            {
              title: "Maps",
              description: "Bird's eye view using symbols and scale",
            },
            {
              title: "Intermediate Directions",
              description: "NE, NW, SE, SW between cardinal points",
            },
          ],
          importantTerms: [
            {
              term: "Cardinal Direction",
              definition:
                "One of the four main directions: North, South, East, West",
            },
            {
              term: "Compass",
              definition:
                "An instrument using a magnetic needle to show direction",
            },
            {
              term: "Scale (map)",
              definition:
                "The ratio between map distance and real-world distance",
            },
          ],
        },
        {
          id: "3-evs-23",
          number: 23,
          name: "A Beautiful Cloth",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "India is famous worldwide for its handloom weaving traditions. Silk sarees of Varanasi (Banarasi silk), cotton handloom of Pochampally and Kanchipuram, and woollen shawls of Kashmir represent centuries of craft heritage. Each region has unique patterns, colours, and techniques passed from master to apprentice.",
            "Weaving begins with threads (warp threads stretched on a loom) being interlaced with other threads (weft threads) at right angles. The loom is the tool that holds the warp threads and allows the weaver to pass the weft through, row by row, creating fabric. Different interlacing patterns create different textures.",
            "Natural dyes from plants and minerals — indigo (blue), turmeric (yellow), madder root (red), and iron-rich mud (black) — were traditionally used for colouring. Modern chemical dyes are brighter and more permanent, but natural dyes are making a comeback for ecological reasons. Students see how cloth connects ecology, art, and community.",
          ],
          keyConcepts: [
            {
              title: "Weaving Process",
              description: "Warp and weft threads interlaced on a loom",
            },
            {
              title: "Indian Handloom",
              description:
                "Banarasi silk, Kanchipuram, Pochampally, Kashmiri shawls",
            },
            {
              title: "Natural Dyes",
              description: "Plant and mineral dyes: indigo, turmeric, madder",
            },
            {
              title: "Craft Heritage",
              description: "Traditional skills passed down through generations",
            },
          ],
          importantTerms: [
            {
              term: "Loom",
              definition: "A device used to weave cloth by interlacing threads",
            },
            {
              term: "Warp",
              definition: "Threads stretched lengthwise on the loom",
            },
            {
              term: "Weft",
              definition: "Threads woven horizontally through the warp threads",
            },
          ],
        },
        {
          id: "3-evs-24",
          number: 24,
          name: "Web of Life",
          subject: "EVS",
          classNum: 3,
          explanation: [
            "All living things — plants, animals, insects, birds, fungi, and bacteria — are connected to each other in complex webs of relationships. Plants produce food using sunlight; insects pollinate plants; birds eat insects; larger animals eat birds; when animals die, fungi and bacteria break them down into nutrients for plants. Remove one link and the entire web is affected.",
            "A food web is more realistic than a simple food chain because most animals eat and are eaten by more than one species. If one animal population collapses, it affects all the others connected to it. This is why biodiversity — having many different species — makes ecosystems more stable and resilient.",
            "Human activities — deforestation, pollution, hunting — tear apart the web of life. When forests are cut, the birds that lived there disappear; the insects they ate multiply; the crops the insects damage fail. Students understand that protecting nature is not just about saving cute animals — it is about maintaining the web of life that supports all of us.",
          ],
          keyConcepts: [
            {
              title: "Food Web",
              description: "Interconnected food chains in an ecosystem",
            },
            {
              title: "Biodiversity",
              description: "Variety of life in an ecosystem",
            },
            {
              title: "Interdependence",
              description: "How all living things depend on each other",
            },
            {
              title: "Human Impact",
              description: "How human activities disrupt the web of life",
            },
          ],
          importantTerms: [
            {
              term: "Food Web",
              definition:
                "A network of interconnected food chains in an ecosystem",
            },
            {
              term: "Biodiversity",
              definition:
                "The variety of plant and animal life in an environment",
            },
            {
              term: "Ecosystem",
              definition:
                "A community of living things interacting with their environment",
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
          id: "3-hin-1",
          number: 1,
          name: "कक्कू",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "यह कविता कोयल (कक्कू) की आवाज़ और उसकी खूबसूरती पर आधारित है। कोयल की मीठी कुहू-कुहू की आवाज़ बसंत के आने का संकेत है। कविता में प्रकृति का सुंदर चित्रण है जो बच्चों को पक्षियों और पर्यावरण से जोड़ता है।",
            "Students learn new Hindi vocabulary about nature — birds, seasons, trees, and flowers. The poem's simple rhyme scheme makes it easy to memorize and recite. Children develop phonemic awareness in Hindi and practice correct pronunciation of complex consonant clusters.",
            "The chapter encourages children to listen for birdsong in their environment and identify different birds by their calls. This connects classroom Hindi learning to real-world observation and appreciation of nature.",
          ],
          keyConcepts: [
            {
              title: "प्रकृति शब्दावली",
              description: "Nature vocabulary: birds, seasons, trees",
            },
            {
              title: "तुकबंदी",
              description: "Rhyming words in Hindi poetry",
            },
            {
              title: "पक्षी-ज्ञान",
              description: "Learning about birds through poetry",
            },
            {
              title: "कविता पाठ",
              description: "Reading Hindi poetry with correct pronunciation",
            },
          ],
          importantTerms: [
            {
              term: "कोयल (Koyal)",
              definition: "Cuckoo — a bird famous for its sweet singing voice",
            },
            {
              term: "बसंत (Basant)",
              definition: "Spring — the season associated with cuckoos singing",
            },
            {
              term: "कुहू",
              definition:
                "The sound that a cuckoo makes; onomatopoeia in Hindi",
            },
          ],
        },
        {
          id: "3-hin-2",
          number: 2,
          name: "शेखीबाज़ मक्खी",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "यह कहानी एक घमंडी मक्खी की है जो शेर के कान में घुसकर परेशान करती है और खुद को बहादुर समझती है। लेकिन अंत में वही मक्खी एक साधारण मकड़ी के जाल में फँस जाती है। कहानी में घमंड के पतन का सुंदर संदेश है।",
            "Students learn the moral that pride and boastfulness lead to downfall. The story uses vivid characters — the boastful fly, the mighty lion (ironically defeated by the tiny fly), and the humble spider (which finally catches the fly). Character contrast teaches moral reasoning.",
            "Grammar focus: संज्ञा (nouns) and क्रिया (verbs) are identified through the story. Students practice reading Hindi sentences fluently and answer comprehension questions in Hindi. New vocabulary from the story is used in their own sentences.",
          ],
          keyConcepts: [
            {
              title: "घमंड का परिणाम",
              description: "Boastfulness leads to downfall — the story's moral",
            },
            {
              title: "संज्ञा और क्रिया",
              description: "Nouns and verbs in Hindi",
            },
            {
              title: "पात्र-विश्लेषण",
              description: "Analysing characters and their traits",
            },
            {
              title: "नैतिक कहानी",
              description: "Moral stories in Hindi literature",
            },
          ],
          importantTerms: [
            {
              term: "शेखीबाज़ (Shekhibaaz)",
              definition: "A boastful person who brags about themselves",
            },
            {
              term: "संज्ञा (Sangya)",
              definition: "Noun — a word naming a person, place, or thing",
            },
            {
              term: "क्रिया (Kriya)",
              definition: "Verb — a word showing action or state of being",
            },
          ],
        },
        {
          id: "3-hin-3",
          number: 3,
          name: "चाँद वाली अम्मा",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "यह कविता चाँद को एक माँ की तरह कल्पित करती है जो रात में आसमान में घर करती है और तारों को बच्चों की तरह सुलाती है। बच्चों की कल्पनाशीलता और चाँद के साथ उनके भावनात्मक जुड़ाव को यह कविता खूबसूरती से व्यक्त करती है।",
            "Students explore personification in Hindi poetry — how the moon is given human qualities (mother, home, nurturing). They learn that Hindi poetry has a rich tradition of finding human feelings in natural objects. This poetic device makes the moon feel warm and familiar.",
            "The chapter introduces vocabulary related to the night sky — stars, moon, darkness, nighttime sounds. Students write their own short Hindi poem imagining the moon or another celestial body as a person. This creative activity builds Hindi writing skills alongside imagination.",
          ],
          keyConcepts: [
            {
              title: "मानवीकरण",
              description: "Personification in Hindi poetry",
            },
            {
              title: "रात्रि शब्दावली",
              description: "Night sky vocabulary: moon, stars, darkness",
            },
            {
              title: "कल्पना और काव्य",
              description: "Imagination in Hindi poetry",
            },
            {
              title: "भावनात्मक भाषा",
              description: "Expressing feelings through poetic language",
            },
          ],
          importantTerms: [
            {
              term: "चाँद (Chaand)",
              definition: "Moon — the satellite of Earth visible at night",
            },
            {
              term: "मानवीकरण",
              definition:
                "Personification — giving human qualities to non-human things",
            },
            {
              term: "तारे (Taare)",
              definition: "Stars — distant suns seen as tiny lights at night",
            },
          ],
        },
        {
          id: "3-hin-4",
          number: 4,
          name: "मन करता है",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "यह कविता बच्चों की मनोकामनाओं और इच्छाओं को आवाज़ देती है — उड़ने की, तैरने की, पहाड़ चढ़ने की, बारिश में नाचने की। कविता बच्चों की स्वाभाविक जिज्ञासा और जोश को सम्मान देती है।",
            "The poem uses the grammatical construction 'मन करता है + infinitive verb' — 'I feel like doing...'. Students learn this common Hindi expression for wishes and desires. They practice creating their own sentences using this pattern to express personal wishes.",
            "Students write a personal poem listing five things their heart desires to do. This creative Hindi writing activity connects grammar (verb forms) with personal expression. Sharing these wish poems in class builds speaking confidence and vocabulary.",
          ],
          keyConcepts: [
            {
              title: "इच्छा व्यक्त करना",
              description: "Expressing wishes and desires in Hindi",
            },
            {
              title: "क्रिया के रूप",
              description: "Infinitive verb forms in Hindi",
            },
            {
              title: "बालमन की अभिव्यक्ति",
              description: "Children's feelings and desires in poetry",
            },
            {
              title: "रचनात्मक लेखन",
              description: "Writing wish poems in Hindi",
            },
          ],
          importantTerms: [
            {
              term: "इच्छा (Iccha)",
              definition: "Desire or wish — something one wants to do",
            },
            {
              term: "क्रिया (Kriya)",
              definition: "Verb — action word in Hindi grammar",
            },
            {
              term: "मन (Man)",
              definition:
                "Mind or heart — used to express feelings and desires",
            },
          ],
        },
        {
          id: "3-hin-5",
          number: 5,
          name: "बहादुर बित्तो",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "बित्तो एक साहसी लड़की है जो खेत में काम करते समय एक साँप देखती है और घबराने की जगह समझदारी से काम लेती है। वह अपने परिवार और गाँव वालों को बचाने के लिए तुरंत और बुद्धिमानी से काम करती है।",
            "The story celebrates a brave, quick-thinking girl from a village — challenging stereotypes about girls being timid and dependent. Students discuss what makes Bitto brave: it is not that she has no fear, but that she thinks clearly and acts quickly when others are in danger.",
            "Grammar focus: भूतकाल (past tense) and वर्तमानकाल (present tense) are compared through the story. Students retell the story of Bitto in their own words, practicing Hindi narrative writing with correct tense usage. This builds both grammar skills and confidence in Hindi storytelling.",
          ],
          keyConcepts: [
            {
              title: "साहस और बुद्धि",
              description: "Bravery combined with quick thinking",
            },
            {
              title: "लिंग समानता",
              description: "Girls can be strong, brave, and smart",
            },
            {
              title: "भूतकाल",
              description: "Past tense in Hindi — events that already happened",
            },
            {
              title: "कहानी पुनर्कथन",
              description: "Retelling a story in own words",
            },
          ],
          importantTerms: [
            {
              term: "साहस (Saahas)",
              definition: "Courage or bravery in the face of danger",
            },
            {
              term: "भूतकाल (Bhootkaal)",
              definition:
                "Past tense — describing events that already happened",
            },
            {
              term: "बुद्धिमानी (Buddhimaani)",
              definition:
                "Intelligence and wise thinking in difficult situations",
            },
          ],
        },
        {
          id: "3-hin-6",
          number: 6,
          name: "हमसे सब कहते",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "यह कविता बच्चों के नज़रिये से है — बड़े उनसे हमेशा कुछ न कुछ करने के लिए कहते हैं: जल्दी उठो, पढ़ो, खाना खाओ, शोर मत करो। लेकिन बच्चे चाहते हैं कि उन्हें भी अपने मन से जीने का मौका मिले।",
            "The poem invites children to express their own perspective on the rules adults impose on them. This teaches Hindi writing about personal experience and opinion. Students learn to write first-person (मैं) sentences expressing their views respectfully.",
            "The chapter introduces the concept that children have rights — to play, to rest, to express opinions, to make some choices. Students compare what adults tell them to do with what they themselves want to do, and discuss where rules are fair and helpful and where children could have more freedom.",
          ],
          keyConcepts: [
            {
              title: "बच्चों का दृष्टिकोण",
              description: "Expressing children's perspective on adult rules",
            },
            {
              title: "प्रथम पुरुष",
              description: "First-person (मैं) writing in Hindi",
            },
            {
              title: "बाल अधिकार",
              description:
                "Children's rights to play, rest, and express opinions",
            },
            {
              title: "विचार व्यक्त करना",
              description: "Expressing opinions and views in Hindi",
            },
          ],
          importantTerms: [
            {
              term: "अधिकार (Adhikar)",
              definition:
                "Rights — things one is entitled to by law or fairness",
            },
            {
              term: "दृष्टिकोण (Drishtikon)",
              definition: "Point of view or perspective",
            },
            {
              term: "प्रथम पुरुष",
              definition: "First person — speaking as oneself using 'मैं' (I)",
            },
          ],
        },
        {
          id: "3-hin-7",
          number: 7,
          name: "टिपटिपवा",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "टिपटिपवा वर्षा के पानी की टिप-टिप आवाज़ का प्रतीक है। यह कहानी एक जंगल में बारिश के दौरान घटती है जहाँ विभिन्न जानवर अपने अनुभव साझा करते हैं। बारिश से प्रकृति जीवंत हो उठती है।",
            "Students learn about onomatopoeia in Hindi — टिप-टिप, छप-छप, गड़गड़, बिजली कड़की. These sound words bring language alive and make Hindi reading more vivid and enjoyable. Students collect sound words from their own environment.",
            "The water cycle is revisited through this story — rain falling, water flowing, plants growing, ponds filling, animals drinking. Students connect the science of water (evaporation, condensation, precipitation) to the enjoyment of monsoon rain. Hindi becomes a bridge between emotional experience and scientific understanding.",
          ],
          keyConcepts: [
            {
              title: "ध्वनि अनुकरण शब्द",
              description: "Onomatopoeia in Hindi: टिप-टिप, छप-छप",
            },
            {
              title: "मानसून",
              description: "Monsoon season and its importance in India",
            },
            {
              title: "प्रकृति वर्णन",
              description: "Describing nature scenes in Hindi",
            },
            {
              title: "जल चक्र",
              description: "Water cycle through the lens of Hindi story",
            },
          ],
          importantTerms: [
            {
              term: "ध्वनि अनुकरण",
              definition:
                "Onomatopoeia — words imitating the sound they describe",
            },
            {
              term: "मानसून (Monsoon)",
              definition:
                "The rainy season in India, usually June to September",
            },
            {
              term: "वर्षा (Varsha)",
              definition: "Rain — water falling from clouds",
            },
          ],
        },
        {
          id: "3-hin-8",
          number: 8,
          name: "बंदर बाँट",
          subject: "Hindi",
          classNum: 3,
          explanation: [
            "दो बिल्लियाँ एक रोटी को लेकर झगड़ रही हैं। एक चालाक बंदर न्यायाधीश बनकर दोनों टुकड़ों को 'बराबर' करने के नाम पर खुद खाता जाता है, जब तक रोटी खत्म नहीं हो जाती। बिल्लियाँ खाली हाथ रह जाती हैं।",
            "The story teaches a powerful lesson about greed and the danger of letting a third party decide disputes between friends. When two people quarrel, outsiders often benefit at both their expenses. Students discuss how the cats should have resolved their dispute fairly between themselves.",
            "Grammar focus: संवाद लेखन (dialogue writing) in Hindi. Students write the conversation between the two cats and the monkey, using correct punctuation for dialogue (speech marks in Hindi text). This develops Hindi writing skills along with understanding of moral reasoning.",
          ],
          keyConcepts: [
            {
              title: "लालच का परिणाम",
              description: "Greed and deception lead to loss for everyone",
            },
            {
              title: "विवाद समाधान",
              description: "How to resolve disagreements fairly",
            },
            {
              title: "संवाद लेखन",
              description: "Writing dialogue between characters in Hindi",
            },
            {
              title: "नैतिक पाठ",
              description: "Moral lesson about fairness and trust",
            },
          ],
          importantTerms: [
            {
              term: "बाँट (Baant)",
              definition: "Division or sharing of something between people",
            },
            {
              term: "संवाद (Samvaad)",
              definition:
                "Dialogue — conversation between two or more characters",
            },
            {
              term: "न्याय (Nyaay)",
              definition: "Justice or fairness in resolving disputes",
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
        {
          id: "5-math-2",
          number: 2,
          name: "Shapes and Angles",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "An angle is formed when two rays meet at a common point (the vertex). Angles are measured in degrees (°). Students learn to identify and name different types of angles: acute angle (less than 90°), right angle (exactly 90°), obtuse angle (between 90° and 180°), and straight angle (exactly 180°).",
            "A protractor is the tool used to measure angles. Students learn to place a protractor correctly — aligning the centre with the vertex and the baseline with one ray — and read the scale. They measure angles in shapes around them, discovering that all triangles have angles summing to 180°.",
            "Students explore angles in everyday life — the hands of a clock, the opening of a book, a door swinging open, the corner of a table. Identifying angles in real-world contexts builds geometric intuition and makes abstract concepts concrete.",
          ],
          keyConcepts: [
            {
              title: "Types of Angles",
              description: "Acute, right, obtuse, and straight angles",
            },
            {
              title: "Measuring Angles",
              description: "Using a protractor correctly",
            },
            {
              title: "Angle Sum in Triangle",
              description: "All three angles in any triangle add up to 180°",
            },
            {
              title: "Angles in Daily Life",
              description: "Finding angles in clocks, doors, shapes",
            },
          ],
          importantTerms: [
            {
              term: "Angle",
              definition:
                "The space between two rays sharing a common vertex, measured in degrees",
            },
            {
              term: "Right Angle",
              definition:
                "An angle of exactly 90°, like the corner of a square",
            },
            {
              term: "Protractor",
              definition: "A semicircular tool used to measure angles",
            },
          ],
        },
        {
          id: "5-math-3",
          number: 3,
          name: "How Many Squares?",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Area is the amount of surface a shape covers. This chapter introduces area by counting unit squares inside shapes. Students place a square grid over shapes and count full squares, then estimate partial squares. This hands-on approach makes area intuitive.",
            "Students discover that the area of a rectangle can be found by multiplying its length by its width: Area = Length × Width. This formula is derived from counting — a 4×3 rectangle has 4 rows of 3 squares = 12 squares. Understanding why the formula works is more valuable than just using it.",
            "Comparing areas of irregular shapes by counting squares shows that two shapes with different perimeters can have the same area, and vice versa. Students design their own shapes on grid paper and compare areas, building flexible geometric thinking.",
          ],
          keyConcepts: [
            {
              title: "Area by Counting",
              description: "Counting unit squares inside a shape",
            },
            {
              title: "Area Formula",
              description: "Area = Length × Width for rectangles",
            },
            {
              title: "Area vs Perimeter",
              description: "Different shapes can have equal area",
            },
            {
              title: "Unit of Area",
              description: "Square centimetre (cm²) as unit of area",
            },
          ],
          importantTerms: [
            {
              term: "Area",
              definition:
                "The amount of surface a shape covers, measured in square units",
            },
            {
              term: "Square Centimetre (cm²)",
              definition: "A unit of area equal to a square with sides of 1 cm",
            },
            {
              term: "Unit Square",
              definition:
                "A square with sides of 1 unit, used as the basic measure of area",
            },
          ],
        },
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
        {
          id: "5-math-5",
          number: 5,
          name: "Does It Look The Same?",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Symmetry means a shape looks the same when reflected in a mirror line. A shape has a line of symmetry if folding along that line makes both halves match perfectly. Students explore how many lines of symmetry different shapes have — a square has 4, a rectangle has 2, a circle has infinitely many.",
            "Mirror images and reflections are explored practically — students hold a mirror against shapes and letters and observe what happens. They notice that some letters (A, H, M) look the same in a mirror while others (b, d, p, q) change. This connects symmetry to reading and visual perception.",
            "Rotation symmetry is introduced — a shape has rotational symmetry if it looks the same after being rotated by less than 360°. A square looks the same after rotation by 90°, 180°, and 270°. Students investigate rotational symmetry in patterns found in rangoli, tiles, and nature.",
          ],
          keyConcepts: [
            {
              title: "Line of Symmetry",
              description: "The fold line that creates two identical halves",
            },
            {
              title: "Mirror Images",
              description: "Reflection of a shape across a line",
            },
            {
              title: "Rotational Symmetry",
              description: "A shape looking the same after partial rotation",
            },
            {
              title: "Symmetry in Nature",
              description:
                "Symmetry in leaves, butterflies, flowers, snowflakes",
            },
          ],
          importantTerms: [
            {
              term: "Symmetry",
              definition:
                "A shape has symmetry if it looks the same after reflection or rotation",
            },
            {
              term: "Line of Symmetry",
              definition:
                "A line dividing a shape into two mirror-image halves",
            },
            {
              term: "Rotation",
              definition: "Turning a shape around a central point",
            },
          ],
        },
        {
          id: "5-math-6",
          number: 6,
          name: "Be My Multiple, I'll Be Your Factor",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "A factor of a number divides it exactly without any remainder. Factors of 12 are 1, 2, 3, 4, 6, and 12. A multiple of a number is found by multiplying it by 1, 2, 3... The multiples of 4 are 4, 8, 12, 16... Every number is both a factor and multiple of itself.",
            "The Highest Common Factor (HCF) is the largest factor shared by two or more numbers. HCF of 12 and 18 is 6. The Lowest Common Multiple (LCM) is the smallest multiple shared by two or more numbers. LCM of 4 and 6 is 12. These concepts are essential for simplifying fractions and solving real-world sharing problems.",
            "Prime numbers have exactly two factors: 1 and themselves. 2, 3, 5, 7, 11, 13 are primes. Composite numbers have more than two factors. The Sieve of Eratosthenes is an ancient method for finding all primes up to any number. Prime factorisation expresses any number as a product of prime factors.",
          ],
          keyConcepts: [
            {
              title: "Factors and Multiples",
              description: "Factors divide exactly; multiples are products",
            },
            {
              title: "HCF",
              description: "Highest Common Factor of two or more numbers",
            },
            {
              title: "LCM",
              description: "Lowest Common Multiple of two or more numbers",
            },
            {
              title: "Prime Numbers",
              description: "Numbers with exactly two factors: 1 and itself",
            },
          ],
          importantTerms: [
            {
              term: "Factor",
              definition: "A number that divides another number exactly",
            },
            {
              term: "Multiple",
              definition: "A number obtained by multiplying a given number",
            },
            {
              term: "HCF",
              definition:
                "Highest Common Factor — largest factor shared by two numbers",
            },
            {
              term: "LCM",
              definition:
                "Lowest Common Multiple — smallest multiple shared by two numbers",
            },
          ],
        },
        {
          id: "5-math-7",
          number: 7,
          name: "Can You See The Pattern?",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Number patterns appear everywhere in mathematics. The simplest are arithmetic sequences (adding the same number each time: 3, 6, 9, 12...) and geometric sequences (multiplying by the same number: 2, 4, 8, 16...). Identifying the rule in a pattern allows us to predict future terms.",
            "More complex patterns include triangular numbers (1, 3, 6, 10, 15...) formed by triangular arrangements of dots, and square numbers (1, 4, 9, 16...) formed by square arrangements. Students draw these visually to understand why numbers behave as they do.",
            "Magic squares, where all rows, columns, and diagonals add to the same total, challenge students to apply systematic thinking. Finding the pattern in each row and column develops algebraic thinking — the foundation of algebra in higher classes.",
          ],
          keyConcepts: [
            {
              title: "Arithmetic Sequences",
              description: "Adding same amount each time",
            },
            {
              title: "Geometric Sequences",
              description: "Multiplying by same amount each time",
            },
            {
              title: "Triangular and Square Numbers",
              description: "Special number patterns based on shapes",
            },
            {
              title: "Magic Squares",
              description: "Grid where all rows/columns/diagonals sum equally",
            },
          ],
          importantTerms: [
            {
              term: "Pattern",
              definition:
                "A repeating or predictable sequence of numbers or shapes",
            },
            {
              term: "Sequence",
              definition: "An ordered list of numbers following a rule",
            },
            {
              term: "Magic Square",
              definition:
                "A grid where all rows, columns, and diagonals add to the same number",
            },
          ],
        },
        {
          id: "5-math-8",
          number: 8,
          name: "Mapping Your Way",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Maps are scaled representations of real areas as seen from above. Scale shows the relationship between map distance and real distance — for example, 1 cm on the map = 1 km in real life. Students calculate real distances using map scale: if the map distance is 5 cm and scale is 1:100,000, the real distance is 5 km.",
            "Map directions use cardinal (N, S, E, W) and intermediate (NE, NW, SE, SW) points. Grid references (like A3, B5) identify exact locations on a map. Students read and draw simple maps of their school, neighbourhood, or an imaginary town, applying direction and scale.",
            "Maps have different purposes — political maps show country and state boundaries, physical maps show terrain and rivers, weather maps show rainfall and temperature, and treasure maps show paths to hidden things. Understanding how map type serves its purpose builds critical geographic thinking.",
          ],
          keyConcepts: [
            {
              title: "Map Scale",
              description: "Ratio between map distance and real distance",
            },
            {
              title: "Directions on Maps",
              description: "N, S, E, W and intermediate directions",
            },
            {
              title: "Grid References",
              description: "Finding locations using letter-number coordinates",
            },
            {
              title: "Types of Maps",
              description: "Political, physical, weather, and thematic maps",
            },
          ],
          importantTerms: [
            {
              term: "Scale",
              definition: "Ratio of map distance to real-world distance",
            },
            {
              term: "Grid Reference",
              definition:
                "A letter-number code identifying a location on a map",
            },
            {
              term: "Legend",
              definition: "A map key explaining what symbols represent",
            },
          ],
        },
        {
          id: "5-math-9",
          number: 9,
          name: "Boxes and Sketches",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "3D shapes (cubes, cuboids, cylinders, cones, spheres) have three dimensions: length, width, and height. Students learn to identify these shapes from different views — top, front, and side view. The same 3D object looks very different depending on the viewing angle.",
            "A net is a 2D shape that can be folded to make a 3D shape. Students cut out nets of cubes and cuboids from squared paper and fold them to verify the shapes. This hands-on activity builds spatial reasoning — a skill essential for engineering, architecture, and design.",
            "Students count faces, edges, and vertices of 3D shapes. Euler's Formula connects these: Vertices - Edges + Faces = 2 for all convex polyhedra. A cube has 8 vertices, 12 edges, and 6 faces: 8 - 12 + 6 = 2. This elegant formula shows the deep connection between shape properties.",
          ],
          keyConcepts: [
            {
              title: "3D Shapes",
              description: "Cube, cuboid, cylinder, cone, sphere",
            },
            {
              title: "Nets of 3D Shapes",
              description: "Flat patterns that fold into 3D shapes",
            },
            {
              title: "Views of 3D Objects",
              description: "Top, front, and side views",
            },
            {
              title: "Faces, Edges, Vertices",
              description: "Properties of 3D shapes; Euler's formula",
            },
          ],
          importantTerms: [
            {
              term: "Net",
              definition: "A 2D pattern that folds up to make a 3D shape",
            },
            {
              term: "Vertex",
              definition: "A corner where two or more edges of a shape meet",
            },
            {
              term: "Edge",
              definition: "A line where two faces of a 3D shape meet",
            },
          ],
        },
        {
          id: "5-math-10",
          number: 10,
          name: "Tenths and Hundredths",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Decimals extend the place value system beyond the ones column. A decimal point separates the whole number part from the fractional part. The first column after the decimal is tenths (1/10), the second is hundredths (1/100). So 3.47 means 3 ones, 4 tenths, and 7 hundredths.",
            "Decimals and fractions represent the same values: 0.5 = 5/10 = 1/2, 0.25 = 25/100 = 1/4. Converting between them is an important skill. Students use a 10×10 grid to visualise decimals — shading 47 out of 100 squares shows 0.47.",
            "Comparing and ordering decimals requires careful attention to place value. 0.3 is not the same as 0.30 (they are equal) but 0.3 is greater than 0.25 because 3 tenths is more than 2 tenths. Students practice addition and subtraction of decimals, keeping the decimal point aligned.",
          ],
          keyConcepts: [
            {
              title: "Decimal Place Value",
              description: "Tenths (1/10) and hundredths (1/100)",
            },
            {
              title: "Fractions and Decimals",
              description: "Converting between decimal and fraction notation",
            },
            {
              title: "Comparing Decimals",
              description: "Ordering decimal numbers by place value",
            },
            {
              title: "Decimal Operations",
              description: "Adding and subtracting decimals",
            },
          ],
          importantTerms: [
            {
              term: "Decimal",
              definition:
                "A number with a decimal point separating whole from fractional part",
            },
            {
              term: "Tenths",
              definition: "The first decimal place; one tenth = 0.1 = 1/10",
            },
            {
              term: "Hundredths",
              definition:
                "The second decimal place; one hundredth = 0.01 = 1/100",
            },
          ],
        },
        {
          id: "5-math-11",
          number: 11,
          name: "Area and Its Boundary",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Perimeter is the total distance around the outside of a shape — the sum of all its sides. For a rectangle: Perimeter = 2 × (Length + Width). For a square: Perimeter = 4 × Side. Students measure perimeters in practical contexts: fencing a garden, framing a photo.",
            "Area is the surface covered by a shape. For a rectangle: Area = Length × Width. Students discover that increasing perimeter doesn't necessarily increase area. A 6×1 rectangle has perimeter 14 and area 6; a 4×3 rectangle also has perimeter 14 but area 12.",
            "Real-world problems connect area and perimeter: how much paint to buy for a wall (area), how much fencing for a garden (perimeter). Students measure their classroom and calculate both. The distinction between 'around' (perimeter) and 'inside' (area) is fundamental to spatial reasoning.",
          ],
          keyConcepts: [
            {
              title: "Perimeter",
              description: "Total distance around the boundary of a shape",
            },
            {
              title: "Area",
              description: "Surface covered by a shape; Area = L × W",
            },
            {
              title: "Perimeter vs Area",
              description:
                "Different measures; same perimeter can give different areas",
            },
            {
              title: "Real-World Application",
              description: "Fencing (perimeter) and painting (area)",
            },
          ],
          importantTerms: [
            {
              term: "Perimeter",
              definition:
                "The total distance around the outside boundary of a shape",
            },
            {
              term: "Area",
              definition: "The amount of surface enclosed within a boundary",
            },
            {
              term: "Square Metre (m²)",
              definition: "Unit of area for larger surfaces",
            },
          ],
        },
        {
          id: "5-math-12",
          number: 12,
          name: "Smart Charts",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Data is information collected and organized for a purpose. Students learn the data handling process: collecting (through surveys, counting), organizing (in tally marks and tables), representing (in graphs), and interpreting (drawing conclusions from graphs).",
            "Bar graphs use rectangular bars of different heights to compare quantities. Each bar represents a category; the height shows the value. Students draw bar graphs on squared paper, labelling axes, giving a title, and choosing an appropriate scale.",
            "Pie charts (circle graphs) show data as proportions of a whole circle. They are ideal for showing 'what fraction of the total' each category represents. Students interpret pie charts and discuss their strengths and limitations compared to bar graphs.",
          ],
          keyConcepts: [
            {
              title: "Data Collection",
              description:
                "Surveys, tally marks, and organising data in tables",
            },
            {
              title: "Bar Graphs",
              description: "Comparing quantities using rectangular bars",
            },
            {
              title: "Pie Charts",
              description:
                "Showing proportions of a whole using circle sectors",
            },
            {
              title: "Interpreting Data",
              description: "Drawing conclusions from graphs and tables",
            },
          ],
          importantTerms: [
            {
              term: "Tally Marks",
              definition:
                "Marks used to count in groups of five for easy totalling",
            },
            {
              term: "Bar Graph",
              definition: "A chart using rectangular bars to show data",
            },
            {
              term: "Pie Chart",
              definition:
                "A circular chart divided into sectors showing proportions",
            },
          ],
        },
        {
          id: "5-math-13",
          number: 13,
          name: "Ways to Multiply and Divide",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Multiplication can be done in many ways. The standard algorithm (column multiplication) is one method, but mental math strategies like breaking numbers apart are often faster. For example: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. The distributive property makes this possible.",
            "Long division breaks the process into steps: Divide the first digit(s), Multiply, Subtract, Bring down — and repeat. Students practice dividing 3 and 4-digit numbers by 1 and 2-digit divisors, always checking their answer by multiplying back.",
            "Estimation is valuable in both multiplication and division: rounding numbers before calculating gives a quick approximate answer to check if the exact answer is reasonable. 'Is 234 × 17 about 200 × 20 = 4,000? My answer of 3,978 seems right!'",
          ],
          keyConcepts: [
            {
              title: "Multiplication Strategies",
              description:
                "Standard algorithm and mental math using distribution",
            },
            {
              title: "Long Division",
              description: "Divide, multiply, subtract, bring down — repeat",
            },
            {
              title: "Estimation in Calculation",
              description: "Using rounding to check exact answers",
            },
            {
              title: "Distributive Property",
              description: "a × (b + c) = a×b + a×c",
            },
          ],
          importantTerms: [
            {
              term: "Distributive Property",
              definition:
                "Multiplying a sum by breaking it into parts: a(b+c) = ab + ac",
            },
            {
              term: "Quotient",
              definition: "The result of a division",
            },
            {
              term: "Remainder",
              definition:
                "What is left over when a number cannot be divided exactly",
            },
          ],
        },
        {
          id: "5-math-14",
          number: 14,
          name: "How Big? How Heavy?",
          subject: "Mathematics",
          classNum: 5,
          explanation: [
            "Volume is the amount of 3D space an object occupies. Students build cuboids from unit cubes and count the cubes to find volume. A cuboid of length 4, width 3, and height 2 contains 4×3×2 = 24 unit cubes. Volume = Length × Width × Height, and is measured in cubic units.",
            "Mass is how much matter an object contains. It is measured in grams (g) and kilograms (kg). Weight is the force of gravity on an object — heavier objects have more weight. Students weigh classroom objects and estimate mass before measuring, building strong mass intuition.",
            "Estimating size and mass is a practical skill: Is a bag of rice closer to 1 kg or 5 kg? Is a swimming pool closer to 1,000 litres or 1,000,000 litres? Students develop the ability to make reasonable estimates in everyday contexts, knowing when precision is needed and when an estimate is enough.",
          ],
          keyConcepts: [
            {
              title: "Volume",
              description: "3D space occupied; Volume = L × W × H",
            },
            {
              title: "Cubic Units",
              description: "cm³ and m³ as units of volume",
            },
            {
              title: "Mass vs Weight",
              description: "Mass = amount of matter; weight = gravity's force",
            },
            {
              title: "Estimation",
              description: "Making reasonable guesses about size and mass",
            },
          ],
          importantTerms: [
            {
              term: "Volume",
              definition:
                "The amount of 3D space an object occupies, measured in cubic units",
            },
            {
              term: "Cubic Centimetre (cm³)",
              definition: "A unit of volume; a cube with 1 cm sides",
            },
            {
              term: "Mass",
              definition:
                "The amount of matter in an object, measured in grams or kilograms",
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
          id: "5-eng-2",
          number: 2,
          name: "Wonderful Waste!",
          subject: "English",
          classNum: 5,
          explanation: [
            "This story explores how what we consider 'waste' can be a wonderful resource if we think creatively. Orange peels become marmalade, vegetable water becomes soup stock, torn cloth becomes a rag rug. The story celebrates ingenuity and sustainability.",
            "Students learn about recycling (processing waste into new materials), reusing (using the same object again), and reducing (buying and consuming less). These three R's are the foundation of environmental responsibility. Students audit their own home waste and identify opportunities for the three R's.",
            "The story develops vocabulary related to sustainability and household economy. Students write a 'Wonderful Waste' story of their own, imagining creative uses for something usually thrown away. This creative non-fiction writing builds imagination and environmental thinking simultaneously.",
          ],
          keyConcepts: [
            {
              title: "Three R's",
              description: "Reduce, Reuse, Recycle for sustainable living",
            },
            {
              title: "Sustainability",
              description: "Using resources wisely for future generations",
            },
            {
              title: "Creative Reuse",
              description: "Finding new uses for 'waste' materials",
            },
            {
              title: "Environmental Responsibility",
              description: "Individual actions that help the planet",
            },
          ],
          importantTerms: [
            {
              term: "Recycle",
              definition: "Process waste materials into new products",
            },
            {
              term: "Reuse",
              definition: "Use something again rather than throwing it away",
            },
            {
              term: "Sustainability",
              definition:
                "Using resources in ways that can be maintained long-term",
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
        {
          id: "5-eng-4",
          number: 4,
          name: "Robinson Crusoe Discovers a Footprint",
          subject: "English",
          classNum: 5,
          explanation: [
            "Adapted from Daniel Defoe's classic novel, this excerpt follows Robinson Crusoe — a man stranded alone on an island — who discovers a human footprint in the sand. The discovery brings both hope (he is not alone) and terror (who is it?). The tension and suspense make this a masterclass in descriptive writing.",
            "Students analyse how the author builds suspense — short sentences, repeated questions, vivid description of Crusoe's physical reactions (heart pounding, legs trembling). These techniques are identified and then applied in students' own adventure writing.",
            "The chapter introduces the genre of adventure fiction. Students discuss what makes an adventure story gripping: an isolated hero, a problem or mystery, dangerous circumstances, and the hero's internal thoughts and fears. Students plan an adventure story of their own using these elements.",
          ],
          keyConcepts: [
            {
              title: "Building Suspense",
              description: "Short sentences, questions, physical reactions",
            },
            {
              title: "Adventure Fiction",
              description: "Genre features: isolated hero, mystery, danger",
            },
            {
              title: "Descriptive Writing",
              description: "Using vivid details to create tension",
            },
            {
              title: "First-Person Narrative",
              description: "Story told from the perspective of 'I'",
            },
          ],
          importantTerms: [
            {
              term: "Suspense",
              definition:
                "A feeling of excited uncertainty about what will happen",
            },
            {
              term: "First-Person Narrative",
              definition:
                "A story told from the narrator's own perspective using 'I'",
            },
            {
              term: "Adventure Fiction",
              definition:
                "A story genre featuring exciting challenges and danger",
            },
          ],
        },
        {
          id: "5-eng-5",
          number: 5,
          name: "Flying Together",
          subject: "English",
          classNum: 5,
          explanation: [
            "This poem describes a flock of geese flying together in a V-formation. The lead goose breaks the air resistance for those behind, and when the leader tires, another takes the front. The formation allows the whole flock to fly much farther than any one goose could alone.",
            "The poem is a sustained metaphor for human cooperation and teamwork. Just as geese support each other by flying together, people support each other through cooperation. Students identify the metaphorical meaning and discuss how it applies to family, classroom, sports teams, and communities.",
            "Students learn about onomatopoeia through the sounds of wings beating, about imagery through the visual of geese in the sky, and about extended metaphor (metaphor sustained throughout a poem). These poetic devices are practiced in students' own cooperative-themed poems.",
          ],
          keyConcepts: [
            {
              title: "Extended Metaphor",
              description: "A comparison sustained throughout an entire poem",
            },
            {
              title: "Cooperation Theme",
              description: "Working together achieves more than working alone",
            },
            {
              title: "Geese and Formation Flying",
              description: "Science of V-formation and air resistance",
            },
            {
              title: "Poetic Devices",
              description: "Metaphor, imagery, and onomatopoeia in the poem",
            },
          ],
          importantTerms: [
            {
              term: "Extended Metaphor",
              definition:
                "A metaphor carried through the whole poem or passage",
            },
            {
              term: "Cooperation",
              definition: "Working together with others for mutual benefit",
            },
            {
              term: "Formation",
              definition: "An arrangement or pattern, especially of a group",
            },
          ],
        },
        {
          id: "5-eng-6",
          number: 6,
          name: "Rip Van Winkle",
          subject: "English",
          classNum: 5,
          explanation: [
            "In this famous story, Rip Van Winkle falls asleep in the mountains and wakes up 20 years later to find his world completely changed — his village is different, his wife and dog are gone, his children are grown adults. The story explores the theme of time passing and the impossibility of escaping change.",
            "Students learn about Washington Irving's original story and its cultural context. They discuss how the world changes over 20 years — technology, society, fashion, politics — and imagine what Rip must have felt. This builds empathy and historical thinking.",
            "The chapter introduces vocabulary about change, time, and confusion. Grammar focus: narrative tenses (simple past, past continuous, past perfect) are all used in retelling the story. Students write a modern retelling — what would Rip find if he woke up in today's world after a 20-year sleep?",
          ],
          keyConcepts: [
            {
              title: "Theme of Change",
              description: "How the world changes over time",
            },
            {
              title: "Narrative Tenses",
              description: "Past simple, past continuous, past perfect",
            },
            {
              title: "Folk Tale",
              description: "Traditional story with a moral or cultural message",
            },
            {
              title: "Creative Retelling",
              description: "Reimagining a classic story in a modern setting",
            },
          ],
          importantTerms: [
            {
              term: "Folk Tale",
              definition:
                "A traditional story passed down through oral tradition",
            },
            {
              term: "Nostalgia",
              definition: "A feeling of longing for the past",
            },
            {
              term: "Past Perfect",
              definition:
                "Tense describing an action completed before another past action",
            },
          ],
        },
        {
          id: "5-eng-7",
          number: 7,
          name: "The Lazy Frog",
          subject: "English",
          classNum: 5,
          explanation: [
            "This humorous poem describes a frog who refuses to do anything energetic — he won't jump, swim, or catch flies. He only wants to sit on a lily pad and complain about how tired he is. The comedy comes from the gap between the frog's dramatic laziness and the simplicity of what is asked of him.",
            "Students explore humour in poetry — exaggeration (hyperbole), comic situations, irony, and repetition for comic effect. They identify which techniques make the poem funny and try to incorporate humour into their own writing. Comedy is a sophisticated literary skill.",
            "Describing words (adjectives and adverbs) are the grammar focus. The lazy frog is described with vivid adjectives. Students practise using adverbs to describe verbs: the frog complained bitterly, sat lazily, yawned dramatically. This enriches their descriptive writing vocabulary.",
          ],
          keyConcepts: [
            {
              title: "Humour in Poetry",
              description: "Exaggeration, irony, comic situations",
            },
            {
              title: "Hyperbole",
              description:
                "Deliberate exaggeration for comic or dramatic effect",
            },
            {
              title: "Adjectives and Adverbs",
              description: "Describing words for nouns and verbs",
            },
            {
              title: "Comic Writing",
              description: "Techniques for making writing funny",
            },
          ],
          importantTerms: [
            {
              term: "Hyperbole",
              definition:
                "Exaggerated statements not meant to be taken literally",
            },
            {
              term: "Adverb",
              definition:
                "A word that modifies a verb, adjective, or other adverb",
            },
            {
              term: "Irony",
              definition:
                "When words or situations mean the opposite of what is expected",
            },
          ],
        },
        {
          id: "5-eng-8",
          number: 8,
          name: "Teamwork",
          subject: "English",
          classNum: 5,
          explanation: [
            "In this story, a group of animals with different strengths — an elephant's power, a monkey's agility, a parrot's sharp eyesight, and a turtle's patience — must work together to help their friend cross a dangerous river. No single animal can do it alone, but together they succeed.",
            "Each animal's unique contribution is valued equally. The story challenges the idea that only certain skills (usually strength or intelligence) are valuable. Students identify their own unique strengths and how they contribute to group projects.",
            "The story introduces the concept of synergy — the idea that a team can achieve more than the sum of its parts. Students apply this to group work in class, discussing how different roles (leader, organiser, creator, supporter) are all necessary for a successful team project.",
          ],
          keyConcepts: [
            {
              title: "Synergy",
              description: "A team achieves more together than individually",
            },
            {
              title: "Valuing Different Strengths",
              description: "All skills and contributions matter",
            },
            {
              title: "Character Values",
              description: "Cooperation, patience, and respect for others",
            },
            {
              title: "Story Moral",
              description: "Identifying and applying a story's moral lesson",
            },
          ],
          importantTerms: [
            {
              term: "Synergy",
              definition:
                "Combined effort producing a greater result than the sum of individual efforts",
            },
            {
              term: "Collaboration",
              definition: "Working with others to achieve a shared goal",
            },
            {
              term: "Moral",
              definition: "The lesson or message a story teaches",
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
        {
          id: "5-evs-2",
          number: 2,
          name: "A Snake Charmer's Story",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Snake charming is a traditional occupation in India practised by the Sapera community. Using a flute (pungi), the snake charmer coaxes a cobra to sway. The snake doesn't actually hear the music (snakes have no external ears) but responds to the movement of the instrument. This ancient art form is part of India's cultural heritage.",
            "Snakes are misunderstood creatures. Most are harmless; only a few Indian species are venomous. Snakes are essential to agriculture — they control rodent populations that destroy grain. The chapter builds scientific understanding of snakes and reduces irrational fear.",
            "Snake charming as an occupation is declining due to the Wildlife Protection Act (1972), which makes keeping wild snakes illegal. Many Sapera families face economic hardship. The chapter raises questions about cultural heritage vs wildlife protection — a complex issue with no easy answers.",
          ],
          keyConcepts: [
            {
              title: "Snake Charming Tradition",
              description: "Sapera community's traditional occupation",
            },
            {
              title: "Snake Biology",
              description: "How snakes hear and move; venomous vs non-venomous",
            },
            {
              title: "Wildlife Protection",
              description: "Laws protecting wild animals in India",
            },
            {
              title: "Occupation at Risk",
              description: "Traditional livelihoods threatened by modern laws",
            },
          ],
          importantTerms: [
            {
              term: "Sapera",
              definition: "A traditional snake-charmer community in India",
            },
            {
              term: "Wildlife Protection Act",
              definition:
                "Indian law (1972) protecting wildlife from exploitation",
            },
            {
              term: "Venom",
              definition:
                "Poisonous substance produced by certain snakes and other animals",
            },
          ],
        },
        {
          id: "5-evs-4",
          number: 4,
          name: "Mangoes Round the Year",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Mangoes are available for only a few months a year, but people in India have developed clever methods to preserve them for use throughout the year. Pickling (mixing with oil, salt, and spices), making amchur (drying and powdering raw mango), preparing aam papad (mango leather), and bottling juice all extend the fruit's availability.",
            "Food preservation works by preventing the growth of microorganisms that cause spoilage. Salt, oil, vinegar, and sugar create conditions where bacteria and fungi cannot thrive. Drying removes the water that microorganisms need. Refrigeration slows their growth. Understanding these principles helps students appreciate why preserved foods stay safe.",
            "Different cultures around the world preserve foods in unique ways — Korean kimchi, German sauerkraut, Italian sun-dried tomatoes, Indian pickles and chutneys. This global perspective shows food preservation as a universal human response to seasonal abundance and scarcity.",
          ],
          keyConcepts: [
            {
              title: "Food Preservation Methods",
              description:
                "Pickling, drying, freezing, canning, and fermenting",
            },
            {
              title: "Why Food Spoils",
              description: "Microorganisms need moisture and warmth to grow",
            },
            {
              title: "Mango Preservation",
              description: "Pickle, amchur, aam papad, juice from mangoes",
            },
            {
              title: "Global Food Traditions",
              description: "Preservation methods in different cultures",
            },
          ],
          importantTerms: [
            {
              term: "Preservation",
              definition:
                "Preventing food from spoiling so it can be stored longer",
            },
            {
              term: "Fermentation",
              definition:
                "Using microorganisms to transform food (yogurt, pickles)",
            },
            {
              term: "Dehydration",
              definition: "Removing water from food to prevent spoilage",
            },
          ],
        },
        {
          id: "5-evs-5",
          number: 5,
          name: "Seeds and Seeds",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Seeds are the beginning of most plants' lives. Inside a seed is an embryo (baby plant) and stored food to support early growth. Seeds come in an enormous variety of sizes, shapes, and colours — from the tiny mustard seed to the massive coconut.",
            "Seeds disperse (travel away from the parent plant) in many ways. Wind dispersal: dandelion and maple seeds have wings or parachutes. Water dispersal: coconuts float. Animal dispersal: berries are eaten and seeds pass through the digestive system; burr seeds cling to fur. Explosive dispersal: touch-me-not and squirting cucumber pods burst open to scatter seeds.",
            "Agriculture depends on understanding seeds. Farmers select the best seeds for planting — large, healthy, disease-free seeds give better crops. Seed banks store thousands of varieties of crop seeds for preservation and future use. Students understand seeds as the foundation of food security.",
          ],
          keyConcepts: [
            {
              title: "Seed Structure",
              description: "Embryo, stored food, and seed coat",
            },
            {
              title: "Seed Dispersal",
              description: "Wind, water, animal, and explosive methods",
            },
            {
              title: "Germination",
              description: "Conditions needed for a seed to sprout",
            },
            {
              title: "Seed Banks",
              description: "Storing seed varieties for food security",
            },
          ],
          importantTerms: [
            {
              term: "Embryo",
              definition: "The tiny plant contained within a seed",
            },
            {
              term: "Dispersal",
              definition: "Movement of seeds away from the parent plant",
            },
            {
              term: "Germination",
              definition:
                "The process of a seed sprouting and beginning to grow",
            },
          ],
        },
        {
          id: "5-evs-6",
          number: 6,
          name: "Every Drop Counts",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "India has faced water scarcity throughout its history, and communities have developed remarkable traditional water harvesting systems. Kunds (underground tanks in Rajasthan), stepwells (baolis) in Gujarat and Delhi, johads (earthen check dams) in Haryana, and bamboo drip irrigation in Meghalaya are all ingenious traditional systems.",
            "Traditional knowledge about water was often more effective and sustainable than modern alternatives. Rainwater harvesting — collecting rainwater from rooftops or land surfaces into storage tanks — is being revived in cities to combat water shortages. Chennai, Bangalore, and Jaipur have made rooftop rainwater harvesting mandatory.",
            "Students calculate their household water use and compare it to the water available. They design a simple rainwater harvesting system for their school. This connects science, mathematics (volume and capacity calculations), and social awareness — water is a right for all living beings, not a commodity.",
          ],
          keyConcepts: [
            {
              title: "Traditional Water Harvesting",
              description: "Kunds, baolis, johads — India's water wisdom",
            },
            {
              title: "Rainwater Harvesting",
              description: "Collecting and storing rainwater for use",
            },
            {
              title: "Water Scarcity",
              description: "Why clean water is increasingly scarce",
            },
            {
              title: "Water as a Right",
              description: "Access to clean water as a basic human right",
            },
          ],
          importantTerms: [
            {
              term: "Baoli (Stepwell)",
              definition:
                "A traditional stepped well for water storage in India",
            },
            {
              term: "Johad",
              definition:
                "A community rainwater pond used in Rajasthan and Haryana",
            },
            {
              term: "Rainwater Harvesting",
              definition:
                "Collecting rainwater from surfaces for storage and use",
            },
          ],
        },
        {
          id: "5-evs-7",
          number: 7,
          name: "Experiments with Water",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Water has fascinating physical properties. Surface tension — the force that pulls water molecules together at the surface — allows insects like pond skaters to walk on water and causes water to form drops. A needle can float on water if placed gently, as surface tension holds it up.",
            "Objects float or sink depending on density. If an object is denser than water, it sinks; if less dense, it floats. A large ship floats despite being made of steel because its shape traps air, making the average density less than water. Students test floating and sinking with various objects.",
            "Water pressure increases with depth — deeper water pushes harder. Students observe this with a plastic bottle with holes at different heights — water shoots further from the bottom hole (greatest depth, most pressure). Understanding water pressure is essential for plumbing, dams, and submarine design.",
          ],
          keyConcepts: [
            {
              title: "Surface Tension",
              description: "Force holding water surface molecules together",
            },
            {
              title: "Floating and Sinking",
              description: "Density determines whether objects float",
            },
            {
              title: "Water Pressure",
              description: "Pressure increases with water depth",
            },
            {
              title: "Scientific Investigation",
              description: "Conducting experiments to test predictions",
            },
          ],
          importantTerms: [
            {
              term: "Surface Tension",
              definition:
                "The force making water surface act like a stretched elastic film",
            },
            {
              term: "Density",
              definition:
                "Mass per unit volume; determines if object floats or sinks",
            },
            {
              term: "Buoyancy",
              definition: "Upward force exerted by water on submerged objects",
            },
          ],
        },
        {
          id: "5-evs-8",
          number: 8,
          name: "A Treat for Mosquitoes",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Malaria and dengue are serious diseases spread by mosquitoes. In malaria, the female Anopheles mosquito carries the Plasmodium parasite; in dengue, the Aedes mosquito carries a virus. Understanding the life cycle of mosquitoes (egg → larva → pupa → adult) reveals when and how to interrupt it.",
            "Prevention is better than cure. Mosquitoes breed in still water — empty pots, flower vase water, blocked drains, puddles. Removing stagnant water near homes eliminates breeding sites. Using mosquito nets, repellents, and full-covering clothes reduces biting. Community awareness and government mosquito-control programmes work together.",
            "Students investigate breeding sites around their school and home, map them, and plan a clean-up campaign. They design an anti-mosquito awareness poster with facts about the diseases, prevention methods, and the mosquito's life cycle. This combines health education, science, and civic responsibility.",
          ],
          keyConcepts: [
            {
              title: "Mosquito Life Cycle",
              description: "Egg → larva → pupa → adult mosquito",
            },
            {
              title: "Malaria and Dengue",
              description: "Diseases spread by different mosquito species",
            },
            {
              title: "Prevention Methods",
              description: "Eliminating stagnant water, nets, repellents",
            },
            {
              title: "Community Health",
              description: "Collective action to prevent disease spread",
            },
          ],
          importantTerms: [
            {
              term: "Malaria",
              definition:
                "A disease caused by Plasmodium parasite, spread by Anopheles mosquito",
            },
            {
              term: "Dengue",
              definition:
                "A viral disease spread by Aedes mosquito; causes high fever",
            },
            {
              term: "Larva",
              definition:
                "The worm-like immature stage of an insect before pupation",
            },
          ],
        },
        {
          id: "5-evs-9",
          number: 9,
          name: "Up You Go!",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "As altitude increases, air pressure decreases. There is less oxygen at high altitudes, making breathing difficult. People living in high mountain areas like Ladakh, Uttarakhand, and Nepal have adapted over generations — their bodies produce more red blood cells to carry more oxygen. Visitors may get altitude sickness until they acclimatise.",
            "Temperature drops about 6°C for every 1,000 metres of altitude. Mountains can have snow at the top while the valley below is warm. Different zones of vegetation exist at different altitudes — tropical forests at the base, temperate forests higher up, alpine meadows still higher, and bare rock and snow above that.",
            "Mountain communities have unique cultures, foods, architecture, and clothing adapted to cold, high-altitude life. Thick woollen clothes, high-energy foods like ghee and dried meat, and small, sturdy stone houses are adaptations to mountain living. Students compare mountain life with their own and appreciate the diversity of human adaptation.",
          ],
          keyConcepts: [
            {
              title: "Altitude and Air Pressure",
              description: "Less oxygen and lower pressure at high altitudes",
            },
            {
              title: "Temperature and Altitude",
              description: "Temperature drops 6°C per 1000m of altitude",
            },
            {
              title: "Vegetation Zones",
              description: "Different plants at different altitude bands",
            },
            {
              title: "Mountain Adaptations",
              description: "How life adapts to high-altitude conditions",
            },
          ],
          importantTerms: [
            {
              term: "Altitude",
              definition: "Height above sea level",
            },
            {
              term: "Acclimatisation",
              definition:
                "The body's gradual adjustment to high-altitude conditions",
            },
            {
              term: "Vegetation Zone",
              definition:
                "A band of similar plant life at a particular altitude range",
            },
          ],
        },
        {
          id: "5-evs-11",
          number: 11,
          name: "Sunita in Space",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Sunita Williams is an American astronaut of Indian origin who spent 322 days in space across two missions, including time on the International Space Station. Her story inspires children — especially girls — to dream of science and space careers. India has its own space agency ISRO (Indian Space Research Organisation).",
            "In space, there is no gravity. Astronauts float, water forms spheres instead of drops, and sleeping in a sleeping bag attached to a wall is normal. Without gravity, muscles and bones weaken, so astronauts exercise 2 hours daily. Simple things like eating, drinking, and going to the bathroom require special techniques.",
            "India's space programme has achieved remarkable milestones: Aryabhata (first satellite, 1975), Chandrayaan (moon mission), Mangalyaan (Mars Orbiter Mission, 2014 — the first Mars mission to succeed on its first attempt). ISRO is known for conducting missions at a fraction of the cost of other space agencies.",
          ],
          keyConcepts: [
            {
              title: "Space and Zero Gravity",
              description:
                "Life in zero gravity on the International Space Station",
            },
            {
              title: "ISRO",
              description: "India's space agency and its achievements",
            },
            {
              title: "Gravity",
              description: "The force that pulls objects toward Earth",
            },
            {
              title: "Satellites",
              description:
                "Objects orbiting Earth used for communication and science",
            },
          ],
          importantTerms: [
            {
              term: "ISRO",
              definition:
                "Indian Space Research Organisation — India's national space agency",
            },
            {
              term: "Zero Gravity",
              definition: "A state of weightlessness experienced in orbit",
            },
            {
              term: "Orbit",
              definition:
                "The curved path of an object around a planet or star",
            },
          ],
        },
        {
          id: "5-evs-12",
          number: 12,
          name: "What If It Finishes...?",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Fossil fuels — coal, petroleum, and natural gas — were formed over millions of years from the remains of ancient organisms under heat and pressure. They are non-renewable: once used, they cannot be replaced on any human timescale. At current rates of consumption, coal reserves may last ~130 years, oil ~50 years.",
            "Burning fossil fuels releases carbon dioxide and other greenhouse gases, causing climate change. Pollution from vehicles, factories, and power plants harms human health. The depletion and pollution caused by fossil fuels make transitioning to renewable energy (solar, wind, hydroelectric) essential.",
            "Conservation is the first step — using less energy by insulating homes, using efficient appliances, driving less, and switching off lights saves resources. Students audit their household energy use and identify specific ways to reduce it. Every unit of energy saved reduces pollution and extends fossil fuel reserves.",
          ],
          keyConcepts: [
            {
              title: "Fossil Fuels",
              description:
                "Coal, petroleum, natural gas — non-renewable energy sources",
            },
            {
              title: "Non-Renewable Resources",
              description: "Resources that cannot be replaced once used",
            },
            {
              title: "Renewable Energy",
              description:
                "Solar, wind, and water power as sustainable alternatives",
            },
            {
              title: "Energy Conservation",
              description:
                "Using less energy through efficiency and habit change",
            },
          ],
          importantTerms: [
            {
              term: "Fossil Fuel",
              definition:
                "Fuel formed from ancient organic remains; coal, oil, natural gas",
            },
            {
              term: "Non-Renewable",
              definition:
                "A resource that cannot be replenished in a human lifetime",
            },
            {
              term: "Renewable Energy",
              definition:
                "Energy from sources naturally replenished: sun, wind, water",
            },
          ],
        },
        {
          id: "5-evs-14",
          number: 14,
          name: "When the Earth Shook",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Earthquakes occur when tectonic plates — massive pieces of Earth's crust — move suddenly against each other. The point underground where the earthquake starts is the focus (or hypocenter); directly above it on the surface is the epicentre. Seismic waves radiate outward, causing the shaking we feel.",
            "The Richter scale measures earthquake magnitude (strength). Each whole number increase represents 10 times more ground shaking. An earthquake of magnitude 6 is 100 times stronger than magnitude 4. Major earthquakes in India include Bhuj (2001, magnitude 7.7), Latur (1993), and Chamoli (1999).",
            "Earthquake safety includes: Drop (get low), Cover (under a table), Hold On. Buildings in earthquake-prone areas are constructed with flexible foundations and reinforced materials. Students learn about early warning systems and how communities recover from earthquakes. Preparedness saves lives.",
          ],
          keyConcepts: [
            {
              title: "Tectonic Plates",
              description:
                "Large sections of Earth's crust that move and cause earthquakes",
            },
            {
              title: "Epicentre and Focus",
              description:
                "The surface point and underground origin of an earthquake",
            },
            {
              title: "Richter Scale",
              description: "Scale measuring earthquake magnitude",
            },
            {
              title: "Earthquake Safety",
              description:
                "Drop, Cover, Hold On and earthquake-resistant buildings",
            },
          ],
          importantTerms: [
            {
              term: "Tectonic Plate",
              definition:
                "A large section of Earth's crust that moves over the mantle",
            },
            {
              term: "Epicentre",
              definition:
                "The point on Earth's surface directly above an earthquake's focus",
            },
            {
              term: "Richter Scale",
              definition:
                "A scale measuring the magnitude (energy release) of earthquakes",
            },
          ],
        },
        {
          id: "5-evs-16",
          number: 16,
          name: "Who Will Do This Work?",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "Sanitation workers — those who collect garbage, clean drains, and maintain toilets — perform essential work that keeps communities healthy and disease-free. Without them, cities would quickly become uninhabitable. Yet they are often among the least respected and most poorly paid workers.",
            "The caste system in India has historically assigned certain types of work to specific communities, often trapping people in hereditary occupations without choice. Manual scavenging — manually cleaning human waste — was assigned to certain castes and has been legally banned but still exists in some places.",
            "The chapter challenges students to examine their own attitudes toward different kinds of work and workers. Every job that contributes to society deserves respect and fair pay. Students discuss who in their community does the 'invisible work' that keeps things running — cleaners, cooks, security guards — and how to show appreciation and respect.",
          ],
          keyConcepts: [
            {
              title: "Dignity of Labour",
              description: "All work has value and deserves respect",
            },
            {
              title: "Sanitation and Public Health",
              description: "Why cleanliness workers are essential",
            },
            {
              title: "Caste and Occupation",
              description:
                "Historical link between caste and assigned work in India",
            },
            {
              title: "Rights of Workers",
              description:
                "Fair wages, safe conditions, and respect for all workers",
            },
          ],
          importantTerms: [
            {
              term: "Sanitation",
              definition:
                "Conditions relating to public health, especially clean water and waste disposal",
            },
            {
              term: "Manual Scavenging",
              definition:
                "The banned practice of manually cleaning human waste by hand",
            },
            {
              term: "Dignity of Labour",
              definition: "The principle that all work is honourable",
            },
          ],
        },
        {
          id: "5-evs-20",
          number: 20,
          name: "Whose Forests?",
          subject: "EVS",
          classNum: 5,
          explanation: [
            "India's forests are home to hundreds of tribal (Adivasi) communities who have lived in and cared for forests for centuries. The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 recognises their rights to live in and use forests. However, conflicts between conservation, development, and tribal rights continue.",
            "Forests are biodiversity hotspots — they contain more species of plants and animals per area than almost any other ecosystem. Biodiversity provides us with food, medicine, clean air and water, and stable climate. Deforestation reduces biodiversity and increases vulnerability to floods, droughts, and disease.",
            "The Chipko Movement (1973) in Uttarakhand, where villagers (especially women) hugged trees to prevent logging, showed that communities can protect forests through collective action. Students explore their own relationship with forests — through the wood in their homes, fruits they eat, medicines they take — and understand that forests are everyone's responsibility.",
          ],
          keyConcepts: [
            {
              title: "Forest Rights",
              description:
                "Tribal communities' rights to live in and use forests",
            },
            {
              title: "Biodiversity",
              description: "Forests as habitat for enormous variety of life",
            },
            {
              title: "Chipko Movement",
              description: "Tree-hugging protest against deforestation in 1973",
            },
            {
              title: "Deforestation",
              description: "Loss of forests and its consequences",
            },
          ],
          importantTerms: [
            {
              term: "Adivasi",
              definition:
                "Indigenous/tribal people — original inhabitants of a region",
            },
            {
              term: "Chipko Movement",
              definition:
                "1973 grassroots movement where people hugged trees to save forests",
            },
            {
              term: "Biodiversity",
              definition: "The variety of plant and animal species in an area",
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
          id: "5-hin-1",
          number: 1,
          name: "राख की रस्सी",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह एक चतुराई भरी लोककथा है जिसमें एक बुद्धिमान व्यक्ति राख से रस्सी बनाने की असंभव चुनौती को स्वीकार करता है और अपनी बुद्धि से उसे पूरा करता है। कहानी यह सिखाती है कि जहाँ चाह है वहाँ राह है।",
            "Students learn about folk tales (लोककथाएँ) as a genre of Hindi literature. Folk tales are stories passed down orally through generations, often teaching moral lessons through clever characters and impossible challenges. Students identify the moral of the story and discuss how it applies to their own lives.",
            "Grammar focus: वाक्य की रचना (sentence structure) in Hindi. Students identify कर्ता (subject), क्रिया (verb), and कर्म (object) in sentences from the story. They practice writing their own sentences using this structure to retell the story.",
          ],
          keyConcepts: [
            {
              title: "लोककथा",
              description: "Folk tales in Hindi oral tradition",
            },
            {
              title: "बुद्धि और चतुराई",
              description: "Using cleverness to solve problems",
            },
            {
              title: "वाक्य संरचना",
              description: "Subject, verb, object in Hindi sentences",
            },
            {
              title: "नैतिक पाठ",
              description: "Moral lessons in folk stories",
            },
          ],
          importantTerms: [
            {
              term: "लोककथा (Lokkatha)",
              definition:
                "A folk tale — a traditional story passed down orally",
            },
            {
              term: "कर्ता (Karta)",
              definition:
                "The subject of a Hindi sentence — who does the action",
            },
            {
              term: "चतुराई (Chaturai)",
              definition: "Cleverness or wit used to solve problems",
            },
          ],
        },
        {
          id: "5-hin-2",
          number: 2,
          name: "फसलों के त्योहार",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "भारत में कटाई के समय मनाए जाने वाले त्योहार हर क्षेत्र की खुशी और कृतज्ञता का प्रतीक हैं। पंजाब का बैसाखी, तमिलनाडु का पोंगल, केरल का ओणम, असम का बिहू — ये सभी फसल के त्योहार हैं जो अलग-अलग तरीकों से मनाए जाते हैं।",
            "Students learn about India's cultural diversity through harvest festivals. Each festival reflects its region's staple crops, climate, and traditions. Comparing festivals from different states builds national integration and respect for regional cultures.",
            "Hindi writing activity: students write a short descriptive paragraph about one harvest festival, using vivid details about food, clothing, music, dance, and community celebrations. This builds descriptive writing in Hindi while developing cultural knowledge.",
          ],
          keyConcepts: [
            {
              title: "फसल त्योहार",
              description:
                "Harvest festivals celebrating India's agricultural heritage",
            },
            {
              title: "क्षेत्रीय विविधता",
              description: "Different festivals in different states of India",
            },
            {
              title: "वर्णनात्मक लेखन",
              description: "Descriptive writing about festivals in Hindi",
            },
            {
              title: "राष्ट्रीय एकता",
              description: "How diverse celebrations unite India",
            },
          ],
          importantTerms: [
            {
              term: "बैसाखी (Baisakhi)",
              definition:
                "Harvest festival of Punjab celebrating the wheat harvest",
            },
            {
              term: "पोंगल (Pongal)",
              definition:
                "Harvest festival of Tamil Nadu celebrating the rice harvest",
            },
            {
              term: "ओणम (Onam)",
              definition:
                "Harvest festival of Kerala celebrated with boat races and feasts",
            },
          ],
        },
        {
          id: "5-hin-3",
          number: 3,
          name: "खिलौनेवाला",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह कविता एक खिलौने बेचने वाले की आवाज़ और बच्चों में उसे सुनकर उमड़ती उत्सुकता को चित्रित करती है। खिलौनेवाला बाज़ार में घूम-घूमकर खिलौने बेचता है — गाय, घोड़ा, हाथी, मोर — जो मिट्टी के बने होते हैं।",
            "The poem celebrates traditional Indian toys — earthen animals, spinning tops, cloth dolls — and the cultural heritage they represent. Students compare traditional toys with modern plastic toys and discuss what has been gained and lost in this change.",
            "This chapter introduces बाल साहित्य (children's literature) as a genre. Students read more poems from this tradition and discuss what makes a poem appeal to children. They write their own children's poem about something they loved in childhood — a toy, a game, a food.",
          ],
          keyConcepts: [
            {
              title: "पारंपरिक खिलौने",
              description:
                "Traditional Indian toys and their cultural significance",
            },
            {
              title: "बाल साहित्य",
              description: "Children's literature as a literary genre",
            },
            {
              title: "बचपन की यादें",
              description: "Childhood memories in Hindi poetry",
            },
            {
              title: "शब्द-चित्र",
              description: "Creating vivid images through words",
            },
          ],
          importantTerms: [
            {
              term: "खिलौनेवाला (Khilonewaala)",
              definition: "A toy seller — a traditional street vendor",
            },
            {
              term: "बाल साहित्य",
              definition:
                "Children's literature — stories and poems written for children",
            },
            {
              term: "पारंपरिक",
              definition: "Traditional — passed down through generations",
            },
          ],
        },
        {
          id: "5-hin-4",
          number: 4,
          name: "नन्हा फनकार",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह कहानी एक नन्हे मूर्तिकार की है जो पत्थर तराशकर सुंदर मूर्तियाँ बनाता है। वह दिन-रात मेहनत करता है और अपनी कला में डूबा रहता है। कहानी समर्पण और कला के प्रति प्रेम को दर्शाती है।",
            "Students learn about different art forms in India — sculpture, painting, music, dance, pottery. They discuss how artists develop their skills through years of practice and dedication. The chapter connects art appreciation with the value of hard work and perseverance.",
            "Hindi grammar: विशेषण (adjectives) used in describing art and artists. Students identify adjectives in the story and use them in their own sentences. They write a paragraph describing a piece of art they find beautiful, using vivid adjectives in Hindi.",
          ],
          keyConcepts: [
            {
              title: "कला और समर्पण",
              description: "Art requires dedication and years of practice",
            },
            {
              title: "भारतीय कला रूप",
              description: "Sculpture, painting, music, dance in India",
            },
            {
              title: "विशेषण",
              description: "Adjectives in Hindi grammar",
            },
            {
              title: "परिश्रम",
              description: "The value of hard work and persistence",
            },
          ],
          importantTerms: [
            {
              term: "फनकार (Fankar)",
              definition: "An artist or skilled craftsperson",
            },
            {
              term: "मूर्तिकार (Murtikaar)",
              definition: "A sculptor — an artist who creates 3D works",
            },
            {
              term: "विशेषण (Visheshan)",
              definition: "Adjective — a word describing a noun in Hindi",
            },
          ],
        },
        {
          id: "5-hin-5",
          number: 5,
          name: "जहाँ चाह वहाँ राह",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह कहानी ऐसे बच्चों के बारे में है जो शारीरिक चुनौतियों के बावजूद अपने सपने पूरे करते हैं। एक बच्चा जो चल नहीं सकता, वह चित्रकारी में राष्ट्रीय पुरस्कार जीतता है। एक बच्ची जो देख नहीं सकती, वह उत्कृष्ट संगीतकार बनती है। कहानी दृढ़ संकल्प का महत्व बताती है।",
            "The story celebrates differently-abled children who achieve extraordinary things through determination. Students discuss the concept of disability vs ability — every person has different strengths and challenges. This builds empathy, inclusion, and appreciation for diverse abilities.",
            "The Hindi proverb 'जहाँ चाह वहाँ राह' (Where there is a will, there is a way) is the theme. Students collect other Hindi proverbs (कहावतें) and discuss their meanings. Writing activity: write a true or imagined story about overcoming a challenge, using this proverb as the theme.",
          ],
          keyConcepts: [
            {
              title: "दृढ़ संकल्प",
              description:
                "Determination enables achieving dreams despite challenges",
            },
            {
              title: "विविध क्षमताएँ",
              description: "Every person has different strengths",
            },
            {
              title: "हिंदी कहावतें",
              description: "Hindi proverbs and their meanings",
            },
            {
              title: "समानुभूति",
              description: "Empathy and inclusion for differently-abled people",
            },
          ],
          importantTerms: [
            {
              term: "दृढ़ संकल्प (Dridh Sankalp)",
              definition: "Strong determination or firm resolve",
            },
            {
              term: "कहावत (Kahawat)",
              definition: "A proverb — a short traditional saying with wisdom",
            },
            {
              term: "विकलांग (Vikalang)",
              definition: "A person with a physical or mental disability",
            },
          ],
        },
        {
          id: "5-hin-6",
          number: 6,
          name: "चिट्ठी का सफर",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "एक चिट्ठी अपनी यात्रा का वर्णन करती है — लिफाफे में बंद होने से लेकर पते पर पहुँचने तक। डाकघर, डाकिया, ट्रेन, हवाई जहाज़ — इन सबका वर्णन कविता के रूप में किया गया है। यह चिट्ठी की नज़र से लिखा गया है।",
            "Students learn about first-person narration from an object's perspective (object personification). Writing from the point of view of a non-human — a letter, a coin, a bus — is a creative writing technique that builds imagination and narrative skills.",
            "The chapter connects to the postal system and how letters travel. Students learn about addressing letters correctly in Hindi — प्रेषक (sender), प्राप्तकर्ता (receiver), पता (address), पिन कोड (PIN code). They practice writing a letter to a friend or relative in Hindi.",
          ],
          keyConcepts: [
            {
              title: "वस्तु का दृष्टिकोण",
              description: "Writing from an object's point of view",
            },
            {
              title: "पत्र-लेखन",
              description: "Writing letters in Hindi",
            },
            {
              title: "डाक प्रणाली",
              description: "How the postal system works",
            },
            {
              title: "प्रथम पुरुष कथन",
              description: "First-person narration in Hindi",
            },
          ],
          importantTerms: [
            {
              term: "चिट्ठी (Chitthi)",
              definition: "A letter — a written message sent by post",
            },
            {
              term: "प्रेषक (Preshak)",
              definition: "The sender — the person who sends a letter",
            },
            {
              term: "पत्र-लेखन (Patra Lekhan)",
              definition: "Letter writing — a formal writing skill in Hindi",
            },
          ],
        },
        {
          id: "5-hin-7",
          number: 7,
          name: "डाकिए की कहानी, कँवरसिंह की जुबानी",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह पाठ एक अनुभवी डाकिए कँवरसिंह की जीवन कहानी है जो उन्हीं की ज़बानी सुनाई गई है। वे बताते हैं कि 30 साल तक वे हर घर में चिट्ठी पहुँचाते रहे, लोगों की खुशियाँ और ग़म जाने, और उनके परिवारों के बारे में जाना।",
            "This chapter introduces the oral history genre — recording real people's life stories in their own words. Students discuss the value of oral histories as historical sources. They conduct an oral history interview with an elder family member or community member about their work.",
            "Grammar focus: प्रत्यक्ष कथन और अप्रत्यक्ष कथन (direct and indirect speech) in Hindi. The postman's words are given in direct speech; students practice converting them to indirect speech. This is an important skill for Hindi writing and comprehension.",
          ],
          keyConcepts: [
            {
              title: "मौखिक इतिहास",
              description: "Recording people's life stories in their own words",
            },
            {
              title: "डाकिए का जीवन",
              description: "The life and work of a postman in India",
            },
            {
              title: "प्रत्यक्ष-अप्रत्यक्ष कथन",
              description: "Direct and indirect speech in Hindi",
            },
            {
              title: "साक्षात्कार",
              description: "Conducting an interview as a language skill",
            },
          ],
          importantTerms: [
            {
              term: "मौखिक इतिहास",
              definition:
                "Oral history — accounts of the past told in spoken form",
            },
            {
              term: "प्रत्यक्ष कथन",
              definition: "Direct speech — the exact words a person said",
            },
            {
              term: "अप्रत्यक्ष कथन",
              definition:
                "Indirect speech — reporting what was said without exact words",
            },
          ],
        },
        {
          id: "5-hin-8",
          number: 8,
          name: "वे दिन भी क्या दिन थे",
          subject: "Hindi",
          classNum: 5,
          explanation: [
            "यह पाठ बचपन की यादों पर आधारित एक संस्मरण है। लेखक पुराने दिनों को याद करते हुए बताते हैं — दादी की गोद, पड़ोसियों से पुराना रिश्ता, बिना मोबाइल के जीवन, गली में खेल — वे दिन कितने सरल और खुशहाल थे।",
            "Students explore nostalgia as a literary theme and a human emotion. They discuss what makes people remember the past fondly, and whether the past was really better or just different. This critical thinking activity balances emotional response with rational analysis.",
            "Students write their own संस्मरण (memoir) about a happy childhood memory. They focus on specific sensory details — the smell of rain, the taste of a favourite food, the sound of a particular place. Vivid, specific details are what bring memoir writing to life.",
          ],
          keyConcepts: [
            {
              title: "संस्मरण",
              description: "Memoir — personal writing about real memories",
            },
            {
              title: "बचपन और नॉस्टेल्जिया",
              description: "Childhood and nostalgia as literary themes",
            },
            {
              title: "इंद्रिय विवरण",
              description: "Sensory details that make writing vivid",
            },
            {
              title: "व्यक्तिगत लेखन",
              description: "Personal writing connecting experience to language",
            },
          ],
          importantTerms: [
            {
              term: "संस्मरण (Smaran)",
              definition:
                "A memoir — personal writing about remembered experiences",
            },
            {
              term: "नॉस्टेल्जिया",
              definition: "A wistful longing for the past",
            },
            {
              term: "इंद्रिय (Indriya)",
              definition: "The senses — sight, sound, smell, taste, touch",
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
          id: "5-sst-1",
          number: 1,
          name: "Our Environment",
          subject: "Social Science",
          classNum: 5,
          explanation: [
            "The environment includes everything around us — the air we breathe, the water we drink, the land we live on, and all living things. It can be divided into the natural environment (mountains, rivers, forests, oceans) and the human-made environment (houses, roads, schools, factories).",
            "India has extraordinary environmental diversity: the Himalayan mountains in the north, the Thar Desert in the west, the Deccan Plateau in the centre, and the coastal plains in the south and east. Each region has its own climate, vegetation, wildlife, and human culture adapted to those conditions.",
            "Human activities can damage the environment through deforestation, pollution, overuse of natural resources, and climate change. Students are introduced to the concept that humans are part of the environment, not separate from it, and that protecting the environment means protecting ourselves.",
          ],
          keyConcepts: [
            {
              title: "Natural Environment",
              description: "Mountains, rivers, forests, deserts, oceans",
            },
            {
              title: "Human-Made Environment",
              description: "Houses, roads, cities, farms",
            },
            {
              title: "India's Environmental Diversity",
              description: "Varied landscapes across India",
            },
            {
              title: "Environmental Protection",
              description: "Why and how we protect our environment",
            },
          ],
          importantTerms: [
            {
              term: "Environment",
              definition:
                "Everything surrounding and affecting living organisms",
            },
            {
              term: "Natural Resource",
              definition:
                "A material or energy found in nature that humans use",
            },
            {
              term: "Ecosystem",
              definition:
                "A community of living things and their physical environment",
            },
          ],
        },
        {
          id: "5-sst-2",
          number: 2,
          name: "Globe: Latitudes and Longitudes",
          subject: "Social Science",
          classNum: 5,
          explanation: [
            "Earth is a sphere (technically an oblate spheroid — slightly flattened at the poles). A globe is a scale model of Earth. To locate any point on Earth's surface, we use a grid of imaginary lines: latitudes (running east-west, parallel to the Equator) and longitudes (running north-south, meeting at the poles).",
            "The Equator (0° latitude) divides Earth into Northern and Southern hemispheres. Latitudes range from 0° at the Equator to 90° at each pole. The Tropic of Cancer (23.5°N) and Tropic of Capricorn (23.5°S) mark where the sun is directly overhead on solstices. The Arctic Circle (66.5°N) and Antarctic Circle (66.5°S) mark where there is at least one day of 24-hour daylight or darkness.",
            "The Prime Meridian (0° longitude) runs through Greenwich, London. Longitudes range from 0° to 180° East and West. Time zones are based on longitudes — every 15° equals one hour difference. India's standard time (IST) is based on the 82.5°E meridian, passing through Allahabad.",
          ],
          keyConcepts: [
            {
              title: "Latitudes",
              description: "Imaginary horizontal lines parallel to the Equator",
            },
            {
              title: "Longitudes",
              description: "Imaginary vertical lines meeting at the poles",
            },
            {
              title: "Equator",
              description: "0° latitude dividing Earth into two hemispheres",
            },
            {
              title: "Time Zones",
              description: "Based on longitude; every 15° = 1 hour",
            },
          ],
          importantTerms: [
            {
              term: "Equator",
              definition:
                "Imaginary line at 0° latitude dividing Earth into two hemispheres",
            },
            {
              term: "Prime Meridian",
              definition: "0° longitude passing through Greenwich, London",
            },
            {
              term: "Hemisphere",
              definition:
                "Half of a sphere; Earth is divided into Northern and Southern hemispheres",
            },
          ],
        },
        {
          id: "5-sst-3",
          number: 3,
          name: "Motions of the Earth",
          subject: "Social Science",
          classNum: 5,
          explanation: [
            "Earth has two main motions. Rotation is Earth spinning on its own axis (an imaginary line from North to South Pole). Earth rotates once in 24 hours, causing day and night. The side facing the sun experiences day; the opposite side experiences night. Earth rotates from west to east, so the sun appears to rise in the east.",
            "Revolution is Earth's orbit around the sun, taking 365.25 days (one year). Earth's axis is tilted at 23.5°. This tilt causes seasons — when the Northern Hemisphere tilts toward the sun, it receives more direct sunlight (summer); when it tilts away, it receives less (winter). The Southern Hemisphere has opposite seasons.",
            "Solstices and equinoxes mark special positions in Earth's orbit. Summer solstice (June 21) — longest day in Northern Hemisphere; Winter solstice (December 22) — shortest day. Spring equinox (March 21) and Autumn equinox (September 23) — day and night are equal everywhere. These dates are celebrated in many cultures.",
          ],
          keyConcepts: [
            {
              title: "Rotation",
              description: "Earth spinning on its axis; causes day and night",
            },
            {
              title: "Revolution",
              description: "Earth orbiting the sun in 365.25 days",
            },
            {
              title: "Axial Tilt",
              description: "23.5° tilt causes seasons in each hemisphere",
            },
            {
              title: "Solstices and Equinoxes",
              description: "Special positions in Earth's annual orbit",
            },
          ],
          importantTerms: [
            {
              term: "Rotation",
              definition: "Earth spinning on its axis once every 24 hours",
            },
            {
              term: "Revolution",
              definition: "Earth's orbit around the sun taking 365.25 days",
            },
            {
              term: "Solstice",
              definition:
                "Day when the sun is farthest north or south; longest or shortest day",
            },
          ],
        },
        {
          id: "5-sst-4",
          number: 4,
          name: "Maps",
          subject: "Social Science",
          classNum: 5,
          explanation: [
            "Maps are drawings of Earth's surface or parts of it as seen from above. Different types of maps serve different purposes. Physical maps show natural features — mountains, plains, rivers, and deserts using colour codes (green for plains, brown for highlands, blue for water). Political maps show countries, states, and cities.",
            "Every map has three essential elements: Scale (ratio of map distance to real distance), Direction indicator (usually a compass rose showing North), and Legend/Key (explaining what each symbol represents). Reading these correctly is essential for understanding and using maps accurately.",
            "Sketch maps are rough, hand-drawn maps of small areas — a classroom, school, or neighbourhood. Students draw sketch maps of their school grounds, including buildings, playground, garden, and gates. This practical activity builds map skills: choosing scale, using symbols, showing direction.",
          ],
          keyConcepts: [
            {
              title: "Types of Maps",
              description: "Physical, political, weather, and thematic maps",
            },
            {
              title: "Map Elements",
              description: "Scale, direction indicator, and legend",
            },
            {
              title: "Map Symbols",
              description: "Standard symbols representing real features",
            },
            {
              title: "Sketch Maps",
              description: "Drawing simple maps of familiar areas",
            },
          ],
          importantTerms: [
            {
              term: "Scale",
              definition:
                "The ratio between distances on a map and on the real ground",
            },
            {
              term: "Legend",
              definition: "A map key explaining what each symbol represents",
            },
            {
              term: "Compass Rose",
              definition: "A symbol on a map showing the cardinal directions",
            },
          ],
        },
        {
          id: "5-sst-5",
          number: 5,
          name: "Major Domains of the Earth",
          subject: "Social Science",
          classNum: 5,
          explanation: [
            "Earth has four major domains: Lithosphere (the solid land — continents and ocean floors), Hydrosphere (all water on Earth — oceans, lakes, rivers, ice, groundwater — covering 71% of the surface), Atmosphere (the layer of gases surrounding Earth — nitrogen 78%, oxygen 21%, other gases 1%), and Biosphere (the zone where life exists, where the other three domains interact).",
            "The lithosphere consists of seven continents: Asia (largest), Africa, North America, South America, Antarctica, Europe, and Australia. Oceans cover 71% of Earth: Pacific (largest), Atlantic, Indian, Southern, and Arctic oceans. Continents and oceans are not evenly distributed — most land is in the Northern Hemisphere.",
            "The atmosphere has several layers: Troposphere (0-12 km, where weather occurs), Stratosphere (12-50 km, contains ozone layer that blocks UV radiation), Mesosphere (50-80 km), Thermosphere (80-500 km), and Exosphere (outer edge). Without the ozone layer, harmful ultraviolet radiation would make life on Earth impossible.",
          ],
          keyConcepts: [
            {
              title: "Four Domains",
              description: "Lithosphere, hydrosphere, atmosphere, biosphere",
            },
            {
              title: "Seven Continents",
              description:
                "Asia, Africa, North America, South America, Antarctica, Europe, Australia",
            },
            {
              title: "Five Oceans",
              description: "Pacific, Atlantic, Indian, Southern, Arctic",
            },
            {
              title: "Atmospheric Layers",
              description:
                "Troposphere, stratosphere, mesosphere, thermosphere",
            },
          ],
          importantTerms: [
            {
              term: "Lithosphere",
              definition:
                "The solid outer layer of Earth including continents and ocean floors",
            },
            {
              term: "Atmosphere",
              definition:
                "The layer of gases surrounding Earth, held by gravity",
            },
            {
              term: "Biosphere",
              definition:
                "The zone of Earth where life exists; where other domains interact",
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
        {
          id: "9-sci-3",
          number: 3,
          name: "Atoms and Molecules",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Atoms are the smallest particles of an element that retain its chemical identity. John Dalton proposed that matter is made of indivisible atoms, each element has identical atoms, and compounds form by combining atoms in fixed ratios. The Law of Conservation of Mass states mass is neither created nor destroyed in a chemical reaction.",
            "The Law of Definite Proportions states that a compound always contains the same elements in the same ratio by mass. For example, water always has hydrogen and oxygen in a 1:8 ratio by mass. The Law of Multiple Proportions states when two elements form more than one compound, the ratio of the second element's mass that combines with a fixed mass of the first is a simple whole number ratio.",
            "Molecules are groups of atoms bonded together. Atomicity refers to the number of atoms in a molecule: monoatomic (He, Ne), diatomic (H₂, O₂, N₂), triatomic (O₃, H₂O), polyatomic (P₄, S₈). The mole concept: 1 mole = 6.022 × 10²³ particles (Avogadro's number). Molar mass equals the atomic/molecular mass in grams. This allows chemists to count particles by weighing.",
          ],
          keyConcepts: [
            {
              title: "Laws of Chemical Combination",
              description: "Conservation of mass and definite proportions",
            },
            {
              title: "Atomic Mass",
              description: "Relative mass of an atom compared to C-12 standard",
            },
            {
              title: "Mole Concept",
              description: "1 mole = 6.022×10²³ particles; molar mass in grams",
            },
            {
              title: "Molecular Formula",
              description: "Exact number of each atom type in a molecule",
            },
          ],
          importantTerms: [
            {
              term: "Atom",
              definition:
                "Smallest particle of an element that retains its chemical properties",
            },
            {
              term: "Molecule",
              definition:
                "Smallest particle of a substance that exists independently",
            },
            {
              term: "Mole",
              definition: "Amount of substance containing 6.022×10²³ particles",
            },
            {
              term: "Avogadro's Number",
              definition: "6.022×10²³, the number of particles in one mole",
            },
          ],
          videoKeyword: "chemistry",
        },
        {
          id: "9-sci-4",
          number: 4,
          name: "Structure of the Atom",
          subject: "Science",
          classNum: 9,
          explanation: [
            "The atom has a complex internal structure discovered through experiments. Thomson's model proposed a positive sphere with electrons embedded (plum pudding model). Rutherford's gold foil experiment (1911) disproved this — most alpha particles passed through, a few deflected, and very few bounced back, proving the atom has a tiny, dense, positively charged nucleus with electrons orbiting outside.",
            "Bohr's model improved on Rutherford's by proposing that electrons move in fixed circular orbits (shells) at specific energy levels. Electrons can jump between orbits by absorbing or emitting energy. The shells are labeled K, L, M, N with maximum electron capacity 2n² (K: 2, L: 8, M: 18). The outermost shell can hold maximum 8 electrons (octet rule).",
            "The three subatomic particles are: Protons (positive charge, mass ≈ 1 amu, in nucleus), Neutrons (no charge, mass ≈ 1 amu, in nucleus — stabilize the nucleus), Electrons (negative charge, negligible mass, in orbits). Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons. Isotopes are atoms of the same element with different neutron numbers (C-12, C-14; H, D, T).",
          ],
          keyConcepts: [
            {
              title: "Rutherford's Nuclear Model",
              description: "Tiny dense nucleus; electrons orbit outside",
            },
            {
              title: "Bohr's Model",
              description: "Electrons in fixed energy shells K, L, M, N",
            },
            {
              title: "Atomic Number and Mass Number",
              description: "Z = protons; A = protons + neutrons",
            },
            {
              title: "Isotopes",
              description: "Same element, different neutron count",
            },
          ],
          importantTerms: [
            {
              term: "Atomic Number",
              definition: "Number of protons in the nucleus of an atom",
            },
            {
              term: "Mass Number",
              definition: "Total number of protons and neutrons in the nucleus",
            },
            {
              term: "Isotope",
              definition:
                "Atoms of the same element with different numbers of neutrons",
            },
            {
              term: "Valence Electrons",
              definition:
                "Electrons in the outermost shell; determine chemical properties",
            },
          ],
          videoKeyword: "atom",
        },
        {
          id: "9-sci-6",
          number: 6,
          name: "Tissues",
          subject: "Science",
          classNum: 9,
          explanation: [
            "A tissue is a group of similar cells performing the same function. Plants have two main tissue systems: Meristematic tissues (actively dividing cells found at growing tips — apical, lateral, intercalary) and Permanent tissues (differentiated, stopped dividing). Permanent tissues include Simple tissues (parenchyma — thin-walled, food storage; collenchyma — flexible support; sclerenchyma — hard/dead, support) and Complex tissues (xylem — water transport; phloem — food transport).",
            "Animal tissues are categorized into four types: Epithelial tissue lines body surfaces and organs (squamous, cuboidal, columnar, ciliated, glandular). Connective tissue connects and supports (blood, bone, cartilage, adipose, ligament, tendon). Muscular tissue contracts for movement (striated/skeletal — voluntary; smooth/visceral — involuntary; cardiac — in heart). Nervous tissue conducts electrical signals (neurons and glial cells).",
            "The neuron is the structural and functional unit of the nervous system. It has a cell body (containing nucleus), dendrites (receive signals), and axon (transmit signals to next neuron or muscle). Myelin sheath insulates the axon and speeds up transmission. Nerve impulses travel as electrical signals. Connective tissues like blood consist of plasma (liquid) and blood cells (RBC, WBC, platelets).",
          ],
          keyConcepts: [
            {
              title: "Plant Tissues",
              description:
                "Meristematic (dividing) and Permanent (differentiated)",
            },
            {
              title: "Animal Tissue Types",
              description: "Epithelial, Connective, Muscular, Nervous",
            },
            {
              title: "Xylem and Phloem",
              description: "Water transport and food transport in plants",
            },
            {
              title: "Neuron Structure",
              description:
                "Cell body, dendrites, axon — conducts nerve impulses",
            },
          ],
          importantTerms: [
            {
              term: "Tissue",
              definition: "Group of similar cells performing the same function",
            },
            {
              term: "Meristematic Tissue",
              definition:
                "Actively dividing plant cells found at growing regions",
            },
            {
              term: "Neuron",
              definition:
                "Structural and functional unit of the nervous system",
            },
            {
              term: "Xylem",
              definition:
                "Plant tissue that transports water from roots to leaves",
            },
          ],
          videoKeyword: "cell",
        },
        {
          id: "9-sci-7",
          number: 7,
          name: "Diversity in Living Organisms",
          subject: "Science",
          classNum: 9,
          explanation: [
            "There are millions of species on Earth. Classification helps us organize this diversity into manageable groups based on shared characteristics. Aristotle first classified organisms as plants and animals. Whittaker proposed the Five Kingdom classification: Monera (bacteria), Protista (unicellular eukaryotes), Fungi, Plantae, Animalia. Linnaeus introduced binomial nomenclature — each organism has two Latin names: genus and species (e.g., Homo sapiens).",
            "The Plant Kingdom (Plantae) is divided into: Thallophyta (algae — no true root/stem/leaf: Spirogyra); Bryophyta (mosses — no vascular tissue: Funaria, Marchantia); Pteridophyta (ferns — vascular but no seeds: Fern, Horstetail); Gymnosperms (naked seeds — cone-bearing: Pinus, Cycas); Angiosperms (enclosed seeds — flowering plants — most evolved). Angiosperms are further divided into Monocots (one cotyledon: wheat, rice) and Dicots (two cotyledons: pea, mango).",
            "The Animal Kingdom (Animalia) includes: Porifera (sponges, pores); Coelenterata (jellyfish, corals — hollow body cavity); Platyhelminthes (flatworms); Nematoda (roundworms); Annelida (earthworms — segmented); Arthropoda (insects, crabs — jointed legs, largest phylum); Mollusca (snails, octopus); Echinodermata (starfish — spiny skin); Chordata (notochord present — includes fish, amphibians, reptiles, birds, mammals). Mammals are most evolved with warm blood, hair, and nourishing young with milk.",
          ],
          keyConcepts: [
            {
              title: "Five Kingdom Classification",
              description: "Monera, Protista, Fungi, Plantae, Animalia",
            },
            {
              title: "Plant Kingdom Divisions",
              description:
                "Thallophyta → Bryophyta → Pteridophyta → Gymnosperms → Angiosperms",
            },
            {
              title: "Binomial Nomenclature",
              description: "Two-part scientific name: Genus + species",
            },
            {
              title: "Animal Phyla",
              description:
                "Porifera, Coelenterata, Annelida, Arthropoda, Chordata",
            },
          ],
          importantTerms: [
            {
              term: "Taxonomy",
              definition: "Science of classifying living organisms",
            },
            {
              term: "Binomial Nomenclature",
              definition:
                "System of two-part Latin names for organisms (Genus + species)",
            },
            {
              term: "Phylum",
              definition: "Classification rank below Kingdom and above Class",
            },
            {
              term: "Gymnosperms",
              definition:
                "Plants with naked (uncovered) seeds; e.g., Pine, Cycas",
            },
          ],
          videoKeyword: "cell",
        },
        {
          id: "9-sci-10",
          number: 10,
          name: "Gravitation",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Newton's Law of Universal Gravitation states every object with mass attracts every other object. The gravitational force F = Gm₁m₂/r², where G = 6.674 × 10⁻¹¹ Nm²/kg² (universal gravitational constant), m₁ and m₂ are masses, and r is the distance between centers. The force decreases as the square of distance (inverse square law) — doubling distance reduces force to 1/4.",
            "On Earth, the acceleration due to gravity g = GM/R² ≈ 9.8 m/s². This acceleration is the same for all objects regardless of mass (Galileo's experiment). Weight (W = mg) is the gravitational force on an object — it varies with location (less on Moon: g_moon ≈ 1.6 m/s²). Mass is constant everywhere; weight changes with gravitational field.",
            "Buoyancy is the upward force exerted by a fluid on an immersed object (Archimedes' Principle: buoyant force = weight of displaced fluid). Objects float when buoyant force ≥ weight; sink when buoyant force < weight. Relative density = density of substance / density of water. Pressure = Force/Area (Pascal); Atmospheric pressure is caused by the weight of air above us.",
          ],
          keyConcepts: [
            {
              title: "Law of Gravitation",
              description: "F = Gm₁m₂/r²; inverse square law",
            },
            {
              title: "Acceleration due to Gravity",
              description: "g = 9.8 m/s² on Earth; same for all masses",
            },
            {
              title: "Mass vs Weight",
              description: "Mass is constant; weight varies with gravity",
            },
            {
              title: "Archimedes' Principle",
              description: "Buoyant force equals weight of displaced fluid",
            },
          ],
          importantTerms: [
            {
              term: "Gravitational Constant (G)",
              definition: "Universal constant G = 6.674×10⁻¹¹ Nm²/kg²",
            },
            {
              term: "Weight",
              definition: "Force of gravity on an object; W = mg",
            },
            {
              term: "Buoyancy",
              definition:
                "Upward force exerted by a fluid on a submerged object",
            },
            {
              term: "Relative Density",
              definition: "Ratio of density of a substance to density of water",
            },
          ],
          videoKeyword: "newton",
        },
        {
          id: "9-sci-11",
          number: 11,
          name: "Work and Energy",
          subject: "Science",
          classNum: 9,
          explanation: [
            "In physics, work is done only when a force causes displacement in the direction of the force. W = F × d × cosθ, where θ is the angle between force and displacement. No work is done if: there is no displacement (pushing a wall), displacement is perpendicular to force (carrying books horizontally), or the force is zero. Work is measured in Joules (J = N·m).",
            "Energy is the capacity to do work. Types: Kinetic energy (KE = ½mv²) — energy of motion; Potential energy — stored energy. Gravitational PE = mgh (depends on height). Elastic PE is stored in stretched/compressed springs. The Work-Energy Theorem states the net work done on an object equals the change in its kinetic energy: W_net = ΔKE.",
            "Law of Conservation of Energy: Energy can neither be created nor destroyed, only converted from one form to another. In a falling object, PE converts to KE (total mechanical energy remains constant if no friction). Power is the rate of doing work: P = W/t, measured in Watts (W = J/s). Commercial unit of energy: 1 kWh (kilowatt-hour) = 3.6 × 10⁶ J.",
          ],
          keyConcepts: [
            {
              title: "Work Definition",
              description: "W = F × d × cosθ; force must cause displacement",
            },
            {
              title: "Kinetic and Potential Energy",
              description: "KE = ½mv²; PE = mgh",
            },
            {
              title: "Work-Energy Theorem",
              description: "Net work = change in kinetic energy",
            },
            {
              title: "Conservation of Energy",
              description: "Energy transforms but total remains constant",
            },
          ],
          importantTerms: [
            {
              term: "Work",
              definition:
                "Product of force and displacement in direction of force (Joules)",
            },
            {
              term: "Power",
              definition: "Rate of doing work; P = W/t; measured in Watts",
            },
            {
              term: "Kinetic Energy",
              definition: "Energy due to motion; KE = ½mv²",
            },
            {
              term: "1 kWh",
              definition: "Commercial unit of energy = 3.6 × 10⁶ Joules",
            },
          ],
          videoKeyword: "newton",
        },
        {
          id: "9-sci-12",
          number: 12,
          name: "Sound",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Sound is a mechanical longitudinal wave that requires a material medium to travel. It cannot travel in vacuum (unlike light). Sound travels as compressions (high pressure) and rarefactions (low pressure). Speed of sound: 343 m/s in air at 25°C; faster in liquids and solids (because molecules are closer). Speed increases with temperature. Sound waves are characterized by frequency (Hz), amplitude, wavelength, and time period.",
            "Frequency determines pitch — high frequency = high pitch (shrill), low frequency = low pitch (deep). Amplitude determines loudness — greater amplitude = louder sound. Loudness is measured in decibels (dB). The human ear hears sounds between 20 Hz and 20,000 Hz (audible range). Sounds below 20 Hz are infrasonic (elephants use these); above 20,000 Hz are ultrasonic (bats, dolphins use these for echolocation).",
            "Echo is the reflection of sound. For a distinct echo, the reflecting surface must be at least 17.2 m away (sound takes 0.1 seconds minimum to distinguish). Reverberation is the persistence of sound due to multiple reflections. SONAR (Sound Navigation And Ranging) uses ultrasound to detect underwater objects. Ultrasound is also used in medical imaging (sonography) and cleaning delicate instruments.",
          ],
          keyConcepts: [
            {
              title: "Sound as a Wave",
              description: "Longitudinal mechanical wave needing medium",
            },
            {
              title: "Frequency and Pitch",
              description:
                "High frequency = high pitch; measured in Hertz (Hz)",
            },
            {
              title: "Amplitude and Loudness",
              description: "Greater amplitude = louder sound; measured in dB",
            },
            {
              title: "Echo and Ultrasound",
              description:
                "Sound reflection; ultrasound applications in SONAR, medical",
            },
          ],
          importantTerms: [
            {
              term: "Frequency",
              definition: "Number of vibrations per second; unit Hertz (Hz)",
            },
            {
              term: "Amplitude",
              definition:
                "Maximum displacement of a wave from its rest position",
            },
            {
              term: "Ultrasound",
              definition:
                "Sound with frequency above 20,000 Hz; used in SONAR and medicine",
            },
            {
              term: "Echo",
              definition:
                "Reflected sound heard distinctly after the original sound",
            },
          ],
          videoKeyword: "sound",
        },
        {
          id: "9-sci-13",
          number: 13,
          name: "Why Do We Fall Ill",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Health is a state of complete physical, mental, and social well-being, not merely absence of disease. Community health depends on public services (sanitation, clean water, nutrition). Disease means the body is not functioning normally. Diseases can be acute (short duration, like cold, cholera) or chronic (long duration, like tuberculosis, diabetes). They can be infectious (spread from person to person) or non-infectious.",
            "Infectious diseases are caused by pathogens: bacteria (TB, cholera, typhoid — treatable with antibiotics), viruses (cold, flu, HIV, hepatitis — antibiotics don't work; antivirals and vaccines help), fungi (skin infections, ringworm), protozoa (malaria caused by Plasmodium via Anopheles mosquito; amoebic dysentery), worms (tapeworm, elephantiasis). Diseases spread through air, water, direct contact, sexual contact, vectors (mosquitoes), and food.",
            "Prevention is better than cure. Immunization (vaccination) creates immunity against specific diseases. The immune system uses antibodies to fight pathogens. Vaccines introduce weakened/killed pathogens or their antigens to stimulate antibody production. Antibiotics block bacterial processes — they don't work on viruses. Completing the full course prevents antibiotic resistance. General prevention includes proper nutrition, clean environment, and hygiene.",
          ],
          keyConcepts: [
            {
              title: "Infectious vs Non-Infectious",
              description:
                "Pathogens spread disease; non-infectious include genetic disorders",
            },
            {
              title: "Types of Pathogens",
              description: "Bacteria, viruses, fungi, protozoa, worms",
            },
            {
              title: "Immunization",
              description:
                "Vaccines stimulate antibody production for immunity",
            },
            {
              title: "Antibiotics",
              description: "Kill bacteria but have no effect on viruses",
            },
          ],
          importantTerms: [
            {
              term: "Pathogen",
              definition:
                "Disease-causing microorganism (bacteria, virus, fungus, protozoan)",
            },
            {
              term: "Immunity",
              definition: "Body's ability to resist or fight disease",
            },
            {
              term: "Antibiotic",
              definition: "Medicine that kills or inhibits bacterial growth",
            },
            {
              term: "Vaccine",
              definition:
                "Preparation of weakened/killed pathogen to stimulate immunity",
            },
          ],
          videoKeyword: "cell",
        },
        {
          id: "9-sci-14",
          number: 14,
          name: "Natural Resources",
          subject: "Science",
          classNum: 9,
          explanation: [
            "Natural resources are materials from nature that humans use. They include air, water, soil, minerals, plants, and animals. The biosphere is the narrow zone of Earth where life exists (lithosphere, hydrosphere, atmosphere interact). Life on Earth depends on the cycling of nutrients: Carbon cycle (CO₂ ↔ photosynthesis ↔ respiration ↔ combustion), Nitrogen cycle (N₂ → bacteria → soil nitrates → plants → animals → decomposers → N₂), Water cycle (evaporation → clouds → precipitation → run-off → evaporation).",
            "Soil is formed by weathering of rocks over thousands of years. It contains minerals, humus (decomposed organic matter), water, and air. Soil supports plant life and is a non-renewable resource (takes 1000 years to form 1 cm). Top soil is most fertile. Deforestation and over-farming cause soil erosion and degradation.",
            "Biogeochemical cycles maintain the balance of elements in nature. Human activities disturb these cycles: burning fossil fuels increases CO₂ (greenhouse effect → global warming); industrial pollution releases pollutants into air, water, soil. The greenhouse effect (CO₂, CH₄, H₂O trap heat) is natural and essential, but enhanced greenhouse effect causes climate change. Ozone layer in the stratosphere blocks harmful UV radiation; CFCs destroy it.",
          ],
          keyConcepts: [
            {
              title: "Biogeochemical Cycles",
              description: "Carbon, nitrogen, and water cycles in nature",
            },
            {
              title: "Soil Formation",
              description: "Weathering of rocks over thousands of years",
            },
            {
              title: "Greenhouse Effect",
              description:
                "CO₂ and CH₄ trap heat; enhanced effect causes warming",
            },
            {
              title: "Ozone Layer",
              description:
                "Protects Earth from UV radiation; destroyed by CFCs",
            },
          ],
          importantTerms: [
            {
              term: "Biosphere",
              definition: "The zone of Earth where all life exists",
            },
            {
              term: "Humus",
              definition:
                "Decomposed organic matter in soil that increases fertility",
            },
            {
              term: "Greenhouse Effect",
              definition:
                "Trapping of heat by atmospheric gases like CO₂ and CH₄",
            },
            {
              term: "Ozone",
              definition:
                "O₃ molecule; stratospheric layer protecting Earth from UV rays",
            },
          ],
          videoKeyword: "photosynthesis",
        },
        {
          id: "9-sci-15",
          number: 15,
          name: "Improvement in Food Resources",
          subject: "Science",
          classNum: 9,
          explanation: [
            "India must feed over 1.4 billion people. Food resources come from crop plants and animals. Crops are classified by season: Kharif crops (June-November, monsoon season: rice, maize, soybean, groundnut, cotton) and Rabi crops (November-April, winter season: wheat, gram, pea, mustard, linseed). Nutrients needed by crops: Macronutrients (C, H, O, N, P, K, Ca, Mg, S) and Micronutrients (Fe, Mn, B, Zn, Cu, Mo, Cl). Deficiency causes diseases in plants.",
            "Crop improvement techniques: Hybridization (crossing different varieties for better traits); Introduction of new varieties; Genetic engineering (modifying genes for pest resistance, higher yield). Good agricultural practices: crop rotation (alternating crops to maintain soil fertility), intercropping (growing two+ crops together), integrated pest management (reducing pesticide use). Irrigation methods include wells, canals, rivers, tanks, drip irrigation, and sprinkler systems.",
            "Animal husbandry involves caring for farm animals. Cattle farming (dairy/draught animals) requires good feed, shelter, and disease prevention. Common cattle diseases: Foot and Mouth disease, Mastitis. Poultry farming (broilers for meat, layers for eggs) needs proper nutrition and disease management. Fisheries include marine (sea) and inland (freshwater) fishing. Aquaculture is farming fish and other aquatic organisms. Beekeeping (apiculture) produces honey and aids pollination.",
          ],
          keyConcepts: [
            {
              title: "Kharif and Rabi Crops",
              description:
                "Monsoon crops (rice, cotton) and winter crops (wheat, mustard)",
            },
            {
              title: "Crop Improvement",
              description: "Hybridization, new varieties, genetic engineering",
            },
            {
              title: "Animal Husbandry",
              description: "Scientific management of farm animals for food",
            },
            {
              title: "Aquaculture",
              description: "Farming of fish and aquatic organisms",
            },
          ],
          importantTerms: [
            {
              term: "Hybridization",
              definition:
                "Crossing two different varieties to produce offspring with desired traits",
            },
            {
              term: "Crop Rotation",
              definition:
                "Growing different crops in sequence to maintain soil fertility",
            },
            {
              term: "Aquaculture",
              definition:
                "Cultivation of aquatic organisms like fish, shellfish, and seaweed",
            },
            {
              term: "Intercropping",
              definition:
                "Growing two or more crops simultaneously in the same field",
            },
          ],
          videoKeyword: "photosynthesis",
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
            "Irrational numbers are non-terminating and non-repeating decimals. The ancient Greeks discovered that √2 cannot be written as a fraction. The real number line includes both rational and irrational numbers and every point on the line corresponds to exactly one real number.",
            "Laws of exponents for real numbers: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, and (aᵐ)ⁿ = aᵐⁿ. Students learn to rationalize denominators containing irrational numbers — multiplying numerator and denominator by the conjugate.",
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
              description: "Rules for operations with powers of real numbers",
            },
          ],
          importantTerms: [
            {
              term: "Rational Number",
              definition:
                "A number expressible as p/q where p,q are integers and q≠0",
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
            "A polynomial is an algebraic expression with one or more terms involving variables raised to non-negative integer powers. Examples: 2x+3 (linear, degree 1), x²-5x+6 (quadratic, degree 2), x³+2x²-x-2 (cubic, degree 3). The degree is the highest power of the variable.",
            "The Remainder Theorem states that when p(x) is divided by (x-a), the remainder is p(a). The Factor Theorem states (x-a) is a factor of p(x) if and only if p(a)=0. These theorems allow factoring without long division.",
            "Key algebraic identities: (a+b)²=a²+2ab+b²; (a-b)²=a²-2ab+b²; (a+b)(a-b)=a²-b²; (a+b)³=a³+3a²b+3ab²+b³; a³+b³=(a+b)(a²-ab+b²). These identities are used to expand and factorise expressions quickly.",
          ],
          keyConcepts: [
            {
              title: "Degree of Polynomial",
              description:
                "Highest power of variable; determines type (linear, quadratic, cubic)",
            },
            {
              title: "Remainder Theorem",
              description: "Remainder when p(x) divided by (x-a) equals p(a)",
            },
            {
              title: "Factor Theorem",
              description: "(x-a) is factor of p(x) if p(a) = 0",
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
                "Algebraic expression with non-negative integer powers of variables",
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
          id: "9-math-3",
          number: 3,
          name: "Coordinate Geometry",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Coordinate geometry (or analytic geometry) uses a number line system to describe geometric figures algebraically. The Cartesian plane is formed by two perpendicular number lines — the horizontal x-axis and the vertical y-axis — intersecting at the origin (0,0). Any point in the plane is represented as an ordered pair (x, y).",
            "The plane is divided into four quadrants: Quadrant I (+x, +y), Quadrant II (-x, +y), Quadrant III (-x, -y), Quadrant IV (+x, -y). The x-coordinate (abscissa) gives horizontal distance from origin; the y-coordinate (ordinate) gives vertical distance. Points on axes have one coordinate equal to zero.",
            "This chapter lays the foundation for Class 10 topics like distance formula, section formula, and Class 11 straight lines. Plotting points accurately requires understanding the sign conventions for each quadrant.",
          ],
          keyConcepts: [
            {
              title: "Cartesian Plane",
              description:
                "Two perpendicular axes dividing plane into four quadrants",
            },
            {
              title: "Ordered Pair",
              description: "(x, y) representing a unique point in the plane",
            },
            {
              title: "Quadrants",
              description:
                "Four regions formed by x and y axes with sign conventions",
            },
            {
              title: "Origin",
              description: "The point (0, 0) where both axes intersect",
            },
          ],
          importantTerms: [
            {
              term: "Abscissa",
              definition: "The x-coordinate (horizontal distance from origin)",
            },
            {
              term: "Ordinate",
              definition: "The y-coordinate (vertical distance from origin)",
            },
            {
              term: "Cartesian System",
              definition: "The coordinate system invented by René Descartes",
            },
          ],
        },
        {
          id: "9-math-4",
          number: 4,
          name: "Linear Equations in Two Variables",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "A linear equation in two variables has the form ax + by + c = 0, where a and b are not both zero. Unlike single-variable equations with one solution, these equations have infinitely many solutions — each solution is an ordered pair (x, y) that satisfies the equation.",
            "The graph of a linear equation in two variables is always a straight line. Every point on this line is a solution of the equation, and every solution corresponds to a point on the line. To draw the graph, we need at least two solutions (points) and connect them.",
            "Linear equations model real-world relationships perfectly: distance = speed × time; cost = price × quantity. Any two quantities with a constant rate of change form a linear relationship. This chapter builds towards simultaneous equations in Class 10.",
          ],
          keyConcepts: [
            {
              title: "General Form",
              description: "ax + by + c = 0 where a and b are not both zero",
            },
            {
              title: "Infinite Solutions",
              description:
                "Every linear equation in two variables has infinitely many solutions",
            },
            {
              title: "Graph as Straight Line",
              description:
                "Every solution is a point on the line and vice versa",
            },
            {
              title: "Real-World Applications",
              description:
                "Modeling distance-time, cost-quantity relationships",
            },
          ],
          importantTerms: [
            {
              term: "Linear Equation",
              definition:
                "Equation where variables have degree 1 (no x², x³ etc.)",
            },
            {
              term: "Solution",
              definition: "An ordered pair (x, y) that satisfies the equation",
            },
            {
              term: "Graph",
              definition:
                "Visual representation of all solutions forming a straight line",
            },
          ],
        },
        {
          id: "9-math-5",
          number: 5,
          name: "Introduction to Euclid's Geometry",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Euclid (around 300 BC) was a Greek mathematician who wrote 'Elements', one of the most influential works in history. He organized all known geometry into a logical system starting from a few basic assumptions. This axiomatic approach — deriving complex results from simple assumptions — is the foundation of modern mathematics.",
            "Euclid's five postulates: (1) A straight line can be drawn between any two points; (2) A finite line can be extended indefinitely; (3) A circle can be drawn with any center and radius; (4) All right angles are equal; (5) The Parallel Postulate — through a point not on a line, exactly one parallel line can be drawn (this led to non-Euclidean geometries).",
            "Key definitions: A point has no dimension (no length, width, height). A line has length but no width and extends infinitely in both directions. A line segment has two endpoints. An axiom is a self-evident truth; a theorem is a statement proved from axioms.",
          ],
          keyConcepts: [
            {
              title: "Axioms vs Postulates",
              description:
                "Axioms are universal truths; postulates are geometry-specific assumptions",
            },
            {
              title: "Euclid's 5 Postulates",
              description: "The foundation of Euclidean geometry",
            },
            {
              title: "Theorems",
              description:
                "Statements proved logically from axioms and postulates",
            },
            {
              title: "Undefined Terms",
              description: "Point, line, and plane cannot be defined formally",
            },
          ],
          importantTerms: [
            {
              term: "Axiom",
              definition: "A self-evident statement accepted without proof",
            },
            {
              term: "Postulate",
              definition:
                "A basic assumption specific to a branch of mathematics",
            },
            {
              term: "Theorem",
              definition: "A mathematical statement that has been proved",
            },
            {
              term: "Corollary",
              definition: "A result that follows directly from a theorem",
            },
          ],
        },
        {
          id: "9-math-6",
          number: 6,
          name: "Lines and Angles",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "When two lines intersect, they form two pairs of vertically opposite angles which are always equal. Adjacent angles on a straight line are supplementary (sum = 180°). Complementary angles sum to 90°. A transversal cutting two parallel lines creates several pairs of equal angles: corresponding angles, alternate interior angles, and alternate exterior angles.",
            "Types of angles: Acute (< 90°), Right (= 90°), Obtuse (90°-180°), Straight (= 180°), Reflex (180°-360°). Types of lines: Parallel lines never meet; perpendicular lines meet at 90°; a transversal intersects two or more lines. The angle sum property of a triangle states that all three angles add to 180°.",
            "Parallel lines are recognized by equal corresponding angles, equal alternate interior angles, or co-interior angles summing to 180°. These properties are used to prove geometric theorems and solve problems involving parallel lines cut by transversals.",
          ],
          keyConcepts: [
            {
              title: "Vertically Opposite Angles",
              description: "Equal angles formed when two lines intersect",
            },
            {
              title: "Parallel Lines & Transversal",
              description:
                "Creates corresponding, alternate, and co-interior angles",
            },
            {
              title: "Angle Sum of Triangle",
              description: "All three angles in any triangle sum to 180°",
            },
            {
              title: "Supplementary & Complementary",
              description: "Sum to 180° and 90° respectively",
            },
          ],
          importantTerms: [
            {
              term: "Transversal",
              definition:
                "A line that intersects two or more lines at distinct points",
            },
            {
              term: "Alternate Interior Angles",
              definition:
                "Equal angles on opposite sides of a transversal between parallel lines",
            },
            {
              term: "Corresponding Angles",
              definition:
                "Equal angles in matching positions when a transversal cuts parallel lines",
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
            "Congruent triangles are identical in shape and size — one can be superimposed on the other. Congruence criteria: SSS (all three sides equal), SAS (two sides and included angle equal), ASA (two angles and included side equal), AAS (two angles and non-included side equal), RHS (right angle, hypotenuse, one side for right triangles).",
            "Key theorems: Angles opposite equal sides are equal (isosceles triangle property). The side opposite the larger angle is longer. Sum of any two sides > third side (triangle inequality). The exterior angle equals the sum of two non-adjacent interior angles.",
            "Inequalities in triangles: If two sides of a triangle are unequal, the angle opposite the longer side is larger. The sum of any two sides is always greater than the third side. These properties help in comparing triangles and solving problems about distances.",
          ],
          keyConcepts: [
            {
              title: "Congruence Criteria",
              description:
                "SSS, SAS, ASA, AAS, RHS — five ways to prove triangle congruence",
            },
            {
              title: "Isosceles Triangle",
              description: "Two equal sides imply two equal base angles",
            },
            {
              title: "Triangle Inequality",
              description:
                "Sum of any two sides is greater than the third side",
            },
            {
              title: "Exterior Angle Theorem",
              description:
                "Exterior angle = sum of two non-adjacent interior angles",
            },
          ],
          importantTerms: [
            {
              term: "Congruent",
              definition:
                "Identical in shape and size; corresponding parts are equal",
            },
            {
              term: "CPCT",
              definition:
                "Corresponding Parts of Congruent Triangles are equal",
            },
            {
              term: "Isosceles Triangle",
              definition: "A triangle with two equal sides",
            },
          ],
        },
        {
          id: "9-math-8",
          number: 8,
          name: "Quadrilaterals",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "A quadrilateral is a polygon with four sides, four angles, and four vertices. The sum of interior angles of any quadrilateral is 360°. Types: Parallelogram (opposite sides parallel and equal), Rectangle (parallelogram with all right angles), Rhombus (parallelogram with all equal sides), Square (rectangle with equal sides), Trapezium (one pair of parallel sides), Kite (two pairs of adjacent equal sides).",
            "Properties of parallelograms: opposite sides are equal; opposite angles are equal; diagonals bisect each other. A parallelogram is a rectangle if diagonals are equal; a rhombus if diagonals are perpendicular; a square if diagonals are both equal and perpendicular.",
            "The Mid-point Theorem: the segment joining mid-points of two sides of a triangle is parallel to and half of the third side. This theorem has applications in construction, architecture, and proving other geometric results.",
          ],
          keyConcepts: [
            {
              title: "Angle Sum of Quadrilateral",
              description: "Sum of all interior angles = 360°",
            },
            {
              title: "Properties of Parallelogram",
              description:
                "Opposite sides equal and parallel, diagonals bisect each other",
            },
            {
              title: "Special Quadrilaterals",
              description:
                "Rectangle, rhombus, square, trapezium, kite and their properties",
            },
            {
              title: "Mid-Point Theorem",
              description:
                "Line joining midpoints of two sides is parallel to third side",
            },
          ],
          importantTerms: [
            {
              term: "Parallelogram",
              definition:
                "Quadrilateral with both pairs of opposite sides parallel",
            },
            {
              term: "Diagonal",
              definition:
                "Line segment joining two non-adjacent vertices of a polygon",
            },
            {
              term: "Mid-Point Theorem",
              definition:
                "Segment joining midpoints of two sides of a triangle is half the third side",
            },
          ],
        },
        {
          id: "9-math-9",
          number: 9,
          name: "Circles",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "A circle is the set of all points equidistant from a fixed point (centre). Key terms: radius (centre to circle), diameter (chord through centre = 2r), chord (line segment with both ends on circle), arc (part of circle), sector (region between two radii and arc), segment (region between chord and arc).",
            "Important theorems: Equal chords are equidistant from the centre. The perpendicular from the centre to a chord bisects the chord. The angle subtended by a chord at the centre is double the angle subtended at any point on the remaining arc. Angles in the same segment are equal. Angle in a semicircle = 90°.",
            "Cyclic quadrilateral: a quadrilateral whose vertices all lie on a circle. The sum of opposite angles of a cyclic quadrilateral = 180°. These properties are extensively used in competitive mathematics and higher geometry.",
          ],
          keyConcepts: [
            {
              title: "Circle Terminology",
              description: "Radius, diameter, chord, arc, sector, segment",
            },
            {
              title: "Chord Properties",
              description:
                "Equal chords equidistant from centre; perpendicular bisects chord",
            },
            {
              title: "Angle Theorems",
              description:
                "Central angle = 2 × inscribed angle; angles in same segment equal",
            },
            {
              title: "Cyclic Quadrilateral",
              description: "Opposite angles sum to 180°",
            },
          ],
          importantTerms: [
            {
              term: "Chord",
              definition: "A line segment with both endpoints on the circle",
            },
            {
              term: "Inscribed Angle",
              definition:
                "Angle formed by two chords meeting at a point on the circle",
            },
            {
              term: "Cyclic Quadrilateral",
              definition: "Quadrilateral with all four vertices on a circle",
            },
          ],
        },
        {
          id: "9-math-10",
          number: 10,
          name: "Heron's Formula",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Heron's Formula (named after Hero of Alexandria) calculates the area of a triangle when all three sides are known, without needing the height. For a triangle with sides a, b, c: first find semi-perimeter s = (a+b+c)/2, then Area = √[s(s-a)(s-b)(s-c)].",
            "This formula is especially useful for scalene triangles where finding the height is not straightforward. It works for all types of triangles — equilateral, isosceles, and scalene. For equilateral triangles with side a, the formula simplifies to Area = (√3/4)a².",
            "Applications: Heron's formula is used in land surveying to find areas of irregular plots. Complex quadrilaterals can be divided into triangles and Heron's formula applied to each. It is also used in coordinate geometry problems.",
          ],
          keyConcepts: [
            {
              title: "Semi-Perimeter",
              description: "s = (a+b+c)/2, half the total perimeter",
            },
            {
              title: "Heron's Formula",
              description:
                "Area = √[s(s-a)(s-b)(s-c)] for triangle with sides a, b, c",
            },
            {
              title: "Application to Quadrilaterals",
              description: "Divide into triangles and apply formula to each",
            },
            {
              title: "Equilateral Triangle Area",
              description: "Area = (√3/4)a² derived from Heron's formula",
            },
          ],
          importantTerms: [
            {
              term: "Semi-Perimeter",
              definition: "Half the perimeter of a triangle, denoted s",
            },
            {
              term: "Scalene Triangle",
              definition: "Triangle with all three sides of different lengths",
            },
            {
              term: "Heron's Formula",
              definition:
                "Formula to find area of triangle using only its three sides",
            },
          ],
        },
        {
          id: "9-math-11",
          number: 11,
          name: "Surface Areas and Volumes",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Surface area is the total area of all faces of a 3D solid. Volume is the amount of space inside a 3D solid. For a cuboid (length l, breadth b, height h): Lateral Surface Area = 2h(l+b), Total Surface Area = 2(lb+bh+hl), Volume = lbh. For a cube of side a: TSA = 6a², Volume = a³.",
            "For a right circular cylinder (radius r, height h): Curved Surface Area = 2πrh, Total Surface Area = 2πr(r+h), Volume = πr²h. For a right circular cone (radius r, height h, slant height l): CSA = πrl, TSA = πr(r+l), Volume = (1/3)πr²h. For a sphere of radius r: SA = 4πr², Volume = (4/3)πr³.",
            "For a hemisphere (half sphere, radius r): Curved SA = 2πr², Total SA = 3πr², Volume = (2/3)πr³. These formulas have practical applications in calculating paint needed for walls, water in tanks, capacity of containers, and material needed for manufacturing.",
          ],
          keyConcepts: [
            {
              title: "Cuboid and Cube",
              description:
                "TSA = 2(lb+bh+hl), Volume = lbh; Cube TSA = 6a², V = a³",
            },
            {
              title: "Cylinder",
              description: "CSA = 2πrh, TSA = 2πr(r+h), Volume = πr²h",
            },
            {
              title: "Cone",
              description: "CSA = πrl, TSA = πr(r+l), Volume = (1/3)πr²h",
            },
            {
              title: "Sphere and Hemisphere",
              description:
                "Sphere SA = 4πr², V = (4/3)πr³; Hemisphere V = (2/3)πr³",
            },
          ],
          importantTerms: [
            {
              term: "Slant Height",
              definition:
                "Length of the slant side of a cone from apex to base circle edge",
            },
            {
              term: "Lateral Surface Area",
              definition:
                "Area of only the side surfaces, excluding top and bottom",
            },
            {
              term: "Volume",
              definition: "Amount of 3D space occupied by a solid",
            },
          ],
        },
        {
          id: "9-math-12",
          number: 12,
          name: "Statistics",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Statistics is the science of collecting, organizing, analyzing, and interpreting numerical data. Data can be presented in various ways: ungrouped (raw data), frequency distribution tables, bar graphs, histograms, frequency polygons, and pie charts. The choice of representation depends on the type and amount of data.",
            "Measures of central tendency summarize a dataset with a single representative value: Mean (arithmetic average = sum of observations / number of observations), Median (middle value when data is arranged in order), and Mode (most frequently occurring value). For grouped data, mean is calculated using the formula Mean = Σfx/Σf where f is frequency and x is class mark.",
            "Histograms look like bar graphs but are used for continuous data in class intervals. The frequency polygon is drawn by joining midpoints of tops of histogram bars. These graphical representations help visualize data distributions, identify patterns, and compare datasets.",
          ],
          keyConcepts: [
            {
              title: "Mean",
              description: "Sum of all values divided by number of values",
            },
            {
              title: "Median",
              description:
                "Middle value when data is arranged in ascending order",
            },
            {
              title: "Mode",
              description: "The value that occurs most frequently in data",
            },
            {
              title: "Histogram",
              description:
                "Bar graph for continuous data showing frequency distribution",
            },
          ],
          importantTerms: [
            {
              term: "Frequency",
              definition: "Number of times a particular value occurs in data",
            },
            {
              term: "Class Interval",
              definition:
                "Range of values grouped together in a frequency table",
            },
            {
              term: "Class Mark",
              definition:
                "Midpoint of a class interval; (upper limit + lower limit)/2",
            },
            { term: "Mean", definition: "Arithmetic average of a data set" },
          ],
        },
        {
          id: "9-math-13",
          number: 13,
          name: "Probability",
          subject: "Mathematics",
          classNum: 9,
          explanation: [
            "Probability measures the likelihood of an event occurring, expressed as a number between 0 and 1 (or 0% to 100%). P(event) = Number of favourable outcomes / Total number of possible outcomes. P=0 means impossible; P=1 means certain. A probability value between 0 and 1 indicates how likely the event is.",
            "Key terms: Experiment is an activity with observable outcomes (tossing a coin). Sample Space (S) is the set of all possible outcomes. An event is a subset of the sample space. Complementary event: P(not A) = 1 - P(A). Equally likely outcomes: each outcome has the same probability.",
            "Empirical (experimental) probability is based on actual experiments: P(E) = Number of times event occurred / Total number of trials. As the number of trials increases, the experimental probability approaches the theoretical probability. This forms the basis for statistical inference.",
          ],
          keyConcepts: [
            {
              title: "Probability Formula",
              description:
                "P(E) = Favourable outcomes / Total outcomes (0 ≤ P ≤ 1)",
            },
            {
              title: "Sample Space",
              description: "Set of all possible outcomes of an experiment",
            },
            {
              title: "Complementary Events",
              description: "P(not A) = 1 - P(A)",
            },
            {
              title: "Empirical Probability",
              description:
                "Based on actual observations; approaches theoretical with more trials",
            },
          ],
          importantTerms: [
            {
              term: "Sample Space",
              definition:
                "The complete set of all possible outcomes of a random experiment",
            },
            {
              term: "Event",
              definition:
                "A subset of the sample space; specific outcomes we are interested in",
            },
            {
              term: "Complementary Event",
              definition:
                "The event consisting of all outcomes NOT in a given event",
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
            "The French Revolution (1789-1799) was one of history's most transformative events. France was a monarchy under Louis XVI where society was divided into three estates: Clergy (First Estate), Nobility (Second Estate), and everyone else (Third Estate). The Third Estate paid all taxes while privileged classes were exempt, creating deep resentment.",
            "The revolution began in 1789 driven by financial crisis, Enlightenment ideas (Voltaire, Rousseau, Montesquieu), food shortages, and social inequality. The storming of the Bastille on July 14, 1789 became the symbol of revolution against tyranny.",
            "The Revolution's ideals — Liberty, Equality, Fraternity — fundamentally changed the world. However, the radical Reign of Terror (1793-94) under Robespierre led to thousands of executions. Napoleon eventually emerged to build a new French Empire, spreading revolutionary ideas across Europe.",
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
              description:
                "Radical phase 1793-94 with mass executions under Robespierre",
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
              definition:
                "The French government (1795-1799) before Napoleon's coup",
            },
          ],
          videoKeyword: "french-revolution",
        },
        {
          id: "9-sst-2",
          number: 2,
          name: "Socialism in Europe and the Russian Revolution",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "In the 19th century, industrialization created great wealth for factory owners but harsh conditions for workers — long hours, low wages, child labor, and dangerous workplaces. Socialist thinkers like Karl Marx and Friedrich Engels argued that capitalism exploited workers and called for collective ownership of industries. Marx's Communist Manifesto (1848) urged workers of the world to unite.",
            "Russia in the early 20th century was under Tsar Nicholas II's autocratic rule. The 1905 Revolution (Bloody Sunday massacre) forced the Tsar to create a parliament (Duma) but real power remained with him. World War I made conditions worse — military disasters, food shortages, and massive casualties led to the February Revolution 1917, which ended the Tsar's rule.",
            "The Bolsheviks under Lenin seized power in the October Revolution 1917. They signed peace with Germany, nationalized industries, redistributed land to peasants, and created the USSR (Union of Soviet Socialist Republics) in 1922. Stalin later transformed Russia into an industrial superpower through Five-Year Plans, but at the cost of millions of lives in purges and famines.",
          ],
          keyConcepts: [
            {
              title: "Socialism vs Capitalism",
              description:
                "Collective ownership of means of production vs private ownership",
            },
            {
              title: "Marxism",
              description:
                "Marx's theory that class struggle drives history towards communism",
            },
            {
              title: "Russian Revolution 1917",
              description:
                "February Revolution ended Tsar; October Revolution brought Bolsheviks to power",
            },
            {
              title: "Soviet State",
              description: "USSR — world's first communist state formed 1922",
            },
          ],
          importantTerms: [
            {
              term: "Bolsheviks",
              definition:
                "Lenin's revolutionary party that seized power in October 1917",
            },
            {
              term: "Proletariat",
              definition:
                "The working class; those who sell their labor for wages",
            },
            {
              term: "Soviet",
              definition:
                "Workers' council; became the basic unit of Soviet government",
            },
          ],
        },
        {
          id: "9-sst-3",
          number: 3,
          name: "Nazism and the Rise of Hitler",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "Germany after World War I was humiliated by the Treaty of Versailles (1919) — massive reparations, loss of territory, military restrictions, and the 'War Guilt' clause blaming Germany. The Weimar Republic (1919-1933) faced economic crises including hyperinflation (1923) and the Great Depression (1929), creating widespread unemployment and despair.",
            "Adolf Hitler joined the Nazi Party and used powerful oratory, scapegoating, and propaganda to rise to power. Nazism promoted extreme nationalism, racial hierarchy (Aryans as master race), anti-Semitism, and the Führerprinzip (absolute obedience to the leader). Hitler became Chancellor in 1933 and quickly created a totalitarian state.",
            "The Holocaust was the systematic murder of 6 million Jews and millions of others (Roma, disabled people, political opponents, homosexuals) by the Nazi regime. Jews were first stripped of citizenship (Nuremberg Laws 1935), forced into ghettos, and eventually sent to extermination camps like Auschwitz. This genocide remains one of history's greatest crimes.",
          ],
          keyConcepts: [
            {
              title: "Weimar Republic",
              description:
                "German democracy 1919-1933 that failed under economic and political pressures",
            },
            {
              title: "Nazi Ideology",
              description:
                "Extreme nationalism, racial superiority, anti-Semitism, totalitarianism",
            },
            {
              title: "The Holocaust",
              description:
                "Systematic murder of 6 million Jews and others by Nazis",
            },
            {
              title: "Propaganda",
              description:
                "Goebbels used film, radio, posters to control public opinion",
            },
          ],
          importantTerms: [
            {
              term: "Fascism",
              definition:
                "Authoritarian ultranationalism with a dictatorial leader and suppression of opposition",
            },
            {
              term: "Anti-Semitism",
              definition: "Hostility and discrimination against Jewish people",
            },
            {
              term: "Gestapo",
              definition:
                "Nazi secret police that terrorized opponents of the regime",
            },
          ],
        },
        {
          id: "9-sst-geo1",
          number: 1,
          name: "India — Size and Location",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "India is the seventh largest country in the world by area (3.28 million km²) and second most populous. It lies entirely in the Northern and Eastern hemispheres. The mainland extends from 8°4' N to 37°6' N latitude and 68°7' E to 97°25' E longitude. The Tropic of Cancer (23°30' N) roughly divides India into two equal halves.",
            "India's strategic location at the tip of the Asian continent, surrounded by the Indian Ocean on three sides, has given it a central position in trade routes since ancient times. The country shares land borders with Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, and Myanmar. The coastline stretches 7,516 km.",
            "India's standard meridian is 82°30' E, which passes through Mirzapur (UP), used for Indian Standard Time (IST = GMT +5:30 hours). The latitudinal and longitudinal extent is roughly 30 degrees each, giving India diverse climates from Himalayan snow to equatorial forests in the Andamans.",
          ],
          keyConcepts: [
            {
              title: "India's Position",
              description:
                "8°4'N to 37°6'N latitude; 68°7'E to 97°25'E longitude",
            },
            {
              title: "Tropic of Cancer",
              description: "23°30'N — divides India into two near-equal parts",
            },
            {
              title: "India's Neighbors",
              description: "7 land neighbors; Indian Ocean on three sides",
            },
            {
              title: "Standard Meridian",
              description: "82°30'E through Mirzapur; IST = GMT+5:30",
            },
          ],
          importantTerms: [
            {
              term: "Tropic of Cancer",
              definition:
                "Latitude 23°30'N that passes through the middle of India",
            },
            {
              term: "Standard Meridian",
              definition:
                "82°30'E longitude used as basis for Indian Standard Time",
            },
            {
              term: "Subcontinent",
              definition:
                "A large landmass smaller than a continent; Indian subcontinent",
            },
          ],
        },
        {
          id: "9-sst-eco1",
          number: 1,
          name: "The Story of Village Palampur",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "Palampur is a hypothetical village used to illustrate economic concepts. The story introduces four factors of production through village life: Land (the fields where crops grow), Labour (farmers and farm workers), Capital (tools, machinery, seeds, money), and Enterprise (organization and decision-making). The interaction of these four factors creates production.",
            "Farming is the main activity in Palampur. Multiple cropping (growing two or more crops on the same land in a year) and use of High Yielding Variety (HYV) seeds from the Green Revolution allow higher production. However, land is limited, creating surplus labor — excess workers pushing wages down.",
            "Non-farming activities include small-scale manufacturing, trade, and services. The story shows how surplus income from farming is invested in transport, shops, and small factories. This illustrates capital formation — using savings to create more capital — which drives economic development.",
          ],
          keyConcepts: [
            {
              title: "Factors of Production",
              description: "Land, Labour, Capital, and Enterprise",
            },
            {
              title: "Multiple Cropping",
              description: "Growing more than one crop per year on same land",
            },
            {
              title: "HYV Seeds",
              description:
                "High Yielding Variety seeds from Green Revolution increasing productivity",
            },
            {
              title: "Capital Formation",
              description: "Using savings to invest in more productive capital",
            },
          ],
          importantTerms: [
            {
              term: "Factors of Production",
              definition:
                "Resources used to produce goods: land, labour, capital, enterprise",
            },
            {
              term: "Working Capital",
              definition:
                "Money and raw materials used up in production process",
            },
            {
              term: "Fixed Capital",
              definition: "Tools and machinery used repeatedly in production",
            },
          ],
        },
        {
          id: "9-sst-pol1",
          number: 1,
          name: "Democracy in the Contemporary World",
          subject: "Social Science",
          classNum: 9,
          explanation: [
            "Democracy is a form of government where people choose their rulers through free and fair elections, all citizens are treated equally before law, and basic rights are protected. Ancient Athens (600-400 BC) had direct democracy where citizens voted on all decisions. Modern democracies are representative — citizens elect representatives who make decisions on their behalf.",
            "In the 20th century, democracy expanded greatly. After World War II, many Asian and African nations gained independence and adopted democratic constitutions. However, many faced military coups, dictatorships, and one-party rules. The late 20th century saw a third wave of democratization with former Soviet states and Latin American countries transitioning.",
            "Not all governments that call themselves democracies actually are. Key criteria for a real democracy: regular free elections, freedom of expression and press, rule of law, independent judiciary, protection of minority rights. Pakistan, Saudi Arabia, China are examples of countries that lack some or most of these features.",
          ],
          keyConcepts: [
            {
              title: "Direct vs Representative Democracy",
              description: "Citizens vote directly vs electing representatives",
            },
            {
              title: "Features of Democracy",
              description:
                "Free elections, rule of law, rights protection, independent institutions",
            },
            {
              title: "Third Wave of Democracy",
              description: "Late 20th century expansion of democracy globally",
            },
            {
              title: "Non-Democratic Systems",
              description: "Military rule, monarchy, one-party state",
            },
          ],
          importantTerms: [
            {
              term: "Democracy",
              definition:
                "Government by the people through free and fair elections",
            },
            {
              term: "Constitution",
              definition:
                "The fundamental law of a country defining government structure and rights",
            },
            {
              term: "Coup",
              definition:
                "Sudden overthrow of a government, usually by the military",
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
          id: "9-eng-1",
          number: 1,
          name: "The Fun They Had",
          subject: "English",
          classNum: 9,
          explanation: [
            "Isaac Asimov's story is set in 2157 where children learn through mechanical teachers on computer screens. Margie discovers an old printed book and imagines traditional schools where children gathered together to learn.",
            "The story explores technology, education, and human connection. While mechanical teachers are efficient, Margie envies the fun of traditional schools — shared textbooks, friends, and teachers who understood emotions.",
            "The contrast between technological future and romanticized past makes readers appreciate human relationships in learning. It raises questions about technology replacing human teachers and whether efficiency always equals better education.",
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
              description: "Comparing two situations to highlight differences",
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
        {
          id: "9-eng-2",
          number: 2,
          name: "The Sound of Music",
          subject: "English",
          classNum: 9,
          explanation: [
            "Part I (Evelyn Glennie): Evelyn Glennie lost her hearing at age 11 but became a world-famous percussionist. She proved that deafness need not be a barrier to music — she learned to feel vibrations through different parts of her body. She practised barefoot to feel vibrations through the floor, studied at the Royal Academy of Music, and has performed over 100 musical instruments.",
            "Part II (The Shehnai of Bismillah Khan): Bismillah Khan is credited with bringing the shehnai (a woodwind instrument) from temples and small events to the concert hall and national stage. From practising by the Ganga in Varanasi to performing at India's independence ceremony at Red Fort, Khan devoted his life to the shehnai.",
            "Both stories share the theme of dedication overcoming obstacles. Evelyn shows that disability is not inability; Khan shows that an 'ordinary' instrument can achieve greatness through devotion. Both inspire readers to pursue their passion regardless of limitations.",
          ],
          keyConcepts: [
            {
              title: "Overcoming Disability",
              description:
                "Evelyn Glennie proved deafness need not stop a musical career",
            },
            {
              title: "Dedication",
              description:
                "Both Evelyn and Khan achieved greatness through years of dedicated practice",
            },
            {
              title: "Cultural Heritage",
              description:
                "Bismillah Khan preserved and elevated Indian classical music tradition",
            },
            {
              title: "Biographical Account",
              description: "True stories that inspire readers",
            },
          ],
          importantTerms: [
            {
              term: "Percussionist",
              definition: "A musician who plays percussion instruments",
            },
            {
              term: "Shehnai",
              definition:
                "A woodwind instrument associated with auspicious occasions in India",
            },
            {
              term: "Vibration",
              definition: "Rapid back-and-forth movement that creates sound",
            },
          ],
        },
        {
          id: "9-eng-3",
          number: 3,
          name: "The Little Girl",
          subject: "English",
          classNum: 9,
          explanation: [
            "Katherine Mansfield's story is about Kezia, a little girl who is terrified of her strict father. She sees him as a distant, harsh authority figure who only scolds and punishes. Her mother and grandmother are also mostly away or indifferent, leaving Kezia lonely and fearful in her own home.",
            "The turning point comes when Kezia's father, Mr. MacDonald, is not at home one night. Kezia has a nightmare and it is her father who comes to comfort her — he takes her into his warm bed and holds her. This experience reveals a different side of her father: caring, warm, and protective.",
            "The story explores the parent-child relationship and how misunderstanding can create fear and distance. Kezia's fear came from not knowing her father's other side. The theme is that parents may seem harsh due to burdens of work and responsibility, but their love is always present.",
          ],
          keyConcepts: [
            {
              title: "Father-Daughter Relationship",
              description:
                "Fear and distance turning into understanding and love",
            },
            {
              title: "Character Development",
              description:
                "Kezia's perception of her father changes through the story",
            },
            {
              title: "Theme of Understanding",
              description:
                "Understanding others' perspectives leads to empathy",
            },
            {
              title: "Narrative Perspective",
              description: "Story told from Kezia's child point of view",
            },
          ],
          importantTerms: [
            {
              term: "Protagonist",
              definition: "The main character of a story (Kezia)",
            },
            {
              term: "Antagonist",
              definition:
                "Character who creates conflict for the protagonist (father initially)",
            },
            {
              term: "Theme",
              definition:
                "The central message: understanding and love in family relationships",
            },
          ],
        },
        {
          id: "9-eng-4",
          number: 4,
          name: "A Truly Beautiful Mind",
          subject: "English",
          classNum: 9,
          explanation: [
            "Albert Einstein (1879-1955) was born in Ulm, Germany. He was considered slow as a child — he did not speak until age two-and-a-half. His teacher complained he was a disruptive influence. He failed the entrance exam to ETH Zurich on his first attempt but later passed and graduated.",
            "In 1905 (his 'miracle year'), Einstein published four groundbreaking papers including the Special Theory of Relativity and E=mc². He explained the photoelectric effect (for which he won the Nobel Prize 1921), Brownian motion, and proposed that energy and mass are interchangeable. His General Theory of Relativity (1915) revolutionized our understanding of gravity.",
            "Einstein was not just a scientist — he was deeply human. He fell in love with Mileva Maric, a fellow student. When the Nazis rose to power, he left Germany permanently. He wrote to President Roosevelt warning about nuclear weapons but later advocated strongly for peace and disarmament. His 'beautiful mind' was as much about humanity as equations.",
          ],
          keyConcepts: [
            {
              title: "Theory of Relativity",
              description:
                "Space and time are relative; E=mc² shows mass-energy equivalence",
            },
            {
              title: "Photoelectric Effect",
              description:
                "Light knocks electrons off metals; proved quantum nature of light",
            },
            {
              title: "Genius vs Conventional Success",
              description:
                "Einstein struggled in school but became history's greatest scientist",
            },
            {
              title: "Humanitarian Values",
              description:
                "Einstein opposed nationalism and advocated for peace",
            },
          ],
          importantTerms: [
            {
              term: "Theory of Relativity",
              definition:
                "Einstein's theory that space, time, and energy are interrelated",
            },
            {
              term: "E=mc²",
              definition:
                "Energy equals mass times speed of light squared — mass-energy equivalence",
            },
            {
              term: "Nobel Prize",
              definition:
                "Einstein won the 1921 Nobel Prize in Physics for the photoelectric effect",
            },
          ],
        },
        {
          id: "9-eng-5",
          number: 5,
          name: "The Snake and the Mirror",
          subject: "English",
          classNum: 9,
          explanation: [
            "Vaikom Muhammad Bashir's humorous story is narrated by a doctor who recounts a frightening experience from his past. The young, poor doctor is sitting alone in his rented room, admiring himself in the mirror when a large cobra drops onto his shoulder from the roof.",
            "The cobra coils around the doctor's arm and faces the mirror. The doctor is paralyzed with fear but suddenly feels the cobra loosen its grip. The doctor realizes the cobra was attracted to its own reflection in the mirror! The cobra slithers onto the mirror and the doctor escapes.",
            "The story uses humor, suspense, and irony effectively. The doctor's vanity (admiring himself in mirror) is contrasted with his helplessness against a snake. The cobra's 'vanity' actually saves the doctor's life — a comic twist. The story teaches that excessive pride can be both our weakness and paradoxically, sometimes our salvation.",
          ],
          keyConcepts: [
            {
              title: "Humour and Suspense",
              description: "Story balances comedy with genuine danger",
            },
            {
              title: "Irony",
              description:
                "The doctor's mirror obsession leads cobra away from him",
            },
            {
              title: "First-Person Narrative",
              description:
                "Doctor tells his own story; creates intimacy and humour",
            },
            {
              title: "Vanity as Theme",
              description:
                "Both doctor and cobra exhibit vanity with different outcomes",
            },
          ],
          importantTerms: [
            {
              term: "Irony",
              definition:
                "When the opposite of what is expected occurs, often humorously",
            },
            {
              term: "Narrator",
              definition:
                "The person telling the story (the doctor in this case)",
            },
            {
              term: "Anecdote",
              definition: "A short, interesting story about a real event",
            },
          ],
        },
        {
          id: "9-eng-6",
          number: 6,
          name: "My Childhood",
          subject: "English",
          classNum: 9,
          explanation: [
            "This chapter is an autobiographical extract from the life of Dr. A.P.J. Abdul Kalam (1931-2015), India's 11th President and scientist. Kalam grew up in Rameswaram, Tamil Nadu in a middle-class Muslim family. Despite modest means, his family was deeply respected in the predominantly Hindu town.",
            "Kalam's childhood was marked by religious harmony — his close friends were Hindu boys; his father Jainulabdeen was a respected figure to both Hindus and Muslims; he sat next to his Hindu friend Ramanadha Sastry in school. A new teacher who objected to their sitting together was eventually convinced otherwise by Kalam's teacher Sivasubramania Iyer.",
            "Key life lessons from the chapter: communal harmony is possible through personal relationships; education can bridge social divides; Kalam's science teacher inspired him by explaining flight of birds; his father's wisdom prepared him for life's challenges. The chapter emphasizes values of tolerance, hard work, and the importance of teachers.",
          ],
          keyConcepts: [
            {
              title: "Communal Harmony",
              description:
                "Kalam's childhood shows Muslims and Hindus living as friends",
            },
            {
              title: "Autobiography",
              description:
                "A first-person account of one's own life and experiences",
            },
            {
              title: "Role of Teachers",
              description:
                "Inspiring teachers shaped Kalam's dreams and values",
            },
            {
              title: "Secularism in Practice",
              description:
                "Religious differences did not prevent deep friendships",
            },
          ],
          importantTerms: [
            {
              term: "Autobiography",
              definition: "An account of a person's life written by themselves",
            },
            {
              term: "Secular",
              definition:
                "Not connected to religious matters; treating all religions equally",
            },
            {
              term: "Anecdote",
              definition: "A short, personal story used to illustrate a point",
            },
          ],
        },
        {
          id: "9-eng-7",
          number: 7,
          name: "Packing",
          subject: "English",
          classNum: 9,
          explanation: [
            "Jerome K. Jerome's comic excerpt from 'Three Men in a Boat' describes the chaos of packing for a holiday. Jerome believes he is an expert packer and takes charge, ordering his friends Harris and George to sit and watch. However, the packing becomes a disaster — he forgets the boots, then has to unpack to find them; sits on the butter, and makes numerous other mistakes.",
            "Harris and George then take charge of packing the hampers (food baskets). Their packing is even worse — they break things, squash food items, and George accidentally puts the butter in the kettle. Their messy, incompetent packing contrasts with their earlier lazy attitude of watching Jerome.",
            "The humor comes from the gap between confidence and competence. Jerome's self-importance and certainty about his packing skills contrasts sharply with his fumbling performance. The story uses comic exaggeration, repetition of errors, and absurd situations for comic effect. It also gently mocks human vanity and overconfidence.",
          ],
          keyConcepts: [
            {
              title: "Comic Narrative",
              description: "Story uses exaggeration and mistakes for humour",
            },
            {
              title: "Irony and Self-Importance",
              description:
                "Jerome's confidence contrasts with his incompetence",
            },
            {
              title: "Characterization",
              description:
                "Characters revealed through their actions (packing)",
            },
            {
              title: "Exaggeration (Hyperbole)",
              description: "Overstating situations for comic effect",
            },
          ],
          importantTerms: [
            {
              term: "Hyperbole",
              definition:
                "Deliberate exaggeration for emphasis or comic effect",
            },
            {
              term: "Comic Relief",
              definition: "Humorous scenes that lighten tension in a narrative",
            },
            {
              term: "Anecdote",
              definition:
                "A short amusing incident recounted as part of a longer narrative",
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
          id: "9-hin-1",
          number: 1,
          name: "Do Bailon Ki Katha (दो बैलों की कथा)",
          subject: "Hindi",
          classNum: 9,
          explanation: [
            "मुंशी प्रेमचंद की यह कहानी हीरा और मोती नामक दो बैलों की है। ये दोनों बैल अपने स्वामी झूरी के साथ रहते थे और उनसे बहुत प्रेम करते थे। जब झूरी उन्हें अपनी ससुराल गया प्रसाद के यहाँ छोड़ आया, तो वे वहाँ नहीं रहे और वापस आ गए।",
            "गया प्रसाद के घर में उन्हें कम चारा-पानी मिलता और काम अधिक करना पड़ता। गया प्रसाद की बेटी भूरी ने उन पर दया दिखाई। दोनों बैलों ने कई बार आज़ादी पाने की कोशिश की, अंत में एक कांजीहौस (पशुशाला) में बंद कर दिए गए जहाँ से वे भाग निकले।",
            "यह कहानी स्वतंत्रता की अदम्य इच्छा का प्रतीक है। दोनों बैल स्वाधीनता संग्राम के प्रतीक हैं। प्रेमचंद ने बैलों के माध्यम से मानवीय गुण — मित्रता, स्वाभिमान, स्वतंत्रता की चाह — को दर्शाया है। यह कहानी अन्याय के विरुद्ध संघर्ष का संदेश देती है।",
          ],
          keyConcepts: [
            {
              title: "स्वतंत्रता की थीम",
              description: "बैल स्वाधीनता सेनानियों के प्रतीक हैं",
            },
            {
              title: "मित्रता",
              description: "हीरा और मोती की गहरी दोस्ती की कहानी",
            },
            {
              title: "मानवीकरण",
              description: "बैलों को मानवीय भावनाएँ और सोच दी गई है",
            },
            {
              title: "सामाजिक संदेश",
              description: "अन्याय का प्रतिरोध करना जरूरी है",
            },
          ],
          importantTerms: [
            {
              term: "मानवीकरण",
              definition: "निर्जीव या पशु पात्रों को मानवीय गुण देना",
            },
            {
              term: "प्रतीक",
              definition:
                "किसी विचार या भाव का प्रतिनिधित्व करने वाला पात्र या वस्तु",
            },
            { term: "कांजीहौस", definition: "आवारा पशुओं को बंद करने की जगह" },
          ],
        },
        {
          id: "9-hin-2",
          number: 2,
          name: "Lhasa Ki Or (ल्हासा की ओर)",
          subject: "Hindi",
          classNum: 9,
          explanation: [
            "राहुल सांकृत्यायन का यह यात्रा-वृत्तांत 1929-30 की तिब्बत यात्रा पर आधारित है। उस समय भारतीयों के लिए तिब्बत जाना प्रतिबंधित था, इसलिए लेखक भिक्षु का वेश बनाकर नेपाल होते हुए ल्हासा गए। रास्ते में उन्हें अनेक कठिनाइयों का सामना करना पड़ा।",
            "यात्रा के दौरान लेखक ने तिब्बती समाज, संस्कृति, खानपान, और प्राकृतिक सौंदर्य का विस्तार से वर्णन किया। वहाँ के लोग अतिथि को देवता मानते थे और बिना किसी मेहनत के भोजन-आश्रय देते थे। सुमति नामक तिब्बती साथी ने उनकी बहुत मदद की।",
            "यह रचना साहस, जिज्ञासा, और सांस्कृतिक समझ की कहानी है। लेखक ने दिखाया कि कैसे विभिन्न संस्कृतियों में मानवीय सहायता और आतिथ्य का भाव समान होता है। यात्रा-वृत्तांत विधा का यह श्रेष्ठ उदाहरण है।",
          ],
          keyConcepts: [
            { title: "यात्रा-वृत्तांत", description: "यात्रा के अनुभवों का विस्तृत लेखन" },
            {
              title: "साहस और जिज्ञासा",
              description: "प्रतिबंध के बावजूद खोज की इच्छा",
            },
            {
              title: "सांस्कृतिक विविधता",
              description: "तिब्बती समाज और रीति-रिवाजों का परिचय",
            },
            {
              title: "मानवीय एकता",
              description: "विभिन्न संस्कृतियों में समान मानवीय मूल्य",
            },
          ],
          importantTerms: [
            {
              term: "यात्रा-वृत्तांत",
              definition: "यात्रा के अनुभव और विवरण लिखने की विधा",
            },
            { term: "तिब्बत", definition: "हिमालय के उत्तर में स्थित एक पठारी क्षेत्र" },
            {
              term: "भिक्षु",
              definition: "बौद्ध धर्म में भिक्षा माँगकर जीवन यापन करने वाला साधु",
            },
          ],
        },
        {
          id: "9-hin-3",
          number: 3,
          name: "Upbhaktavad Ki Sanskriti (उपभोक्तावाद की संस्कृति)",
          subject: "Hindi",
          classNum: 9,
          explanation: [
            "श्यामाचरण दुबे का यह निबंध आधुनिक उपभोक्तावादी संस्कृति की आलोचना करता है। विज्ञापन और मीडिया ने लोगों को उत्पाद खरीदने के लिए प्रेरित करने की संस्कृति बनाई है। यह संस्कृति लोगों को उत्पाद का उपभोक्ता बनाती है, उनकी वास्तविक जरूरतें नहीं देखी जातीं।",
            "लेखक कहते हैं कि बाजारवाद ने मनुष्य की परम्परागत संस्कृति को नष्ट कर दिया है। पहले लोग सरल जीवन जीते थे, अब विज्ञापन देखकर अनावश्यक चीजें खरीदते हैं। फैशन, ब्रांड और स्टेटस सिंबल ने मानवीय संबंधों की जगह ले ली है।",
            "निबंध में चेतावनी दी गई है कि यदि हम उपभोक्तावाद में बह गए तो अपनी जड़ों से कट जाएँगे। लेखक भारतीय मूल्यों — संतोष, सादगी, और प्राकृतिक जीवन — को अपनाने का आग्रह करते हैं।",
          ],
          keyConcepts: [
            {
              title: "उपभोक्तावाद",
              description: "वस्तुओं और सेवाओं के अधिकतम उपभोग पर आधारित जीवन दर्शन",
            },
            {
              title: "विज्ञापन का प्रभाव",
              description: "मीडिया द्वारा कृत्रिम जरूरतें पैदा करना",
            },
            { title: "सांस्कृतिक पतन", description: "पारंपरिक मूल्यों का ह्रास" },
            {
              title: "वैकल्पिक जीवन-दर्शन",
              description: "सरल और संतोषजनक जीवन का महत्व",
            },
          ],
          importantTerms: [
            {
              term: "उपभोक्तावाद",
              definition: "अधिकाधिक वस्तुओं के उपभोग को जीवन का लक्ष्य मानना",
            },
            {
              term: "विज्ञापन",
              definition: "उत्पाद या सेवा को बेचने के लिए प्रचार-प्रसार",
            },
            {
              term: "बाजारवाद",
              definition: "बाजार की शक्तियों द्वारा समाज को नियंत्रित करने की प्रवृत्ति",
            },
          ],
        },
        {
          id: "9-hin-4",
          number: 4,
          name: "Sawale Sapno Ki Yad (साँवले सपनों की याद)",
          subject: "Hindi",
          classNum: 9,
          explanation: [
            "जाबिर हुसेन का यह संस्मरण प्रसिद्ध प्रकृतिवादी और पक्षी-विशेषज्ञ सालिम अली की स्मृति में लिखा गया है। सालिम अली को 'बर्डमैन ऑफ इंडिया' कहा जाता है। उन्होंने अपना पूरा जीवन पक्षियों के अध्ययन और संरक्षण में लगाया।",
            "लेखक ने सालिम अली के जीवन के अंतिम समय का वर्णन किया है जब वे नर्मदा बचाओ आंदोलन में सक्रिय थे। बीमारी और वृद्धावस्था के बावजूद उनका जुनून कम नहीं हुआ। उनकी मृत्यु से प्रकृति-संरक्षण को एक बड़ी क्षति हुई।",
            "यह संस्मरण विधा का अच्छा उदाहरण है। लेखक ने व्यक्तिगत यादों और भावनाओं के माध्यम से सालिम अली के व्यक्तित्व को जीवंत किया है। पर्यावरण संरक्षण और प्रकृति से प्रेम का संदेश इसका केंद्रीय विचार है।",
          ],
          keyConcepts: [
            {
              title: "संस्मरण विधा",
              description: "किसी व्यक्ति की यादों को लिखित रूप देना",
            },
            {
              title: "पर्यावरण संरक्षण",
              description: "प्रकृति और वन्यजीवों की रक्षा का महत्व",
            },
            {
              title: "जीवन-समर्पण",
              description: "सालिम अली का पक्षियों के प्रति अनुराग",
            },
            { title: "प्रकृति-प्रेम", description: "प्रकृति के साथ सह-अस्तित्व का संदेश" },
          ],
          importantTerms: [
            {
              term: "संस्मरण",
              definition: "किसी को याद करते हुए उनके बारे में लिखी गई रचना",
            },
            {
              term: "प्रकृतिवादी",
              definition: "प्रकृति का अध्ययन करने वाला वैज्ञानिक",
            },
            { term: "पर्यावरण", definition: "हमारे चारों ओर का प्राकृतिक वातावरण" },
          ],
        },
        {
          id: "9-hin-5",
          number: 5,
          name: "Nana Saheb Ki Putri Devbhumi Mein (नाना साहब की पुत्री देवबानू में हुई भर्ती)",
          subject: "Hindi",
          classNum: 9,
          explanation: [
            "चपला देवी की यह रचना 1857 के प्रथम स्वाधीनता संग्राम से जुड़ी घटना पर आधारित है। नाना साहब पेशवा की पुत्री मैना एक बहादुर, बुद्धिमान और देशभक्त बालिका थी। जनरल हेवलॉक के नेतृत्व में अंग्रेज सैनिकों ने बिठूर के महल को जला दिया।",
            "मैना ने जनरल आउट्रम से अपने महल को न जलाने की प्रार्थना की और कहा कि उसने कोई अपराध नहीं किया। जब अंग्रेजों ने उसकी बात नहीं मानी और महल जला दिया, मैना को बंदी बनाकर इलाहाबाद ले जाया गया और फाँसी दी गई।",
            "यह पाठ स्वाधीनता संग्राम में बच्चों और महिलाओं के योगदान को उजागर करता है। मैना की देशभक्ति, निडरता, और आत्म-सम्मान पाठकों को प्रेरित करते हैं। रिपोर्ताज विधा में लिखी यह रचना ऐतिहासिक तथ्यों और कल्पना का मिश्रण है।",
          ],
          keyConcepts: [
            {
              title: "1857 का विद्रोह",
              description: "प्रथम स्वाधीनता संग्राम और उसके नायक",
            },
            { title: "बाल-वीरता", description: "मैना की निडरता और देशभक्ति" },
            { title: "रिपोर्ताज विधा", description: "समाचार-लेखन की विशेष शैली" },
            {
              title: "नारी-शक्ति",
              description: "स्वतंत्रता संग्राम में महिलाओं की भूमिका",
            },
          ],
          importantTerms: [
            { term: "रिपोर्ताज", definition: "किसी घटना का आँखों-देखा विवरण" },
            {
              term: "1857 का विद्रोह",
              definition: "अंग्रेजी शासन के विरुद्ध प्रथम सशस्त्र स्वाधीनता संग्राम",
            },
            { term: "देशभक्ति", definition: "अपने देश के प्रति प्रेम और समर्पण" },
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

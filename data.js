
// 25 questions, 5 per category (2 easy, 2 medium, 1 hard), answers mixed across 0–3
const questions = [
  // — Arabic
  {
    question: "What is the main ingredient in hummus?",
    choices: ["Lentils", "Beans", "Chickpeas", "Peas"],
    answer: 2,           // Chickpeas
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "Which spice blend includes thyme, oregano, sesame seeds, and sumac?",
    choices: ["Ras el hanout", "Za'atar", "Baharat", "Harissa"],
    answer: 1,           // Za'atar
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "What sweet pastry made of layers of filo, nuts, and syrup is popular in Arabic cuisine?",
    choices: ["Maamoul", "Halva", "Qatayef", "Baklava"],
    answer: 3,           // Baklava
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "Which meat is most commonly used for shawarma?",
    choices: ["Lamb", "Beef", "Chicken", "Fish"],
    answer: 2,           // Chicken
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "What nut is traditionally used to fill the Arabic dessert maamoul?",
    choices: ["Pistachio", "Walnut", "Almond", "Cashew"],
    answer: 0,           // Pistachio
    category: "Arabic",
    difficulty: "hard"
  },

  // — Chinese
  {
    question: "What is the primary ingredient in traditional egg drop soup?",
    choices: ["Chicken", "Corn", "Tofu", "Egg"],
    answer: 3,           // Egg
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "What are Chinese steamed buns commonly called?",
    choices: ["Gyoza", "Ravioli", "Baozi", "Pierogi"],
    answer: 2,           // Baozi
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "Which spicy paste is essential in Mapo Tofu?",
    choices: ["Doubanjiang", "Hoisin sauce", "Soy sauce", "Oyster sauce"],
    answer: 0,           // Doubanjiang
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "Which noodle soup is famous in Lanzhou, China?",
    choices: ["Ramen", "Lanzhou Lamian", "Pho", "Udon"],
    answer: 1,           // Lanzhou Lamian
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "What is the name of the fermented tea often served after a seafood meal in China?",
    choices: ["Pu-erh tea", "Green tea", "Oolong tea", "Jasmine tea"],
    answer: 0,           // Pu-erh tea
    category: "Chinese",
    difficulty: "hard"
  },

  // — Italian
  {
    question: "Which cheese is traditionally used on pizza Margherita?",
    choices: ["Cheddar", "Parmesan", "Gorgonzola", "Mozzarella"],
    answer: 3,           // Mozzarella
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "What type of pasta is shaped like little rice grains?",
    choices: ["Farfalle", "Orzo", "Linguine", "Rigatoni"],
    answer: 1,           // Orzo
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "Which Italian dish is made by slowly cooking rice in broth with Parmesan?",
    choices: ["Risotto", "Minestrone", "Zuppa Toscana", "Stracciatella"],
    answer: 0,           // Risotto
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "What cured meat do you serve with melon in prosciutto e melone?",
    choices: ["Salami", "Pancetta", "Prosciutto", "Mortadella"],
    answer: 2,           // Prosciutto
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "What type of flour is traditionally used to make Neapolitan pizza dough?",
    choices: ["All-purpose flour", "00 flour", "Semolina", "Bread flour"],
    answer: 1,           // 00 flour
    category: "Italian",
    difficulty: "hard"
  },

  // — Seafood
  {
    question: "What is the main ingredient in ceviche?",
    choices: ["Chicken", "Fish", "Beef", "Pork"],
    answer: 1,           // Fish
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "Which shellfish is commonly used in paella?",
    choices: ["Lamb", "Chicken", "Shrimp", "Beef"],
    answer: 2,           // Shrimp
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "Which mollusk is a key ingredient in French bouillabaisse?",
    choices: ["Clams", "Oysters", "Squid", "Mussels"],
    answer: 3,           // Mussels
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "What fish is traditionally used for British fish and chips?",
    choices: ["Tuna", "Cod", "Salmon", "Trout"],
    answer: 1,           // Cod
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "What is the name of the Japanese grilled fish cake on a stick?",
    choices: ["Chikuwa", "Yakitori", "Nishime", "Takoyaki"],
    answer: 0,           // Chikuwa
    category: "Seafood",
    difficulty: "hard"
  },

  // — Junk Food
  {
    question: "Which fast-food sandwich features a special sauce and pickles?",
    choices: ["Whopper", "Frosty", "Crunchwrap", "Big Mac"],
    answer: 3,           // Big Mac
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in mozzarella sticks?",
    choices: ["Potatoes", "Chicken", "Cheese", "Fish"],
    answer: 2,           // Cheese
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "Which soda brand is famous for its polar bear commercials?",
    choices: ["Pepsi", "Coca-Cola", "Sprite", "Fanta"],
    answer: 1,           // Coca-Cola
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "What snack is made from puffed corn coated in cheese powder?",
    choices: ["Doritos", "Popcorn", "Pringles", "Cheetos"],
    answer: 3,           // Cheetos
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Which chocolate candy has a crispy wafer, caramel, and chocolate coating?",
    choices: ["Milky Way", "Twix", "Snickers", "KitKat"],
    answer: 1,           // Twix
    category: "Junk Food",
    difficulty: "hard"
  }
];
export default questions;


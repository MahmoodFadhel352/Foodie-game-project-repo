
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
    question: "Which bean is the main ingredient in tofu?",
    choices: ["Lentils" , "Chickpeas" , "Soybeans" , "Black beans"],
    answer: 2,           // Soybeans
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
    question: "Which Italian cheese is made by stretching curds in hot water to create its signature stringy texture?",
    choices: ["Ricotta" , "Mozzarella" , "Parmesan" , "Gorgonzola"],
    answer: 1,           // Mozzarella
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
  },
   {
    question: "What flatbread topped with za'atar and olive oil is popular in Arabic cuisine?",
    choices: ["Manakish", "Naan", "Injera", "Paratha"],
    answer: 0,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "What yogurt-based drink is popular in Middle Eastern cuisine?",
    choices: ["Lassi", "Ayran", "Kefir", "Soda"],
    answer: 1,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "Which herb is essential in tabbouleh salad?",
    choices: ["Mint", "Cilantro", "Parsley", "Basil"],
    answer: 2,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "What dish combines rice, meat, and spices, often wrapped in grape leaves?",
    choices: ["Pilaf", "Dolma", "Biryani", "Kushari"],
    answer: 1,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "Which Arabic dessert is made of semolina soaked in sugar syrup and flavored with orange blossom water?",
    choices: ["Kunafa", "Basbousa", "Qatayef", "Maamoul"],
    answer: 1,
    category: "Arabic",
    difficulty: "hard"
  },

  // — New Chinese questions (5)
  {
    question: "What spice, often used in five‑spice powder, consists of star‑shaped pods?",
    choices: ["Cinnamon" , "Cloves" , "Fennel" , "Star anise"],
    answer: 3,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: " Which deep‑fried dim‑sum roll is most often filled with pork and shrimp?",
    choices: ["Egg roll" , "Spring roll" , "Samosa", "Wonton"],
    answer: 1,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "What pancake-like street food is made with wheat flour and egg, often rolled with fillings?",
    choices: ["Crepe", "Jianbing", "Omelette", "Paratha"],
    answer: 1,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "Which green vegetable is commonly stir-fried with garlic as a side dish?",
    choices: ["Bok choy", "Spinach", "Kale", "Broccoli"],
    answer: 0,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "What are sweet glutinous-rice dumplings eaten during the Lantern Festival?",
    choices: ["Baozi", "Wontons", "Tangyuan", "Xiaolongbao"],
    answer: 2,
    category: "Chinese",
    difficulty: "hard"
  },

  // — New Italian questions (5)
  {
    question: "Which dessert is made from coffee‑dipped ladyfingers and mascarpone cheese?",
    choices: ["Panna cotta", "Gelato", "Tiramisu", "Zabaglione"],
    answer: 2,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "Which sheep's-milk cheese from Sardinia is often grated over pasta?",
    choices: ["Ricotta", "Parmesan", "Pecorino", "Gorgonzola"],
    answer: 2,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "What Italian word literally means 'small rounds' and refers to meatballs?",
    choices: ["Spaghetti", "Polpette", "Frutti di mare", "Tagliatelle"],
    answer: 1,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "Which tomato-based meat sauce is traditional for Bolognese?",
    choices: ["Marinara", "Pesto", "Carbonara", "Ragù"],
    answer: 3,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "Which cured pork product is also known as Italian bacon?",
    choices: ["Guanciale", "Pancetta", "Prosciutto", "Salami"],
    answer: 1,
    category: "Italian",
    difficulty: "hard"
  },

  // — New Seafood questions (5)
  {
    question: "Which dish features thinly sliced raw fish served without rice?",
    choices: ["Sushi", "Nigiri", "Sashimi", "Ceviche"],
    answer: 2,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "What Hawaiian dish is made with raw fish marinated in soy sauce and sesame oil?",
    choices: ["Sushi", "Sashimi", "Poke", "Carpaccio"],
    answer: 2,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "What sea vegetable is traditionally used to wrap sushi rolls?",
    choices: ["Kelp" , "Nori" , "Dulse" , "Wakame"],
    answer: 1,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "Which crustacean is known for its large claws and often served steamed?",
    choices: ["Shrimp", "Crab", "Lobster", "Prawn"],
    answer: 2,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "What is the Japanese seaweed salad called?",
    choices: ["Nori", "Kombu", "Hijiki", "Wakame"],
    answer: 3,
    category: "Seafood",
    difficulty: "hard"
  },

  // — New Junk Food questions (5)
  {
    question: "Which chain is known for its golden arches?",
    choices: ["Burger King", "KFC", "McDonald's", "Wendy's"],
    answer: 2,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "What is the main flavor of a Frosty dessert?",
    choices: ["Vanilla", "Chocolate", "Strawberry", "Banana"],
    answer: 1,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "What snack is made by binding puffed rice with marshmallow?",
    choices: ["Popcorn", "Rice Krispie Treats", "Cheetos", "Doritos"],
    answer: 1,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Which Pringles flavor has a chili and lime taste?",
    choices: ["Sour Cream & Onion", "Cheddar Cheese", "Chili & Lime", "BBQ"],
    answer: 2,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Which candy bar features nougat, caramel, peanuts, and chocolate?",
    choices: ["Mars", "Milky Way", "KitKat", "Snickers"],
    answer: 3,
    category: "Junk Food",
    difficulty: "hard"
  }
];
export default questions;


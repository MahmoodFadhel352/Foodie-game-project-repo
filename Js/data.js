
// 50 questions, 5 per category
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
  },
  // ── Additional Arabic questions (to reach 10 easy,10 med,10 hard) ──
  // 6 Easy
  {
    question: "____ is the flatbread often served with hummus and falafel.",
    choices: ["Pita", "Naan", "Tortilla", "Focaccia"],
    answer: 0,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "All of the following are Arabic dips EXCEPT:",
    choices: ["Mutabbal", "Labneh", "Baba ghanoush", "Guacamole"],
    answer: 3,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "True or False: Dates are a traditional fruit eaten to break the fast during Ramadan.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "If a menu lists “gahwa,” you can expect to be served ____.",
    choices: ["Tea", "Coffee", "Juice", "Milk"],
    answer: 1,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "Which leafy green gives “molokhia” its distinctive flavor?",
    choices: ["Spinach", "Coriander", "Jew’s mallow", "Kale"],
    answer: 2,
    category: "Arabic",
    difficulty: "easy"
  },
  {
    question: "Which spice is harvested from the dried stigma of a flower and used sparingly in rice dishes?",
    choices: ["Turmeric", "Cumin", "Paprika", "Saffron"],
    answer: 3,
    category: "Arabic",
    difficulty: "easy"
  },

  // 6 Medium
  {
    question: "Fill in the blank: “Labneh” is a spread made primarily from ____.",
    choices: ["Yogurt", "Cheese", "Hummus", "Olive oil"],
    answer: 0,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "Which of these fruits is NOT native to the Middle East?",
    choices: ["Fig", "Pomegranate", "Date", "Mango"],
    answer: 3,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "True or False: Harissa is known for being a very mild and sweet chili paste.",
    choices: ["True", "False", "", ""],
    answer: 1,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "In which country did the rice-and-yogurt dish “Mansaf” originate?",
    choices: ["Lebanon", "Jordan", "Egypt", "Morocco"],
    answer: 1,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "Which nut is most commonly sprinkled on top of baklava?",
    choices: ["Almonds", "Pistachios", "Walnuts", "Hazelnuts"],
    answer: 1,
    category: "Arabic",
    difficulty: "medium"
  },
  {
    question: "“Maraq” is a type of Arabic stew traditionally slow‑cooked in a ____.",
    choices: ["Clay pot", "Copper pan", "Iron skillet", "Pressure cooker"],
    answer: 0,
    category: "Arabic",
    difficulty: "medium"
  },

  // 8 Hard
  {
    question: "Which part of the date palm yields the sap used to make date syrup (dibs)?",
    choices: ["Fruit", "Leaves", "Flowers", "Trunk"],
    answer: 2,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: “Esh al‑saraya” is an Arabic dessert topped with ____ cheese.",
    choices: ["Goat", "Shredded", "Cream", "Ricotta"],
    answer: 1,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "Which ancient grain, also called hulled wheat, is used in the dish “freekeh”?",
    choices: ["Barley", "Emmer", "Spelt", "Quinoa"],
    answer: 1,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "True or False: Sumac was historically used as a preservative and flavoring in Mediterranean cuisines.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "“Basbousa” is a sweet cake made from ____ and soaked in syrup.",
    choices: ["Semolina", "Almond flour", "Rice flour", "Wheat flour"],
    answer: 0,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "All of these are cooking methods for kibbeh EXCEPT:",
    choices: ["Frying", "Baking", "Steaming", "Eating raw"],
    answer: 2,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "What’s the Arabic term for clarified butter used in many Middle Eastern sweets?",
    choices: ["Sukkar", "Samna", "Ghee", "Zabadi"],
    answer: 1,
    category: "Arabic",
    difficulty: "hard"
  },
  {
    question: "Which floral water is commonly used to fragrance Arabic desserts like baklava and maamoul?",
    choices: ["Rose water", "Orange blossom water", "Violet water", "Lavender water"],
    answer: 1,
    category: "Arabic",
    difficulty: "hard"
  },
   {
    question: "_______ are the long, chewy fried dough sticks often eaten with soy milk for breakfast.",
    choices: ["Youtiao", "Baozi", "Jianbing", "Tangyuan"],
    answer: 0,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "All of the following are common dim sum dishes EXCEPT:",
    choices: ["Har Gow", "Char Siu Bao", "Siu Mai", "Tempura"],
    answer: 3,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "True or False: ‘Congee’ is a type of savory rice porridge.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "If you order “gan mian,” you’ll get ____ noodles (dry, not in soup).",
    choices: ["Stir‑fried", "Boiled", "Raw", "Cold"],
    answer: 0,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "Which of these ingredients gives Sichuan food its numbing sensation?",
    choices: ["Sichuan peppercorn", "White pepper", "Chili powder", "Garlic"],
    answer: 0,
    category: "Chinese",
    difficulty: "easy"
  },
  {
    question: "Which tea variety is explicitly fermented and aged?",
    choices: ["Green tea", "Oolong", "Pu-erh", "White tea"],
    answer: 2,
    category: "Chinese",
    difficulty: "easy"
  },

  // 6 Medium
  {
    question: "Fill in the blank: “Char siu” refers to Chinese-style ___ pork.",
    choices: ["Roasted", "Steamed", "Braised", "Fried"],
    answer: 0,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "Which city is famous for its hand-pulled “lamian” noodles?",
    choices: ["Beijing", "Shanghai", "Lanzhou", "Guangzhou"],
    answer: 2,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "True or False: “Mapo tofu” traditionally contains ground beef.",
    choices: ["True", "False", "", ""],
    answer: 1,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "All of these are common fillings for baozi EXCEPT:",
    choices: ["Pork", "Vegetables", "Red bean paste", "Chocolate"],
    answer: 3,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "“Dragon’s beard candy” is made by pulling sugar into thousands of ____.",
    choices: ["Strands", "Beads", "Balls", "Flakes"],
    answer: 0,
    category: "Chinese",
    difficulty: "medium"
  },
  {
    question: "Which leafy green is often stir‑fried with garlic in Cantonese cooking?",
    choices: ["Kale", "Spinach", "Chinese broccoli", "Mustard greens"],
    answer: 2,
    category: "Chinese",
    difficulty: "medium"
  },

  // 8 Hard
  {
    question: "What is the name of the clear, jelly‑like cake made from agar‑agar?",
    choices: ["Almond tofu", "Osmanthus jelly", "Mango pudding", "Snow fungus soup"],
    answer: 1,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: “Beggar’s Chicken” is encased in lotus leaves and then wrapped in ____ before baking.",
    choices: ["Clay", "Foil", "Banana leaves", "Parchment"],
    answer: 0,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "Which cooking technique involves briefly stir‑frying aromatics, then adding cold oil to bloom their flavors?",
    choices: ["Scalding", "Blooming", "Temper­ing", "Blanching"],
    answer: 2,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "True or False: Shaoxing wine is made from glutinous rice and aged in clay jars.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "All of these spices are in traditional Chinese five‑spice powder EXCEPT:",
    choices: ["Cinnamon", "Fennel seeds", "Cardamom", "Cloves"],
    answer: 2,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "Which mushroom is prized in hotpots for its woodsy flavor and umbrella‑shaped cap?",
    choices: ["Enoki", "Shiitake", "Porcini", "Oyster"],
    answer: 1,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: Zongzi are glutinous rice parcels wrapped in ____ leaves.",
    choices: ["Lotus", "Banana", "Bamboo", "Tea"],
    answer: 2,
    category: "Chinese",
    difficulty: "hard"
  },
  {
    question: "Which TCM ingredient is often tossed into soups for supposed health benefits?",
    choices: ["Goji berries", "Ginseng", "Cordyceps", "Astragalus"],
    answer: 1,
    category: "Chinese",
    difficulty: "hard"
  },
  // ── Additional Italian questions ──
  // 6 Easy
  {
    question: "____ is the smooth, creamy Italian dessert made with mascarpone and coffee.",
    choices: ["Panna cotta", "Tiramisu", "Gelato", "Cannoli"],
    answer: 1,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "All of these are pasta shapes EXCEPT:",
    choices: ["Fusilli", "Penne", "Gnocchi", "Tagliolini"],
    answer: 2,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "True or False: 'Bruschetta' is served on toasted bread rubbed with garlic.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "If a pizza is labeled 'Marinara,' it will NOT contain ____.",
    choices: ["Tomato", "Oregano", "Cheese", "Garlic"],
    answer: 2,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "Which cheese is grated over most pasta dishes?",
    choices: ["Ricotta", "Mascarpone", "Parmesan", "Gorgonzola"],
    answer: 2,
    category: "Italian",
    difficulty: "easy"
  },
  {
    question: "Which cold dessert is churned like ice cream but slightly denser?",
    choices: ["Sorbet", "Granita", "Gelato", "Sherbet"],
    answer: 2,
    category: "Italian",
    difficulty: "easy"
  },

  // 6 Medium
  {
    question: "Fill in the blank: 'Focaccia' originates from the region of ____ in Italy.",
    choices: ["Sicily", "Tuscany", "Lombardy", "Veneto"],
    answer: 1,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "Which wine is classically paired with seafood pasta?",
    choices: ["Chianti", "Barolo", "Pinot Grigio", "Montepulciano"],
    answer: 2,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "True or False: 'Parmigiano-Reggiano' must be aged at least 12 months.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "All of these are ingredients in pesto Genovese EXCEPT:",
    choices: ["Basil", "Pine nuts", "Parsley", "Parmesan"],
    answer: 2,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "Best practice when making risotto is to add broth ____.",
    choices: ["All at once", "Gradually", "After rice is fully cooked", "Not at all"],
    answer: 1,
    category: "Italian",
    difficulty: "medium"
  },
  {
    question: "Saltimbocca traditionally combines veal, prosciutto, and fresh ____ leaves.",
    choices: ["Basil", "Sage", "Thyme", "Oregano"],
    answer: 1,
    category: "Italian",
    difficulty: "medium"
  },

  // 8 Hard
  {
    question: "Which flour type—milled extremely fine—is labeled ‘00’ in Italy?",
    choices: ["All-purpose", "Semolina", "00", "Whole wheat"],
    answer: 2,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "True or False: Tiramisu traditionally contains raw egg yolks.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: 'Sfogliatella' is a shell‑shaped pastry originating from ____.",
    choices: ["Milan", "Naples", "Rome", "Venice"],
    answer: 1,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "All of these cheeses can be used for shaving EXCEPT:",
    choices: ["Parmigiano-Reggiano", "Pecorino Romano", "Grana Padano", "Ricotta"],
    answer: 3,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "Which region is world-famous for balsamic vinegar?",
    choices: ["Tuscany", "Lombardy", "Modena", "Sardinia"],
    answer: 2,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "The Florentine steak, 'Bistecca alla Fiorentina', hails from ____.",
    choices: ["Venice", "Florence", "Milan", "Turin"],
    answer: 1,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "True or False: 'Cacio e pepe' relies on only three ingredients: pasta, cheese, and pepper.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Italian",
    difficulty: "hard"
  },
  {
    question: "What cooking method does 'saltare in padella' refer to?",
    choices: ["Braising", "Steaming", "Stir‑frying", "Deep‑frying"],
    answer: 2,
    category: "Italian",
    difficulty: "hard"
  },
  // ── Additional Seafood questions ──
  // 6 Easy
  {
    question: "____ is a South American dish of raw fish cured in citrus juices.",
    choices: ["Carpaccio", "Sashimi", "Ceviche", "Tartare"],
    answer: 2,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "All of these are shellfish EXCEPT:",
    choices: ["Clam", "Oyster", "Shrimp", "Mussel"],
    answer: 3,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "True or False: 'Moules-frites' pairs mussels with French fries.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "If a sushi roll uses 'nori,' it is wrapped in ____.",
    choices: ["Rice paper", "Seaweed", "Soy baking sheet", "Lettuce"],
    answer: 1,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "Which pasta is classic for seafood dishes in Italy?",
    choices: ["Spaghetti", "Farfalle", "Rigatoni", "Macaroni"],
    answer: 0,
    category: "Seafood",
    difficulty: "easy"
  },
  {
    question: "Which fish is often used in sushi and has an orange hue?",
    choices: ["Tuna", "Salmon", "Cod", "Halibut"],
    answer: 1,
    category: "Seafood",
    difficulty: "easy"
  },

  // 6 Medium
  {
    question: "Fill in the blank: Bouillabaisse originates from ____ in France.",
    choices: ["Nantes", "Marseille", "Bordeaux", "Lyon"],
    answer: 1,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "Which seaweed salad is common in Japanese cuisine?",
    choices: ["Hijiki", "Nori", "Wakame", "Kombu"],
    answer: 2,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "True or False: Escargot is a seafood dish.",
    choices: ["True", "False", "", ""],
    answer: 1,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "All of these go into traditional paella EXCEPT:",
    choices: ["Rice", "Saffron", "Chicken", "Chocolate"],
    answer: 3,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "Gravlax is cured salmon flavored with salt, sugar, and ____.",
    choices: ["Dill", "Basil", "Thyme", "Parsley"],
    answer: 0,
    category: "Seafood",
    difficulty: "medium"
  },
  {
    question: "British fish and chips are traditionally dipped in ____.",
    choices: ["Ketchup", "Vinegar", "Soy sauce", "Mustard"],
    answer: 1,
    category: "Seafood",
    difficulty: "medium"
  },

  // 8 Hard
  {
    question: "Which Japanese dish features fish or seafood scraps pickled with rice bran?",
    choices: ["Narezushi", "Sashimi", "Takoyaki", "Udon"],
    answer: 0,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: Gefilte fish is a poached ____ dish.",
    choices: ["Pork", "Beef", "Fish", "Chicken"],
    answer: 2,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "True or False: Udon noodles are made from buckwheat flour.",
    choices: ["True", "False", "", ""],
    answer: 1,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "All of these are tuna cuts EXCEPT:",
    choices: ["Maguro", "Toro", "Bonito", "Akami"],
    answer: 2,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "What Spanish term describes small seafood snacks often served as tapas?",
    choices: ["Raciones", "Pinchos", "Montaditos", "Pintxos"],
    answer: 3,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "Which Portuguese dish mixes salted cod with potatoes and eggs?",
    choices: ["Feijoada", "Bacalhau à brás", "Caldo verde", "Francesinha"],
    answer: 1,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: Sashimi must be served at a ____ temperature for safety.",
    choices: ["Room", "Warm", "Cool", "Hot"],
    answer: 2,
    category: "Seafood",
    difficulty: "hard"
  },
  {
    question: "True or False: Ceviche originated in Peru.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Seafood",
    difficulty: "hard"
  },
// ── Additional Junk Food questions ──
  // 6 Easy
  {
    question: "____ is the burger famous for its special sauce, lettuce, cheese, pickles, and onions.",
    choices: ["Whopper", "Big Mac", "Double Stacker", "Big King"],
    answer: 1,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "All of these are fast-food chains EXCEPT:",
    choices: ["McDonald's", "Taco Bell", "Burger King", "Pizza Hut"],
    answer: 3,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "True or False: Chicken nuggets were invented by a Cornell University professor.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "If a soda is labeled 'diet,' it contains ____ instead of sugar.",
    choices: ["Honey", "Artificial sweeteners", "Fruit juice", "Alcohol"],
    answer: 1,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "Cheetos are made primarily from ____.",
    choices: ["Potatoes", "Cornmeal", "Cheese", "Wheat"],
    answer: 1,
    category: "Junk Food",
    difficulty: "easy"
  },
  {
    question: "Which dessert is a frozen, chocolate-dipped vanilla treat from Wendy’s?",
    choices: ["Froyo", "Frosty", "McFlurry", "Dole Whip"],
    answer: 1,
    category: "Junk Food",
    difficulty: "easy"
  },

  // 6 Medium
  {
    question: "Fill in the blank: The sauce on a Big Mac is called ____ Sauce.",
    choices: ["Special", "Secret", "Burger", "Classic"],
    answer: 0,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Which topping is NOT standard on a Whopper?",
    choices: ["Lettuce", "Tomato", "Pickles", "Bacon"],
    answer: 3,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "True or False: Doritos were first introduced in the 1960s.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "All of these are soft drink brands EXCEPT:",
    choices: ["Coca‑Cola", "Sprite", "Mountain Dew", "Minute Maid"],
    answer: 3,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Mozzarella sticks are typically served with ____ sauce.",
    choices: ["Tomato", "Ranch", "Barbecue", "Mustard"],
    answer: 0,
    category: "Junk Food",
    difficulty: "medium"
  },
  {
    question: "Tater tots are made from grated ____.",
    choices: ["Yams", "Potatoes", "Corn", "Cheese"],
    answer: 1,
    category: "Junk Food",
    difficulty: "medium"
  },

  // 8 Hard
  {
    question: "Which California chain is famous for its chicken and waffles?",
    choices: ["KFC", "Chick‑fil‑A", "Wingstop", "Roscoe's"],
    answer: 3,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: Frito pie is made from Fritos, chili, and ____.",
    choices: ["Lettuce", "Cheese", "Tomato", "Onions"],
    answer: 1,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "True or False: Poutine originated in Canada.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "All of these are brands of breakfast cereal EXCEPT:",
    choices: ["Cheerios", "Froot Loops", "Stone Cold Steve Austin", "Rice Krispies"],
    answer: 2,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "Which chain created the Doritos Locos Taco?",
    choices: ["Taco Bell", "Wendy’s", "Subway", "Jack in the Box"],
    answer: 0,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "Fill in the blank: Gorditas are stuffed ____ in Mexican cuisine.",
    choices: ["Shells", "Tortillas", "Pitas", "Empanadas"],
    answer: 1,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "Which candy bar pairs caramel, nougat, and peanuts under chocolate?",
    choices: ["Mars", "Twix", "Snickers", "KitKat"],
    answer: 2,
    category: "Junk Food",
    difficulty: "hard"
  },
  {
    question: "True or False: A milkshake traditionally contains only ice cream and milk.",
    choices: ["True", "False", "", ""],
    answer: 0,
    category: "Junk Food",
    difficulty: "hard"
  }

];

export default questions;


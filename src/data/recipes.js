export const recipeCategories = [
  "All",
  "Breakfast",
  "Mains",
  "Sides",
  "Snacks",
  "Desserts",
  "Beverages"
];

export const recipes = [
  {
    id: 1,
    name: "Masala Dosa",
    category: "Breakfast",
    cuisine: "South Indian",
    difficulty: "Intermediate",
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy rice and lentil crepes filled with spiced potato masala, served with coconut chutney and sambar.",
    ingredients: [
      "3 cups dosa batter",
      "4 boiled potatoes",
      "1 onion, sliced",
      "2 green chilies",
      "1 tsp mustard seeds",
      "1/2 tsp turmeric",
      "Fresh curry leaves",
      "Salt to taste"
    ],
    steps: [
      "Heat oil, temper mustard seeds, curry leaves, and chilies.",
      "Add onions, sauté until soft, then add turmeric and crumbled potatoes.",
      "Spread batter on hot tawa, drizzle oil, and cook until golden.",
      "Fill with masala and fold dosa. Serve hot."
    ],
    tags: ["Vegan", "Fermented"],
    spotlight: ["Naturally gluten-free when made with rice batter", "High-carb breakfast that keeps you full"],
    nutrition: {
      calories: 320,
      protein: "8g",
      carbs: "52g",
      fat: "8g"
    }
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Mains",
    cuisine: "North Indian",
    difficulty: "Intermediate",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1608039829574-7660d425f61c?auto=format&fit=crop&w=800&q=80",
    description:
      "Smoky tandoori-style chicken simmered in a velvety tomato-butter sauce finished with cream.",
    ingredients: [
      "500 g boneless chicken",
      "1 cup yogurt",
      "2 tbsp tandoori masala",
      "1 cup tomato purée",
      "2 tbsp butter",
      "1/2 cup cream",
      "Kasuri methi",
      "Garam masala"
    ],
    steps: [
      "Marinate chicken with yogurt, spices, and rest 1 hour.",
      "Grill or roast until charred.",
      "Simmer tomato sauce with butter, spices, and cream.",
      "Add chicken and cook until sauce clings."
    ],
    tags: ["Restaurant classic", "Comfort food"],
    nutrition: {
      calories: 410,
      protein: "28g",
      carbs: "14g",
      fat: "28g"
    }
  },
  {
    id: 3,
    name: "Palak Paneer",
    category: "Mains",
    cuisine: "North Indian",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1608039829574-38e0b709f637?auto=format&fit=crop&w=800&q=80",
    description:
      "Creamy spinach purée infused with garlic, green chilies, and cubes of soft paneer.",
    ingredients: [
      "300 g spinach",
      "200 g paneer",
      "1 onion",
      "2 tomatoes",
      "3 garlic cloves",
      "1 green chili",
      "Ghee, garam masala"
    ],
    steps: [
      "Blanch spinach, shock in cold water, and blend.",
      "Sauté onions, garlic, chilies; add tomatoes until soft.",
      "Stir in spinach purée, spices, and simmer.",
      "Add paneer cubes and finish with ghee."
    ],
    tags: ["Vegetarian", "Iron-rich"],
    nutrition: {
      calories: 280,
      protein: "14g",
      carbs: "16g",
      fat: "18g"
    }
  },
  {
    id: 4,
    name: "Pani Puri",
    category: "Snacks",
    cuisine: "Street Food",
    difficulty: "Easy",
    prepTime: 25,
    cookTime: 0,
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1625225233840-695456021cde?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy puris stuffed with spiced potatoes, chickpeas, and tangy mint-cumin water.",
    ingredients: [
      "30 mini puris",
      "2 potatoes",
      "1/2 cup black chickpeas",
      "Mint-coriander chutney",
      "Tamarind chutney",
      "Roasted cumin, chaat masala"
    ],
    steps: [
      "Mash potatoes with spices and chickpeas.",
      "Blend mint chutney with tamarind water, cumin, and black salt.",
      "Crack puris, stuff with filling, dunk in flavored water, and enjoy immediately."
    ],
    tags: ["Street food", "Gluten"],
    nutrition: {
      calories: 180,
      protein: "4g",
      carbs: "32g",
      fat: "4g"
    }
  },
  {
    id: 5,
    name: "Hyderabadi Dum Biryani",
    category: "Mains",
    cuisine: "Hyderabadi",
    difficulty: "Advanced",
    prepTime: 40,
    cookTime: 45,
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1608039829574-1dee2082ef43?auto=format&fit=crop&w=800&q=80",
    description:
      "Layered basmati rice and saffron chicken sealed and slow-cooked for smoky aroma and tender grains.",
    ingredients: [
      "500 g chicken",
      "3 cups basmati rice",
      "1 cup yogurt",
      "Brown onions",
      "Whole spices",
      "Saffron milk",
      "Mint & coriander"
    ],
    steps: [
      "Marinate chicken with yogurt, spices, and fried onions.",
      "Parboil rice with whole spices.",
      "Layer chicken and rice, drizzle saffron milk and ghee.",
      "Seal pot and cook on dum for 30 minutes."
    ],
    tags: ["Celebration", "One-pot"],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "62g",
      fat: "18g"
    }
  },
  {
    id: 6,
    name: "Gujarati Dhokla",
    category: "Snacks",
    cuisine: "Gujarati",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1631459546354-11949ce909ae?auto=format&fit=crop&w=800&q=80",
    description:
      "Steamed savory cake made with fermented gram flour batter and tempered with mustard, sesame, and curry leaves.",
    ingredients: [
      "2 cups besan",
      "1 cup yogurt",
      "Green chili-ginger paste",
      "Fruit salt",
      "Tempering: mustard seeds, sesame seeds, curry leaves"
    ],
    steps: [
      "Prepare smooth batter with besan, yogurt, spices.",
      "Add fruit salt, steam for 15 minutes.",
      "Temper with mustard, sesame, chilies, and pour over dhokla."
    ],
    tags: ["Steamed", "Gluten-free"],
    nutrition: {
      calories: 210,
      protein: "9g",
      carbs: "28g",
      fat: "6g"
    }
  },
  {
    id: 7,
    name: "Filter Coffee",
    category: "Beverages",
    cuisine: "South Indian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    description:
      "Strong decoction brewed in a steel filter, blended with hot milk and jaggery or sugar.",
    ingredients: [
      "4 tbsp filter coffee powder",
      "1.5 cups water",
      "1 cup milk",
      "Sweetener of choice"
    ],
    steps: [
      "Add coffee powder to filter, pour hot water, and allow decoction to drip.",
      "Heat milk, froth by pouring between tumblers.",
      "Combine decoction and milk; sweeten to taste."
    ],
    tags: ["Caffeine", "Breakfast"],
    nutrition: {
      calories: 90,
      protein: "4g",
      carbs: "8g",
      fat: "4g"
    }
  },
  {
    id: 8,
    name: "Rasmalai",
    category: "Desserts",
    cuisine: "Bengali",
    difficulty: "Intermediate",
    prepTime: 25,
    cookTime: 30,
    servings: 6,
    image:
      "https://images.unsplash.com/photo-1603899122634-f086ca7494fd?auto=format&fit=crop&w=800&q=80",
    description:
      "Soft paneer discs soaked in thickened saffron milk with pistachios and cardamom.",
    ingredients: [
      "1 liter milk",
      "2 tbsp lemon juice",
      "4 cups water",
      "1 cup sugar",
      "Saffron, cardamom",
      "Nuts for garnish"
    ],
    steps: [
      "Curdle milk to make chenna, knead and shape discs.",
      "Simmer discs in sugar syrup until spongy.",
      "Reduce milk with saffron and cardamom, soak discs, chill."
    ],
    tags: ["Festive", "Make-ahead"],
    nutrition: {
      calories: 260,
      protein: "10g",
      carbs: "34g",
      fat: "9g"
    }
  }
];

export const regionalCollections = [
  {
    name: "Coastal Comfort",
    description: "Seafood, coconut, and pepper-laced dishes from Konkan and Malabar belts.",
    highlight: "11 must-try curry base recipes",
    color: "#0ea5e9"
  },
  {
    name: "Royal Kitchens",
    description: "Slow-cooked Awadhi, Lucknowi, and Hyderabadi preparations for feasts.",
    highlight: "Biryanis, qormas, kebabs",
    color: "#f97316"
  },
  {
    name: "Everyday Tiffin",
    description: "Meal-prep friendly recipes that travel well and reheat beautifully.",
    highlight: "South Indian staples + millet twists",
    color: "#14b8a6"
  }
];

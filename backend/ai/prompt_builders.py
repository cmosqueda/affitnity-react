# prompt builders


def build_exercise_prompt(target):
    # Extract user profile data from your Target model (adjust attribute names accordingly)
    user_profile = {
        "body_type": target.body_type,
        "weight_kg": target.weight_kg,
        "height_cm": target.height_cm,
        "bmi": target.bmi,
        "experience_level": target.experience_level,
        "fitness_goals": target.fitness_goals,      # List of goals
        "fitness_focus": target.fitness_focus       # List of focus areas
    }
    
    # Compose the prompt instructing Gemini to return exactly this JSON format
    prompt = """
You are an AI fitness assistant. Generate a detailed 7-day exercise plan in JSON format based on the user's fitness focus and fitness goals. The JSON structure must exactly match this example:

{
  "user_profile": {
    "body_type": "ectomorph",
    "weight_kg": 60,
    "height_cm": 170,
    "bmi": 20.8,
    "experience_level": "beginner",
    "fitness_goals": ["muscle gain", "flexibility"],
    "fitness_focus": ["strength training", "flexibility exercise"]
  },
  "plan_summary": {
    "week_duration": 1,
    "description": "This 7-day exercise plan is tailored for an ectomorph beginner focused on building muscle and improving flexibility. The AI generated a balanced routine combining strength training and light mobility work."
  },
  "daily_plan": [
    {
      "day": "Monday",
      "focus": "Upper Body Strength",
      "exercises": [
        { "name": "Push-ups", "sets": 3, "reps": 10 },
        { "name": "Dumbbell Rows", "sets": 3, "reps": 12 },
        { "name": "Shoulder Taps", "sets": 3, "duration_sec": 30 }
      ]
    },
    {
      "day": "Tuesday",
      "focus": "Lower Body Strength",
      "exercises": [
        { "name": "Bodyweight Squats", "sets": 3, "reps": 15 },
        { "name": "Glute Bridges", "sets": 3, "reps": 12 },
        { "name": "Lunges", "sets": 2, "reps": 10 }
      ]
    },
    {
      "day": "Wednesday",
      "focus": "Flexibility & Recovery",
      "exercises": [
        { "name": "Yoga Flow", "duration_min": 30 },
        { "name": "Hamstring Stretch", "duration_sec": 60 },
        { "name": "Child's Pose", "duration_sec": 45 }
      ]
    },
    {
      "day": "Thursday",
      "focus": "Full Body Strength",
      "exercises": [
        { "name": "Burpees", "sets": 2, "reps": 10 },
        { "name": "Plank", "duration_sec": 30 },
        { "name": "Jumping Jacks", "sets": 3, "reps": 20 }
      ]
    },
    {
      "day": "Friday",
      "focus": "Cardio & Core",
      "exercises": [
        { "name": "Brisk Walk", "duration_min": 20 },
        { "name": "Bicycle Crunches", "sets": 2, "reps": 15 },
        { "name": "Leg Raises", "sets": 2, "reps": 12 }
      ]
    },
    {
      "day": "Saturday",
      "focus": "Mobility & Stretching",
      "exercises": [
        { "name": "Dynamic Stretching", "duration_min": 15 },
        { "name": "Foam Rolling", "duration_min": 10 },
        { "name": "Neck Stretch", "duration_sec": 30 }
      ]
    },
    {
      "day": "Sunday",
      "focus": "Rest",
      "exercises": []
    }
  ],
  "reminders": [
    "Start with a 5-minute warm-up every day.",
    "End each session with light stretching.",
    "Stay hydrated and listen to your body.",
    "Repeat similar intensity next week or regenerate new plan."
  ]
}


Return ONLY valid JSON.
"""
    return prompt



def build_diet_prompt(target):
    # extract user profile data
    user_profile = {
        "height_cm": target.height_cm,
        "weight_kg":target.weight_kg,
        "bmi":target.bmi,
        "preferred_diet":target.preferred_diet,
        "diet_restrictions":target.diet_restrictions
    }

    # compose prompt
    prompt = """
You are an AI dietician assistant. Generate a detailed 7-day meal plan for breakfast, lunch, and dinner in JSON format based on the user's preferred diet and diet restrictions. The JSON structure must exactly match this example:

{
  "user_profile": {
    "height_cm": 165,
    "weight_kg": 60,
    "bmi": 22.0,
    "preferred_diet": "Mediterranean",
    "diet_restrictions": ["milk", "peanuts"]
  },
  "plan_summary": {
    "week_duration": 1,
    "description": "This 7-day AI-generated Mediterranean diet plan is designed for maintaining a healthy BMI, excluding milk and peanuts. The meals focus on whole grains, lean proteins, fruits, vegetables, and healthy fats."
  },
  "daily_meals": [
    {
      "day": "Monday",
      "meals": {
        "breakfast": {
          "name": "Oatmeal with Chia and Berries",
          "ingredients": ["rolled oats", "chia seeds", "blueberries", "almond milk (non-dairy)"],
          "notes": "Dairy-free milk used"
        },
        "lunch": {
          "name": "Grilled Chicken with Quinoa Salad",
          "ingredients": ["grilled chicken breast", "quinoa", "cucumber", "tomato", "olive oil"],
          "notes": "Rich in protein and healthy fats"
        },
        "dinner": {
          "name": "Baked Salmon with Steamed Vegetables",
          "ingredients": ["salmon fillet", "broccoli", "carrots", "lemon"],
          "notes": "Omega-3 rich dinner"
        }
      }
    },
    {
      "day": "Tuesday",
      "meals": {
        "breakfast": {
          "name": "Avocado Toast with Cherry Tomatoes",
          "ingredients": ["whole grain bread", "avocado", "cherry tomatoes"],
          "notes": ""
        },
        "lunch": {
          "name": "Chickpea and Spinach Salad",
          "ingredients": ["chickpeas", "spinach", "red onion", "olive oil", "lemon juice"],
          "notes": "High fiber, plant-based protein"
        },
        "dinner": {
          "name": "Lentil Soup with Whole Wheat Pita",
          "ingredients": ["lentils", "carrots", "celery", "onion", "vegetable broth"],
          "notes": "Warm and filling"
        }
      }
    },
    {
      "day": "Wednesday",
      "meals": {
        "breakfast": {
          "name": "Smoothie Bowl",
          "ingredients": ["banana", "berries", "spinach", "non-dairy yogurt", "chia seeds"],
          "notes": "Dairy-free and antioxidant-rich"
        },
        "lunch": {
          "name": "Tuna Wrap with Hummus",
          "ingredients": ["whole grain wrap", "tuna", "lettuce", "hummus"],
          "notes": "Protein-packed"
        },
        "dinner": {
          "name": "Grilled Zucchini and Couscous",
          "ingredients": ["zucchini", "couscous", "olive oil", "parsley"],
          "notes": ""
        }
      }
    },
    {
      "day": "Thursday",
      "meals": {
        "breakfast": {
          "name": "Whole Grain Cereal with Almond Milk",
          "ingredients": ["whole grain cereal", "almond milk", "banana slices"],
          "notes": ""
        },
        "lunch": {
          "name": "Stuffed Bell Peppers",
          "ingredients": ["bell peppers", "brown rice", "tomato", "black beans"],
          "notes": "Fiber-rich and filling"
        },
        "dinner": {
          "name": "Shrimp and Vegetable Stir Fry",
          "ingredients": ["shrimp", "broccoli", "carrots", "garlic", "soy sauce (low sodium)"],
          "notes": ""
        }
      }
    },
    {
      "day": "Friday",
      "meals": {
        "breakfast": {
          "name": "Chickpea Omelet with Veggies",
          "ingredients": ["chickpea flour", "bell pepper", "spinach", "onions"],
          "notes": "Egg-free, high protein"
        },
        "lunch": {
          "name": "Grilled Eggplant and Hummus Wrap",
          "ingredients": ["whole grain wrap", "grilled eggplant", "hummus", "greens"],
          "notes": ""
        },
        "dinner": {
          "name": "Baked Tilapia with Roasted Potatoes",
          "ingredients": ["tilapia", "potatoes", "olive oil", "thyme"],
          "notes": ""
        }
      }
    },
    {
      "day": "Saturday",
      "meals": {
        "breakfast": {
          "name": "Fruit Salad with Chia Seeds",
          "ingredients": ["apple", "orange", "kiwi", "chia seeds"],
          "notes": ""
        },
        "lunch": {
          "name": "Falafel Bowl",
          "ingredients": ["falafel", "brown rice", "tomatoes", "cucumber", "tahini"],
          "notes": ""
        },
        "dinner": {
          "name": "Grilled Chicken Skewers with Couscous",
          "ingredients": ["chicken breast", "bell peppers", "couscous", "mint"],
          "notes": ""
        }
      }
    },
    {
      "day": "Sunday",
      "meals": {
        "breakfast": {
          "name": "Almond Butter Toast with Banana",
          "ingredients": ["whole grain bread", "almond butter", "banana slices"],
          "notes": "Peanut-free spread used"
        },
        "lunch": {
          "name": "Vegetable Paella",
          "ingredients": ["brown rice", "peas", "carrots", "red bell pepper", "turmeric"],
          "notes": ""
        },
        "dinner": {
          "name": "Mushroom and Spinach Stir Fry",
          "ingredients": ["mushrooms", "spinach", "garlic", "olive oil"],
          "notes": ""
        }
      }
    }
  ],
  "notes": [
    "Avoid milk and peanuts in all meals.",
    "Use plant-based or lactose-free alternatives where needed.",
    "Drink at least 8 glasses of water daily.",
    "Meal portions should be based on hunger levels and activity."
  ]
}

RETURN ONLY valid JSON.
    """
    return prompt
// diet data string
const dietDataString = `
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

`;

const MealCard = ({ mealType, meal }: any) => (
  <div className="bg-white shadow rounded-lg p-4 mb-3 hover:shadow-lg transition-shadow duration-300">
    <h4 className="font-semibold capitalize text-gray-800">{mealType}</h4>
    <p className="text-gray-700 font-medium">{meal.name}</p>
    <ul className="text-sm text-gray-600 list-disc ml-5 my-2">
      {meal.ingredients.map((item: any, index: any) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {meal.notes && <p className="text-xs italic text-gray-500">Note: {meal.notes}</p>}
  </div>
);

export default function DietPlan() {
  //   parse json data
  const dietData = JSON.parse(dietDataString);
  const { user_profile, plan_summary, daily_meals, notes } = dietData;
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          {" "}
          Diet Plan - {dietData.plan_summary.week_duration} Week Long
        </h1>
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">User Profile</h2>
            <ul className="text-gray-700">
              <li>
                <span className="font-medium">Height:</span> {user_profile.height_cm} cm
              </li>
              <li>
                <span className="font-medium">Weight:</span> {user_profile.weight_kg} kg
              </li>
              <li>
                <span className="font-medium">BMI:</span> {user_profile.bmi}
              </li>
              <li>
                <span className="font-medium">Preferred Diet:</span> {user_profile.preferred_diet}
              </li>
              <li>
                <span className="font-medium">Diet Restrictions:</span> {user_profile.diet_restrictions.join(", ")}
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-green-800 mb-1">Plan Summary</h2>
            <p className="text-gray-700">{plan_summary.description}</p>
          </div>
        </section>

        <section>
          {daily_meals.map((dayPlan: any, index: any) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-bold text-green-600 mb-4 border-b pb-2">{dayPlan.day}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <MealCard mealType="Breakfast" meal={dayPlan.meals.breakfast} />
                <MealCard mealType="Lunch" meal={dayPlan.meals.lunch} />
                <MealCard mealType="Dinner" meal={dayPlan.meals.dinner} />
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">General Notes</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {notes.map((note: any, idx: any) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

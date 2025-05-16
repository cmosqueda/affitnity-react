# prompt builders
from google import genai
import json

def build_exercise_prompt(target):
    user_profile = {
        "body_type": target.body_type,
        "weight_kg": target.weight_kg,
        "height_cm": target.height_cm,
        "bmi": target.bmi,
        "experience_level": target.experience_level,
        "fitness_goals": target.fitness_goals,
        "fitness_focus": target.fitness_focus
    }

    prompt = f"""
You are an AI fitness assistant. Based on the user profile below, generate a detailed 7-day exercise plan strictly in JSON format. Return ONLY valid JSON with no extra explanation or text.

User profile:

{json.dumps(user_profile, indent=2)}

The JSON structure MUST EXACTLY match this example (including keys, capitalization, and data types):

{{
  "user_profile": {{
    "body_type": "ectomorph",
    "weight_kg": 60,
    "height_cm": 170,
    "bmi": 20.8,
    "experience_level": "beginner",
    "fitness_goals": ["muscle gain", "flexibility"],
    "fitness_focus": ["strength training", "flexibility exercise"]
  }},
  "plan_summary": {{
    "week_duration": 1,
    "description": "This 7-day exercise plan is tailored for an ectomorph beginner focused on building muscle and improving flexibility. The AI generated a balanced routine combining strength training and light mobility work."
  }},
  "daily_plan": [
    {{
      "day": "Monday",
      "focus": "Upper Body Strength",
      "exercises": [
        {{ "name": "Push-ups", "sets": 3, "reps": 10 }},
        {{ "name": "Dumbbell Rows", "sets": 3, "reps": 12 }},
        {{ "name": "Shoulder Taps", "sets": 3, "duration_sec": 30 }}
      ]
    }},
    {{
      "day": "Tuesday",
      "focus": "Lower Body Strength",
      "exercises": [
        {{ "name": "Bodyweight Squats", "sets": 3, "reps": 15 }},
        {{ "name": "Glute Bridges", "sets": 3, "reps": 12 }},
        {{ "name": "Lunges", "sets": 2, "reps": 10 }}
      ]
    }},
    {{
      "day": "Wednesday",
      "focus": "Flexibility & Recovery",
      "exercises": [
        {{ "name": "Yoga Flow", "duration_min": 30 }},
        {{ "name": "Hamstring Stretch", "duration_sec": 60 }},
        {{ "name": "Child's Pose", "duration_sec": 45 }}
      ]
    }},
    {{
      "day": "Thursday",
      "focus": "Full Body Strength",
      "exercises": [
        {{ "name": "Burpees", "sets": 2, "reps": 10 }},
        {{ "name": "Plank", "duration_sec": 30 }},
        {{ "name": "Jumping Jacks", "sets": 3, "reps": 20 }}
      ]
    }},
    {{
      "day": "Friday",
      "focus": "Cardio & Core",
      "exercises": [
        {{ "name": "Brisk Walk", "duration_min": 20 }},
        {{ "name": "Bicycle Crunches", "sets": 2, "reps": 15 }},
        {{ "name": "Leg Raises", "sets": 2, "reps": 12 }}
      ]
    }},
    {{
      "day": "Saturday",
      "focus": "Mobility & Stretching",
      "exercises": [
        {{ "name": "Dynamic Stretching", "duration_min": 15 }},
        {{ "name": "Foam Rolling", "duration_min": 10 }},
        {{ "name": "Neck Stretch", "duration_sec": 30 }}
      ]
    }},
    {{
      "day": "Sunday",
      "focus": "Rest",
      "exercises": []
    }}
  ],
  "reminders": [
    "Start with a 5-minute warm-up every day.",
    "End each session with light stretching.",
    "Stay hydrated and listen to your body.",
    "Repeat similar intensity next week or regenerate new plan."
  ]
}}
"""
    return prompt




def build_diet_prompt(target):
    user_profile = {
        "height_cm": target.height_cm,
        "weight_kg": target.weight_kg,
        "bmi": target.bmi,
        "preferred_diet": target.preferred_diet,
        "diet_restrictions": target.diet_restrictions
    }

    prompt = f"""
You are an AI dietician assistant. Based on the user profile below, generate a detailed 7-day meal plan strictly in JSON format for breakfast, lunch, and dinner. Return ONLY valid JSON with no extra text.

User profile:

{json.dumps(user_profile, indent=2)}

The JSON output MUST EXACTLY match this structure (including keys, double quotes, and arrays):

{{
  "user_profile": {{
    "height_cm": 165,
    "weight_kg": 60,
    "bmi": 22.0,
    "preferred_diet": "Mediterranean",
    "diet_restrictions": ["milk", "peanuts"]
  }},
  "plan_summary": {{
    "week_duration": 1,
    "description": "This 7-day AI-generated Mediterranean diet plan is designed for maintaining a healthy BMI, excluding milk and peanuts. The meals focus on whole grains, lean proteins, fruits, vegetables, and healthy fats."
  }},
  "daily_meals": [
    {{
      "day": "Monday",
      "meals": {{
        "breakfast": {{
          "name": "Oatmeal with Chia and Berries",
          "ingredients": ["rolled oats", "chia seeds", "blueberries", "almond milk (non-dairy)"],
          "notes": "Dairy-free milk used"
        }},
        "lunch": {{
          "name": "Grilled Chicken with Quinoa Salad",
          "ingredients": ["grilled chicken breast", "quinoa", "cucumber", "tomato", "olive oil"],
          "notes": "Rich in protein and healthy fats"
        }},
        "dinner": {{
          "name": "Baked Salmon with Steamed Vegetables",
          "ingredients": ["salmon fillet", "broccoli", "carrots", "lemon"],
          "notes": "Omega-3 rich dinner"
        }}
      }}
    }},
    ... (repeat for other days Monday to Sunday)
  ],
  "notes": [
    "Avoid milk and peanuts in all meals.",
    "Use plant-based or lactose-free alternatives where needed.",
    "Drink at least 8 glasses of water daily.",
    "Meal portions should be based on hunger levels and activity."
  ]
}}
"""
    return prompt

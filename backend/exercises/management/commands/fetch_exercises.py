import time
import requests
from django.core.management.base import BaseCommand
from exercises.models import Exercise

class Command(BaseCommand):
    help = "Fetch all exercises from ExerciseDB API and store them in the database"

    def handle(self, *args, **kwargs):
        base_url = 'https://exercisedb-api.vercel.app/api/v1/exercises'
        offset = 0
        limit = 10  # you can adjust this for more items per page
        total_fetched = 0
        max_pages = 133  # optional: limit how many pages to fetch

        try:
            for page_count in range(max_pages):
                response = requests.get(base_url, params={"offset": offset, "limit": limit})
                response.raise_for_status()
                data = response.json()

                exercises = data.get('data', {}).get('exercises', [])
                if not exercises:
                    print("No more exercises to fetch.")
                    break

                for item in exercises:
                    Exercise.objects.update_or_create(
                        exercise_id=item["exerciseId"],
                        defaults={
                            "name": item["name"],
                            "gif_url": item["gifUrl"],
                            "target_muscles": item["targetMuscles"],
                            "body_parts": item["bodyParts"],
                            "equipments": item["equipments"]
                        }
                    )
                    total_fetched += 1

                print(f"Page {page_count + 1} (offset={offset}) processed. Total exercises saved so far: {total_fetched}")
                offset += limit  # move to the next batch
                time.sleep(0.5)  # delay to avoid hammering the API

            self.stdout.write(self.style.SUCCESS(f"\nDone! Successfully fetched and saved {total_fetched} exercises."))

        except Exception as e:
            self.stderr.write(f"Error: {e}")

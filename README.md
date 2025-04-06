# affitnity-react

This is a joint collaborative project for our courses App Dev and Emerging Tech and Integrative Programming Tech. This app is a web prototype for a fitness app.

=====================
Stacks used:

Frontend: React JS + Tailwindcss + Shadcn
Backend: Django + Axios
Database: PostgreSQL

=====================

How to use this project by forking:

1. Visit this GitHub repo: https://github.com/cmosqueda/affitnity-react
2. Click the "Fork" button (top-right)
3. Choose your GitHub account as the destination
4. GitHub will create a copy of the repository in your account

Clone the Forked Repo to Your Local Machine:

> git clone https://github.com/cmosqueda/affitnity-react.git
> cd affitnity-react

Set up the backend (Django + PostgreSQL):
Inside the root project folder (affitnity-react/), enter:

> py -m venv venv
> venv/Scripts/activate # on windows, or
> source venv/bin/activate # on Linux/macOS

Go inside the (backend/) folder, then install all Django dependencies:

> cd backend
> pip install -r requirements.txt

Make sure that postgresql has been properly installed and configured in your device.
Install it first if it's not yet installed.

Open new window of the initial_data.json located inside the (backend/) folder.
Make sure that the initial_data.json is encoded in UTF-8 and valid JSON format.
In VSCode, you can change its UTF structure at the bottommost menu panel UTF-\*\* and change it into UTF-8.

Then, load the initial_data.json found inside the (backend/) folder.
This loads the postgresql schema of this system's database for the Django model to migrate.

> py manage.py loaddata initial_data.json

Run migrations inside the same folder (backend/):

> py manage.py migrate

Create a superuser (optional):

> py manage.py createsuperuser

Set Up the Frontend (React + Vite):

> cd ..
> cd frontend
> npm install

Run the Vite development server:
Inside (frontend/), enter:

> npm run dev # run Vite server

Run Backend Server (Django):
Open a new terminal and go to (backend/) directory:
Inside (affitnity-react/), enter:

> venv/Scripts/activate # activate venv inside the affitnity-react/ directory
> cd backend # go to backend
> py manage.py runserver # run Django server

=====================

DIRECTORY STRUCTURE:

affitnity-react/
├── backend/
│ ├── core/
│ ├── users/
│ ├── manage.py
│ ├── initial_data.json
│ └── requirements.txt  
├── frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ └── ...
├── venv/
├── .gitignore
└── README.md (optional)

# Workout Generator — Build Your Perfect Routine

A web application to discover and build personalized workouts based on body type and fitness goals.

## Project Overview

**Workout Generator** helps users find the right exercises for their specific body type (Ectomorph, Mesomorph, Endomorph). By answering simple questions about their body type, target muscle groups, and available equipment, users can get a customized exercise routine.

## Features

- 🏋️ Personalized workouts by body type
- 🔍 Search and filter exercises by equipment and muscle group
- 📱 Fully responsive design (mobile, tablet, desktop)
- 💬 Contact form for user feedback
- 📚 Team information and project documentation
- 🚀 Live API integration with ExerciseDB

## Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5
- **JavaScript:** Vanilla JS (ES6+), Fetch API
- **API:** ExerciseDB via RapidAPI
- **Version Control:** Git & GitHub
- **Deployment:** GitHub Pages

## Project Team

| Name | Role | Responsibilities |
|------|------|------------------|
| Dyson | Designer & Lead Developer | HTML structure, CSS styling, JavaScript integration, project architecture |
| Frazer | Researcher | API documentation, research, README updates, troubleshooting |
| Aemod | QA/Tester | Testing, bug reports, responsive design verification, deployment |

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/kalab-afework/Workout-Generator.git
cd Workout-Generator
```

### 2. Local Development Server

Run a local server to test the application:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server
```

Then open your browser to: **http://localhost:8000**

### 3. API Setup (Sprint 3)

To enable the search functionality:

1. Sign up for a free account at [RapidAPI](https://rapidapi.com/)
2. Subscribe to the [ExerciseDB API](https://rapidapi.com/api-sports/api/exercisedb)
3. Copy your API key
4. Open `js/config.js` and replace `YOUR_RAPIDAPI_KEY_HERE` with your actual key

## File Structure

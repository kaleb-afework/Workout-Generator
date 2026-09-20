// ExerciseDB API Configuration
const API_CONFIG = {
    BASE_URL: 'https://exercisedb.p.rapidapi.com',
    API_KEY: 'YOUR_RAPIDAPI_KEY_HERE', // Replace with your actual RapidAPI key
    API_HOST: 'exercisedb.p.rapidapi.com',
    HEADERS: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

// Body Type Recommendations
const BODY_TYPES = {
    ectomorph: {
        name: 'Ectomorph',
        description: 'Lean, Fast Metabolism',
        recommendations: {
            reps: '8-12',
            focus: 'Compound lifts, high calorie intake',
            priority: 'Chest, Back, Legs'
        }
    },
    mesomorph: {
        name: 'Mesomorph',
        description: 'Athletic, Responsive',
        recommendations: {
            reps: '8-12',
            focus: 'Balanced training',
            priority: 'All muscle groups'
        }
    },
    endomorph: {
        name: 'Endomorph',
        description: 'Curvy, Strong',
        recommendations: {
            reps: '12-15',
            focus: 'More cardio, resistance training',
            priority: 'Cardio, Core, Legs'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, BODY_TYPES };
}

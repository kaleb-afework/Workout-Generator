// ExerciseDB API Functions
// Sprint 3: API Integration

// Fetch all exercises (limited to 10 for demo)
async function fetchExercises() {
    try {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/exercises?limit=10`,
            {
                method: 'GET',
                headers: API_CONFIG.HEADERS
            }
        );
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Exercises fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        return null;
    }
}

// Fetch exercises by target muscle group
async function fetchExercisesByMuscle(targetMuscle) {
    try {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/exercises/target/${targetMuscle}`,
            {
                method: 'GET',
                headers: API_CONFIG.HEADERS
            }
        );
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Exercises for ${targetMuscle}:`, data);
        return data;
    } catch (error) {
        console.error(`Error fetching exercises for ${targetMuscle}:`, error);
        return null;
    }
}

// Fetch exercises by equipment
async function fetchExercisesByEquipment(equipmentType) {
    try {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}/exercises/equipment/${equipmentType}`,
            {
                method: 'GET',
                headers: API_CONFIG.HEADERS
            }
        );
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Exercises with ${equipmentType}:`, data);
        return data;
    } catch (error) {
        console.error(`Error fetching exercises with ${equipmentType}:`, error);
        return null;
    }
}

// Display exercises in results div
function displayExercises(exercises) {
    const resultsDiv = document.getElementById('results');
    
    if (!exercises || exercises.length === 0) {
        resultsDiv.innerHTML = '<p class="text-muted">No exercises found. Try different filters.</p>';
        return;
    }
    
    let html = '<div class="row">';
    
    exercises.forEach(exercise => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${exercise.name}</h6>
                        <p class="small text-muted">
                            <strong>Target:</strong> ${exercise.target} <br>
                            <strong>Equipment:</strong> ${exercise.equipment}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsDiv.innerHTML = html;
}

// TODO: Sprint 3 - Filter exercises by body type
function filterByBodyType(exercises, bodyType) {
    // Implement logic to filter exercises based on body type recommendations
}

// TODO: Sprint 3 - Combine multiple filters
function applyFilters(exercises, bodyType, equipment, muscleGroup) {
    // Implement multi-filter logic
}

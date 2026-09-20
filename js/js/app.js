// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // TODO: Sprint 2 - Add form validation
            // - Check if all required fields are filled
            // - Validate email format
            // - Show error messages if validation fails
            
            // Log form data (for debugging)
            console.log('Form submitted:', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            
            // TODO: Sprint 3 - Send data to server
            // - Use fetch API to send form data
            // - Handle success/error responses
            // - Show success message to user
            
            // For now, show success message
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        });
    }
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const bodyType = document.getElementById('bodyType').value;
            const equipment = document.getElementById('equipment').value;
            const muscleGroup = document.getElementById('muscleGroup').value;
            
            console.log('Search params:', {
                bodyType: bodyType,
                equipment: equipment,
                muscleGroup: muscleGroup
            });
            
            // TODO: Sprint 3 - Call API with filters
            // - Use fetchExercises() from api.js
            // - Display results in #results div
            // - Handle loading state
            // - Handle error states
            
            const resultsDiv = document.getElementById('results');
            if (resultsDiv) {
                resultsDiv.innerHTML = '<p class="text-muted">Loading exercises...</p>';
            }
        });
    }
});

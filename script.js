function calculateAge() {
    
    const dobInput = document.getElementById('dob').value;

    
    const dob = new Date(dobInput);

    
    const currentDate = new Date();

    
    const age = currentDate.getFullYear() - dob.getFullYear();

    
    if (currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        
        document.getElementById('result').innerHTML = `Your age is: ${age - 1} years`;
    } else {
        
        document.getElementById('result').innerHTML = `Your age is: ${age} years`;
    }
}


function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('toggle-btn');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
    
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    toggleBtn.addEventListener('click', toggleDarkMode);
});


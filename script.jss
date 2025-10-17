document.addEventListener('DOMContentLoaded', () => {
    // Select all checkboxes on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Function to save the state of a checkbox to localStorage
    const saveState = (checkboxId, isChecked) => {
        localStorage.setItem(checkboxId, isChecked);
    };

    // Function to load the state of all checkboxes from localStorage
    const loadStates = () => {
        checkboxes.forEach(checkbox => {
            const isChecked = localStorage.getItem(checkbox.id) === 'true';
            checkbox.checked = isChecked;
        });
    };

    // Add an event listener to each checkbox to save its state on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            saveState(event.target.id, event.target.checked);
        });
    });

    // Load the initial state of all checkboxes when the page loads
    loadStates();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is loaded');
    const toggleButton = document.getElementById('dropdown-toggle');
    const dropdownContent = document.getElementById('dropdown-content');
    
    console.log(toggleButton, dropdownContent);
    
    toggleButton.addEventListener('click', () => {
        console.log('Button clicked');
        if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });
    
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        console.log('Window clicked');
        if (!event.target.matches('#dropdown-toggle') && !event.target.matches('#dropdown-content')) {
            dropdownContent.style.display = 'none';
        }
    });
});

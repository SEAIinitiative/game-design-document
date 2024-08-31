document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with both 'nav-link' and 'main-link' classes
    var mainLinks = document.querySelectorAll('.nav-link.main-link');
    var currentlyOpenSubSection = null; // Variable to keep track of the currently open sub-section

    // Loop through each main link
    mainLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Find the next sibling element (expected to be a sub-section container)
            var subSectionContainer = this.nextElementSibling;
            console.log("Sub-section detected:", subSectionContainer.className);

            if (subSectionContainer && subSectionContainer.classList.contains('sub-section')) {
                const subSectionStyle = window.getComputedStyle(subSectionContainer);
                if (subSectionStyle.display !== 'none') {
                    event.preventDefault(); // Prevent default link behavior (scrolling)
                }

                // Close the currently open sub-section if it's different from the one being clicked
                if (currentlyOpenSubSection && currentlyOpenSubSection !== subSectionContainer) {
                    currentlyOpenSubSection.style.display = 'none';
                    console.log("Closed previously open sub-section:", currentlyOpenSubSection.className);
                }

                // Toggle the visibility of the sub-section container
                if (subSectionContainer.style.display === 'block') {
                    subSectionContainer.style.display = 'none'; // Hide the sub-section
                    currentlyOpenSubSection = null; // Reset the currently open sub-section
                } else {
                    subSectionContainer.style.display = 'block'; // Show the sub-section
                    currentlyOpenSubSection = subSectionContainer; // Update the currently open sub-section
                }
                console.log("Toggled sub-section visibility:", subSectionContainer.style.display);
            } else {
                // If the next sibling is not a sub-section container, allow default link behavior (scroll to section)
                console.log("Default link behavior allowed.");
                return true;
            }
        });
    });
});
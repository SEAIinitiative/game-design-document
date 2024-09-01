
    // Toggle sub-sections visibility on click
    var mainLinks = document.querySelectorAll('.nav-link.main-link');
    var currentlyOpenSubSection = null;

    mainLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var subSectionContainer = this.nextElementSibling;

            if (subSectionContainer && subSectionContainer.classList.contains('sub-section')) {
                const subSectionStyle = window.getComputedStyle(subSectionContainer);
                if (subSectionStyle.display !== 'none') {
                    event.preventDefault();
                }

                if (currentlyOpenSubSection && currentlyOpenSubSection !== subSectionContainer) {
                    currentlyOpenSubSection.style.display = 'none';
                }

                if (subSectionContainer.style.display === 'block') {
                    subSectionContainer.style.display = 'none';
                    currentlyOpenSubSection = null;
                } else {
                    subSectionContainer.style.display = 'block';
                    currentlyOpenSubSection = subSectionContainer;
                }
            }
        });
    });

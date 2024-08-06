
var typedLatin = new Typed(".latin-text", {
    strings: ["Viam supervadet vadens ..."],
    startDelay: 10000,
    typeSpeed: 100,
    //backSpeed: 100,
    //backDelay: 4000,
    //loop: true
})

document.addEventListener("DOMContentLoaded", function() {
    function setupToggle(id, slider) {
        const textElement = document.getElementById(id);
        const slidingWindow = document.getElementById(slider);

        // Toggle the sliding window when clicking the text element
        textElement.addEventListener("click", function(event) {
            event.stopPropagation();  // Prevent the event from propagating to the document
            slidingWindow.classList.toggle("show");
        });

        // Hide the sliding window when clicking anywhere outside of it
        document.addEventListener("click", function(event) {
            if (!slidingWindow.contains(event.target) && !textElement.contains(event.target)) {
                slidingWindow.classList.remove("show");
            }
        });
    }

    // Call the function for both "About" and "Skills" sliding-windowID_Contact
    setupToggle("About", "sliding-windowID_About");
    setupToggle("Skills", "sliding-windowID_Skills");
    setupToggle("Contact", "sliding-windowID_Contact");
})


document.addEventListener("DOMContentLoaded", function() {
    const strings = ["Hello! I am", "Kanstantsin Kazadoi", "...", "iOS Engineer", "SDET", "Techno lover"];
    const container = document.getElementById('typed-container');

    let index = 0;

    function typeNextString() {
        if (index < strings.length) {
            const span = document.createElement('span');
            container.appendChild(span);

            new Typed(span, {
                strings: [strings[index]],
                typeSpeed: 100,
                showCursor: index === strings.length - 1,
                onComplete: function() {
                    if (index < strings.length - 1) {
                        span.classList.add('hidden-cursor');
                    }
                    index++;
                    container.appendChild(document.createElement('br'));
                    typeNextString();
                }
            });
        }
    }

    typeNextString();
});


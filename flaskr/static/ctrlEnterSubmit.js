document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("body");
    var submitButton = document.getElementById("save");

    textarea.addEventListener("keydown", function(event) {
        if (event.metaKey && event.key Code  === 13) { // Check if Ctrl+Enter is pressed
            event.preventDefault(); // Prevent default newline behavior
            submitButton.click(); // Trigger click event of the submit button
        }
    });
});


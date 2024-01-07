document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., sending data to a server)
    alert("Form submitted!");
});
function checkRobot() {
    var checkbox = document.getElementById('robotCheckbox');
    var resultDiv = document.getElementById('result');

    if (checkbox.checked) {
        resultDiv.textContent = "Congratulations! You passed the robot check.";
    } else {
        resultDiv.textContent = "Please check the box to prove you are not a robot.";
    }
}
// You can add JavaScript functionality here if needed
// For example, handling form submissions, dynamic content, etc.

// Here's a simple example that logs a message to the console when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
});

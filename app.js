 function submitFeedback() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const feedbackItem = document.createElement('li');
            feedbackItem.className = 'feedback-item';
            feedbackItem.innerHTML = `<strong>${name}</strong> (${email}): ${message}`;

            document.getElementById('feedback-list').appendChild(feedbackItem);

            // Clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }
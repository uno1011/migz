document.getElementById('greetButton').addEventListener('click', function() {
  const greetings = [
    'Hello!',
    'Hi there!',
    'Greetings!',
    'Welcome!',
    'Hey!'
  ];

  // Randomly select a greeting from the array
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const selectedGreeting = greetings[randomIndex];

  // Display the greeting message
  document.getElementById('greetingText').textContent = selectedGreeting;
  document.getElementById('greetingMessage').style.display = 'block';
});

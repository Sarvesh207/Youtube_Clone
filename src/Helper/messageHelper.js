let nameList = [
  "Hello! How are you?",
  "Have a great day!",
  "Sending positive vibes!",
  "Wishing you a fantastic week!",
  "Just wanted to say hello!",
  "You're amazing!",
  "Follow your dreams!",
  "Sending virtual hugs!",
  "Stay strong!",
  "Believe in yourself!",
  "Joy and laughter await!",
  "You're incredible!",
  "Spread positivity!",
  "Hope today brings smiles!",
  "Take time for self-care!",
  "Keep up the good work!",
  "Sending love and good vibes!",
  "Chase your passions!",
  "Happiness and success!",
  "May dreams come true!",
  "You are loved!",
  "Be true to yourself!",
  "Make a difference!",
  "Positive energy to you!",
  "Have a beautiful day!",
  "Never give up!",
  "You inspire others!",
  "Anything is possible!",
  "Be kind to yourself!",
  "Overcome obstacles!",
  "Peace and tranquility!",
  "Keep on shining!",
  "Stay positive!",
  "Hard work pays off!",
  "Wishing you a great day!",
  "You're capable!",
  "Power of your dreams!",
  "Appreciate your progress!",
  "Love and laughter abound!",
  "You're unique!",
  "Strength and courage!",
  "Happiness and success!",
  "You're not alone!",
  "Keep inspiring!",
  "New opportunities await!",
  "Create your destiny!",
  "Good vibes to you!",
  "You're a champion!",
  "Step out of your comfort zone!",
  "Love and joy to you!",
  "Unlock your potential!",
  "Stay focused!",
  "You're awesome!",
  "Be kind to others!",
  "Believe in yourself!",
  "Dreams come true!",
  "Positive and successful day!",
  "You're incredible!",
  "Better days are coming!",
  "Celebrate victories!",
  "Positive thoughts to you!",
  "Make a difference!",
  "Appreciate the little things!",
  "Create a life you love!",
  "Sunshine and smiles!",
  "On the path to greatness!",
  "Believe in magic!",
  "Happiness and positivity!",
  "You're a ray of sunshine!",
  "Stay positive!",
  "Grateful for what you have!",
  "Achieve extraordinary things!",
  "Success in all endeavors!",
  "Inspiration to others!",
  "Dream big!",
  "Strength during challenges!",
  "Limitless abilities!",
  "Change the world!",
  "Love and laughter!",
  "Stay strong!",
  "Kindness matters!",
  "Be gentle with yourself!",
  "Never give up!",
  "Miracles unfold!",
  "Virtual hug for you!",
  "Making progress!",
  "Beauty of your dreams!",
  "Happy and successful day!",
  "Overcome any challenge!",
  "Keep smiling!",
  "Be kind!",
  "Overcome obstacles!",
  "Peace and tranquility!",
  "Keep on shining!",
  "Stay positive!",
  "Hard work pays off!",
  "Wishing you a great day!",
  "You're capable!",
  "Power of your dreams!",
  "Appreciate your progress!",
  "Love and laughter abound!",
  "You're unique!",
  "Strength and courage!",
  "Happiness and success!",
  "You're not alone!",
  "Keep inspiring!",
  "New opportunities await!",
  "Create your destiny!",
  "Good vibes to you!",
  "You're a champion!",
  "Step out of your comfort zone!",
  "Love and joy to you!",
  "Unlock your potential!",
  "Stay focused!",
  // Add more messages as needed...
];


export function generateMessage() {
  var finalMessage = nameList[Math.floor(Math.random() * nameList.length)];
  return finalMessage;
}
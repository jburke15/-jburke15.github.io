
function calculateCircleArea(radius) {
  return Math.PI * (radius * radius);
}


const radius = 10.75;
const area = calculateCircleArea(radius);


console.log("The area of a circle with radius " + radius + " is " + area.toFixed(2));
//complete this code
class Rectangle(width,height) {
	return=width*height
	
}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50


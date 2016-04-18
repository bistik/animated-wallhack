var v1 = vector.create(10, 5);

console.log(v1.getX());
console.log(v1.getY());

v1.setAngle(Math.PI / 6);
v1.setLength(100);

console.log(v1.getX());
console.log(v1.getY());
console.log(v1.getAngle());
console.log(v1.getLength());

console.log('-------------');

var v1 = vector.create(10, 5),
	v2 = vector.create(3, 4),
	v3 = v1.add(v2),
	v4 = v1.multiply(2);

console.log(v3.getX(), v3.getY());
console.log(v4.getX(), v4.getY(), v4.getLength(), v1.getLength());
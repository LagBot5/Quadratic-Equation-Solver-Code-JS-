function setup() {
let a = Math.round(random(1, 10));
let b = Math.round(random(1, 10));
let c = Math.round(random(1, 10));
print (a + "x^2 + " + b + "x + " + c);

let d = Math.pow(b, 2) - 4 * a * c;
print ("discriminant = " + d);

let discriminant = Math.sqrt(d);
	
if (d <= 0){
print ("not possible");
}
	else {
		print ("possible");
		let r1 = (-b + discriminant)/(2 * a);
		print ("adding: " + r1);
		let r2 = (-b - discriminant)/(2 * a);
		print ("subtracting: " + r2);
}
}

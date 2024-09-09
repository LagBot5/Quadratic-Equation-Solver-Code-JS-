function setup() {
let a = Math.round(random(-100,100));
let b = Math.round(random(-100, 100));
let c = Math.round(random(-100, 100));
print (a + "x^2 + " + b + "x + " + c);

print ("Quadratic Formula")
let d = Math.pow(b, 2) - 4 * a * c;
print ("discriminant = " + d);

let discriminant = Math.sqrt(d);
	
if (d <= 0){
print ("not possible");
}
	else {
		let r1 = (-b + discriminant)/(2 * a);
		print ("adding: " + r1.toFixed(2));
		let r2 = (-b - discriminant)/(2 * a);
		print ("subtracting: " + r2.toFixed(2));
			if (r1 && r2 > 0){
				print ("two possible roots")
			}
			else if (r1 | r2 <= 0) {
				print ("one possible root")
			}
		if (r1 > r2) {
			let distance = r1 - r2
		print ("range is " + distance.toFixed(2))
			}
		else if (r2 > r1) {
			let distance= r2 - r1
		print ("range is " + distance.toFixed(2))
		}
}
print ("⠀", "Po Shen Loh")
let sum = -b
let product = c
if (a > 0) {
	let average = -b/a
}

//  dates are created using the Date() object.
// you dont HAVE to create a date object, but without, it will not have methods like getTime

let now = new Date() // the "new" keyword creates a new object
now
console.log(now.getTime()) // getTime only works because we have an object
// all methods for the date object start with get
now.setHours(4)
now
//  dates are created using the Date() object.
// you dont HAVE to create a date object, but without, it will not have methods like getTime

const now = new Date() // the "new" keyword creates a new object
let object = now
do {
    object = Object.getPrototypeOf(object)
    console.log(object)
} while (object)



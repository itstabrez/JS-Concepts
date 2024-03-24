const course = {
    name: "Advance JS",
    price: 198,
    courseInstructor: "Students"
}

console.log(course.courseInstructor);   //This is very big name to access objects let's simplify this 

const {courseInstructor: teacher} = course;

console.log(teacher);     //Simplified way of accessing objects by destructuring

// API
// JSON
// JSON FORMAT IS AS BELOW 

// {
//     "name": "Tabrez",
//     "college": "MACET",
//     "rollNo": 106
// }

// [
//     {},
//     {},
//     {}
// ]
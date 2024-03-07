const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName)
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(student1, student2){
    if(student1.GPA == student2.GPA) return  "Both students have the same GPA"
    let smartStudent = [student1, student2].reduce((acc, el)=>{
      if(acc.GPA < el.GPA) acc = el;
      return acc
    })
    return `${smartStudent.firstName} ${smartStudent.lastName} has the higher GPA.`
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}

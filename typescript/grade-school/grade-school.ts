interface Student {
  [key:string]: number;
}

interface Grades {
  [key:number]: string[];
}


export class GradeSchool {
  students: Student;

  constructor() {
    this.students = {};
  }

  public getGrade(g: number) {
    return Object.keys(this.students).filter(item => this.students[item] === g).sort();
  }

  roster() {
    const result: Grades = {};
    Object.keys(this.students).forEach(i => result[this.students[i]] = []);
    Object.keys(result).forEach(i => result[Number(i)] = this.getGrade(Number(i)));
    return result;
  }

  add(student: string, grade: number) {
    this.students[student] = grade;
  }

  grade(g: number) {
    return this.getGrade(g);
  }
}

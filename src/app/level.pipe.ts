import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.model';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(students: any[], level: string): any {

    let output: any[]=[];
    if (level!=="all-levels"){
      for(let i=0; i < students.length; i++) {
        if (level==='white' && students[i].level==='white'){
          output.push(students[i]);
        } else if (level==='yellow' && students[i].level==='yellow'){
          output.push(students[i]);
        } else if (level==='orange' && students[i].level==='orange'){
          output.push(students[i]);
        } else if (level==='red' && students[i].level==='red'){
          output.push(students[i]);
        } else if (level==='blue' && students[i].level==='blue'){
          output.push(students[i]);
        } else if (level==='green' && students[i].level==='green'){
          output.push(students[i]);
        } else if (level==='purple' && students[i].level==='purple'){
          output.push(students[i]);
        } else if (level==='black' && students[i].level==='black'){
          output.push(students[i]);
        }
        console.log("students[i] " + students[i].name);
      }
      return output;
    } else {
      return students;
    }
  }

}

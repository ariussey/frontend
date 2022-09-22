import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder ) { 

    this.form = this.fb.group(
      {
        id_horario:  ['', Validators.required],
        enlace_zoom: ['', Validators.required],
        id_zoom: ['', Validators.required],
        clave_zoom: ['', Validators.required]
      }
    );

  }

  ngOnInit(): void {
  }

  addCourse(){
    console.log(this.form.value.id_horario);
    const course: Course = {
      id_horario : this.form.value.id_horario,
      enlace_zoom: this.form.value.enlace_zoom,
      id_zoom: this.form.value.id_zoom,
      clave_zoom: this.form.value.clave_zoom
    }

    console.log(course);
  }

}

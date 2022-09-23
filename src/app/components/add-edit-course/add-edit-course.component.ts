import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';
  operacion_boton: string = 'Agregar';

  constructor( private fb: FormBuilder,
    private _courseService: CourseService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute ) { 

    this.form = this.fb.group(
      {
        id_horario:  ['', Validators.required],
        enlace_zoom: ['', Validators.required],
        id_zoom: ['', Validators.required],
        clave_zoom: ['', Validators.required]
      });

      this.id = Number(aRoute.snapshot.paramMap.get('id'));
      console.log(this.id);

  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'Editar';
      this.operacion_boton = 'Actualizar';
      this.getCourse(this.id);
    }

  }

  getCourse(id: number){
    this.loading = true;
    this._courseService.getCourse(id).subscribe((data: Course) => {
      this.loading = false;
      this.form.setValue({
        id_horario: data.id_horario,
        enlace_zoom: data.enlace_zoom,
        id_zoom: data.id_zoom,
        clave_zoom: data.clave_zoom,
      })
      console.log(data);
    })
  }

  addCourse(){
    // console.log(this.form.value.id_horario);
    // console.log(this.form.get('id_horario')?.value);
    const course: Course = {
      id_horario : this.form.value.id_horario,
      enlace_zoom: this.form.value.enlace_zoom,
      id_zoom: this.form.value.id_zoom,
      clave_zoom: this.form.value.clave_zoom
    }
    this.loading = true;
    if(this.id !== 0 ){
      //Editar
      course.id = this.id;
      this._courseService.updateCourse(this.id, course).subscribe(() => {
        this.loading = false;
        this.toastr.info('El curso fue actualizado correctamente', 'Curso actualizado')
        this.router.navigate(['/'])
      })
    } else {
      // Agregar
      this._courseService.saveCourse(course).subscribe(() => {
        this.loading = false;
        this.toastr.success('El curso fue agregado correctamente', 'Curso agregado')
        this.router.navigate(['/'])
      // console.log('producto agregado');
    })
    }

  }

}

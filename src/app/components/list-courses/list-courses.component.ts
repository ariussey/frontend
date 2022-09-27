import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  displayedColumns: string[] = ['id_horario', 'enlace_zoom', 'id_zoom', 'clave_zoom', 'acciones'];
  

  listCourses: Course[]=[]
  datos: any;
  loading: boolean = false;

  constructor(private _courseService: CourseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListCourses();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.listCourses.filter = filterValue.trim().toLowerCase();
  }
  getListCourses(){
    
    this.loading = true;
    this._courseService.getListCourses().subscribe((data: any) => {

      this.listCourses = data.listCourses;
      // this.dataSource = data.listCourses;
      this.loading = false;
      // console.log(data);
    })
  }

  deleteCourse(id: number){
      this.loading = true;
      this._courseService.deleteCourse(id).subscribe(() => {
      this.getListCourses();
      this.toastr.warning('Curso eliminado','El curso se eliminó con exito');
    })
    // console.log(id);
  }
}

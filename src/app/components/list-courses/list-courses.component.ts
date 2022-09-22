import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  listCourses: Course[] = [
    { id: 1, id_horario: 1212, enlace_zoom: 'https://autonomadeica-edu-pe.zoom.us/j/88270234602?pwd=ajhsNTNTTGlTVEZCenBidjNFdlBjZz09', id_zoom: '882 7023 4602', clave_zoom: 'autonoma'},
    { id: 2, id_horario: 1213, enlace_zoom: 'https://autonomadeica-edu-pe.zoom.us/j/88270234602?pwd=ajhsNTNTTGlTVEZCenBidjNFdlBjZz09', id_zoom: '882 7023 4602', clave_zoom: 'autonoma'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

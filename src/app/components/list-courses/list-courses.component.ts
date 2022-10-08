import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})


export class ListCoursesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id_horario', 'enlace_zoom', 'id_zoom', 'acciones'];
  
  listCourses: Course[]=[]
  dataSource!: MatTableDataSource<any>;
  loading: boolean = false;

  constructor(private _courseService: CourseService, private toastr: ToastrService) { }
  
  ngAfterViewInit() {
    setTimeout(() => {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      if(this.dataSource.data.length>0){
        this.paginator._intl.itemsPerPageLabel='Items por página';
      }
    }, 500);
  }
  ngOnInit(): void {
    this.getListCourses();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListCourses(){
    
    this.loading = true;

    this._courseService.getListCourses().subscribe({
      next: (data: any) => {
        this.listCourses = data.listCourses;
      this.dataSource = new MatTableDataSource(this.listCourses);
      
      this.loading = false;
      },
      error: (e) => {
        this.loading = false;
        alert('ERROR: No fue posible conectarse al servidor')
        console.error(e);
      },
      complete: () => console.info('complete')
    })
    // this._courseService.getListCourses().subscribe((data: any) => {
       
    //   this.listCourses = data.listCourses;
    //   this.dataSource = new MatTableDataSource(this.listCourses);
      
    //   this.loading = false;
      
    // })
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

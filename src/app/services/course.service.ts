import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/courses/'
  }

  getListCourses(): Observable <Course[]>{
    return this.http.get<Course[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteCourse(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id)
  }

  saveCourse(course: Course): Observable<void> {
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, course);
  }

  getCourse(id: number): Observable<Course>{
    return this.http.get<Course>(this.myAppUrl + this.myApiUrl + id)
  }

  updateCourse(id: number, course: Course): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, course)
  }

}

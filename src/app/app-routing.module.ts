import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';

const routes: Routes = [
  { path: '', component: ListCoursesComponent },
  { path: 'add', component: AddEditCourseComponent},
  { path: 'edit/:id', component: AddEditCourseComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

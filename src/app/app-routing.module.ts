import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ContadorComponent } from './components/Udemy/contador/contador/contador.component';

const routes: Routes = [
  { path: '', component: ContadorComponent },
  { path: 'reuniones', component: ListCoursesComponent },
  { path: 'reuniones/add', component: AddEditCourseComponent},
  { path: 'reuniones/edit/:id', component: AddEditCourseComponent },
  { path: 'usuarios', component: ListUsersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

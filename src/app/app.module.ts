import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Módulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component'
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { BtnAgregarComponent } from './components/btn-agregar/btn-agregar.component';
import { FilterComponent } from './components/filter/filter.component';

/* Curso */
import { HeroesModule } from './components/Udemy/heroes/heroes.module';
import { ContadorModule } from './components/Udemy/contador/contador.module';
import { DbzModule } from './Udemy/dbz/dbz.module';
import { ReporteModule } from './Udemy/reporte/reporte.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCoursesComponent,
    AddEditCourseComponent,
    ProgressBarComponent,
    FooterComponent,
    ListUsersComponent,
    AddEditUserComponent,
    BtnAgregarComponent,
    FilterComponent,
    /* Curso */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    /* Curso */
    HeroesModule,
    ContadorModule,
    DbzModule,
    ReporteModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

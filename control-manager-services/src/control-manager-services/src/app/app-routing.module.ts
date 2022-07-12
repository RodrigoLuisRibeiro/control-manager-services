import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { HomeComponent } from './views/home/home.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { FormComponent } from './components/form/form.component';
import { MyThirdComponentComponent } from './components/my-third-component/my-third-component.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';
import { JobsDeleteComponent } from './components/jobs/jobs-delete/jobs-delete.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/create', component: JobsCreateComponent},
  {path: 'jobs/update/:id', component: JobsUpdateComponent},
  {path: 'jobs/delete/:id', component: JobsDeleteComponent},
 //{path: '', component: MyFirstComponentComponent},
 // {path: 'my-second-component', component: MySecondComponentComponent},
 // {path: 'my-third-component', component: MyThirdComponentComponent},
 // {path: 'form', component: FormComponent},
 // {path: 'app-servicos', component: ServicosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { MyThirdComponentComponent } from './components/my-third-component/my-third-component.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MyFirstComponentComponent},
  {path: 'my-second-component', component: MySecondComponentComponent},
  {path: 'my-third-component', component: MyThirdComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

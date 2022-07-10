import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { MyThirdComponentComponent } from './components/my-third-component/my-third-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChildComponent } from './components/child/child.component';
import { FormComponent } from './components/form/form.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { JobsComponent } from './views/jobs/jobs.component';
import { JobsCreateComponent } from './components/jobs/jobs-create/jobs-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from'@angular/material/input';
import { JobsReadComponent } from './components/jobs/jobs-read/jobs-read.component';
import { MatTableModule } from '@angular/material/table'
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { JobsUpdateComponent } from './components/jobs/jobs-update/jobs-update.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent,
    MyThirdComponentComponent,
    FooterComponent,
    HeaderComponent,
    ParentDataComponent,
    EmitterComponent,
    ChildComponent,
    FormComponent,
    ServicosComponent,
    NavComponent,
    HomeComponent,
    JobsComponent,
    JobsCreateComponent,
    JobsReadComponent,
    JobsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

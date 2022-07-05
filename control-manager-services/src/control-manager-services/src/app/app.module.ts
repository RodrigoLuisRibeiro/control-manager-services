import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

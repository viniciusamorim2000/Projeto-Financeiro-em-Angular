import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, } from '@angular/core';


import { AppComponent } from './app.component';

import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    CoreModule,

    BrowserAnimationsModule,
    BrowserModule,

    LancamentosModule,
    PessoasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';



import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
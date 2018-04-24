import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { ToDoComponent} from './todolist/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

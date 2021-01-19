import { Component, OnInit } from '@angular/core';
import { SessionModel} from './../../models/SessionModel';
import {DetailComponent} from '../detail/detail.component';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
     todos: SessionModel [] = [];
     sessionName : string = '';
    trainer : string = '';
    date : Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        name : 'java' ,
        trainer : 'tri1',
       date: new Date(),
      },
      {
        name : 'Python',
        trainer : 'tri2',
        date: new Date(),

      }

    ];
  }
  deleteSession (id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  editSession (id: number){
  this.todos.splice(id, 0, {
    name : this.sessionName,
    trainer : this.trainer,
    date : this.date,

  });

  }
  addSession () {

    this.todos.push({
      name : this.sessionName,
      trainer:this.trainer,
date: this.date,
    });
    this.sessionName = '';
    this.trainer = '';

  }

}

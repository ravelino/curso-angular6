import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface People {
  name: string;
  photo: string;
  description: string;
  status: boolean;
}

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input () people : People;

  @Output () btnViewMore : EventEmitter<People> = new EventEmitter();

  public sendPeople() {
    this.btnViewMore.emit(this.people);
  }

  constructor() { }

  ngOnInit() {
  }

}

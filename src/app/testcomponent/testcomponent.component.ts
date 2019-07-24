import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  public color="blue";
  public colorsnew=["red","blue","green","cyan"];

  public trainers=[
{
  "Id":1,
  "Name":"Tanmaya A",
  "Skill":"Java"
},
{
  "Id":2,
  "Name":"Ajay P",
  "Skill":"Java Spring"
},
{
  "Id":3,
  "Name":"Yogendra",
  "Skill":"Spring boot"
}

  ]
  @Input('parentData') public namedis;

  @Output() public childEvent=new EventEmitter();
  constructor() { }
  public date=new Date();
  ngOnInit() {
  }
  myEvent()
  {
    this.childEvent.emit('Hello parent component');
  }

}

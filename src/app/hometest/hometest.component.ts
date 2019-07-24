import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hometest',
  templateUrl: './hometest.component.html',
  styleUrls: ['./hometest.component.css']
})
export class HometestComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
  showNewComponent()
  {
    this.routes.navigateByUrl("newhome");
  }
}

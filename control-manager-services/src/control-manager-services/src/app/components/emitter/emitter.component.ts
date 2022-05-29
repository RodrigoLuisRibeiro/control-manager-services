import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myCount: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChild() {
    this.myCount = Math.floor(Math.random() * 50);
  }

}

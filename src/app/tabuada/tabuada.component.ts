import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
      document.write("5 x "+i+" = " + (5*i) + "<br />")
    }
  }

}
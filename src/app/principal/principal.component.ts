import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Input()
  items: [1, 2, 3];
  
  constructor() { }

  ngOnInit() {
  }

}

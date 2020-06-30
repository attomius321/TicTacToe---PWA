import {Component, Input, OnInit} from '@angular/core';

//UI Component - Dumb Component
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{

  @Input() value: 'X' | 'O';
  @Input() win: boolean;

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fishka',
  templateUrl: './fishka.component.html',
  styleUrls: ['./fishka.component.scss']
})
export class FishkaComponent implements OnInit {
  @Input() value: number;
  @Input() id: number;
  @Output() check = new EventEmitter();
  condition: boolean;

  Check($event) {
    this.check.emit($event);
  }

  constructor() { }

  ngOnInit() {
    this.condition = (16 !== this.value);
  }
}

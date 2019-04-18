import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fishka',
  templateUrl: './fishka.component.html',
  styleUrls: ['./fishka.component.scss']
})
export class FishkaComponent implements OnInit {
  @Input() value: number;
  @Input() id: number;
  @Input() emptyItemPos: number;
  @Input() arrData: number[];
  @Input() move;
  @Output() check = new EventEmitter();
  condition: boolean;

  Check($event) {
    this.check.emit($event);
  }

  constructor() { }

  ngOnInit() {
    this.condition = (16 !== this.value);
  }

  toggle($event) {
    const id = $event.target.id;
    const elPos = this.arrData.indexOf(+id);
    const ch = this.emptyItemPos - elPos;

    switch (ch) {
      case this.move.down:
      case this.move.up:
      case this.move.right:
      case this.move.left: {

        document.getElementById(id).classList.add('fishka-over');
        break;
      }
      default: { break; }
    }
  }

  untoggle($event) {
    const id = $event.target.id;
    const elPos = this.arrData.indexOf(+id);
    const ch = this.emptyItemPos - elPos;

    switch (ch) {
      case this.move.down:
      case this.move.up:
      case this.move.right:
      case this.move.left: {

        document.getElementById(id).classList.remove('fishka-over');
        break;
      }
      default: { break; }
    }

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  value: number;
  position: number;
  emptyItemPos: number;
  emptyItem = 16;
  move = {
    up: -4,
    down: 4,
    left: -1,
    right: 1
  };
  constructor() { }

  ngOnInit() {
    this.sort();
    this.emptyItemPos = this.arrData.indexOf(16);
  }

  sort() {
    this.arrData.sort((a, b) => Math.random() - 0.5);
    this.emptyItemPos = this.arrData.indexOf(16);
  }

  check($event) {
    const id = $event.target.id;
    const elPos = this.arrData.indexOf(+id);
    const ch = this.emptyItemPos - elPos;
    switch (ch) {
      case this.move.down:
      case this.move.up:
      case this.move.right:
      case this.move.left: {
        const temp = this.arrData[elPos];
        this.arrData[elPos] = this.emptyItem;
        this.arrData[this.emptyItemPos] = temp;
        this.emptyItemPos = elPos;
        break;
      }
      default: { break; }
    }
  }

}

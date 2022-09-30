import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements AfterViewInit {
  @Input() idx: string = '';
  @Input() windowNumber: number = 0;
  @Input() header: boolean = true;
  @Input() headerText: string = '';
  @Input() childClass: string = '';
  @Input() headerClass: string = '';

  getWindowPositionLeft(): string {
    return this.windowNumber * 255 + 'px';
  }
  ngAfterViewInit() {
    this.registerDragElement();
  }

  private registerDragElement() {
    const elmnt = document.getElementById(this.idx);

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e: any) => {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e: any) => {
      if (elmnt) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }
    };

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
    if (elmnt) {
      const dragHandle = document.getElementById(elmnt.id + 'header')
      if (dragHandle) {
        /* if present, the header is where you move the DIV from:*/
        dragHandle.onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    }
  }

  public allowDrop(ev: any): void {
    ev.preventDefault();
  }

  public drag(ev: any): void {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  public drop(ev: any): void {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}


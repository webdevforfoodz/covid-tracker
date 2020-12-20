import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})

export class RadiobuttonsComponent implements OnInit {

  myOption: string= 'confirmed';

  constructor() { }

  ngOnInit(): void {
  }

  test(input: HTMLInputElement) {
    // console.log(input.value);
    this.newOption.emit(input.value)
  }

  @Output() newOption = new EventEmitter<any>();

}

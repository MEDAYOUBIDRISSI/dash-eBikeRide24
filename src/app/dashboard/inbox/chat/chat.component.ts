import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  element:any

  ngOnInit(): void {
    this.element = document.getElementById("mydiv");

   this.element.scrollTop = this.element.scrollHeight ;
  }

}

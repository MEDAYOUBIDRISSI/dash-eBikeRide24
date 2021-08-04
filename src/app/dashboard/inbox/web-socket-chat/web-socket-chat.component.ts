import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-web-socket-chat',
  templateUrl: './web-socket-chat.component.html',
  styleUrls: ['./web-socket-chat.component.css']
})
export class WebSocketChatComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  

  sendMessage(sendForm: NgForm) {
    console.log(sendForm)
    // const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    // this.webSocketService.sendMessage(chatMessageDto);
    //sendForm.controls.message.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  _id: number=-1;
  urls:string="";
  public User: User={nom:'',prenom:''}
  
  constructor(private ClientService: ClientServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
  
      this.ClientService.getClientById(this._id).subscribe(data => {
        this.User = data.User;
        console.log(this.User)
      }, error => console.log(error));
  }

}

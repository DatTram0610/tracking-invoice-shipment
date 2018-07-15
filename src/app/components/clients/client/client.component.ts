import { Component, OnInit, Input } from '@angular/core';

// Models
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
@Input() clientDetail: Client;
  isShowingContent: boolean;
  constructor() { }

  ngOnInit() {
    console.log('Client Detail:', this.clientDetail);
    this.isShowingContent = false;
  }

  showContent(): void {
    this.isShowingContent = !this.isShowingContent;
  }

}

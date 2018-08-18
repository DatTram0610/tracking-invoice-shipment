import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.less']
})
export class SidenavListComponent implements OnInit {
  @Output()
  closeSideNav = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit() {}

  onClose(path: string): void {
    this.closeSideNav.emit();
    this.router.navigate([`${path}`]);
  }
}

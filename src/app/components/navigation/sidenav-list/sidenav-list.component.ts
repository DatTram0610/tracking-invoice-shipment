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
  expandable: boolean;
  currentSelection: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.expandable = false;
  }

  onClose(path: string): void {
    this.closeSideNav.emit();
    this.router.navigate([`${path}`]);
  }

  navListSectionClicked(selection: string): void {
    console.log('David Tram');
    this.expandable = !this.expandable;
    this.currentSelection = selection;
  }
}

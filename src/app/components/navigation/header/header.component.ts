import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output()
  sideNavToggle = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

  onClose(path: string): void {
    this.router.navigate([`${path}`]);
  }
}

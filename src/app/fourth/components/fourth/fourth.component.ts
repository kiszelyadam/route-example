import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  navigate(route: string) {
    this.router.navigate([route], {relativeTo: this.activatedRoute})
  }
}

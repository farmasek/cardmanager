import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-managementholder',
  templateUrl: './managementholder.component.html',
  styleUrls: ['./managementholder.component.scss']
})
export class ManagementholderComponent implements OnInit {

  constructor(private router: Router,) {

  }

  ngOnInit() {
  }

  selectChange(event) {
    console.log(event.index);
    switch (event.index) {
      case 0: {
        this.router.navigate(['/management/management/all-cards']);
        break;
      }
      case 1: {
        this.router.navigate(['/management/management/add-card']);
        break;
      }
      case 2: {
        this.router.navigate(['/management/management/all-reports']);
        break;
      }
      case 3: {
        this.router.navigate(['/management/management/add-report']);
        break;
      }
      default: {
        this.router.navigate(['/management/management/all-cards']);
        break;
      }
    }
  }

}

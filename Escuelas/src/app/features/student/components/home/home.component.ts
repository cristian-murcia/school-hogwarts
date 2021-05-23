import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionTab } from '../../enum/optionTab.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tabs: Array<any> = [
    {
      title: 'Estudiantes',
      routerLink: '/student/list',
      tab: OptionTab.student,
    },
    {
      title: 'Solicitudes',
      routerLink: '/student/request',
      tab: OptionTab.request
    }
  ]
  public OptionTab = OptionTab;
  public tabSelect: OptionTab = OptionTab.student;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    if(this._router.url === '/student/request'){
      this.tabSelect = OptionTab.request
    }
  }


  /**
   * Select a tab for show
   * @param option
   */
  public selectTab(option: OptionTab){
    this.tabSelect = option;
  }


}

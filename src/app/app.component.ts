import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user_input: string = "eriickking";
  public userData: any = null;

  constructor(
    private dataService: DataService
  ) {
    this.getUser();
  }

  getUser() {
    this.dataService.GET_REPOS(this.user_input).subscribe(data => {
      this.userData = data;
      console.log(data);
    })
  }

  clear() {
    this.userData = null;
    this.user_input = "";
    
  }

  onNavigate() {
    window.open(this.userData.html_url, "_blank");
  }

}

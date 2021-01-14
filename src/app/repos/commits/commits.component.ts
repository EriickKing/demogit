import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnChanges {

  @Input() url_commits: string;
  public dataCommit: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnChanges(): void {
    if(this.url_commits) {
      this.dataService.ANY_HTTP(this.url_commits+ "/commits").subscribe(data => {
        this.dataCommit = data;
      })
    } else {
      this.dataCommit = null;
    }
  }


  onNavigate(url) {
    window.open(url, "_blank");
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnChanges {

  @Input() url_repos: string;
  public dataRepos: any;
  public commitUrl: string;
  public nameRepo: string;

  constructor(
    private dataService: DataService
  ) { }

  comp: Observable<any>;

  ngOnChanges(): void {
    if (this.url_repos) {
      this.dataService.ANY_HTTP(this.url_repos).subscribe(data => {
        this.dataRepos = data;
      })
    } else {
      this.dataRepos = null;
      this.commitUrl = null;
      this.nameRepo = "";
    }
  }

  getCommit(url, name) {
    this.commitUrl = url;
    this.nameRepo = name;
  }


}

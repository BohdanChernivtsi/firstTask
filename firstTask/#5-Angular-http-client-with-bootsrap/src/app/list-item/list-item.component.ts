import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  listItems$: Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getListItems().subscribe(
      data => this.listItems$ = data 
    );
  }

}

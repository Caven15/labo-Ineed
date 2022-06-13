import { Component, Input, OnInit } from '@angular/core';
import { entrepreneur } from 'src/app/models/entrepreneur/entrepreneur.model';

@Component({
  selector: 'app-entrepreneur-item',
  templateUrl: './entrepreneur-item.component.html',
  styleUrls: ['./entrepreneur-item.component.scss']
})
export class EntrepreneurItemComponent implements OnInit {

  @Input() entrepreneurItem : entrepreneur
  constructor() { }

  ngOnInit(): void {
  }

  chargerDetailEntrepreneur(id): void {

  }
}

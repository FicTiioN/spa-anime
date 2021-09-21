import { Component, Input, OnInit } from '@angular/core';
import { IAnime } from 'src/app/interface/ianime';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent implements OnInit {

  @Input() 
  public anime: IAnime;

  constructor() { }

  ngOnInit(): void {
  }

}


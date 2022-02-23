import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-carousel',
  templateUrl: './coffee-carousel.component.html',
  styleUrls: ['./coffee-carousel.component.css']
})
export class CoffeeCarouselComponent implements OnInit {
  imgUrl = ["https://resources.teletextholidays.co.uk/drupal/images/homepage/2.jpg", "https://resources.teletextholidays.co.uk/drupal/images/homepage/1.jpg", "https://resources.teletextholidays.co.uk/drupal/images/homepage/6.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}

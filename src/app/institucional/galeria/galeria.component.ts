import { Component } from '@angular/core';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']

})
export class GaleriaComponent {

  slides = [
    {img: "/assets/brutos10.jpg"},
    {img: "/assets/brutos03.jpg"},
    {img: "/assets/brutos04.jpg"},
    {img: "/assets/brutos05.jpg"},
    {img: "/assets/brutos06.jpg"},
    {img: "/assets/brutos07.jpg"},
    {img: "/assets/brutos08.jpg"},
    {img: "/assets/brutos09.jpg"},
    {img: "/assets/brutos11.jpg"},
    {img: "/assets/brutos12.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void { }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public carrosel = [
    {
      title: 'Escuela 1',
      text: 'Buen desempeño',
      img: '../../../assets/image/carrosul_1.jpg'
    },
    {
      title: 'Escuela 2',
      text: 'Altos trucos',
      img: '../../../assets/image/carrosul_2.jpg'
    },
    {
      title: 'Escuela 3',
      text: 'Mejores maestros',
      img: '../../../assets/image/carrosul_3.jpg'
    },
    {
      title: 'Escuela 4',
      text: 'Esta ni se que es, solo tengo sueño :v',
      img: '../../../assets/image/carrosul_4.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

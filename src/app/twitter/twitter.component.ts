import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

    public items:Array<any>;
    public carouselOne: NgxCarousel;

    constructor(){ 
        this.items=[
            {
                user:"@JuanVivas",
                comment:"Gran aplicacion, las tarifas son bastante accesibles"
            },
            {
                user:"@RhondaR",
                comment:"Just in time, good price and easy to use!!"
            },
            {
                user:"@JakeTheDog",
                comment:"Rapida y efectiva, como tiene que ser..."
            },
            {
                user:"@EmilyArt",
                comment:"Buen servicio, lo recomiendo 100%"
            },
            {
                user:"@DickGrayson",
                comment:"Really useful, helps a lot if your from abroad"
            }
        ];
    }
    ngOnInit() {
        this.carouselOne = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 400,
        interval: 4000,
        point: {
            visible: true
        },
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
        }
    }
  
   public myfunc(event: Event) {}

}

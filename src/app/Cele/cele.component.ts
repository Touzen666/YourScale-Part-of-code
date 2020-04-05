import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-cele",
  templateUrl: "./cele.component.html",
  styleUrls: ["./cele.component.scss",
    "./cele.component.css"
  ]
})

export class CeleComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // var slideIndex = 1;
    // showSlides(slideIndex);


    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }


    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) { slideIndex = 1 }
    //   if (n < 1) { slideIndex = slides.length }
    //   for (i = 0; i < slides.length; i++) {


    //     (slides[i] as HTMLElement).style.display = "none";

    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   console.log(slides[i]);
    //   (slides[slideIndex - 1] as HTMLElement).style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }

  }
}

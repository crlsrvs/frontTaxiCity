import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  img = '././assets/img/3.jpg';
  constructor(public DomSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}

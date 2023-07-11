import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  ngOnInit(){
    window.scrollTo(0, 0)
  }

  scrollToInicio() {
    window.scrollTo({
      top: 920,
      behavior: "smooth",
    })
  }
}

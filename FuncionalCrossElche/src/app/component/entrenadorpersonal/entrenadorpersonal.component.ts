import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrenadorpersonal',
  templateUrl: './entrenadorpersonal.component.html',
  styleUrls: ['./entrenadorpersonal.component.css']
})
export class EntrenadorpersonalComponent {
  ngOnInit(){
    window.scrollTo(0, 0)
  }




  scrollToInicio() {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    })
  }

}

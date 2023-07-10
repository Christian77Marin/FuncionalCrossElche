import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrenadorpersonal',
  templateUrl: './entrenadorpersonal.component.html',
  styleUrls: ['./entrenadorpersonal.component.css']
})
export class EntrenadorpersonalComponent {

  public showContainerIvan: boolean = false;

  
  ngOnInit(){
    window.scrollTo(0, 0)
  }

  @HostListener('window:scroll')
  onScroll() {
    const showContainerIvanPosition = 950;


    const currentPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

   

    if (comprobateScroll(currentPosition, showContainerIvanPosition)) {
      this.showContainerIvan = true;
    }

   



    function comprobateScroll(currentPosition: any, desiredPosition: any): boolean {
      if (currentPosition >= desiredPosition) {
        return true;
      }

      return false;
    }

  }





  scrollToInicio() {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    })
  }

}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public showTextInicial: boolean = false;
  public showfirstPhoto: boolean = false;
  public showSecondPhoto: boolean = false;
  public showThirdPhoto: boolean = false;
  public showFourthPhoto: boolean = false;



  screenWidth: number = 0;
  screenHeight: number = 0;



  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }


  @HostListener('window:scroll')
  onScroll() {
    const desiredPosition = 20; // Posición en la que debería aparecer el texto
    const showfirstPhotoPosition = 950;
    const showSecondPhotoPosition = 1150;
    const showThirdPhotoPosition = 1350;
    const showFourthPhotoPosition = 1550;

    const currentPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (currentPosition >= desiredPosition) {
      this.showTextInicial = true;
    }

    if (comprobateScroll(currentPosition, showfirstPhotoPosition)) {
      this.showfirstPhoto = true;
    }

    if (comprobateScroll(currentPosition, showSecondPhotoPosition)) {
      this.showSecondPhoto = true;
    }

    if (comprobateScroll(currentPosition, showThirdPhotoPosition)) {
      this.showThirdPhoto = true;
    }

    if (comprobateScroll(currentPosition, showFourthPhotoPosition)) {
      this.showFourthPhoto = true;
    }



    function comprobateScroll(currentPosition: any, desiredPosition: any): boolean {
      if (currentPosition >= desiredPosition) {
        return true;
      }

      return false;
    }

  }



  ngOnInit() {
    window.scrollTo(0, 0)
    this.showTextInicial = true;
    if (window.innerWidth < 930) {
      this.showfirstPhoto = true;
      this.showSecondPhoto = true;
      this.showThirdPhoto = true;
      this.showFourthPhoto = true;
      console.log("entro");
      
    }
    this.getScreenSize();
  }

  scrollToInicio() {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    })
  }






}

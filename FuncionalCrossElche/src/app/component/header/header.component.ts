import { Component, HostListener,OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  headerBackgroundColor: string = 'rgba(0, 0, 0, 0)'; // Opacidad inicial


  screenWidth: number = 0;
  screenHeight: number = 0;
  isChecked: boolean = false;

  desmarcarCheckbox() {
    this.isChecked = false;
  }
  

  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight; 
  }


  
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  

  if(window.innerWidth > 700){
  // Lógica para ajustar la opacidad del fondo del encabezado
  const scrollOffset = window.scrollY|| document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  // Calcula la nueva opacidad en función del desplazamiento
  const maxScroll = 300; // Valor máximo de desplazamiento antes de que la opacidad sea 1
  const opacity = Math.min(1, scrollOffset / maxScroll);

  // Establece la opacidad del fondo del encabezado
  this.headerBackgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }else{
    this.headerBackgroundColor = `rgba(0, 0, 0, 0)`;
  }
}




ngOnInit(){

}
}


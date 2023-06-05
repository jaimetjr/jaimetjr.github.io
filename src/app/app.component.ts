import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  frases: string[] = [
    'Venha para o cinema',
    'Para sempre nosso lar',
    'O nossos dogs são os melhores',
    'Nosso hambúrguer é maravilhoso',
    'Apartamento não tem chopp',
    'Me caiu uma visita à família',
    'Ver o por do sol aquece a alma',
    'Agora é hora de amar'
  ]

  frase: string = '';

  today = new Date();
  pipe = new DatePipe('en-US');

  ngOnInit(): void {
    let date = this.pipe.transform(this.today, 'dd/MM/YYYY');
    console.log(date);

    switch (date) {
      case '05/06/2023':
        this.frase = this.frases[0];
        break;
      case '06/06/2023':
        this.frase = this.frases[1];
        break;
      case '07/06/2023':
        this.frase = this.frases[2];
        break;
      case '08/06/2023':
        this.frase = this.frases[3];
        break;
      case '09/06/2023':
        this.frase = this.frases[4];
        break;
      case '10/06/2023':
        this.frase = this.frases[5];
        break;
      case '11/06/2023':
        this.frase = this.frases[6];
        break;
      case '12/06/2023':
        this.frase = this.frases[7];
        break;
    }
  }
}

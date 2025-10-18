import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cidade-segura');

  constructor(private router: Router) { }
  
  verHome() {
    this.router.navigate(['/home']);
  }

  verDetalhesAlerta() {
    this.router.navigate(['/alerta']);
  }

  verContatosEmergencia() {
    this.router.navigate(['/emergencia']);
  }

  verFaq() {
    this.router.navigate(['/faq']);
  }

  verConscientizacao() {
    this.router.navigate(['/conscientizacao']);
  }
}

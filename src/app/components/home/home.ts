import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

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

import { Component } from '@angular/core';

@Component({
  selector: 'app-alerta',
  imports: [],
  templateUrl: './alerta.html',
  styleUrl: './alerta.css'
})
export class AlertaComponent {
  alerta = {
    nivelRisco: 'Alto',
    bairrosAfetados: ['Centro', 'Jardim das Flores', 'Vila Nova'],
    previsaoChuva: '80% nas próximas 3 horas',
    ultimaAtualizacao: '18/10/2025 - 11:00',
  };
}

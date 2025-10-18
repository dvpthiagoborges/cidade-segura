import { Component } from '@angular/core';

interface ContatoEmergencia {
  nome: string;
  descricao: string;
  telefone: string;
  icone: string;
}

@Component({
  selector: 'app-emergencia',
  imports: [],
  templateUrl: './emergencia.html',
  styleUrl: './emergencia.css'
})
export class EmergenciaComponent {
  
  contatos: ContatoEmergencia[] = [
    { nome: 'Defesa Civil', descricao: 'Atendimento 24h para situações de emergência.', telefone: '199', icone: '🚨' },
    { nome: 'Corpo de Bombeiros', descricao: 'Resgate e salvamento em áreas de risco.', telefone: '193', icone: '🔥' },
    { nome: 'SAMU', descricao: 'Atendimento médico de urgência.', telefone: '192', icone: '🚑' },
    { nome: 'Polícia Militar', descricao: 'Controle de tráfego e segurança pública.', telefone: '190', icone: '👮' },
    { nome: 'Companhia de Saneamento', descricao: 'Comunicação de entupimentos e problemas em bueiros.', telefone: '08001234567', icone: '💧' },
  ];
}

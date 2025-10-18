import { Component } from '@angular/core';

interface Dica {
  titulo: string;
  descricao: string;
  icone: string;
}

@Component({
  selector: 'app-conscientizacao',
  imports: [],
  templateUrl: './conscientizacao.html',
  styleUrl: './conscientizacao.css'
})
export class ConscientizacaoComponent {
  dicas: Dica[] = [
    {
      titulo: 'Descarte correto do lixo',
      descricao: 'O lixo jogado nas ruas entope bueiros e causa alagamentos. Mantenha sua calçada limpa.',
      icone: '🗑️',
    },
    {
      titulo: 'Limpeza das calhas e ralos',
      descricao: 'Folhas e sujeiras acumuladas impedem o escoamento da água. Faça limpezas regulares.',
      icone: '🏡',
    },
    {
      titulo: 'Evite jogar óleo no ralo',
      descricao: 'O óleo solidifica e contribui para entupimentos. Armazene e descarte corretamente.',
      icone: '🚫',
    },
    {
      titulo: 'Preserve áreas verdes',
      descricao: 'Árvores e plantas ajudam na absorção da água da chuva. Preserve o verde.',
      icone: '🌳',
    },
  ];
}

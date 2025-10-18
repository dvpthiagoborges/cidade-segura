import { Component } from '@angular/core';

interface FAQ {
  pergunta: string;
  resposta: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FaqComponent {

  faqs: FAQ[] = [
    {
      pergunta: 'O que devo fazer se minha rua começar a alagar?',
      resposta:
        'Evite sair de casa, desligue aparelhos elétricos, e busque abrigo em locais altos. Se precisar sair, evite dirigir ou caminhar em ruas alagadas.',
    },
    {
      pergunta: 'É seguro atravessar uma área alagada de carro?',
      resposta:
        'Não. Mesmo uma lâmina de água de 30 cm pode arrastar um veículo pequeno. O ideal é procurar uma rota alternativa ou aguardar o nível da água baixar.',
    },
    {
      pergunta: 'Quem devo chamar em caso de emergência?',
      resposta:
        'Ligue para a Defesa Civil (199) ou Bombeiros (193) imediatamente. Eles estão preparados para lidar com situações de risco.',
    },
    {
      pergunta: 'Como posso ajudar a evitar alagamentos na minha cidade?',
      resposta:
        'Evite jogar lixo nas ruas, limpe calhas e ralos regularmente e denuncie entupimentos em bueiros à companhia de saneamento local.',
    },
    {
      pergunta: 'A água do alagamento é perigosa?',
      resposta:
        'Sim. Ela pode conter esgoto, produtos químicos e lixo. Evite contato direto e nunca deixe crianças brincarem em locais alagados.',
    },
  ];
}

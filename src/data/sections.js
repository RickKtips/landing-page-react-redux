const sections = [
  {
    id: 1,
    title: "A melhor plataforma de serviços delivery de beleza e bem-estar",
    text:"Faça serviços de unhas, massagem, depilação, escova de cabelo, corte masculino, sem precisar sair de casa ou nos melhores salões, mais próximos de você!",
    imageUrl:"mulher-sorrindo-segurando-celular.png",
    bgClass:"bg-1",
    showLinks: true,
    theme: "white",
  },
  {
    id: 2,
    title: "Como funciona a Yobelle",
    imageUrl:"home-yobelle.png",
    bgClass:"bg-2",
    listItens:{
      singleList:true,
      itens:[
        {
        idItem:101, 
        text:"Baixe o app e escolha um dos nossos serviços",
        img:"icon-mobile--green.svg"
        },
        {
        idItem:102,
        text:"Defina o dia e horário que deseja receber o atendimento",
        img:"icon-calendar--green.svg"
        },
        {
          idItem:103,
          text:"Você decide se quer ser atendido em domicilio ou no salão credenciado mais próximo",
          img:"icon-smile--green.svg"
        },
    ]
    }
  },
  {
    id: 3,
    title: "Serviços para você",
    text:"Temos uma ampla variedade de tratamentos de beleza e bem-estar que ajudam você a relaxar e se renovar, sem sair de casa ou do escritório.",
    bgClass:"bg-3",
    theme: false,
    listItens:{
      singleList:false,
      itens:[
        {
          idItem:104,
          text:"Massagens",
          img:"yobelle-massagem.png"
          },
        {
          idItem:105,
        text:"Unhas",
        img:"yobelle-unhas.png"
      },
        {
          idItem:106,
        text:"Corte & barba",
        img:"yobelle-corte-masc.png"
      },
        {
          idItem:107,
          text:"Depilação",
          img:"yobelle-depilacao.png"
        },
        {
          idItem:108,
          text:"Cabelo",
          img:"yobelle-cabelo.png"
          },
          {
            idItem:109,
          text:"Sobrancelha",
          img:"yobelle-sobrancelha.png"
          },
          {
            idItem:110,
            text:"Estética",
            img:"yobelle-esteticafacial.png"
          },
    ]
    }
  },
  {
    id: 4,
    title: "Seja um assinante Yobelle",
    imageUrl:"yobelle-sorrindo.png",
    bgClass:"bg-4",
    showLinks: true, 
    theme: false,
    listItens:{
      singleList:true,
      itens:[
        {
          idItem:111,
        text:"Baixe o app e escolha um dos nossos serviços",
        img:"icon-tag--green.svg"
        },
        {
          idItem:112,
        text:"Defina o dia e horário que deseja receber o atendimento",
        img:"icon-medal--green.svg"
        },
        {
          idItem:113,
          text:"Você decide se quer ser atendido em domicilio ou no salão credenciado mais próximo",
          img:"icon-place--green.svg"
        },
        {
          idItem:114,
          text:"Você decide se quer ser atendido em domicilio ou no salão credenciado mais próximo",
          img:"icon-cash--green.svg"
        },        
    ]
    }
  },
  {
    id: 5,
    title: "Segurança e qualidade verificada pelo Instituto Embelleze",
    text:"Dentro do aplicativo Yobelle, você conta com a qualidade e o reconhecimento dos profissionais certificados pelo Instituto Embelleze, a maior rede de franquias em cursos profissionalizantes no segmento de beleza da América Latina.\n\nSão 18 anos de tradição, 270 franquias espalhadas por todo território nacional e mais de 2 milhões de alunos formados ao longo dos anos.\n\nConte com um atendimento personalizado e o apoio da tecnologia para encontrar os melhores profissionais de beleza da sua região!",
    imageUrl:"yobelle-embelleze.png",
    bgClass:"bg-5",
  },
  {
    id: 6,
    title: "Seja um profissional Yobelle e aumente sua renda",
    text:"Junte-se a nossa rede de profissionais e conquiste uma renda de até R$ 4.000,00",
    imageUrl:"yobelle-profissional.png",
    bgClass:"bg-6",
    showLinks: true,     
    listItens:{
      singleList:true,
      itens:[
        {
          idItem:115,
        text:"Aprovado você receberá treinamento e workshop gratuito do Instituto Embelleze",
        img:"icon-bronze--green.svg"
        },
        {
          idItem:116,
        text:"Seja seu próprio chefe trabalhando quando e onde quiser",
        img:"icon-bag--green.svg"
        },
        {
          idItem:117,
          text:"Controle sua agenda de forma simples e prática",
          img:"icon-calendar--green.svg"
        },
        {
          idItem:118,
          text:"Controle seus recebíveis na carteira digital e receba em poucos dias",
          img:"icon-ticket--green.svg"
        },
    ]
    }
  },
  {
    id: 7,
    text:"Veja a opinião de quem é assinante",
    bgClass:"bg-7",
    listItens:{
      singleList:false,
      secTheme: true,
      itens:[
        {
          idItem:119,
          name:"Luciana A. | Salvador - BA",
          text:"A melhor parte do serviço de beleza no trabalho é não precisar sair do escritório. A Economia do tempo e a comodidade me levaram optar pela Yobelle",
          },
        {
          idItem:120,
          name:"Adriana S.| Belo Horizonte - MG",
        text:"O que eu mais gosto do meu plano é que eu posso ser atendido onde eu quiser. Posso fazer em casa, na academia ou no trabalho",
      },
        {
          idItem:121,
          name:"Ana Rosa | Salvador-Ba",
        text:"Todos os profissionais que me atenderam até agora, foram incriveis! Atendimento e qualidade do serviço nota 10!",
      },
    ]
    }
  },
];

export default sections;

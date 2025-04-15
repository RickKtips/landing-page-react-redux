type Section = {
          id: number;
          title: string;
          text: string;
          imageUrl: string;
          bgClass: string;
          showLinks: boolean; 
          listItens: listItem[];
    
};

type listItem = {   
    singleList:boolean,
    itens: item[];
}

type item = {
        idItem:number;
        text:string;
        img:string;
}

export type { Section, listItem, item };

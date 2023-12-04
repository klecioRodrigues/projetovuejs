
const myApp = {
    data() {
        return{
            produtos :[
                {
                img:'img/racao1.webp',
                descricao : 'magnus',
                valor : 80
                },
                {
                    img : 'img/racao2.webp',
                    descricao : 'saborosa',
                    valor : 89
                },
                {
                    img : 'img/racao4.webp',
                    descricao : 'Gran plus',
                    valor : 150
                },
                {
                    img : 'img/rede3.webp',
                    descricao : 'Frontline Spray',
                    valor : 25
                },
                {
                    img : 'img/CAES.WEBP',
                    descricao : 'NATUN VERM',
                    valor : 20
                    },
                    {
                        img : 'img/med4.webp',
                        descricao : 'Mercepton Oral',
                        valor : 35
                        },
                        {
                            img : 'img/423327.jpg',
                            descricao : 'chanin',
                            valor : 155
                            },
        ],
        carrinho: [],
        };
    }, 
    methods: {
        addCart(produto){
            this.carrinho.push(produto);
        },
        totalCarrinho(){
          return this.formatarMoeda(this.carrinho.reduce((total, item) => 
          total + item.valor, 0));
        },
        formatarMoeda(valor){
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
    },
}

const app = Vue.createApp(myApp);
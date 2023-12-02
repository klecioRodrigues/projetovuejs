
const myApp = {
    data() {
        return{
            produtos :[
                {
                img:'img/racao2.webp',
                descricao : 'saborosa',
                valor : 89
                },
                {
                    img : 'img/product-5.jpg',
                    descricao : 'Mouse',
                    valor : 50
                },
                {
                    img : 'img/product-4.jpg',
                    descricao : 'Teclado',
                    valor : 100
                },
                {
                    img : 'img/product-3.jpg',
                    descricao : 'Smartphone',
                    valor : 30
                },
                {
                    img : 'img/product-6.jpg',
                    descricao : 'Notebook',
                    valor : 20
                    },
                    {
                        img : 'img/product-6.jpg',
                        descricao : 'Notebook',
                        valor : 20
                        },
                        {
                            img : 'img/product-6.jpg',
                            descricao : 'Notebook',
                            valor : 20
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
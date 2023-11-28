const produtoVenda = {
    
    template: `
    <div class="single-product">
    <div class="product-f-image">
        <img :src="produto.img" alt="">
        <div class="product-hover">
            <a href="#" @click.prevent="addCart(produto)" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i>Comprar</a>
           
        </div>
    </div>
    
    <h2><a href="single-product.html">{{ produto.descricao}}</a></h2>
    
    <div class="product-carousel-price">
        <ins>R$ {{ produto.valor}}</ins>  
        </div> 
    </div>
    `,

    emits: ['add-prod-cart'],
    
    props: {
        produto: {
            type: Object,
            required: true
            }
    },

    data(){
        return{

        }
    },
    methods: {
        addCart(produto){
          this.$emit('add-prod-cart',produto);  
        }
    },
}

app.component('produto-venda', produtoVenda);
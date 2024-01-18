
const btn_bebidas1 = document.querySelectorAll(".btn-bebidas1")
const btn_bebidas2 = document.querySelectorAll(".btn-bebidas2")
const btn_bebidas3 = document.querySelectorAll(".btn-bebidas3")


new Swiper(".swiper",{
    direction:"horizontal",
    loop:true,
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    },
    autoplay:{
        delay:3500
    }
});

//CAFES
btn_bebidas1[0].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    
    cafe.classList.add("activado")
    cafe.classList.remove("descativado")
    te.classList.add("descativado")
    jugos.classList.add("descativado")
   
})



btn_bebidas1[1].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    
    cafe.classList.add("activado")
    cafe.classList.remove("descativado")
    te.classList.add("descativado")
    jugos.classList.add("descativado")
   
})


btn_bebidas1[2].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    
    cafe.classList.add("activado")
    cafe.classList.remove("descativado")
    te.classList.add("descativado")
    jugos.classList.add("descativado")
   
})

//TE
btn_bebidas2[0].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    te.classList.add("activado")
    te.classList.remove("descativado")
    cafe.classList.add("descativado")
    jugos.classList.add("descativado")
})


btn_bebidas2[1].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    te.classList.add("activado")
    te.classList.remove("descativado")
    cafe.classList.add("descativado")
    jugos.classList.add("descativado")
})



btn_bebidas2[2].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")
    te.classList.add("activado")
    te.classList.remove("descativado")
    cafe.classList.add("descativado")
    jugos.classList.add("descativado")
})


//JUGOS


btn_bebidas3[0].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")

   
    jugos.classList.add("activado")
    jugos.classList.remove("descativado")
    cafe.classList.add("descativado")
    te.classList.add("descativado")
})

btn_bebidas3[1].addEventListener("click",()=>{
    const te = document.querySelector(".te")
    const cafe = document.querySelector(".cafes")
    const jugos = document.querySelector(".jugos")

    jugos.classList.add("activado")
    jugos.classList.remove("descativado")
    cafe.classList.add("descativado")
    te.classList.add("descativado")
})


// btn_bebidas3[2].addEventListener("click",()=>{
//     const te = document.querySelector(".te")
//     const cafe = document.querySelector(".cafes")
//     const jugos = document.querySelector(".jugos")
//     te.classList.add("activado")
//     te.classList.remove("descativado")
//     cafe.classList.add("descativado")
// })







const heaert = document.querySelectorAll(".bi-heart-fill");






heaert.forEach(cora => {
    cora.addEventListener("click",function(e){
//AÑADIR LOS FAVORITOS AL LOCAL STORAGE
        // const card = e.target.closest(".cardCafe")

        // const prod ={
        //     id: card.dataset.productId,
        //     title: card.querySelector("h1").textContent,
        //     price : card.querySelector("h2").textContent
        // }


       const cambioColor = e.currentTarget.classList
        
       if (!cambioColor.contains("rojo")) {
            cora.classList.add("rojo")
       }else{
        cora.classList.remove("rojo")
       }
       
    
    })
   
});














const guardado = document.querySelectorAll(".bi-bookmarks-fill");
//<i class="bi bi-heart-fill"></i>             <i class="bi bi-cart"></i>
guardado.forEach(dora => {
    dora.addEventListener("click",function(e){
       const cambioColorr = e.currentTarget.classList

       if (!cambioColorr.contains("amarillo")) {
        dora.classList.add("amarillo")
       }else{
        dora.classList.remove("amarillo")
       }
       
    
    })
});












//CARRITO


const cartInfo =  document.querySelector(".cart-product")

const btnCart = document.querySelector(".bi-bag")
const conteiner_card_product = document.querySelector(".conteiner-cart-products")
const icon_close = document.querySelector(".icon-close")
const rowProduct = document.querySelector(".row-product")

const productList = document.querySelectorAll(".container-items")

const valorTotal = document.querySelector(".total-pagar")




btnCart.addEventListener("click",()=>{
    conteiner_card_product.classList.toggle("hidden-cart")
})


rowProduct.addEventListener("click",e=>{
    if(e.target.classList.contains("icon-close")){
        const product = e.target.parentElement
        const title = product.querySelector("p").textContent

        allProducts = allProducts.filter(product=>product.title !== title)
        showHtml()
    }
})














let allProducts = []




productList.forEach(pord => {
    pord.addEventListener("click",e=>{
    if (e.target.classList.contains("btn-cart-add")) {

        const product = e.target.parentElement;

        const infoProduct ={
            quantity:1,
            title: product.querySelector("h1").textContent,
            price : product.querySelector("h2").textContent
        }

        const exist = allProducts.some(product=>product.title === infoProduct.title)

        if (exist) {
            const products= allProducts.map(product=>{
                if (product.title==infoProduct.title) {
                    product.quantity++
                    return product
                }else{
                    return product
                }
            })

            allProducts=[...products]
        }else{
            allProducts=[...allProducts, infoProduct]
        }
    
        showHtml()
    }
    


})




});



//funcion para mostrar HTML

const showHtml=()=>{



    

    //limpiar HTML

    rowProduct.innerHTML=""

    let total=0
    allProducts.forEach(producto=>{


        const containerProd = document.createElement("div")
        containerProd.classList.add("cart-product")

        containerProd.innerHTML= `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${producto.quantity}</span>
            <p class="titulo-producto-carrito">${producto.title}</p>
        <span class="precio-producto-carrito">${producto.price}</span>

        </div>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24"
                strokeWidth={1.5} 
                stroke="currentColor" 
                class="icon-close">
                <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
        `

        let rowProduct=document.querySelector(".row-product")

        rowProduct.append(containerProd)

        total = total + (producto.quantity * parseFloat(producto.price.replace('$', '')));

    })

    valorTotal.innerText=`$${total}`;

    sincronizarLocalS()
};


//AGREGAMOS LAS COMPRAS EN EL LOCAL STORAGE
function sincronizarLocalS(){
    // Convertir el array a una cadena JSON
    const productsJSON = JSON.stringify(allProducts);
    // Guardar la cadena JSON en localStorage
    localStorage.setItem("carrito", productsJSON);
}


document.addEventListener("DOMContentLoaded", ()=>{
    allProducts=JSON.parse( localStorage.getItem("carrito")) || []
    showHtml()
})


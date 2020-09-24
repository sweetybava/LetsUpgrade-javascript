// List of products

let products = [
    {
        id: 1,
        name : "Blue Kurthi",
        size : "XL",
        color : "Navy Blue",
        price : "1500",
        image : "https://rukminim1.flixcart.com/image/714/857/k1dw70w0/dress/e/h/p/xs-hld11-hello-design-original-imafjfvcvdehmd6q.jpeg?q=50",
        description : "Blue traditional kurthi with Embroid.",
    },
    
    {
        id: 2,
        name : "Black Satin Anarkali",
        size : "L",
        color : "Black Colour",
        price : "1700",
        image : "https://images-na.ssl-images-amazon.com/images/I/510jQwEng0L._UY550_.jpg",
        description : "Western Black colour satin Anarkali.",
    },

    {
        id: 3,
        name : "Pink plain long dress",
        size : "XL",
        color : "Pink",
        price : "950",
        image : "https://rukminim1.flixcart.com/image/714/857/k1118cw0/gown/c/h/r/na-xl-maroon-spirit-fashion-na-original-imafggpasgzckvtg.jpeg?q=50",
        description : "Plain pink colour long dress.",
    },

    {
        id: 4,
        name : "Maxi White Dress",
        size : "XL",
        color : "White",
        price : "700",
        image : "https://rukminim1.flixcart.com/image/714/857/jqfinww0/dress/d/a/y/xl-rajkumari-561d-rajkumari-original-imafacrzsnu6gzcu.jpeg?q=50",
        description : "Maxi Western White Frock.",
    },

    {
        id: 5,
        name : "Blue Party Wear",
        size : "XL",
        color : "Navy Blue and Pink",
        price : "1000",
        image : "https://rukminim1.flixcart.com/image/332/398/k2tc1ow0pkrrdj/dress/2/6/d/s-dark-blue-pink-beige-multicolor-79tkj2253-siril-original-imafhnehpyryvxc4.jpeg?q=50",
        description : "Party Wear Western Dress.",
    },

    {
        id: 6,
        name : "Red Long Top",
        size : "L",
        color : "Red & Black",
        price : "1700",
        image : "https://style.pk/party-wear-dresses-2013-for-girls-new-fashion-trends/party-wear-dresses-2013-for-girls-new-fashion-trends-003/",
        description : "Long Netted red and black Top.",
    },

    {
        id: 7,
        name : "Short Top",
        size : "M",
        color : "Ash colour",
        price : "800",
        image : "https://i.pinimg.com/originals/80/c8/b4/80c8b403bd98dc1689f2cc262ddeade6.jpg",
        description : "Ash colour Western Girls Outfits.",
    },

    {
        id: 8,
        name : "Classic Blue Top",
        size : "XL",
        color : "Blue",
        price : "1300",
        image : "https://www.andindia.com/media/catalog/product/cache/a8e60f747ccf7a1531bde73b3776ea07/s/s/ss20ab043drmosnavy-_3_-copy.jpg",
        description : "Classic Blue western Top.",
    },

    {
        id: 9,
        name : "Polyster Dress",
        size : "L",
        color : "Green",
        price : "1900",
        image : "https://img0.junaroad.com/uiproducts/15445215/pri_175_p-1535457891.jpg",
        description : "Leaf Green Polyster and Cotton Western Dress.",
    },

    {
        id: 10,
        name : "Printed Kurthi",
        size : "XL",
        color : "Red",
        price : "550",
        image : "https://wforwoman.com/images/w-wordslider/m_l_banner4.jpg",
        description : "Printed Fashion Long Kurthi.",
    },

    {
        id: 11,
        name : "Zeebra Kurthi",
        size : "M",
        color : "White & Black",
        price : "600",
        image : "https://pantaloons.imgix.net/resources/img/pantaloons/mobile/mobile_womens_lookbook_slider2_block1_0127.jpg?w=382&auto=format",
        description : "Zeebra colour Short Kurthi Fashion.",
    },

    {
        id: 12,
        name : "Party Wear",
        size : "XL",
        color : "Black",
        price : "2250",
        image : "https://cdn.shopify.com/s/files/1/0033/7939/6672/files/20200825_BeYou-Cover-BeGlam_1024x.jpg?v=1598663961",
        description : "Party Wear in black colour.",
    },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
    
    let productsString="";

    productsData.forEach(function(product,index){
       
        let {id,name,size,color,price,image,description} = product;
        
        if(who == "productwrapper") {
        productsString += `<div class="product">
        <div class="productimage">
            <img src="${product.image}" width="100%" />
        </div>
            <h2><b>${product.name}</b></h2>
            <p><b>Size: </b><i>${product.size}</i></p>
            <p><b>Color: </b><i>${product.color}</i></p>
            <p><b>Price: </b><i>${product.price}</i></p>
            <p><b>Description: </b><i>${product.description}</i></p> 
            <p>
                <button onclick="addToCart(${index})"><b>Add to cart</b></button>
            </p>
    </div>`;
   }
   else if(who=="cart") 
   {
    productsString += `<div class="product">
    <div class="productimage">
        <img src="${product.image}" width="100%" />
    </div>
        <h2><b>${product.name}</b></h2>
        <p><b>Size: </b><i>${product.size}</i></p>
        <p><b>Color: </b><i>${product.color}</i></p>
        <p><b>Price: </b><i>${product.price}</i></p>
        <p><b>Description: </b><i>${product.description}</i></p> 
        <p>
            <button onclick="removeFromCart(${index})"><b>Remove From cart</b></button>
        </p>
    </div>`;
   }
    });
    
    document.getElementById(who).innerHTML =  productsString;

}

displayProducts(products);

// Search the products using name, color and description

function searchProduct(searchValue) {
    let searchedProducts = products.filter(function(product,index){
        let searchString = 
          product.name +""+ product.color +""+ product.description;

        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

    displayProducts(searchedProducts);

}

// Maximum and Minimum price

function searchMaxprod(searchMaxvalue) {
    if(searchMaxprod > 1000) {
     let searchedMaxprod = products.filter(function(product,index){

        return product.price.indexOf(searchMaxvalue) !=-1 ;
    });

    }
    else {
        return false;
    }

    displayProducts(searchedMaxprod);

}

// cart function pop up details

function showModal(){
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
 }
 
function hideModal(event){
     if(event.target.className == "modal"){
 
     let modal=document.getElementsByClassName("modal")[0];
     modal.style.display = "none";
     }
}

// Add to cart and remove to cart function

function addToCart(index) {
   // pushing in to the cart
    cart.push(products[index]);
    displayProducts(cart, "cart");
}

function removeFromCart(index) {
    //remove from cart
    cart.splice(index, 1);
    displayProducts(cart, "cart");
}
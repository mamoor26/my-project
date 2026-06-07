let card=[
  {id:1,pic:"../images/fan1.avif",price:"9000",title:"Best Deal Product"},
  {id:2,pic:"../images/cardpic2.webp",price:"7800",title:"Best Deal Product"},
  {id:3,pic:"../images/cardpic3.webp",price:"6500",title:"Best Deal Product"},
  {id:4,pic:"../images/cardpic4.webp",price:"5500",title:"Best Deal Product"}

 ]
   
 let urldata=new URLSearchParams(window.location.search);
 let urlid=urldata.get("id")

 let Product=card.find(item => item.id==urlid)
 let quantity=1;
 let price=Product.price
 let cart=[]
 

 


document.getElementById("pic").src = Product.pic;
document.getElementById("title").innerText=Product.title;


 document.getElementById('quantity').innerText=quantity
document.getElementById('price').innerText=price
    function plus(){
  quantity++;
  uiupdate()
    }



function minus(){
    if(quantity==0){
        quantity=0
    }


  else{
    quantity--;
  uiupdate()
  }

}

function uiupdate(){
  document.getElementById('quantity').innerText=quantity
  document.getElementById('price').innerText=price*quantity
}
function addtocart(){
  if(quantity>0){

    cart.push(
      {
        title:card.title,
        quantity:quantity,
        price:card.price
        
        

      }
      
    )
    document.getElementById("cart").innerText=cart.length
    uiupdate
 }
  else{

    alert("please increase your quantity")
  } 
}
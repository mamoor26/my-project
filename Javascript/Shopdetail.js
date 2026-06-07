let data=[
  {id:1,pic:"/images/fan1.webp",price:"9000",title:"Ceiling Fan,Sweep Size: 56 Inches (1400 mm),Rated Power: 50 Watts,Operating Voltage: 230V ± 10V (50 Hz frequency),Speed: 325 RPM,Air Delivery: 250 m³/min,Service Value: 4.54 m³/min/W.",},
  {id:2,pic:"/images/cardpic2.webp",price:"7800",title:"Handfree"},
  {id:3,pic:"/images/cardpic3.webp",price:"6500",title:"Best Deal Product"},
  {id:4,pic:"/images/cardpic4.webp",price:"5500",title:"Head Phone"},
  {id:5,pic:"/images/oven1.avif",price:"6700",title:"Microwoven"},
  {id:6,pic:"/images/grinder1.avif",price:"9800",title:"Grinder"},
  {id:7,pic:"/images/choper1.webp",price:"6200",title:"Choper"},
  {id:8,pic:"/images/eggbeater1.webp",price:"15000",title:"Egg Beater"},
  {id:9,pic:"/images/eggfryer1.avif",price:"10200",title:"Deep Fryer"},
  {id:10,pic:"/images/ac1.avif",price:"5900",title:"Air Conditioner"},
  {id:11,pic:"/images/ac2.avif",price:"20500",title:"AC non inverter"},
  {id:12,pic:"/images/ac3.avif",price:"31500",title:"Floor Standing AC"},
  {id:13,pic:"/images/frij1.avif",price:"25000",title:"Refrigerator"},
  {id:14,pic:"/images/frij2.avif",price:"35000",title:"Freezer double door "},
  {id:15,pic:"/images/frij3.avif",price:"40300",title:"freezer bedrrom"},
  {id:16,pic:"/images/frij4.avif",price:"27800",title:"Deep Freezer"},
  {id:17,pic:"/images/led1.avif",price:"15000",title:"LED"},
  {id:18,pic:"/images/washing1.webp",price:"19600",title:"wasingmachine "},
  {id:19,pic:"/images/washing2.avif",price:"14900",title:"Washingmachine"},
  {id:20,pic:"/images/vaccum1.avif",price:"13200",title:"Vaccum Cleaner"},
  {id:21,pic:"/images/dispenser1.avif",price:"16400",title:"Dispenser"},
  {id:22,pic:"/images/iron1.avif",price:"17300",title:"Iron"},
  {id:23,pic:"/images/phone1.webp",price:"12300",title:"Red Me A25"},
  {id:24,pic:"/images/bud1.webp",price:"50000",title:"Air Burds"},
 ]
 let urldata=new URLSearchParams(window.location.search);
 let urlid=urldata.get("id")

 let card=data.find(item => item.id==urlid)
 let quantity=1;
 let price=card.price;
 let cart=[]

 


document.getElementById("shoppic").src = card.pic;
document.getElementById("shoptitle").innerText=card.title;





document.getElementById('quantity').innerText=quantity
document.getElementById('shopprice').innerText=price
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
  document.getElementById('shopprice').innerText=price*quantity

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




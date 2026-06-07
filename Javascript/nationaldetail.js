let haier=[
    {id:1,pic:"/images/kenfrij2.webp",price:"160000",title:"Smart Inverter Red"},
    {id:2,pic:"/images/kenac1.avif",price:"1500000",title:"E-Luxury Pro" },
    {id:3,pic:"/images/kenac3.webp",price:"200000",title:"Inverter Premier Plus"},
    {id:4,pic:"/images/kenchula2.webp",price:"18000",title:"DHM 590 SIBuilt-in Hob"},
    {id:5,pic:"/images/kenfrij3.webp",price:"80000",title:"Inverter Series (Mirror)"},
    {id:6,pic:"/images/kenfrij4.webp",price:"90000",title:"Multi Door Refrigerator"},
    {id:7,pic:"/images/kendispenser1.webp",price:"25000",title:"PEL 525 3Taps Curved Glass Door Water Dispenser"},
    {id:8,pic:"/images/kendispenser2.webp",price:"45000",title:"PEL Table-Top Classic 115 Water Dispenser"},
    {id:9,pic:"/images/kenoven1.avif",price:"8000",title:"PEL Chef Digital Microwave Oven"},
    {id:10,pic:"/images/kenchula1.webp",price:"15000",title:"DHG 390 BNBuilt-in Hob"},
    {id:11,pic:"/images/kenblender1.webp",price:"19000",title:"DWHB 475 WhiteBlender"},
    {id:12,pic:"/images/dawled.webp",price:"17000000",title:"LED"},
    {id:13,pic:"/images/dawtoaster.webp",price:"5000",title:"Toaster"},
    {id:14,pic:"/images/dawkettle.webp",price:"3000",title:"Kettle"},
    {id:15,pic:"/images/dawcoffee.webp",price:"45000",title:"Coffee Maker"},
    {id:16,pic:"/images/dawsteamer.webp",price:"18450",title:"Steamer"},
    {id:17,pic:"/images/dawiron.webp",price:"5670",title:"Iron"},
    {id:18,pic:"/images/dawcleaner.webp",price:"12650",title:"Floor Cleaner"},

]


let haierurldata=new URLSearchParams(window.location.search);
 let haierurlid=haierurldata.get("id")

 let card=haier.find(item => item.id==haierurlid)
 let quantity=1;
 let price=card.price
 let cart=[]
 
document.write(`
      <div class="container mt-5">
    <div class="row">
        <div class="col-lg-6">
            <img src="${card.pic}" alt="" style="width: 50%;">
        </div>
        <div class="col-lg-6">
            <h4>${card.title}</h4>
          
            <h5>PKR</h5>
            <h6 id="haierprice"></h6>
             <button class="btn btn-danger mt-3" onclick="minus()"> <i class="fa-solid fa-minus" style="color: rgb(8, 8, 8);"></i></button>
      <span id="quantity" ></span>
      <button class="btn btn-primary mt-3" onclick="plus()"><i  class="fa-solid fa-plus" style="color: rgb(8, 8, 8);"></i></button>
      <hr>
      <button class="btn btn-primary" onclick="addtocart()">Add To Cart</button>
        </div>
    </div>
  </div>
    `)

    document.getElementById('quantity').innerText=quantity
document.getElementById('haierprice').innerText=price
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
  document.getElementById('haierprice').innerText=price*quantity
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


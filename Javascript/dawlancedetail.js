let dawlance=[
    {id:1,pic:"/images/dawfreej1.webp",price:"22100",title:"DF-200P D SOLAR (ARC-P1-WHITE)Freezer"},
    {id:2,pic:"/images/dawoven1.webp",price:"6000",title:"MWO DW-115-CHZPBaking Microwave Oven"},
    {id:3,pic:"/images/dawblender.webp",price:"4000",title:"DWHB 81762 HandBlender"},
    {id:4,pic:"/images/dawbuilthood.webp",price:"12000",title:"DCB 7530 BBuilt-in Hood"},
    {id:5,pic:"/images/dawhotplate.webp",price:"7000",title:"DWHP 3021 WHot Plate"},
    {id:6,pic:"/images/dawmintmarker.webp",price:"16000",title:"DWMM 6001 WMeat Mincer"},
    {id:7,pic:"/images/dawmulticooker.webp",price:"19000",title:"DWMC 3015Multi Cooker"},
    {id:8,pic:"/images/dawsandwichmaker.webp",price:"8700",title:"DWSM 2971 BSandwich Maker"},
    {id:9,pic:"/images/dawdispenser.webp",price:"7200",title:"DBD-1035 Glass DoorBottom Load Water Dispensers"},
    {id:10,pic:"/images/dawac1.webp",price:"15000",title:"GLAMOUR INVERTER 45 FSInverter Floor Standing AC"},
    {id:11,pic:"/images/dawac2.webp",price:"19000",title:"PurSense 1.5 Ton BlackSplit Air Conditioners"},
    {id:12,pic:"/images/dawled.webp",price:"17200",title:"Canvas X UHD Google TV 50 4K UHD"},
    {id:13,pic:"/images/dawtoaster.webp",price:"1900",title:"DWT 4220 WToaster"},
    {id:14,pic:"/images/dawkettle.webp",price:"6000",title:"DWEK 7200Electric Kettle"},
    {id:15,pic:"/images/dawcoffee.webp",price:"7200",title:"DWCM 5304 XCoffee Machines"},
    {id:16,pic:"/images/dawsteamer.webp",price:"3200",title:"DWGS 2316Garment Steamer"},
    {id:17,pic:"/images/dawiron.webp",price:"12900",title:"DWDI 1020 WhiteDry Iron"},
    {id:18,pic:"/images/dawcleaner.webp",price:"4.00",title:"DWVC 770Vacuum Cleaner"},
]
let dawlanceurldata=new URLSearchParams(window.location.search);
 let dawlanceurlid=dawlanceurldata.get("id")

 let card=dawlance.find(item => item.id==dawlanceurlid)
 let quantity=1
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
            <h6 id="samsungprice"></h6>
             <button class="btn btn-danger mt-3" onclick="minus()"> <i class="fa-solid fa-minus" style="color: rgb(8, 8, 8);"></i></button>
      <span id="quantity"></span>
      <button class="btn btn-primary mt-3" onclick="plus()"><i  class="fa-solid fa-plus" style="color: rgb(8, 8, 8);"></i></button>
      <hr>
      <button class="btn btn-primary" onclick='addtocart()'>Add To Cart</button>
        </div>
    </div>
  </div>
    `)

    document.getElementById('quantity').innerText=quantity
document.getElementById('samsungprice').innerText=price
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
  document.getElementById('samsungprice').innerText=price*quantity
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
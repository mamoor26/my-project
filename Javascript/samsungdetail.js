let samsung=[
    {id:1,pic:"/images/samsung burds.webp",price:"8700",title:"Galaxy Buds4 Pro",color:"White",des:"From deeper, richer lows powered by a wider woofer to clear highs, the advanced 2-way Speaker delivers a complete, balanced sound."},
    {id:2,pic:"/images/samsungled.avif",price:"25600",title:"Odyssey 5G",color:"Black",des:"Step into a game world that's more vibrant and immersive than ever before. With 1.7 times the pixel density of Full HD (1920x1080), QHD resolution (2560x1440) boasts incredibly detailed, pin-sharp images. Now you can take in the action in more detail on the same-sized screen"},
    {id:3,pic:"/images/samsungled2.avif",price:"8700",title:"Curved Monitor",color:"grey",des:"Vivid scenes wrap around you. The all-encompassing 1000R display fills every part of your peripheral vision and draws you right into the character's shoes. Experience a level of gaming more heart-pounding than anything before."},
    {id:4,pic:"/images/samsungfrij.webp",price:"24000",title:"Mounted Frezer",color:"Grey",des:"Reduce your energy use by up to 10%* with AI Energy mode in SmartThings Energy**. If your estimated electricity bill exceeds a preset target, it gives you an option to save energy***. It intelligently adjusts the compressor speed and defrost cycle, based on your usage pattern and surroundings."},
    {id:5,pic:"/images/samsungfrij2.avif",price:"28900",title:"Refrigerator",color:"Light Grey ",des:"Delivers a rapid cooling performance to chill beverages and create ice. At the touch of a button, Power Cool blows intensely cold air into the fridge, so food and drinks are quickly chilled. And Power Freeze is great for freezing or firming up frozen food, like ice cream, and making more ice."},
    {id:6,pic:"/images/samsungwash.webp",price:"14700",title:"Washing Machine",color:"White",des:"Monitor and reduce energy use. AI Energy Mode* lets you check the power consumption and estimates your bill. For courses that operate in AI Energy Mode** it reduces energy use by up to 70%*** by using Samsung’s Ecobubble™ technology to wash at lower temperatures and adjusting the cycle time."},
    {id:7,pic:"/images/samsungac.webp",price:"19900",title:"Air Conditioner",color:"White",des:"Cool rooms quickly from corner to corner, so you’re always comfortable. Digital Inverter Boost technology cools the air 43% faster*. Its advanced design also has a 15% larger fan, 18% wider inlet and a 31% wider blade. So cool air is dispersed farther and wider**, reaching up to 15 meters."},
    {id:8,pic:"/images/samsungbuds2.avif",price:"14700",title:"Galaxy Buds3",color:"Silver",des:"Galaxy AI is here for your all-new Galaxy Buds3.Discover the details in your favorite songs. Re-engineered with an angled design to bring sound closer to your ears. Feel the beat with a new 11mm speaker for strong, dynamic sound. Hear the distinct timbre and clarity in each note with 24-bit CODEC, giving you the ultimate Hi-Fi sound experience. Fine-tune the details with Galaxy AI enhancements for ANC and real-time translation that give you an edge."},
    {id:9,pic:"/images/samsungled3.webp",price:"33400",title:"Neo QLED",color:"Black",des:"Real Quantum Dot technology delivers our finest picture ever. With Color Volume 100%, Quantum Dot takes light and turns it into breathtaking colors that stay true at various level of brightness."},
    {id:10,pic:"/images/samsungphone.webp",price:"25400",title:" Galaxy 26 Ultra",color:"Cobalt Violet",des:" Powered by the cutting-edge Snapdragon 8 Gen 5 for Galaxy processor with an upgraded NPU for faster AI tasks."},
    {id:11,pic:"/images/samsungwash2.avif",price:"18700",title:"Top-Load Washer",color:"Dark Gray",des:"Handles the entire wash, rinse, and spin cycle without user intervention. Models from brands like Dawlance offer digital controls and inverter motors for energy efficiency"},
    {id:12,pic:"/images/samsungtab.avif",price:"33400",title:"Galaxy Tab S9 Fe 5G",color:"Gray",des:"Step into a world of fun creative possibilities and entertainment with Galaxy Tab S9 FE and Tab S9 FE+. View, create and share what you love in vivid detail on the bright, immersive screen. Both models come in Gray, Mint, Silver or Lavender to effortlessly match your unique vibe."},
]

let samsungurldata=new URLSearchParams(window.location.search);
 let samsungurlid=samsungurldata.get("id")

 let card=samsung.find(item => item.id==samsungurlid)
 let quantity=1
 let price=card.price
 
 






 document.write(`
    <div class="container mt-5">
    <div class="row">
        <div class="col-lg-6">
            <img src="${card.pic}" alt="" style="width: 50%;">
        </div>
        <div class="col-lg-6">
            <h4>${card.title}</h4>
            <p><h4>Color:</h4> ${card.color}</p>
            <p><h4>Feature: </h4>${card.des}</p>
            <h6 id="samsungprice"></h6>
             <button class="btn btn-danger mt-3" onclick="minus()"> <i class="fa-solid fa-minus" style="color: rgb(8, 8, 8);"></i></button>
      <span id="quantity"></span>
      <button class="btn btn-primary mt-3" onclick="plus()"><i  class="fa-solid fa-plus" style="color: rgb(8, 8, 8);"></i></button>
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
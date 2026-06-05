let dawlance=[
    {id:1,pic:"/images/dawfreej1.webp",price:"$221.00",title:"Freezer"},
    {id:2,pic:"/images/dawoven1.webp",price:"$60.00",title:"Baking Microvew"},
    {id:3,pic:"/images/dawblender.webp",price:"$40.00",title:"Blender"},
    {id:4,pic:"/images/dawbuilthood.webp",price:"$120.00",title:"Builthood"},
    {id:5,pic:"/images/dawhotplate.webp",price:"$70.00",title:"Hot PLate"},
    {id:6,pic:"/images/dawmintmarker.webp",price:"$160.00",title:"Meat Mincer"},
    {id:7,pic:"/images/dawmulticooker.webp",price:"$190.00",title:"Multi Cooker"},
    {id:8,pic:"/images/dawsandwichmaker.webp",price:"$87.00",title:"Sandwich Maker"},
    {id:9,pic:"/images/dawdispenser.webp",price:"$72.00",title:"Water Dispenser"},
    {id:10,pic:"/images/dawac1.webp",price:"$150.00",title:"Floor Stand AC"},
    {id:11,pic:"/images/dawac2.webp",price:"$190.00",title:"Air Conditioner"},
    {id:12,pic:"/images/dawled.webp",price:"$172.00",title:"LED"},
    {id:13,pic:"/images/dawtoaster.webp",price:"$19.00",title:"Toaster"},
    {id:14,pic:"/images/dawkettle.webp",price:"$60.00",title:"Kettle"},
    {id:15,pic:"/images/dawcoffee.webp",price:"$72.00",title:"Coffee Maker"},
    {id:16,pic:"/images/dawsteamer.webp",price:"$32.00",title:"Steamer"},
    {id:17,pic:"/images/dawiron.webp",price:"$129.00",title:"Iron"},
    {id:18,pic:"/images/dawcleaner.webp",price:"$42.00",title:"Floor Cleaner"},

]



document.write(`
     <div class="container-fluid mt-5" >
        <div class="row" id="row7">
    `)
    for(i=0;i<dawlance.length;i++){
        document.write(`
            <div class="col-md-4 mt-5" id="card2item1" style="background-color: rgb(236, 236, 236);">
            <a href="/pages/Shop.html" ><img src="${dawlance[i].pic}" alt="" width="150px"></a>
          <div class="div">
            <span>${dawlance[i].price}</span>
          <h5 style="margin-bottom: 15px; margin-top: 10px;">${dawlance[i].title} </h5>
          <a id="card2btn" href="dawlancedetail.html?id=${dawlance[i].id}">View Details</a>
          </div>

          </div>
            `)
    }
    document.write(`
        </div>

      </div>
        `)
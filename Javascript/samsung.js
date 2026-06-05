let samsung=[
    {id:1,pic:"/images/samsung burds.webp",price:"$87.00",title:"Air Buds"},
    {id:2,pic:"/images/samsungled.avif",price:"$256.00",title:"Odyssey 5G"},
    {id:3,pic:"/images/samsungled2.avif",price:"$87.00",title:"Curved Monitor"},
    {id:4,pic:"/images/samsungfrij.webp",price:"$240.00",title:"Mounted Freezer"},
    {id:5,pic:"/images/samsungfrij2.avif",price:"$289.00",title:"Refrigerator"},
    {id:6,pic:"/images/samsungwash.webp",price:"$147.00",title:"Washing Machine"},
    {id:7,pic:"/images/samsungac.webp",price:"$199.00",title:"Air Conditioner"},
    {id:8,pic:"/images/samsungbuds2.avif",price:"$147.00",title:"Galaxy Buds3"},
    {id:9,pic:"/images/samsungled3.webp",price:"$334.00",title:"Neo QLED"},
    {id:10,pic:"/images/samsungphone.webp",price:"$254.00",title:" Galaxy 26 Ultra"},
    {id:11,pic:"/images/samsungwash2.avif",price:"$187.00",title:"Top-Load Washer"},
    {id:12,pic:"/images/samsungtab.avif",price:"$334.00",title:"Galaxy Tab S9 Fe 5G"},
]

document.write(`
     <div class="container-fluid mt-5" >
        <div class="row" id="row7">
    `)
    for(i=0;i<samsung.length;i++){
        document.write(`
            <div class="col-md-4 mt-5" id="card2item1" style="background-color: rgb(236, 236, 236);">
            <a href="/pages/Shop.html" ><img src="${samsung[i].pic}" alt="" width="150px"></a>
          <div class="div">
            <span>$70.00</span>
          <h5 style="margin-bottom: 15px; margin-top: 10px;">${samsung[i].title} </h5>
          <a id="card2btn" href="samsungdetail.html?id=${samsung[i].id}">View Details</a>
          </div>

          </div>
            `)
    }
    document.write(`
        </div>

      </div>
        `)
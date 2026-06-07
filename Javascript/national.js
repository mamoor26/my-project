let haier=[
    {id:1,pic:"/images/kenfrij2.webp",price:"1600000",title:"Refrigerator"},
    {id:2,pic:"/images/kenac1.avif",price:"1500000",title:"AC"},
    {id:3,pic:"/images/kenac3.webp",price:"200000",title:"Standing AC"},
    {id:4,pic:"/images/kenchula2.webp",price:"18000",title:"Stove"},
    {id:5,pic:"/images/kenfrij3.webp",price:"80000",title:"Refrigerator"},
    {id:6,pic:"/images/kenfrij4.webp",price:"90000",title:"Multidoor Freej "},
    {id:7,pic:"/images/kendispenser1.webp",price:"25000",title:"Dispenser"},
    {id:8,pic:"/images/kendispenser2.webp",price:"45000",title:"Small Dispenser"},
    {id:9,pic:"/images/kenoven1.avif",price:"8000",title:"Microwave"},
    {id:10,pic:"/images/kenchula1.webp",price:"15000",title:"Stove"},
    {id:11,pic:"/images/kenblender1.webp",price:"19000",title:"Blender"},
    {id:12,pic:"/images/dawled.webp",price:"1700000",title:"LED"},
    {id:13,pic:"/images/dawtoaster.webp",price:"5000",title:"Toaster"},
    {id:14,pic:"/images/dawkettle.webp",price:"3000",title:"Kettle"},
    {id:15,pic:"/images/dawcoffee.webp",price:"45000",title:"Coffee Maker"},
    {id:16,pic:"/images/dawsteamer.webp",price:"18450",title:"Steamer"},
    {id:17,pic:"/images/dawiron.webp",price:"5670",title:"Iron"},
    {id:18,pic:"/images/dawcleaner.webp",price:"12650",title:"Floor Cleaner"},

]


document.write(`
     <div class="container-fluid mt-5" >
        <div class="row" id="row7">
    `)
    for(i=0;i<haier.length;i++){
        document.write(`
            <div class="col-md-4 mt-5" id="card2item1" style="background-color: rgb(236, 236, 236);">
            <a href="/pages/Shop.html" ><img src="${haier[i].pic}" alt="" width="150px"></a>
          <div class="div">
            <span>pkr  ${haier[i].price}</span>
          <h5 style="margin-bottom: 15px; margin-top: 10px;">${haier[i].title} </h5>
          <a id="card2btn" href="nationaldetail.html?id=${haier[i].id}">View Details</a>
          </div>

          </div>
            `)
    }
    document.write(`
        </div>

      </div>
        `)
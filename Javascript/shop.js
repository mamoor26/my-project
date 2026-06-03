let card=[
  {id:1,pic:"/images/fan1.avif",price:"$90.00",title:"Best Deal Product"},
  {id:2,pic:"/images/cardpic2.webp",price:"$78.00",title:"Best Deal Product"},
  {id:3,pic:"/images/cardpic3.webp",price:"$65.00",title:"Best Deal Product"},
  {id:4,pic:"/images/cardpic4.webp",price:"$55.00",title:"Best Deal Product"},
  {id:5,pic:"/images/oven1.avif",price:"$67.00",title:"Best Deal Product"},
  {id:6,pic:"/images/grinder1.avif",price:"$98.00",title:"Best Deal Product"},
  {id:7,pic:"/images/choper1.webp",price:"$62.00",title:"Best Deal Product"},
  {id:8,pic:"/images/eggbeater1.webp",price:"$150.00",title:"Best Deal Product"},
  {id:9,pic:"/images/eggfryer1.avif",price:"$102.00",title:"Best Deal Product"},
  {id:10,pic:"/images/ac1.avif",price:"59.00",title:"Best Deal Product"},
  {id:11,pic:"/images/ac2.avif",price:"$205.00",title:"Best Deal Product"},
  {id:12,pic:"/images/ac3.avif",price:"$315.00",title:"Best Deal Product"},
  {id:13,pic:"/images/frij1.avif",price:"$250.00",title:"Best Deal Product"},
  {id:14,pic:"/images/frij2.avif",price:"$350.00",title:"Best Deal Product"},
  {id:15,pic:"/images/frij3.avif",price:"$403.00",title:"Best Deal Product"},
  {id:16,pic:"/images/frij4.avif",price:"$278.00",title:"Best Deal Product"},
  {id:17,pic:"/images/led1.avif",price:"$150.00",title:"Best Deal Product"},
  {id:18,pic:"/images/washing1.webp",price:"$196.00",title:"Best Deal Product"},
  {id:19,pic:"/images/washing2.avif",price:"$149.00",title:"Best Deal Product"},
  {id:20,pic:"/images/vaccum1.avif",price:"$132.00",title:"Best Deal Product"},
  {id:21,pic:"/images/dispenser1.avif",price:"$164.00",title:"Best Deal Product"},
  {id:22,pic:"/images/iron1.avif",price:"$173.00",title:"Best Deal Product"},
  {id:23,pic:"/images/phone1.webp",price:"$123.00",title:"Best Deal Product"},
  {id:24,pic:"/images/bud1.webp",price:"$500.00",title:"Best Deal Product"},
 ]

 document.write(`
    <div class="container mt-5 ">
  <div class="row" >
    
    `)


for(i=0;i<=card.length;i++){

    document.write(`
       <div class="col-md-6 col-sm-6 col-lg-3" >
    <div id="cardpic" class="card text-center" >
  <a href=""><img src="${card[i].pic}" class="card-img-top" alt="..."></a>
  <div class="card-body">
    <span style="color: white;">${card[i].price}</span>
    <h5 class="card-title" style="margin-top: -15px; color: white;">${card[i].title}</h5>
    
    <a href="../carddetail.html?id=${card[i].id}" id="bt">view detail</a>
  </div>
</div>
   </div>

        `)
        

}
document.write(`
     </div>
 </div>
    `)
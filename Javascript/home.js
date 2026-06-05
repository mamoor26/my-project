
let card=[
  {id:1,pic:"/images/cardpic1.webp",price:"$90.00",title:"Best Deal Product"},
  {id:2,pic:"/images/cardpic2.webp",price:"$78.00",title:"Best Deal Product"},
  {id:3,pic:"/images/cardpic3.webp",price:"$65.00",title:"Best Deal Product"},
  {id:4,pic:"/images/cardpic4.webp",price:"$55.00",title:"Best Deal Product"},
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
    
    <a href="carddetail.html?id=${card[i].id}" id="bt">view detail</a>
  </div>
</div>
   </div>

        `)
        

}
document.write(`
     </div>
 </div>
    `)
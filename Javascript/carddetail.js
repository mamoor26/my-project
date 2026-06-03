let card=[
  {id:1,pic:"../images/cardpic1.webp",price:"$90.00",title:"Best Deal Product"},
  {id:2,pic:"../images/cardpic2.webp",price:"$78.00",title:"Best Deal Product"},
  {id:3,pic:"../images/cardpic3.webp",price:"$65.00",title:"Best Deal Product"},
  {id:4,pic:"../images/cardpic4.webp",price:"$55.00",title:"Best Deal Product"}

 ]
   console.log(urlid)
 let urldata=new URLSearchParams(window.location.search)
 let urlid=urldata.get("id")

 let Product=card.find(item => item.id==urlid)
 document.write(`
  <div class="container">
        <div class="row">`)



 document.write(`
    
            <div class="col-md-6"><img src="${Product.pic}" alt=""></div>
            <div class="col-md-6"></div>
       
    `)
    document.write(`
       </div>
    </div>`)
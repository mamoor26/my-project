let card=[
  {id:1,pic:"../images/fan1.avif",price:"$90.00",title:"Best Deal Product"},
  {id:2,pic:"../images/cardpic2.webp",price:"$78.00",title:"Best Deal Product"},
  {id:3,pic:"../images/cardpic3.webp",price:"$65.00",title:"Best Deal Product"},
  {id:4,pic:"../images/cardpic4.webp",price:"$55.00",title:"Best Deal Product"}

 ]
   
 let urldata=new URLSearchParams(window.location.search);
 let urlid=urldata.get("id")

 let Product=card.find(item => item.id==urlid)

 


document.getElementById("pic").src = Product.pic;
document.getElementById("title").innerText=Product.title;
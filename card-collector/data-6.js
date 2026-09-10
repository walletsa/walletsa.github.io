(()=>{
const patch={
"icash-shin-001":{image:"https://i4.momoshop.com.tw/1772119799/goodsimg/0014/471/694/14471694_R1_m.webp",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=12570"},
"icash-shin-002":{image:"https://img.girlstalk.cc/images/iza/%E9%98%BF%E5%91%86%E6%8B%89%E7%B9%A9%E5%A8%83%E5%A8%83_%E6%96%B0%E5%8D%A1%E5%85%A7%E9%A0%81_932x740.jpg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=12335"},
"icash-shin-003":{image:"https://bucket-image.inkmaginecms.com/4/image/2025/02/8d755991-5cae-49e8-ad23-1e3ec1721eb3.jpg",imageSource:"正確商品合圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=12270"},
"icash-shin-004":{image:"https://bucket-image.inkmaginecms.com/4/image/2025/02/8d755991-5cae-49e8-ad23-1e3ec1721eb3.jpg",imageSource:"正確商品合圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=12270"},
"icash-shin-006":{image:"https://i.beauty321.com/600x/https%3A/il.beauty321.com/gallery/gallery/62327/photo-6670ee8c5b16e.jpg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=11906"},
"icash-shin-012":{image:"https://img.91app.com/webapi/imagesV3/Original/SalePage/9195773/0/639105984376830000?v=1",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=11525"},
"icash-shin-013":{image:"https://img.pchome.com.tw/cs/items/DEAS93A900ITVRF/000001_1747389358.jpg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=11525"},
"icash-shin-014":{image:"https://shopping.line-scdn.net/0h0Wq4eTIEb3hMTXwEuCIQLxQQcwkkOzZvM3V1WjsILxo6fG1SK0hldSI2MiBidWlSLFR8YhsmeikHPG5RKEAhfw8tbR0EfGFGK0whdRwqcSBiAWNFc3lmZTUXOTQR",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=11525"},
"icash-shin-015":{image:"https://www.niusnews.com/upload/imgs/default/2023_05Weiii/Crayon2/1.jpeg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/CardList?AspxAutoDetectCookieSupport=1&type=10&year=2023"},
"easy-shin-extra-giant-001":{image:"https://down-tw.img.susercontent.com/file/tw-11134207-7r98u-lx920mccg0fk92",imageSource:"正確商品實拍",verified:"verified"},
"icash-shin-extra-001":{image:"https://photo.s3.com.tw/look/Upload/BlogArticleImages/2024030110465000.jpg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=11758"},
"icash-shin-extra-002":{image:"https://img.chilling.tw/images/author/Ivy/003%20-%202023-10-12T160337_136.jpg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=11551"},
"icash-shin-extra-003":{image:"https://www.niusnews.com/upload/imgs/default/202301_Jennie/0118icash/02.jpeg",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=11218"},
"icash-shin-extra-004":{image:"https://down-tw.img.susercontent.com/file/tw-11134207-7r98v-lmy7r3xm1j8b8f",imageSource:"正確商品圖",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?AspxAutoDetectCookieSupport=1&ID=11048"},
"icash-shin-extra-006":{image:"https://media.karousell.com/media/photos/products/2023/6/16/_icash20__711__1686929695_fce92b74_progressive.jpg",imageSource:"正確商品實拍",verified:"verified"},
"icash-shin-extra-007":{image:"https://i.imgur.com/tdwxab3.jpg",imageSource:"正確商品實拍",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=10135"},
"icash-shin-extra-008":{image:"https://i.imgur.com/bBagxvA.jpg",imageSource:"正確商品實拍",verified:"verified",source:"https://www.icash.com.tw/Home/NewsDetail/?ID=10135"}
};
const clearIds=["icash-shin-005","icash-shin-016","icash-shin-017","icash-shin-018","icash-shin-019","icash-shin-020","icash-shin-021","icash-shin-022","icash-shin-023","icash-shin-024"];
(window.CARD_DATA||[]).forEach(x=>{
  if(patch[x.id]) Object.assign(x,patch[x.id]);
  if(clearIds.includes(x.id)){x.image="";x.imageSource="待補正確圖片";x.verified="partial";}
});
})();
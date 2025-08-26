const data = [
  {
    title: "Ерөнхий сайд Г.Занданшатар КОЙКА-ын ерөнхийлөгчтэй уулзсангүй",
    text: `Монгол Улсын Ерөнхий сайд Г.Занданшатар манай улсад айлчилж буй
                БНСУ-ын Олон улсын хамтын ажиллагааны байгууллага (КОЙКА)-ын
                Ерөнхийлөгч Чан Вон Самтай уулзаж, хоёр талын хамтын ажиллагааны
                талаар санал солилцов.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/08/-26082025-1756171803-1242587371-oyQRbjRqhYaRpziTXxZV.jpg",
    genre: "politics",
  },
  {
    title:
      "Г.Төмөрзаяа: Хүүхдэдээ хааяа зүгээр суух, уйдах, алдах боломж олгож байгаарай",
    text: `Хичээлийн шинэ жил эхлэхэд цөөн хоног үлдлээ. Энэ цаг мөчид дүрэмт хувцас, ном, дэвтрээс эхлээд бэлтгэх, базаах зүйл бишгүй тул эцэг, эхчүүд төдий сурагчид ч бужигнасан өдрүүдийг өнгөрүүлж буй болов уу.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2022/02/-10022022-1644488451-330897989-Tumurzaya2-165547-6891419671.jpeg",
    genre: "sports",
  },
  {
    title:
      "Ирэх сараас түүхий нүүрсний хэрэглээг зогсоож, баяжуулсан нүүрс хэрэглэнэ",
    text: `Нийслэлийн Засаг даргын 2025 оны наймдугаар сарын 1-ний өдрийн захирамжаар нийслэлд түүхий нүүрс хэрэглэхийг бүрэн зогсоож, ахуйн болон аж үйлдвэрлэлийн зориулалтаар баяжуулсан нүүрс хэрэглэх шийдвэр гаргалаа.`,
    imgUrl:
      "https://mongolia.gov.mn/storage/posts/August2025/viber_image_2025-08-25_18-38-12-016.jpg",
    genre: "politics",
  },
  {
    title:
      "Маршалын гүүрнээс “Централ тауэр” хүртэл явган хүний зам шинэчлэлийг IX сарын 1-нд дуусгана",
    text: `Маршалын гүүрнээс “Централ тауэр”-ын уулзвар хүртэлх баруун талын 3.7 км явган хүний замын шинэчлэлийн ажил 82 пайзтай үргэлжилж байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/08/334084-25082025-1756113071-1792768380-photo.JPG",
    genre: "sports",
  },
  {
    title:
      "Баруун болон зүүн аймгуудын нутгаар дуу цахилгаантай аадар бороо орж, сэрүүхэн байна",
    text: `Ихэнх нутгаар солигдмол үүлтэй. Баруун аймгуудын нутгийн баруун, төв болон говийн аймгуудын нутгийн зүүн хэсэг, зүүн аймгуудын нутгийн зарим газраар бороо, дуу цахилгаантай аадар бороо орж, сэрүүхэн байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/04/0N2A9807-194929-132573395320250804194949.jpeg",
    genre: "politics",
  },
  {
    title:
      "Үйлдвэрт болон өдөр тутмын амьдралд өргөн хүрээнд ‘бэлэн байдал’ уриалж байна",
    text: `Орон сууцад бусдад төвөг бололгүй тамхи татах хэсэг гэж байхгүй... дам тамхидалтад өртөх нь нийтийн орон сууцны хор гэдгийг сануулж байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/25/Screenshot_2025-08-23_160627-161130-1070011717.jpeg",
    genre: "sports",
  },
  {
    title:
      "Монголын Эдийн Засгийн Форум 2025-ын хүрээнд нээлттэй мэдээлэл хийв",
    text: `16 дахь жилдээ зохион байгуулагдаж буй Монголын Эдийн Засгийн Форум нь Монгол Улсын Засгийн газар, аж ахуйн нэгж, иргэд болон олон улсын хөрөнгө оруулагчидтай уулзан хотност, үр ашигтай төсөл хөтөлбөрүүдийг танилцуулах зорилготой.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/25/belcheer-161156-494597799.jpeg",
    genre: "politics",
  },
];
const politicsBtn = document.getElementById("politics-btn");
politicsBtn.addEventListener("click", () => {
  const politicPosts = data.filter((post) => post.genre == "politics");
  document.getElementById("app").innerHTML = "";
  renderPost(politicPosts);
});

const sportsBtn = document.getElementById("sports-btn");
sportsBtn.addEventListener("click", () => {
  const sportsPost = data.filter((post) => post.genre == "sports");
  document.getElementById("app").innerHTML = "";
  renderPost(sportsPost);
});

function renderPost(postObjects) {
  const postsDiv = document.createElement("div");
  postsDiv.setAttribute("class", "cards");

  for (const postObject of postObjects) {
    const postDiv = document.createElement("div");
    postDiv.setAttribute("class", "card");
    const postImg = document.createElement("img");
    postImg.setAttribute("src", postObject.imgUrl);
    postImg.setAttribute("class", "postImg");
    const postDetail = document.createElement("div");
    const h2Title = document.createElement("h2");
    h2Title.setAttribute("class", "title");
    h2Title.innerText = postObject.title;
    const pDesk = document.createElement("p");
    pDesk.setAttribute("class", "text");
    pDesk.innerText = postObject.text;
    postDetail.appendChild(h2Title);
    postDetail.appendChild(pDesk);
    postDiv.appendChild(postImg);
    postDiv.appendChild(postDetail);
    postsDiv.appendChild(postDiv);
  }
  document.getElementById("app").appendChild(postsDiv);
}

renderPost();

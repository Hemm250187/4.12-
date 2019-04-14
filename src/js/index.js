const banner = new Swiper(".banner,.list", {
    autoplay: true,
    loop: true,
    click: true,
    pagination: {
        el: ".swiper-pagination"
    }
})

const list = [...document.querySelectorAll(".list2")];
const img = ["icon-01", "icon-09", "icon-06", "icon-08", "icon-02"]
const data = Mock.mock({
    "titie|10": [{
        "img|+1": img,
        "name": "@ctitle(3)"
    }]
})
let dls = "";
data.titie.forEach(item => {
    dls += `<dl>
    <dt><i class="iconfont ${item.img}"></i></dt>
    <dd>${item.name}</dd>
</dl>`
})
list.forEach(file => {
    file.innerHTML = dls
})

axios.get("/api").then(res => {
    if (res.data.code == 0) {
        alert(res.data.msg)
    }
})
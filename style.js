const collectionModal =
    document.getElementById("CollectionModal");

const collectionClose =
    document.getElementById("CollectionClose");

const collectionModalBox =
    document.querySelector(".CollectionModalBox");

const collectionModalTitle =
    document.getElementById("CollectionModalTitle");

const collectionGallery =
    document.getElementById("CollectionGallery");

const collectionCards =
    document.querySelectorAll(".CollectionCard");


const collectionData = {

    digital:{
        title:"數位遊戲",

        media:[
            {
                type:"youtube",
                src:"https://youtu.be/tqHDfmyAUww",
                title:"Darkness Opera"
            },

            {
                type:"image",
                src:"./assets/work/數位遊戲/photo_DarknessOpera01.png",
                title:"Darkness Opera 場景建置"
            },

            {
                type:"image",
                src:"./assets/work/數位遊戲/photo_DarknessOpera02.png",
                title:"Darkness Opera 燈效建置"
            },

            {
                type:"image",
                src:"./assets/work/數位遊戲/photo_DarknessOpera03.png",
                title:"Darkness Opera 燈效建置"
            },

            {
                type:"image",
                src:"./assets/work/數位遊戲/photo_DarknessOpera04.png",
                title:"Darkness Opera 人物動態"
            },

            {
                type:"youtube",
                src:"https://youtu.be/nrSEujO8eMo",
                title:"蝴蝶消消消"
            },

            {
                type:"youtube",
                src:"https://youtu.be/N2pYKF6z2VM",
                title:"360 場景碰撞與遮罩練習"
            },

            {
                type:"youtube",
                src:"https://youtu.be/IzfFd5o6RQY",
                title:"跳跳闖小關"
            },

            {
                type:"youtube",
                src:"https://youtu.be/00xKQIkiZA4",
                title:"跳跳板練習"
            },

            {
                type:"image",
                src:"./assets/work/數位遊戲/photo_PCG場景設置03.png",
                title:"PCG場景設置練習"
            },
        ]
    },


    boardgame:{
        title:"實體遊戲",

        media:[
            {
                type:"youtube",
                src:"https://youtu.be/Iu0oEmscBi4",
                title:"百家爭明:夜市奪鋪戰"
            },

            {
                type:"youtube",
                src:"https://youtu.be/wwNjxqDnbug",
                title:"百家爭明:夜市奪鋪戰 測試"
            },

            {
                type:"image",
                src:"./assets/work/實體遊戲/photo_百家爭明桌遊_設計.png",
                title:"百家爭明:夜市奪鋪戰 設計"
            },

            {
                type:"image",
                src:"./assets/work/實體遊戲/photo_百家爭明桌遊_施工.png",
                title:"百家爭明:夜市奪鋪戰 施工"
            },

            {
                type:"image",
                src:"./assets/work/實體遊戲/photo_百家爭明桌遊_成品00.jpg",
                title:"百家爭明:夜市奪鋪戰 成品",
                fit:"contain"
            }
        ]
    },

    interactive:{
        title:"互動系統",

        media:[
            {
                type:"youtube",
                src:"https://youtu.be/yjhtHv-y3pU",
                title:"鳥鳴學習系統"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_鳥鳴學習系統研究流程.png",
                title:"鳥鳴學習系統 研究流程"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_鳥鳴學習系統視覺設計.png",
                title:"鳥鳴學習系統 視覺設計"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_鳥鳴學習系統介面呈現.png",
                title:"鳥鳴學習系統 介面呈現"
            },

            {
                type:"youtube",
                src:"https://youtu.be/Nb7Nw4PNfIk",
                title:"Missing Cat TD練習"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_APP概念實景化01.png",
                title:"追星APP概念實景化 VibeCoding"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_APP概念實景化02.png",
                title:"追星APP概念實景化 VibeCoding"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_APP概念實景化03.png",
                title:"追星APP概念實景化 VibeCoding"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_APP概念實景化04.png",
                title:"跨平台點單實景化 VibeCoding"
            },

            {
                type:"image",
                src:"./assets/work/互動系統/photo_APP概念實景化05.png",
                title:"跨平台點單實景化 VibeCoding"
            }
        ]
    },

    video:{
        title:"影音剪輯",

        media:[
            {
                type:"youtube",
                src:"https://youtu.be/-NbW2Zpxgjo",
                title:"IVE Kitsch 空耳隊員應援版"
            },

            {
                type:"youtube",
                src:"https://youtu.be/nJ_SEHnbfXc",
                title:"惡靈古堡8預告 影音剪輯"
            },

            {
                type:"youtube",
                src:"https://youtu.be/sUsO2qbwSRI",
                title:"惡搞字幕 影音剪輯"
            },

            {
                type:"youtube",
                src:"https://youtu.be/H_fR3UlOHyw",
                title:"Pr素材 影音剪輯"
            }
        ]
    },

    exhibition:{
        title:"虛擬展間",

        media:[
            {
                type:"youtube",
                src:"https://youtu.be/jSLseRZ7X58",
                title:"殘響劇院 虛擬展間"
            },

            {
                type:"image",
                src:"./assets/work/展場設計/photo_長榮藝廊虛擬展間01.png",
                title:"長榮藝廊 虛擬展間",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/展場設計/photo_殘響劇院虛擬展間01.png",
                title:"殘響劇院 虛擬展間",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/展場設計/photo_殘響劇院虛擬展間03.png",
                title:"殘響劇院 虛擬展間"
            },

            {
                type:"image",
                src:"./assets/work/展場設計/photo_幻生紀元虛擬展間01.png",
                title:"幻生紀元 虛擬展間"
            }
        ]
    },

    graphic:{
        title:"平面設計",

        media:[
            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計01.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計02.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計03.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計06.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計07.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計08.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_DM設計09.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_永安專案_02.png",
                title:"DM 設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_榜單設計01.png",
                title:"榜單設計",
                fit:"contain"
            },

            {
                type:"image",
                src:"./assets/work/平面設計/photo_樂齡大學.png",
                title:"DM 設計",
                fit:"contain"
            }
        ]
    }

};



function getYouTubeId(url){

    if(!url){
        return "";
    }

    const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&/]+)/
    );

    return match ? match[1] : "";
}



function renderCollectionMedia(mediaList){

    collectionGallery.innerHTML = "";

    mediaList.forEach(function(item){

        const mediaBox =
            document.createElement("div");

        mediaBox.className =
            "CollectionMedia";


        if(item.type === "image"){

            mediaBox.innerHTML = `
                <img
                    src="${item.src}"
                    alt="${item.title}"
                    class="CollectionMediaVisual ${item.fit === "contain" ? "is-contain" : ""}"
                >

                <div class="CollectionMediaTitle">
                    ${item.title}
                </div>
            `;

        }


        if(item.type === "youtube"){

            const videoId =
                getYouTubeId(item.src);


            if(videoId){

                mediaBox.innerHTML = `
                    <iframe
                        class="CollectionMediaVisual ${item.fit === "contain" ? "is-contain" : ""}"
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1"
                        title="${item.title}"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <div class="CollectionMediaTitle">
                        ${item.title}
                    </div>
                `;

            }else{

                mediaBox.innerHTML = `
                    <div class="CollectionMediaPlaceholder">
                        待補 YouTube 連結
                    </div>

                    <div class="CollectionMediaTitle">
                        ${item.title}
                    </div>
                `;

            }

        }


        collectionGallery.appendChild(mediaBox);

    });

}



collectionCards.forEach(function(card){

    card.addEventListener("click", function(){

        const category =
            card.dataset.category;

        const data =
            collectionData[category];


        card.classList.add("is-flipping");


        setTimeout(function(){

            collectionModalTitle.textContent =
                data.title;

            renderCollectionMedia(
                data.media
            );

            /* 每次打開新的分類，都從最上面開始 */
            collectionModalBox.scrollTop = 0;

            /* 鎖住後面的網站 */
            document.body.style.overflow = "hidden";

            collectionModal.classList.add(
                "is-open"
            );

        }, 20);


        setTimeout(function(){

            card.classList.remove(
                "is-flipping"
            );

        }, 700);

    });

});

/* 點右上角叉叉關閉 */
collectionClose.addEventListener(
    "click",
    function(){

        collectionModal.classList.remove(
            "is-open"
        );

        document.body.style.overflow = "";

    }
);

/* 點作品框外面的空白處關閉 */
collectionModal.addEventListener(
    "click",
    function(event){

        if(event.target === collectionModal){

            collectionModal.classList.remove(
                "is-open"
            );

            document.body.style.overflow = "";

        }

    }
);

/* =========================
   Header 目前區塊判定
========================= */

const mainNavLinks =
    document.querySelectorAll(".MainNav a");

const pageSections = [
    document.getElementById("HeroPage"),
    document.getElementById("AboutMe"),
    document.getElementById("Collection"),
    document.getElementById("ContactMe")
];


function updateActiveHeader(){

    const scrollTop =
        window.scrollY;

    const windowHeight =
        window.innerHeight;

    const documentHeight =
        document.documentElement.scrollHeight;

    const distanceFromBottom =
        documentHeight - (scrollTop + windowHeight);


    let currentSection =
        pageSections[0];


    /*
        接近最下面時，
        固定判定成 Contact Me。

        這樣滑到底後只稍微往上一點，
        指針不會突然跳回 Collection。
    */
    if(distanceFromBottom <= 150){

        currentSection =
            document.getElementById("ContactMe");

    }else{

        /*
            用畫面上方約 35% 的位置，
            判斷目前在哪一區。
        */
        const checkPoint =
            scrollTop + windowHeight * 0.35;


        pageSections.forEach(function(section){

            if(
                section &&
                section.offsetTop <= checkPoint
            ){

                currentSection =
                    section;
            }

        });

    }


    mainNavLinks.forEach(function(link){

        link.classList.remove(
            "is-active"
        );

        if(
            link.dataset.section ===
            currentSection.id
        ){

            link.classList.add(
                "is-active"
            );

        }

    });

}


/* 一進網站先判斷一次 */
updateActiveHeader();
/* 滑動時更新 */
window.addEventListener(
    "scroll",
    updateActiveHeader,
    { passive: true }
);
/* 視窗尺寸改變時重新判斷 */
window.addEventListener(
    "resize",
    updateActiveHeader
);
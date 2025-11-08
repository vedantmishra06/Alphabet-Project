const alphabetImages = {
    A: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80",
    B: "https://m.media-amazon.com/images/I/81S+7h513XL.jpg",
    C: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg",
    D: "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg",
    E: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1Rip_tucG1qxA9wf1xstic0ifiO4sriPfA&s",
    F: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq00uXqOWNZb9Hcc-i0DPZk7MRQRyzxNV-3g&s",
    G: "https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    H: "https://png.pngtree.com/png-vector/20240315/ourmid/pngtree-chicken-hen-png-image_11968770.png",
    I: "https://img.freepik.com/free-psd/delicious-pink-strawberry-ice-cream-cone_191095-78235.jpg?semt=ais_hybrid&w=740&q=80",
    J: "https://i.guim.co.uk/img/media/fbb1974c1ebbb6bf4c4beae0bb3d9cb93901953c/80_0_2400_1440/master/2400.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ede2b27f1cea7c3be30b938195c0cc5c",
    K: "https://i0.wp.com/patangdori.com/wp-content/uploads/2024/01/Premium-Multicolor-Bana-4.jpg?fit=1200%2C1200&ssl=1",
    L: "https://media.wired.com/photos/5cf5ab3ee2e491e5ae8ae0a9/4:3/w_1843,h_1382,c_limit/WI070119_FF_Lionking_01.jpg",
    M: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg",
    N: "https://childsplayabc.wordpress.com/wp-content/uploads/2020/06/img_20200604_153836_826.jpg?w=2000&h=1500&crop=1",
    O: "https://static.scientificamerican.com/sciam/cache/file/68A02F93-F3F9-40C1-8A157B9F77108A85_source.jpg?w=1200",
    P: "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
    Q: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqIN1kkvpXCk_MJP0mtas2Zd4urki3JZVkg&s",
    R: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOuLLWwC_ioS5zi2ZYs2gPbEinOu3tzCu6Q&s",
    S: "https://m.media-amazon.com/images/S/pv-target-images/45a69fab4fe42a259865416fd556e7a37e6957a4e0c8846035da05b0ce7324b0._SX1080_FMpng_.png",
    T: "https://png.pngtree.com/png-vector/20250320/ourmid/pngtree-classic-vintage-tv-clipart-old-school-television-png-image_15793935.png",
    U: "https://m.media-amazon.com/images/I/41aC5SdEmwS._AC_UY1100_.jpg",
    V: "https://img.freepik.com/free-vector/classic-old-van-isolated-white-background_1308-134094.jpg?semt=ais_hybrid&w=740&q=80",
    W: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4bcefb11/images/Sonata/Catalog/77105SM12W_1.jpg?sw=600&sh=600",
    X: "https://www.trinitychristmas.in/wp-content/uploads/2021/10/Grabd-FIr-01.jpg",
    Y: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sarlyk_Yak2.jpg/1200px-Sarlyk_Yak2.jpg",
    Z: "https://site-547756.mozfiles.com/files/547756/medium/Zebra2-1.jpg"
};

const grid = document.getElementById("alphabetGrid");

Object.keys(alphabetImages).forEach(letter => {
    const box = document.createElement("div");
    box.className = "letter-box";
    box.innerText = letter;
    box.onclick = () => showPopup(letter);
    grid.appendChild(box);
});

function showPopup(letter) {
    document.getElementById("popupTitle").innerText = `${letter} for ${getWord(letter)}`;
    document.getElementById("popupImage").src = alphabetImages[letter];
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function getWord(letter) {
    const words = {
        A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Elephant",
        F: "Fish", G: "Goat", H: "Hen", I: "Ice Cream", J: "Joker",
        K: "Kite", L: "Lion", M: "Mango", N: "Nest", O: "Orange",
        P: "Parrot", Q: "Queen", R: "Rose", S: "Ship", T: "Television",
        U: "Umbrella", V: "Van", W: "Watch", X: "X-mas Tree", Y: "Yak", Z: "Zebra"
    };
    return words[letter];
}

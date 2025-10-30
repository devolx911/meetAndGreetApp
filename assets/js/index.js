const celebContainer = document.getElementById("celeb-container");

const celeb = [
    {
        id: "iofretofijdfg",
        photo: "assets/images/Jonny Depp.jpg",
        name: "Jonny Depp",
        role: "Actor",
        price: 200
    },
    {
        id: "ojaptojjeratoit",
        photo: "assets/images/William Levy.jpg",
        name: "William Levy",
        role: "Singer",
        price: 200
    },
    {
        id: "ritpoeturejt",
        photo: "assets/images/Taylor kenny.jpg",
        name: "Taylor kenny",
        role: "Actor",
        price: 500
    },
    {
        id: "iofretofijdfg",
        photo: "assets/images/Jonny Depp.jpg",
        name: "Jonny Depp",
        role: "Actor",
        price: 200
    },
    {
        id: "ojaptojjeratoit",
        photo: "assets/images/William Levy.jpg",
        name: "William Levy",
        role: "Singer",
        price: 200
    },
    {
        id: "ritpoeturejt",
        photo: "assets/images/Taylor kenny.jpg",
        name: "Taylor kenny",
        role: "Actor",
        price: 500
    },
    {
        id: "iofretofijdfg",
        photo: "assets/images/Jonny Depp.jpg",
        name: "Jonny Depp",
        role: "Actor",
        price: 200
    },
    {
        id: "ojaptojjeratoit",
        photo: "assets/images/William Levy.jpg",
        name: "William Levy",
        role: "Singer",
        price: 200
    },
    {
        id: "ritpoeturejt",
        photo: "assets/images/Taylor kenny.jpg",
        name: "Taylor kenny",
        role: "Actor",
        price: 500
    },
    {
        id: "iofretofijdfg",
        photo: "assets/images/Jonny Depp.jpg",
        name: "Jonny Depp",
        role: "Actor",
        price: 200
    },
    {
        id: "ojaptojjeratoit",
        photo: "assets/images/William Levy.jpg",
        name: "William Levy",
        role: "Singer",
        price: 200
    },
    {
        id: "ritpoeturejt",
        photo: "assets/images/Taylor kenny.jpg",
        name: "Taylor kenny",
        role: "Actor",
        price: 500
    }
]

function displayCeleb(){
    return (celebContainer.innerHTML = celeb.map((x)=>{
        let {id,photo,name,role,price}=x;
        return`
                <div id=celeb-${id} class="celeb">
                    <img width="300" src="${photo}" alt="${name}">
                    <h2>${name}</h2>
                    <span>${role}</span>
                    <span>Starting $ ${price}</span>
                    <a href="https://t.me/MY_OLX" class="bookingBtn">Book Meet & Greet</a>
                </div>
        `
    }).join(" "))
}
displayCeleb()

const openBtn = document.getElementById("open-meanu");
const closeBtn = document.getElementById("close-meanu");
const navBar = document.querySelector("nav ul");

openBtn.addEventListener("click", function(){
    navBar.classList.add("open");
})
closeBtn.addEventListener("click", function(){
    navBar.classList.remove("open");
})
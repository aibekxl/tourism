var cities = [{
        id: 0,
        name: "Almaty",
        desc: "Almaty – is the largest city in Kazakhstan. It also used to be the former capital of the country, until 1997 when it moved to Astana.literally means city of apple trees, and, because of its relatively mild climate, it has a wide range of apple trees.   The city certainly has a spectacular beauty, whether or not it was the Garden of Eden, and is located in the foothills of  the Trans-Ili Alatau  in the extreme southeast of Kazakhstan.",
        price: 20000,
        img: "./images/Almaty.jpg",
    },
    {
        id: 1,
        name: "Nur-Sultan",
        desc: "Nur-Sultan (former Astana) – is the capital city of Kazakhstan since 1997. Convenient location in the center of the Eurasian continent makes the city an economically profitable transport, communication and logistics center, a kind of transit bridge between Europe and Asia.",
        price: 25000,
        img: "./images/Astana.png",
    },
    {
        id: 2,
        name: "Aktau",
        desc: "The Mangystau region is known for its truly space views. This is due to the fact that several million years ago these lands were hidden in the depths of the ancient Tethys Ocean, the waters of which, retreating, carved out caves and grottoes. If you are interested, then go on a trip with Explore Kazakhstan!",
        price: 40000,
        img: "./images/Aktau.jpeg",
    },
    {
        id: 3,
        name: "Shymkent",
        desc: "Shymkent is the second most populous city in Kazakhstan, and is also the administrative center of the South Kazakhstan region. The city is included in the state program “Cultural Heritage” as one of the objects for the study and preservation of historical monuments. Now Shymkent is a modern beautiful city. The city has theaters, restaurants, comfortable hotels, where guests and tourists of the city will be received with special oriental hospitality.",
        price: 25000,
        img: "./images/Shymkent.jpg",
    },
    {
        id: 4,
        name: "Taraz",
        desc: "Taraz is one of the oldest cities in Kazakhstan. It is credited with primacy in many ways: the first metropolis, the first mosque built in Kazakhstan, the first madrasah. During the tour you will see beautiful lakes, canyons, mountains, steppes and you will try Kazakh traditional food and enjoy nomadic atmosphere!",
        price: 25000,
        img: "./images/Taraz.jpg",
    },
    {
        id: 5,
        name: "Turkestan",
        desc: "Turkestan region is one of the most rapidly developing regions in Kazakhstan. Turkestan is the spiritual capital of the Turkic world and this region is rich in historical and cultural objects, such as: Mausoleum of H.A. Yassaui, Mausoleum of Arystan-baba, Ukash-ata and much more.",
        price: 15000,
        img: "./images/Turkistan.jpg",
    },
    {
        id: 6,
        name: "Borovoe",
        desc: "Burabay National Park is situated a bit north of Astana and is often referred to as the 'Switzerland of Kazakhstan'. This is a travel guide to Borovoe, Shchuchie, and Chebache lakes in Burabay National Park, discussing how to visit from Astana and where to stay when you do.",
        price: 20000,
        img: "./images/Borovoe.jpg",
    },
    {
        id: 7,
        name: "Almaty region",
        desc: "Canyon Charyn is located on the territory of the Charyn National Park, created with the purpose of preserving natural and geological objects. The National Park was established on February 23, 2004. On the territory of the park there is a large number of rare and endangered species of animals listed in the Red Book.The most famous attraction of the park is Canyon Charyn. It is a picturesque natural place, which strikes with its unearthly landscapes. The depth of the canyon is 200 m. The height of the sheer mountains of the canyon reaches 150-300 m.",
        price: 15000,
        img: "./images/Charyn.jpg",
    },
    {
        id: 8,
        name: "Karaganda",
        desc: "The city of Karaganda is an industrial center, an important railway and air routes, the city of high science and culture, a lively point of many tourist routes. In economic, scientific and cultural potential of Karaganda takes one of the leading places in Kazakhstan, which has 471.8 thousand people and representatives of more than 113 nationalities.",
        price: 50000,
        img: "./images/Karkaraly.jpg",
    },
];

for (let i = 0; i < cities.length; i++) {
    let cities_res =
        '<div class="frame"><img src="' +
        cities[i].img +
        '" alt="" class="banner-img"> <div class = "details"><h1>' +
        cities[i].name +
        '</h1> <p>' +
        cities[i].desc +
        '</p><br> <a class = "banner-link" href = "tours.html" > from ' +
        cities[i].price +
        ' tg </a> </div><div class = "details-mob"><h1>' +
        cities[i].name +
        '</h1> <p>' +
        cities[i].desc +
        '</p><br> <a class = "banner-link" href = "tours.html" > from ' +
        cities[i].price +
        ' tg </a> </div></div>';
    document.getElementById("cities_res").innerHTML += cities_res;
}

let scroll = document.getElementById("banner");
setInterval(function () {
    scroll.scrollLeft += scroll.scrollWidth / cities.length;
}, 3000);
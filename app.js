let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

// let item = "";

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");
// let btn6 = document.getElementById("btn6");

// btn1.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 1!");
//         item = "1";
//         tg.MainButton.show();
//     }
// });

// btn2.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 2!");
//         item = "2";
//         tg.MainButton.show();
//     }
// });

// btn3.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 3!");
//         item = "3";
//         tg.MainButton.show();
//     }
// });

// btn4.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 4!");
//         item = "4";
//         tg.MainButton.show();
//     }
// });

// btn5.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 5!");
//         item = "5";
//         tg.MainButton.show();
//     }
// });

// btn6.addEventListener("click", function () {
//     if (tg.MainButton.isVisible) {
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали товар 6!");
//         item = "6";
//         tg.MainButton.show();
//     }
// });


// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//     tg.sendData(item);
// });

// let usercard = document.getElementById("usercard");


// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;


// usercard.appendChild(p);
professions = [
    {
        "id": "0618107e-46b0-4641-bc49-c80dd9987387",
        "title": "Legal"
    },
    {
        "id": "9d123dba-5038-422d-85ee-df2da824ec9e",
        "title": "Finance"
    },
    {
        "id": "c5cb9ea8-b37c-42cc-ac10-fda92c1d463c",
        "title": "Administration & Office Support"
    },
    {
        "id": "949956f6-0bdd-41bc-947f-1b1ca8ce05bc",
        "title": "Hospitality & Restaurant"
    },
    {
        "id": "841888e0-c91f-494e-b262-fcbf6cf34a69",
        "title": "HR & Recruitment"
    },
    {
        "id": "9fd50e4f-8417-49e6-97c4-87b6af70b764",
        "title": "(Tech) Project/Product Management"
    },
    {
        "id": "b10ce5cb-5e3c-4384-b68f-8907640e52a3",
        "title": "Sales & Business Development"
    },
    {
        "id": "c6752272-4a18-4c2b-8f3a-8e8b38c0361c",
        "title": "Software Engineering"
    },
    {
        "id": "8c7262ef-dc94-4ea4-917c-ffc238f411f3",
        "title": "Data & Analytics"
    },
    {
        "id": "abb164d3-80bc-4630-b32e-820777c23707",
        "title": "IT & Sysadmin"
    }
]

cardsData = [
    {
        'name': 'Burger',
        'emoji': '🍔',
        'price': 5,
    },
    {
        'name': 'Fries',
        'emoji': '🍟',
        'price': 2,
    },
    {
        'name': 'Drink',
        'emoji': '🥤',
        'price': 1,
    },
    {
        'name': 'Salad',
        'emoji': '🥗',
        'price': 3,
    },
    {
        'name': 'Pizza',
        'emoji': '🍕',
        'price': 4,
    },
    {
        'name': 'Sandwich',
        'emoji': '🥪',
        'price': 3,
    },
    {
        'name': 'Hot Dog',
        'emoji': '🌭',
        'price': 2,
    },
    {
        'name': 'Ice Cream',
        'emoji': '🍦',
        'price': 2,
    },
    {
        'name': 'Cake',
        'emoji': '🍰',
        'price': 3,
    },
    {
        'name': 'Donut',
        'emoji': '🍩',
        'price': 1,
    },
    {
        'name': 'Cupcake',
        'emoji': '🧁',
        'price': 1,
    },
    {
        'name': 'Cookie',
        'emoji': '🍪',
        'price': 1,
    },
    {
        'name': 'Sushi',
        'emoji': '🍣',
        'price': 4,
    },
    {
        'name': 'Noodles',
        'emoji': '🍜',
        'price': 3,
    },
    {
        'name': 'Steak',
        'emoji': '🥩',
        'price': 5,
    },
];

let cards = document.getElementById("cards");

let emoji = '👨‍💻';

const renderCards = (cards) => {

    const templatedCards = cards.map((card, index) =>
        `
        <div class="item">
         <span>${emoji}</span>
         <span>${card.title}</span>  
      </div>
      `
    )
    return templatedCards;
}
{/* <button class="btn" data-cardId=${index} id="btn${index}">Add</button> */}

cards.innerHTML = renderCards(professions).join``

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

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
         <span class="emoji">${emoji}</span>
         <span class="title">${card.title}</span>  
      </div>
      `
    )
    return templatedCards;
}
{/* <button class="btn" data-cardId=${index} id="btn${index}">Add</button> */ }

cards.innerHTML = renderCards(professions).join``

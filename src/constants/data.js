import images from "./images";

const nav_link = [
    {
        title: "Welcome",
        href: "#welcome"
    },
    {
        title: "Our Menu",
        href: "#menu"
    },
    {
        title: "Franchise",
        href: "#franchise"
    },
    {
        title: "Contact",
        href: "#contact"
    }
]

const menu_options = [
    "all", "bread", "chiffon & rolls", "donut",
    "pastry & danish", "cakes", "cookies"
]

const menu_items = [
    {
        name: "Naan Burger",
        image: images.menu1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$1.85"
    },
    {
        name: "Butter Chicken Taco",
        image: images.menu2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$1.15"
    },
    {
        name: "Chicken Burger",
        image: images.menu3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$2.00"
    },
    {
        name: "Cheese Chicken Naan",
        image: images.menu4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$2.50"
    },
    {
        name: "3 Layer Burger",
        image: images.menu5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$4.99"
    },
    {
        name: "Sandwich",
        image: images.menu6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "$2.80"
    }
]

const countdown = [
    {
        title: "Happy Customers",
        value: "2M+"
    },
    {
        title: "Customer Satisfaction",
        value: "98%"
    },
    {
        title: "Our Branches",
        value: "20+"
    },
    {
        title: "Total Employees",
        value: "100+"
    }
]

const clients = [
    {
        name: "Michael Gunn",
        image: images.client1,
        job: "Head of sales at Tesla",
        rating: 5,
        review: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
    },
    {
        name: "Aleena White",
        image: images.client2,
        job: "Accountant of  Ozone",
        rating: 4,
        review: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
    },
    {
        name: "Cries Lee",
        image: images.client3,
        job: "CEO of Montee",
        rating: 5,
        review: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
    }
]

const footer = [
    {
        title: "Our Products",
        lists: ["Our Menus", "Our Burgers", "Our times sides", "Our naandwiches"]
    },
    {
        title: "Legal Information",
        lists: ["Legal Notice"]
    },
    {
        title: "Contact Us",
        lists: ["Contacts", "Our Addresses", "Become a Time Square franchise"]
    },
    {
        title: "We accept",
        lists: [images.mastercard, images.visa, images.amex]
    }
]

export default {
    nav_link,
    menu_options,
    menu_items,
    countdown,
    clients,
    footer
}
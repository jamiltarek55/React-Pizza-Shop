const pizzas = [
    {
    name: "Pizza Margarita",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 120,
        "medium": 230,
        "large": 430
     }
  ],
  catagory: "veg",
  image: "https://media.istockphoto.com/photos/pizza-margerita-picture-id97519987",
  description: "Pizza Margarita or Margherita with Cherry Tomatoes, Mozzarella Cheese and Tomato Sauce Isolated on White Background. Traditional Italian Whole Yeasted Flatbread on Wooden Plate Baked in Oven Close Up"
  },
  { name: "Cheese N Corn Pizza",
  varients: [
    "small",
    "medium",
    "large"
],
prices: [
   {
      "small": 200,
      "medium": 360,
      "large": 550
   }
],
catagory: "veg",
image: "https://images.pexels.com/photos/6493111/pexels-photo-6493111.jpeg?cs=srgb&dl=pexels-piotr-arnoldes-6493111.jpg&fm=jpg",
description: "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza."
},
{
    name: "BBQ Meat Pizza",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 170,
        "medium": 350,
        "large": 450
     }
  ],
  catagory: "nonveg",
  image: "https://i.ibb.co/5RKJzsz/bbq.jpg",
  description: "Bbq Meat Pizza with Beef, Pork, Lamb, Figs. Yeasted Flatbread Topped with Sliced Barbecue Meats such as Veal, Mutton, Tomato Sauce and Cheese  "
},
{
    name: "Isolated pizza",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 200,
        "medium": 250,
        "large": 300
     }
  ],
  catagory: "nonveg",
  image: "https://previews.123rf.com/images/hihitetlin/hihitetlin2104/hihitetlin210400157/167325485-isolated-pizza-with-meat-and-vegetables-on-white.jpg",
  description: "Isolated pizza with meat and vegetables on white"
},
{
    name: "Italian pizza",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 150,
        "medium": 250,
        "large": 360
     }
  ],
  catagory: "veg",
  image: "https://previews.123rf.com/images/foodandmore/foodandmore1611/foodandmore161100050/65413037-pizza-italienne-au-four-garnie-de-feuilles-de-roquette-fra%C3%AEches-mozzarella-fondue-et-la-tomate-sur-u.jpg",
  description: "Pizza top view on grey background. Delicious pizza topped with rocket baked crust, fresh ingredients and melted red leaves. Appetizer for mediterranean food restaurant. Italian pizza oven baked with melted butter, mozzarella cheese, tomato basil leaves and herb."
},
{
    name: "Veg Extravaganza Pizza",
    "varients": [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 190,
        "medium": 280,
        "large": 395
     }
  ],
  catagory: "veg",
  image: "https://i.ibb.co/7Q8LRC4/pizza-veg-extravagenza-pizza-veg-extravagenza-800x800-1-600x600.jpg",
  description: "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms Rashers"
},
{
    name: "Mexican Green Wave",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 190,
        "medium": 270,
        "large": 600
     }
  ],
  catagory: "veg",
  image: "https://shop.2yodoindia.com/wp-content/uploads/2020/08/sxdxdx.jpg",
  description: "A pizza loaded with crunchy onions, crisp capsicum with a liberal sprinkling of exotic Mexican herbs."
},
{
   name: "Fresh Veggie Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 200,
       "medium": 250,
       "large": 300
    }
 ],
 catagory: "veg",
 image: "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/garden-fresh-veggie-pizza-recipe.jpg",
 description: "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it."
},
{
    name: "Deluxe Veggie",
    varients: [
      "small",
      "medium",
      "large"
  ],
  prices: [
     {
        "small": 140,
        "medium": 320,
        "large": 450
     }
  ],
  catagory: "veg",
  image: "https://i.ibb.co/MV8r4Vg/delux-veg.jpg",
  description: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."
},
{
   name: "Veg Hawwain Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/SKJX7Rk/Hawaiian-1.png",
 description: "Cheese & Pineapple together to make it sweet and sour in taste with perfect oven bake."
}, 
{
   name: "Spicy Paneer Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/CB1xDhc/Cheese-Chilli-Paneer-Pizza.png",
 description: "Cheese, Fresh Onion, Jalepenos, Red Pepper & Fresh Paneer.The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."
},
{
   name: "Desi Paneer Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/r2t9MZc/maxresdefault-600x338.jpg",
 description: "Tandoori Sauce, Cheese, Fresh Onion, Green Chillies & Fresh Paneer"
},
{
   name: "Cheese & Tomato Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/3mVCWrX/1401292666543.jpg",
 description: "All time famous combination of Cheese and Tomato baked with fresh dough till perfection- with paneer and golden corn to top it all."
},
{
   name: "Spicy Paneer Pizza",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/CB1xDhc/Cheese-Chilli-Paneer-Pizza.png",
 description: "Cheese, Fresh Onion, Jalepenos, Red Pepper & Fresh Paneer.The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."
},
{
   name: "Pineapple Jalapeno",
   varients: [
     "small",
     "medium",
     "large"
 ],
 prices: [
    {
       "small": 140,
       "medium": 320,
       "large": 450
    }
 ],
 catagory: "veg",
 image: "https://i.ibb.co/RYcD3gB/New-Project3.jpg",
 description: "Cheese, Fresh Onion, Jalepenos, Red Pepper & Fresh Paneer Sweet and Tanzy combination of Pineapple and Jalapeno."
},  
];
export default pizzas;
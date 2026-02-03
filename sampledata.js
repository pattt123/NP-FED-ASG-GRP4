import { MenuItem } from "./lib/menuitem.js"
import { Order } from "./lib/order.js"
import { OrderItem } from "./lib/orderitem.js"
import { Stall } from "./lib/stall.js"
import { User } from "./lib/user.js"

/* Partially generated using Claude Sonnet 4.5*/

const stall0 = new Stall("894e7361-4ce1-453d-96c3-6f16573ea440", "Bob's Chicken Rice", "Best Chicken Rice in Singapore!", "https://unsplash.com/photos/a-plate-of-chicken-and-rice-with-sauce-i4Bq0H99i9k", [])
const menuitems0 = [
    new MenuItem("7bb7ec0c-51ab-4c76-aa7a-cd8cf4965a8a", stall0.id, "Steamed Chicken Rice", "Steamed chicken with fragrent rice", "https://unsplash.com/photos/a-close-up-of-a-plate-of-chicken-and-rice-d8k_3nI9g6o", 5),
    new MenuItem("4901828a-0428-4406-895a-ee02669d1d15", stall0.id, "Roast Chicken Rice", "Roasted chicken with fragrent rice", "https://unsplash.com/photos/a-plate-of-roasted-chicken-with-rice-and-vegetables-9_Yw9N7-f5A", 5),
    new MenuItem("0cf4541a-fd07-42ce-b8be-4bd4d6887e87", stall0.id,
        "Steamed Chicken Drumstick Rice", "Steamed chicken drumstick with fragrent rice", "https://unsplash.com/photos/a-plate-of-chicken-drumsticks-and-rice-with-a-sauce-Yj2Pq9gV5u0", 6),
    new MenuItem("0513c541-9ea6-482f-ba2a-18366c0100a4", stall0.id,
        "Roast Chicken Drumstick Rice", "Roasted chicken drumstick with fragrent rice", "https://unsplash.com/photos/a-plate-of-roasted-chicken-drumsticks-with-rice-and-vegetables-xJ8n2h4z6w0", 6),
]
stall0.menuitems = menuitems0
stall0.write()
const userS0 = new User("a0f9bf40-3f8a-40dd-904b-8364503201d4", "testuser", "testuser", "Bob", Date.UTC(2008, 1, 1), stall0.id)
userS0.write()
userS0.logIn()

const stall1 = new Stall("a1b2c3d4-e5f6-7890-1234-567890abcdef", "Satay Street", "Authentic charcoal-grilled satay with peanut sauce", "https://unsplash.com/photos/chicken-satay-with-a-side-of-pickled-vegetables-6P5wShC1sDI", [])
const menuitems1 = [
    new MenuItem("b1c2d3e4-f5a6-7890-1234-567890abcdef", stall1.id, "Chicken Satay", "Tender chicken skewers, grilled to perfection", "https://unsplash.com/photos/a-white-plate-topped-with-skewers-of-food-next-to-a-bowl-of-rice-Hk_1JZc7xMc", 0.80),
    new MenuItem("c2d3e4f5-a6b7-8901-2345-67890abcdef0", stall1.id, "Beef Satay", "Marinated beef skewers, smoky and flavourful", "https://unsplash.com/photos/meat-sizzling-on-a-hot-grill-with-steam-rising-oiS-Tjtemvs", 0.90),
    new MenuItem("d3e4f5a6-b7c8-9012-3456-7890abcdef01", stall1.id, "Mutton Satay", "Succulent mutton skewers, rich and aromatic", "https://unsplash.com/photos/man-grilling-meat-skewers-7iRdSsPbuEA", 1.00),
    new MenuItem("e4f5a6b7-c8d9-0123-4567-890abcdef012", stall1.id, "Peanut Sauce", "Rich and nutty peanut dipping sauce", "https://unsplash.com/photos/a-stack-of-rice-cakes-with-peanut-butter-on-top-MN3QFnbZEDY", 2.00),
]
stall1.menuitems = menuitems1
stall1.write()
const userS1 = new User("b0f9bf40-3f8a-40dd-904b-8364503201d4", "alice", "alice", "Alice", Date.UTC(2010, 5, 15), stall1.id)
userS1.write()

const stall2 = new Stall("f6e5d4c3-b2a1-0987-6543-210fedcba987", "Laksa Delight", "Creamy and spicy coconut noodle soup", "https://unsplash.com/photos/a-bowl-of-laksa-with-shrimp-and-noodles-l-U7c20aN40", [])
const menuitems2 = [
    new MenuItem("g7f6e5d4-c3b2-a109-8765-43210fedcba9", stall2.id, "Katong Laksa", "Traditional Katong laksa with thick vermicelli", "https://unsplash.com/photos/a-bowl-of-laksa-with-shrimp-and-noodles-l-U7c20aN40", 6.50),
    new MenuItem("h8g7f6e5-d4c3-b2a1-0987-6543210fedcb", stall2.id, "Prawn Laksa", "Laksa with fresh prawns and fish cake", "https://unsplash.com/photos/a-bowl-of-food-on-a-wooden-table-q-M54hVn7w0", 7.50),
    new MenuItem("i9h8g7f6-e5d4-c3b2-a109-876543210fed", stall2.id, "Chicken Laksa", "Laksa with tender shredded chicken", "https://unsplash.com/photos/a-bowl-of-chicken-laksa-with-a-lime-wedge-and-a-spoon-f2X9o-s_qY0", 6.00),
]
stall2.menuitems = menuitems2
stall2.write()
const userS2 = new User("c0f9bf40-3f8a-40dd-904b-8364503201d4", "tom", "tom", "Tom", Date.UTC(2012, 8, 20), stall2.id)
userS2.write()

const stall3 = new Stall("fedcba98-7654-3210-fedc-ba9876543210", "Hokkien Mee Master", "Wok-fried Hokkien Mee with rich prawn broth", "https://unsplash.com/photos/a-plate-of-noodles-with-shrimp-and-vegetables-R23v5K8_yv0", [])
const menuitems3 = [
    new MenuItem("fedcba98-7654-3210-fedc-ba9876543210", stall3.id, "Prawn Hokkien Mee", "Stir-fried yellow noodles and vermicelli with prawns", "https://unsplash.com/photos/a-plate-of-noodles-with-shrimp-and-vegetables-R23v5K8_yv0", 7.00),
    new MenuItem("12345678-90ab-cdef-1234-567890abcdef", stall3.id, "Hokkien Mee with Pork", "Hokkien Mee with sliced pork and crispy lard", "https://unsplash.com/photos/a-plate-of-noodles-with-pork-and-vegetables-v6x2Y0Z3P4s", 7.50),
    new MenuItem("abcdef01-2345-6789-0abc-def012345678", stall3.id, "Extra Lard", "Crispy pork lard for an extra crunch", "https://unsplash.com/photos/a-close-up-of-a-bowl-of-fried-pork-belly-with-sauce-Y8sK2P5_h8c", 1.00),
]
stall3.menuitems = menuitems3
stall3.write()
const userS3 = new User("d0f9bf40-3f8a-40dd-904b-8364503201d4", "tom", "tom", "Dick", Date.UTC(2015, 3, 10), stall3.id)
userS3.write()

const stall4 = new Stall("09876543-210f-edcb-a987-6543210fedcb", "Char Kway Teow King", "Smoky and flavourful stir-fried flat rice noodles", "https://unsplash.com/photos/a-plate-of-noodles-with-shrimp-and-vegetables-oQzL3bW2X0I", [])
const menuitems4 = [
    new MenuItem("10987654-3210-fedc-ba98-76543210fedc", stall4.id, "Classic Char Kway Teow", "Stir-fried flat rice noodles with cockles and lap cheong", "https://unsplash.com/photos/a-plate-of-noodles-and-chopsticks-on-a-table-Chriswu", 6.00),
    new MenuItem("210fedcb-a987-6543-210f-edcba9876543", stall4.id, "Special Char Kway Teow", "Larger portion with extra prawns and squid", "https://unsplash.com/photos/a-plate-of-noodles-with-shrimp-and-vegetables-W9r9Y4zG1b4", 8.00),
    new MenuItem("3210fedc-ba98-7654-3210-fedcba987654", stall4.id, "Duck Egg Char Kway Teow", "Char Kway Teow with richer duck egg flavour", "https://unsplash.com/photos/a-food-stall-and-a-scooter-in-taiwan-RaymondYeung", 7.00),
]
stall4.menuitems = menuitems4
stall4.write()
const userS4 = new User("e0f9bf40-3f8a-40dd-904b-8364503201d4", "tom", "tom", "Harry", Date.UTC(2018, 10, 5), stall4.id)
userS4.write()


const userC0 = new User("5eb791cb-67f9-424b-9e06-381424d6b4d9", "djt", "password", "Donald John Trump", Date.UTC(1946, 5, 14), undefined)
const userC1 = new User("6f8f302d-aadc-4a72-a29e-527ccd46372f", "x", "teslacybertruck", "Elon Reeve Musk", Date.UTC(1971, 5, 28), undefined)
const userC2 = new User("5edcd835-9bcb-4d37-a574-182300d0842d", "bush43", "invadeiraq", "George Bush", Date.UTC(1946, 7, 6), undefined)
const userC3 = new User("3ebaf849-3d6f-4528-a601-386bae966edd", "barack", "440917", "Barack Obama II", Date.UTC(1961, 8, 4), undefined)
const userC4 = new User("a9ceecb3-5b61-4377-8c6c-dd900d122665", "alex", "4gpa", "Alexander", Date.UTC(2008, 3, 4), undefined)
userC0.write()
userC1.write()
userC2.write()
userC3.write()
userC4.write()

const orderitems0_1 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 2),
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
]
const order0_1 = new Order("022ae056-d91a-4693-b146-b862f80fb214", "427-183", userC0.id, stall0.id, orderitems0_1, "No chili", "preparing")
order0_1.write()

const orderitems0_2 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 10),
    OrderItem.fromMenuItem(stall1.menuitems[2], 5),
    OrderItem.fromMenuItem(stall1.menuitems[3], 2),
]
const order0_2 = new Order("123ae056-d91a-4693-b146-b862f80fb215", "892-456", userC0.id, stall1.id, orderitems0_2, "Extra peanut sauce", "ready")
order0_2.write()

const orderitems0_3 = [
    OrderItem.fromMenuItem(stall4.menuitems[1], 2),
]
const order0_3 = new Order("234ae056-d91a-4693-b146-b862f80fb216", "305-721", userC0.id, stall4.id, orderitems0_3, "", "completed")
order0_3.write()

const orderitems0_4 = [
    OrderItem.fromMenuItem(stall2.menuitems[0], 1),
    OrderItem.fromMenuItem(stall2.menuitems[1], 1),
]
const order0_4 = new Order("345ae056-d91a-4693-b146-b862f80fb217", "614-239", userC0.id, stall2.id, orderitems0_4, "Less spicy", "received")
order0_4.write()

const orderitems1_1 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 3),
]
const order1_1 = new Order("456ae056-d91a-4693-b146-b862f80fb218", "158-907", userC1.id, stall3.id, orderitems1_1, "Extra lard please", "preparing")
order1_1.write()

const orderitems1_2 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
    OrderItem.fromMenuItem(stall0.menuitems[3], 2),
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
]
const order1_2 = new Order("567ae056-d91a-4693-b146-b862f80fb219", "743-562", userC1.id, stall0.id, orderitems1_2, "", "completed")
order1_2.write()

const orderitems1_3 = [
    OrderItem.fromMenuItem(stall4.menuitems[2], 1),
]
const order1_3 = new Order("678ae056-d91a-4693-b146-b862f80fb220", "269-834", userC1.id, stall4.id, orderitems1_3, "Well done", "ready")
order1_3.write()

const orderitems2_1 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 15),
    OrderItem.fromMenuItem(stall1.menuitems[1], 10),
    OrderItem.fromMenuItem(stall1.menuitems[2], 8),
    OrderItem.fromMenuItem(stall1.menuitems[3], 3),
]
const order2_1 = new Order("789ae056-d91a-4693-b146-b862f80fb221", "521-408", userC2.id, stall1.id, orderitems2_1, "", "completed")
order2_1.write()

const orderitems2_2 = [
    OrderItem.fromMenuItem(stall2.menuitems[2], 2),
]
const order2_2 = new Order("890ae056-d91a-4693-b146-b862f80fb222", "937-215", userC2.id, stall2.id, orderitems2_2, "No fish cake", "preparing")
order2_2.write()

const orderitems2_3 = [
    OrderItem.fromMenuItem(stall3.menuitems[1], 1),
    OrderItem.fromMenuItem(stall3.menuitems[2], 1),
]
const order2_3 = new Order("901ae056-d91a-4693-b146-b862f80fb223", "386-652", userC2.id, stall3.id, orderitems2_3, "", "ready")
order2_3.write()

const orderitems2_4 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 20),
    OrderItem.fromMenuItem(stall1.menuitems[3], 2),
]
const order2_4 = new Order("012ae056-d91a-4693-b146-b862f80fb224", "704-981", userC2.id, stall1.id, orderitems2_4, "", "received")
order2_4.write()

const orderitems3_1 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
]
const order3_1 = new Order("a12ae056-d91a-4693-b146-b862f80fb225", "812-347", userC3.id, stall0.id, orderitems3_1, "Light soy sauce", "completed")
order3_1.write()

const orderitems3_2 = [
    OrderItem.fromMenuItem(stall2.menuitems[0], 2),
    OrderItem.fromMenuItem(stall2.menuitems[1], 1),
    OrderItem.fromMenuItem(stall2.menuitems[2], 1),
]
const order3_2 = new Order("b23ae056-d91a-4693-b146-b862f80fb226", "495-126", userC3.id, stall2.id, orderitems3_2, "Medium spicy", "ready")
order3_2.write()

const orderitems3_3 = [
    OrderItem.fromMenuItem(stall4.menuitems[0], 2),
    OrderItem.fromMenuItem(stall4.menuitems[2], 1),
]
const order3_3 = new Order("c34ae056-d91a-4693-b146-b862f80fb227", "673-509", userC3.id, stall4.id, orderitems3_3, "No cockles", "preparing")
order3_3.write()

const orderitems4_1 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 12),
    OrderItem.fromMenuItem(stall1.menuitems[1], 8),
]
const order4_1 = new Order("d45ae056-d91a-4693-b146-b862f80fb228", "241-793", userC4.id, stall1.id, orderitems4_1, "", "completed")
order4_1.write()

const orderitems4_2 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 2),
    OrderItem.fromMenuItem(stall3.menuitems[1], 1),
    OrderItem.fromMenuItem(stall3.menuitems[2], 3),
]
const order4_2 = new Order("e56ae056-d91a-4693-b146-b862f80fb229", "568-402", userC4.id, stall3.id, orderitems4_2, "Extra prawns", "ready")
order4_2.write()

const orderitems4_3 = [
    OrderItem.fromMenuItem(stall4.menuitems[0], 1),
    OrderItem.fromMenuItem(stall4.menuitems[1], 1),
    OrderItem.fromMenuItem(stall4.menuitems[2], 1),
]
const order4_3 = new Order("f67ae056-d91a-4693-b146-b862f80fb230", "926-158", userC4.id, stall4.id, orderitems4_3, "", "preparing")
order4_3.write()

const orderitems4_4 = [
    OrderItem.fromMenuItem(stall1.menuitems[2], 10),
]
const order4_4 = new Order("g78ae056-d91a-4693-b146-b862f80fb231", "357-640", userC4.id, stall1.id, orderitems4_4, "", "received")
order4_4.write()

const orderitems4_5 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 2),
    OrderItem.fromMenuItem(stall3.menuitems[1], 2),
]
const order4_5 = new Order("h89ae056-d91a-4693-b146-b862f80fb232", "189-475", userC4.id, stall3.id, orderitems4_5, "Extra crispy", "completed")
order4_5.write()

const orderitemsX_1 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
]
const orderX_1 = new Order("i90ae056-d91a-4693-b146-b862f80fb233", "534-287", userC0.id, stall0.id, orderitemsX_1, "", "completed")
orderX_1.write()

const orderitemsX_2 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 2),
    OrderItem.fromMenuItem(stall0.menuitems[3], 1),
]
const orderX_2 = new Order("j01ae056-d91a-4693-b146-b862f80fb234", "712-459", userC0.id, stall0.id, orderitemsX_2, "Extra chili", "ready")
orderX_2.write()

const orderitemsX_3 = [
    OrderItem.fromMenuItem(stall0.menuitems[2], 3),
]
const orderX_3 = new Order("k12ae056-d91a-4693-b146-b862f80fb235", "963-128", userC0.id, stall0.id, orderitemsX_3, "", "preparing")
orderX_3.write()

const orderitemsX_4 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 2),
    OrderItem.fromMenuItem(stall0.menuitems[1], 2),
]
const orderX_4 = new Order("l23ae056-d91a-4693-b146-b862f80fb236", "485-736", userC1.id, stall0.id, orderitemsX_4, "No cucumber", "received")
orderX_4.write()

const orderitemsX_5 = [
    OrderItem.fromMenuItem(stall0.menuitems[3], 1),
]
const orderX_5 = new Order("m34ae056-d91a-4693-b146-b862f80fb237", "217-894", userC1.id, stall0.id, orderitemsX_5, "", "completed")
orderX_5.write()

const orderitemsX_6 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
]
const orderX_6 = new Order("n45ae056-d91a-4693-b146-b862f80fb238", "650-321", userC1.id, stall0.id, orderitemsX_6, "Less rice", "preparing")
orderX_6.write()

const orderitemsX_7 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 4),
]
const orderX_7 = new Order("o56ae056-d91a-4693-b146-b862f80fb239", "891-542", userC1.id, stall0.id, orderitemsX_7, "", "ready")
orderX_7.write()

const orderitemsX_8 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 3),
    OrderItem.fromMenuItem(stall0.menuitems[2], 2),
]
const orderX_8 = new Order("p67ae056-d91a-4693-b146-b862f80fb240", "328-675", userC2.id, stall0.id, orderitemsX_8, "Extra sauce", "received")
orderX_8.write()

const orderitemsX_9 = [
    OrderItem.fromMenuItem(stall0.menuitems[3], 2),
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
]
const orderX_9 = new Order("q78ae056-d91a-4693-b146-b862f80fb241", "154-920", userC2.id, stall0.id, orderitemsX_9, "", "completed")
orderX_9.write()

const orderitemsX_10 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
]
const orderX_10 = new Order("r89ae056-d91a-4693-b146-b862f80fb242", "769-403", userC2.id, stall0.id, orderitemsX_10, "Dark soy sauce", "preparing")
orderX_10.write()

const orderitemsX_11 = [
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
    OrderItem.fromMenuItem(stall0.menuitems[3], 1),
]
const orderX_11 = new Order("s90ae056-d91a-4693-b146-b862f80fb243", "582-167", userC2.id, stall0.id, orderitemsX_11, "", "ready")
orderX_11.write()

const orderitemsX_12 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 2),
]
const orderX_12 = new Order("t01ae056-d91a-4693-b146-b862f80fb244", "936-254", userC3.id, stall0.id, orderitemsX_12, "No ginger", "received")
orderX_12.write()

const orderitemsX_13 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 2),
    OrderItem.fromMenuItem(stall0.menuitems[3], 2),
]
const orderX_13 = new Order("u12ae056-d91a-4693-b146-b862f80fb245", "401-738", userC3.id, stall0.id, orderitemsX_13, "", "completed")
orderX_13.write()

const orderitemsX_14 = [
    OrderItem.fromMenuItem(stall0.menuitems[2], 3),
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
]
const orderX_14 = new Order("v23ae056-d91a-4693-b146-b862f80fb246", "275-619", userC3.id, stall0.id, orderitemsX_14, "Extra chili", "preparing")
orderX_14.write()

const orderitemsX_15 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
]
const orderX_15 = new Order("w34ae056-d91a-4693-b146-b862f80fb247", "843-502", userC4.id, stall0.id, orderitemsX_15, "", "ready")
orderX_15.write()

const orderitemsX_16 = [
    OrderItem.fromMenuItem(stall0.menuitems[3], 3),
]
const orderX_16 = new Order("x45ae056-d91a-4693-b146-b862f80fb248", "618-395", userC4.id, stall0.id, orderitemsX_16, "Less oil", "received")
orderX_16.write()

const orderitemsX_17 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 4),
]
const orderX_17 = new Order("y56ae056-d91a-4693-b146-b862f80fb249", "192-847", userC4.id, stall0.id, orderitemsX_17, "", "completed")
orderX_17.write()

const orderitemsX_18 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
    OrderItem.fromMenuItem(stall0.menuitems[2], 2),
]
const orderX_18 = new Order("z67ae056-d91a-4693-b146-b862f80fb250", "457-230", userC4.id, stall0.id, orderitemsX_18, "No chili", "preparing")
orderX_18.write()

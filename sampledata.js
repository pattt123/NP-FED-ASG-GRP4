import { MenuItem } from "./lib/menuitem.js"
import { Order } from "./lib/order.js"
import { OrderItem } from "./lib/orderitem.js"
import { Stall } from "./lib/stall.js"
import { User } from "./lib/user.js"

/* Partially generated using Claude Sonnet 4.5*/

const stall0 = new Stall("894e7361-4ce1-453d-96c3-6f16573ea440", "Bob's Chicken Rice", "Best Chicken Rice in Singapore!", "https://img.potassium.sh/images/0d90bcba-cd3c-4eea-84ba-a53b4af651e5.jpg", [])
const menuitems0 = [
    new MenuItem("7bb7ec0c-51ab-4c76-aa7a-cd8cf4965a8a", stall0.id, "Steamed Chicken Rice", "Steamed chicken with fragrent rice", "https://img.potassium.sh/images/996f3ea4-8591-4ab3-a4ff-779264c7070c.jpg", 5),
    new MenuItem("4901828a-0428-4406-895a-ee02669d1d15", stall0.id, "Roast Chicken Rice", "Roasted chicken with fragrent rice", "https://img.potassium.sh/images/7f15e517-6db1-4d33-843d-133cf657a894.jpg", 5),
    new MenuItem("0cf4541a-fd07-42ce-b8be-4bd4d6887e87", stall0.id,
        "Steamed Chicken Drumstick Rice", "Steamed chicken drumstick with fragrent rice", "https://img.potassium.sh/images/dc10dc7e-7d93-45d1-9a3d-08d6c84dd7fb.jpg", 6),
    new MenuItem("0513c541-9ea6-482f-ba2a-18366c0100a4", stall0.id,
        "Roast Chicken Drumstick Rice", "Roasted chicken drumstick with fragrent rice", "https://img.potassium.sh/images/a0a70850-ae47-4ba2-9046-f821afe2e5b2.jpg", 6),
]
stall0.menuitems = menuitems0
stall0.write()
const userS0 = new User("a0f9bf40-3f8a-40dd-904b-8364503201d4", "testuser", "testuser", "Bob", Date.UTC(2008, 1, 1), stall0.id)
userS0.write()
userS0.logIn()

const stall1 = new Stall("a1b2c3d4-e5f6-7890-1234-567890abcdef", "Satay Street", "Authentic charcoal-grilled satay with peanut sauce", "https://img.potassium.sh/images/76589c03-f0ba-4c01-bf3c-9fa851188a9d.jpg", [])
const menuitems1 = [
    new MenuItem("b1c2d3e4-f5a6-7890-1234-567890abcdef", stall1.id, "Chicken Satay", "Tender chicken skewers, grilled to perfection", "https://img.potassium.sh/images/a314c7bd-87a1-40cb-a213-49427fe3abf3.jpg", 0.80),
    new MenuItem("c2d3e4f5-a6b7-8901-2345-67890abcdef0", stall1.id, "Beef Satay", "Marinated beef skewers, smoky and flavourful", "https://img.potassium.sh/images/a314c7bd-87a1-40cb-a213-49427fe3abf3.jpg", 0.90),
    new MenuItem("d3e4f5a6-b7c8-9012-3456-7890abcdef01", stall1.id, "Mutton Satay", "Succulent mutton skewers, rich and aromatic", "https://img.potassium.sh/images/a314c7bd-87a1-40cb-a213-49427fe3abf3.jpg", 1.00),
    new MenuItem("e4f5a6b7-c8d9-0123-4567-890abcdef012", stall1.id, "Peanut Sauce", "Rich and nutty peanut dipping sauce", "https://img.potassium.sh/images/1df882c6-233f-41c7-8c82-455231e082bc.jpg", 2.00),
]
stall1.menuitems = menuitems1
stall1.write()
const userS1 = new User("b0f9bf40-3f8a-40dd-904b-8364503201d4", "alice", "alice", "Alice", Date.UTC(2010, 5, 15), stall1.id)
userS1.write()

const stall2 = new Stall("f6e5d4c3-b2a1-0987-6543-210fedcba987", "Laksa Delight", "Creamy and spicy coconut noodle soup", "https://img.potassium.sh/images/034ead58-d4e7-473d-85cc-cf3e23639a27.jpg", [])
const menuitems2 = [
    new MenuItem("g7f6e5d4-c3b2-a109-8765-43210fedcba9", stall2.id, "Katong Laksa", "Traditional Katong laksa with thick vermicelli", "https://img.potassium.sh/images/8978a124-51b3-4db1-bfc7-a8209d526678.jpg", 6.50),
    new MenuItem("h8g7f6e5-d4c3-b2a1-0987-6543210fedcb", stall2.id, "Prawn Laksa", "Laksa with fresh prawns and fish cake", "https://img.potassium.sh/images/441d9775-6095-4ed0-bd2f-35d34b03c41d.jpg", 7.50),
    new MenuItem("i9h8g7f6-e5d4-c3b2-a109-876543210fed", stall2.id, "Chicken Laksa", "Laksa with tender shredded chicken", "https://img.potassium.sh/images/75d6ac8a-b4ba-45b9-8299-f00d545f0556.jpg", 6.00),
]
stall2.menuitems = menuitems2
stall2.write()
const userS2 = new User("c0f9bf40-3f8a-40dd-904b-8364503201d4", "tom", "tom", "Tom", Date.UTC(2012, 8, 20), stall2.id)
userS2.write()

const stall3 = new Stall("fedcba98-7654-3210-fedc-ba9876543210", "Hokkien Mee Master", "Wok-fried Hokkien Mee with rich prawn broth", "https://img.potassium.sh/images/d9c3ec99-1705-467d-bf13-b619a85be1a5.jpg", [])
const menuitems3 = [
    new MenuItem("fedcba98-7654-3210-fedc-ba9876543210", stall3.id, "Prawn Hokkien Mee", "Stir-fried yellow noodles and vermicelli with prawns", "https://img.potassium.sh/images/d9c3ec99-1705-467d-bf13-b619a85be1a5.jpg", 7.00),
    new MenuItem("12345678-90ab-cdef-1234-567890abcdef", stall3.id, "Hokkien Mee with Pork", "Hokkien Mee with sliced pork and crispy lard", "https://img.potassium.sh/images/d9c3ec99-1705-467d-bf13-b619a85be1a5.jpg", 7.50),
    new MenuItem("abcdef01-2345-6789-0abc-def012345678", stall3.id, "Char Kway Teow", "Stir-fried char kway teow with tender beef and savoury sause", "https://img.potassium.sh/images/8728f066-fc40-49fa-abbe-edf9201533e5.jpg", 1.00),
]
stall3.menuitems = menuitems3
stall3.write()
const userS3 = new User("d0f9bf40-3f8a-40dd-904b-8364503201d4", "dick", "dick", "Dick", Date.UTC(2015, 3, 10), stall3.id)
userS3.write()

const stall4 = new Stall("09876543-210f-edcb-a987-6543210fedcb", "Prata Parlor", "Crispy Prata and other authentic Indian Food", "https://img.potassium.sh/images/cdf6341c-a6f2-45c0-8f35-ff020abca9d9.jpg", [])
const menuitems4 = [
    new MenuItem("10987654-3210-fedc-ba98-76543210fedc", stall4.id, "Plain Prata", "Crispy on the Outside, Soft on the Inside", "https://img.potassium.sh/images/42953f1a-52d6-4921-8b05-bdeb482c68d1.jpg", 6.00),
    new MenuItem("210fedcb-a987-6543-210f-edcba9876543", stall4.id, "Egg Prata", "Flaky Prata with Egg Inside", "https://img.potassium.sh/images/e5948057-cc4b-43cc-9f42-27b428468531.jpg", 8.00),
    new MenuItem("3210fedc-ba98-7654-3210-fedcba987654", stall4.id, "Coin Prata", "Crispy Mini Snack Pratas", "https://img.potassium.sh/images/93be71ef-c95a-4ffe-ab6b-dd8196938a59.jpg", 7.00),
]
stall4.menuitems = menuitems4
stall4.write()
const userS4 = new User("e0f9bf40-3f8a-40dd-904b-8364503201d4", "harry", "harry", "Harry", Date.UTC(2018, 10, 5), stall4.id)
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

const orderitemsT_1 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
    OrderItem.fromMenuItem(stall0.menuitems[3], 1),
]
const orderT_1 = new Order("testuser-001-d91a-4693-b146-b862f80fb201", "763-189", userS0.id, stall0.id, orderitemsT_1, "No cilantro", "preparing")
orderT_1.write()

const orderitemsT_2 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 5),
    OrderItem.fromMenuItem(stall1.menuitems[3], 1),
]
const orderT_2 = new Order("testuser-002-d91a-4693-b146-b862f80fb202", "345-812", userS0.id, stall1.id, orderitemsT_2, "Extra spicy peanut sauce", "ready")
orderT_2.write()

const orderitemsT_3 = [
    OrderItem.fromMenuItem(stall2.menuitems[1], 1),
]
const orderT_3 = new Order("testuser-003-d91a-4693-b146-b862f80fb203", "910-476", userS0.id, stall2.id, orderitemsT_3, "Add cockles", "completed")
orderT_3.write()

const orderitemsT_4 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 2),
    OrderItem.fromMenuItem(stall3.menuitems[2], 2),
]
const orderT_4 = new Order("testuser-004-d91a-4693-b146-b862f80fb204", "208-551", userS0.id, stall3.id, orderitemsT_4, "Less oil", "received")
orderT_4.write()

const orderitemsT_5 = [
    OrderItem.fromMenuItem(stall4.menuitems[0], 1),
    OrderItem.fromMenuItem(stall4.menuitems[2], 1),
]
const orderT_5 = new Order("testuser-005-d91a-4693-b146-b862f80fb205", "672-934", userS0.id, stall4.id, orderitemsT_5, "No beansprouts", "preparing")
orderT_5.write()

const orderitemsT_6 = [
    OrderItem.fromMenuItem(stall0.menuitems[1], 2),
]
const orderT_6 = new Order("testuser-006-d91a-4693-b146-b862f80fb206", "115-780", userS0.id, stall0.id, orderitemsT_6, "Extra chili sauce", "ready")
orderT_6.write()

const orderitemsT_7 = [
    OrderItem.fromMenuItem(stall1.menuitems[1], 8),
]
const orderT_7 = new Order("testuser-007-d91a-4693-b146-b862f80fb207", "882-309", userS0.id, stall1.id, orderitemsT_7, "Grilled medium", "completed")
orderT_7.write()

const orderitemsT_8 = [
    OrderItem.fromMenuItem(stall2.menuitems[0], 1),
    OrderItem.fromMenuItem(stall2.menuitems[2], 1),
]
const orderT_8 = new Order("testuser-008-d91a-4693-b146-b862f80fb208", "493-617", userS0.id, stall2.id, orderitemsT_8, "Mild spicy", "received")
orderT_8.write()

const orderitemsT_9 = [
    OrderItem.fromMenuItem(stall3.menuitems[1], 1),
    OrderItem.fromMenuItem(stall3.menuitems[2], 1),
]
const orderT_9 = new Order("testuser-009-d91a-4693-b146-b862f80fb209", "721-048", userS0.id, stall3.id, orderitemsT_9, "No prawns", "preparing")
orderT_9.write()

const orderitemsT_10 = [
    OrderItem.fromMenuItem(stall4.menuitems[1], 1),
]
const orderT_10 = new Order("testuser-010-d91a-4693-b146-b862f80fb210", "130-890", userS0.id, stall4.id, orderitemsT_10, "Less sweet", "ready")
orderT_10.write()

const orderitemsT_11 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 2),
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
]
const orderT_11 = new Order("testuser-011-d91a-4693-b146-b862f80fb211", "567-213", userS0.id, stall0.id, orderitemsT_11, "More ginger", "completed")
orderT_11.write()

const orderitemsT_12 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 10),
    OrderItem.fromMenuItem(stall1.menuitems[2], 5),
]
const orderT_12 = new Order("testuser-012-d91a-4693-b146-b862f80fb212", "804-362", userS0.id, stall1.id, orderitemsT_12, "Mixed satay", "received")
orderT_12.write()

const orderitemsT_13 = [
    OrderItem.fromMenuItem(stall2.menuitems[0], 2),
]
const orderT_13 = new Order("testuser-013-d91a-4693-b146-b862f80fb213", "259-701", userS0.id, stall2.id, orderitemsT_13, "No tofu puff", "preparing")
orderT_13.write()

const orderitemsT_14 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 1),
    OrderItem.fromMenuItem(stall3.menuitems[1], 1),
]
const orderT_14 = new Order("testuser-014-d91a-4693-b146-b862f80fb214", "631-987", userS0.id, stall3.id, orderitemsT_14, "Extra chili paste", "ready")
orderT_14.write()

const orderitemsT_15 = [
    OrderItem.fromMenuItem(stall4.menuitems[0], 2),
]
const orderT_15 = new Order("testuser-015-d91a-4693-b146-b862f80fb215", "199-403", userS0.id, stall4.id, orderitemsT_15, "Spicy", "completed")
orderT_15.write()

const orderitemsT_16 = [
    OrderItem.fromMenuItem(stall0.menuitems[0], 1),
    OrderItem.fromMenuItem(stall0.menuitems[1], 1),
    OrderItem.fromMenuItem(stall0.menuitems[2], 1),
]
const orderT_16 = new Order("testuser-016-d91a-4693-b146-b862f80fb216", "524-768", userS0.id, stall0.id, orderitemsT_16, "All chicken parts", "received")
orderT_16.write()

const orderitemsT_17 = [
    OrderItem.fromMenuItem(stall1.menuitems[0], 6),
    OrderItem.fromMenuItem(stall1.menuitems[1], 6),
]
const orderT_17 = new Order("testuser-017-d91a-4693-b146-b862f80fb217", "876-005", userS0.id, stall1.id, orderitemsT_17, "No onions", "preparing")
orderT_17.write()

const orderitemsT_18 = [
    OrderItem.fromMenuItem(stall2.menuitems[1], 1),
    OrderItem.fromMenuItem(stall2.menuitems[2], 1),
]
const orderT_18 = new Order("testuser-018-d91a-4693-b146-b862f80fb218", "301-592", userS0.id, stall2.id, orderitemsT_18, "Very spicy", "ready")
orderT_18.write()

const orderitemsT_19 = [
    OrderItem.fromMenuItem(stall3.menuitems[0], 3),
]
const orderT_19 = new Order("testuser-019-d91a-4693-b146-b862f80fb219", "948-120", userS0.id, stall3.id, orderitemsT_19, "With extra noodles", "completed")
orderT_19.write()

const orderitemsT_20 = [
    OrderItem.fromMenuItem(stall4.menuitems[1], 1),
    OrderItem.fromMenuItem(stall4.menuitems[2], 1),
]
const orderT_20 = new Order("testuser-020-d91a-4693-b146-b862f80fb220", "410-675", userS0.id, stall4.id, orderitemsT_20, "Add chili padi", "received")
orderT_20.write()

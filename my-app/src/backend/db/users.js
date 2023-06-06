import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Gautham",
    lastName: "Bairi",
    email: "gautham0647@gmail.com",
    password: "myweb@0647",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [
      {
        name: "Puneet Patel",
        address: "410, Newyork",
        phone: "+000121",
        pinCode: 9211,
      },
      {
        name: "Naveen B",
        address: "430, Newyork",
        phone: "+91000121",
        pinCode: 8211,
      },
    ],
  },
];

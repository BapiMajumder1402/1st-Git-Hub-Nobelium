import { atom } from "recoil";

export const user = atom({
    key: "user",
    default: [],
})

export const userCart = atom({
    key: "userCart",
    default: []
})


export const selectedProduct = atom({
    key: "selectedProduct",
    default: ""
}) 
export const productQty = atom({
    key: "productQty",
    default: ""
}) 





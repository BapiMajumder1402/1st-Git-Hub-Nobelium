import React from "react";
import { product } from "./Products";
import {  useRecoilValue } from "recoil";
import { user, userCart } from "./BillData";
import { Link } from "react-router-dom";

export default function DisplayData() {

    // const [userData, setUserData] = useRecoilState(user)
    // const selProduct = useRecoilValue(selectedProduct)
    // const prodQty = useRecoilValue(productQty)
    // const [userCartList, setUserCartList] = useRecoilState(userCart)


    const userData = useRecoilValue(user)
    const userCartList = useRecoilValue(userCart)

    let total = 0

    return (
        <div>
            <table border='1px'>

                <thead>
                    <tr>
                        <th colSpan='3'>
                            Customer Name : {userData.map(elm => elm.name)}
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th colSpan='3'>
                            Date : {userData.map(elm => elm.date)}
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userCartList.map((elem) => {
                            return (
                                <tr>
                                    <td>{elem.selectedProduct}</td>
                                    <td>{product.filter(pro => pro.value === elem.selectedProduct).map(filteredPro => (
                                        <span>
                                            {filteredPro.price}
                                        </span>
                                    ))}</td>

                                    <td>{elem.productQty}</td>

                                    <td>{product.filter(pro => pro.value === elem.selectedProduct).map(filteredPro => {
                                        total += filteredPro.price * elem.productQty
                                        return (
                                            <span>
                                                {filteredPro.price * elem.productQty}
                                            </span>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td colSpan='3'>
                            Total :
                        </td>
                        <td>
                            {total}
                        </td>
                    </tr>
                </tbody>

            </table>
            <button><Link to='/'>Goto products</Link></button>
        </div>
    )
}

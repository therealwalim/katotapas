import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { useDialog } from 'react-st-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

function ProductPopup(props) {
    const dialog = useDialog();

    const [amount = 1, setValue] = useState();

    return (
        <div className="flex justify-center flex-col p-5">
            <button className="max-w-min focus:outline-none">
                <FontAwesomeIcon className="text-gray-500 text-xl mb-5 cursor-pointer" icon={faTimes} onClick={() => {
                    // Сlose the dialog and return the value
                    dialog.close();
                }}></FontAwesomeIcon>
            </button>
            <h3 className="text-2xl font-serif font-bold mb-1">{props.name}</h3>
            <span className="text-gray-500 font-bold font-serif mb-8">
                {props.description}
            </span>
            <img src={props.image} alt="Our Hamburguer" className="" />
            <div className="flex justify-center self-center mt-8 items-center">
                <button className="focus:outline-none">
                    <FontAwesomeIcon className="max-w-min text-gray-400 text-xl cursor-pointer" icon={faMinusCircle}
                        onClick={() => {
                            if (amount > 1) {
                                setValue(amount - 1);
                            }
                        }}
                    ></FontAwesomeIcon>
                </button>
                <span className="text-xl font-serif border-solid border p-2 rounded-md px-8 mx-3 w-24 text-center">{amount}</span>
                <button className="focus:outline-none">
                    <FontAwesomeIcon className="max-w-min text-gray-400 text-xl cursor-pointer" icon={faPlusCircle}
                        onClick={() => {
                            setValue(amount + 1);
                        }}
                    ></FontAwesomeIcon>
                </button>
            </div>
            <button
                onClick={() => {
                    // Сlose the dialog and return the value
                    dialog.close(amount);
                }}
                className="self-center flex items-center justify-center rounded-md bg-yellow-500 text-white font-serif text-xl p-2 w-1/2 mt-8">Add to cart - {props.price * amount}€
            </button>
        </div>
    )
}

export default ProductPopup;
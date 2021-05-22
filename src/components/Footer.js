import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <section className="grid bg-yellow-500 grid-cols-6 w-100 text-white font-serif p-2 mt-5">
            <div className="flex items-center font-bold">
                Est. 2021
            </div>
            <div className="col-span-4 flex items-center justify-center text-xl">
                <a className="m-2" href="/">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a className="m-2" href="/">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </a>
                <a className="m-2 text-2xl" href="/">
                    <FontAwesomeIcon icon={faTripadvisor}></FontAwesomeIcon>
                </a>
                <a className="m-2 text-2xl" href="/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
            </div>
            <div className="flex items-center justify-end ">
                <a href="/menu">
                    <button className="flex items-center justify-center rounded-md text-yellow-500 bg-white font-serif font-bold text-xl p-2">See menu</button>
                </a>
            </div>
        </section>
    )
}
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-10 '>
            <div className='border-y-2 py-10 grid grid-cols-1 gap-3 min-[768px]:grid-cols-3 general-fonts-port text-[14px] min-[768px]:text-[18px]  mb-5'>
                <ul className=''>
                    <li>ABOUT MONSTERCAT</li>
                    <li>CONTACT US</li>
                    <li>CAREERS</li>
                    <li>NEWS</li>
                    <li>PRESS</li>
                </ul>
                <ul>
                    <li>TERMS OF SERVICE</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>

            <div className='flex justify-between'>
                <div>
                    <h3>2011 - 2026 © Monstercat, All Rights Reserved </h3>
                </div>
                <div>
                    <li>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                    </li>
                </div>

            </div>


        </footer>
    )
}

export default Footer;


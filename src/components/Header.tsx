import React from 'react'
import Icons from './Icons.js'
import {logoMonstercat} from '../all-icons-svg/icons-svg.js'

const Header = () => {
  return (
    <header className='fixed top-0  z-30 inset-x-0  backdrop-blur-[10px] bg-[#000000b3] min-[1185px]:bg-transparent min-[1185px]:backdrop-blur-none'>
      <div className='px-4 min-[1185px]:px-8 min-[1185px]:py-6 py-2 w-full  min-[2560px]:max-w-[2120px] min-[1242px]:max-w-[1242px] min-[1440px]:max-w-[1440px]  min-[1920px]:max-w-[1920px] mx-auto'>
        <div className=" flex  justify-between relative  items-center ">
          <img src={logoMonstercat} alt="logo de monstercat" className='w-[50px] h-[50px]' />
          <Icons name="menu-hamburger" className='h-6 w-6 cursor-pointer'/>
          <section className='social-media' > 
            <ul className='flex min-[1185px]:flex-col flex-row gap-5 min-[1185px]:h-5 min-[1185px]:w-6 w-fit '>
              <li className='icons-wrapper'>
                <Icons name="ig" /> 
              </li>
              <li className='icons-wrapper'>
                <Icons name="tt" />
              </li>
              <li className='icons-wrapper'>
                <Icons name="x" />
              </li>
              <li className='icons-wrapper'>
                <Icons name="fb" />
              </li>
              <li className='icons-wrapper'>
                <Icons name="tw" />
              </li>
              <li className='icons-wrapper'>
               <Icons name="dc"/>
              </li>
              <li className='icons-wrapper'>
                <Icons name="mc "/>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </header>
  )
}

export default Header



'use client'
import React from "react"
import { Pricing } from "./Pricing"

export function Services(){
    return(
        <div>
        <div className='flex relative mt-48'>
            <h1 className='text-4xl mt-4 text-primary border-b-4 border-primary mx-auto'>Our Repair Services</h1>
            
        </div>
        <div  className="container">
        <div className="flex relative mt-16 m-14 text-wrap">
            <ul className="space-y-6 list-disc">
                <li className="text-2xl">
                    Explore our comprehensive repair services at SkyFix, tailored to meet all your device needs.
                </li>
                <li className="text-2xl">
                    From screen repairs starting at $99 to water damage restoration and batter replacements, we ensure your devices are restored quicky and affordably.
                </li>
                <li className="text-2xl">
                    We also offer repairs and other essential services like charging port fixes and camera repairs.
                </li>
            </ul>
        </div>
        </div>
        <div>
            <Pricing/>
        
        </div>
        </div>
    )
}

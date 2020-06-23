import React , { useState } from 'react'
export default function Menu() {
    const categoryList = ['Boys', 'Girls', 'Women', 'Men']
    const [category,setCategory]= useState('')

    return <nav>
        <ul >
            {categoryList.map(c =>

                <li  onMouseEnter={(()=>  setCategory(c))} >{c}</li>
            )}
        </ul>
        <div  onMouseLeave={(()=> setCategory(''))}>
                {category}
        </div>
    </nav>
}
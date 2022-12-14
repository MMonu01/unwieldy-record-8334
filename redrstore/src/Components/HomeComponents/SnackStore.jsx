import Style from '../../Styles/HomeStyle/FruitsVegetables.module.css'


const SnackStore = ()=>{

    const arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_chips-nachos-snacksStorefront_m_480_251122_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_frozen-foods-snacksStorefront_m_480_251122_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_noodles-pasta-snacksStorefront_m_480_251122_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_biscuits-cookies-snacksStorefront_m_480_251122_04.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_chocolates-sweets-snacksStorefront_m_480_251122_05.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/3d61f24a-f544-423d-8af6-ed2674f7061f/hp_rtc-snacksStorefront_m_480_251122_06.jpg'
    ]

    return(
        <div className={Style.Container}>
    <div className={Style.head} >
    Snacks Store
    </div>
    <hr className={Style.hr}/>
     <div className={Style.child}>
        {arr.map((el)=>(

<div key={el}><img src={el} alt={el}/></div>
        ))}
 
     </div>
    </div>
        )
}

export default SnackStore
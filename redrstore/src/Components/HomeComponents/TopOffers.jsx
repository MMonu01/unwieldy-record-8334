import Style from '../../Styles/HomeStyle/BankOffers.module.css'



const TopOffers = ()=>{
    let arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_dow-topoffersStorefront_m_480_251122_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_big-packs-topoffersStorefront_m_480_251122_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_combos-topoffersStorefront_m_480_251122_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_30-corner-topoffersStorefront_m_480_251122_04.jpg'
    ]

    return(<>
       <div className={Style.Container}>

     <div className={Style.head} >
        Top Offers
       </div>
       <hr className={Style.hr} />
        <div className={Style.Bank}>
        {arr.map((el)=>(
            <div key={el}><img src={el} alt={el}/></div>
        ))}
    </div>
    </div>
    </>
    )
}

export default TopOffers
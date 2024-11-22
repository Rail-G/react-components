import ShopItemFunc from './ShopItemFunc'
import ShopItemClass from './ShopItemClass'

function ShopItemBlock({children}) {
    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                {children}
            </div>
        </div>
    )
}

export default function ShopItems() {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
      }
    return (
        <>
            <ShopItemBlock>
                <ShopItemFunc item={item}/>
            </ShopItemBlock>
            <ShopItemBlock>
                <ShopItemClass item={item}/>
            </ShopItemBlock>
        </>
    )
}
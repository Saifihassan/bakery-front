import { useEffect } from 'react'
import api from '../api'
import { useState } from 'react'
function Products() {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    useEffect(() => {
        api.get('/products').then(res => setProducts(res.data))
    }, [])

    const placeOrder = async () => {
        const token = localStorage.getItem("token")

        const items = cart.map(p => ({
            productId: p._id,
            quantity: 1
        }))
        
        const total = cart.reduce((sum, p) => sum + p.price, 0)

        await api.post('/orders', {
            userId: "69819be0ccbe9109495b1a25",
            items,
            total
        })
        alert("order placed")
    }

    return (
        <div className="products-container">
            <h1>🍰 Bakery Delights</h1>
            <div className="products-grid">
                {
                    products.map(p => (
                        <div key={p._id} className="product-card">
                            <h3>{p.name}</h3>
                            <p className="price">${p.price}</p>
                            <p>{p.description}</p>
                            <button className="add-to-cart-btn" onClick={() => addToCart(p)}>Add to cart</button>
                        </div>
                    ))
                }
            </div>
            <div style={{textAlign: 'center'}}>
                <button className="order-btn" onClick={placeOrder}>🛒 Place Order Now</button>
            </div>
        </div>
  )
}

export default Products
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'normalize.css'
import { ProductProvider } from './context/productContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { OrderProvaider } from './context/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <OrderProvaider>
          <App />
        </OrderProvaider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)

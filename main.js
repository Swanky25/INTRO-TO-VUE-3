const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['45% cotton', '20% wool', '35% polyester'],
            // solution
            sizes: ['S', 'M', 'L', 'XL'],
            // solution
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ]
        }
    }
})
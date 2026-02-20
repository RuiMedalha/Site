# Preview (layout estático)

Este diretório serve para **ver o layout rapidamente em localhost**, sem precisares de WordPress/WooCommerce.

## Como ver em localhost

No root do repositório:

### Opção A (Python)
```bash
python3 -m http.server 5173
```

Abrir `http://localhost:5173/preview/`.

### Opção B (Node)
```bash
npx serve -l 5173 .
```

Abrir `http://localhost:5173/preview/`.

## Páginas
- `index.html` (home)
- `category.html` (PLP/categoria)
- `product.html` (PDP/produto)
- `cart.html` (carrinho)
- `checkout.html` (checkout)


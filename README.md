# Hotelequip.pt - Nova Loja Online

Nova loja online para a Hotelequip.pt, construída com Next.js, React e Tailwind CSS.

## Stack Tecnológica

- **Next.js 16** (App Router, SSG)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide Icons**

## Como executar

```bash
cd hotelequip-store
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
hotelequip-store/
├── src/
│   ├── app/             # Páginas (App Router)
│   │   ├── page.tsx     # Homepage
│   │   ├── categoria/   # Catálogo por categoria
│   │   ├── produto/     # Página de produto
│   │   ├── carrinho/    # Carrinho de compras
│   │   └── pesquisa/    # Pesquisa
│   ├── components/      # Componentes reutilizáveis
│   ├── data/            # Dados mock de produtos
│   └── lib/             # Context e utilitários
```

## Páginas

- **Homepage** - Hero, categorias, produtos destaque, newsletter
- **Categoria** - Filtros laterais, subcategorias, grid de produtos
- **Produto** - Galeria, specs, adicionar ao carrinho, produtos relacionados
- **Carrinho** - Gestão de quantidades, resumo, checkout
- **Pesquisa** - Pesquisa por nome, marca, categoria

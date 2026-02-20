# Hotelequip Clean (tema WooCommerce)

Tema WordPress leve e clean, criado para substituir um setup pesado (tema + page builder) por uma base focada em **UX e performance**.

## Como correr localmente (Docker)

1. Subir WordPress + MariaDB:

```bash
docker compose up -d
```

2. Abrir `http://localhost:8080` e finalizar o setup do WordPress.

3. No painel WordPress:
- **Aparência → Temas**: ativar **Hotelequip Clean**
- Instalar/ativar **WooCommerce**

## Notas
- O tema já inclui wrappers WooCommerce e estilos base para PLP/PDP/Carrinho/Checkout.
- Para produção, recomenda-se configurar cache, imagens (WebP), e auditoria Lighthouse.


# Análise UX/UI - hotelequip.pt → Nova Loja

## Objetivo
Transformar o site hotelequip.pt numa loja online **nova, clean e com melhor experiência de utilizador (UX)**.

---

## 1. Análise do Contexto (Loja de Equipamentos Hoteleiros)

### Perfil do Negócio
- **Sector**: B2B / B2B2C - Equipamentos para hotéis, restaurantes e catering
- **Público-alvo**: Gestores hoteleiros, compradores, chefs, donos de estabelecimentos
- **Produtos**: Equipamento de cozinha industrial, roupa de cama, amenidades, mobiliário, etc.

### Características Típicas de Sites do Sector (Problemas Comuns)
| Problema | Impacto |
|----------|---------|
| Catálogos extensos sem filtros eficazes | Utilizador perde-se, abandona |
| Navegação confusa por categorias | Tempo de decisão aumenta |
| Informação técnica insuficiente | Dúvidas, menos conversões |
| Design datado/sobrecarregado | Perda de credibilidade |
| Checkout complexo | Abandono de carrinho elevado |
| Mobile não otimizado | Perda de tráfego mobile (crescente) |

---

## 2. Princípios para a Nova Loja "Clean"

### 2.1 Design Minimalista
- **Espaço em branco** generoso - não sobrecarregar
- **Hierarquia visual** clara - o olhar sabe onde ir
- **Tipografia** legível e consistente (máx. 2-3 fontes)
- **Paleta reduzida** - 3-4 cores principais + neutros
- **Ícones** simples e consistentes

### 2.2 Navegação Simplificada
- **Mega-menu** ou dropdowns organizados por categoria lógica
- **Breadcrumbs** em todas as páginas
- **Barra de pesquisa** proeminente (B2B pesquisa muito)
- **Filtros laterais** claros e colapsáveis no mobile

### 2.3 Foco na Conversão
- **CTAs** (Call-to-Action) visíveis e com contraste
- **Informação de produto** completa acima da dobra
- **Preços** claros (ou "Solicitar orçamento" se B2B)
- **Stock/Disponibilidade** visível
- **Carrinho** acessível em qualquer momento

---

## 3. Recomendações UX por Área

### 3.1 Homepage
| Elemento | Recomendação |
|----------|--------------|
| Hero | Imagem/vídeo de qualidade, 1 mensagem principal, 1 CTA |
| Categorias | Grid de 4-6 categorias principais com imagens |
| Produtos em destaque | Carousel ou grid de bestsellers/novidades |
| Confiança | Logos de marcas, certificações, reviews |
| Footer | Links úteis, contacto, newsletter |

### 3.2 Listagem de Produtos
| Elemento | Recomendação |
|----------|--------------|
| Filtros | Por categoria, preço, marca, especificações técnicas |
| Ordenação | Preço, novidade, popularidade, nome |
| Cards de produto | Imagem, nome, preço, rating, botão rápido |
| Paginação/Scroll | Infinite scroll ou paginação clara |
| Resultados | "X produtos encontrados" visível |

### 3.3 Página de Produto (PDP)
| Elemento | Recomendação |
|----------|--------------|
| Galeria | Zoom, múltiplas imagens, 360° se relevante |
| Título + SKU | Nome claro, referência do produto |
| Preço | Destacado, IVA incluído/excluído conforme |
| Especificações | Tabela técnica colapsável |
| Quantidade | Selector + stock disponível |
| Add to Cart | Botão grande, visível |
| Cross-sell | "Clientes também compraram" |

### 3.4 Carrinho & Checkout
| Elemento | Recomendação |
|----------|--------------|
| Carrinho | Resumo lateral ou página dedicada |
| Checkout | Máximo 3-4 passos, progress indicator |
| Campos | Só o essencial, validação em tempo real |
| Guest checkout | Opção de comprar sem registo |
| Métodos de pagamento | Ícones visíveis, múltiplas opções |

### 3.5 Mobile
| Elemento | Recomendação |
|----------|--------------|
| Responsividade | Mobile-first ou adaptativo |
| Touch targets | Mín. 44x44px para botões |
| Menu | Hamburger com navegação clara |
| Formulários | Inputs grandes, teclado adequado |
| Performance | Imagens otimizadas, lazy load |

---

## 4. Stack Tecnológica Sugerida

| Camada | Opções |
|--------|--------|
| **E-commerce** | Shopify, WooCommerce, Magento, ou headless (Next.js + Stripe) |
| **Frontend** | Next.js, React, ou Astro (performance) |
| **Design** | Tailwind CSS, design system próprio |
| **CMS** | Para conteúdo (blog, páginas) - Sanity, Strapi |
| **Analytics** | Google Analytics 4, Hotjar/Microsoft Clarity |

---

## 5. Métricas de Sucesso a Monitorizar

- **Taxa de conversão** (visitas → compras)
- **Taxa de abandono de carrinho**
- **Tempo médio na página**
- **Bounce rate** por página
- **Mobile vs Desktop** - performance comparada
- **Core Web Vitals** (LCP, FID, CLS)

---

## 6. Roadmap Sugerido

### Fase 1 - Fundação (2-3 semanas)
1. Definir identidade visual (logo, cores, tipografia)
2. Estrutura de informação (sitemap, categorias)
3. Wireframes low-fi das páginas principais
4. Escolha da stack tecnológica

### Fase 2 - Design (2-3 semanas)
1. UI Kit / Design System
2. Mockups high-fi (Figma)
3. Protótipo clicável para testes
4. Validação com stakeholders

### Fase 3 - Desenvolvimento (4-6 semanas)
1. Setup do projeto
2. Homepage + Listagem + PDP
3. Carrinho + Checkout
4. Integrações (pagamentos, stock, etc.)

### Fase 4 - Testes & Launch (1-2 semanas)
1. QA funcional
2. Testes de usabilidade
3. Otimização performance
4. Go-live

---

## 7. Resumo - Checklist "Clean & Better UX"

- [ ] Design minimalista, sem ruído visual
- [ ] Navegação intuitiva em 3 cliques
- [ ] Pesquisa e filtros eficazes
- [ ] Páginas de produto informativas
- [ ] Checkout simplificado
- [ ] 100% responsivo e rápido
- [ ] Acessibilidade (WCAG 2.1 AA)
- [ ] SEO técnico implementado

---

*Documento criado como base para o projeto de renovação da loja hotelequip.pt*

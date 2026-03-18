## 1.Architecture design
```mermaid
graph TD
  A["User Browser"] --> B["React Frontend Application"]
  B --> C["Supabase SDK"]
  C --> D["Supabase Service"]

  subgraph "Frontend Layer"
    B
  end

  subgraph "Service Layer (Provided by Supabase)"
    D
  end
```

## 2.Technology Description
- Frontend: React@18 + react-router-dom@6 + TypeScript + vite
- Backend: Supabase (PostgreSQL + Storage opcional para imágenes)

## 3.Route definitions
| Route | Purpose |
|-------|---------|
| / | Galería de productos (listado) |
| /producto/:id | Detalle del producto seleccionado |

## 6.Data model(if applicable)

### 6.1 Data model definition
```mermaid
erDiagram
  PRODUCT {
    uuid id
    text name
    text description
    numeric price
    text currency
    text image_url
    timestamptz created_at
    timestamptz updated_at
  }
```

### 6.2 Data Definition Language
Products Table (products)
```sql
-- create table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(12,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- indexes
CREATE INDEX idx_products_created_at ON products(created_at DESC);

-- permissions (per Supabase guidelines)
GRANT SELECT ON products TO anon;
GRANT ALL PRIVILEGES ON products TO authenticated;

-- (recommended) enable RLS and minimal policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are readable by anyone"
ON products FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Products are writable by authenticated"
ON products FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
```
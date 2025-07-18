CREATE TABLE services (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    image_url TEXT,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
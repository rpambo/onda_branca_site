CREATE TABLE services (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    image_url TEXT NOT NULL,
    modules TEXT NOT NULL DEFAULT '{}',
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
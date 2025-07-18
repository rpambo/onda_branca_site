CREATE TABLE training_details (
    id BIGSERIAL PRIMARY KEY,
    service_id BIGINT NOT NULL UNIQUE REFERENCES services(id) ON DELETE CASCADE,
    opening_date DATE,
    is_pre_sale DATE,
    pre_sale_price NUMERIC(12, 2),
    final_price NUMERIC(12, 2)
);
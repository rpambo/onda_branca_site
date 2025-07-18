CREATE TABLE training_modules (
    id BIGSERIAL PRIMARY KEY,
    training_id BIGINT NOT NULL REFERENCES training_details(service_id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    order_number INTEGER
);
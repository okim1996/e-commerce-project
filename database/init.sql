-- ./database/init.sql

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Create the products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    stock INT
);

-- Insert sample product data
INSERT INTO products (name, description, price, stock) VALUES
('Wireless Mouse', 'Ergonomic wireless mouse with Bluetooth connectivity.', 25.99, 50),
('Mechanical Keyboard', 'RGB backlit mechanical keyboard with customizable keys.', 89.99, 30),
('Gaming Headset', 'High-quality gaming headset with surround sound.', 59.99, 40),
('USB-C Charging Cable', 'Durable USB-C charging cable, 6ft length.', 9.99, 100),
('Laptop Stand', 'Adjustable aluminum laptop stand for ergonomic setup.', 29.99, 20),
('External Hard Drive', '1TB external hard drive with USB 3.0 support.', 59.99, 15),
('Smartphone Holder', 'Universal smartphone holder for desks and cars.', 15.99, 60),
('Webcam', '1080p HD webcam with built-in microphone.', 39.99, 25),
('Portable Speaker', 'Compact Bluetooth speaker with rich sound.', 45.99, 35),
('Fitness Tracker', 'Waterproof fitness tracker with heart rate monitor.', 49.99, 50);

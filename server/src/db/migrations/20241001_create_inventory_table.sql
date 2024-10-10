-- //create table 

CREATE TABLE inventory (
    equipment_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),              
    equipment_type VARCHAR(100) NOT NULL,       
    brand VARCHAR(100),                          
    model VARCHAR(100),                         
    serial_number VARCHAR(255) UNIQUE NOT NULL, 
    purchase_date DATE NOT NULL,                
    price DECIMAL(10, 2) NOT NULL,              
    status VARCHAR(50) CHECK (status IN ('IN USE', 'IN STORAGE', 'REPAIRED', 'DISPOSED')) NOT NULL, 
    user_id UUID REFERENCES users(user_id) ON DELETE SET NULL, 
    assigned_to VARCHAR(255),
    location VARCHAR(255),                      
    warranty_expiry DATE,                       
    condition VARCHAR(50) CHECK (condition IN ('NEW', 'GOOD', 'FAIR', 'POOR')) NOT NULL 
);

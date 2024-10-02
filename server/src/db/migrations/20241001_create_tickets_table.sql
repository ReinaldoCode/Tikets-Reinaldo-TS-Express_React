-- //create table 

CREATE TABLE tickets (
    ticket_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),              
    title VARCHAR(255) NOT NULL,              
    description TEXT,                        
    priority VARCHAR(20) CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')) NOT NULL,  
    status VARCHAR(20) CHECK (status IN ('Open', 'In Progress', 'Pending', 'Resolved')) NOT NULL, 
    user_id UUID NOT NULL,                     
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  
    updated_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,  
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
);

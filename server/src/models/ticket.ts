type TikcetPriority = 'Low' | 'Medium' | 'High' | 'Critical';
type TikcetStatus = 'Open' | 'In Progress' | 'Pending' | 'Resolved';

export type Ticket = {
  ticket_id: string;
  title: string;
  description: string;
  priority: TikcetPriority;
  status: TikcetStatus;
  user_id: string;
  created_date: Date;
  updated_date: Date;
};

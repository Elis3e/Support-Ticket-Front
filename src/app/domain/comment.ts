import {Ticket} from "./ticket";
import {User} from "./user";

export interface Comment {
  id:     number;
  text:   string;
  date:   number;
  user:   User;
  ticket: Ticket;
}

import {User} from "./user";
import {Tag} from "./tag";

export interface Ticket {
  id:       number;
  title:    string;
  body:     string;
  status:   string;
  created:  number;
  updated:  number;
  assigned: User;
  creator:  User;
  tags: Tag [];
}

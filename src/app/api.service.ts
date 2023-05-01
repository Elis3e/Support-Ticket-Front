import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./domain/comment";
import {Ticket} from "./domain/ticket";
import {Tag} from "./domain/tag";

const url = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getListTicket() : Observable<Ticket[]> {
    return this.http.get<Ticket[]>(url + 'ticket/all');
  }

  getCommentsByTicket(ticketID: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(url+ 'comment/all/'+ ticketID);
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(url + 'tag/all/');
  }

  getTicket(ticketID : number): Observable<Ticket> {
    return this.http.get<Ticket>(url + 'ticket/' + ticketID);
  }



}

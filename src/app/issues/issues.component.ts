import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Ticket} from "../domain/ticket";
import {Comment} from "../domain/comment";
import {Tag} from "../domain/tag";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})

export class IssuesComponent implements OnInit{

  tickets: Ticket[] = [];

  selectedticketID: number = -1;

  selectedTicket?: Ticket;

  selectedTicketComments: Comment[] = []

  tags: Tag[] = []

  labels = new FormControl('')

  searchLabel = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getListTicket().subscribe((data) => {
      this.tickets = data
    });

    this.apiService.getTags().subscribe((data) =>
      this.tags = data);

  }

  ticketDetail() {
    if (this.selectedticketID != -1) {
      this.apiService.getTicket(this.selectedticketID).subscribe((data) =>
        this.selectedTicket = data);
      this.apiService.getCommentsByTicket(this.selectedticketID).subscribe((data) =>
        this.selectedTicketComments = data);
    }
  }

}



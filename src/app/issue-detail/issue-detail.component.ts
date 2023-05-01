import {Component, Input} from '@angular/core';
import {Ticket} from "../domain/ticket";
import {Comment} from "../domain/comment";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent {
  @Input('detail')
  ticket: Ticket | undefined

  @Input('comments')
  ticketComments: Comment[] = []
}

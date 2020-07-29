import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';

import { Comment } from '../../models/Comment';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';



@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.css']
})
export class NewCommentFormComponent implements OnInit {

  comment: string;
  @Input() currentFlightId: number;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {

  }

  addComment(comment: Comment) {
    this.commentService.addComment(comment).subscribe(response => console.log('Added comment ', response));
  }

  onSubmit(myForm: NgForm) {
    const comment = {
      id: null,
      flightId: this.currentFlightId,
      comment: this.comment,
      date: moment().format('DD/MM/YYYY'),
      userId: 123
    };

    console.log('submit clicked');
    this.addComment(comment);
    myForm.reset();
  }


}
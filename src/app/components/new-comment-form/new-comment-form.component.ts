import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

import { Comment } from '../../models/Comment';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.css']
})
export class NewCommentFormComponent implements OnInit {

  comment: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {

  }

  addComment(comment: Comment) {
    this.commentService.addComment(comment).subscribe(response => console.log('Added comment ', response));
  }

  onSubmit(myForm: NgForm) {
    const comment = {
      id: 3,
      flightId: 8,
      comment: this.comment,
      date: '17/07/2020',
      userId: 34
    };

    console.log('submit clicked');
    this.addComment(comment);
    myForm.reset();
  }


}

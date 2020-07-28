import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'comment', 'userId'];
  dataSource = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
      this.commentService.getComments(1).subscribe(comments => this.dataSource = comments);
  }

}

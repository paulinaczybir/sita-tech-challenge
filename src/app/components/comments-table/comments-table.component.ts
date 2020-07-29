import { Component, Input, OnChanges } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnChanges {

  displayedColumns: string[] = ['id', 'comment', 'userId'];
  dataSource = [];

  @Input() currentFlightId: number;

  constructor(private commentService: CommentService) { }


  ngOnChanges(): void {
      this.commentService.getComments(this.currentFlightId).subscribe(comments => this.dataSource = comments);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comment } from '../models/Comment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(flightId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`/api/${flightId}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('/api/', comment);
  }

}

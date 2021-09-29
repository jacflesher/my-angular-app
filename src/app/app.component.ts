import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  hero = 'Drogfisher';
  
  

  onLike(liked: boolean) {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
    this.http.get<any>('https://api.tickets.pcf.ford.com').subscribe;
  }
  
  constructor(private http: HttpClient) { }
  postId = '';
  
  onSubmit(submit: boolean){
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    // this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
    //     this.postId = data.id;
    // });
        // this.http.get<any>('https://api.tickets.pcf.ford.com').subscribe;
      // error: error => {
      //     this.errorMessage = error.message;
      //     console.error('There was an error!', error);
      // }
  // })
  }
}
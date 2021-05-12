import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-time-view',
  templateUrl: './time-view.component.html',
  styleUrls: ['./time-view.component.css']
})
export class TimeViewComponent implements OnInit {

  form: FormGroup;
  time: String = undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      time: ["", [Validators.required]],
      format: [""],
    });
  }

  findSentence(){
    let time = this.form.get('time').value
    let format = this.form.get('format').value

    let h = time.substring(0, 2);
    let m = time.substring(2, 4);
    let finalTime = h + ":" + m
    console.log("time: "+ format);
    
    this.getTimeApi(finalTime, format).subscribe(response=>{
      this.time = response
    })
  }

  getTimeApi(time: string, format: string): Observable<any>{
    return this.http.get(`${environment.api}`, { params: {
      time: time, 
      format: format
    }, observe: "response"});
    // responseType: 'text' })
  }
  
}

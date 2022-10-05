import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

const NEWSAPI_KEY = "NEWSAPI_KEY";
const NEWSAPI_URL =
  "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=" + NEWSAPI_KEY;

@Injectable({ providedIn: "root" })
export class NewsApiService {
  constructor(private http: HttpClient) {}

  getHealthNews<T>() {
    return this.http
      .get(NEWSAPI_URL)
      .pipe(map((response: T) => response));
  }

}

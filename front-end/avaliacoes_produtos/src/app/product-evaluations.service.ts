import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEvaluation } from './product.evaluation';

@Injectable({
  providedIn: 'root'
})
export class ProductEvaluationsService {

  baseUrl: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost/avaliacoes_produtos/public/produtos";

    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); 
  }

  getAll(product_id:number){
    let url: string = this.baseUrl + '/' + product_id + '/avaliacoes';
    return this.http.get<ProductEvaluation[]>(url, { headers: this.headers });
  }

  getOne(product_id: number, id: number) {
    let url: string = this.baseUrl + '/' + product_id + '/avaliacoes/' + id;
    return this.http.get<ProductEvaluation>(url, { headers: this.headers });
  }

  insert(productEvaluation: ProductEvaluation) {
    let url: string = this.baseUrl + '/' + productEvaluation.product_id + '/avaliacoes';
    return this.http.post<any>(url, productEvaluation, { headers: this.headers });
  }

  update(productEvaluation: ProductEvaluation) {
    let url: string = this.baseUrl + '/' + productEvaluation.product_id + '/avaliacoes/' + productEvaluation.id;
    return this.http.put<any>(url, productEvaluation, { headers: this.headers });  
  }

  delete(product_id:number, id: number) {
    let url: string = this.baseUrl + '/' + product_id + '/avaliacoes/' + id;
    return this.http.delete<any>(url, { headers: this.headers });
  }
}

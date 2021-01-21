import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEvaluationsService } from '../product-evaluations.service';
import { ProductEvaluation } from '../product.evaluation';

@Component({
  selector: 'app-product-evaluations-list',
  templateUrl: './product-evaluations-list.component.html',
  styleUrls: ['./product-evaluations-list.component.css']
})
export class ProductEvaluationsListComponent implements OnInit {

  items: ProductEvaluation[];
  product_id: string;

  @ViewChild('alert') alert;

  constructor(protected route: ActivatedRoute, private service: ProductEvaluationsService) {
    this.product_id = null;
  }

  ngOnInit(): void {
    this.product_id = this.route.snapshot.paramMap.get('product_id');

    if (this.product_id != null) {
      this.getAll();
    }
  }

  getAll() {
    this.service.getAll(parseInt(this.product_id)).subscribe((data: any) => this.items = data)
  }

  delete(id: number) {
    this.service.delete(parseInt(this.product_id), id).subscribe(
      (data: any) => this.callbackSuccess(data.message),
      (error: any) => this.callbackError(error)
    );

  }

  private callbackSuccess(message: string) {
    this.alert.type = 'success';
    this.alert.message = message;    
    this.getAll();
  }

  private callbackError(error) {
    this.alert.type = 'danger';
    this.alert.message = 'Ocorreu um problema ao excluir o registro';
    console.log(error);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEvaluationsService } from '../product-evaluations.service';
import { ProductEvaluation } from '../product.evaluation';

@Component({
  selector: 'app-product-evaluations-form',
  templateUrl: './product-evaluations-form.component.html',
  styleUrls: ['./product-evaluations-form.component.css']
})
export class ProductEvaluationsFormComponent implements OnInit {

  item: ProductEvaluation;
  errorFields: string[];

  @ViewChild('alert') alert;

  constructor(protected route: ActivatedRoute, protected router: Router, private service: ProductEvaluationsService) {
    this.item = new ProductEvaluation();
    this.errorFields = [];
  }

  ngOnInit(): void {
    let product_id: string = this.route.snapshot.paramMap.get('product_id');
    let id: string = this.route.snapshot.paramMap.get('id')

    if (product_id != null) {
      if (id != null) {
        this.service.getOne(parseInt(product_id), parseInt(id)).subscribe(
          (data: any) => this.item = data
        );
      } else {
        this.item.product_id = parseInt(product_id);
      }
    }
  }

  save() {
    this.errorFields = [];
    if (this.item.id) {
      this.service.update(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    } else {
      this.service.insert(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    }
  }

  isInvalidField(field) {
    return (this.errorFields.indexOf(field) != -1);
  }

  private callbackSuccess() {
    this.router.navigate(['/produtos/' + this.item.product_id + '/avaliacoes'])
  }

  private callbackError(error: any) {
    this.alert.type = 'danger';
    if (error.status = 422) {
      this.alert.message = 'Não foi possível salvar o registro. Os campos destacados estão inválidos';
      Object.keys(error.error).map(field => this.errorFields.push(field));
    } else {
      this.alert.message = 'Ocorreu um problema ao salvar o registro.'
    }
    console.log(error);
  }

}

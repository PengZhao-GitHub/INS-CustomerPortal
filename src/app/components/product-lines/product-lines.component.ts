import { Component, OnInit } from '@angular/core';
import { ProductLinesService } from 'src/app/services/product-lines.service';

@Component({
  selector: 'app-product-lines',
  templateUrl: './product-lines.component.html',
  styleUrls: ['./product-lines.component.css']
})
export class ProductLinesComponent implements OnInit {

  productLines: any[];
  showcases: any[];

  baseUrl:string = "http://localhost:1337"

  constructor(private productLineService: ProductLinesService) { }

  ngOnInit() {
    this.productLineService.getProductLines().subscribe(productLines => {

      this.productLines = productLines;
      console.log(this.productLines);

    });

    this.productLineService.getShowcases().subscribe(showcases => {
      this.showcases = showcases.filter(item => item.UsageType === 'ProductLines');
      console.log(this.showcases);
      console.log(this.showcases[0].Content[0].url);
    });

    window.scroll(0,0);

  }

}

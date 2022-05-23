import { Component, OnInit } from '@angular/core';
import { ProductLinesService } from 'src/app/services/product-lines.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  selectedInsurer: string;
  selectedInsurerID: string;
  selectedProductLine: string;
  selectedProductLineID: string;
  selectedInsurerUrl: string;

  showcases: any[];
  baseUrl:string = "http://localhost:1337"

  showcaseVideo: string;

  constructor(
    private productLineService: ProductLinesService,
    private routeParam: ActivatedRoute) { }

  ngOnInit() {

    this.routeParam.paramMap.subscribe(params => {
      this.selectedInsurerID = params.get('companyid');
      this.selectedInsurer = params.get('companyname');
      this.selectedProductLineID = params.get('productlineid');
      this.selectedProductLine = params.get('productlinename');
      this.selectedInsurerUrl = params.get('url');
    });

    this.productLineService.getProducts().subscribe(products => {
      //get the products belong to the slected insurer and product line
      this.products = products.filter(t => t.insurer.name === this.selectedInsurer && t.product_line.name === this.selectedProductLine);
      console.log('get products from CMS',this.products);


    });

    /* Get showcase slides from CMS */
    this.productLineService.getShowcases().subscribe(showcases => {
      this.showcases = showcases.filter(item => item.UsageType === 'Products');
      /*
      //This code is to retrive the showcase belongs to the product line and insurer only; Actually i should provide a getShowcase app only return one item;
      this.showcases = showcases.filter(item => {
        console.log(item, item.product_line, item.insurer);
        if (item.product_line == null || item.insurer == null) {
          return false; }
        else {
          console.log(item.product_line.name, item.insurer.name);
          return item.product_line.name === this.selectedProductLine && item.insurer.name === this.selectedInsurer;
        }
        
      });
      */

      //console.log(this.showcases);
      //console.log(this.showcases[0].Content[0].url);
      this.showcaseVideo = `${this.baseUrl}${this.showcases[0].Content[0].url}`;
      //console.log(this.showcaseVideo);
    })

    window.scroll(0,0);
  }

  /* Close the shared product movie iframe */
  closeMovie(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.setAttribute('src', '');
    console.log(iframe);

  }


}

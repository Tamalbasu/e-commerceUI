import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Model/Books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartlist: Books[];
  totalSum: number = 0;
  data: any;
  constructor(private api: BookService,private route: Router) { }

  ngOnInit(): void {
    this.cartlist = this.api.getCart();
    this.cartlist.forEach(value => {
      this.totalSum = this.totalSum + (value.quentity * value.price);
    });

  }

  deleteItem(cart : Books) {
    
    this.cartlist.forEach((value,index)=>{
      if(value==cart) this.cartlist.splice(index,1);
  });
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quentity * value.price);
      });
   
  }
  placeOrder() {
    
    this.api.placeOrder(this.totalSum).subscribe(res => {
      console.log(res)
      this.data = res;
      console.log(this.data.paymentOptions.paymentUrl)
      window.location.href = this.data.paymentOptions.paymentUrl
    },
    err => {
      console.log(err)
      this.route.navigate(['/login']);
  }
    
  );
  
  
  }
}

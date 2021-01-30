import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from '../Model/Books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() public product : Books;
  @Input() public images;

  @Output() productAddToCart: EventEmitter<Books> = new EventEmitter<Books>();
  constructor(private api: BookService,private http: HttpClient) { }

  ngOnInit() {
    this.product.image= this.images[Math.floor(Math.random() * (5 - 0 + 1) + 0)]['Image'];
    console.log(this.product.image)
  }
  addToCart() {
    //console.log(this.product)
    this.api.putCart(this.product);
    window.alert("Product added")
    this.productAddToCart.emit(this.product);
  }

}

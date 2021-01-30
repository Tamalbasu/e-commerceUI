import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/Model/Books';
import { Image } from '../Model/Image';
import { BookService } from '../services/book.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Books[] = [];
  images: Image[] = [];
  cartlist: Books[];
  searchText;
  pageOfItems: Array<any>;
  constructor(private api: BookService) { }
 

  ngOnInit(): void {
    this.api.getBooks().subscribe(
      res => {
        this.products = res;
      }
    );

    this.api.getImages().subscribe(
      res => {
        this.images = res;
      }
    );

  }
  addToCart(e) {
    console.log(e);
  

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}

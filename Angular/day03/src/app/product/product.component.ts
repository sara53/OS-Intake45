import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges, OnInit {
  date: any = new Date();

  previousPrice: any;
  show: boolean = false;
  @Input() myProduct!: { id: number; name: string; price: number };
  @Input() supName!: string;
  ngOnInit(): void {
    console.log('On Init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    if (!changes['myProduct'].firstChange) {
      this.show = true;
    }
    this.previousPrice = changes['myProduct'].previousValue?.price;
  }
}

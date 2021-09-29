import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeroComponent implements OnInit {


  @Input() name: string = "";

  @Output() liked = new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

  
  ngOnChanges(changes: SimpleChanges){
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    if (!hero.isFirstChange()){
      console.log(`Hero Changed from ${oldValue} to ${newValue}`)
    }
  }
  // trackByHeroes(index: number, hero: Hero): 
  // number {
  //   return hero.id;
  // }
}


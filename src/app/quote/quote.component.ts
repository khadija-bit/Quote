import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Stay loyal to your own peace of mind.','Rachel wolchin' ,new Date(2019,8,29),"",0,0),
    new Quote(2,'Prayer is something that should be exhibited with consistency, Not just when tragedy hits.','Dau voire',new Date(2020,4,28),"",0,0),
    new Quote(3,'What you are afraid to do is a clear indication of the next thing you need to do.','Ralph Waldo Emerson',new Date(2017,2,1),"",0,0),
    new Quote(4,'Friendship is not letting your friends stagnate.','Save Inigo',new Date(2018,10,23),"",0,0),
    new Quote(5,'Do not live in your head.Your belong somewhere higher.','Malanda Jean Claude',new Date(2016,4,12),"",0,0),
    new Quote(6,'The universe never allows you to be comfortable when you are limiting yourself.','xc',new Date(2015,11,11),"",0,0),
  ];
  readMore(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete this quotes?')

      if (toDelete){
         this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  addVote(isUp,index){
    if (isUp){
      this.quotes.splice(index,0)
    }
  }

  removeVote(isDown,index){
    if (isDown){
      this.quotes.splice(index, 0)
    }
  }

  

  constructor() { }

  ngOnInit() {
  }

}

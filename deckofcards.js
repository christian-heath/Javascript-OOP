class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        if(value === 1)
        {
            this.display = "Ace";
        }
        else if(value === 10)
        {
            this.display = "Jack";
        }
        else if(value === 11)
        {
            this.display = "Queen";
        }
        else if(value === 12)
        {
            this.display = "King";
        }
        else
        {
            this.display = String(value);
        }
    }
}

class Deck {
    constructor(){
        this.reset();
        this.shuffle();
    }
    reset(){
        this.deck = [];
        for(var i = 0; i < 52; i++)
        {
            var suit;
            if(i < 13)
            {
                suit = "Diamonds";
            }
            else if(i < 26)
            {
                suit = "Spades";
            }
            else if(i < 39)
            {
                suit = "Clubs";
            }
            else
            {
                suit = "Hearts";
            }
            var value = (i%13)+1
            this.deck.push(new Card(suit, value))
        }
        return this;
    }
    display(){
        for(var i = 0; i < this.deck.length; i++)
        {
            console.log(this.deck[i].display + ' of ' + this.deck[i].suit)
        }
    }
    shuffle(){
        for(let i = this.deck.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j] = [this.deck[j]], this.deck[i]];
        }
    }
    drawfrom(){
        return this.deck.pop();
    }
}

class Player {
    constructor(name, deck){
        this.name = name;
        this.deck = deck;
        this.hand = [];
        this.discardPile = [];
    }
    draw(amt){
        for(var i = 0; i < amt; i++)
        {
            if(this.deck.deck.length > 0)
            {
                this.hand.push(this.deck.drawfrom());
            }
            else
            {
                console.log("The deck is empty!");
                break;
            }
        }
        return this;
    }
    displayhand(){
        console.log(this.name + "'s hand:");
        for(var i = 0; i < this.hand.length; i++)
        {
            console.log(this.hand[i].display + "of" + this.hand[i].suit)
        }
        return this;
    }
    discard(card){
        if (card < this.hand.length){
            var dc = this.hand[card];
            console.log("Discarding " + this.hand[card].display + " of " + this.hand[card].suit);
            this.discardpile.push(dc);
            this.hand.splice(card, 1);
        }
        else{
            console.log('Invalid hand index. Cannot discard.');
        }
        return this;
    }
    discardhand(){
        while (this.hand[0]){
            this.discardpile.push(this.hand.pop());
        }
        console.log('Hand discarded');
        return this;
    }
}
var d1 = new Deck;
d1.display()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var Bret = new Player('Bret', d1);
Bret.draw(5).displayhand();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
Bret.discard(4).discardhand().displayhand();
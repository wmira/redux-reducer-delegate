import Rx from 'rx';
const { interval } = Rx.Observable;
const { Subject } = Rx;

const createPriceSimulator = (stock) => {

    const interval$ = interval(Math.random() * 6000 );
    const subject = new Subject();
    var lastPrice = stock.price;

    interval$.delay(Math.random() * 6000).subscribe( () => {
        const rand = Math.random();
        const prev = lastPrice;
        const incr = parseInt(Math.random() * 100) % 2;
        lastPrice = lastPrice + ( incr === 0 ? rand : (rand * -1) );
        subject.onNext({last: parseFloat(lastPrice.toFixed(2)), prev, delta: (lastPrice - prev) });
    });
    return subject;

};

export const createFeed = createPriceSimulator;

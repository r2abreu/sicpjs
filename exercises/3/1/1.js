/*
An accumulator is a function that is called repeatedly with a single numeric argument
and accumulates its arguments into a sum. Each time it is called, it returns the currently
accumulated sum. Write a function make_accumulator that generates accumulators, each
maintaining an independent sum. The input to make_accumulator should specify the
initial value of the sum; for example
const a = make_accumulator(5);
a(10);
15
a(10);
25
*/
const acc = (sum) => (adder) => sum += adder;
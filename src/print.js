import { multiply } from "./math";

export default function printMe() {
    console.log('I get called from print.js!!~', multiply(2, 10));
}


import.meta.webpackHot?.accept(
    './math.js',
    () => {
      console.log('math.js updated')
    }
);
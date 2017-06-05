@ katopz
> What console log will print?
```js
(async foo => console.log(await await foo))('bar')
```
- "bar"
- "Error"
- "undefined"

@ katopz
> What console log will print?
```js
new Promise(reject => { throw 'foo' && reject('bar') })
  .then(
    result => console.log(`succeed:${result}`),
    err => console.log(`failed:${err}`))
  .catch(err => console.log(`catch:${err}`))
```
- "succeed:bar"
- "failed:foo"
- "catch:foo"

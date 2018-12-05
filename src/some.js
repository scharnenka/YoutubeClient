function addDiv() {
   let div = document.createElement('div');
   div.innerHTML = '<h1>Hellow World</h1>';
   document.body.appendChild(div);
}
console.log('Hi!');
export default addDiv;
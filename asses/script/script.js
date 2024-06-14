let num = 0
let _inp = document.querySelectorAll('input')
let _category2 = ''
let _category3 = ''
let _product = ''

async function myApi(event) {    
    num = num + 5
    let _api = await fetch('https://fakestoreapi.com/products?limit=' + num)
    let _store = await _api.json()
     if(num==20){     
             event.target.remove()    
     }
    if(num<=20){
        for (let i = num - 5; i < num; i++) {           
             let _div = document.createElement('div')
              document.getElementById('box').appendChild(_div)
              _div.innerHTML = `
                  <figure>
                      <img src=${_store[i].image} alt="" />
                          <figcaption>
                              <h5>title: ${_store[i].title}</h5>
                              <p>category:${_store[i].category} </p>
                              <p>price:${_store[i].price} </p>                        
                          </figcaption>
                  </figure>
                ` 
              _div.setAttribute('data-h',_store[i].category)  
              _div.setAttribute('data-h2','all')                 
               }
    } 
    _product =  document.querySelectorAll('#box>div')
    myChange()
}

function myChange() {    
    _inp.forEach(element => {
       if(element.checked){
        let _category1 = element.value        
           _product.forEach(val => { 
            val.style.opacity = '0.2'           
            _category2 = val.getAttribute('data-h')
            _category3 = val.getAttribute('data-h2')
            console.log(_category2);
            if(_category1 == _category2 ) {
                val.style.opacity = '1'               
            }
            if(_category1 == _category3 ) {
                val.style.opacity = '1'                
            }
           })
       }
    });
}


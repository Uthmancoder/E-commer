    function startshopping() {
        window.location.href = "index.html"
    }
    let show = JSON.parse(localStorage.getItem("content"));


    let index = 0
    if (show && show.length > 0) {
        const container = document.getElementById("cart-items-container");
        for (let index = 0; index < show.length; index++) {
            const element = show[index];
            document.getElementById("screen").innerHTML += `
           <div class = "d-flex align-items-center ddd">
            <div class = "border shadow rounded widt  wdt mx-5 py-3 px-2 my-4">
                <img class = " image" src="${element.image}" alt="${element.name}">
                <div class="cart-item-details w-100 sss mx-4">
                  <p>${element.category}</p>
                  <p>${element.description}</p>
                  <img class = "imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt="" >
                <p>Price: $${element.price}</p>

                <div class="quantity">
                    <button class="minus btn btn-success" onclick="decrement(this.nextElementSibling)">-</button>
                      <input class = "inpp" id="value" type="text" value="1">
                      <button class="plus btn btn-success" onclick="increment(this.previousElementSibling)">+</button>
 
                </div>
               <button onclick = "delt(${index})" class = "btn btn-danger dand text-start"> <i class="fa-solid fa-trash"></i>  Remove </button>
            </div>
            </div>
         </div>
    `
        }

    }
    function delt(index) {
        show.splice(index, 1);
        console.log(show);
        localStorage.setItem("content", JSON.stringify(show))
        document.getElementById("screen").innerHTML = "";

        // const show = JSON.parse(localStorage.getItem("content"));

        for (let i = 0; i < show.length; i++) {
            const element = show[i];
            document.getElementById("screen").innerHTML += `
           <div class = "d-flex align-items-center ddd">
            <div class = "border shadow rounded widt d-flex align-items-center wdt mx-5 py-3 my-4">
                <img class = " image" src="${element.image}" alt="${element.name}">
                <div class="cart-item-details w-50 mx-4">
                  <p>${element.category}</p>
                  <p>${element.description}</p>
                  <img class = "imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt="" >
                <p>Price: $${element.price}</p>

                <div class = "ddf mx-5 mt-5">
                       <button id="btt" class="asd  btn btn-success" onclick="nto()">-</button>
                       <div id="screen2-"  class = "scr2" >1</div>
                       <button id="btt" class="asd btn btn-success " onclick="plux()">+</button>    
               </div>
               <button onclick = "delt()" class = "btn btn-danger dand text-start"> <i class="fa-solid fa-trash"></i>  Remove </button>
            </div>
            </div>
         </div>
    `
        }
        let total = 0; // initialize total to zero
        for (let index = 0; index < show.length; index++) {
            const element = show[index];
            total += element.price; // add price of current item to total
        }
        document.getElementById("sub-screen").innerHTML = total; // display total
    }
    let i = 1
    function increment(value) {
        const currentValue = parseInt(value.value);
        if (currentValue < 8) {
            const newValue = currentValue + 1;
            value.value = newValue;

            let total = 0; // initialize total to zero
            for (let index = 0; index < show.length; index++) {
                const element = show[index];
                total += element.price * value.value; // add price of current item to total
            }
            document.getElementById("sub-screen").innerHTML = `<div class = "d-flex align-items-center justify-content-between">
            <span class="bb">Subtotal</span>
            ${total}
            </div>`; // display total

        } else if (currentValue == 8) {
            alert("only eight items can be selected")
        }


    }
    function decrement(value) {
        const currentValue = parseInt(value.value);
        if (currentValue > 0) {
            const newValue = currentValue - 1;
            value.value = newValue;
        }
        let total = 0; // initialize total to zero
        for (let index = 0; index < show.length; index++) {
            const element = show[index];
            total += element.price / value.value[index]; // add price of current item to total
        }
        document.getElementById("sub-screen").innerHTML = `<div class = "d-flex align-items-center justify-content-between">
            <span class="bb">Subtotal</span>
            ${total}
            </div>`; // display total
    }

    function subtotal() {
        let total = 0; // initialize total to zero
        for (let index = 0; index < show.length; index++) {
            const element = show[index];
            total += element.price; // add price of current item to total
        }
        document.getElementById("sub-screen").innerHTML = `<div class = "d-flex align-items-center justify-content-between">
            <span class="bb">Subtotal</span>
            ${total}
            </div>`; // display total
    }
    subtotal();
    function makePayment() {
        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
            tx_ref: "titanic-48981487343MDI0NzMx",
            amount: 54600,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "rose@unsinkableship.com",
                phone_number: "08102909304",
                name: "Rose DeWitt Bukater",
            },
            customizations: {
                title: "Ashion's fashion Hub",
                description: "Payment for an awesome cruise",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
        });
    }


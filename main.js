    let myArray = []


    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            myArray = data;
            for (let index = 0; index < myArray.length; index++) {
                const element = myArray[index];
                console.log(element);

                document.getElementById("screen").innerHTML += ` 
                          <div class ="descr">
                            <img class = "image" src="${element.image}" alt="">
                            <p class = "pp fff"> ${element.title}<br> <img class = "imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt="" > <br> $${element.price}  <br>   </p>
                            <button  onclick = "tocart(${index})" class = "adto fff btn  btn-danger border-0"> Add to Cart </button>
                            </div> 

                            <div id="myModal" class="modal">
                                  <div class="modal-content">
                                  <span class="close">&times;</span>
                                  <p>This is my modal content</p>
                           </div>
                  `

            }

        })

    function cartt() {
        window.location.href = "cart.html"
    }
  
  function notify() {
    let notification = document.getElementById("nine")
    let checked = JSON.parse(localStorage.getItem("content")) || [];
    nine.textContent = checked.length;       
  }notify();


    function tocart(index) {
        const element = myArray[index];
        document.getElementById("screen").innerHTML = `
    <div id="myModal" class="modal">
      <div class="modal-content ">
            <div>
                <span class="close">&times;</span>
                <img class="image mxtt mx-5" src="${element.image}" alt="">
                <p id ="smlscreen"></p>
                <p class="pp w-100"> ${element.category} <br>${element.title}<br><img class="imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt=""><br>₦${element.price}<br></p>
            </div>
               <div class ="posit">
                <div class = "d-flex" style= "margin-left : 30px;">
                   <button onclick = "adcart(${index})" id="adedto" class="btn btn-danger adtoc adto w-75 mx-5 text-white ><i class="fa-solid fa-cart-plus "></i> Add To Cart</button> <br>
                </div>
               </div> 
       </div>
    </div>
  `;

        // Get the modal and close button elements
        const modal = document.getElementById("myModal");
        const closeBtn = modal.querySelector(".close");

        // Add a click event listener to the close button
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";

            location.reload();
        });

        // Show the modal
        modal.style.display = "block";

    }
    let checked = JSON.parse(localStorage.getItem("content"))
    console.log(checked);

    function adcart(index) {
        if (checked === null || checked.length === 0) {
            checked = [];
        } else {
            checked = JSON.parse(localStorage.getItem("content"));
        }

        const item = myArray[index];
        checked.push(item);
        localStorage.setItem("content", JSON.stringify(checked));
        alert("Item added to cart.");
    }






    let i = 1
    function mee() {
        if (i < 7) {
            i++
            document.getElementById("screen2").innerHTML = i

        } else if (i == 7) {
            alert("only seven items can be selected at a time")
        }
    }
    function nto() {
        if (i > 0) {
            i--
            document.getElementById("screen2").innerHTML = i
            alert("1 item removed from cart successfully")
        } else if (i <= 1) {
            document.getElementById("adedto").style.display = "block";
            document.querySelector(".non").style.visibility = "hidden";
        }
    }

    // get a reference to the search button and input field
    const searchBtn = document.querySelector('.clo');
    const searchInput = document.querySelector('#myInput');

    // add an event listener to the search button
    searchBtn.addEventListener('click', function () {
        // get the search query from the input field
        const query = searchInput.value.toLowerCase();

        // filter the myArray based on the search query
        const filteredArray = myArray.filter(function (item) {
            return (
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            );
        });

        // update the screen with the filtered items
        const screen1 = document.getElementById('screen1');
        screen1.innerHTML = '';
        filteredArray.forEach(function (item) {
            screen1.innerHTML += `
      <div class="descr">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Price: $${item.price}</p>
      </div>
    `;
        });
    });

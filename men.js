    let myArray = []
    let checked = JSON.parse(localStorage.getItem ("content"))
    console.log(checked);
    const myModal = document.getElementById("myModal");
    const close = document.getElementsByClassName("close")[0];


    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            myArray = data;
            for (let index = 0; index < myArray.length; index++) {
                const element = myArray[index];

                if (element.category == "men's clothing") {
                    document.getElementById("screen1").innerHTML += ` 
                    <button onclick = "men(${index})" class="ddd">
                            <img class = "image" src="${element.image}" alt="">
                            <p class = "pp mx-5"> ${element.title}<br> <img class = "imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt="" > <br> ₦${element.price}  <br>   </p>
                            </button> 

                            <div id="myModal" class="modal">
                                  <div class="modal-content">
                                  <span class="close">&times;</span>
                                  <p>This is my modal content</p>
                           </div>
                        </div>
                        
                        </button>
                            
                  `
                } else {
                    continue
                }

            }

        })



    function men(index) {
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
                   <button onclick = "adtocart(${index})" id="adedto" class="btn btn-danger adtoc adto w-75 mx-5 text-white ><i class="fa-solid fa-cart-plus "></i> Add To Cart</button> <br>
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
    function notify() {
        let nine = document.getElementById("nine")
        let checked = JSON.parse(localStorage.getItem("content")) || [];
        nine.textContent = checked.length;       
      }notify();

    function cart() {
        window.location.href = "cart.html"
    }
    function adtocart(index) {
        console.log(index);
        console.log(myArray[index]);
        if (checked == null) {
            checked = []
            checked.push(myArray[index])
            localStorage.setItem("content", JSON.stringify(checked))
        } else {
            checked.push(myArray[index])
            localStorage.setItem("content", JSON.stringify(checked))
            // setInterval(() => {
            //     window.location.href = "cart.html"
            // }, 1000);
        }
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
        if (i > 1) {
            i--
            document.getElementById("screen2").innerHTML = i
            alert("1 item removed from cart successfully")
        } else if (i <= 1) {
            document.getElementById("adedto").style.display = "block";
            document.querySelector(".non").style.visibility = "hidden";
        }
    }

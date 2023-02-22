    let myArray = []
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            myArray = data;
            for (let index = 0; index < myArray.length; index++) {
                const element = myArray[index];
                console.log(element);

               if (element.category == "jewelery") {
                document.getElementById("screen").innerHTML += ` 
                          <div class ="descr">
                            <img class = "image" src="${element.image}" alt="">
                            <p class = "pp fff"> ${element.title}<br> <img class = "imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt="" > <br> ₦${element.price}  <br>   </p>
                            <button  onclick = "tocart(${index})" class = "adto fff btn  btn-danger border-0"> Add to Cart </button>
                            </div> 

                            <div id="myModal" class="modal">
                                  <div class="modal-content">
                                  <span class="close">&times;</span>
                                  <p>This is my modal content</p>
                           </div>
                  `
               }else {
                continue
               }

            }

        })

    function tocart(index) {
        const element = myArray[index];
        document.getElementById("screen").innerHTML = `
    <div id="myModal" class="modal">
      <div class="modal-content ">
          <div>
                <span class="close">&times;</span>
                <img class="image" src="${element.image}" alt="">
                <p id ="smlscreen"></p>
                <p class="pp w-100"> ${element.category}<br>${element.title}<br><img class="imm" src="https://img.freepik.com/premium-vector/five-stars-rating-vector-icon_38133-30.jpg?w=2000" alt=""><br>₦${element.price}<br></p>
            </div>
               <div class = "d-flex" style= "margin-left : 170px;">
                            <button onclick = "adtocart()" id="adedto" class="btn btn-danger adtoc adto w-75 mx-5 text-white ><i class="fa-solid fa-cart-plus "></i> Add To Cart</button> <br>
                            <div id="morpp" class="d-flex align-items-center " style ="visibility: hidden;">
                                  <button class="btn btn-danger fs-5 fw-bolder text-white">-</button>
                                   <p id="smscreen" class="border w-50 shadow rounded-2 mx-5"></p>
                                    <button onclick = "pluxx" class="btn btn-success fs-5 fw-bolder text-white">+</button>
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

    function adtocart() {
        document.getElementById("adedto").style.display = "none";
        document.getElementById("smscreen").innerHTML = 1
        alert("item added successfully")
        document.getElementById("morpp").style.visibility = "visible";
    }
    let scScr = document.getElementById("smscreen")
    function pluxx() {
        // Access the screen element
        const screen1 = document.getElementById("smscreen");

        // Get the current value of the screen as a number
        let value = Number(screen1.innerHTML);
        // console.log(value);

        // Increase the value by 1
        value += 1;

        // Update the screen with the new value
        screen.innerHTML = value;
    }

    // Add a click event listener to the plus button
    const plusButton = document.getElementById("plus");

    const myModal = document.getElementById("myModal");
    const close = document.getElementsByClassName("close")[0];
// import { allProperties } from "./property.js"
// import { viewProperty } from "./viewproperty.js"
// const address = document.getElementById("address")
// const roomType = document.getElementById("room-type")
// const price = document.getElementById("price")
// const image = document.getElementById("image")
// const unitNumber = document.getElementById("unit")
// const sellerName = document.getElementById("name")
// const city = document.getElementById("city")
// const state = document.getElementById("state")
// const description = document.getElementById("description")
// const addProperty = document.getElementById("add-property")
// const form = document.getElementById("form")
// const properties = document.getElementById("properties")
// const propertyContainer = document.querySelectorAll(".property-container")
// const closeProperty = document.getElementById("closeProperty")
// const filename = document.getElementById("filename")
// const paginationNav = document.querySelector(".pagination");
// const buttons = paginationNav.querySelectorAll("button");
// const propertyList = document.querySelector(".property-list")
// const overlay = document.getElementById("overlay")
// const body = document.body;
// const Popup = document.getElementById("personal-property")
// const viewPropertyButton = document.getElementById("viewProperty")
// const rowsPerPage = 6;
// let currentPage = 1;



// const pagination = () => {

//     const startIndex = (currentPage - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;

//     const elementsForPage = allProperties.slice(startIndex, endIndex);
//     properties.innerHTML = ""


//     elementsForPage.forEach(element => {
//         const div = document.createElement("div")
//         div.setAttribute("class", "property-container")
//         div.setAttribute("id", element.id)

//         if (element.image) {
//             const img = document.createElement("img");
//             div.appendChild(img)

//             const reader = new FileReader()
//             reader.onload = function (e) {
//                 img.src = e.target.result;
//             };

//             reader.readAsDataURL(element.image);
//         } else if (element.imagesource) {
//             const img = document.createElement("img");
//             img.src = element.imagesource;
//             div.appendChild(img)
//         }

//         const article = document.createElement("article");
//         article.setAttribute("class", "property-content")

//         const h4 = document.createElement("h4");
//         h4.innerText = element.address;

//         const p = document.createElement("p");
//         p.innerText = element.roomType;

//         const span = document.createElement("span");
//         span.innerText = `$${element.price}/month`;

//         const table = document.createElement("table");
//         table.innerHTML =
//             ` <tr>
//             <td>
//                 <svg width=" 16" height="12" viewBox="0 0 16 12" fill="none"
//                     xmlns="http://www.w3.org/2000/svg" class="Bed">
//                     <g id="Bed">
//                         <path id="Path"
//                             d="M6.95859 1.61287H8.99068C9.93103 1.61373 10.7475 2.26078 10.9632 3.17607C10.9812 3.25237 11.0493 3.30631 11.1277 3.30649H14.2417C14.2866 3.30666 14.3297 3.28893 14.3615 3.25723C14.3934 3.22554 14.4112 3.18247 14.4112 3.13756V1.44333C14.4112 1.08398 14.2685 0.739356 14.0143 0.485316C13.7601 0.231277 13.4155 0.0886415 13.0561 0.0888063H2.89317C2.53382 0.0886415 2.18913 0.231277 1.93497 0.485316C1.68082 0.739356 1.53802 1.08398 1.53802 1.44333V3.13756C1.53802 3.18247 1.55591 3.22554 1.58772 3.25723C1.61954 3.28893 1.66266 3.30666 1.70757 3.30649H4.82154C4.90012 3.30677 4.96843 3.25263 4.98612 3.17607C5.20177 2.26078 6.01824 1.61373 6.95859 1.61287Z"
//                             fill="black" />
//                         <path id="Path_2"
//                             d="M1.19954 4.32312C1.01979 4.32296 0.847352 4.39429 0.720247 4.52139C0.593142 4.6485 0.521808 4.82094 0.521973 5.00069V8.55747C0.521972 8.8795 0.748624 9.15703 1.06415 9.22138C1.14288 9.23757 1.19943 9.30682 1.19954 9.3872V10.7591C1.19954 11.1333 1.5029 11.4367 1.87711 11.4367C2.25133 11.4367 2.55468 11.1333 2.55468 10.7591V9.40459C2.55452 9.35968 2.57224 9.31655 2.60394 9.28474C2.63564 9.25292 2.6787 9.23504 2.72361 9.23504H13.2256C13.2706 9.23504 13.3136 9.25292 13.3453 9.28474C13.377 9.31655 13.3947 9.35968 13.3946 9.40459V10.7591C13.3946 11.1333 13.6979 11.4367 14.0721 11.4367C14.4464 11.4367 14.7497 11.1333 14.7497 10.7591V9.3872C14.7498 9.30682 14.8064 9.23757 14.8851 9.22138C15.2006 9.15703 15.4273 8.8795 15.4273 8.55747V5.00069C15.4275 4.82094 15.3561 4.6485 15.229 4.52139C15.1019 4.39429 14.9295 4.32296 14.7497 4.32312H1.19954Z"
//                             fill="black" />
//                     </g>
//                 </svg> 4
//             </td>
//             <td>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
//                     xmlns="http://www.w3.org/2000/svg" class="shower">
//                     <g id="Shower">
//                         <path id="Shape" fill-rule="evenodd" clip-rule="evenodd"
//                             d="M17.0247 10.2949C17.221 10.2963 17.4082 10.3785 17.5421 10.522C17.6764 10.6628 17.7461 10.8531 17.7345 11.0473C17.5212 14.6112 14.5689 17.3923 10.9987 17.3927H7.4356C3.86533 17.3923 0.913099 14.6112 0.699814 11.0473C0.690463 10.8535 0.759541 10.6642 0.891454 10.522C1.02445 10.3767 1.21259 10.2942 1.40959 10.2949H3.97756C4.13406 10.2964 4.27305 10.1952 4.31968 10.0458C4.50504 9.45635 5.05037 9.05452 5.66825 9.05208H9.22068C9.83856 9.05452 10.3839 9.45635 10.5693 10.0458C10.6155 10.1939 10.7526 10.2948 10.9078 10.2949H14.7172C14.9132 10.2949 15.0721 10.136 15.0721 9.94001V2.48736C15.0729 2.20686 14.9084 1.9522 14.6524 1.83756C14.3964 1.72291 14.0969 1.76978 13.8882 1.95715L13.5972 2.24816C13.5025 2.34353 13.4698 2.48421 13.5127 2.61157C13.7602 3.34256 13.5724 4.15066 13.0279 4.6976L12.886 4.84311C12.6088 5.12019 12.1595 5.12019 11.8823 4.84311L10.005 2.96504C9.7279 2.68787 9.7279 2.23858 10.005 1.96141L10.1505 1.81591C10.7039 1.28721 11.503 1.1051 12.2308 1.34178C12.3573 1.38194 12.4955 1.34827 12.5893 1.25448L12.9179 0.925849C13.5389 0.35201 14.4406 0.199975 15.2154 0.538463C15.9903 0.876951 16.4914 1.64182 16.4923 2.48736V9.94001C16.4923 10.136 16.6512 10.2949 16.8472 10.2949H17.0247ZM8.8623 14.731C9.0583 14.731 9.21719 14.5722 9.21719 14.3762V10.8273C9.21719 10.6313 9.0583 10.4724 8.8623 10.4724H6.0232C5.8272 10.4724 5.66831 10.6313 5.66831 10.8273V14.3762C5.66831 14.5722 5.8272 14.731 6.0232 14.731H8.8623Z"
//                             fill="black" />
//                         <path id="Path"
//                             d="M7.08789 4.67918C7.19037 4.68008 7.29183 4.65877 7.38529 4.61672L8.67424 4.02193C8.90487 3.91606 9.0615 3.69519 9.08513 3.44253C9.10876 3.18986 8.9958 2.94378 8.7888 2.79699C8.5818 2.65019 8.31221 2.62498 8.08158 2.73085L6.79049 3.32493C6.48782 3.46459 6.32311 3.79606 6.39461 4.12165C6.46611 4.44723 6.75455 4.67919 7.08789 4.67918Z"
//                             fill="black" />
//                         <path id="Path_2"
//                             d="M10.7233 8.52698C11.0838 8.68075 11.5006 8.51331 11.6545 8.15293L12.2124 6.84694C12.3563 6.48871 12.1875 6.08118 11.8324 5.92962C11.4774 5.77806 11.0663 5.93806 10.9071 6.28977L10.3528 7.59789C10.2 7.95678 10.3655 8.3717 10.7233 8.52698Z"
//                             fill="black" />
//                         <path id="Path_3"
//                             d="M8.14258 6.80013C8.41838 7.07859 8.86767 7.08081 9.14621 6.8051L10.1555 5.80715C10.4265 5.53024 10.4254 5.08717 10.153 4.81166C9.88055 4.53614 9.43752 4.53 9.15756 4.79785L8.14826 5.7965C7.8696 6.0721 7.86706 6.52139 8.14258 6.80013Z"
//                             fill="black" />
//                     </g>
//                 </svg> 2
//             </td>
//             <td>
//                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
//                     xmlns="http://www.w3.org/2000/svg" class="size">
//                     <g id="Size">
//                         <path id="Path"
//                             d="M5.65201 3.61685C6.04401 3.61685 6.36178 3.29907 6.36178 2.90707V1.13263C6.36178 0.740629 6.04401 0.422852 5.65201 0.422852C5.26001 0.422852 4.94223 0.740629 4.94223 1.13263V2.90707C4.94223 3.29907 5.26001 3.61685 5.65201 3.61685Z"
//                             fill="black" />
//                         <path id="Path_2"
//                             d="M3.87759 5.3912C3.87759 4.9992 3.55981 4.68143 3.16781 4.68143H1.39337C1.00137 4.68143 0.683594 4.9992 0.683594 5.3912C0.683594 5.7832 1.00137 6.10098 1.39337 6.10098H3.16781C3.55981 6.10098 3.87759 5.7832 3.87759 5.3912Z"
//                             fill="black" />
//                         <path id="Path_3"
//                             d="M3.16781 11.7793H1.39337C1.00137 11.7793 0.683594 12.0971 0.683594 12.4891C0.683594 12.8811 1.00137 13.1989 1.39337 13.1989H3.16781C3.55981 13.1989 3.87759 12.8811 3.87759 12.4891C3.87759 12.0971 3.55981 11.7793 3.16781 11.7793Z"
//                             fill="black" />
//                         <path id="Path_4"
//                             d="M12.7498 0.422852C12.3578 0.422852 12.04 0.740629 12.04 1.13263V2.90707C12.04 3.29907 12.3578 3.61685 12.7498 3.61685C13.1418 3.61685 13.4596 3.29907 13.4596 2.90707V1.13263C13.4596 0.740629 13.1418 0.422852 12.7498 0.422852Z"
//                             fill="black" />
//                         <path id="Path_5"
//                             d="M5.65201 14.2636C5.26001 14.2636 4.94223 14.5814 4.94223 14.9734V16.7478C4.94223 17.1398 5.26001 17.4576 5.65201 17.4576C6.04401 17.4576 6.36178 17.1398 6.36178 16.7478V14.9734C6.36178 14.5814 6.04401 14.2636 5.65201 14.2636Z"
//                             fill="black" />
//                         <path id="Path_6"
//                             d="M12.7498 14.2636C12.3578 14.2636 12.04 14.5814 12.04 14.9734V16.7478C12.04 17.1398 12.3578 17.4576 12.7498 17.4576C13.1418 17.4576 13.4596 17.1398 13.4596 16.7478V14.9734C13.4596 14.5814 13.1418 14.2636 12.7498 14.2636Z"
//                             fill="black" />
//                         <path id="Path_7"
//                             d="M15.234 6.10098H17.0085C17.4005 6.10098 17.7183 5.7832 17.7183 5.3912C17.7183 4.9992 17.4005 4.68143 17.0085 4.68143H15.234C14.842 4.68143 14.5243 4.9992 14.5243 5.3912C14.5243 5.7832 14.842 6.10098 15.234 6.10098Z"
//                             fill="black" />
//                         <path id="Path_8"
//                             d="M17.0085 11.7793H15.234C14.842 11.7793 14.5243 12.0971 14.5243 12.4891C14.5243 12.8811 14.842 13.1989 15.234 13.1989H17.0085C17.4005 13.1989 17.7183 12.8811 17.7183 12.4891C17.7183 12.0971 17.4005 11.7793 17.0085 11.7793Z"
//                             fill="black" />
//                         <path id="Shape" fill-rule="evenodd" clip-rule="evenodd"
//                             d="M12.7498 4.68143C13.1418 4.68143 13.4596 4.9992 13.4596 5.3912V12.489C13.4596 12.881 13.1418 13.1987 12.7498 13.1987H5.65201C5.26001 13.1987 4.94223 12.881 4.94223 12.489V5.3912C4.94223 4.9992 5.26001 4.68143 5.65201 4.68143H12.7498ZM11.6851 11.7791C11.8811 11.7791 12.04 11.6202 12.04 11.4242V6.45577C12.04 6.25977 11.8811 6.10088 11.6851 6.10088H6.71663C6.52063 6.10088 6.36174 6.25977 6.36174 6.45577V11.4242C6.36174 11.6202 6.52063 11.7791 6.71663 11.7791H11.6851Z"
//                             fill="black" />
//                     </g>
//                 </svg> 2
//             </td>
//         </tr>`

//         article.appendChild(h4);
//         article.appendChild(p);
//         article.appendChild(span);
//         div.appendChild(article);
//         div.appendChild(table);

//         properties.appendChild(div)

//         div.addEventListener("click", () => {
//             console.log("hello")

//             const popup = document.createElement("div");
//             popup.classList.add('personal-property');
//             popup.setAttribute("id", "personal-property")

//             if (element.image) {
//                 const img = document.createElement("img");
//                 popup.appendChild(img)

//                 const reader = new FileReader()
//                 reader.onload = function (e) {
//                     img.src = e.target.result;
//                 };

//                 reader.readAsDataURL(element.image);
//             } else if (element.imagesource) {
//                 const img = document.createElement("img");
//                 img.src = element.imagesource;
//                 popup.appendChild(img)
//             }

//             const popuparticle = document.createElement("article");

//             const seller = document.createElement("h2");
//             if (element.name) {
//                 seller.innerHTML = `<span>Name of Seller:</span> ${element.name}`
//             } else {
//                 seller.innerHTML = `<span>Name of Seller:</span> Lorem, ipsum dolor`
//             }

//             const address = document.createElement("h3");
//             if (element.address) {
//                 address.innerHTML = `<span>Address of property:</span> ${element.address}`
//             } else {
//                 address.innerHTML = `<span>Address of property:</span> 2578 Folsom street, san francisco, CA, 94110`
//             }

//             const unit = document.createElement("h4");
//             if (element.unitNumber) {
//                 unit.innerHTML = `<span>Unit Number:</span> ${element.unitNumber}`
//             } else {
//                 unit.innerHTML = `<span>Unit Number:</span> 2578 `
//             }

//             const cityState = document.createElement("h4");
//             if (element.city && element.state) {
//                 cityState.innerHTML = `<span>City/State:</span> ${element.city}/${element.state}`
//             } else {
//                 cityState.innerHTML = `<span>City/State:</span> california/San Francisco`
//             }
//             const roomType = document.createElement("h4");
//             if (element.roomType) {
//                 roomType.innerHTML = `<span>Room Type:</span> ${element.roomType}`
//             } else {
//                 roomType.innerHTML = `<span>Room Type:</span> Private Room`
//             }
//             const price = document.createElement("h4");
//             if (element.price) {
//                 price.innerHTML = `<span>Price:</span> $${element.price}/Month`
//             } else {
//                 price.innerHTML = `<span>Price:</span> $1200/Month`
//             }
//             const propertyDetails = document.createElement("h3");
//             propertyDetails.textContent = "Property Details"

//             const description = document.createElement("p");
//             if (element.description) {
//                 description.innerHTML = `<span>Description:</span> ${element.description}`
//             } else {
//                 description.innerHTML = `<span>Description:</span> Lorem ipsum dolor sit,
//                 amet consectetur adipisicing elit.
//                  Ad asperiores molestias modi cupiditate sed non,
//                   ab delectus sunt quisquam in at quae, quis enim.
//                    Pariatur rem ipsam placeat aut iure sunt obcaecati,
//                     tempore aspernatur nulla odio provident.
//                      Eveniet consectetur totam provident soluta deserunt sit,
//                       quaerat hic necessitatibus at iure possimus sed assumenda
//                        exercitationem ullam modi impedit repellat voluptate.
//                         Eveniet saepe id harum. At iste blanditiis recusandae culpa
//                          deserunt inventore dolores commodi officia sapiente quisquam
//                           in nemo accusantium incidunt, iure eligendi repudiandae obcaecati natus?
//                            Quibusdam repellat enim molestiae deserunt,
//                             earum eveniet quis harum iusto optio quasi ipsum quia illo
//                              tenetur qui.`
//             }
//             const room = document.createElement("p");
//             room.innerHTML = `<span>Number of Rooms<i class='bx bxs-bed'></i>:</span> Four(4)`

//             const bath = document.createElement("p");
//             bath.innerHTML = `<span>Number of Bathrooms<i class="fa-solid fa-bath fa-flip-horizontal"></i>:</span> Two(2)`

//             const size = document.createElement("p");
//             size.innerHTML = `<span>Size(Occupants Per Room)<i class="ri-artboard-2-line"></i>:</span> Two(2)`

//             const button = document.createElement("button");
//             button.setAttribute("id", "closeProperty")
//             button.innerText = "Close Property"


//             popuparticle.appendChild(seller)
//             popuparticle.appendChild(address)
//             popuparticle.appendChild(unit)
//             popuparticle.appendChild(cityState)
//             popuparticle.appendChild(roomType)
//             popuparticle.appendChild(price)
//             popuparticle.appendChild(propertyDetails)
//             popuparticle.appendChild(description)
//             popuparticle.appendChild(room)
//             popuparticle.appendChild(bath)
//             popuparticle.appendChild(size)
//             popup.appendChild(popuparticle)
//             popup.appendChild(button)
//             properties.appendChild(popup)

//             overlay.style.display = "block"
//             body.classList.add("popup-active")


//             const closePopUp = () => {
//                 popup.style.display = "none"
//                 overlay.style.display = "none"
//                 body.classList.remove("popup-active")
//             }

//             button.addEventListener("click", closePopUp)
//             overlay.addEventListener("click", closePopUp)

//         })

//     });

// }


// image.addEventListener("change", () => {
//     if (image.files.length > 0) {
//         filename.textContent = image.files[0].name;
//     } else {
//         filename.textContent = "No file selected";
//     }
// })

// addProperty.addEventListener("click", (e) => {
//     e.preventDefault()

//     const property = {
//         name: sellerName.value,
//         address: address.value,
//         unitNumber: parseInt(unitNumber.value),
//         city: city.value,
//         state: state.value,
//         roomType: roomType.value,
//         price: parseInt(price.value),
//         description: description.value,
//         image: image.files[0]
//     }

//     form.reset();
//     filename.textContent = ""

//     allProperties.push(property);
//     pagination();

// })



// function updateActiveButton() {
//     buttons.forEach((button) => {
//         button.classList.remove("active");
//     });

//     const activeButton = paginationNav.querySelector(`button:nth-child(${currentPage + 1})`);
//     if (activeButton) {
//         activeButton.classList.add("active");
//     }


//     buttons.forEach((button, index) => {
//         if (currentPage === 1) {
//             if (index === 0) {
//                 button.setAttribute("class", "first")
//             } else {
//                 button.style.display = "block";
//             }
//         } else if (currentPage >= Math.ceil(allProperties.length / rowsPerPage)) {
//             if (index === 0) {
//                 button.removeAttribute("class", "first")
//             }
//             else if (index > currentPage) {
//                 button.setAttribute("class", "first")
//                 button.disabled = true
//             }
//             else {
//                 button.style.display = "block";
//                 // button.classList.remove("first")
//             }
//         }
//         else {
//             button.style.display = "block";
//         }
//     });
// }

// paginationNav.addEventListener("click", (event) => {
//     const clickedButton = event.target;

//     if (clickedButton.textContent === "Next") {
//         if (currentPage < Math.ceil(allProperties.length / rowsPerPage)) {
//             currentPage++;
//         }
//     } else if (clickedButton.textContent === "First") {
//         if (currentPage > 1) {
//             currentPage = 1;
//         }
//     } else {
//         currentPage = parseInt(clickedButton.textContent);
//     }

//     pagination()
//     updateActiveButton()

// });

// pagination()
// updateActiveButton();

// viewPropertyButton.addEventListener("click", viewProperty)

// document.getElementById("myLink").addEventListener("click", function (event) {
//     event.preventDefault();

//     var linkHref = this.getAttribute("href");

//     window.location.href = linkHref;
// });

// const navToggle = document.getElementById("menu");
// const navDropdown = document.getElementById("nav-dropdown")
// const times = document.getElementById("times")

// navToggle.addEventListener("click", () => {
//     navDropdown.style.display = "block"
//     times.style.display = "block"
//     navToggle.style.display = "none"
// })
// times.addEventListener("click", () => {
//     times.style.display = "none"
//     navToggle.style.display = "block"
//     navDropdown.style.display = "none"
// })
'use strict';

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsShowModal = document.querySelectorAll(".show-modal")

btnsShowModal.forEach((btn) => {
    console.log(btn.textContent)
})
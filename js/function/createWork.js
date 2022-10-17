"use strict"
const list = document.querySelector("#list")

export const createWork = (hour, stuff)=>{
 const work = document.createElement("li")
 work.classList.add("item")

 const time = document.createElement("strong")
 time.innerHTML = hour;

 work.appendChild(time)
 work.innerHTML += stuff;

 list.appendChild(work)
 console.log(work)
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ["Einstein", "Wajdan", "Zaviyar"];
function invite_guest(guest) {
    console.log(`Dear ${guest} , I am inviting you for having a dinner at my home`);
}
console.log("Guest list:", guest);
invite_guest(guest[0]);
invite_guest(guest[1]);
invite_guest(guest[2]);
console.log(`Oops! ${guest[0]} can't join us at the dinner`);
guest.shift(); //Deleting Einstein
guest.unshift("Ali"); //Replacing Einstein with Ali
console.log("Modified guest list is:", guest);
invite_guest(guest[0]);
invite_guest(guest[1]);
invite_guest(guest[2]);

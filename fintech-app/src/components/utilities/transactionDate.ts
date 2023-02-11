import { months } from "../../Global/months";

const date = new Date();
const txnYear = date.getFullYear();
const txnMonth = date.getMonth();
const month = months[txnMonth];
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
export const completedTxnDate = `${month} ${day}, ${txnYear}`;

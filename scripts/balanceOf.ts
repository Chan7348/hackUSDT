import { ethers } from "hardhat";

async function main() {
    const [ account ]  = await ethers.getSigners();
    const MyContract = await ethers.getContractFactory("TetherToken");
    const myContract = new ethers.Contract(
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        MyContract.interface,
        account
    );
    const balance = await myContract.balanceOf(
        "0xdac17f958d2ee523a2206206994597c13d831ec7"
    );

    console.log("Balance:", balance);
}

main()
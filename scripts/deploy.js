const hre = require('hardhat')

async function main() {
    const alice = await hre.reef.getSignerByName("testnet_account")
    await alice.claimDefaultAccount()

    const Greeter = await hre.reef.getContractFactory("Greeter", alice)
    const args = ["Hello world!"];
    const greeter = await Greeter.deploy(...args)
    await greeter.deployed()

    console.log({
        greeter_contract_address: greeter.address,
    })

    const ver_greeter = await hre.reef.verifyContract(greeter.address, "Greeter", ...args)
    
    console.log(ver_greeter);

    console.log("Initial value:", await greeter.greet())

    await greeter.setGreeting("Good Morning!");

    console.log("New value:", await greeter.greet())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
import { expect } from "chai";
import { Contract } from "ethers";
import { artifacts, contract, ethers } from "hardhat";
import Receiver from "../src";
const { expectRevert } = require("@openzeppelin/test-helpers");
const Token = artifacts.require("Token");

describe("Token", () => {
  let token: Contract;
  let receiver: Receiver;

  beforeEach(async () => {
    const [alice, bob] = await ethers.getSigners();

    token = await Token.new("Token", "TK", 18, "1000000", {
      from: alice.address,
    });

    receiver = new Receiver({
        provider: "http://fsd"
    });
  });

  it("test me", async () => {
    const [alice, bob] = await ethers.getSigners();

    expectRevert(token.transfer(bob.address, 1, { from: alice.address }));
  });
});

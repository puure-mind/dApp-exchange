import { formatAddressToShort } from "./index";

describe("web3 utils", () => {
  it("WhenHaveFullAddress_AndFormatAddressToShort_ThenHaveShortAddress", () => {
    //arrange
    const address = "0x22961F4EB722B9582E9743a662e6f1c051add4df";
    const expectedAddress = "0x22961F4...d4df";
    //act
    const shortAddress = formatAddressToShort(address);
    //assert
    expect(shortAddress).toEqual(expectedAddress);
  });
});

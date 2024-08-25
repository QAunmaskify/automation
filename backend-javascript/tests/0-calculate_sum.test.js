import assert from "assert";
import sinon from "sinon";

import { calculateNumber } from "../src/0-calculateSum.js";

describe("Wrap Math.round", function () {
  beforeEach(function () {
    sinon.spy(Math, "round");
    calculateNumber(1.2, 3.4);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe("calculateNumber(1.2, 3.4)", function () {
    it("should return true when Math.round called twice within calculateNumber", function () {
      assert.strictEqual(Math.round.calledTwice, true);
    });
    it("calculateNumber should assign 1.2 to Math.round for round first call", function () {
      assert.strictEqual(1.2, Math.round.getCall(0).args[0]);
    });
    it("Math.round(1.2) should equal 1 when 1.2 is approximated", function () {
      assert.strictEqual(1, Math.round.returnValues[0]);
    });
    it("calculateNumber should assign 3.4 to Math.round for round second call", function () {
      assert.strictEqual(3.4, Math.round.getCall(1).args[0]);
    });
    it("Math.round(3.4) should equal 3 when 3.4 is approximated", function () {
      assert.strictEqual(3, Math.round.returnValues[1]);
    });
  });
});

import assert from "assert";
import sinon from "sinon";

import { calculateNumber } from "../src/1-calcul.js";

describe("calculateNumber", function () {
  beforeEach(function () {
    sinon.spy(Math, "round");
  });

  afterEach(function () {
    sinon.restore();
  });

  // Test cases
  const calcNumber = sinon.spy(calculateNumber);

  // Addition operation test suites
  describe("SUM", function () {
    it("verify calculateNumber is called with the arguments: SUM, 1.4, and 4.5", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(true, calcNumber.calledWith("SUM", 1.4, 4.5));
    });
    it("verify Math.round is called twice within calculateNumber('SUM', 1.4, 4.5)", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(true, Math.round.calledTwice);
    });
    it("verify Math.round is first called with 1.4 within calculateNumber('SUM', 1.4, 4.5)", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(1.4, Math.round.getCall(0).args[0]);
    });
    it("verify Math.round is last called with 4.5 within calculateNumber('SUM', 1.4, 4.5)", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(4.5, Math.round.getCall(1).args[0]);
    });
    it("verify Math.round(1.4) called within calculateNumber returns 1", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(1, Math.round.returnValues[0]);
    });
    it("verify Math.round(4.5) called within calculateNumber returns 5", function () {
      calcNumber("SUM", 1.4, 4.5);
      assert.strictEqual(5, Math.round.returnValues[1]);
    });
    it("verify calculateNumber('SUM', 1.4, 4.5) equals 6", function () {
      assert.strictEqual(6, calcNumber("SUM", 1.4, 4.5));
    });
  });

  // Subtraction operation test suites
  describe("SUBTRACT", function () {
    it("verify calculateNumber is called with the arguments: SUBTRACT, 1.4, and 4.5", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(true, calcNumber.calledWith("SUBTRACT", 1.4, 4.5));
    });
    it("verify Math.round is called twice within calculateNumber('SUBTRACT', 1.4, 4.5)", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(true, Math.round.calledTwice);
    });
    it("verify Math.round is first called with 1.4 within calculateNumber('SUBTRACT', 1.4, 4.5)", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(1.4, Math.round.getCall(0).args[0]);
    });
    it("verify Math.round is last called with 4.5 within calculateNumber('SUBTRACT', 1.4, 4.5)", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(4.5, Math.round.getCall(1).args[0]);
    });
    it("verify Math.round(1.4) called within calculateNumber returns 1", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(1, Math.round.returnValues[0]);
    });
    it("verify Math.round(4.5) called within calculateNumber returns 5", function () {
      calcNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(5, Math.round.returnValues[1]);
    });
    it("verify calculateNumber('SUBTRACT', 1.4, 4.5) equals -4", function () {
      assert.strictEqual(-4, calcNumber("SUBTRACT", 1.4, 4.5));
    });
  });

  // Division operation test suites
  describe("DIVIDE", function () {
    it("verify calculateNumber is called with the arguments: DIVIDE, 1.4, and 4.5", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(true, calcNumber.calledWith("DIVIDE", 1.4, 4.5));
    });
    it("verify Math.round is called thrice within calculateNumber('DIVIDE', 1.4, 4.5)", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(true, Math.round.calledThrice);
    });
    it("verify Math.round first call within calculateNumber('DIVIDE', 1.4, 4.5) uses 4.5", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(4.5, Math.round.getCall(0).args[0]);
    });
    it("verify Math.round second call within calculateNumber('DIVIDE', 1.4, 4.5) uses 1.4", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(1.4, Math.round.getCall(1).args[0]);
    });
    it("verify Math.round last call within calculateNumber('DIVIDE', 1.4, 4.5) uses 4.5", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(4.5, Math.round.getCall(2).args[0]);
    });
    it("verify Math.round(1.4) called within calculateNumber returns 1", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(1, Math.round.returnValues[1]);
    });
    it("verify Math.round(4.5) called within calculateNumber returns 5", function () {
      calcNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(5, Math.round.returnValues[0]);
    });
    it("verify calculateNumber('DIVIDE', 1.4, 4.5) equals 0.2", function () {
      assert.strictEqual(0.2, calcNumber("DIVIDE", 1.4, 4.5));
    });
    it("verify calculateNumber is called with the arguments: DIVIDE, 1.4, and 0", function () {
      calcNumber("DIVIDE", 1.4, 0);
      assert.strictEqual(true, calcNumber.calledWith("DIVIDE", 1.4, 0));
    });
    it("verify Math.round is called only once within calculateNumber('DIVIDE', 1.4, 0)", function () {
      calcNumber("DIVIDE", 1.4, 0);
      assert.strictEqual(true, Math.round.calledOnce);
    });
    it("verify Math.round is only called with 0", function () {
      calcNumber("DIVIDE", 1.4, 0);
      assert.strictEqual(0, Math.round.getCall(0).args[0]);
    });
    it("verify Math.round(0) called within calculateNumber('DIVIDE', 1.4, 0) returns 0", function () {
      calcNumber("DIVIDE", 1.4, 0);
      assert.strictEqual(0, Math.round.returnValues[0]);
    });
    it("verify calculateNumber('DIVIDE', 1.4, 0) equals ERROR", function () {
      assert.strictEqual("Error", calcNumber("DIVIDE", 1.4, 0));
    });
  });
});

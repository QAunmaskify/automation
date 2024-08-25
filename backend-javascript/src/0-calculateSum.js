#!/usr/bin/node

export function calculateNumber(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return Math.round(a) + Math.round(b);
  }
}

import { assertEquals } from "jsr:@std/assert";
import { areEqual } from "./01_are_equal.js";

Deno.test("Two empty arrays should be equal", () => {
  assertEquals(areEqual([], []), true);
});

Deno.test("Single-element arrays with the same value should be equal", () => {
  assertEquals(areEqual([1], [1]), true);
});

Deno.test("Arrays with identical elements should be equal", () => {
  assertEquals(areEqual([1, 2, 3], [1, 2, 3]), true);
});

Deno.test("Arrays with different lengths should not be equal", () => {
  assertEquals(areEqual([1, 2], [1, 2, 3]), false);
});

Deno.test("Arrays with different elements should not be equal", () => {
  assertEquals(areEqual([1, 2, 3], [1, 2, 4]), false);
});

Deno.test(
  "Arrays with the same elements in different order should not be equal",
  () => {
    assertEquals(areEqual([1, 2, 3], [3, 2, 1]), false);
  }
);

Deno.test("An empty array and a non-empty array should not be equal", () => {
  assertEquals(areEqual([], [1]), false);
});

Deno.test("Arrays with identical negative numbers should be equal", () => {
  assertEquals(areEqual([-1, -2], [-1, -2]), true);
});

Deno.test(
  "Arrays with different data types (number vs string) should not be equal",
  () => {
    assertEquals(areEqual([1, 2, 3], [1, 2, "3"]), false);
  }
);

Deno.test(
  "Valid Test: tests if arrays with identical nested arrays are equal",
  () => {
    assertEquals(
      areEqual(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      ),
      true
    );
  }
);

Deno.test(
  "Invalid Test: tests if array with nested arrays and different elements are not equal",
  () => {
    assertEquals(
      areEqual(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [4, 5],
        ]
      ),
      false
    );
  }
);

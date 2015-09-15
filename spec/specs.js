describe('primeSift', function() {
  it("creates an array of primes from 2 to input number", function() {
    expect(primeSift(30)).to.eql([2,3,5,7,11,13,17,19,23,29]);
  });

  it("handles low number", function() {
    expect(primeSift(3)).to.eql([2,3]);
  });

  it("handles 2", function() {
    expect(primeSift(2)).to.eql([2]);
  });

  it("returns empty array when number is less than 2", function() {
    expect(primeSift(1)).to.eql([]);
  });
});

describe('arrayUpToNumber', function() {
  it("creates an array from 2 to input number", function() {
    expect(arrayUpToNumber(20)).to.eql([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  });
});

describe('isMultiple', function() {
  it("returns true if B is a mutliple of A", function() {
    expect(isMultiple(3, 9)).to.equal(true);
  });

  it("returns false if B is not a multiple of A", function() {
    expect(isMultiple(3, 10)).to.equal(false);
  });
});

describe('isPrime', function() {
  it("returns true when a number is prime", function() {
    expect(isPrime(17)).to.equal(true);
  });

  it("returns true when a number is prime", function() {
    expect(isPrime(2)).to.equal(true);
  });

  it("returns false when a number is not prime", function() {
    expect(isPrime(4)).to.equal(false);
  });

  it("returns false for 1", function() {
    expect(isPrime(1)).to.equal(false);
  });
});

describe('primesRecursive', function() {
  it("creates an array of primes from 2 to input number", function() {
    expect(primesRecursive(30)).to.eql([2,3,5,7,11,13,17,19,23,29]);
  });

  it("handles low number", function() {
    expect(primesRecursive(3)).to.eql([2,3]);
  });

  it("handles 2", function() {
    expect(primesRecursive(2)).to.eql([2]);
  });

  it("returns empty array when number is less than 2", function() {
    expect(primesRecursive(1)).to.eql([]);
  });
});

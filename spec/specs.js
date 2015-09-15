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

describe('primeSift', function() {
  it("creates an array of primes from 2 to input number", function() {
    expect(primeSift(30)).to.eql([2,3,5,7,11,13,17,19,23,29]);
  });

  it("handles low number", function() {
    expect(primeSift(2)).to.eql([2]);
  });

  it("yells about numbers less than 2", function() {
    expect(primeSift(1)).to.equal("No prime numbers.");
  });
});

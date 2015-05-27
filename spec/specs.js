describe('palindrome', function() {

  it("returns true if the given word is a palindrome", function() {
    expect(palindrome("racecar")).to.equal(true)
  });

  it("returns false if the given word is a palindrome", function() {
    expect(palindrome("burrito")).to.equal(false)
  });

  it("returns true if the given number is a palindrome", function() {
    expect(palindrome(123321)).to.equal(true)
  });


});

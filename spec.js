describe('Tester', function () {

  describe('.getFileNameExtension()', function () {
    it('should return a filename extension without the period', function () {
      var inputs = ["somefile.dat", "movie.torrent", "noextension", ".htaccess", "noext.", null],
          expected = ["dat", "torrent", null, "htaccess", "", null];

      expect(inputs.map(Tester.getFileNameExtension)).to.deep.equal(expected);
    })
  });

  describe('.getLongestString()', function () {
    it('should return the longest string', function () {
      var inputs = [
        ["a", "ab", "abc"],
        ["abc", "ab", "a"],
        ["big", ["ab", "a"], "tiny"],
        ["big", ["ab", "a", ["superbig", "a"]], "tiny"],
        [123, 23123123, "a"],
        [null, [], "a"]
      ];

      var expected = ["abc", "abc", "tiny", "superbig", "a", "a"];

      expect(inputs.map(Tester.getLongestString)).to.deep.equal(expected);
    })
  });

  describe('.areArraysEquals()', function () {
    it('should return true if both arrays contain the same values', function () {
      expect(Tester.areArraysEquals([], [])).to.be.true;
      expect(Tester.areArraysEquals(["a", "b", "c"], ["a", "b", "c"])).to.be.true;
      expect(Tester.areArraysEquals(["a", "b", "c"], ["ab", "", "c"])).to.be.false;
      expect(Tester.areArraysEquals(null, [])).to.be.false;
      expect(Tester.areArraysEquals(["a", null, "b"], ["a", "b"])).to.be.false;
      expect(Tester.areArraysEquals(null, [])).to.be.false;
      expect(Tester.areArraysEquals(null, null)).to.be.true;
    })
  });

  describe('.getCompressedString()', function () {
    it('should return a compressed string', function () {
      var inputs = ["abc", "aaabbc", null, "abccc", "aaaaaaaaaaaaaaabb"],
          expected = ["abc", "3a2bc", null, "ab3c", "15a2b"];

      expect(inputs.map(Tester.getCompressedString)).to.deep.equal(expected);
    })
  });

  describe('.getSortedArray()', function () {
    it('should sort the input array of string based on lexicographic order' +
        'of the corresponding compressed string', function () {
      var inputs = [
        ["a", "ab", "abc"],
        ["abc", "ab", "a"],
        ["abc", "aab", "abbb"],
        ["abc", "acc", "ab"],
        ["aaaa", "aaab", "ab"]
      ];

      var expected = [
        ["a", "ab", "abc"],
        ["a", "ab", "abc"],
        ["aab", "abbb", "abc"],
        ["acc", "ab", "abc"],
        ["aaab", "aaaa", "ab"]
      ];

      expect(inputs.map(Tester.getSortedArray)).to.deep.equal(expected);
    })
  })

});
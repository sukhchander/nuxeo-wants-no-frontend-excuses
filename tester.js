/**
 * This is where you have to code.
 *
 * See javadoc and associated unit tests to understand what is expected
 *
 * @author tiry
 *
 */

var Utility = {

  flatten: function (list) {
    return list.reduce(function (a, b) {
      return a.concat(Array.isArray(b) ? Utility.flatten(b) : b);
    }, []);
  },

  uniqueCharacters: function(str) {
    return str.split('').filter(function(item, index, array) {
      return array.indexOf(item) === index;
    });
  },

  countCharacters: function (str, value) {
    var regExp = new RegExp(value, "gi");
    var result = value;
    if (str.match(regExp)) {
      count = str.match(regExp).length;
      if (count > 1) result = count+value;
    }
    return result;
  }

}

var Tester = {

  /**
   * input will be a string, but it may not have a file extension. return the file
   * extension (with no period) if it has one, otherwise null
   *
   * @param file
   * @return null if input is null or filename has no extension and the
   *         extension without the period otherwise
   */
  getFileNameExtension: function (file) {
    if (file == null) return null;
    var extension = null;
    if (file != null && file != "") {
      if (file.indexOf('.') >= 0) {
        extension = file.split('.').pop().toLowerCase();
      }
    }
    return extension;
  },

  /**
   * return the longest string contained inside the input array
   *
   * @param values input Array of values
   * @return null if input is null and the longest string otherwise
   */
  getLongestString: function (values) {
    if (values == null || values.length == 0) return null;
    var flattened = Utility.flatten(values);
    var filtered = flattened.filter(function(val) {
      return typeof(val) === 'string';
    });
    var largest = 0;
    var longest = null;
    for (var i = 0; i < filtered.length; i++) {
      if (filtered[i].length > largest) {
        largest = filtered[i].length;
        longest = filtered[i];
      }
    }
    return longest;
  },

  /**
   * Returns true is both arrays contains the same values
   *
   * @param arr1 first Array to test
   * @param arr2 second Array to test
   * @return true if both arrays contains the same values
   */
  areArraysEquals: function (arr1, arr2) {
    if (arr1 == null && arr2 == null) {
      return true;
    } else if (arr1 != null && arr2 != null) {
      if (arr1 == [] && arr2 == []) return true;
      var length = arr1.length;
      if (length !== arr2.length) return false;
      for (var i = 0; i < length; i++) {
        if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        } else if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  },

  /**
   * Compress the input string with a very dummy algorithm : repeated letters
   * are replaced by {n}{letter} where n is the number of repetition and
   * {letter} is the letter. n must be superior to 1 (otherwise, simply output
   * the letter)
   *
   * @param str the input string that can only contains letters
   * @return the compressed String or null if the input is null
   */
  getCompressedString: function (str) {
    if (str == null) return null;
    var occurrences = Utility.uniqueCharacters(str).map(function(char) {
      return Utility.countCharacters(str, char);
    });
    return occurrences.join('');
  },

  /**
   * Sort the input array of string based on lexicographic order of the
   * corresponding compressed string
   *
   * @param arr the Array to sort
   * @return the sorted array
   */
  getSortedArray: function (arr) {
    var compressed = arr.map(function(str) {
      return {key: str, value: Tester.getCompressedString(str)};
    }).sort(function(a, b) {
      // sort by value -> compressed string
      if (a.value > b.value) {
        return 1;
      } else if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    var result = compressed.map(function(relation) {
      return relation.key;
    });
    return result;
  }

};
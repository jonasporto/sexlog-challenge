"use strict";

describe("ShuffleCharsHelper", function() {
  
  describe("#decode", function() {
  
    it("should not try decode numbers, spaces or symbols", function() {
      expect(ShuffleCharsHelper.decode('@. 123', 1212)).toEqual('@. 123');
    });

    it("should covert to antecessor letter", function() {
      expect(ShuffleCharsHelper.decode('bcd', 1)).toEqual('abc');
    });

    it("should return the same string", function() {
      expect(ShuffleCharsHelper.decode('abc', 26)).toEqual('abc');
      expect(ShuffleCharsHelper.decode('abc', 0)).toEqual('abc');
    });
  
  });
  
  describe("#encode", function() {
    
    it("should covert to sucessor letter", function() {
      expect(ShuffleCharsHelper.encode('abc', 1)).toEqual('bcd');
    });

    it("should return the same string", function() {
      expect(ShuffleCharsHelper.encode('abc', 26)).toEqual('abc');
      expect(ShuffleCharsHelper.encode('abc', 0)).toEqual('abc');
    });

    it("should return empty if key is less than 0", function() {
      expect(ShuffleCharsHelper.encode('abc', -6)).toEqual('');
    });

  });

  describe("#encode/ #decode", function() {

    it("should encode and decode correctly given a key between 1 and 26", function() {

      var aybabtu = "4ll y0ur b453 4r3 b3l0ng t0 u5!";

      for (var key = 1; key <= 26; key++) {
        var encoded = ShuffleCharsHelper.encode(aybabtu, key);
        var decoded = ShuffleCharsHelper.decode(encoded, key);
        expect(decoded).toEqual(aybabtu);
      }
  
    });
  
  });

});
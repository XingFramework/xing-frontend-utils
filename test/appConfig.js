import {whenGoto} from "../src/xing-frontend-utils/appConfig.js";

describe('whenGoto', function() {
  function locSearch(search){
    return {
      search(){
        return search;
      }
    };
  }

  it('should not grab non-matches', function() {
    expect(whenGoto(locSearch({test: "yes"}))).toEqual(false);
  });

  it('should rotate matched query to top', function() {
    expect(whenGoto(locSearch({goto: "place"}))).toEqual("place");
  });

  it('should handle complex search queries', function() {
    expect(whenGoto(locSearch({x:"1", y:"2", goto: "place"}))).toEqual("place?x=1&y=2");
  });
});

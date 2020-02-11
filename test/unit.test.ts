import {truthyAndUnique} from "../src/util";

describe('unit.tsの単体テストを書く', () => {

    test('truthyAndUniqueが期待通りに処理されることを確認する。', () => {

        expect(truthyAndUnique([true])).toEqual([true]);
        expect(truthyAndUnique([false, null, "", undefined, 0, "0", 1, "1", "1.1"])).toEqual([1, 1.1]);
    })
});

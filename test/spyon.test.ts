import {build} from "../src/util";

describe('console.logをspyonのテストの確認', () => {

    test('build時にログを有効にしていると指定回数ログが呼び出されメッセージが打倒であることを確認する', async (done) => {
        const spy = jest.spyOn(console, 'info');
        await build(true);
        expect(spy.mock.calls.length).toBe(2);
        expect(spy.mock.calls[0][0]).toBe("ビルドを開始します。");
        expect(spy.mock.calls[1][0]).toBe("ビルドを完了しました。");
        done();

        spy.mockRestore();
    });


    test('build時にログを無効にしているとログ関数が呼び出されていないことを確認する', async (done) => {
        const spy = jest.spyOn(console, 'info');
        await build(false);
        expect(spy.mock.calls.length).toBe(0);
        done();

        spy.mockRestore();
    });
});
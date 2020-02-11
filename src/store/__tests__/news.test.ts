import {Store as StoreFixture} from "./fixture"
import NewsModule , {MODULE_NAME} from "../news"


describe('NewsModuleの単体テスト', () => {

  describe('エラーメッセージの動作確認', () => {
    test('エラーメッセージが保存されていることを確認しエラーメッセージがクリアされていることを確認する', () => {
      const moduleFixture = StoreFixture.createModuleFixture<NewsModule>(MODULE_NAME, NewsModule);
      const accepted_test_data = [
        {
          id: 1,
          title: 'aaaa'
        }
      ];

      moduleFixture.SET_ITEMS(accepted_test_data);
      expect(accepted_test_data).toEqual(moduleFixture.news);
    })
  })

});

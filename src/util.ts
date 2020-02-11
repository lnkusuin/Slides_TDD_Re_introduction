import * as _ from "lodash";

/**
 * 引数にとった値から、truthyと評価される物だけ抽出し重複を省いた物のみにする
 * @param items
 */
export const truthyAndUnique = (items: any[]) => {
    if (!_.isArray(items)) {
        items = [];
    }

    items = _.map(items, (item: any) => {

        if(typeof item == 'string'){
            return Number(item)
        }

        if(typeof item == 'boolean'){
            return item
        }

        return !isNaN(item) ? item : item
    });

    return _.uniqBy(_.compact(items), Number);
};

/**
 * なんらかのビルド処理
 * @param isLog
 */
export const build = async (isLog: boolean) => {
    if(isLog){
        console.info('ビルドを開始します。');
    }

    // 何かビルドの処理をしている・・・・・

    if(isLog){
        console.info('ビルドを完了しました。');
    }
}

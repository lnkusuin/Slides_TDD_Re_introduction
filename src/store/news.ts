/**
* Newsモジュール
*/
import {Module, Mutation, VuexModule } from "vuex-module-decorators";

export const MODULE_NAME = 'news';

interface INews {
  readonly id: number
  readonly title: string
}

@Module({
  name: MODULE_NAME,
  stateFactory: true,
  namespaced: true
})
export default class NewsModule extends VuexModule {

  items?: INews[];

  @Mutation
  SET_ITEMS(items: INews[]){
    this.items = items
  }

  get news(){
    return this.items
  }
}

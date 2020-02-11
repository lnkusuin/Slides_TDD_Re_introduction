import Vue from 'vue';
import Vuex from 'vuex';
import {getModule, VuexModule} from "vuex-module-decorators";
Vue.use(Vuex);

export namespace Store {

  function get(name: string, value: any) {
    return new Vuex.Store({
      modules: {
        [name]: value
      }
    })
  }

  export function createModuleFixture<M extends VuexModule>(name: string, value: any): M {
    return getModule(value, get(name, value))
  }

}




import { RootStore } from "./rootStore";
import { makeAutoObservable } from "mobx";

export default class ModalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  /*@observable.shallow */ modal = {
    open: false,
    body: null,
  };

  /*@action*/ openModal = (content: any) => {
    this.modal.open = true;
    this.modal.body = content;
  };

  /*@action*/ closeModal = () => {
    this.modal.open = false;
    this.modal.body = null;
  };
}

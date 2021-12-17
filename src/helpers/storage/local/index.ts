const LocalStorage = (k: string): any => {
  const g: any = localStorage.getItem(k);
  const s: any = JSON.parse(g) ?? {};
  const sv: Function = () => localStorage.setItem(k, JSON.stringify(s));
  const S = {
    get(k: string) {
      return s[k];
    },
    set(k: string, v: any) {
      s[k] = v;
      sv();
    },
    remove(k: string) {
      delete s[k];
    },
  };
  return S;
};

// class createLocalStorage {
//   protected getKey;
//   protected store;
//   protected save;
//   constructor(key) {
//     this.getKey = localStorage.getItem(key);
//     this.store = JSON.parse(this.getKey) ?? {};
//     this.save = () => localStorage.setItem(key, JSON.stringify(this.store));
//   }
//   get(key) {
//     return this.store[key];
//   }
//   set(key, value) {
//     this.store[key] = value;
//     this.save();
//   }
//   remove(key) {
//     delete this.store[key];
//   }
// }

export default LocalStorage;

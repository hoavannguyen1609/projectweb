const routers = {
  products: {
    slide: "products/slide",
    highlightbox: "products/highlightbox",
    hotsale: "products/hotsale",
    phone: "products/phoneHome",
    laptop: "products/laptopHome",
    tablet: "products/tabletHome",
    watch: "products/watchHome",
    speak: "products/speakHome",
    loudspeaker: "products/loudspeakerHome",

    productDetail: "products/productDetail",
    productGroup: "products/productGroup",
  },

  search: "search",

  user: {
    sigin: "user/signin",
    signup: "user/signup",
    signout: "user/signout",
    confirmEmail: "user/confirmEmail",
    confirmOtp: "user/confirmOtp",
    setagainPassword: "user/setagainPassword",
  },

  cart: {
    cart: "cart/getcart",
    create: "cart/create",
    handleChange: "cart/handleChange",
  },

  admin: {
    getProducts: "admin/getProducts",
    checkAdmin: "admin/checkAdmin",
    changeProduct: "admin/changeProduct",
    form: "admin/changeIdProduct",
    updateProduct: "admin/updateProduct",
  },
};

export default routers;

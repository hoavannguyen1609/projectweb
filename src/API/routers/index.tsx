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

  user: {
    sigin: "user/signin",
    signup: "user/signup",
    signout: "/user/signout",
  },

  search: "search",

  cart: {
    cart: "cart/getcart",
    // removeCart: "cart/removeCart",
    // changeQuantity: "/cart/changeQuantity",
    create: "cart/create",
    handleChange: "cart/handleChange",
  },

  admin: {
    products: "admin/products",
  },

  checkAdmin: "checkAdmin",
};

export default routers;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto, sans-serif",
        JoseFin: "Josefin Slab, san-serif",
        Jost: "Jost, sans-serif",
      },
      backgroundImage: {
        fashion:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/category-fashions.jpg')",
        gadgets:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/category-gadget.jpg')",
        accessories:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/category-accessory.jpg')",
        fashionClothes:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/fashion-clothes.jpg')",
        printedClothes:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/printed-tshirt.jpg')",
      },
      gridTemplateColumns: {
        products: "repeat( auto-fit, minmax(209px, 1fr))",
      },
    },
  },
  plugins: [],
};

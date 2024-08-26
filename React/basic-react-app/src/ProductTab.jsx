import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItem: "center",
  };

  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Lenovo" idx={1} />
      <Product title="Prediator" idx={2} />
      <Product title="Hp" idx={3} />
    </div>
  );
}

export default ProductTab;

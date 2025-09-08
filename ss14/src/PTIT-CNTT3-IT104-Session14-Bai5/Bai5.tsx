import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

class ProductForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 1,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    console.log(this.state); 
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm mới sản phẩm</h2>

        <label>Mã sản phẩm</label>
        <input
          type="text"
          name="productCode"
          value={this.state.productCode}
          onChange={this.handleChange}
        />

        <label>Tên sản phẩm</label>
        <input
          type="text"
          name="productName"
          value={this.state.productName}
          onChange={this.handleChange}
        />

        <label>Giá</label>
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />

        <label>Số lượng</label>
        <input
          type="number"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />

        <button type="submit">Đăng ký</button>
      </form>
    );
  }
}

export default ProductForm;

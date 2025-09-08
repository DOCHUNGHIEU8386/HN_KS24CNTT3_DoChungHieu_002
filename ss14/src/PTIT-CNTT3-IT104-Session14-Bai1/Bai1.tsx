import { Component } from "react";

type InitialState = {
    userName: string;
};

export default class Bai1 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userName: "Đỗ Chung Hiếu",
        };
    }

   render() {
    return (
        <div>
            <h1>Khởi tạo state trong Class Component</h1>
            <p>Chao xìn, my name is : {this.state.userName}</p>
        </div>
    );
   } 
}
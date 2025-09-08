import React from "react";

interface Props {
  name: string;
}

function Child({ name }: Props) {
  return <h3>Họ và tên bên component con: {name}</h3>;
}

export default Child;

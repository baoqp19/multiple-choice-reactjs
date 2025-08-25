import React, { useEffect, useLayoutEffect } from "react";
import Content from "./Content";
import { useState } from "react";
import { useRef } from "react";
import { color } from "../libs/color";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const countRef = useRef(0)
  // const  a = {current : 0}

  // useEffect(() => {
  //   console.log("ref: " , countRef)
  //   console.log("a: ", a);
  // }, [count])

  const inputRef = useRef();
  const buttonRef = useRef();

  // useEffect(() => {
  //   // console.log(inputRef);
  //   // inputRef.current.focus();
  //   console.log(buttonRef);
  // }, []);

  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  });
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Nhập từ khóa..." />
      <Button ref={buttonRef} />
      <h1>Count: {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
          // countRef.current++
          // a.current++;
        }}
      >
        +
      </button>
      <Content />
    </div>
  );
};

export default color(Counter);

/*
  useRef() ghi nhớ giữ liệu khi re-reder, khi không thay đổi thì không re-reder
 
 useEffect();
 1. state thay đổi 
 2. Re-render
 3. UI Update
 4. Cleanup
 5. CallBack

  useLayoutEffect
 1. state thay đổi 
 2. Re-render
 3. Cleanup
 4. CallBack
 5. UI Update

  */

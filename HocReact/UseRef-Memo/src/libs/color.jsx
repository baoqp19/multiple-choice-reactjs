export const color = (ParentComponent) => {
  // ParentComponent -> component ban dau
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const Component = (props) => {
    // component moi duoc tao ra
    return (
      <div className="color" style={{ color: getRandomColor() }}>
        <ParentComponent {...props} />
      </div>
    ); // trả về component ban đầu
  };
  return Component;
};

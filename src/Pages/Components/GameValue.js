function GameValue({ state, dispatch, currentValue, setCurrentValue }) {
  // 設定dispatch & payload & 切換目前要下圈還是叉
  const handleClick = (e) => {
    dispatch({ type: e.target.id, payload: currentValue });
    if (currentValue === "noughts") {
      setCurrentValue("crosses");
    } else {
      setCurrentValue("noughts");
    }
  };
  return (
    <>
      <li onClick={handleClick} id="value1" className={state.value1}></li>
      <li onClick={handleClick} id="value2" className={state.value2}></li>
      <li onClick={handleClick} id="value3" className={state.value3}></li>
      <li onClick={handleClick} id="value4" className={state.value4}></li>
      <li onClick={handleClick} id="value5" className={state.value5}></li>
      <li onClick={handleClick} id="value6" className={state.value6}></li>
      <li onClick={handleClick} id="value7" className={state.value7}></li>
      <li onClick={handleClick} id="value8" className={state.value8}></li>
      <li onClick={handleClick} id="value9" className={state.value9}></li>
    </>
  );
}
export default GameValue;

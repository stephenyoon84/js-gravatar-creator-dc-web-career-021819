
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")

  form.addEventListener("submit", handleSubmit)


  function handleSubmit(e) {
    e.preventDefault();
    const input = form.querySelector('input').value;
    form.querySelector('input').value = "";
    const mdArray = getMdArray(input);
    const backColor = getColor(mdArray);
    clearGrid();
    fillGrid(mdArray, backColor);
  }

  function getMdArray(i){
    return md5.array(i);
  }

  function getColor(i){
    return `rgb(${i[0]}, ${i[1]}, ${i[2]})`
  }

  function fillGrid(arr, color){
    // const r1 = arr.slice(0,3);
    // r1.push(r1[1], r1[0])
    // const r2 = arr.slice(3,6);    r2.push(r2[1], r2[0])
    // const r3 = arr.slice(6,9);
    // r3.push(r3[1], r3[0])
    // const r4 = arr.slice(9,12);
    // r4.push(r4[1], r4[0])
    // const r5 = arr.slice(12,15);
    // r5.push(r5[1], r5[0])
    // const rs = [r1, r2, r3, r4, r5];
    const nArr = [...arr];
    const rs = [];
    while (nArr.length - 1){
      const subArr = nArr.splice(0,3)
      subArr.push(subArr[1], subArr[0])
      rs.push(subArr)
    }
    console.log(rs)
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        if (rs[i][j] % 2 === 0){
          document.getElementById(`${i}-${j}`).style.backgroundColor = color;
        }
      }
    }
  }
  function clearGrid(){
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        document.getElementById(`${i}-${j}`).style.backgroundColor = "";
      }
    }
  }
})

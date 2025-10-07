import React, { useEffect, useState } from "react";

const SelectedGrid = () => {

const [grid, setgrid] = useState([])
const [startPos, setstartPos] = useState([])
const [endPos, setendPos] = useState([])
  const createMatrix = () => {
    let matrix = [];
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        matrix.push({ pos: [i, j] });
      }
    }
    // console.log(matrix);
    setgrid(matrix)
  };


  const handleDrag = (startPoint) =>{
    setstartPos(startPoint)
  }
  const handleDragOver = (endPoint) =>{
    setendPos(endPoint)
  }
  const selectedGrids = () =>{
    console.log("Start : ",startPos,"End : ",endPos);
    let [startRow,startCol] = startPos;
    let [endRow,endCol] =endPos;

    let selecteds = [];
    for(let i=startRow;i<=endRow;i++){
        for(let j=startCol;j<=endCol;j++){
            selecteds.push({pos:i,j});
        }
    }
    
  }
  useEffect(()=>{
    if(startPos && endPos){
        selectedGrids();
    }
  },[startPos,endPos])

    useEffect(() => {
    createMatrix();
  }, []);
  return (
    <div>
      <div className="grid-container">
        <div className="grid">
            {grid.map((currItem,index)=>{
                return (
                    <div className="box" key={index}
                    draggable
                    onDrag={()=>handleDrag(currItem.pos)}
                    onDragOver={()=>handleDragOver(currItem.pos)}
                    >{currItem.pos}</div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default SelectedGrid;

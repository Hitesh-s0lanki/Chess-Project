function createDivAndArray() {
    let number = 0;
    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        let e1 = document.createElement("div");
        e1.classList.add("box");
        document.getElementById("board").appendChild(e1);
        temp.push(document.getElementsByClassName("box")[number++]);
      }
      arrayBox.push(temp);
    }
}
function colorBoard() {
    row = 0;
    col = 0;
    while (row != 8) {
      if (row % 2 == 0 && col % 2 != 0)
        arrayBox[row][col].style.backgroundColor = "#779457";
      else if (row % 2 != 0 && col % 2 == 0)
        arrayBox[row][col].style.backgroundColor = "#779457";
      else 
        arrayBox[row][col].style.backgroundColor = "#EAEDD0";
  
      col++;
      if (col == 8) {
        col = 0;
        row++;
      }
    }
}
function putValue(){
    //white value
    let row=7;
    let col=0;
    let number=0;
    while(row!=5){
        arrayBox[row][col].innerHTML=WhiteArray[number];

        if(number==WhiteArray.length-2)
        number=2;
        else if(row==7&&col>=4)
        number--;
        else if(row==7)
        number++;

        col++;
        
        if(col==8){
            col=0;
            row--;
            number=WhiteArray.length-1;
        }
    }
    //black value
    row=0;
     col=0;
     number=0;
    while(row!=2){
        arrayBox[row][col].innerHTML=BlackArray[number];

        if(number==BlackArray.length-2)
        number=2;
        else if(row==0&&col>=4)
        number--;
        else if(row==0)
        number++;

        col++;
        if(col==8){
            col=0;
            row++;
            number=BlackArray.length-1;
        }
    }
}
function backgroundSet(){
    let row=0;
    let col=0;
    while(row!=8){
        if(arrayBox[row][col].innerHTML!="")
            arrayBox[row][col].style.backgroundImage="url('photos/"+arrayBox[row][col].innerHTML+".png')";
        else{
            arrayBox[row][col].style.backgroundImage="none";
        }
        col++;
        if(col==8){
            row++;
            col=0;
        }
    }
}
function ForPlayer(){
    let player1=document.getElementById('player-1');
    let player2=document.getElementById('player-2');
    if(Turn){
        player1.style.backgroundColor="white";
        player2.style.backgroundColor="#262422";    
    }
    else{
        player2.style.backgroundColor="white";
        player1.style.backgroundColor="#262422"; 
    }
}
function restoreAll(){
    let row=0;
    let col=0;
    while(row!=8){
        arrayBox[row][col].style.borderRadius="0px";

        col++;
        if(col==8){
            col=0;
            row++;
        }
    }
}
function restoreAll50(){
    let row=0;
    let col=0;
    while(row!=8){
        if(arrayBox[row][col].style.borderRadius=="50px")
            arrayBox[row][col].style.borderRadius="0px";

        col++;
        if(col==8){
            col=0;
            row++;
        }
    }
}
function checker(arr,val){
    for(let i of arr){
        if(i==val)
            return true;
    }
    return false;
}
function movable(row,col){
    arrayBox[row][col].style.borderRadius="50px";
}
function Locate(a){
    let row=0;
    let col=0;
    while(row!=8){
        if(arrayBox[row][col].innerHTML==a)
            return [row,col];
        col++;
        if(col==8){
            col=0;
            row++;
        }
    }
}
//check statements
function Lcheck(row,col){
    if(Turn){
        if(row+1<=7&&col+2<=7&&(arrayBox[row+1][col+2].innerHTML=="blackKnight")){
            if(arrayBox[row+1][col+2].style.borderRadius=="50px")
            arrayBox[row+1][col+2].style.borderRadius="49px";
            return true;
        }
        if(row-1>=0&&col-2>=0&&(arrayBox[row-1][col-2].innerHTML=="blackKnight")){
            if(arrayBox[row-1][col-2].style.borderRadius=="50px")
                arrayBox[row-1][col-2].style.borderRadius="49px";
                return true;
        }
            
        if(row+1<=7&&col-2>=0&&(arrayBox[row+1][col-2].innerHTML=="blackKnight")){
            if(arrayBox[row+1][col-2].style.borderRadius=="50px")
            arrayBox[row+1][col-2].style.borderRadius="49px";
            return true;
        }            
        if(row-1>=0&&col+2<=7&&(arrayBox[row-1][col+2].innerHTML=="blackKnight")){
            if(arrayBox[row-1][col+2].style.borderRadius=="50px")
            arrayBox[row-1][col+2].style.borderRadius=="49px";
            return true;
        }
        if(row+2<=7&&col-1>=0&&(arrayBox[row+2][col-1].innerHTML=="blackKnight")){
            if(arrayBox[row+2][col-1].style.borderRadius=="50px")
            arrayBox[row+2][col-1].style.borderRadius="49px";
            return true;
        }
        if(row+2<=7&&col+1<=7&&(arrayBox[row+2][col+1].innerHTML=="blackKnight")){
            if(arrayBox[row+2][col+1].style.borderRadius=="50px")
            arrayBox[row+2][col+1].style.borderRadius="49px";
            return true;
        }
        if(row-2>=0&&col-1>=0&&(arrayBox[row-2][col-1].innerHTML=="blackKnight")){
            if(arrayBox[row-2][col-1].style.borderRadius=="50px")
            arrayBox[row-2][col-1].style.borderRadius="49px";
            return true;
        }
        if(row-2>=0&&col+1<=7&&(arrayBox[row-2][col+1].innerHTML=="blackKnight")){
            if(arrayBox[row-2][col+1].style.borderRadius=="50px")
            arrayBox[row-2][col+1].style.borderRadius="49px";
            return true;
        }
    }
    else{
        if(row+1<=7&&col+2<=7&&(arrayBox[row+1][col+2].innerHTML=="whiteKnight")){
            if(arrayBox[row+1][col+2].style.borderRadius=="50px")
            arrayBox[row+1][col+2].style.borderRadius="49px";
            return true;
        }
        if(row-1>=0&&col-2>=0&&(arrayBox[row-1][col-2].innerHTML=="whiteKnight")){
            if(arrayBox[row-1][col-2].style.borderRadius=="50px")
                arrayBox[row-1][col-2].style.borderRadius="49px";
                return true;
        }
            
        if(row+1<=7&&col-2>=0&&(arrayBox[row+1][col-2].innerHTML=="whiteKnight")){
            if(arrayBox[row+1][col-2].style.borderRadius=="50px")
            arrayBox[row+1][col-2].style.borderRadius="49px";
            return true;
        }            
        if(row-1>=0&&col+2<=7&&(arrayBox[row-1][col+2].innerHTML=="whiteKnight")){
            if(arrayBox[row-1][col+2].style.borderRadius=="50px")
            arrayBox[row-1][col+2].style.borderRadius=="49px";
            return true;
        }
        if(row+2<=7&&col-1>=0&&(arrayBox[row+2][col-1].innerHTML=="whiteKnight")){
            if(arrayBox[row+2][col-1].style.borderRadius=="50px")
            arrayBox[row+2][col-1].style.borderRadius="49px";
            return true;
        }
        if(row+2<=7&&col+1<=7&&(arrayBox[row+2][col+1].innerHTML=="whiteKnight")){
            if(arrayBox[row+2][col+1].style.borderRadius=="50px")
            arrayBox[row+2][col+1].style.borderRadius="49px";
            return true;
        }
        if(row-2>=0&&col-1>=0&&(arrayBox[row-2][col-1].innerHTML=="whiteKnight")){
            if(arrayBox[row-2][col-1].style.borderRadius=="50px")
            arrayBox[row-2][col-1].style.borderRadius="49px";
            return true;
        }
        if(row-2>=0&&col+1<=7&&(arrayBox[row-2][col+1].innerHTML=="whiteKnight")){
            if(arrayBox[row-2][col+1].style.borderRadius=="50px")
            arrayBox[row-2][col+1].style.borderRadius="49px";
            return true;
        }
    }
    return false;
}
function crossCheck(row,col){
    if(Turn){
        let tempCol=col+1;
        let tempRow=row+1;
        while(tempCol<7&&tempRow<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempCol<=7&&tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row&&tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            return true;
        }
/**************************************************************************************************************************************************************** */
        tempRow=row-1;
        tempCol=col-1;
        while(tempCol>0&&tempRow>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempCol>=0&&tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row&&tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            return true;
        }  
/**************************************************************************************************************************************************************** */
tempRow=row-1;
tempCol=col+1;
while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow--;
    tempCol++;
}
if(tempRow>=0&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
    while(tempRow!=row&&tempCol!=col){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
        arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow++;
        tempCol--;
    }
    return true;
}
/**************************************************************************************************************************************************************** */
tempRow=row+1;
tempCol=col-1;
while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow++;
    tempCol--;
}
if(tempRow<=7&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
    while(tempRow!=row&&tempCol!=col){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
        arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow--;
        tempCol++;
    }
    return true;
}
/**************************************************************************************************************************************************************** */
}
else{
        let tempCol=col+1;
        let tempRow=row+1;
        while(tempCol<7&&tempRow<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempCol<=7&&tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row&&tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            return true;
        }
/**************************************************************************************************************************************************************** */
        tempCol=col-1;
        tempRow=row-1;
        while(tempCol>0&&tempRow>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempCol>=0&&tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row&&tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            return true;
        }  
/**************************************************************************************************************************************************************** */
tempRow=row-1;
tempCol=col+1;
while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow--;
    tempCol++;
}
if(tempRow>=0&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
    while(tempRow!=row&&tempCol!=col){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
        arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow++;
        tempCol--;
    }
    return true;
}
/**************************************************************************************************************************************************************** */
tempCol=col-1;
tempRow=row+1;
while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow++;
    tempCol--;
}
if(tempRow<=7&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
    while(tempRow!=row&&tempCol!=col){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
        arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow--;
        tempCol++;
    }
    return true;
    }
}
/**************************************************************************************************************************************************************** */
return false;
}
function checkRook(row,col){
    if(Turn){
        let tempRow=row+1;
        let tempCol=col;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
        }
        if(tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackRook")){
           while(tempRow!=row){
            if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                arrayBox[tempRow][tempCol].style.borderRadius="49px";
            tempRow--;
           } 
           return true;
        }
            
/********************************************************************************************************************************* */
tempRow=row-1;
tempCol=col;
while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow--;
}
if(tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackRook")){
    while(tempRow!=row){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
            arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow++;
       } 
       return true;
}
/********************************************************************************************************************************* */
tempRow=row;
tempCol=col+1;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempCol++;
        }
        if(tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackRook")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                    tempCol--;
                } 
                return true;
            }

/********************************************************************************************************************************* */
tempRow=row;
tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempCol--;
        }
        if(tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackRook")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                    tempCol++;
                } 
                return true;
            }
/********************************************************************************************************************************* */
    }
    else{
        let tempRow=row+1;
        let tempCol=col;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
        }
        if(tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteRook")){
           while(tempRow!=row){
            if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                arrayBox[tempRow][tempCol].style.borderRadius="49px";
            tempRow--;
           } 
           return true;
        }
            
/********************************************************************************************************************************* */
tempRow=row-1;
tempCol=col;
while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML==""){
    tempRow--;
}
if(tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteRook")){
    while(tempRow!=row){
        if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
            arrayBox[tempRow][tempCol].style.borderRadius="49px";
        tempRow++;
       } 
       return true;
}
/********************************************************************************************************************************* */
tempRow=row;
tempCol=col+1;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempCol++;
        }
        if(tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteRook")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                    tempCol--;
                } 
                return true;
            }
/********************************************************************************************************************************* */
tempRow=row;
tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempCol--;
        }
        if(tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteRook")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                    tempCol++;
                } 
                return true;
            }
/********************************************************************************************************************************* */
    }
    return false;
}
function pawnCheck(row,col){
    if(Turn){
        if(row+1<=7&&col+1<=7&&(arrayBox[row+1][col+1].innerHTML=="blackPawn"||arrayBox[row+1][col+1].innerHTML=="blackKing")){
            if(arrayBox[row+1][col+1].style.borderRadius=="50px")
                arrayBox[row+1][col+1].style.borderRadius="49px";
                return true;
        }
        if(row+1<=7&&col-1>=0&&(arrayBox[row+1][col-1].innerHTML=="blackPawn"||arrayBox[row+1][col-1].innerHTML=="blackKing")){
            if(arrayBox[row+1][col-1].style.borderRadius=="50px")
                arrayBox[row+1][col-1].style.borderRadius="49px";
                return true;
        }
        if(row-1>=0&&col-1>=0&&(arrayBox[row-1][col-1].innerHTML=="blackPawn"||arrayBox[row-1][col-1].innerHTML=="blackKing")){
            if(arrayBox[row-1][col-1].style.borderRadius=="50px")
                arrayBox[row-1][col-1].style.borderRadius="49px";
                return true;
        }
        if(row-1>=0&&col+1<=7&&(arrayBox[row-1][col+1].innerHTML=="blackPawn"||arrayBox[row-1][col+1].innerHTML=="blackKing")){
            if(arrayBox[row-1][col+1].style.borderRadius=="50px")
                arrayBox[row-1][col+1].style.borderRadius="49px";
                return true;
        }
    }
    else{
        if(row+1<=7&&col+1<=7&&(arrayBox[row+1][col+1].innerHTML=="whitePawn"||arrayBox[row+1][col+1].innerHTML=="whiteKing")){
            if(arrayBox[row+1][col+1].style.borderRadius=="50px")
                arrayBox[row+1][col+1].style.borderRadius="49px";
                return true;
        }
        if(row+1<=7&&col-1>=0&&(arrayBox[row+1][col-1].innerHTML=="whitePawn"||arrayBox[row+1][col-1].innerHTML=="whiteKing")){
            if(arrayBox[row+1][col-1].style.borderRadius=="50px")
                arrayBox[row+1][col-1].style.borderRadius="49px";
                return true;
        }
        if(row-1>=0&&col-1>=0&&(arrayBox[row-1][col-1].innerHTML=="whitePawn"||arrayBox[row-1][col-1].innerHTML=="whiteKing")){
            if(arrayBox[row-1][col-1].style.borderRadius=="50px")
                arrayBox[row-1][col-1].style.borderRadius="49px";
                return true;
        }
        if(row-1>=0&&col+1<=7&&(arrayBox[row-1][col+1].innerHTML=="whitePawn"||arrayBox[row-1][col+1].innerHTML=="whiteKing")){
            if(arrayBox[row-1][col+1].style.borderRadius=="50px")
                arrayBox[row-1][col+1].style.borderRadius="49px";
                return true;
        } 
    }
    return false;
}
function checkKing(row,col){
    if(Turn){
        if(row+1<=7&&arrayBox[row+1][col].innerHTML=="blackKing"){
                return true;
        }
        if(row-1>=0&&arrayBox[row-1][col].innerHTML=="blackKing"){
                return true;
        }
        if(col-1>=0&&arrayBox[row][col-1].innerHTML=="blackKing"){
                return true;
        }
        if(col+1<=7&&arrayBox[row][col+1].innerHTML=="blackKing"){
                return true;
        }
    }
    else{
        if(row+1<=7&&arrayBox[row+1][col].innerHTML=="whiteKing"){
            return true;
    }
    if(row-1>=0&&arrayBox[row-1][col].innerHTML=="whiteKing"){
            return true;
    }
    if(col-1>=0&&arrayBox[row][col-1].innerHTML=="whiteKing"){
            return true;
    }
    if(col+1<=7&&arrayBox[row][col+1].innerHTML=="whiteKing"){
            return true;
    }
    }
    return false;
}
function checkConditon(){
    let KingPlace=Locate(Turn?"whiteKing":"blackKing");
        let row=KingPlace[0];
        let col=KingPlace[1];
    if(Lcheck(row,col)||crossCheck(row,col)||checkRook(row,col)||pawnCheck(row,col))
        return true;
    return false;
}
//special pair move
function CrossPairCheck(row,col){
    if(Turn){
        let tempRow=row+1;
        let tempCol=col+1;
        let first=false;
        let second=false;
        while(tempRow<7&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempRow<=7&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col-1;
        while(tempRow>0&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempRow>=0&&tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
         tempRow=row+1;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempRow<=7&&tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col-1;
        while(tempRow>0&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempRow>=0&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/************************************************************************************************************************ */
        tempRow=row+1;
         tempCol=col-1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol--;
        }
        if(tempRow<=7&&tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol++;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col+1;
        while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol++;
        }
        if(tempRow>=0&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol--;
            }
            second=true;
        }
        if(first&&second)
            return true;

       /************************************************************************************************************************/ 
       tempRow=row+1;
         tempCol=col-1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol--;
        }
        if(tempRow<=7&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackQueen"||arrayBox[tempRow][tempCol].innerHTML=="blackBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol++;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col+1;
        while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol++;
        }
        if(tempRow>=0&&tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol--;
            }
            second=true;
        }
        if(first&&second)
            return true;
    }
    else{
        let tempRow=row+1;
        let tempCol=col+1;
        let first=false;
        let second=false;
        while(tempRow<7&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempRow<=7&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col-1;
        while(tempRow>0&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempRow>=0&&tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
         tempRow=row+1;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol++;
        }
        if(tempRow<=7&&tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col-1;
        while(tempRow>0&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol--;
        }
        if(tempRow>=0&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/************************************************************************************************************************ */
        tempRow=row+1;
         tempCol=col-1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol--;
        }
        if(tempRow<=7&&tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol++;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col+1;
        while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol++;
        }
        if(tempRow>=0&&tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol--;
            }
            second=true;
        }
        if(first&&second)
            return true;

       /************************************************************************************************************************/ 
       tempRow=row+1;
         tempCol=col-1;
         first=false;
         second=false;
        while(tempRow<7&&tempCol>0&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow++;
            tempCol--;
        }
        if(tempRow<=7&&tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteQueen"||arrayBox[tempRow][tempCol].innerHTML=="whiteBishop")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
                tempCol++;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col+1;
        while(tempRow>0&&tempCol<7&&arrayBox[tempRow][tempCol].innerHTML==""){
            tempRow--;
            tempCol++;
        }
        if(tempRow>=0&&tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
                tempCol--;
            }
            second=true;
        }
        if(first&&second)
            return true;
    }
    return false;
}
function plusCheck(row,col){
    if(Turn){
        let tempRow=row+1;
        let tempCol=col;
        let first=false;
        let second=false;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow++;
        if(tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackRook"||arrayBox[tempRow][tempCol].innerHTML=="blackQueen")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col;
        while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow--;
        if(tempRow>=0&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row+1;
         tempCol=col;
         first=false;
         second=false;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow++;
        if(tempRow<=7&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col;
        while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow--;
        if(tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackRook"||arrayBox[tempRow][tempCol].innerHTML=="blackQueen")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
        if(tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol--;
            }
            first=true;
        }
        tempRow=row;
        tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol--;
        if(tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="blackRook"||arrayBox[tempRow][tempCol].innerHTML=="blackQueen")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
        if(tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="blackRook"||arrayBox[tempRow][tempCol].innerHTML=="blackQueen")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol--;
            }
            first=true;
        }
        tempRow=row;
        tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol--;
        if(tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="whiteKing"){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
    }
    else{
        let tempRow=row+1;
        let tempCol=col;
        let first=false;
        let second=false;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow++;
        if(tempRow<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteRook"||arrayBox[tempRow][tempCol].innerHTML=="whiteQueen")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col;
        while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow--;
        if(tempRow>=0&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row+1;
         tempCol=col;
         first=false;
         second=false;
        while(tempRow<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow++;
        if(tempRow<=7&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow--;
            }
            first=true;
        }
        tempRow=row-1;
        tempCol=col;
        while(tempRow>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempRow--;
        if(tempRow>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteRook"||arrayBox[tempRow][tempCol].innerHTML=="whiteQueen")){
            while(tempRow!=row){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempRow++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
        if(tempCol<=7&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol--;
            }
            first=true;
        }
        tempRow=row;
        tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol--;
        if(tempCol>=0&&(arrayBox[tempRow][tempCol].innerHTML=="whiteRook"||arrayBox[tempRow][tempCol].innerHTML=="whiteQueen")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
/********************************************************************************* */
        tempRow=row;
         tempCol=col+1;
         first=false;
         second=false;
        while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
        if(tempCol<=7&&(arrayBox[tempRow][tempCol].innerHTML=="whiteRook"||arrayBox[tempRow][tempCol].innerHTML=="whiteQueen")){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol--;
            }
            first=true;
        }
        tempRow=row;
        tempCol=col-1;
        while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol--;
        if(tempCol>=0&&arrayBox[tempRow][tempCol].innerHTML=="blackKing"){
            while(tempCol!=col){
                if(arrayBox[tempRow][tempCol].style.borderRadius=="50px")
                    arrayBox[tempRow][tempCol].style.borderRadius="49px";
                tempCol++;
            }
            second=true;
        }
        if(first&&second)
            return true;
    }
    return false
}
//points and Move
function point(a){
    let score=document.getElementById(Turn?"player-1_score":"player-2_score");
    if(a=="whitePawn"||a=="blackPawn")
        score.innerHTML=Number(score.innerHTML)+1;
    else if(a=="whiteKnight"||a=="blackKnight"||a=="whiteBishop"||a=="blackBishop")
        score.innerHTML=Number(score.innerHTML)+3;
    else if(a=="whiteRook"||a=="blackRook")
        score.innerHTML=Number(score.innerHTML)+5;
    else if(a=="whiteQueen"||a=="blackQueen")
        score.innerHTML=Number(score.innerHTML)+9;
}
function move(){
    let updte=document.getElementById(Turn?"player-1_moves":"player-2_moves");
    updte.innerHTML=Number(updte.innerHTML)+1;
}
//Moves in chess
function pawnMove(row,col,a){
    if(Turn&&checker(WhiteArray,a)){
        if(row==6&&arrayBox[row-2][col].innerHTML==""&&arrayBox[row-1][col].innerHTML=="")
            movable(row-2,col);
        if(row<7&&arrayBox[row-1][col].innerHTML=="")
            movable(row-1,col);
        if(col>=1&&row<7&&checker(BlackArray,arrayBox[row-1][col-1].innerHTML))
            movable(row-1,col-1);
        if(col<=6&&row<7&&checker(BlackArray,arrayBox[row-1][col+1].innerHTML))
            movable(row-1,col+1);
    }
    else if(Turn==false&&checker(BlackArray,a)){
        if(row==1&&arrayBox[row+2][col].innerHTML==""&&arrayBox[row+1][col].innerHTML=="")
            movable(row+2,col);
        if(row>0&&arrayBox[row+1][col].innerHTML=="")
            movable(row+1,col);
        if(col>=1&&row>0&&checker(WhiteArray,arrayBox[row+1][col-1].innerHTML))
            movable(row+1,col-1);
        if(col<=6&&row>0&&checker(WhiteArray,arrayBox[row+1][col+1].innerHTML))
            movable(row+1,col+1);
    }
    if(checkConditon()||CrossPairCheck(row,col)||plusCheck(row,col)){
        restoreAll50();
    }
}
function knightMove(row,col,a){
    if(Turn&&checker(WhiteArray,a)){
        if(row+1<=7&&col+2<=7&&(arrayBox[row+1][col+2].innerHTML==""||checker(BlackArray,arrayBox[row+1][col+2].innerHTML)))
            movable(row+1,col+2);
        if(row-1>=0&&col-2>=0&&(arrayBox[row-1][col-2].innerHTML==""||checker(BlackArray,arrayBox[row-1][col-2].innerHTML)))
            movable(row-1,col-2);
        if(row+1<=7&&col-2>=0&&(arrayBox[row+1][col-2].innerHTML==""||checker(BlackArray,arrayBox[row+1][col-2].innerHTML)))
            movable(row+1,col-2);
        if(row-1>=0&&col+2<=7&&(arrayBox[row-1][col+2].innerHTML==""||checker(BlackArray,arrayBox[row-1][col+2].innerHTML)))
            movable(row-1,col+2);
        if(row+2<=7&&col-1>=0&&(arrayBox[row+2][col-1].innerHTML==""||checker(BlackArray,arrayBox[row+2][col-1].innerHTML)))
            movable(row+2,col-1);
        if(row+2<=7&&col+1<=7&&(arrayBox[row+2][col+1].innerHTML==""||checker(BlackArray,arrayBox[row+2][col+1].innerHTML)))
            movable(row+2,col+1);
        if(row-2>=0&&col-1>=0&&(arrayBox[row-2][col-1].innerHTML==""||checker(BlackArray,arrayBox[row-2][col-1].innerHTML)))
            movable(row-2,col-1);
        if(row-2>=0&&col+1<=7&&(arrayBox[row-2][col+1].innerHTML==""||checker(BlackArray,arrayBox[row-2][col+1].innerHTML)))
            movable(row-2,col+1);  
    }
    else if(Turn==false&&checker(BlackArray,a)){
        if(row+1<=7&&col+2<=7&&(arrayBox[row+1][col+2].innerHTML==""||checker(WhiteArray,arrayBox[row+1][col+2].innerHTML)))
            movable(row+1,col+2);
        if(row-1>=0&&col-2>=0&&(arrayBox[row-1][col-2].innerHTML==""||checker(WhiteArray,arrayBox[row-1][col-2].innerHTML)))
            movable(row-1,col-2);
        if(row+1<=7&&col-2>=0&&(arrayBox[row+1][col-2].innerHTML==""||checker(WhiteArray,arrayBox[row+1][col-2].innerHTML)))
            movable(row+1,col-2);
        if(row-1>=0&&col+2<=7&&(arrayBox[row-1][col+2].innerHTML==""||checker(WhiteArray,arrayBox[row-1][col+2].innerHTML)))
            movable(row-1,col+2);
        if(row+2<=7&&col-1>=0&&(arrayBox[row+2][col-1].innerHTML==""||checker(WhiteArray,arrayBox[row+2][col-1].innerHTML)))
            movable(row+2,col-1);
        if(row+2<=7&&col+1<=7&&(arrayBox[row+2][col+1].innerHTML==""||checker(WhiteArray,arrayBox[row+2][col+1].innerHTML)))
            movable(row+2,col+1);
        if(row-2>=0&&col-1>=0&&(arrayBox[row-2][col-1].innerHTML==""||checker(WhiteArray,arrayBox[row-2][col-1].innerHTML)))
            movable(row-2,col-1);
        if(row-2>=0&&col+1<=7&&(arrayBox[row-2][col+1].innerHTML==""||checker(WhiteArray,arrayBox[row-2][col+1].innerHTML)))
            movable(row-2,col+1);  
    }
    if(checkConditon()||CrossPairCheck(row,col)||plusCheck(row,col)){
        restoreAll50();
    }
}
function bishopMove(row,col,a){
    if(Turn&&checker(WhiteArray,a)){
        let tempCol=col;
        let tempRow=row;
        while(tempCol+1<=7&&tempRow+1<=7&&arrayBox[tempRow+1][tempCol+1].innerHTML==""){
            movable(tempRow+1,tempCol+1);
            tempRow++;
            tempCol++;
        }
        if(tempCol+1<=7&&tempRow+1<=7&&checker(BlackArray,arrayBox[tempRow+1][tempCol+1].innerHTML))
            movable(tempRow+1,tempCol+1);
//************************************************************************** */
        tempCol=col;
        tempRow=row;
        while(tempCol-1>=0&&tempRow-1>=0&&arrayBox[tempRow-1][tempCol-1].innerHTML==""){
            movable(tempRow-1,tempCol-1);
            tempRow--;
            tempCol--;
        }
        if(tempCol-1>=0&&tempRow-1>=0&&checker(BlackArray,arrayBox[tempRow-1][tempCol-1].innerHTML))
            movable(tempRow-1,tempCol-1);
/**************************************************************************************** */
        tempRow=row;
        tempCol=col;
        while(tempRow-1>=0&&tempCol+1<=7&&arrayBox[tempRow-1][tempCol+1].innerHTML==""){
            movable(tempRow-1,tempCol+1);
            tempRow--;
            tempCol++;
        }
        if(tempRow-1>=0&&tempCol+1<=7&&checker(BlackArray,arrayBox[tempRow-1][tempCol+1].innerHTML))
            movable(tempRow-1,tempCol+1);
/**************************************************************************************** */
        tempCol=col;
        tempRow=row;
        while(tempRow+1<=7&&tempCol-1>=0&&arrayBox[tempRow+1][tempCol-1].innerHTML==""){
            movable(tempRow+1,tempCol-1);
            tempRow++;
            tempCol--;
        }
        if(tempRow+1<=7&&tempCol-1>=0&&checker(BlackArray,arrayBox[tempRow+1][tempCol-1].innerHTML))
            movable(tempRow+1,tempCol-1);
        
    }
    else if(Turn==false&&checker(BlackArray,a)){
        let tempCol=col;
        let tempRow=row;
        while(tempCol+1<=7&&tempRow+1<=7&&arrayBox[tempRow+1][tempCol+1].innerHTML==""){
            movable(tempRow+1,tempCol+1);
            tempRow++;
            tempCol++;
        }
        if(tempCol+1<=7&&tempRow+1<=7&&checker(WhiteArray,arrayBox[tempRow+1][tempCol+1].innerHTML))
            movable(tempRow+1,tempCol+1);
//************************************************************************** */
        tempCol=col;
        tempRow=row;
        while(tempCol-1>=0&&tempRow-1>=0&&arrayBox[tempRow-1][tempCol-1].innerHTML==""){
            movable(tempRow-1,tempCol-1);
            tempRow--;
            tempCol--;
        }
        if(tempCol-1>=0&&tempRow-1>=0&&checker(WhiteArray,arrayBox[tempRow-1][tempCol-1].innerHTML))
            movable(tempRow-1,tempCol-1);
/**************************************************************************************** */
        tempRow=row;
        tempCol=col;
        while(tempRow-1>=0&&tempCol+1<=7&&arrayBox[tempRow-1][tempCol+1].innerHTML==""){
            movable(tempRow-1,tempCol+1);
            tempRow--;
            tempCol++;
        }
        if(tempRow-1>=0&&tempCol+1<=7&&checker(WhiteArray,arrayBox[tempRow-1][tempCol+1].innerHTML))
            movable(tempRow-1,tempCol+1);
/**************************************************************************************** */
        tempCol=col;
        tempRow=row;
        while(tempRow+1<=7&&tempCol-1>=0&&arrayBox[tempRow+1][tempCol-1].innerHTML==""){
            movable(tempRow+1,tempCol-1);
            tempRow++;
            tempCol--;
        }
        if(tempRow+1<=7&&tempCol-1>=0&&checker(WhiteArray,arrayBox[tempRow+1][tempCol-1].innerHTML))
            movable(tempRow+1,tempCol-1);
    }
    if(checkConditon()||CrossPairCheck(row,col)||plusCheck(row,col)){
        restoreAll50();
    }
}
function rookMove(row,col,a){
    if(Turn&&checker(WhiteArray,a)){
        let tempRow=row;
        let tempCol=col;
        while(tempRow+1<=7&&arrayBox[tempRow+1][tempCol].innerHTML==""){
            movable(tempRow+1,tempCol);
            tempRow++;
        }
        if(tempRow+1<=7&&checker(BlackArray,arrayBox[tempRow+1][tempCol].innerHTML))
            movable(tempRow+1,tempCol);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempRow-1>=0&&arrayBox[tempRow-1][tempCol].innerHTML==""){
            movable(tempRow-1,tempCol);
            tempRow--;
        }
        if(tempRow-1>=0&&checker(BlackArray,arrayBox[tempRow-1][tempCol].innerHTML))
            movable(tempRow-1,tempCol);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempCol+1<=7&&arrayBox[tempRow][tempCol+1].innerHTML==""){
            movable(tempRow,tempCol+1);
            tempCol++;
        }
        if(tempCol+1<=7&&checker(BlackArray,arrayBox[tempRow][tempCol+1].innerHTML))
            movable(tempRow,tempCol+1);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempCol-1>=0&&arrayBox[tempRow][tempCol-1].innerHTML==""){
            movable(tempRow,tempCol-1);
            tempCol--;
        }
        if(tempCol-1>=0&&checker(BlackArray,arrayBox[tempRow][tempCol-1].innerHTML))
            movable(tempRow,tempCol-1);
/********************************************************************************************************************************* */
    }
    else if(Turn==false&&checker(BlackArray,a)){
        let tempRow=row;
        let tempCol=col;
        while(tempRow+1<=7&&arrayBox[tempRow+1][tempCol].innerHTML==""){
            movable(tempRow+1,tempCol);
            tempRow++;
        }
        if(tempRow+1<=7&&checker(WhiteArray,arrayBox[tempRow+1][tempCol].innerHTML))
            movable(tempRow+1,tempCol);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempRow-1>=0&&arrayBox[tempRow-1][tempCol].innerHTML==""){
            movable(tempRow-1,tempCol);
            tempRow--;
        }
        if(tempRow-1>=0&&checker(WhiteArray,arrayBox[tempRow-1][tempCol].innerHTML))
            movable(tempRow-1,tempCol);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempCol+1<=7&&arrayBox[tempRow][tempCol+1].innerHTML==""){
            movable(tempRow,tempCol+1);
            tempCol++;
        }
        if(tempCol+1<=7&&checker(WhiteArray,arrayBox[tempRow][tempCol+1].innerHTML))
            movable(tempRow,tempCol+1);
/********************************************************************************************************************************* */
        tempRow=row;
        tempCol=col;
        while(tempCol-1>=0&&arrayBox[tempRow][tempCol-1].innerHTML==""){
            movable(tempRow,tempCol-1);
            tempCol--;
        }
        if(tempCol-1>=0&&checker(WhiteArray,arrayBox[tempRow][tempCol-1].innerHTML))
            movable(tempRow,tempCol-1);
/********************************************************************************************************************************* */
    }
    if(checkConditon()||CrossPairCheck(row,col)||plusCheck(row,col)){
        restoreAll50();
    }
}
function kingMove(row,col,a){
    if(Turn&&checker(WhiteArray,a)){
        if(row+1<=7&&(arrayBox[row+1][col].innerHTML==""||checker(BlackArray,arrayBox[row+1][col].innerHTML))){
            if(Lcheck(row+1,col)||crossCheck(row+1,col)||checkRook(row+1,col)||pawnCheck(row+1,col)||checkKing(row+1,col)){}
            else{
                if(row-1>=0&&checkRook(row-1,col)&&checker(BlackArray,arrayBox[row+1][col].innerHTML)==false){}
                else{
                    movable(row+1,col);
                }
            }
        }
        if(row-1>=0&&(arrayBox[row-1][col].innerHTML==""||checker(BlackArray,arrayBox[row-1][col].innerHTML))){
            if(Lcheck(row-1,col)||crossCheck(row-1,col)||checkRook(row-1,col)||pawnCheck(row-1,col)||checkKing(row-1,col)){}
            else{
                if(row+1<=7&&checkRook(row+1,col)&&checker(BlackArray,arrayBox[row-1][col].innerHTML)==false){}
                else{
                    movable(row-1,col);
                }
            }
        }
        if(col+1<=7&&(arrayBox[row][col+1].innerHTML==""||checker(BlackArray,arrayBox[row][col+1].innerHTML))){
            if(Lcheck(row,col+1)||crossCheck(row,col+1)||checkRook(row,col+1)||pawnCheck(row,col+1)||checkKing(row,col+1)){}
            else{
                if(col-1>=0&&checkRook(row,col-1)&&checker(BlackArray,arrayBox[row][col+1].innerHTML)==false){}
                else{
                    movable(row,col+1);
                }
            }
        }
        if(col-1>=0&&(arrayBox[row][col-1].innerHTML==""||checker(BlackArray,arrayBox[row][col-1].innerHTML))){
            if(Lcheck(row,col-1)||crossCheck(row,col-1)||checkRook(row,col-1)||pawnCheck(row,col-1)||checkKing(row,col-1)){}
            else{
                if(col+1<=7&&checkRook(row,col+1)&&checker(BlackArray,arrayBox[row][col-1].innerHTML)==false){}
                else{
                    movable(row,col-1);
                }
            }
        }
        if(row+1<=7&&col+1<=7&&(arrayBox[row+1][col+1].innerHTML==""||checker(BlackArray,arrayBox[row+1][col+1].innerHTML))){
            if(Lcheck(row+1,col+1)||crossCheck(row+1,col+1)||checkRook(row+1,col+1)||pawnCheck(row+1,col+1)||checkKing(row+1,col+1)){}
            else{
                if(row-1>=0&&col-1>=0&&crossCheck(row-1,col-1)&&checker(BlackArray,arrayBox[row+1][col+1].innerHTML)==false){}
                else{
                    movable(row+1,col+1);
                }
            }
        }
        if(row-1>=0&&col-1>=0&&(arrayBox[row-1][col-1].innerHTML==""||checker(BlackArray,arrayBox[row-1][col-1].innerHTML))){
            if(Lcheck(row-1,col-1)||crossCheck(row-1,col-1)||checkRook(row-1,col-1)||pawnCheck(row-1,col-1)||checkKing(row-1,col-1)){}
            else{
                if(row+1<=7&&col+1<=7&&crossCheck(row+1,col+1)&&checker(BlackArray,arrayBox[row-1][col-1].innerHTML)==false){}
                else{
                    movable(row-1,col-1);
                }
            }
        }
        if(row+1<=7&&col-1>=0&&(arrayBox[row+1][col-1].innerHTML==""||checker(BlackArray,arrayBox[row+1][col-1].innerHTML))){
            if(Lcheck(row+1,col-1)||crossCheck(row+1,col-1)||checkRook(row+1,col-1)||pawnCheck(row+1,col-1)||checkKing(row+1,col-1)){}
            else{
                if(row-1>=0&&col+1<=7&&crossCheck(row-1,col+1)&&checker(BlackArray,arrayBox[row+1][col-1].innerHTML)==false){}
                else{
                    movable(row+1,col-1);
                }
            }
        }
        if(row-1>=0&&col+1<=7&&(arrayBox[row-1][col+1].innerHTML==""||checker(BlackArray,arrayBox[row-1][col+1].innerHTML))){
            if(Lcheck(row-1,col+1)||crossCheck(row-1,col+1)||checkRook(row-1,col+1)||pawnCheck(row-1,col+1)||checkKing(row-1,col+1)){}
            else{
                if(row+1<=7&&col-1>=0&&crossCheck(row+1,col-1)&&checker(BlackArray,arrayBox[row-1][col+1].innerHTML)==false){}
                else{
                    movable(row-1,col+1);
                }
            }
        }
        //cassling
        if(arrayBox[7][0].innerHTML=="whiteRook"&&row==7&&col==4&&!checkConditon()){
            let tempRow=row;
            let tempCol=col-1;
            while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
                tempCol--;
            if(tempCol==0){
                if(Lcheck(row,2)||crossCheck(row,2)||checkRook(row,2)||pawnCheck(row,2)){}
                else{
                    movable(row,2);
                    arrayBox[7][3].style.borderRadius="48px";
                }
            }
        }
        if(arrayBox[7][7].innerHTML=="whiteRook"&&row==7&&col==4&&!checkConditon()){
            let tempRow=row;
            let tempCol=col+1;
            while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
            console.log(tempCol);
            if(tempCol==7){
                if(Lcheck(row,6)||crossCheck(row,6)||checkRook(row,6)||pawnCheck(row,6)){}
                else{
                    movable(row,6);
                     arrayBox[7][5].style.borderRadius="48px";
                }
                
            }
        }
        /************************************************* */
    }
    else if(Turn==false&&checker(BlackArray,a)){
        
        if(row+1<=7&&(arrayBox[row+1][col].innerHTML==""||checker(WhiteArray,arrayBox[row+1][col].innerHTML))){
            if(Lcheck(row+1,col)||crossCheck(row+1,col)||checkRook(row+1,col)||pawnCheck(row+1,col)||checkKing(row+1,col)){}
            else{
                if(row-1>=0&&checkRook(row-1,col)&&checker(WhiteArray,arrayBox[row+1][col].innerHTML)==false){}
                else{
                    movable(row+1,col);
                }
            }
        }
        if(row-1>=0&&(arrayBox[row-1][col].innerHTML==""||checker(WhiteArray,arrayBox[row-1][col].innerHTML))){
            if(Lcheck(row-1,col)||crossCheck(row-1,col)||checkRook(row-1,col)||pawnCheck(row-1,col)||checkKing(row-1,col)){}
            else{
                if(row+1<=7&&checkRook(row+1,col)&&checker(WhiteArray,arrayBox[row-1][col].innerHTML)==false){}
                else{
                    movable(row-1,col);
                }
            }
        }
        if(col+1<=7&&(arrayBox[row][col+1].innerHTML==""||checker(WhiteArray,arrayBox[row][col+1].innerHTML))){
            if(Lcheck(row,col+1)||crossCheck(row,col+1)||checkRook(row,col+1)||pawnCheck(row,col+1)||checkKing(row,col+1)){}
            else{
                if(col-1>=0&&checkRook(row,col-1)&&checker(WhiteArray,arrayBox[row][col+1].innerHTML)==false){}
                else{
                    movable(row,col+1);
                }
            }
        }
        if(col-1>=0&&(arrayBox[row][col-1].innerHTML==""||checker(WhiteArray,arrayBox[row][col-1].innerHTML))){
            if(Lcheck(row,col-1)||crossCheck(row,col-1)||checkRook(row,col-1)||pawnCheck(row,col-1)||checkKing(row,col-1)){}
            else{
                if(col+1<=7&&checkRook(row,col+1)&&checker(WhiteArray,arrayBox[row][col-1].innerHTML)==false){}
                else{
                    movable(row,col-1);
                }
            }
        }
        if(row+1<=7&&col+1<=7&&(arrayBox[row+1][col+1].innerHTML==""||checker(WhiteArray,arrayBox[row+1][col+1].innerHTML))){
            if(Lcheck(row+1,col+1)||crossCheck(row+1,col+1)||checkRook(row+1,col+1)||pawnCheck(row+1,col+1)||checkKing(row+1,col+1)){}
            else{
                if(row-1>=0&&col-1>=0&&crossCheck(row-1,col-1)&&checker(WhiteArray,arrayBox[row+1][col+1].innerHTML)==false){}
                else{
                    movable(row+1,col+1);
                }
            }
        }
        if(row-1>=0&&col-1>=0&&(arrayBox[row-1][col-1].innerHTML==""||checker(WhiteArray,arrayBox[row-1][col-1].innerHTML))){
            if(Lcheck(row-1,col-1)||crossCheck(row-1,col-1)||checkRook(row-1,col-1)||pawnCheck(row-1,col-1)||checkKing(row-1,col-1)){}
            else{
                if(row+1<=7&&col+1<=7&&crossCheck(row+1,col+1)&&checker(WhiteArray,arrayBox[row-1][col-1].innerHTML)==false){}
                else{
                    movable(row-1,col-1);
                }
            }
        }
        if(row+1<=7&&col-1>=0&&(arrayBox[row+1][col-1].innerHTML==""||checker(WhiteArray,arrayBox[row+1][col-1].innerHTML))){
            if(Lcheck(row+1,col-1)||crossCheck(row+1,col-1)||checkRook(row+1,col-1)||pawnCheck(row+1,col-1)||checkKing(row+1,col-1)){}
            else{
                if(row-1>=0&&col+1<=7&&crossCheck(row-1,col+1)&&checker(WhiteArray,arrayBox[row+1][col-1].innerHTML)==false){}
                else{
                    movable(row+1,col-1);
                }
            }
        }
        if(row-1>=0&&col+1<=7&&(arrayBox[row-1][col+1].innerHTML==""||checker(WhiteArray,arrayBox[row-1][col+1].innerHTML))){
            if(Lcheck(row-1,col+1)||crossCheck(row-1,col+1)||checkRook(row-1,col+1)||pawnCheck(row-1,col+1)||checkKing(row-1,col+1)){}
            else{
                if(row+1<=7&&col-1>=0&&crossCheck(row+1,col-1)&&checker(WhiteArray,arrayBox[row-1][col+1].innerHTML)==false){}
                else{
                    movable(row-1,col+1);
                }
            }
        }
        //cassling
        if(arrayBox[0][0].innerHTML=="blackRook"&&row==0&&col==4&&!checkConditon()){
            let tempRow=row;
            let tempCol=col-1;
            while(tempCol>0&&arrayBox[tempRow][tempCol].innerHTML=="")
                tempCol--;
            if(tempCol==0){
                if(Lcheck(row,2)||crossCheck(row,2)||checkRook(row,2)||pawnCheck(row,2)){}
                else{
                    movable(row,2);
                    arrayBox[0][3].style.borderRadius="48px";
                }
            }
        }
        if(arrayBox[0][7].innerHTML=="blackRook"&&row==0&&col==4&&!checkConditon()){
            let tempRow=row;
            let tempCol=col+1;
            while(tempCol<7&&arrayBox[tempRow][tempCol].innerHTML=="")
            tempCol++;
            console.log(tempCol);
            if(tempCol==7){
                if(Lcheck(row,6)||crossCheck(row,6)||checkRook(row,6)||pawnCheck(row,6)){}
                else{
                    movable(row,6);
                     arrayBox[0][5].style.borderRadius="48px";
                }
                
            }
        }
        /************************************************* */
    }
}
function casslingCondition(row,col){
    if(row==0&&col==2&&arrayBox[0][3].style.borderRadius=="48px"){
        arrayBox[0][3].innerHTML="blackRook";
        arrayBox[0][0].innerHTML="";
    }
    else if(row==0&&col==6&&arrayBox[0][5].style.borderRadius=="48px"){
        arrayBox[0][5].innerHTML="blackRook";
        arrayBox[0][7].innerHTML="";
    }
    else if(row==7&&col==6&&arrayBox[7][5].style.borderRadius=="48px"){
        arrayBox[7][5].innerHTML="whiteRook";
        arrayBox[7][7].innerHTML="";
    }
    else if(row==7&&col==2&&arrayBox[7][3].style.borderRadius=="48px"){
        arrayBox[7][3].innerHTML="whiteRook";
        arrayBox[7][0].innerHTML="";
    }
}
//checkMate
function checkMate(){
    let Arr=Turn?WhiteArray:BlackArray;
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(checker(Arr,arrayBox[i][j].innerHTML)){
                if(arrayBox[i][j].innerHTML=="whitePawn"||arrayBox[i][j].innerHTML=="blackPawn")
                    pawnMove(i,j,arrayBox[i][j].innerHTML);
                else if(arrayBox[i][j].innerHTML=="whiteRook"||arrayBox[i][j].innerHTML=="blackRook")
                    rookMove(i,j,arrayBox[i][j].innerHTML);
                else if(arrayBox[i][j].innerHTML=="whiteKnight"||arrayBox[i][j].innerHTML=="blackKnight")
                    knightMove(i,j,arrayBox[i][j].innerHTML);
                else if(arrayBox[i][j].innerHTML=="whiteBishop"||arrayBox[i][j].innerHTML=="blackBishop")
                    bishopMove(i,j,arrayBox[i][j].innerHTML);
                else if(arrayBox[i][j].innerHTML=="whiteQueen"||arrayBox[i][j].innerHTML=="blackQueen"){
                    rookMove(i,j,arrayBox[i][j].innerHTML);
                    bishopMove(i,j,arrayBox[i][j].innerHTML);
                }
                else if(arrayBox[i][j].innerHTML=="whiteKing"||arrayBox[i][j].innerHTML=="blackKing"){
                    kingMove(i,j,arrayBox[i][j].innerHTML);     
                }
            }
        }
    }
    let count=0;
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(arrayBox[i][j].style.borderRadius=="50px"||arrayBox[i][j].style.borderRadius=="49px")
                count++;
        }
    }
    if(count==0)
        return true;

        restoreAll();
        return false;
}








let BlackArray = ["blackRook","blackKnight","blackBishop","blackQueen","blackKing","blackPawn"];
let WhiteArray = ["whiteRook","whiteKnight","whiteBishop","whiteQueen","whiteKing","whitePawn"];
arrayBox=[];
createDivAndArray();
colorBoard();
putValue();
backgroundSet();
let Turn=true;
let moveRow;
let moveCol;
ForPlayer();
for(let row=0;row<8;row++){
    for(let col=0;col<8;col++){
        arrayBox[row][col].addEventListener('click',(e)=>{
            if(e.target.innerHTML==""&&(arrayBox[row][col].style.borderRadius=="50px"||arrayBox[row][col].style.borderRadius=="49px")||
            (Turn&&checker(BlackArray,e.target.innerHTML)&&(arrayBox[row][col].style.borderRadius=="50px"||arrayBox[row][col].style.borderRadius=="49px"||arrayBox[7][5].style.borderRadius=="48px"))||
            !Turn&&checker(WhiteArray,e.target.innerHTML)&&(arrayBox[row][col].style.borderRadius=="50px"||arrayBox[row][col].style.borderRadius=="49px"||arrayBox[7][5].style.borderRadius=="48px")){
                point(arrayBox[row][col].innerHTML);
                move();
                casslingCondition(row,col);
                arrayBox[row][col].innerHTML=arrayBox[moveRow][moveCol].innerHTML;
                arrayBox[moveRow][moveCol].innerHTML="";
                Turn=!Turn;
                restoreAll();
                if(checkMate()){
                    clearInterval('click',()=>{});
                    alert(Turn?"White":"Black"+"checkMate");
                }  
            }
            else if(e.target.innerHTML=="blackPawn"||e.target.innerHTML=="whitePawn"){
                restoreAll();
                pawnMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            else if(e.target.innerHTML=="blackKnight"||e.target.innerHTML=="whiteKnight"){
                restoreAll();
                knightMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            else if(e.target.innerHTML=="blackBishop"||e.target.innerHTML=="whiteBishop"){
                restoreAll();
                bishopMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            else if(e.target.innerHTML=="blackRook"||e.target.innerHTML=="whiteRook"){
                restoreAll();
                rookMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            else if(e.target.innerHTML=="blackQueen"||e.target.innerHTML=="whiteQueen"){
                restoreAll();
                bishopMove(row,col,e.target.innerHTML);
                rookMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            else if(e.target.innerHTML=="blackKing"||e.target.innerHTML=="whiteKing"){
                restoreAll();
                kingMove(row,col,e.target.innerHTML);
                moveRow=row;
                moveCol=col;
            }
            ForPlayer();
            backgroundSet();
            if(checkConditon()){
                let KingRow=Locate(Turn?"whiteKing":"blackKing")[0];
                let KingCol=Locate(Turn?"whiteKing":"blackKing")[1];
                    arrayBox[KingRow][KingCol].style.backgroundColor="red";
            }
            else{
                colorBoard();
            }   
        })
    }
}
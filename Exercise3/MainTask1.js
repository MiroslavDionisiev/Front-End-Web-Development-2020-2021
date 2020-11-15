let A=[10,5,13,18,51];

function Task1(A)
{
    for(let i =0; i<A.length; i++)
    {
        console.log(A[i]);
    }
}

Task1(A)
/////////////////////////////

function Task2(A)
{   
    let B=[];
    for(let i = 0; i<A.length; i++)
    {
        B[i] = A[i];
    }
    for(let i = 0; i<A.length; i++)
    {
        B[i] *= 2;
    }
    return B;
}

let B =Task2(A);
/////////////////////////////

function Task3(A)
{
    let evenNumber = [];
    for(let i = 0; i<A.length; i++)
    {
        if(A[i]%2===0)
        {
            evenNumber.push(A[i]);
        }
    }
   
    return evenNumber;
}

let evenNumber = Task3(A);

/////////////////////
function Task4(A)
{
    for(let i = 0; i<A.length; i++)
    {
        if(A[i]<10)
        {
            return true
        }
    }
    return false;
}

let check = Task4(A);
/////////////////////////

function Task5(A)
{
    let temp=[];
    for(let i = 0; i<A.length; i++)
    {
        if(A[i]%3===0)
        {
            temp.push(A[i]);
        }
    }
    return temp;
}
let dividedBy3=Task5(A);
//////////////////////////////

function Task6(A)
{
    console.log(
        A.reduce((a, b) => a + b, 0)
      );
}

Task6(A);
///////////////////////////////

function Task7(A)
{
    let B =[];
    B=A.slice(A.length-2);
    return B;
}
let arr = Task7(A);
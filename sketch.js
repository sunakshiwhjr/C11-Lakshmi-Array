var marks = [30,40,45,35];

var sum =0
var avg =0;


//calculate average 

//define your own function
function marks_avg()
{

  for(var i=0; i<marks.length; i++)
  {
    sum = sum + marks[i];
    
  }

  console.log(sum);

  avg = sum/marks.length;
  console.log(avg);
 
}


//calling the function
marks_avg();


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(150);
}
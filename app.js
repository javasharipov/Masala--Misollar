//  IF ELSE MASALALARI
{
	// misol 1
	let n = 6
	if (n > 0) {
		n++
		console.log(n)
	} else {
		console.log(n)
	}
}

{
	// misol 2
	let n = 56
	if (n > 0) {
		n++
		console.log(n)
	} else {
		n -= 2
		console.log(n)
	}
}

{
	// misol 3
	let n = 0

	if (n > 0) {
		n++
	} else if (n < 0) {
		n -= 2
	} else {
		n = 10
	}
	console.log(n)
}

{

	// misol 4
	let n1 = 8,
		n2 = 16,
		n3 = -14,
		musbat = 0
	if (n1 > 0) {
		musbat++
	}
	if (n2 > 0) {
		musbat++
	}
	if (n3 > 0) {
		musbat++
	}
	console.log(musbat);
	
}



{
	// masala 5
	let n1 = 40	 , n2 = -12 , n3 = -120 , positive = 0 , negative = 0
	if (n1 > 0) {
		 positive++
	}else{
		negative++
	}
	if (n2 > 0) {
		 positive++
	}else{
		negative++
	}
	if (n3 > 0) {
		 positive++
	}else{
		negative++
	}
	console.log(`Positive numbers count: ${positive}, Negative numbers count: ${negative}`);
	
}
{
	// masala 6

	let c1 = 50 , c2 = 60
	if( c1 > c2){
		console.log(c1);
	}else{
			console.log(c2);
		
	}
}

{
	// masala 7 
  let a = 15
	let b = 10
	let smallestNumber
	let position //  <--- tartib raqamni anglatadi

	if (a < b) {
		smallestNumber = a
		position = 1
	}else if(b > a){
		smallestNumber = b
		position = 2
	}else{
		smallestNumber = a;
    position = 1; 
	}
  console.log(`Smallest number: ${smallestNumber}, Position: ${position}`);
	 
}



{
	// masala 8
  let a = 12 , b = 50

	if (a > b) {
		console.log(a);
		
	}else{
		console.log(b);
		
	}

}

{
  // masala 9
  
	
	
		let a = 11 ,
		b = 7
		if (a > b) {
			let changable = a
			a = b
			b = changable
		}
		console.log(`a: ${a}, B: ${b}`);
		 
		// manashu masalani chuqur tushunmadim chunki sharti tushunarsiz ekan 
		// lekin togri bajardim deb oylayman manashu misol haqida erpda comment qoldiring iltimos
	
}


{
	// misol 10
	let  c = 20 , b = 20

	if (c !== b) {
		let total  = c + b
		c = total
		b = total
	}else{
		c = 0
		b = 0
	}
	console.log(`c = ${c} , b = ${b}`);
	
}




//  SWITCH CASE
{
	// masala 1 (switch case)
	let day = 4 ,  result 
   
	switch(day){
		 case 1:	
		 result = "Dushanba"
		 break
		 case 2:	
		 result = "Seshanba"
		 break
		 case 3:	
		 result = "Chorshanba"
		 break
		 case 4:	
		 result = "Payshanba"
		 break
		 case 5:	
		 result = "Juma"
		 break
		 case 6:	
		 result = "Shanba"
		 break
		 case 7:	
		 result = "Yakshanba"
		 break
		 default:
			result = "Invalid day "
	}
	console.log(result);
	
}

{
  //  masala 2
   
  let month = 10
	switch(month){
		case 1:
		case 2:
		case 12:
			console.log("Winter");
			break
		case 3:
		case 4:
		case 5:
			console.log("Spring");
			break
		case 6:
		case 7:
		case 8:
			console.log("Summer");
			break
			case 9:
			case 10:
			case 11:
				console.log("Autumn");
	}
	
}



{

  //  masala 3

   let k = 7
	 switch(k){
		case 1:
			console.log("yomon");
			break
		case 2:
			console.log("qoniqarsiz");
			break
		case 3:
			console.log("qoniqarli");
			break
		case 4:
			console.log("yaxshi");
			break
		case 5:
			console.log("a`lo");
			break
			default:{
				console.log("Not existed grade");
				
			}
	 }
	
}


{
  //  masala 4
  let monthN = 2
	let day
	switch(monthN){
		case 1:
		day = 31
		break

		case 2: 
		day = 28
		break

		case 3: 
		day = 31
		break

		case 4: 
		day = 30
		break

		case 5: 
		day = 31
		break

		case 6: 
		day = 30
		break

		case 7: 
		day = 31
		break

		case 8: 
		day = 31
		break

		case 9: 
		day = 30
		break

		case 10: 
		day = 31
		break

		case 11: 
		day = 30
		break

		case 12: 
		day = 31
		break
		
		default:{
			console.log("Invalid month");
			
		}
	}

console.log(day);

}



{
//  masala 5
let a = 10; 
let b = 5;  
let operation = 3; 

let result; 


switch (operation) {
    case 1:
        result = a + b; 
        break;
    case 2:
        result = a - b; 
        break;
    case 3:
        result = a / b; 
        break;
    case 4:
        result = a * b;
        break;
    default:
        console.log("Invalid operation. Please enter a value between 1 and 4.");
        break;
}

// Output the result if it was successfully calculated
if (result !== undefined) {
    console.log(`Result: ${result}`);
}


}


{
	// masala 6
  let counts = 1; 
let length = 50; 

let lengthInMeters;

switch (counts) {
    case 1: 
        lengthInMeters = length * 0.1;
        break;
    case 2: 
        lengthInMeters = length * 1000;
        break;
    case 3: 
        lengthInMeters = length; 
        break;
    case 4: 
        lengthInMeters = length * 0.001;
        break;
    case 5: 
        lengthInMeters = length * 0.01;
        break;
    default:
        console.log("Invalid unit. Please enter a value between 1 and 5.");
}
console.log(`Length in meters: ${lengthInMeters}`);


}


{
	// masala 7
  let count = 3
	let weight = 5000

	let weightInKg

	switch (count) {
		case 1:
			 weightInKg = weight / 1000000 
			break;
		case 2:
			 weightInKg = weight / 1000
			break;
		case 3:
			 weightInKg = weight 
			break;
		case 4:
			 weightInKg = weight * 1000
			break;
		case 5:
			 weightInKg = weight * 100
			break;
			default:{
				console.log("Invalid count");
				
			}
		
		}
		console.log(`Weight in kilograms: ${weightInKg}`);

}


{ 
	// masala 8
let D = 31; 
let M = 2;  

let monthName;
let daysInMonth;


switch (M) {
    case 1:
        monthName = "January";
        daysInMonth = 31;
        break;
    case 2:
        monthName = "February";
        daysInMonth = 28; 
        break;
    case 3:
        monthName = "March";
        daysInMonth = 31;
        break;
    case 4:
        monthName = "April";
        daysInMonth = 30;
        break;
    case 5:
        monthName = "May";
        daysInMonth = 31;
        break;
    case 6:
        monthName = "June";
        daysInMonth = 30;
        break;
    case 7:
        monthName = "July";
        daysInMonth = 31;
        break;
    case 8:
        monthName = "August";
        daysInMonth = 31;
        break;
    case 9:
        monthName = "September";
        daysInMonth = 30;
        break;
    case 10:
        monthName = "October";
        daysInMonth = 31;
        break;
    case 11:
        monthName = "November";
        daysInMonth = 30;
        break;
    case 12:
        monthName = "December";
        daysInMonth = 31;
        break;
    default:
        monthName = "Invalid month";
        daysInMonth = 0; 
}


  console.log(`Day: ${D}, Month: ${monthName}, Days in Month: ${daysInMonth}`);

}


{
  //  masala 9
  // bu masalaning shartlari judayam tushunarsiz



}


{
	// masala 10
  

}



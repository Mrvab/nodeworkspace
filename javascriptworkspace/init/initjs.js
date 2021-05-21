// alert("hello");
// let msg = 'world',a=b=2,[c,d]=['a',4],z ={a:'28',b:33}  ;
// alert(msg+a+c+d);
// alert(5/0);


// let result;
// result = prompt("write ur name",["here"]);
// result1 = confirm(`is ur name ${result}`);
// if(result1 === true)alert(` name ${result} confirmed `);
// else alert(`name ${result} not confirmed`)

// conversition
// Number(); or +var_name
// eg let a="2" b ="3"; alert(+a + +b);
// String();
// Boolean();

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b);

//math
// ** exponential


// let message;

// (login == 'Employee')?message = 'Hello' : 
// (login == 'Director')?message = 'Greetings':
// (login == '')?message = 'No login' :
// message = '';

// let x = (1 && 2 && 1) ?? 3; // Works

// alert(x);

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

// let ask = (question, yes, no)=> {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "arrow you agree?",
//     () =>{ alert("arrow agreed."); },
//     ()=> { alert("arrow canceled the execution."); }
//   );
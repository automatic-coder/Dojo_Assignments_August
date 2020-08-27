/**
 * OBJECTS
 */
        //    0, 1, 2, 3, 4, 
 var myarr = [1,2,"Dojo", true, null, {}, [1,2,3,4]];

//  console.log(arr.[arr.length-1/2])


// Objects, Dictionary, Key:Value pairs, hashmaps, JSON
 var myObj = {
     'name':'bob',
     'siblings':{
         'sisters': [
             {
                 'name': 'pam',
                 'age':30,
                 'job': 'front desk'
             },
             {
                 'name': 'angela',
                 'age': 40
             },
             {
                 'name': 'phillis',
                 'age':50
             }
         ],
         'brothers': ['jim', 'ryan', 'stanley']
        }

 }; 
console.log(myObj['siblings']['sisters'][0]['name']);
console.log(myObj['siblings']['sisters'][0]['job']);
console.log(myObj);
console.log("name" , " - ", "asdf");

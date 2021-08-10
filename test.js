// x = 1
// y = 2

// function Total(){
//  console.log(x+y);
// }

// Total(x,y)

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
//   for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
//   }
  
//   forEach
  
//   companies.forEach(function(company) {
//     console.log(company.name);
//   });
  
  
  
// //   filter
  
// //   Get 21 and older
  
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//       canDrink.push(ages[i]);
//     }
//   }
   
  
  
//   const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//       return true;
//     }
//   });
  
//   const canDrink = ages.filter(age => age >= 21);
//   console.log(canDrink);
  
   
//   // Filter retail companies
  
//   const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//       return true;
//     }
//   });
  
//   console.log(retailCompanies);
  
//   const retailCompanies = companies.filter(company => company.category === 'Retail');
  
//   // Get 80s companies
  
//   const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  
//   const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  
//   console.log(eightiesCompanies);
//   // Get companies that lasted 10 years or more
  
//   const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
//   // map
  
//   // Create array of company names
//   // const companyNames = companies.map(function(company) {
//   //   return company.name;
//   // });
  
//   // const testMap = companies.map(function(company) {
//   //   return `${company.name} [${company.start} - ${company.end}]`;
//   // });
  
//   // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
//   // const ageMap = ages
//   //   .map(age => Math.sqrt(age))
//   //   .map(age => age * 2);
  
  
  
//   // sort
  
//   // Sort companies by start year
  
//   // const sortedCompanies  = companies.sort(function(c1, c2) {
//   //   if(c1.start > c2.start) {
//   //     return 1;
//   //   } else {
//   //     return -1;
//   //   }
//   // });
  
//   // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
//   // Sort ages
//   // const sortAges = ages.sort((a, b) => a - b);
  
//   // console.log(sortAges);
  
  
//   // reduce
  
//   let ageSum = 0;
//   for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
//   }
  
//   const ageSum = ages.reduce(function(total, age) {
//     return total + age;
//   }, 0);
  
//   const ageSum = ages.reduce((total, age) => total + age, 0);
  
//   console.log(ageSum)
  
//   // Get total years for all companies
  
//   const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
//   }, 0);
  
//   const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
//   console.log(totalYears)
  
// //   Combined Methods
  
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
  
//   console.log(combined);
  
//   console.log(ages);

// CALLBACKS

// const posts = [
//   {title: "one", body: "Body of One"},
//   {title: "two", body: "Body of Two"}
// ];

// function getPosts(){
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post,index) => {
//        output += `<li>${post.title}</li>`;
//     }); 
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
      
//       const error = false;
//       if (!error){
//         resolve();
//       }else{
//         reject("Error: Something went wrong");
//       }
//     }, 2000);
//   });

// }

// createPost({title: "three", body: "Body of Three" })
// .then(getePosts)
// .catch(err => console.log(err));


//Async / Await
// async function init(){
//   await createPost({title: "three", body: "Body of Three" });

//   getPosts();
// }

// init();

// Async/ Await with Fetch

// async function fetchUsers(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

// fetchUsers();

//BINDING 

// let a1 = {
//   x:1,
//   y:2
// }

// let b1 = {
//   x:10,
//   y:20
// }


// function log(){
//   console.log(this.x + ","+ this.y)
// }

// let afunc = log.bind(a1);
// afunc();
//Promis.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, "Goodbye")); 

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json());

// Promise.all ([promise1, promise2, promise3, promise4])
//   .then((values) => console.log(values));

sentence = "TheQuickBrownFoxJumpsOverTheLazyDog."

function capitalize(){
  let set = sentence.split(/(?=[A-Z])/).join(' ');
  console.log(set.substring(0,3).toUpperCase()+ set.slice(3));
}

capitalize();



// DROP DATABASE IF EXISTS galileo_exam;
// CREATE DATABASE galileo_exam;
// USE galileo_exam;

// CREATE TABLE `employees` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT,
//   `name` varchar(255) DEFAULT NULL,
//   `date_hired` datetime DEFAULT NULL,
//   `department_id`bigint(20) DEFAULT NULL,
//   `salary_id`bigint(20) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );
// INSERT INTO `employees` VALUES (1,'Employee1','2017-10-07',3,1),(2,'Employee2','2012-10-08',2,3),(3,'Employee3','2016-08-10',1,2),(4,'Employee4','2018-08-10',3,2);


// CREATE TABLE `departments` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT,
//   `department` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// INSERT INTO `departments` VALUES (1,'Marketing'),(2,'Consultancy'),(3,'IT');


// CREATE TABLE `salary` (
//   `id` bigint(20) NOT NULL AUTO_INCREMENT,
//   `salary` bigint(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// INSERT INTO `salary` VALUES (1,10000),(2,15000),(3,20000);


// a. Select * FROM employees INNER JOIN salary on salary.id = employees.salary_id INNER JOIN departments on departments.id = employees.department_id WHERE salary = 20000;
// b.Select * FROM employees WHERE (date_hired BETWEEN '2017-10-07'AND '2018-08-10');
// c. Select * FROM employees INNER JOIN departments on departments.id = employees.department_id WHERE department = "IT" AND year(date_hired)='2018' 


// Galileo PHP EXAM

// <?php

// $i=1;
// $num = 0;

// while($i<=10)
// {
//     if ($i % 2 == 0){
//      $num = $num + $i;
//     }
// $i++;
// }

// echo $num;
// ?>



// <?php

// $i = 0;

// $odd="Odd Numbers Are : ";

// do {
//     if($i%2 == 1) {
//      $odd.= $i;
//     }
//     $i++;
// }while ($i <= 10);

// echo $odd;
 
// ?>



// <?php  
// $num = 0;  
// $n1 = 0;  
// $n2 = 1;  
// echo $n1.' '.$n2.' ';  
// while ($num < 8 )  
// {  
//     $n3 = $n2 + $n1;  
//     echo $n3.' ';  
//     $n1 = $n2;  
//     $n2 = $n3;  
//     $num = $num + 1;  
// }
// ?>  

// Fetching API
// fetch("data.json")
//     .then(resp => resp.json())
//     .then(data => console.log(data));
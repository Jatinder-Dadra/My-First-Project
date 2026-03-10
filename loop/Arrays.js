//let marks = [78, 66, 98, 45, 55];
  //  console.log(marks);
    //console.log(marks.length);

    //Looping over on arrays

   // let heroes = ["ironman", "Thor", "Hulk", "Spiderman", "Shakitman"];

    //for (let i = 0; i < heroes.length; i++){
      //  console.log(heroes[i].toUpperCase());
    //}

    // for a given array with marks of studants-> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.

    //let studantsMarks = [85, 97, 44, 37, 76, 60];

   // let sum = 0;

   // for (let val of studantsMarks){
    //    sum += val;
   // }
   // let avg = sum / studantsMarks.length;
   // console.log(`avg marks of the class = ${avg}`);

   // 2 For a given with prices of 5 items -> [250, 645, 900, 300, 50]. All items have an offer of 10% offer them change the array to stare final prices after applying offer.

   let items = [250, 645, 900, 300, 50];
   let i = 0;
   for (let val of items){
    console.log(val);
    let offer = val / 25;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
   }

   
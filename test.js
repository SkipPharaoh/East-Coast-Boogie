let foundCity =
{
    
    name: 'Atlanta',
    categories: [
      {
        
        name: 'Piedmont Park',
        location: 'Midtown',
        hours: '6am to 11pm',
        payForEntrance: false,
        category: 'landmarks',
        __v: 0
      },
      {
        
        name: 'Centennial Olympic Park',
        location: 'Downtown',
        hours: '24hours',
        payForEntrance: false,
        category: 'landmarks',
        __v: 0
      },
      {
       
        name: 'Georgia Aquarium',
        location: 'Downtown',
        hours: '9am to 6pm',
        payForEntrance: true,
        category: 'landmarks',
        __v: 0
      },
      {
       
        name: 'Atlanta Zoo',
        location: 'Grant Park',
        hours: '9am to 3:30pm',
        payForEntrance: true,
        category: 'landmarks',
        __v: 0
      },
      {
      
        name: 'Stone Mountain Park',
        location: 'Stone Mountain',
        hours: 'Closed Indefinitely',
        payForEntrance: false,
        category: 'landmarks',
        __v: 0
      },
      {
       
        name: 'Slutty Vegan',
        location: 'Inman Park',
        hours: '12pm to Midnight',
        payForEntrance: false,
        category: 'placesToEat',
        __v: 0
      },
      {
       
        name: 'The Varsity',
        location: 'Midtown',
        hours: '11am to 8pm',
        payForEntrance: false,
        category: 'placesToEat',
        __v: 0
      },
      {
        
        name: 'Waffle House',
        location: 'Corners all over',
        hours: '24 hours',
        payForEntrance: false,
        category: 'placesToEat',
        __v: 0
      },
      {
        
        name: "Hattie B's Hot Chicken",
        location: 'Little 5 Points',
        hours: '11am to 10pm',
        payForEntrance: false,
        category: 'placesToEat',
        __v: 0
      },
      {
        
        name: 'House In The Park',
        location: 'Piedmont Park',
        hours: '7pm to Midnight from April to October every Saturday',
        payForEntrance: false,
        category: 'events',
        __v: 0
      },
      {
        
        name: 'Trap Brunch',
        location: 'Flying Biscuit Cafe',
        hours: '10am to 3:30pm every Saturday',
        payForEntrance: false,
        category: 'events',
        __v: 0
      }
    ],
    __v: 1
  }
  
let placesToEat = []
let placesToSee = []
let thingsToDo = []

// Loop over foundCity.categories and if its a landmark = placesToSee
// restaurants = placesToEat
// events = thingsToDo

for(let i = 0; i < foundCity.categories.length; i++) {
    if(foundCity.categories[i].category === 'landmarks') {
        placesToSee.push(foundCity.categories[i])
    } else if (foundCity.categories[i].category === 'placesToEat') {
        placesToEat.push(foundCity.categories[i])
    } else {
        thingsToDo.push(foundCity.categories[i])
    }
}

console.log(placesToSee)
console.log(placesToEat)
console.log(thingsToDo)
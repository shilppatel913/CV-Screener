console.log('working')

//cv screener
//collecting some data using api 
//for now we will be creating raw data 

const data=[
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

//make iterator to access data one by one

function cvIterator(profiles){
    let nextIndex=0
    return{
        next:function(){
            if(nextIndex<profiles.length){
                return{
                    value:profiles[nextIndex++],
                    done:false
                }
            }
            else{
                return{
                    value:undefined,
                    done:true
                }
            }
        }
    }
}

let candidate=cvIterator(data);
// console.log(candidate.next().value);
let image=document.getElementById('image');
let profile=document.getElementById('profile')

let next=document.getElementById('next');
next.addEventListener('click',function(){
    let current_candidate=candidate.next().value;
    image.innerHTML=`<img src='${current_candidate.image}'>`;
    profile.innerHTML=`<ul>
    <li>${current_candidate.name}</li>
    <li>${current_candidate.age}</li>
    <li>${current_candidate.city}</li>
    <li>${current_candidate.language}</li>
    <li>${current_candidate.framework}</li>
    </ul>`
    
});


resturantList = [
    {
        id:1,
        resturantName :'KFC',
        address: 'Anand Vihar',
        city :'Delhi',
    },
    {
        id:2,
        resturantName :'Dominos',
        address: 'Savita Vihar',
        city :'Delhi',
    },
    {
        id:3,
        resturantName :'Burger king',
        address: 'Civil Lines',
        city :'Pune',
    },
    {
        id:4,
        resturantName :'Subway',
        address: 'Cantonment',
        city :'Mumbai',
    },
];

let usersData =[
    {
        userId:1,
        id:1,
        title:'fugiat aut autem',
        completed :false,
    },
    {
        userId:1,
        id:2,
        title:'quis ut nam facilis et officia qui',
        completed :false,
    },
    {
        userId:1,
        id:3,
        title:'fugiat veniam minus',
        completed :false,
    },
    {
        userId:1,
        id:4,
        title:'et porro tempora',
        completed :false,
    },
    {
        userId:1,
        id:5,
        title:'laborarism mollitia et enim ',
        completed :false,
    },
    {
        userId:1,
        id:6,
        title:'fugiat',
        completed :false,
    },
];

const getData = () => {
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve(usersData);
        },3000);

    });
    return myPromise;
};

const myFun = async () => {
    const x = await getData();
    console.log(x);
    x.map((item)=>{
        console.log(item.title);
    });
};

myFun();

// spread operator

const spreadFunction = () => {
    let newArr =[...resturantList,[1,2,3]];
    console.log(newArr);
};

spreadFunction();

// rest operator

const restFunction = (...args) => {
    args.map((ele)=> {
        console.log(ele);
    });
};

restFunction(...resturantList);


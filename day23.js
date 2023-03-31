class EmployeeData {
    emp1 = {
        name: 'Rahul',
        empId:3567,
        mailId: 'maime@gmail.com',
        Address: {
            'city name':'Vijaywada',
            district : 'Krishna District',
            pin : 526894,
        },
        Hobbies: ['Netflix','Tennis','coding'],
    };

    emp2 = {
        name: 'Ravi',
        empId:9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            'city name':"Guntur",
            district : 'Prakasham District',
            pin : 685479,
        },
        Hobbies: ['Reading','Swimming','Banking'],
    };
    emp3 = {
        name: 'Santosh',
        empId:8876,
        mailId: 'santosh@gmail.com',
        Address: {
            'city name':'Warangal',
            District : 'Hanamkonda District',
            pin : 996587,
        },
        Hobbies: ['Gym','Reading Novels',],
    };
    emp4 = {
        name: 'Surya',
        empId:3469,
        mailId: 'surya@gmail.com',
        Address: {
            'city name':'Nazamabad',
            District : 'Nazamaba District',
            pin : 666954,
        },
        Hobbies: ['Badminton','E-Sport','Netflix'],
    };
    emp5 = {
        name: 'Kiran',
        empId:8864,
        mailId: 'kiran@gmail.com',
        Address: {
            city:'Karimnagar',
            District : 'Karimnagar District',
            pin : 666954,
        },
        Hobbies: ['Gaming','Cooking','Music'],
    };
};

const empData = new EmployeeData();
const body= document.querySelector('#body');
console.log(body);

const mainbox = document.createElement('div');
mainbox.className='mainbox';
body.appendChild(mainbox);

Object.keys(empData).map((emp, index) => {
    const empbox = document.createElement('div');
    empbox.className = `emp${index + 1}`;

    const h2 = document.createElement('h2');
    h2.innerHTML = `Name:${empData[emp].name}`;

    const h3 = document.createElement('h3');
    h3.innerHTML = `Employee Id:${empData[emp].empId}`;

    const addBox = document.createElement('div');
    addBox.className = 'addressBox';

    const h32 = document.createElement('h3');
    h32.innerHTML = 'Address:';

    addBox.appendChild(h32);

    Object.keys(empData[emp].Address).map((add) => {
        const addComp = document.createElement('p');
        addComp.innerHTML = `<b>${add}:</b>${empData[emp].Address}`;

        addBox.append(addComp);
    });

    const hobbies = document.createElement('p');
    const hobHeading = document.createElement('span');
    hobHeading.innerHTML =`<strong>Hobbies:</strong>`;

    hobbies.appendChild(hobHeading);

    empData[emp].Hobbies.map((hobby,index)=> {
        const hobbiesLength = empData[emp].Hobbies.length;
        const eachHobby = document.createElement('span');

        if (index+1 !== hobbiesLength) {
            eachHobby.innerHTML= `${hobby},`;
        } else {
            eachHobby.innerHTML = `${hobby}.`;
        }

        hobbies.appendChild(eachHobby);
    });

    empbox.appendChild(h2);
    empbox.appendChild(h3);
    empbox.appendChild(addBox);
    empbox.appendChild(hobbies);
    mainbox.appendChild(empbox); 
   });

console.log(Object.keys(empData));
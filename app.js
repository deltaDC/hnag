


const ul = document.querySelector('#list')
const btn = document.querySelector('.btn')
let randidx = []
isAppear = false

btn.addEventListener('click', () => {
    // clear ul child
    while(ul.firstChild)
    {
        ul.removeChild(ul.lastChild)
    }
    while(randidx.length !== 3)
    {
        let randNum = Math.floor(Math.random() * Point1.length)
        console.log(randNum)
        for(let num of randidx)
        {
            if(num === randNum) 
            {
                isAppear = true
            }
        }
        if(isAppear === false)
        {
            randidx.push(randNum)
        }
        isAppear = false
    }
    for(let idx of randidx)
    {
        let food = Point1[idx]
        const newLI = document.createElement('LI')
        newLI.innerText = food
        newLI.style.color = 'white'
        newLI.style.textDecoration = 'none'
        newLI.style.listStyle = 'none'
        newLI.style.fontSize = '1.4rem'
        newLI.style.marginTop = '1.4rem'
        ul.append(newLI)
    }
    randidx.length = 0
})

const Point1 = [
    'Gà Luộc', 'Xúc Xích Rán', 'Gà Tây Hun Khói', 'Gà Ủ Muối', 'Gà Rang Muối', 'Gà Kho Lá Chanh',
    'Gà Hấp', 'Trứng Rán', 'Tim Gà', 'Trứng cà chua', 'Thịt lợn hầm', 'Chả lụa rán', 'Thịt Băm',
    'Mực Xào', 'Tôm Chiên', 'Thịt Lợn Quay', 'Khoai Tây Chiên', 'Ngao Hấp', 'Thịt Bò Xào', 'Sườn Xào Chua Ngọt',
    'Dậu Phụ Nhồi Thịt', 'Tim Lợn Xào', 'Trứng Vịt Lộn', 'Sườn rán', 'Thịt Băm Sốt Cà Chua', ''
]

const Point3 = [
    'Pizza', 'Tự Gọi Đồ', 'Gà Rán', 'Mì tôm', 'Donner', 'Cơm rang'
]

// const menu = [
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: 'Nướng',
//         point: 3
//     },
//     {
//         name: 'Gà luộc',
//         point: 3
//     },
//     {
//         name: 'Xúc xích rán',
//         point: 3
//     },
//     {
//         name: 'Gà tây hun khói',
//         point: 3
//     },
//     {
//         name: 'Gà ủ muối',
//         point: 3
//     },
//     {
//         name: 'Gà rán',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
//     {
//         name: '',
//         point: 3
//     },
// ]
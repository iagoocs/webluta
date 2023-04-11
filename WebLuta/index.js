let log = new Log(document.querySelector('.log'))

let p1 = new Knight('Iago')
let p2 = new BigMonster()

console.log(p1.name)

const stage = new Stage (
    p1,
    p2,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()


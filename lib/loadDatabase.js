import config from "../config.js"


export default function loadDatabase(m) {
    const isNumber = x => typeof x === "number" && !isNaN(x)
    const isBoolean = x => typeof x === "boolean" && Boolean(x)
    let user = global.db.users[m.sender]
    if (typeof user !== "object") global.db.users[m.sender] = {}
    if (user) {
        if (!isBoolean(user.premium)) user.premium = m.isOwner ? true : false
        if (!isBoolean(user.VIP)) user.VIP = m.isOwner ? true : false
        if (!("lastChat" in user)) user.lastChat = new Date * 1
        if (!("name" in user)) user.name = m.pushName
        
        //Main Itsm
        if (!("name2" in user)) user.name2 = ''
        if (!isBoolean(user.terdaftar)) user.terdaftar = false
        if (!isNumber(user.coin)) user.coin = 100
        if (!isNumber(user.health)) user.health = 0
        if (!isNumber(user.level)) user.level = 0
        if (!isNumber(user.sword)) user.sword = 0
        if (!isNumber(user.armor)) user.armor = 0
        if (!isNumber(user.shield)) user.shield = 0
        if (!isNumber(user.spear)) user.spear = 0
        if (!isNumber(user.bow)) user.bow = 0
           
        //Random Itsm
        if (!isNumber(user.stone)) user.stone = 0
        if (!isNumber(user.wood)) user.wood = 0
        if (!isNumber(user.grass)) user.stone = 0
        if (!isNumber(user.kain)) user.kain = 0
        if (!isNumber(user.iron)) user.iron = 0
        if (!isNumber(user.emas)) user.emas = 0
        
    } else {
        global.db.users[m.sender] = {
            lastChat: new Date * 1,
            premium: m.isOwner ? true : false,
            VIP: m.isOwner ? true : false,
            name: m.pushName,
            
            //Main Item
            name2: '',
            terdaftar: false,
            coin: 100,
            health: 0,
            level: 0,
            sword: 0,
            armor: 0,
            shield: 0,
            spear: 0,
            bow: 0,
            
            //Random Item
            stone: 0,
            wood: 0,
            kain: 0,
            iron: 0,
            emas: 0,
        }
    }

    if (m.isGroup) {
        let group = global.db.groups[m.from]
        if (typeof group !== "object") global.db.groups[m.from] = {}
        if (group) {
            if (!isBoolean(group.mute)) group.mute = false
            if (!isNumber(group.lastChat)) group.lastChat = new Date * 1
            if (!isBoolean(group.welcome)) group.welcome = true
            if (!isBoolean(group.leave)) group.leave = true
            
            if (!isBoolean(group.wtc)) group.wtc = false
            if (!isNumber(group.hargaminyak)) group.hargaminyak = 0
            if (!isNumber(group.hargabesi)) group.hargabesi = 0
            if (!isNumber(group.hargatembaga)) group.hargatembaga = 0
            if (!isNumber(group.hargabatubara)) group.hargabatubara = 0
            if (!isNumber(group.hargagasalam)) group.hargagasalam = 0
            if (!isNumber(group.hargamaterialkomposit)) group.hargamaterialkomposit = 0
            if (!("news" in group)) group.news = ''
        } else {
            global.db.groups[m.from] = {
                lastChat: new Date * 1,
                mute: false,
                welcome: true,
                leave: true,

                wtc: false,
                hargaminyak: 0,
                hargabesi: 0,
                hargatembaga: 0,
                hargabatubara: 0,
                hargagasalam: 0,
                hargamaterialkomposit: 0,
                news: ''
                
            }
        }
    }
}
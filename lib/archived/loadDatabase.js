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
        if (!isBoolean(user.banned)) user.banned = false

        if (!isBoolean(user.terdaftar)) user.terdaftar = false

        if (!isNumber(user.money)) user.money = 0
        if (!isNumber(user.income)) user.income = 0
        if (!isNumber(user.outcome)) user.outcome = 0
        if (!isNumber(user.happiness)) user.happiness = 50
        if (!isNumber(user.kepadatan)) user.kepadatan = 50

        if (!isNumber(user.landzone)) user.landzone = 0
        if (!isNumber(user.populationzone)) user.populationzone = 0
        if (!isNumber(user.industrialzone)) user.industrialzone = 0
        if (!isNumber(user.commercialzone)) user.commercialzone = 0

        if (!isNumber(user.population)) user.population = 0
        if (!isNumber(user.industrialworker)) user.industrialworker = 0
        if (!isNumber(user.commercialworker)) user.commercialworker = 0

        if (!isNumber(user.listrik)) user.listrik = 0
        if (!isNumber(user.air)) user.air = 0
        if (!isNumber(user.sampah)) user.sampah = 0
        if (!isNumber(user.polisi)) user.polisi = 0
        if (!isNumber(user.damkar)) user.damkar = 0
        if (!isNumber(user.hospital)) user.hospital = 0

        if (!isNumber(user.listrik)) user.listrik = 0
        if (!isNumber(user.air)) user.air = 0
        if (!isNumber(user.sampah)) user.sampah = 0
        if (!isNumber(user.polisi)) user.polisi = 0
        if (!isNumber(user.damkar)) user.damkar = 0
        if (!isNumber(user.hospital)) user.hospital = 0

        if (!isNumber(user.choper)) user.choper = 0
        if (!isNumber(user.besi)) user.besi = 0
        if (!isNumber(user.batubara)) user.batubara = 0
        if (!isNumber(user.minyak)) user.minyak = 0
        if (!isNumber(user.gasbumi)) user.gasbumi = 0
        if (!isNumber(user.makanan)) user.makanan = 0
        if (!isNumber(user.materialkomposit)) user.materialkomposit = 0

        if (!isNumber(user.choperp)) user.choperp = 0
        if (!isNumber(user.besip)) user.besip = 0
        if (!isNumber(user.batubarap)) user.batubarap = 0
        if (!isNumber(user.minyakp)) user.minyakp = 0
        if (!isNumber(user.gasbumip)) user.gasbumip = 0
        if (!isNumber(user.makananp)) user.makananp = 0
        if (!isNumber(user.materialkompositp)) user.materialkompositp = 0

        if (!isNumber(user.choperc)) user.choperc = 0
        if (!isNumber(user.besic)) user.besic = 0
        if (!isNumber(user.batubarac)) user.batubarac = 0
        if (!isNumber(user.minyakc)) user.minyakc = 0
        if (!isNumber(user.gasbumic)) user.gasbumic = 0
        if (!isNumber(user.makananc)) user.makananc = 0
        if (!isNumber(user.materialkompositc)) user.materialkompositc = 0
        if (!isNumber(user.efekperangdagang)) user.efekperangdagang = 0
        if (!isNumber(user.jedaperangdagang)) user.jedaperangdagang = 0
        if (!isNumber(user.jedagiliran)) user.jedagiliran = 0
        if (!isNumber(user.jedabangunan)) user.jedabangunan = 0

        if (!isNumber(user.barrak)) user.barrak = 0
        if (!isNumber(user.pabrikkendaraan)) user.pabrikkendaraan = 0
        if (!isNumber(user.pabrikrudal)) user.pabrikrudal = 0
        if (!isNumber(user.galangan)) user.galangan = 0
        if (!isNumber(user.pabrikpesawat)) user.pabrikpesawat = 0
        if (!isNumber(user.gudangamunisi)) user.gudangamunisi = 0
        if (!isNumber(user.pabrikaa)) user.pabrikaa = 0

        //infantri
        if (!isNumber(user.teknologipasukan)) user.teknologipasukan = 0
        if (!isNumber(user.infantri)) user.infantri = 0
        if (!isNumber(user.specialforces)) user.specialforces = 0
        
        //Tank
        if (!isNumber(user.teknologitank)) user.teknologitank = 0
        if (!isNumber(user.tank)) user.tank = 0
        if (!isNumber(user.mediumtank)) user.mediumtank = 0
        if (!isNumber(user.heavytank)) user.heavytank = 0
        
        //Altileri
        if (!isNumber(user.teknologialtileri)) user.teknologialtileri = 0
        if (!isNumber(user.altileri)) user.altileri = 0
        if (!isNumber(user.selfpropeledaltileri)) user.selfpropeledaltileri = 0
        if (!isNumber(user.rocketaltileri)) user.rocketaltileri = 0
        
        //Anti-Aircraft
        if (!isNumber(user.teknologiaa)) user.teknologiaa = 0
        if (!isNumber(user.aa)) user.aa = 0
        if (!isNumber(user.aamissile)) user.aamissile = 0
        if (!isNumber(user.aalaser)) user.aalaser = 0
        
        //Aircraft
        if (!isNumber(user.teknologipesawat)) user.teknologipesawat = 0
        if (!isNumber(user.drone)) user.drone = 0
        if (!isNumber(user.helikopter)) user.helikopter = 0
        if (!isNumber(user.fighter)) user.fighter = 0
        if (!isNumber(user.bomber)) user.bomber = 0
        if (!isNumber(user.stealth)) user.stealth = 0
        
        //Warship
        if (!isNumber(user.teknologikapal)) user.teknologikapal = 0
        if (!isNumber(user.fregat)) user.fregat = 0
        if (!isNumber(user.destroyer)) user.destroyer = 0
        if (!isNumber(user.crusier)) user.crusier = 0
        if (!isNumber(user.battlecrusier)) user.battlecrusier = 0
        if (!isNumber(user.battleship)) user.battleship = 0
        if (!isNumber(user.submarine)) user.submarine = 0
        if (!isNumber(user.cv)) user.cv = 0
        
        //Missile
        if (!isNumber(user.teknologirudal)) user.teknologirudal = 0
        if (!isNumber(user.rudal)) user.rudal = 0
        if (!isNumber(user.longrudal)) user.longrudal = 0
        if (!isNumber(user.balistikrudal)) user.balistikrudal = 0
        if (!isNumber(user.hypersonicrudal)) user.hypersonicrudal = 0
        if (!isNumber(user.balistiknukerudal)) user.balistiknukerudal = 0
        if (!isNumber(user.hypersonicnukerudal)) user.hypersonicnukerudal = 0


        if (!("countryname" in user)) user.countryname = ''
        if (!("countrygov" in user)) user.gov = 'belum dipilih'
        if (!("countrycapital" in user)) user.countrycapital = 'belum dipilih'
        if (!("countryideology" in user)) user.countryideology = 'belum dipilih'
        if (!("countryleader" in user)) user.countryleader = 'tidak diketahui'
        if (!("countryreligion" in user)) user.countryreligion = 'belum dipilih'
        if (!("countrymotto" in user)) user.countrymotto = 'belum dipilih'
        if (!("perang" in user)) user.perang = ''
        if (!("aliansi" in user)) user.aliansi = ''
        if (!isBoolean(user.aliansileader)) user.aliansileader = false
        if (!isBoolean(user.inaliansi)) user.inaliansi = false
        if (!isNumber(user.indexmiliter)) user.indexmiliter = 1
        
        if (!isNumber(user.teknologi)) user.teknologi = 1
        if (!isNumber(user.teknologiareaindustri)) user.teknologiareaindustri = 1
        if (!isNumber(user.teknologiareakomersil)) user.teknologiareakomersil = 1
        if (!isNumber(user.teknologiareapopulasi)) user.teknologiareapopulasi = 1
        if (!isNumber(user.teknologibangunan)) user.teknologibangunan = 1
        if (!isNumber(user.teknologimiliter)) user.teknologimiliter = 1
        if (!isNumber(user.teknologiinfra)) user.teknologiinfra = 1
        if (!isNumber(user.pusatpenelitian)) user.pusatpenelitian = 0
        if (!isNumber(user.sekolah)) user.sekolah = 0
       
    } else {
        global.db.users[m.sender] = {
            lastChat: new Date * 1,
            premium: m.isOwner ? true : false,
            VIP: m.isOwner ? true : false,
            name: m.pushName,
            banned: false,
            
            terdaftar: false,

            money: 0,
            income: 0,
            outcome: 0,
            happiness: 50,
            kepadatan: 0,

            landzone: 0,
            populationzone: 0,
            industrialzone: 0,
            commercialzone: 0,
            
            population: 0,
            industrialworker: 0,
            commercialworker: 0,

            listrik: 0,
            air: 0,
            sampah: 0,
            polisi: 0,
            damkar: 0,
            hospital: 0,
            food: 0,

            choper: 0,
            besi: 0,
            batubara: 0,
            minyak: 0,
            gasbumi: 0,
            materialkomposit: 0,

            choperp: 0,
            besip: 0,
            batubarap: 0,
            minyakp: 0,
            gasbumip: 0,
            makananp: 0,
            materialkompositp: 0,

            choperc: 0,
            besic: 0,
            batubarac: 0,
            minyakc: 0,
            gasbumic: 0,
            makananc: 0,
            materialkompositc: 0,
            efekperangdagang: 0,
            jedaperangdagang: 0,
            jedagiliran: 0,

            barrak: 0,
            pabrikkendaraan: 0,
            pabrikrudal: 0,
            galangan: 0,
            pabrikpesawat: 0,
            pabrikaa: 0,
            gudangamunisi: 0,
            jedabangunan: 0,
 
            //Infantri
            teknologipasukan: 0,
            infantri: 0,
            specialforces: 0,
            
            //Tank
            teknologitank: 0,
            tank: 0,
            mediumtank: 0,
            heavytank: 0,
            
            //Altileri
            teknologialtileri: 0,
            altileri: 0,
            selfpropeledaltileri: 0,
            rocketaltileri: 0,
            
            //Anti-Aircraft
            teknologiaa: 0,
            aa: 0,
            aamissile: 0,
            aalaser: 0,
            
            //Aircraft
            teknologipesawat: 0,
            fighter: 0,
            bomber: 0,
            stealth: 0,
            helikopter: 0,
            
            //Warship
            teknologikapal: 0,
            fregat: 0,
            destroyer: 0,
            crusier: 0,
            battlecrusier: 0,
            battleship: 0,
            submarine: 0,
            cv: 0,
            
            //Missile
            teknologirudal: 0,
            rudal: 0,
            longrudal: 0,
            balistikrudal: 0,
            hypersonicrudal: 0,
            balistiknukerudal: 0,
            hypersonicnukerudal: 0,
            
            countryname: '',
            countrygov: 'belum dipilih',
            countrycapital: 'belum dipilih',
            countryideology: 'belum dipilih',
            countryleader: 'tidak diketahui',
            countryreligion: 'belum dipilih',
            countrymotto: 'belum dipilih',

            perang: '',
            aliansi: '',
            aliansileader: false,
            inaliansi: false,
            indexmiliter: 1,
            koalisidagang: '',
            
            teknologi: 0,
            teknologiareaindustri: 0,
            teknologiareakomersil: 0,
            teknologiareapopulasi: 0,
            teknologibangunan: 0,
            teknologimiliter: 0, 
            teknologiinfra: 0,
            pusatpenelitian: 0,
            sekolah: 0,
            
            investasi: 0,
            hasilinvestasi: 0,
            waktuinvestasi: 0,
            sektordipilih: 0,
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
// Note For User
// Set all settings in the file config.js including the list menu 
// for others pay to me. jas kiding
// jangan diperjualbelikan dalam keadaan masih ori hisoka. minimal tambah 5-8 command dulu

import config from "../config.js"
import Func from "../lib/function.js"

import fs from "fs"
import chalk from "chalk"
import axios from "axios"
import path from "path"
import { getBinaryNodeChildren } from "@whiskeysockets/baileys"
import { exec } from "child_process"
import { format } from "util"
import { fileURLToPath } from "url"
import { createRequire } from "module"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const __filename = Func.__filename(import.meta.url)
const require = createRequire(import.meta.url)



export default async function Message(hisoka, m, chatUpdate) {
    try {
        if (!m) return
        if (!config.options.public && !m.isOwner) return
        if (m.from && db.groups[m.from]?.mute && !m.isOwner) return
        if (m.isBaileys) return

        if (!m.isOwner) return

        (await import("../lib/loadDatabase.js")).default(m)

        const prefix = m.prefix
        const isCmd = m.body.startsWith(prefix)
        const command = isCmd ? m.command.toLowerCase() : ""
        const quoted = m.isQuoted ? m.quoted : m

        // LOG Chat
        if (m.message && !m.isBaileys) {
            console.log(chalk.black(chalk.bgWhite("- FROM")), chalk.black(chalk.bgGreen(m.pushName)), chalk.black(chalk.yellow(m.sender)) + "\n" + chalk.black(chalk.bgWhite("- IN")), chalk.black(chalk.bgGreen(m.isGroup ? m.metadata.subject : "Private Chat", m.from)) + "\n" + chalk.black(chalk.bgWhite("- MESSAGE")), chalk.black(chalk.bgGreen(m.body || m.type)))
        }
        
        function msg(teks) {
            hisoka.sendMessage(m.from,{text:teks,contextInfo:{mentionedJid:hisoka.parseMention(teks),externalAdReply:{title:'☰ OPEN-AI BOT',mediaType:1,previewType:0,renderLargerThumbnail:false,sourceUrl: 'www.youtube.com' }}},{ quoted: m })
        }
        
        let user = global.db.users[m.sender]
        

        switch (command) {

            //menu
            case "menu": case "menu": {
                msg(`Ini adalah bot WhatsApp yang diintegrasikan dengan api open-ai, kamu dapat menggunakan perintah /ai untuk mengakses chat dengan ai.`)
            }
            break
            case "ai": {
                if(!m.text) return msg(`Contoh: /ai apa itu matahari.`)
                let anu = await fetch(`https://aemt.me/openai?text=${m.text}`);
                let data = await anu.json();
                msg(data.result);
            }            
            break                
            /* Umm, maybe for non command */
            default:
                // ini eval ya dek
                if ([">>>", "eval", "=>"].some(a => m.body?.toLowerCase()?.startsWith(a))) {
                    if (!m.isOwner) return m.reply("owner")
                    let evalCmd = ""
                    try {
                        evalCmd = /await/i.test(m.text) ? eval("(async() => { " + m.text + " })()") : eval(m.text)
                    } catch (e) {
                        evalCmd = e
                    }
                    new Promise(async (resolve, reject) => {
                        try {
                            resolve(evalCmd);
                        } catch (err) {
                            reject(err)
                        }
                    })
                        ?.then((res) => m.reply(format(res)))
                        ?.catch((err) => m.reply(format(err)))
                }

                // nah ini baru exec dek
                if (["$$$", "exec"].some(a => m.body?.toLowerCase()?.startsWith(a))) {
                    if (!m.isOwner) return m.reply("owner")
                    try {
                        exec(m.text, async (err, stdout) => {
                            if (err) return m.reply(Func.format(err))
                            if (stdout) return m.reply(Func.format(stdout))
                        })
                    } catch (e) {
                        m.reply(Func.format(e))
                    }
                }

                // cek bot active or no
                if (/^bot/i.test(m.body)) {
                    //m.reply(`Bot Activated "${m.pushName}"`)
                }
        }
    } catch (e) {
        m.reply(format(e))
    }
}

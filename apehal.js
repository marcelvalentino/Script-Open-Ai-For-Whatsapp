import fs from "fs";

const namakoalisi = 'WTO';

try {
  // Membaca file JSON
  const rawData = fs.readFileSync('./temp/coalition.json');
  const initialData = JSON.parse(rawData);

  // Menyimpan data di objek global
  global.dbs = {
    koalisi: initialData.koalisi
  };

  // Mengedit nilai dalam objek global
  if (global.dbs.koalisi[namakoalisi]) {
    global.dbs.koalisi[namakoalisi].money += 100; // Mengganti nilai uang
  } else {
    throw new Error(`Koalisi dengan nama '${namakoalisi}' tidak ditemukan`);
  }

  // Menyimpan perubahan kembali ke file
  const updatedData = JSON.stringify(global.dbs, null, 2);
  fs.writeFileSync('./temp/coalition.json', updatedData);

  // Pemanggilan dengan global.dbs
  const currentMoney = global.dbs.koalisi[namakoalisi].money;
  console.log(`Current money for coalition '${namakoalisi}': ${currentMoney}`);
} catch (error) {
  
}

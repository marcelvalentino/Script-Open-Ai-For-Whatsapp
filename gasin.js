import mysqldump from 'mysqldump';

// Konfigurasi database
const dbConfig = {
  host: '204.10.192.68',
  user: 'u223_XIc6ax5aFl',
  password: 'Xu.cY3Y8gJF!=5mvqsYl4V+a',
  database: 's223_alternate_samp',
};

// Nama file backup
const backupFile = `backup_${new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '')}.sql`;

// Melakukan backup
mysqldump({
  connection: dbConfig,
  dumpToFile: backupFile,
}).then(() => {
  console.log(`Backup completed: ${backupFile}`);
}).catch((err) => {
  console.error('Error during backup:', err);
});

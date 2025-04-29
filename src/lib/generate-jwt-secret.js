const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const generateJWTSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

const updateEnvFile = () => {
  const jwtSecret = generateJWTSecret();
  const envFilePath = path.resolve(__dirname, '../../.env');

  fs.readFile(envFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Gagal membaca file .env. Pastikan file .env tersedia di root project.");
      console.error(err);
      return;
    }

    let updatedEnv = data;

    const jwtSecretRegex = /^JWT_SECRET=(.*)$/m;
    const match = data.match(jwtSecretRegex);

    if (match) {
      const currentSecret = match[1].trim();
      if (currentSecret) {
        console.log("ℹ️  JWT_SECRET sudah tersedia dan memiliki nilai di file .env. Tidak ada perubahan yang dilakukan.");
      } else {
        updatedEnv = data.replace(jwtSecretRegex, `JWT_SECRET="${jwtSecret}"`);
        fs.writeFile(envFilePath, updatedEnv, 'utf8', (err) => {
          if (err) {
            console.error("❌ Gagal memperbarui nilai JWT_SECRET di file .env.");
            console.error(err);
          } else {
            console.log("✅ Nilai kosong pada JWT_SECRET berhasil diisi otomatis.");
          }
        });
      }
    } else {
      const newEnvData = data + `\nJWT_SECRET="${jwtSecret}"\n`;
      fs.writeFile(envFilePath, newEnvData, 'utf8', (err) => {
        if (err) {
          console.error("❌ Gagal menambahkan JWT_SECRET ke file .env.");
          console.error(err);
        } else {
          console.log("✅ JWT_SECRET berhasil ditambahkan ke file .env.");
        }
      });
    }
  });
};

updateEnvFile();

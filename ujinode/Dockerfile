# Menggunakan gambar Node.js versi 14 sebagai dasar
FROM node:14

# Membuat folder kerja dalam gambar Docker
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke dalam gambar
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh proyek Anda ke dalam gambar
COPY . .

# Mengekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "ujinode.js"]



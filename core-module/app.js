const fs = require(`fs`)
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukan nama anda: ', (nama)=> {
    rl.question('masukan alamat: ', (alamat)=> {
        const contact = {nama, alamat};
        const file = fs.readFileSync('data.json', 'utf-8');
        const files = JSON.parse(file);
        
        files.push(contact);

        fs.writeFile('data.json', JSON.stringify(files), (err)=>{
            if (err) throw err;
            console.log('berhasil masukan data');
        });
        rl.close();
    });
});

// fs.writeFile('nama.txt', `nama: ${nama}, alamat: ${alamat}`, (err) => {
//     if (err) throw err;
//     console.log('data berhasil disimpan');
// });

// fs.readFile('nama.txt', 'utf-8', (err, data)=>{
//     if (err) throw err;
//     console.log(data);

// });
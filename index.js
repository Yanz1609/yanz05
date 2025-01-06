const { writeFile } = require('fs');
const http = require('http');
const os = require('os');

// Lấy thông tin hệ thống
var information = {
    OSType: os.type(),
    Platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.totalmem() - os.freemem(),
    CPU: os.cpus()
};

// Tạo server HTTP
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(information, null, 2));
});

const hostname = '127.0.0.1';
const port = 4000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Ghi thông tin vào file
writeFile('D:\\Homework\\homework.txt', JSON.stringify(information, null, 2), (err) => {
    if (err) {
        console.log('Lỗi khi ghi file:', err);
        return;
    }
    console.log('Thông tin hệ thống đã được lưu vào D:\\Homework\\homework.txt');
});

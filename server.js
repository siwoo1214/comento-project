// server.js

// http 모듈을 로드합니다.
const http = require('http');

// 서버의 포트를 정의합니다.
const port = 3000;

// 요청을 처리할 서버를 생성합니다.
const server = http.createServer((req, res) => {
    // 응답 헤더를 설정합니다.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 응답 본문을 작성합니다.
    res.end('Hello, World!\n');
});

// 서버를 시작하고 지정된 포트에서 수신 대기합니다.
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

function sum(a,b){
    
}
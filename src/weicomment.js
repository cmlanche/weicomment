const iframe = document.createElement('iframe');
iframe.src = '//cdn.jsdelivr.net/npm/weicomment@latest/dist/index.html';
iframe.style = 'width: 100%;height: 100%;border: none;min-height: 300px;';

try {
    document.getElementById('weicomment').appendChild(iframe);
} catch (e) {
    // pass
}

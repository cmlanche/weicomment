const iframe = document.createElement('iframe');
let weiCommentId;
try {
    weiCommentId = document.querySelector('[data-weicomment-id]').getAttribute('data-weicomment-id');
} catch(e) {
    // pass
}

if (weiCommentId) {
    iframe.src = '//unpkg.com/weicomment@latest/dist/index.html#' + JSON.stringify({id: weiCommentId});
    iframe.style = 'width: 100%;height: 100%;border: none;min-height: 500px;';
    
    try {
        document.getElementById('weicomment').appendChild(iframe);
    } catch (e) {
        // pass
    }
}

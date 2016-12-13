function route(handle, pathname,response) {
    console.log("About to route a request for " + pathname);
    // 先检查给定的路径对应的请求处理程序是否存在，
    // 如果存在的话直接调用相应的函数

    if (typeof handle[pathname] === 'function'){
        handle[pathname](response);
    }else{
        console.log("No requestHandlers found for " + pathname)
        response.writeHead(404, { "Content-Type":"text/plain"});
        response.write("404 NOT found")
        response.end();
    }
}

exports.route = route;
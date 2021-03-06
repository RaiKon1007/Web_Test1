import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        servercom(_response);
    }
    
    async function servercom(_response: Http.ServerResponse): Promise<void> {
        let url: string = "https://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>_response);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let info: string = await response.text();
        console.log(info);
    }
}

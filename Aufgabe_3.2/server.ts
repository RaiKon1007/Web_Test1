
import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";

export namespace Aufgabe09 {
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
    let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
    _response.setHeader("Access-Control-Allow-Origin", "*");

/*
    switch (urlWithQuery.pathname) {
      case "/html":
        createHtmlResponse(_response, urlWithQuery.query);
        break;
      case "/json":
        createJSONResponse(_response, urlWithQuery.query);
        break;
      default:
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write(_request.url);
    }
    */
    if (urlWithQuery.pathname == "/html") {
      createHtmlResponse(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/json") {
      createJSONResponse(_response, urlWithQuery.query);
    }
    _response.end();
  }

  function createHtmlResponse(_response: Http.ServerResponse, _query: ParsedUrlQuery): void {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let resultHTML: string = "";
    for (let q in _query) {
      resultHTML += `<p>${q}: ${_query[q]}</p>`;
    }
    _response.write(resultHTML);
  }
  function createJSONResponse(_response: Http.ServerResponse, _query: ParsedUrlQuery): void {
    _response.setHeader("content-type", "application/json");
    let jsonString: string = JSON.stringify(_query);
    _response.write(jsonString);
  }
}


/*
  //Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
    //Diesen Code innerhalb von einem aktiven Server testen:

    let adresse: string = "http://localhost:8080/default.htm?jahr=2017&monat=february";
    //Adresse parsen (umwandeln):
    let q = url.parse(adresse, true);

    /*Die parse Methode gibt ein Objekt zur??ck, dass die URL Eigenschaften enth??lt. So k??nnen die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    //console.log(q.host); //returns 'localhost:8080' -> Mithilfe von .host bekommt man den host name und die Nummer des ports 
    //console.log(q.pathname); //returns '/default.htm'
    //console.log(q.search); //returns '?year=2017&month=february'


/*Die query Eigenschaft gibt ein Ojekt zur??ck, dass alle query-string Parameter als Eigenschaften besitzt. So k??nnen beliebig gesendete Attribute ausgelesen werden:*/
    //var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    //console.log(qdata.monat); //returns 'february'
    //console.log(qdata.jahr); //returns jahr 2017 

//}

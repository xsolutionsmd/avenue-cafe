"""Exercise directory redirects against the actual static-site runtime."""
import http.client
import json
import sys
from urllib.parse import urljoin, urlsplit


def check_routes(base):
    target = urlsplit(base)
    connection_type = (http.client.HTTPSConnection if target.scheme == "https"
                       else http.client.HTTPConnection)
    cases = []

    def request(method, path, headers=None):
        connection = connection_type(target.hostname, target.port, timeout=10)
        try:
            connection.request(method, path, headers=headers or {})
            response = connection.getresponse()
            return response.status, response.getheader("Location"), response.read()
        finally:
            connection.close()

    # Match the HTTPS edge -> HTTP:8080 backend arrangement, without contacting
    # any public site. A relative Location preserves each public scheme and host.
    for host in ("avenuecafe.xsolutionsmd.com", "d-avenuecafe.xsolutionsmd.com",
                 "a-avenuecafe.xsolutionsmd.com"):
        headers = {"Host": host, "X-Forwarded-Proto": "https"}
        for route in ("/menu", "/visit"):
            for query in ("", "?from=home&value=a%20b"):
                path = route + query
                expected = route + "/" + query
                for method in ("GET", "HEAD"):
                    status, location, _ = request(method, path, headers)
                    if status != 301 or location != expected:
                        raise AssertionError(
                            f"{method} {host}{path}: expected 301 Location {expected!r}; "
                            f"got {status} Location {location!r}")
                    public = urljoin("https://" + host + path, location)
                    if public != "https://" + host + expected:
                        raise AssertionError(f"Redirect changed public origin: {public}")
                    final_status, final_location, body = request(method, location, headers)
                    if final_status != 200 or final_location or (method == "GET" and not body):
                        raise AssertionError(f"Redirect target failed: {host}{location}")
                    cases.append({"host": host, "method": method, "path": path,
                                  "status": status, "location": location,
                                  "final_status": final_status})
    status, location, _ = request("GET", "/missing-route")
    if status != 404 or location:
        raise AssertionError("Unknown route must remain a real 404 without a redirect")
    cases.append({"path": "/missing-route", "status": status, "location": location})
    print(json.dumps({"base": base, "cases": cases, "passed": len(cases)}))
    return cases


if __name__ == "__main__":
    check_routes(sys.argv[1])

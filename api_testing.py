import requests
import time
import json

BASE_URL = "http://localhost:3000"


def print_response(name, res):
    print(f"\n{name}")
    print(f"Status Code: {res.status_code}")

    try:
        print("JSON Response:")
        print(json.dumps(res.json(), indent=4))
    except requests.exceptions.JSONDecodeError:
        print("Response was not valid JSON:")
        print(res.text)


def test_get_all_trips() -> bool:
    endpoint = "/api/trips"

    res = requests.get(f"{BASE_URL}{endpoint}")
    print_response("GET all trips", res)

    return res.status_code == 200


def test_get_one_trip() -> bool:
    trip_code = "GALR210214"
    endpoint = f"/api/trips/{trip_code}"

    res = requests.get(f"{BASE_URL}{endpoint}")
    print_response("GET one trip", res)

    return res.status_code == 200


def test_post_add_trip() -> bool:
    endpoint = "/api/trips"

    payload = {
        "code": "MEGR220119",
        "name": "Mega Reef",
        "length": "6 nights / 7 days",
        "start": "2026-05-22T08:00:00Z",
        "resort": "Test Resort",
        "perPerson": "9999.00",
        "image": "test.jpg",
        "alt": "Test trip image",
        "description": "<p> This is a test trip. </p>"
    }

    res = requests.post(f"{BASE_URL}{endpoint}", json=payload)
    print_response("POST add trip", res)

    return res.status_code in [200, 201]


def run_tests() -> bool:
    if not test_get_all_trips():
        return False

    if not test_get_one_trip():
        return False

    if not test_post_add_trip():
        return False

    return True


def main() -> None:
    start = time.time()

    if run_tests():
        print("\nTesting Success")
    else:
        print("\nTesting Failed")

    end = time.time()
    print(f"Program took {end - start} seconds.")


if __name__ == "__main__":
    main()

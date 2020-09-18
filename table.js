companies = [{
        "id": 1,
        "name": "Google",
        "email": "hi@google.com",
        "phone": 09011234,
        "location": "Dublin"

    },
    {
        "id": 2,
        "name": "Facebook",
        "email": "hi@facebook.com",
        "phone": 09011245,
        "location": "New Jersey"

    },
    {
        "id": 3,
        "name": "Apple",
        "email": "hi@apple.com",
        "phone": 09011256,
        "location": "California"

    },
    {
        "id": 4,
        "name": "Oracle",
        "email": "hi@oracle.com",
        "phone": 09011278,
        "location": "Nigeria"
    }

]

companies[4] = {
    "id": 5,
    "name": "Tiktok",
    "email": "hi@tiktok.com",
    "phone": 09011289,
    "location": "China"
}

document.getElementById("content").innerHTML = `<table>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Location</th>
</tr>
<tbody>
${companies.map(
(x) => `<tr>
        <td>${x.id}</td>
        <td>${x.name}</td>
        <td>${x.email}</td>
        <td>${x.phone}</td>
        <td>${x.location}</td>
    </tr>`
)}
</tbody>
</table>`
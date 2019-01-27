var data = {
    "id": "5bb39cc62a148f0b09ac726a",
    "socialHandle": "garg.s1",
    "phone": "919800195867",
    "name": "shivam garg",
    "photoUrl": "https://pay.google.com/about/static/images/social/knowledge_graph_logo.png",
    "registeredProviders": [
        "FACEBOOK",
        "GOOGLE",
        "INSTAGRAM"
    ],
    "socialAccounts": [
        {
            "provider": "FACEBOOK",
            "accountId": "nenjddfdvwwsaascvsvdvdvcdvvfvfvfeewscnll",
            "connections": null,
            "displayName": "shivam Garg",
            "email": null,
            "photoUrl": "jndjsdjsjj.com",
            "profileUrl": null
        },
        {
            "provider": "GOOGLE",
            "accountId": "nenjddfdvwwsaascfddfsffcdvvfvfvfeewscnll",
            "connections": null,
            "displayName": "shivam Garg",
            "email": null,
            "photoUrl": "jndjsdjsjrdj.com",
            "profileUrl": null
        },
        {
            "provider": "INSTAGRAM",
            "accountId": "nenjddfdvwwsaasccdvvsffrfrfrssvvvvfvfvfeewscnll",
            "connections": null,
            "displayName": "shivam Garg",
            "email": null,
            "photoUrl": "jndjsdededjsjj.com",
            "profileUrl": null
        }
    ],
    "emailId": "garg.s@hmail.com",
    "registered": true,
    "socialWorth": "0",
    "privacySettings": {
        "phone": {
            "exposed": "false",
            "verified": "true"
        },
        "email": {
            "exposed": "false",
            "verified": "false"
        },
        "photoUrl": {
            "exposed": "true",
            "verified": "false"
        },
        "FACEBOOK": {
            "exposed": "true",
            "verified": "false"
        },
        "GOOGLE": {
            "exposed": "true",
            "verified": "false"
        },
        "INSTAGRAM": {
            "exposed": "true",
            "verified": "false"
        }
    }
}

var p = document.getElementsById('imageprofile');
p.src = data.photoUrl;
console.log(data);
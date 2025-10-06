function toTokens(input){
    let output = input.toLowerCase();
    output = output.replace(/[^a-z12]/g, "");
    output = output.split('');
    return output;
}

function calculateLikeness(tokens1, tokens2){
    let score = 0;
    for (let i in tokens1){
        let token = tokens1[i];
        if (contains(token,tokens2)){
            score++;
        }
    }
    return score;
}

function contains(inputToken,tokens) {
    for(let i in tokens) {
        let token = tokens[i];
        if (token === inputToken){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////

const book1 = {
    name: "Genesis",
    testament: "Old Testament",
    section: "Pentateuch",
    chapters: {
        1: [
            { vs: 1, text: "In the beginning God created the heavens and the earth."},
            { vs: 2, text: "The earth was formless and empty, and darkness covered the deep waters. And the Spirit of God was hovering over the surface of the waters."},
            { vs: 3, text: "Then God said, \"Let there be light,\" and there was light."},
            { vs: 4, text: "And God saw that the light was good. Then he separated the light from darkness."},
            { vs: 5, text: "God called the light \"day\" and the darkness \"night.\" And evening passed and morning came, marking the first day."},
        ],
        2 : [
            { vs: 1, text: "So the creation of the heavens and the earth and everything in them was completed."},
            { vs: 2, text: "On the seventh day, God had finished his work of creation, so he rested from all his work"},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        49 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        50 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book2 = {
    name: "Exodus",
    testament: "Old Testament",
    section: "Pentateuch",
    chapters: {
        1 : [
            { vs: 1, text: "These are the names of the sons of Israel (that is, Jacob) who moved to Egypt with their father, each with his family: "},
            { vs: 2, text: "Reuben, Simeon, Levi, Judah, "},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book3 = {
    name: "Leviticus",
    testament: "Old Testament",
    section: "Pentateuch",
    chapters: {
        1 : [
            { vs: 1, text: "The Lord called to Moses from the Tabernacle and said to him, "},
            { vs: 2, text: "\"Give the following instructions to the people of Israel. When you present an animal as an offering to the Lord, you may take it from your herd of cattle or your flock of sheep and goats.\""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book4 = {
    name: "Numbers",
    testament: "Old Testament",
    section: "Pentateuch",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book5 = {
    name: "Deuteronomy",
    testament: "Old Testament",
    section: "Pentateuch",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book6 = {
    name: "Joshua",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book7 = {
    name: "Judges",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book8 = {
    name: "Ruth",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book9 = {
    name: "1 Samuel",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book10 = {
    name: "2 Samuel",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book11 = {
    name: "1 Kings",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book12 = {
    name: "2 Kings",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book13 = {
    name: "1 Chronicles",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book14 = {
    name: "2 Chronicles",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book15 = {
    name: "Ezra",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book16 = {
    name: "Nehemiah",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book17 = {
    name: "Tobit",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book18 = {
    name: "Judith",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book19 = {
    name: "Esther",
    testament: "Old Testament",
    section: "History",
    chapters: {
        "A" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        "B" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        "C" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        "D" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        "E" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        "F" : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book20 = {
    name: "1 Maccabees",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book21 = {
    name: "2 Maccabees",
    testament: "Old Testament",
    section: "History",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book22 = {
    name: "Job",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book23 = {
    name: "Psalms",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        49 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        50 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        51 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        52 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        53 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        54 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        55 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        56 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        57 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        58 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        59 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        60 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        61 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        62 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        63 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        64 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        65 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        66 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        67 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        68 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        69 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        70 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        71 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        72 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        73 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        74 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        75 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        76 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        77 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        78 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        79 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        80 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        81 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        82 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        83 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        84 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        85 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        86 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        87 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        88 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        89 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        90 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        91 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        92 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        93 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        94 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        95 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        96 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        97 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        98 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        99 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        100 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        101 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        102 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        103 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        104 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        105 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        106 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        107 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        108 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        109 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        110 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        111 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        112 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        113 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        114 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        115 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        116 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        117 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        118 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        119 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        120 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        121 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        122 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        123 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        124 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        125 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        126 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        127 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        128 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        129 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        130 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        131 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        132 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        133 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        134 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        135 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        136 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        137 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        138 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        139 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        140 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        141 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        142 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        143 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        144 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        145 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        146 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        147 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        148 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        149 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        150 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
    }
};
const book24 = {
    name: "Proverbs",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book25 = {
    name: "Ecclesiastes",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book26 = {
    name: "Song of Songs",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book27 = {
    name: "Wisdom",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
    }
};
const book28 = {
    name: "Sirach (Ecclesiasticus)",
    testament: "Old Testament",
    section: "Wisdom & Poetry",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        49 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        50 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        51 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book29 = {
    name: "Isaiah",
    testament: "Old Testament",
    section: "Major Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        49 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        50 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        51 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        52 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        53 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        54 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        55 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        56 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        57 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        58 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        59 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        60 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        61 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        62 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        63 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        64 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        65 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        66 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book30 = {
    name: "Jeremiah",
    testament: "Old Testament",
    section: "Major Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        49 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        50 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        51 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        52 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book31 = {
    name: "Lamentations",
    testament: "Old Testament",
    section: "Major Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book32 = {
    name: "Baruch",
    testament: "Old Testament",
    section: "Prophetic Book",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book33 = {
    name: "Ezekiel",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        15 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        16 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        17 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        18 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        19 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        20 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        21 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        22 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        23 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        24 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        25 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        26 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        27 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        28 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        29 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        30 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        31 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        32 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        33 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        34 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        35 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        36 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        37 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        38 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        39 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        40 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        41 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        42 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        43 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        44 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        45 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        46 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        47 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        48 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book34 = {
    name: "Daniel",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book35 = {
    name: "Hosea",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
    }
};
const book36 = {
    name: "Joel",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book37 = {
    name: "Amos",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book38 = {
    name: "Obadiah",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book39 = {
    name: "Jonah",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book40 = {
    name: "Micah",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book41 = {
    name: "Nahum",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book42 = {
    name: "Habakkuk",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book43 = {
    name: "Zephaniah",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book44 = {
    name: "Haggai",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book45 = {
    name: "Zechariah",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        5 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        6 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        7 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        8 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        9 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        10 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        11 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        12 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        13 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        14 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ]
    }
};
const book46 = {
    name: "Malachi",
    testament: "Old Testament",
    section: "Minor Prophet",
    chapters: {
        1 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        2 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        3 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
        4 : [
            { vs: 1, text: ""},
            { vs: 2, text: ""},
        ],
    }
};
const book47 = {
    name: "Matthew",
    testament: "New Testament",
    section: "Gospel",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book48 = {
    name: "Mark",
    testament: "New Testament",
    section: "Gospel",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book49 = {
    name: "Luke",
    testament: "New Testament",
    section: "Gospel",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book50 = {
    name: "John",
    testament: "New Testament",
    section: "Gospel",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book51 = {
    name: "Acts of the Apostles",
    testament: "New Testament",
    section: "History",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book52 = {
    name: "Romans",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book53 = {
    name: "1 Corinthians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book54 = {
    name: "2 Corinthians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book55 = {
    name: "Galatians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book56 = {
    name: "Ephesians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book57 = {
    name: "Philippians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book58 = {
    name: "Colossians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book59 = {
    name: "1 Thessalonians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book60 = {
    name: "2 Thessalonians",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book61 = {
    name: "1 Timothy",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book62 = {
    name: "2 Timothy",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book63 = {
    name: "Titus",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book64 = {
    name: "Philemon",
    testament: "New Testament",
    section: "Pauline Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book65 = {
    name: "Hebrews",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book66 = {
    name: "James",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book67 = {
    name: "1 Peter",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book68 = {
    name: "2 Peter",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book69 = {
    name: "1 John",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book70 = {
    name: "2 John",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book71 = {
    name: "3 John",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book72 = {
    name: "Jude",
    testament: "New Testament",
    section: "General Epistle",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};
const book73 = {
    name: "Revelation",
    testament: "New Testament",
    section: "Prophecy",
    chapters: {
        1 : [
        { vs: 1, text: ""},
        { vs: 2, text: ""},
        ],
    }
};

const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book16, book17, book18, book19, book20, book21, book22, book23, book24, book25, book26, book27, book28, book29, book30, book31, book32, book33, book34, book35, book36, book37, book38, book39, book40, book41, book42, book43, book44, book45, book46, book47, book48, book49, book50, book51, book52, book53, book54, book55, book56, book57, book58, book59, book60, book61, book62, book63, book64, book65, book66, book67, book68, book69, book70, book71, book72, book73];



/////////////////////////////////////////

function start() {
    
    let verseInput = prompt("What is the verse you are looking for?");
    console.log(verseInput);
    verseInput = verseInput.replace(/\s+/g, " ").trim();
    verseInput = verseInput.replace(/[^A-Za-z\s0-9:]/g, "");
    
    let match = verseInput.match(/^(\d?\s?[A-Za-z ]+)\s+([A-Za-z0-9]+):(\d+)$/);

    if (match) {
        var [, bookInput, chIndex, vsIndex] = match;
        var result = [bookInput, chIndex.toUpperCase(), vsIndex];
        console.log(result);
    }
    
    let inputTokens = toTokens(bookInput);

    let maxScore = 0;
    let maxBook = null;
    for (let i in books) {
        let book = books[i];
        let bookTokens = toTokens(book.name);
        let score = calculateLikeness(inputTokens, bookTokens);
        console.log(score);
        if (score>maxScore){
            maxScore = score;
            maxBook = book;
        }
    }
    console.log(maxBook.name);
    console.log(maxBook.name + " is a great book from the " + maxBook.testament + "!");
    
    if (maxBook.chapters[chIndex]) {
        console.log("You chose: Chapter " + chIndex);
    } else {
        console.log("That is not a chapter in " + maxBook.name + ". Please try again!");
    }
    
    if (!isNaN(vsIndex) && maxBook.chapters[chIndex] && maxBook.chapters[chIndex][vsIndex - 1]) {
        console.log("You chose: " + maxBook.name + " " + chIndex + ":" + vsIndex);
        console.log("(" + vsIndex + ") " + maxBook.chapters[chIndex][vsIndex - 1].text + " - " + maxBook.name + " " + chIndex + ":" + vsIndex);
    } else {
        console.log("That verse doesn't exist. Please try again!");
    }
}
const mongoose = require('mongoose');

// Define the info schema
const aboutSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    section: { type: String, required: true },
    body: { type: String, required: true }
});

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// Define the suite schema
const suiteSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    rate: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// Define the food schema
const foodSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// Define the story schema
const storySchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true }
});

// Define the information schema
const informationSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    section: { type: String, required: true },
    body: { type: String, required: true }
});

// Define the contact info schema
const contactinfoSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    fax: { type: String, required: true }
});

//mongoose.model("trips", tripSchema);
module.exports = mongoose.model("about", aboutSchema);
module.exports = mongoose.model("trips", tripSchema);
module.exports = mongoose.model("suites", suiteSchema);
module.exports = mongoose.model("foods", foodSchema);
module.exports = mongoose.model("stories", storySchema);
module.exports = mongoose.model("information", informationSchema);
module.exports = mongoose.model("contactinfo", contactinfoSchema);
let {people} = require('../data');

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = {
        id: people.length + 1,
        name: name
    };
    people.push(newPerson);
    res.status(201).json({ success: true, name: name });
};

const getPeople = (req, res) => {
    res.json(people);
};

const getPersonById = (req, res) => {
    const personId = parseInt(req.params.id);
    const person = people.find(p => p.id === personId);

    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }

    res.status(200).json(person);
};

const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id);
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    let personUpdated = false;
    people.forEach(person => {
        if (person.id === personId) {
            person.name = name;
            personUpdated = true;
        }
    });

    if (!personUpdated) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }

    res.status(200).json({ success: true, name: name });
};

const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id);
    const initialLength = people.length;
    const updatedPeople = people.filter(person => person.id !== personId);

    if (updatedPeople.length === initialLength) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    people = updatedPeople;
    res.status(200).json({ success: true, message: "Person deleted successfully" });
};

module.exports = {addPerson, getPeople, getPersonById, updatePerson, deletePerson};

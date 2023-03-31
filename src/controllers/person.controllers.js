import { personRepository } from "../models/person.js";

export const createPerson = async (req, res) => {
  const { firstname, lastname, age, email, password } = req.body;
  try {
    const data = {
      firstname,
      lastname,
      age,
      email,
      password,
    };

    const person = await personRepository.createAndSave(data);

    return res.status(201).json({
      message: 'User created successfully',
      person,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllPersons = async (req, res) => {
  try {
    const persons = await personRepository.search().return.all();

    return res.status(200).json({ 
      message: 'All Users',
      persons });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await personRepository.fetch(id);
    if (person.email === null) {
      return res
        .status(400)
        .json({ message: 'User does not exist' });
    }
    await personRepository.remove(id);

    return res
      .status(200)
      .json({
        message: 'User deleted successfully',
      });
  } catch (error) {
    return res.status(500).json({  message: error.message });
  }
};
